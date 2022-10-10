// @TODO getOrder, getOrders from API
// onchain from contract can't distinguish between filled or cancelled
import { API_URL } from '../../constants';
import { constructSearchString } from '../../helpers/misc';
import type { Address, ConstructFetchInput } from '../../types';
import {
  constructBaseFetchUrlGetter,
  GetOrdersURLs,
  GetOrderURL,
} from './helpers/misc';
import type {
  LimitOrderFromApi,
  LimitOrdersApiResponse,
  LimitOrderType,
} from './helpers/types';

interface PaginationParams {
  limit?: number;
  offset?: number;
  hideSmallBalances?: boolean;
}

//                     get orders by `maker` or `taker`
export type LimitOrdersUserParams = (
  | { maker: Address; type: LimitOrderType }
  | { taker: Address; type: LimitOrderType }
) &
  PaginationParams;

type GetLimitOrderByHash = (
  orderHash: string,
  signal?: AbortSignal
) => Promise<LimitOrderFromApi>;
type GetLimitOrders = (
  userParams: LimitOrdersUserParams,
  signal?: AbortSignal
) => Promise<LimitOrdersApiResponse>;

export type GetLimitOrdersFunctions = {
  getLimitOrders: GetLimitOrders;
  getLimitOrderByHash: GetLimitOrderByHash;
};

export const constructGetLimitOrders = ({
  apiURL = API_URL,
  chainId,
  fetcher,
}: ConstructFetchInput): GetLimitOrdersFunctions => {
  const getBaseFetchURLByOrderType = constructBaseFetchUrlGetter({
    apiURL,
    chainId,
  });

  const getLimitOrders: GetLimitOrders = async (userParams, signal) => {
    const baseFetchURL = getBaseFetchURLByOrderType(userParams.type);
    const userURL =
      'maker' in userParams
        ? (`maker/${userParams.maker}` as const)
        : (`taker/${userParams.taker}` as const);

    const { offset, limit, hideSmallBalances } = userParams;
    const search = constructSearchString({ offset, limit, hideSmallBalances });

    const fetchURL = `${baseFetchURL}/${userURL}${search}` as const;

    const response = await fetcher<LimitOrdersApiResponse, GetOrdersURLs>({
      url: fetchURL,
      method: 'GET',
      signal,
    });

    // without any extra calls, return  what API returns
    return response;
  };

  const getLimitOrderByHash: GetLimitOrderByHash = async (
    orderHash,
    signal
  ) => {
    const baseFetchURL = getBaseFetchURLByOrderType();
    const fetchURL = `${baseFetchURL}/${orderHash}` as const;

    const order = await fetcher<LimitOrderFromApi, GetOrderURL>({
      url: fetchURL,
      method: 'GET',
      signal,
    });

    return order;
  };

  return {
    getLimitOrders,
    getLimitOrderByHash,
  };
};
