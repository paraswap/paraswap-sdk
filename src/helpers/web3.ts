import type { Address, ContractCallerFunction } from '../types';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import { assert } from 'ts-essentials';
import { assertContractHasMethods } from './misc';
import { ContractSendMethod, SendOptions } from 'web3-eth-contract';

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

      const normalizedOverrides = {
        ...restOverrides,
        blockTag: block,
        gas,
      };

      const preparedCall = contract.methods[contractMethod](
        ...args
      ) as ContractSendMethod;

      return preparedCall.call(normalizedOverrides);
    }

    assert(account, 'account must be specified to create a signer');
    // FIXME: how to assert properly if user passed signer

    const { address, abi, contractMethod, args, overrides } = params;

    const contract = new web3.eth.Contract(
      abi as unknown as AbiItem[], // FIXME
      address
    );

    assertContractHasMethods(contract.methods, contractMethod); // FIXME see up

    const { gas, from, ...restOverrides } = overrides;

    assert(from, 'from is required');

    const normalizedOverrides: SendOptions = {
      ...restOverrides,
      from,
      gas: gas,
    };

    const preparedCall = contract.methods[contractMethod](
      ...args
    ) as ContractSendMethod;

    return new Promise<string>((resolve, reject) => {
      preparedCall.send(normalizedOverrides, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };

  return contractCallerFunction;
};
