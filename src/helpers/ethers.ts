import type {
  Address,
  ContractCallerFunction,
  NoExtraKeysCheck,
} from '../types';
import { JsonRpcProvider, BaseProvider } from '@ethersproject/providers';
import { Signer } from '@ethersproject/abstract-signer';
import {
  Contract,
  PayableOverrides,
  CallOverrides,
} from '@ethersproject/contracts';
import type { TransactionResponse } from '@ethersproject/abstract-provider';
import { assertContractHasMethods } from './misc';
import { assert } from 'ts-essentials';

export const constructContractCaller = (
  ethers: BaseProvider | Signer,
  account?: Address
): ContractCallerFunction => {
  const contractCallerFunction: ContractCallerFunction = async (params) => {
    if (params.static) {
      const { address, abi, contractMethod, args, overrides } = params;

      const contract = new Contract(address, abi, ethers);

      assertContractHasMethods(contract, contractMethod);
      // drop keys not in CallOverrides
      const { block, gas, ...restOverrides } = overrides;
      // reassign values to keys in CallOverrides
      const normalizedOverrides = {
        ...restOverrides,
        blockTag: block,
        gasLimit: gas,
      };

      // type FinalCallOverrides = normalizedOverrides has extra props ? never : normalizedOverrides
      type FinalCallOverrides = NoExtraKeysCheck<
        typeof normalizedOverrides,
        CallOverrides
      >;

      // enforce overrides shape ethers accepts
      // TS will break if normalizedOverrides type has any keys not also present in CallOverrides
      const callOverrides: FinalCallOverrides = normalizedOverrides;
      // returns whatever the Contract.method returns: BigNumber, string, boolean
      return contract.callStatic[contractMethod](...args, callOverrides);
    }

    assert(account, 'account must be specified to create a signer');
    assert(
      ethers instanceof JsonRpcProvider || ethers instanceof Signer,
      'ethers must be an instance of Signer or JsonRpcProvider to create a signer'
    );

    const { address, abi, contractMethod, args, overrides } = params;

    const signer = 'getSigner' in ethers ? ethers.getSigner(account) : ethers;

    const contract = new Contract(address, abi, signer);

    assertContractHasMethods(contract, contractMethod);
    // drop keys not in PayableOverrides
    const { gas, from, ...restOverrides } = overrides;
    // reassign values to keys in PayableOverrides
    const normalizedOverrides = {
      ...restOverrides,
      gasLimit: gas,
    };

    // type FinalPayableOverrides = normalizedOverrides has extra props ? never : normalizedOverrides
    type FinalPayableOverrides = NoExtraKeysCheck<
      typeof normalizedOverrides,
      PayableOverrides
    >;

    // enforce overrides shape ethers accepts
    // TS will break if normalizedOverrides type has any keys not also present in PayableOverrides
    const txOverrides: FinalPayableOverrides = normalizedOverrides;
    const txResponse: TransactionResponse = await contract[contractMethod](
      ...args,
      txOverrides
    );

    // returns tx hash
    return txResponse.hash;
    // @TODO maybe better return the whole txResponse for versatility
  };

  return contractCallerFunction;
};
