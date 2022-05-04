// @TODO getOrder, getOrders from API
// onchain from contract can't distinguish between filled or cancelled
import { BigNumber as EthersBigNumber } from 'ethers';
import { assert } from 'ts-essentials';
import { API_URL } from '../../constants';
import type { ExtractAbiMethodNames } from '../../helpers/misc';
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
  UnknownLimitOrder,
} from './helpers/types';

type GetLimitOrders = (
  userAddress: string,
  signal?: AbortSignal
) => Promise<LimitOrder[] | UnknownLimitOrder[]>;
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

// Without OrderFilledNFT event for now
const AugustusRFQEventsAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'maker',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'orderHash',
        type: 'bytes32',
      },
    ],
    name: 'OrderCancelled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'orderHash',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'maker',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'makerAsset',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'makerAmount',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'taker',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'takerAsset',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'takerAmount',
        type: 'uint256',
      },
    ],
    name: 'OrderFilled',
    type: 'event',
  },
] as const;

type AvailableMethods = ExtractAbiMethodNames<typeof MinAugustusRFQAbi>;

const OrderFilledSig =
  '0x6621486d9c28838df4a87d2cca5007bc2aaf6a5b5de083b1db8faf709302c473';
const OrderCancelledSig =
  '0x35974c4230d53fb4c6e8553fd900c88ba92747dbc689a79bcd6ba755cb936985';

export const constructGetLimitOrders = ({
  apiURL = API_URL,
  network,
  fetcher,
  contractCaller,
}: ConstructProviderFetchInput<
  any,
  'staticCall' | 'getLogsCall'
>): GetLimitOrdersFunctions => {
  // const baseFetchURL = `${apiURL}/limit-orders/${network}`; // in mocked FE
  const baseFetchURL = `${apiURL}/limit/orders`; // in API

  const verifyingContract = chainId2verifyingContract[network];

  const getLimitOrdersStatusAndAmountFilled: GetOrdersStatusAndAmountFilled =
    async (orderMaker, orders, overrides = {}) => {
      // @TODO allow to pass {ordderHash} only, fetch everything else
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

      type OrderCancelledDecodedArgs = readonly [
        maker: Address,
        orderHash: string
      ] & {
        maker: Address;
        orderHash: string;
      };
      interface OrderCancelleDecodedLog {
        topic: string;
        args: OrderCancelledDecodedArgs;
      }
      type OrderFilledDecodedArgs = readonly [
        orderHash: string,
        maker: Address,
        makerAsset: Address,
        makerAmount: EthersBigNumber, // @TODO see what works with web3, may need to just stick to string everywhere
        taker: Address,
        takerAsset: Address,
        takerAmount: EthersBigNumber
      ] & {
        orderHash: string;
        maker: Address;
        makerAsset: Address;
        makerAmount: EthersBigNumber;
        taker: Address;
        takerAsset: Address;
        takerAmount: EthersBigNumber;
      };
      interface OrderFilledDecodedLog {
        topic: string;
        args: OrderFilledDecodedArgs;
      }

      const logs = (await contractCaller.getLogsCall({
        address: verifyingContract,
        abi: AugustusRFQEventsAbi,
        filter: {
          address: verifyingContract,
          topics: [[OrderFilledSig, OrderCancelledSig]],
          fromBlock: '0xba857e',
          // fromBlock: 12223870,
        },
      })) as (OrderCancelleDecodedLog | OrderFilledDecodedLog)[]; // @TODO adapt for web3 too

      const cancelledOrders = new Set(
        logs
          .filter((log) => log.topic === OrderCancelledSig)
          .map((log) => log.args.orderHash)
      );

      const orderStatusesAndAmountsFilled = orders.map((order, index) => {
        const remainingBalance = remainingBalances[index];
        assert(
          remainingBalance,
          `Failed to get remainingBalance for order ${order.orderHash}`
        );

        const wasCancelled = cancelledOrders.has(order.orderHash);

        const filledEvents = !wasCancelled
          ? []
          : logs.filter<OrderFilledDecodedLog>(
              (log): log is OrderFilledDecodedLog =>
                log.args.orderHash === order.orderHash &&
                log.topic === OrderFilledSig
            );

        // @TODO check this is even correct
        const _amountFilled =
          filledEvents.length === 0
            ? undefined
            : // sum up all takerAmount across OrderFilled event for this orderHash
              filledEvents.reduce(
                (accum, curr) => accum.add(curr.args.takerAmount),
                EthersBigNumber.from(0) // switch to string so we don't have a hard ethers dependency
              );

        const amountFilled = !_amountFilled
          ? undefined
          : _amountFilled.isZero()
          ? undefined
          : _amountFilled.toString();

        return _getLimitOrderStatusAndAmountFilled(
          remainingBalance,
          order,
          wasCancelled,
          amountFilled
        );
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

    const { orders } = await fetcher<LimitOrdersApiResponse>({
      url: fetchURL,
      method: 'GET',
      signal,
    });

    // without any extra calls, return  what API returns
    return orders;
  };

  const getLimitOrders: GetLimitOrders = async (userAddress, signal) => {
    const orders = await getRawLimitOrders(userAddress, signal);

    try {
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
    } catch (error) {
      const ordersWithUnknownStatus = orders.map<UnknownLimitOrder>(
        (order) => ({
          ...order,
          status: 'unknown',
        })
      );
      return ordersWithUnknownStatus;
    }
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
  { expiry, makerAmount }: Pick<RawLimitOrder, 'expiry' | 'makerAmount'>,
  wasCancelled: boolean,
  amountFilled?: string
): LimitOrderExtra {
  console.log('🚀 ~ remainingBalance', remainingBalance.toString());
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
    // @TODO go through events to distinguish filled or cancelled
    // @TODO check if cancelled was partially filled first
    return {
      status: wasCancelled ? 'canceled' : 'filled',
      amountFilled: wasCancelled && amountFilled ? amountFilled : makerAmount,
    };
  }

  // partially filled
  return {
    status: 'filled',
    amountFilled: remainingBalance.sub(makerAmount).mul(-1).toString(),
  };
}
