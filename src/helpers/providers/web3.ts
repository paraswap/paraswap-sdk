import type {
  Address,
  ContractCallerFunctions,
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
import type { PromiEvent } from 'web3-core';
import { assert } from 'ts-essentials';
import { assertWeb3ContractHasMethods } from '../misc';

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

    // assert(account, 'account must be specified to create a signer');
    // FIXME: how to assert properly if user passed signer

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

  return { staticCall, transactCall };
};
