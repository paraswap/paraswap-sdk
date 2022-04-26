// @TODO getOrder, getOrders from API
// onchain from contract can't distinguish between filled or cancelled
import { API_URL } from '../../constants';
import type { ConstructFetchInput } from '../../types';
import type {
  LimitOrderFromApi,
  LimitOrdersApiResponse,
  RawLimitOrder,
} from './helpers/types';

type GetLimitOrders = (
  userAddress: string,
  signal?: AbortSignal
) => Promise<LimitOrderFromApi[]>;
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
  const baseFetchURL = `${apiURL}/limit-orders/${network}`; // in mocked FE
  // const baseFetchURL = `${apiURL}/orders`; // in API

  // @TODO add getLimitOrderStatus method

  const getLimitOrders: GetLimitOrders = async (userAddress, signal) => {
    const fetchURL = `${baseFetchURL}/${userAddress}`;

    const { orders } = await fetcher<LimitOrdersApiResponse>({
      url: fetchURL,
      method: 'GET',
      signal,
    });

    // @TODO attach status to orders, with onchain calls
    return orders;
  };

  const getRawLimitOrders: GetRawLimitOrders = async (userAddress, signal) => {
    const fetchURL = `${baseFetchURL}/${userAddress}`;

    const { orders } = await fetcher<LimitOrdersApiResponse>({
      url: fetchURL,
      method: 'GET',
      signal,
    });

    // without ny extra calls, return  what API returns
    return orders;
  };

  return { getLimitOrders, getRawLimitOrders };
};
