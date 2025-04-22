import { API_URL } from '../../constants';
import type {
  Address,
  ConstructFetchInput,
  RequestParameters,
} from '../../types';
import {
  constructBaseFetchUrlGetter,
  GetOrdersURLs,
  GetOrderURL,
} from './helpers/misc';
import type {
  NFTOrderFromAPI,
  NFTOrdersApiResponse,
  NFTOrderType,
} from './helpers/types';

//                     get orders by `maker` or `taker`
export type NFTOrdersUserParams =
  | { maker: Address; type: NFTOrderType }
  | { taker: Address; type: NFTOrderType };
type GetNFTOrderByHash = (
  orderHash: string,
  requestParams?: RequestParameters
) => Promise<NFTOrderFromAPI>;
type GetNFTOrders = (
  userParams: NFTOrdersUserParams,
  requestParams?: RequestParameters
) => Promise<NFTOrdersApiResponse>;

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

  const getNFTOrders: GetNFTOrders = async (userParams, requestParams) => {
    const baseFetchURL = getBaseFetchURLByOrderType(userParams.type);
    const userURL =
      'maker' in userParams
        ? (`maker/${userParams.maker}` as const)
        : (`taker/${userParams.taker}` as const);
    const fetchURL = `${baseFetchURL}/${userURL}` as const;

    const response = await fetcher<NFTOrdersApiResponse, GetOrdersURLs>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });

    // without any extra calls, return  what API returns
    return response;
  };

  const getNFTOrderByHash: GetNFTOrderByHash = async (
    orderHash,
    requestParams
  ) => {
    const baseFetchURL = getBaseFetchURLByOrderType();
    const fetchURL = `${baseFetchURL}/${orderHash}` as const;

    const order = await fetcher<NFTOrderFromAPI, GetOrderURL>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });

    return order;
  };

  return {
    getNFTOrders,
    getNFTOrderByHash,
  };
};
