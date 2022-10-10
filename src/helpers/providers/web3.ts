import type {
  Address,
  ContractCallerFunctions,
  SignTypedDataContractCallerFn,
  StaticContractCallerFn,
  TransactionContractCallerFn,
} from '../../types';
import type Web3 from 'web3';
import type { AbiItem } from 'web3-utils';
import type {
  ContractSendMethod,
  SendOptions,
  CallOptions,
  Contract,
} from 'web3-eth-contract';
import type { PromiEvent, provider, AbstractProvider } from 'web3-core';
import type { JsonRpcResponse } from 'web3-core-helpers';
import { assert } from 'ts-essentials';
import { assertWeb3ContractHasMethods } from '../misc';
import type { TypedDataField } from '@ethersproject/abstract-signer';

export type Web3UnpromiEvent = Pick<PromiEvent<Contract>, 'on' | 'once'>;

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

    const { block, gas, ...restOverrides } = overrides;

    const normalizedOverrides: CallOptions = {
      ...restOverrides,
      gas,
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

    const { gas, from, ...restOverrides } = overrides;

    const _from = from || account;

    assert(_from, 'from is required');

    const normalizedOverrides: SendOptions = {
      ...restOverrides,
      from: _from,
      gas: gas,
    };

    const preparedCall = contract.methods[contractMethod](
      ...args
    ) as ContractSendMethod;

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

    const response = await new Promise<JsonRpcResponse>((resolve, reject) => {
      provider.send(
        {
          jsonrpc: '2.0',
          // method: 'eth_signTypedData_v4',
          method: 'eth_signTypedData',
          params: [account, _typedData],
        },
        (error, result) => {
          if (error) return reject(error);
          if (!result) {
            throw new Error('No result in response to eth_signTypedData');
          }
          resolve(result);
        }
      );
    });

    return response.result;
  };

  return { staticCall, transactCall, signTypedDataCall };
};

function isProviderWithSendMethod<T extends provider>(
  provider: T
): provider is T & Required<Pick<AbstractProvider, 'send'>> {
  return !!provider && typeof provider === 'object' && 'send' in provider;
}

// regex from @ethersproject/hash TypedDataEncoder.constructor
// may be overly strict, but reliable
const baseTypeRegex = /^([^\x5b]*)(\x5b|$)/;

function findPrimaryType(types: Record<string, TypedDataField[]>): string {
  const candidates = Object.keys(types);
  const candidatesSet = new Set(candidates);

  candidates.forEach((candidate) => {
    const typedDataFields = types[candidate];
    if (!typedDataFields) return;

    typedDataFields.forEach(({ type }) => {
      // Get the base type (drop any array specifiers)
      const baseType = type.match(baseTypeRegex)?.[1];
      if (!baseType) return;

      // if type was referred to as a child of another type, it can't be the primaryType
      candidatesSet.delete(baseType);
    });
  });

  const [primaryType] = Array.from(candidatesSet);

  assert(
    primaryType,
    `No primary type found in SignableTypedData types, ${JSON.stringify(types)}`
  );

  return primaryType;
}
