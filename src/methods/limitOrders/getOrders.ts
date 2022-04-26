// @TODO getOrder, getOrders from API
// onchain from contract can't distinguish between filled or cancelled
import { API_URL } from '../../constants';
import { isFetcherError } from '../../helpers';
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

  const getRawLimitOrders: GetRawLimitOrders = async (userAddress, signal) => {
    const fetchURL = `${baseFetchURL}/${userAddress}`;

    try {
      const { orders } = await fetcher<LimitOrdersApiResponse>({
        url: fetchURL,
        method: 'GET',
        signal,
      });

      // without any extra calls, return  what API returns
      return orders;
    } catch (error) {
      if (!isFetcherError(error) || !error.response) throw error;
      // @TODO test that this works with fetch and axios properly, that status is properly propagated
      console.log('🚀 ~ Error fetching Orders', error, error.response);

      // no Orders found
      if (error.response.status === 404) {
        // API still returns a response but with `orders = []`
        const data: LimitOrdersApiResponse = error.response.data;
        return data.orders;
      }

      throw error;
    }
  };

  const getLimitOrders: GetLimitOrders = async (userAddress, signal) => {
    const orders = await getRawLimitOrders(userAddress, signal);

    // @TODO attach status to orders, with onchain calls
    return orders;
  };

  return { getLimitOrders, getRawLimitOrders };
};
