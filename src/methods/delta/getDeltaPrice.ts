import { API_URL, SwapSide } from '../../constants';
import { constructSearchString } from '../../helpers/misc';
import type { ConstructFetchInput, RequestParameters } from '../../types';

export type DeltaPriceParams = {
  /** @description Source Token Address. Not Native Token */
  srcToken: string;
  /** @description Destination Token Address */
  destToken: string;
  /** @description srcToken amount in wei */
  amount: string;
  /** @description Source Token Decimals */
  srcDecimals: number;
  /** @description Destination Token Decimals */
  destDecimals: number;
  // side?: SwapSide; // no BUY side for now
  /** @description User's Wallet Address */
  userAddress?: string;
  /** @description Partner string. */
  partner?: string;
  /** @description Destination Chain ID for Crosschain Orders */
  destChainId?: number;
};

type DeltaPriceQueryOptions = DeltaPriceParams & {
  chainId: number; // will return error from API on unsupported chains
  side: SwapSide.SELL;
};

export type DeltaPrice = {
  srcToken: string;
  destToken: string;
  srcAmount: string;
  destAmount: string;
  destAmountBeforeFee: string;
  gasCost: string;
  gasCostBeforeFee: string;
  gasCostUSD: string;
  gasCostUSDBeforeFee: string;
  srcUSD: string;
  destUSD: string;
  destUSDBeforeFee: string;
  partner: string;
  partnerFee: number; // in %
  hmac: string;
};

export type BridgePrice = DeltaPrice & {
  destTokenSrcChain: string;
  destAmountAfterBridge: string;
  destUSDAfterBridge: string;
  bridgeFee: string;
  bridgeFeeUSD: string;
  poolAddress: string;
};

type DeltaPriceResponse = {
  price: DeltaPrice | BridgePrice;
};

interface GetDeltaPrice {
  (
    options: DeltaPriceParams & { destChainId: number },
    requestParams?: RequestParameters
  ): Promise<BridgePrice>;
  (
    options: DeltaPriceParams & { destChainId?: undefined },
    requestParams?: RequestParameters
  ): Promise<DeltaPrice>;
  (options: DeltaPriceParams, requestParams?: RequestParameters): Promise<
    DeltaPrice | BridgePrice
  >;
}

export type GetDeltaPriceFunctions = {
  getDeltaPrice: GetDeltaPrice;
};

export const constructGetDeltaPrice = ({
  apiURL = API_URL,
  chainId,
  fetcher,
}: ConstructFetchInput): GetDeltaPriceFunctions => {
  const pricesUrl = `${apiURL}/delta/prices` as const;

  async function getDeltaPrice(
    options: DeltaPriceParams & { destChainId: number },
    requestParams?: RequestParameters
  ): Promise<BridgePrice>;
  async function getDeltaPrice(
    options: DeltaPriceParams & { destChainId?: undefined },
    requestParams?: RequestParameters
  ): Promise<DeltaPrice>;
  async function getDeltaPrice(
    options: DeltaPriceParams,
    requestParams?: RequestParameters
  ): Promise<DeltaPrice | BridgePrice>;
  async function getDeltaPrice(
    options: DeltaPriceParams,
    requestParams?: RequestParameters
  ): Promise<DeltaPrice | BridgePrice> {
    const search = constructSearchString<DeltaPriceQueryOptions>({
      ...options,
      chainId,
      side: SwapSide.SELL, // so far SELL side only
    });

    const fetchURL = `${pricesUrl}/${search}` as const;

    const data = await fetcher<DeltaPriceResponse>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });

    return data.price;
  }

  return {
    getDeltaPrice,
  };
};
