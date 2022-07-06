import { runOnceAndCache } from '../../helpers/misc';
// import { API_URL } from '../../constants';
import type { ConstructFetchInput } from '../../types';
import { constructGetSpender } from '../swap/spender';
import {
  buildOrderData,
  buildDirectOrderData,
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
  /** @deprecated Orders directly through AugustusRFQ are discouraged */
  buildDirectLimitOrder: BuildLimitOrder;
};

export const constructBuildLimitOrder = (
  options: ConstructFetchInput
): BuildLimitOrderFunctions => {
  const { chainId } = options;

  const { getContracts: _getContracts } = constructGetSpender(options);
  // cached for the same instance of `buildLimitOrder = constructBuildLimitOrder()`
  // so should persist across same apiUrl & network
  const getContracts = runOnceAndCache(_getContracts);

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

  const buildDirectLimitOrder: BuildLimitOrder = async (
    buildLimitOrderParams,
    signal
  ) => {
    const { AugustusRFQ: verifyingContract } = await getContracts(signal);

    return buildDirectOrderData({
      ...buildLimitOrderParams,
      chainId,
      verifyingContract,
    });
  };

  return {
    buildLimitOrder,
    buildDirectLimitOrder,
  };
};
