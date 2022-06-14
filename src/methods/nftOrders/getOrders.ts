import { API_URL } from '../../constants';
import type { Address, ConstructFetchInput } from '../../types';
import {
  constructBaseFetchUrlGetter,
  GetOrdersURLs,
  GetOrderURL,
} from './helpers/misc';
import type {
  NftOrderApiResponse,
  NftOrderFromAPI,
  NftOrdersApiResponse,
  NftOrderType,
} from './helpers/types';

//                     get orders by `maker` or `taker`
export type NFTOrdersUserParams =
  | { maker: Address; type: NftOrderType }
  | { taker: Address; type: NftOrderType };
type GetNFTOrderByHash = (
  orderHash: string,
  signal?: AbortSignal
) => Promise<NftOrderFromAPI>;
type GetNFTOrders = (
  userParams: NFTOrdersUserParams,
  signal?: AbortSignal
) => Promise<NftOrderFromAPI[]>;

export type GetNFTOrdersFunctions = {
  getNFTOrders: GetNFTOrders;
  getNFTOrderByHash: GetNFTOrderByHash;
};

export const constructGetNFTOrders = ({
  apiURL = API_URL,
  chainId,
  fetcher,
}: ConstructFetchInput): GetNFTOrdersFunctions => {
  const getBaseFetchURLByOrderType = constructBaseFetchUrlGetter({
    apiURL,
    chainId,
  });

  const getNFTOrders: GetNFTOrders = async (userParams, signal) => {
    const baseFetchURL = getBaseFetchURLByOrderType(userParams.type);
    const userURL =
      'maker' in userParams
        ? (`maker/${userParams.maker}` as const)
        : (`taker/${userParams.taker}` as const);
    const fetchURL = `${baseFetchURL}/${userURL}` as const;

    const { orders } = await fetcher<NftOrdersApiResponse, GetOrdersURLs>({
      url: fetchURL,
      method: 'GET',
      signal,
    });

    console.log('🚀 getNFTOrders', orders);
    // without any extra calls, return  what API returns
    return orders;
  };

  const getNFTOrderByHash: GetNFTOrderByHash = async (orderHash, signal) => {
    const baseFetchURL = getBaseFetchURLByOrderType();
    const fetchURL = `${baseFetchURL}/${orderHash}` as const;

    const { order } = await fetcher<NftOrderApiResponse, GetOrderURL>({
      url: fetchURL,
      method: 'GET',
      signal,
    });

    return order;
  };

  return {
    getNFTOrders,
    getNFTOrderByHash,
  };
};
