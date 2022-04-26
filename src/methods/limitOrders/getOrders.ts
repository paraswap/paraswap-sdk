// @TODO getOrder, getOrders from API or subgrah
// onchain from contract can't distinguish between filled or cancelled
import { API_URL } from '../../constants';
import type { ConstructFetchInput } from '../../types';
import type { LimitOrdersApiResponse, RawLimitOrder } from './helpers/types';

type GetLimitOrders = (
  userAddress: string,
  signal?: AbortSignal
) => Promise<LimitOrdersApiResponse>;
type GetRawLimitOrders = (
  userAddress: string,
  signal?: AbortSignal
) => Promise<RawLimitOrder[]>;

export type GetLimitOrdersFunctions = {
  getLimitOrders: GetLimitOrders;
  getRawLimitOrders: GetRawLimitOrders;
};

export const constructGetLimitOrders = ({
  apiURL = API_URL,
  network,
  fetcher,
}: ConstructFetchInput): GetLimitOrdersFunctions => {
  const baseFetchURL = `${apiURL}/limit-orders/${network}`;

  const getLimitOrders: GetLimitOrders = async (userAddress, signal) => {
    const fetchURL = `${baseFetchURL}/${userAddress}`;

    const data = await fetcher<LimitOrdersApiResponse>({
      url: fetchURL,
      method: 'GET',
      signal,
    });

    // @TODO attach status to orders, with onchain calls
    return data;
  };

  const getRawLimitOrders: GetRawLimitOrders = async (userAddress, signal) => {
    const fetchURL = `${baseFetchURL}/${userAddress}`;

    const data = await fetcher<LimitOrdersApiResponse>({
      url: fetchURL,
      method: 'GET',
      signal,
    });

    // without ny extra calls, return  what API returns
    return data;
  };

  return { getLimitOrders, getRawLimitOrders };
};
