import { API_URL, SwapSide } from '../../constants';
import { constructSearchString } from '../../helpers/misc';
import type { DeltaPrice } from '../delta/getDeltaPrice';
import type {
  ConstructFetchInput,
  EnumerateLiteral,
  RequestParameters,
  OptimalRate,
} from '../../types';

type TradeMode = 'delta' | 'market' | 'all';
// enable passing enum value by string
type SwapSideUnion = EnumerateLiteral<typeof SwapSide>;

export type QuoteParams<M extends TradeMode = TradeMode> = {
  /** @description Source Token Address */
  srcToken: string;
  /** @description Destination Token Address */
  destToken: string;
  /** @description srcToken amount (in case of SELL) or destToken amount (in case of BUY), in wei */
  amount: string;
  /** @description Source Token Decimals.  */
  srcDecimals: number;
  /** @description Destination Token Decimals */
  destDecimals: number;
  /** @description SELL or BUY */
  side: SwapSideUnion;
  /** @description User's Wallet Address */
  userAddress?: string;
  /** @description Partner string */
  partner?: string;
  /** @description Preferred mode for the trade. In case of "all", Delta pricing is returned, with Market as a fallback */
  mode: M;
};

type QuoteQueryOptions = QuoteParams & {
  chainId: number; // will return error from API on unsupported chains
};

type FallbackReason = {
  errorType: string;
  details: string;
};

export type QuoteWithMarketPrice = {
  market: OptimalRate;
};

export type QuoteWithDeltaPrice = {
  delta: DeltaPrice;
};

export type QuoteWithMarketPriceAsFallback = QuoteWithMarketPrice & {
  fallbackReason: FallbackReason;
};

export type QuoteResponse =
  | QuoteWithDeltaPrice
  | QuoteWithMarketPrice
  | QuoteWithMarketPriceAsFallback;

interface GetQuoteFunc {
  (
    options: QuoteParams<'delta'>,
    requestParams?: RequestParameters
  ): Promise<QuoteWithDeltaPrice>;
  (
    options: QuoteParams<'market'>,
    requestParams?: RequestParameters
  ): Promise<QuoteWithMarketPrice>;
  (options: QuoteParams<'all'>, requestParams?: RequestParameters): Promise<
    QuoteWithDeltaPrice | QuoteWithMarketPriceAsFallback // "all" mode tries for deltaPrice and falls back to market priceRoute
  >;
  (
    options: QuoteParams,
    requestParams?: RequestParameters
  ): Promise<QuoteResponse>;
}

export type GetQuoteFunctions = {
  getQuote: GetQuoteFunc;
};

export const constructGetQuote = ({
  apiURL = API_URL,
  chainId,
  fetcher,
}: ConstructFetchInput): GetQuoteFunctions => {
  const pricesUrl = `${apiURL}/quote` as const;

  function getQuote(
    options: QuoteParams<'delta'>,
    requestParams?: RequestParameters
  ): Promise<QuoteWithDeltaPrice>;
  function getQuote(
    options: QuoteParams<'market'>,
    requestParams?: RequestParameters
  ): Promise<QuoteWithMarketPrice>;
  function getQuote(
    options: QuoteParams<'all'>,
    requestParams?: RequestParameters
  ): Promise<QuoteWithDeltaPrice | QuoteWithMarketPriceAsFallback>;
  function getQuote(
    options: QuoteParams,
    requestParams?: RequestParameters
  ): Promise<QuoteResponse>;
  async function getQuote(
    options: QuoteParams,
    requestParams?: RequestParameters
  ): Promise<QuoteResponse> {
    const search = constructSearchString<QuoteQueryOptions>({
      ...options,
      chainId,
      // side: SwapSide.SELL, // so far SELL side only for Delta
    });

    const fetchURL = `${pricesUrl}/${search}` as const;

    const data = await fetcher<QuoteResponse>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });

    return data;
  }

  return {
    getQuote,
  };
};
