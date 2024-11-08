import { API_URL } from '../../constants';
import { constructSearchString } from '../../helpers/misc';
import type { ConstructFetchInput } from '../../types';

type DeltaPriceParams = {
  /** @description Not Native Token */
  srcToken: string;
  destToken: string;
  amount: string;
  srcDecimals: number;
  destDecimals: number;
  // side?: SwapSide; // no BUY side for now
  userAddress?: string;
  partner?: string; // @TODO not sure if this is optional, need to check
};

type DeltaPriceQueryOptions = DeltaPriceParams & {
  chainId: number; // will return error from API on unsupported chains
};

export type DeltaPrice = {
  srcToken: string;
  destToken: string;
  srcAmount: string;
  destAmount: string;
  destAmountBeforeFee: string;
  gasCostUSD: string;
  gasCost: string;
  srcUSD: string;
  destUSD: string;
  destUSDBeforeFee: string;
  partner: string;
  partnerFee: number;
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
