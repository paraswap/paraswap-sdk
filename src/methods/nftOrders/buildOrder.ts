import type { ConstructFetchInput, RequestParameters } from '../../types';
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
  requestParams?: RequestParameters
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

  const buildNFTOrder: BuildNFTOrder = async (
    buildNFTOrderParams,
    requestParams
  ) => {
    const { AugustusSwapper: AugustusAddress, AugustusRFQ: verifyingContract } =
      await getContracts(requestParams);

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
