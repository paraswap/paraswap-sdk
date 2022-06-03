import { assert } from 'ts-essentials';
// import { API_URL } from '../../constants';
import type { ConstructFetchInput } from '../../types';
import { constructGetSpender } from '../swap/spender';
import {
  buildOrderData,
  BuildOrderDataInput,
  SignableOrderData,
} from './helpers/buildOrderData';
import { chainId2verifyingContract } from './helpers/misc';
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
  buildLimitOrder: BuildLimitOrder;
};

export const constructBuildLimitOrder = (
  options: ConstructFetchInput
): BuildLimitOrderFunctions => {
  const { chainId } = options;
  const verifyingContract = chainId2verifyingContract[chainId];

  const { getSpender: _getAugustusAddress } = constructGetSpender(options);
  // cached for the same instance of `buildLimitOrder = constructBuildLimitOrder()`
  // so should persist across same apiUrl & network
  let _spender: string | undefined;

  const getAugustusAddress: typeof _getAugustusAddress = async (signal) =>
    _spender || (_spender = await _getAugustusAddress(signal));

  const buildLimitOrder: BuildLimitOrder = async (
    buildLimitOrderParams,
    signal
  ) => {
    assert(
      verifyingContract,
      `verifyingContract for Limit Orders not available on chain ${chainId}`
    );

    const AugustusAddress = await getAugustusAddress(signal);

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
