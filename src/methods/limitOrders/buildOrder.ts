import type { ConstructFetchInput } from '../../types';
import { constructGetSpender } from '../swap/spender';
import {
  buildOrderData,
  BuildOrderDataInput,
  SignableOrderData,
} from './helpers/buildOrderData';
export * from './helpers/buildOrderData';

export type BuildLimitOrderInput = Omit<
  BuildOrderDataInput,
  'chainId' | 'verifyingContract' | 'AugustusAddress'
>;

type BuildLimitOrder = (
  buildLimitOrderParams: BuildLimitOrderInput,
  signal?: AbortSignal
) => Promise<SignableOrderData>;

export type BuildLimitOrderFunctions = {
  /** @description Build Orders that will be excuted through AugustusSwapper */
  buildLimitOrder: BuildLimitOrder;
};

export const constructBuildLimitOrder = (
  options: ConstructFetchInput
): BuildLimitOrderFunctions => {
  const { chainId } = options;

  // getContracts is cached internally for the same instance of SDK
  // so should persist across same apiUrl & network
  const { getContracts } = constructGetSpender(options);

  const buildLimitOrder: BuildLimitOrder = async (
    buildLimitOrderParams,
    signal
  ) => {
    const { AugustusSwapper: AugustusAddress, AugustusRFQ: verifyingContract } =
      await getContracts(signal);

    return buildOrderData({
      ...buildLimitOrderParams,
      chainId,
      verifyingContract,
      AugustusAddress,
    });
  };

  return {
    buildLimitOrder,
  };
};
