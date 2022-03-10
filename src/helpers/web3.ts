import type { Address, ContractCallerFunction } from '../types';
import Web3 from 'web3';
import { TransactionReceipt } from 'web3-eth';
import { AbiItem } from 'web3-utils';
import { assert } from 'ts-essentials';
import { assertContractHasMethods } from './misc';
import { SendOptions, CallOptions } from 'web3-eth-contract';

export const constructContractCaller = (
  web3: Web3,
  account?: Address
): ContractCallerFunction => {
  const contractCallerFunction: ContractCallerFunction = async (params) => {
    assert(web3.currentProvider, 'web3.currentProvider is not set');

    if (params.static) {
      const { address, abi, contractMethod, args, overrides } = params;

      const contract = new web3.eth.Contract(
        abi as unknown as AbiItem[], // FIXME abi types ethers dependant
        address
      );

      assertContractHasMethods(contract.methods, contractMethod); // FIXME: web3.contract.methods is any and assert works with ethers types

      const { block, gas, ...restOverrides } = overrides;

      const normalizedOverrides: CallOptions = {
        ...restOverrides,
        gas,
      };

      return contract.methods[contractMethod](...args).call(
        normalizedOverrides
      );
    }

    // assert(account, 'account must be specified to create a signer');
    // FIXME: how to assert properly if user passed signer

    const { address, abi, contractMethod, args, overrides } = params;

    const contract = new web3.eth.Contract(
      abi as unknown as AbiItem[], // FIXME
      address
    );

    assertContractHasMethods(contract.methods, contractMethod); // FIXME see up

    const { gas, from, ...restOverrides } = overrides;

    const _from = from || account;

    assert(_from, 'from is required');

    const normalizedOverrides: SendOptions = {
      ...restOverrides,
      from: _from,
      gas: gas,
    };

    const transactionReceipt: TransactionReceipt = await contract.methods[
      contractMethod
    ](...args).send(normalizedOverrides);

    return transactionReceipt.transactionHash;
  };

  return contractCallerFunction;
};
