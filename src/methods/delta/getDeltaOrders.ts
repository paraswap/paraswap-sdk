import { API_URL } from '../../constants';
import { constructSearchString } from '../../helpers/misc';
import type { Address, ConstructFetchInput } from '../../types';
import type { ParaswapDeltaAuction } from './helpers/types';

type OrderFromAPI = Omit<ParaswapDeltaAuction, 'signature'>;

type GetDeltaOrderById = (
  orderId: string,
  signal?: AbortSignal
) => Promise<OrderFromAPI | null>;

type OrdersFilter = {
  /** @description Order.owner to fetch Delta Order for */
  userAddress: Address;
  /** @description Pagination option, page. Default 1 */
  page?: number;
  /** @description Pagination option, limit. Default 100 */
  limit?: number;
};
type OrderFiltersQuery = OrdersFilter;

type GetDeltaOrders = (
  options: OrdersFilter,
  signal?: AbortSignal
) => Promise<OrderFromAPI[]>;

export type GetDeltaOrdersFunctions = {
  getDeltaOrderById: GetDeltaOrderById;
  getDeltaOrders: GetDeltaOrders;
};

export const constructGetDeltaOrders = ({
  apiURL = API_URL,
  fetcher,
}: ConstructFetchInput): GetDeltaOrdersFunctions => {
  const baseUrl = `${apiURL}/delta/orders` as const;

  const getDeltaOrderById: GetDeltaOrderById = async (orderId, signal) => {
    const fetchURL = `${baseUrl}/${orderId}` as const;

    const order = await fetcher<OrderFromAPI | null>({
      url: fetchURL,
      method: 'GET',
      signal,
    });

    return order;
  };

  const getDeltaOrders: GetDeltaOrders = async (options, signal) => {
    const search = constructSearchString<OrderFiltersQuery>({
      userAddress: options.userAddress,
      page: options.page,
      limit: options.limit,
    });

    const fetchURL = `${baseUrl}${search}` as const;

    const orders = await fetcher<OrderFromAPI[]>({
      url: fetchURL,
      method: 'GET',
      signal,
    });

    return orders;
  };

  return {
    getDeltaOrderById,
    getDeltaOrders,
  };
};
