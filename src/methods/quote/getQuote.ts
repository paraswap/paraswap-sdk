import { API_URL, SwapSide } from '../../constants';
import { constructSearchString } from '../../helpers/misc';
import type { DeltaPrice } from '../delta/getDeltaPrice';
import type {
  ConstructFetchInput,
  EnumerateLiteral,
  OptimalRate,
} from '../../types';

type TradeMode = 'delta' | 'market' | 'all';
// enable passing enum value by string
type SwapSideUnion = EnumerateLiteral<typeof SwapSide>;

export type QuoteParams<M extends TradeMode = TradeMode> = {
  srcToken: string;
  destToken: string;
  amount: string;
  srcDecimals: number;
  destDecimals: number;
  side: SwapSideUnion;
  userAddress?: string;
  partner?: string;
  mode: M;
};

type QuoteQueryOptions = QuoteParams & {
  chainId: number; // will return error from API on unsupported chains
};

export type QuoteWithFallbackReason = {
  errorType: string;
  details: string;
};

export type QuoteWithMarketPrice = {
  market: OptimalRate;
};

export type QuoteWithDeltaPrice = {
  delta: DeltaPrice;
};

export type QuoteResponse =
  | QuoteWithDeltaPrice
  | QuoteWithMarketPrice
  | QuoteWithFallbackReason;

interface GetQuoteFunc {
  (options: QuoteParams<'delta'>, signal?: AbortSignal): Promise<
    QuoteWithFallbackReason | QuoteWithDeltaPrice
  >;
  (
    options: QuoteParams<'market'>,
    signal?: AbortSignal
  ): Promise<QuoteWithMarketPrice>;
  (options: QuoteParams<'all'>, signal?: AbortSignal): Promise<
    | QuoteWithDeltaPrice
    | (QuoteWithMarketPrice & { fallback_reason: QuoteWithFallbackReason }) // "all" mode tries for deltaPrice and falls back to market priceRoute
  >;
  (options: QuoteParams, signal?: AbortSignal): Promise<QuoteResponse>;
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
    signal?: AbortSignal
  ): Promise<QuoteWithFallbackReason | QuoteWithDeltaPrice>;
  function getQuote(
    options: QuoteParams<'market'>,
    signal?: AbortSignal
  ): Promise<QuoteWithMarketPrice>;
  function getQuote(
    options: QuoteParams<'all'>,
    signal?: AbortSignal
  ): Promise<
    | QuoteWithDeltaPrice
    | (QuoteWithMarketPrice & { fallback_reason: QuoteWithFallbackReason })
  >;
  function getQuote(
    options: QuoteParams,
    signal?: AbortSignal
  ): Promise<QuoteResponse>;
  async function getQuote(
    options: QuoteParams,
    signal?: AbortSignal
  ): Promise<QuoteResponse> {
    const search = constructSearchString<QuoteQueryOptions>({
      ...options,
      chainId,
      // side: SwapSide.SELL, // so far SELL side only
    });

    const fetchURL = `${pricesUrl}/${search}` as const;

    const data = await fetcher<QuoteResponse>({
      url: fetchURL,
      method: 'GET',
      signal,
    });

    return data;
  }

  return {
    getQuote,
  };
};
