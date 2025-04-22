// @TODO getOrder, getOrders from API
// onchain from contract can't distinguish between filled or cancelled
import { API_URL } from '../../constants';
import { constructSearchString } from '../../helpers/misc';
import type {
  Address,
  ConstructFetchInput,
  RequestParameters,
} from '../../types';
import {
  constructBaseFetchUrlGetter,
  GetOrdersURLs,
  GetOrderURL,
  GetRequiredAllowanceURL as GetRequiredBalanceURL,
} from './helpers/misc';
import type {
  LimitOrderFromApi,
  LimitOrdersApiResponse,
  LimitOrderType,
} from './helpers/types';

type PaginationParams = {
  limit?: number;
  offset?: number;
  hideSmallBalances?: boolean;
  orderBy?: 'createdAt' | 'updatedAt' | 'expiry';
};

//                     get orders by `maker` or `taker`
export type LimitOrdersUserParams = (
  | { maker: Address; type: LimitOrderType }
  | { taker: Address; type: LimitOrderType }
) &
  PaginationParams;

export type GetRequiredAllowanceParams = {
  maker: Address;
  token?: Address;
};

type GetLimitOrderByHash = (
  orderHash: string,
  requestParams?: RequestParameters
) => Promise<LimitOrderFromApi>;
type GetLimitOrders = (
  userParams: LimitOrdersUserParams,
  requestParams?: RequestParameters
) => Promise<LimitOrdersApiResponse>;

type GetRequiredBalance = (
  userParams: GetRequiredAllowanceParams,
  requestParams?: RequestParameters
) => Promise<Record<string, string>>;

export type GetLimitOrdersFunctions = {
  getLimitOrders: GetLimitOrders;
  getLimitOrderByHash: GetLimitOrderByHash;
  /**
   * Gets fillableBalance for tokens from user's active orders.
   * User needs to have enough balance & allowance to cover active orders before creating new orders.
   * @param userParams - parameters to get allowance for active orders
   * @param {string} userParams.maker - user to get required allowances for
   * @param {string=} userParams.token - if given `token`, the mapping will contain that token address only
   * @param {RequestParameters=} requestParams - requestParams passed to fetcher, can include {signal: AbortSignal, timeout: for axios, etc.}
   * @returns `{Lowercase<Address> => wei number as string}` mapping of token to fillableBalance
   */
  getRequiredBalance: GetRequiredBalance;
};

export const constructGetLimitOrders = ({
  apiURL = API_URL,
  chainId,
  fetcher,
}: ConstructFetchInput): GetLimitOrdersFunctions => {
  const getBaseFetchURLByEntityType = constructBaseFetchUrlGetter({
    apiURL,
    chainId,
  });

  const getLimitOrders: GetLimitOrders = async (userParams, requestParams) => {
    const baseFetchURL = getBaseFetchURLByEntityType(userParams.type);
    const userURL =
      'maker' in userParams
        ? (`maker/${userParams.maker}` as const)
        : (`taker/${userParams.taker}` as const);

    const { offset, limit, hideSmallBalances, orderBy } = userParams;
    const search = constructSearchString<PaginationParams>({
      offset,
      limit,
      hideSmallBalances,
      orderBy,
    });

    const fetchURL = `${baseFetchURL}/${userURL}${search}` as const;

    const response = await fetcher<LimitOrdersApiResponse, GetOrdersURLs>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });

    // without any extra calls, return  what API returns
    return response;
  };

  const getRequiredBalance: GetRequiredBalance = async (
    userParams,
    requestParams
  ) => {
    const baseFetchURL = getBaseFetchURLByEntityType('fillablebalance');
    const userURL = `${baseFetchURL}/${userParams.maker}` as const;
    const fetchURL = userParams.token
      ? (`${userURL}/${userParams.token}` as const)
      : userURL;

    const response = await fetcher<
      Record<string, string>,
      GetRequiredBalanceURL
    >({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });

    // without any extra calls, return  what API returns
    return response;
  };

  const getLimitOrderByHash: GetLimitOrderByHash = async (
    orderHash,
    requestParams
  ) => {
    const baseFetchURL = getBaseFetchURLByEntityType();
    const fetchURL = `${baseFetchURL}/${orderHash}` as const;

    const order = await fetcher<LimitOrderFromApi, GetOrderURL>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });

    return order;
  };

  return {
    getLimitOrders,
    getLimitOrderByHash,
    getRequiredBalance,
  };
};
