import { API_URL } from '../../constants';
import { constructSearchString } from '../../helpers/misc';
import type {
  Address,
  ConstructFetchInput,
  RequestParameters,
} from '../../types';
import type { ParaswapDeltaAuction } from './helpers/types';

type OrderFromAPI = Omit<ParaswapDeltaAuction, 'signature'>;

type GetDeltaOrderById = (
  orderId: string,
  requestParams?: RequestParameters
) => Promise<OrderFromAPI>;

type GetDeltaOrderByHash = (
  orderHash: string,
  requestParams?: RequestParameters
) => Promise<OrderFromAPI>;

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
  requestParams?: RequestParameters
) => Promise<OrderFromAPI[]>;

export type GetDeltaOrdersFunctions = {
  getDeltaOrderById: GetDeltaOrderById;
  getDeltaOrderByHash: GetDeltaOrderByHash;
  getDeltaOrders: GetDeltaOrders;
};

export const constructGetDeltaOrders = ({
  apiURL = API_URL,
  fetcher,
}: ConstructFetchInput): GetDeltaOrdersFunctions => {
  const baseUrl = `${apiURL}/delta/orders` as const;

  const getDeltaOrderById: GetDeltaOrderById = async (
    orderId,
    requestParams
  ) => {
    const fetchURL = `${baseUrl}/${orderId}` as const;

    const order = await fetcher<OrderFromAPI>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });

    return order;
  };

  const getDeltaOrderByHash: GetDeltaOrderByHash = async (
    orderHash,
    requestParams
  ) => {
    const fetchURL = `${baseUrl}/hash/${orderHash}` as const;

    const order = await fetcher<OrderFromAPI>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });

    return order;
  };

  const getDeltaOrders: GetDeltaOrders = async (options, requestParams) => {
    const search = constructSearchString<OrderFiltersQuery>({
      userAddress: options.userAddress,
      page: options.page,
      limit: options.limit,
    });

    const fetchURL = `${baseUrl}${search}` as const;

    const orders = await fetcher<OrderFromAPI[]>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });

    return orders;
  };

  return {
    getDeltaOrderById,
    getDeltaOrderByHash,
    getDeltaOrders,
  };
};
