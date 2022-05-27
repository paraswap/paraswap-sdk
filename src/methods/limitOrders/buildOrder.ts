import { assert } from 'ts-essentials';
// import { API_URL } from '../../constants';
import { ConstructBaseInput } from '../../types';
import {
  buildOrderData,
  BuildOrderDataInput,
  SignableOrderData,
} from './helpers/buildOrderData';
import { chainId2verifyingContract } from './helpers/misc';
export * from './helpers/buildOrderData';

export type BuildLimitOrderInput = Omit<
  BuildOrderDataInput,
  'chainId' | 'verifyingContract'
>;

type BuildLimitOrder = (
  buildLimitOrderParams: BuildLimitOrderInput
) => SignableOrderData;

export type BuildLimitOrderFunctions = {
  buildLimitOrder: BuildLimitOrder;
};

export const constructBuildLimitOrder = ({
  // apiURL = API_URL,
  chainId,
}: Pick<ConstructBaseInput, 'chainId'>): BuildLimitOrderFunctions => {
  const verifyingContract = chainId2verifyingContract[chainId];

  const buildLimitOrder: BuildLimitOrder = (buildLimitOrderParams) => {
    assert(
      verifyingContract,
      `verifyingContract for Limit Orders not available on chain ${chainId}`
    );
    return buildOrderData({
      ...buildLimitOrderParams,
      chainId,
      verifyingContract,
    });
  };

  return {
    buildLimitOrder,
  };
};
