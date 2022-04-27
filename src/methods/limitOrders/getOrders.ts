// @TODO getOrder, getOrders from API
// onchain from contract can't distinguish between filled or cancelled
import type { BigNumber as EthersBigNumber } from 'ethers';
import { assert } from 'ts-essentials';
import { API_URL } from '../../constants';
import { isFetcherError } from '../../helpers';
import { ExtractAbiMethodNames } from '../../helpers/misc';
import type {
  Address,
  ConstructProviderFetchInput,
  StaticCallOverrides,
} from '../../types';
import { chainId2verifyingContract } from './helpers/misc';
import type {
  LimitOrder,
  LimitOrdersApiResponse,
  LimitOrderStatus,
  RawLimitOrder,
} from './helpers/types';

type GetLimitOrders = (
  userAddress: string,
  signal?: AbortSignal
) => Promise<LimitOrder[]>;
type GetRawLimitOrders = (
  userAddress: string,
  signal?: AbortSignal
) => Promise<RawLimitOrder[]>;

type GetOrderStatusAndAmountFilled = (
  orderMaker: Address,
  order: Pick<RawLimitOrder, 'expiry' | 'makerAmount' | 'orderHash'>,
  overrides?: StaticCallOverrides
) => Promise<LimitOrderExtra>;
type GetOrdersStatusAndAmountFilled = (
  orderMaker: Address,
  orders: Pick<RawLimitOrder, 'expiry' | 'makerAmount' | 'orderHash'>[],
  overrides?: StaticCallOverrides
) => Promise<LimitOrderExtra[]>;

export type GetLimitOrdersFunctions = {
  getLimitOrders: GetLimitOrders;
  getRawLimitOrders: GetRawLimitOrders;
  getLimitOrderStatusAndAmountFilled: GetOrderStatusAndAmountFilled;
  getLimitOrdersStatusAndAmountFilled: GetOrdersStatusAndAmountFilled;
};

const MinAugustusRFQAbi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'maker',
        type: 'address',
      },
      {
        internalType: 'bytes32[]',
        name: 'orderHashes',
        type: 'bytes32[]',
      },
    ],
    name: 'getRemainingOrderBalance',
    outputs: [
      {
        internalType: 'uint256[]',
        name: 'remainingBalances',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

type AvailableMethods = ExtractAbiMethodNames<typeof MinAugustusRFQAbi>;

export const constructGetLimitOrders = ({
  apiURL = API_URL,
  network,
  fetcher,
  contractCaller,
}: ConstructProviderFetchInput<any, 'staticCall'>): GetLimitOrdersFunctions => {
  const baseFetchURL = `${apiURL}/limit-orders/${network}`; // in mocked FE
  // const baseFetchURL = `${apiURL}/orders`; // in API

  const verifyingContract = chainId2verifyingContract[network];

  const getLimitOrdersStatusAndAmountFilled: GetOrdersStatusAndAmountFilled =
    async (orderMaker, orders, overrides = {}) => {
      assert(
        verifyingContract,
        `AugustusRFQ contract for Limit Orders not available on chain ${network}`
      );

      const orderHashes = orders.map((order) => order.orderHash);

      // @TODO check what the return is for web3, probably string[]
      const remainingBalances = await contractCaller.staticCall<
        EthersBigNumber[],
        AvailableMethods
      >({
        address: verifyingContract,
        abi: MinAugustusRFQAbi,
        contractMethod: 'getRemainingOrderBalance',
        args: [orderMaker, orderHashes],
        overrides,
      });

      const orderStatusesAndAmountsFilled = orders.map((order, index) => {
        const remainingBalance = remainingBalances[index];
        assert(
          remainingBalance,
          `Failed to get remainingBalance for order ${order.orderHash}`
        );

        return _getLimitOrderStatusAndAmountFilled(remainingBalance, order);
      });

      return orderStatusesAndAmountsFilled;
    };

  const getLimitOrderStatusAndAmountFilled: GetOrderStatusAndAmountFilled =
    async (orderMaker, order, overrides = {}) => {
      const [orderStatus] = await getLimitOrdersStatusAndAmountFilled(
        orderMaker,
        [order],
        overrides
      );

      assert(orderStatus, `Failed to get status for order ${order.orderHash}`);

      return orderStatus;
    };

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

    const orderExtras = await getLimitOrdersStatusAndAmountFilled(
      userAddress,
      orders
    );

    const ordersWithEtras = orders.map<LimitOrder>((order, index) => {
      const extras = orderExtras[index];
      assert(extras, `Failed to get status for order ${order.orderHash}`);

      return {
        ...order,
        ...extras,
      };
    });

    return ordersWithEtras;
  };

  return {
    getLimitOrders,
    getRawLimitOrders,
    getLimitOrderStatusAndAmountFilled,
    getLimitOrdersStatusAndAmountFilled,
  };
};

type LimitOrderExtra = Pick<LimitOrder, 'status' | 'amountFilled'>;

// RemainingBalance keeps track of remaining amounts of each Order
// 0 -> order unfilled / not exists
// 1 -> order filled / cancelled
function _getLimitOrderStatusAndAmountFilled(
  remainingBalance: EthersBigNumber,
  { expiry, makerAmount }: Pick<RawLimitOrder, 'expiry' | 'makerAmount'>
): LimitOrderExtra {
  // order exists since we got it from API
  if (remainingBalance.eq(0)) {
    const status: LimitOrderStatus =
      Date.now() / 1000 > expiry ? 'expired' : 'open';
    // `expired` status means the Order expired without being filled (even partially)

    return {
      status,
      amountFilled: '0',
    };
  }

  // filled or cancelled
  if (remainingBalance.eq(1)) {
    // @TODO go through evens to distinguish filled or cancelled
    return {
      status: 'filled',
      amountFilled: makerAmount,
    };
  }

  // partially filled
  return {
    status: 'filled',
    amountFilled: remainingBalance.sub(makerAmount).mul(-1).toString(),
  };
}
