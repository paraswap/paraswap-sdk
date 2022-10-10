import type { ConstructFetchInput } from '../../types';
import { constructGetSpender } from '../swap/spender';
import {
  buildOrderData,
  BuildNFTOrderDataInput,
  SignableNFTOrderData,
} from './helpers/buildOrderData';
export * from './helpers/buildOrderData';

export type BuildNFTOrderInput = Omit<
  BuildNFTOrderDataInput,
  'chainId' | 'verifyingContract' | 'AugustusAddress'
>;

type BuildNFTOrder = (
  buildNFTOrderParams: BuildNFTOrderInput,
  signal?: AbortSignal
) => Promise<SignableNFTOrderData>;

export type BuildNFTOrderFunctions = {
  /** @description Build Orders that will be excuted through AugustusSwapper */
  buildNFTOrder: BuildNFTOrder;
};

export const constructBuildNFTOrder = (
  options: ConstructFetchInput
): BuildNFTOrderFunctions => {
  const { chainId } = options;

  // getContracts is cached internally for the same instance of SDK
  // so should persist across same apiUrl & network
  const { getContracts } = constructGetSpender(options);

  const buildNFTOrder: BuildNFTOrder = async (buildNFTOrderParams, signal) => {
    const { AugustusSwapper: AugustusAddress, AugustusRFQ: verifyingContract } =
      await getContracts(signal);

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
