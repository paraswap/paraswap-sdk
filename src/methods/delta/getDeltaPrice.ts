import { API_URL, SwapSide } from '../../constants';
import { constructSearchString } from '../../helpers/misc';
import type { ConstructFetchInput } from '../../types';

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
  partnerFee: number;
  hmac: string;
};

type DeltaPriceResponse = {
  price: DeltaPrice;
};

type GetDeltaPrice = (
  options: DeltaPriceParams,
  signal?: AbortSignal
) => Promise<DeltaPrice>;

export type GetDeltaPriceFunctions = {
  getDeltaPrice: GetDeltaPrice;
};

export const constructGetDeltaPrice = ({
  apiURL = API_URL,
  chainId,
  fetcher,
}: ConstructFetchInput): GetDeltaPriceFunctions => {
  const pricesUrl = `${apiURL}/delta/prices` as const;

  const getDeltaPrice: GetDeltaPrice = async (options, signal) => {
    const search = constructSearchString<DeltaPriceQueryOptions>({
      ...options,
      chainId,
      side: SwapSide.SELL, // so far SELL side only
    });

    const fetchURL = `${pricesUrl}/${search}` as const;

    const data = await fetcher<DeltaPriceResponse>({
      url: fetchURL,
      method: 'GET',
      signal,
    });

    return data.price;
  };

  return {
    getDeltaPrice,
  };
};
