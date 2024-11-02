import type {
  Address,
  ContractCallerFunctions,
  SignTypedDataContractCallerFn,
  StaticContractCallerFn,
  TransactionContractCallerFn,
} from '../../types';
import type {
  // type JsonRpcResponse,
  // type Web3PromiEvent,
  // providers,
  // ContractMethodSend,
  // type Contract,
  // ContractMethod,
  // AbiFunctionFragment,
  // ContractMethod,
  PayableCallOptions,
  // Web3EventMap,
  Web3BaseProvider,
  AbiItem,
} from 'web3';
import type Web3 from 'web3';
import type {
  // ContractSendMethod,
  // SendOptions,
  // CallOptions,
  PayableTxOptions,
  // Contract,
} from 'web3-eth-contract';
import { assert } from 'ts-essentials';
import { assertWeb3ContractHasMethods, Web3ContractSendMethod } from '../misc';
import { findPrimaryType } from './helpers';

// export type Web3UnpromiEvent = Pick<
//   Web3PromiEvent<any, Web3EventMap>,
//   'on' | 'once'
// >;

type ContractMethodRes = ReturnType<Web3ContractSendMethod>;
export type Web3UnpromiEvent = Pick<
  ReturnType<ContractMethodRes['send']>,
  'on' | 'once'
>;

type SendOptions = PayableTxOptions;
type CallOptions = PayableCallOptions;

export const constructContractCaller = (
  web3: Web3,
  account?: Address
): ContractCallerFunctions<Web3UnpromiEvent> => {
  const staticCall: StaticContractCallerFn = async (params) => {
    assert(web3.currentProvider, 'web3.currentProvider is not set');

    const { address, abi, contractMethod, args, overrides } = params;

    const contract = new web3.eth.Contract(
      abi as AbiItem[], // FIXME abi types ethers dependant
      address
    );

    assertWeb3ContractHasMethods(contract, contractMethod);

    const { block, gas, value, ...restOverrides } = overrides;

    const normalizedOverrides: CallOptions = {
      ...restOverrides,
      gas: gas?.toString(10),
      value: value?.toString(10),
    };

    return contract.methods[contractMethod](...args).call(normalizedOverrides);
  };

  const transactCall: TransactionContractCallerFn<Web3UnpromiEvent> = async (
    params
  ) => {
    assert(web3.currentProvider, 'web3.currentProvider is not set');

    assert(account, 'account must be specified to send transactions');

    const { address, abi, contractMethod, args, overrides } = params;

    const contract = new web3.eth.Contract(
      abi as unknown as AbiItem[], // FIXME
      address
    );

    assertWeb3ContractHasMethods(contract, contractMethod);

    const { gas, from, value, nonce, ...restOverrides } = overrides;

    const _from = from || account;

    assert(_from, 'from is required');

    const normalizedOverrides: SendOptions = {
      ...restOverrides,
      from: _from,
      gas: gas?.toString(10),
      value: value?.toString(10),
      nonce: nonce?.toString(10),
    };

    const preparedCall = contract.methods[contractMethod](...args);

    const promiEvent = preparedCall.send(normalizedOverrides);

    // can't just return promiEvent, because async function returns a Promise<PromiEvent>
    // and await Promise<PromiEvent> automatically awaits the value of PromiEvent,
    // that is await Promise<PromiEvent> = Awaited<PromiEvent> that doesn't have .on|once
    // so that functionality becomes lost
    // transactCall can be made sync, but approve has to be async to await getSpender()
    const unpromiEvent: Web3UnpromiEvent = {
      //@TODO try to change to real PromiEvent
      on: promiEvent.on.bind(promiEvent),
      once: promiEvent.once.bind(promiEvent),
    };

    return unpromiEvent;
  };

  const signTypedDataCall: SignTypedDataContractCallerFn = async (
    typedData
  ) => {
    assert(web3.currentProvider, 'web3.currentProvider is not set');

    assert(account, 'account must be specified to sign data');

    const provider = web3.currentProvider;
    assert(
      isProviderWithSendMethod(provider),
      'web3.currentProvider needs to be capable of sending arbitrary rpc calls'
    );

    const { data, domain, types } = typedData;

    const _typedData = {
      types: {
        EIP712Domain: [
          { name: 'name', type: 'string' },
          { name: 'version', type: 'string' },
          { name: 'chainId', type: 'uint256' },
          { name: 'verifyingContract', type: 'address' },
        ],
        ...types,
      },
      primaryType: findPrimaryType(types),
      domain,
      message: data,
    };

    const accs = await web3.eth.getAccounts();
    console.error('🚀 ~ accs:', accs, accs.includes(account));

    const res = await web3.eth.signTypedData(account, _typedData as any);
    console.error('🚀 ~ res:', res);
    return res;

    /* const response = await provider.request<'eth_signTypedData_v4', string>({
      method: 'eth_signTypedData_v4',
      params: [account, _typedData],
    });
    console.error('🚀 ~ response:', response);

    // const response = await new Promise<JsonRpcResponse>((resolve, reject) => {
    //   provider.send(
    //     {
    //       jsonrpc: '2.0',
    //       // method: 'eth_signTypedData_v4',
    //       method: 'eth_signTypedData',
    //       params: [account, _typedData],
    //     },
    //     (error, result) => {
    //       if (error) return reject(error);
    //       if (!result) {
    //         throw new Error('No result in response to eth_signTypedData');
    //       }
    //       resolve(result);
    //     }
    //   );
    // });

    return response as any; */
  };

  return { staticCall, transactCall, signTypedDataCall };
};

function isProviderWithSendMethod<T extends Web3BaseProvider>(
  provider: T
): provider is T & Required<Pick<Web3BaseProvider, 'request'>> {
  return !!provider && typeof provider === 'object' && 'request' in provider;
}
