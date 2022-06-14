import { assert } from 'ts-essentials';
import type { ConstructFetchInput } from '../../types';
import { chainId2verifyingContract } from '../limitOrders/helpers/misc';
import { constructGetSpender } from '../swap/spender';
import {
  buildOrderData,
  BuildOrderDataInput,
  SignableOrderData,
} from './helpers/buildOrderData';
export * from './helpers/buildOrderData';

export type BuildNFTOrderInput = Omit<
  BuildOrderDataInput,
  'chainId' | 'verifyingContract' | 'AugustusAddress'
>;

type BuildNFTOrder = (
  buildNFTOrderParams: BuildNFTOrderInput,
  signal?: AbortSignal
) => Promise<SignableOrderData>;

export type BuildNFTOrderFunctions = {
  /** @description Build Orders that will be excuted through AugustusSwapper */
  buildNFTOrder: BuildNFTOrder;
};

export const constructBuildNFTOrder = (
  options: ConstructFetchInput
): BuildNFTOrderFunctions => {
  const { chainId } = options;
  const verifyingContract = chainId2verifyingContract[chainId];

  const { getAugustusSwapper: _getAugustusAddress } =
    constructGetSpender(options);
  // cached for the same instance of `buildNFTOrder = constructBuildNFTOrder()`
  // so should persist across same apiUrl & network
  let _spender: string | undefined;

  const getAugustusAddress: typeof _getAugustusAddress = async (signal) =>
    _spender || (_spender = await _getAugustusAddress(signal));

  const buildNFTOrder: BuildNFTOrder = async (buildNFTOrderParams, signal) => {
    assert(
      verifyingContract,
      `verifyingContract for NFT Orders not available on chain ${chainId}`
    );

    const AugustusAddress = await getAugustusAddress(signal);

    return buildOrderData({
      ...buildNFTOrderParams,
      chainId,
      verifyingContract,
      AugustusAddress,
    });
  };

  return {
    buildNFTOrder,
  };
};
