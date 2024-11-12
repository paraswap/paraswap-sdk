import type {
  Address,
  ContractCallerFunctions,
  SignTypedDataContractCallerFn,
  StaticContractCallerFn,
  TransactionContractCallerFn,
} from '../../types';
import type { PayableCallOptions, AbiItem } from 'web3';
import type Web3 from 'web3';
import type { ContractAbi, Contract as Web3Contract } from 'web3';
import type { PayableTxOptions } from 'web3-eth-contract';
import { assert } from 'ts-essentials';
import { findPrimaryType } from './helpers';

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

    // account must be among unlocked accounts
    const signature = await web3.eth.signTypedData(account, _typedData as any);
    return signature;
  };

  return { staticCall, transactCall, signTypedDataCall };
};

/// web3@4
type Web3ContractSendMethod = Web3Contract<ContractAbi>['methods'][string];

type Web3ContractWithMethod<T extends string> = Web3Contract<ContractAbi> & {
  methods: { [method in T]: Web3ContractSendMethod };
};

function web3ContractHasMethods<T extends string>(
  contract: Web3Contract<ContractAbi>,
  ...methods: T[]
): contract is Web3ContractWithMethod<T> {
  return methods.every(
    (method) => typeof contract.methods[method] === 'function'
  );
}

function assertWeb3ContractHasMethods<T extends string>(
  contract: Web3Contract<ContractAbi>,
  ...methods: T[]
): asserts contract is Web3ContractWithMethod<T> {
  assert(
    web3ContractHasMethods(contract, ...methods),
    `Contract must have methods: ${methods.join(', ')}`
  );
}
