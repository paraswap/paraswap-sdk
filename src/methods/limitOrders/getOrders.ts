// @TODO getOrder, getOrders from API
// onchain from contract can't distinguish between filled or cancelled
import BigNumber from 'bignumber.js';
import { BigNumber as EthersBigNumber } from 'ethers';
import { assert } from 'ts-essentials';
import { API_URL } from '../../constants';
import { ExtractAbiMethodNames, gatherObjectsByProp } from '../../helpers/misc';
import type {
  Address,
  ConstructProviderFetchInput,
  StaticCallOverrides,
} from '../../types';
import {
  chainId2BlockContractDeployedAt,
  chainId2verifyingContract,
} from './helpers/misc';
import type {
  AnyLimitOrder,
  LimitOrderExtra,
  LimitOrdersApiResponse,
  LimitOrderStatus,
  RawLimitOrder,
  UnknownLimitOrder,
} from './helpers/types';

type GetLimitOrders = (
  userAddress: string,
  signal?: AbortSignal
) => Promise<AnyLimitOrder[] | UnknownLimitOrder[]>;
type GetRawLimitOrders = (
  userAddress: string,
  signal?: AbortSignal
) => Promise<RawLimitOrder[]>;

type GetOrderExtraData = (
  orderMaker: Address,
  order: Pick<RawLimitOrder, 'expiry' | 'makerAmount' | 'orderHash'>,
  overrides?: StaticCallOverrides
) => Promise<LimitOrderExtra>;
type GetOrdersExtraData = (
  orderMaker: Address,
  orders: Pick<RawLimitOrder, 'expiry' | 'makerAmount' | 'orderHash'>[],
  overrides?: StaticCallOverrides
) => Promise<LimitOrderExtra[]>;

export type GetLimitOrdersFunctions = {
  /** @deprecated use getRawLimitOrders for now*/
  getLimitOrders: GetLimitOrders;
  getRawLimitOrders: GetRawLimitOrders;
  /** @deprecated */
  getLimitOrderStatusAndAmountFilled: GetOrderExtraData;
  /** @deprecated */
  getLimitOrdersStatusAndAmountFilled: GetOrdersExtraData;
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
// @TODO change when contract is redeployed
const OrderCancelledSig =
  '0xa6eb7cdc219e1518ced964e9a34e61d68a94e4f1569db3e84256ba981ba52753';

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
  const verifyingContractDeployedBlock =
    chainId2BlockContractDeployedAt[network];

  const getLimitOrdersStatusAndAmountFilled: GetOrdersExtraData = async (
    orderMaker,
    orders,
    overrides = {}
  ) => {
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

    const logs = (await contractCaller.getLogsCall({
      address: verifyingContract,
      abi: AugustusRFQEventsAbi,
      filter: {
        address: verifyingContract,
        topics: [
          [OrderFilledSig, OrderCancelledSig],
          orderHashes,
          '0x' + orderMaker.replace('0x', '').padStart(64, '0'),
        ],
        fromBlock: verifyingContractDeployedBlock, // if not available will default to 0
        // and then depending on node will either count from 0 or from the earlies available block or break or hang
      },
    })) as OrderLog[]; // @TODO adapt for web3 too

    // const cancelledOrders = new Set(
    //   logs
    //     .filter((log) => log.topic === OrderCancelledSig)
    //     .map((log) => log.args.orderHash)
    // );

    const order2EventsMap = gatherObjectsByProp<OrderLog, OrderLog[]>(
      logs,
      (log) => log.args.orderHash.toLowerCase(),
      (log, accumElem = []) => {
        accumElem.push(log);
        return accumElem;
      }
    );

    const orderStatusesAndAmountsFilled = orders.map((order, index) => {
      const remainingBalance = remainingBalances[index];
      assert(
        remainingBalance,
        `Failed to get remainingBalance for order ${order.orderHash}`
      );

      //  can have none, can have OrderFilled*n + OrderCancelled
      const orderEvents = order2EventsMap[order.orderHash.toLowerCase()];

      const wasCancelled = !!orderEvents?.some(
        (log) => log.topic === OrderCancelledSig
      );
      // const wasCancelled = cancelledOrders.has(order.orderHash);

      const filledEvents = !wasCancelled
        ? []
        : orderEvents?.filter<OrderFilledDecodedLog>(
            (log): log is OrderFilledDecodedLog =>
              log.args.orderHash.toLowerCase() ===
                order.orderHash.toLowerCase() && log.topic === OrderFilledSig
          ) || [];

      // @TODO check this is even correct
      const _amountFilled =
        filledEvents.length === 0
          ? undefined
          : // sum up all takerAmount across OrderFilled event for this orderHash
            filledEvents.reduce<BigNumber>(
              (accum, curr) => accum.plus(curr.args.takerAmount.toString()),
              new BigNumber(0)
            );

      const amountFilled = !_amountFilled
        ? undefined
        : _amountFilled.isZero()
        ? undefined
        : _amountFilled.toString();

      const extraData = _getLimitOrderStatusAndAmountFilled(order, {
        remainingBalance: remainingBalance.toString(),
        wasCancelled,
        amountFilled,
        orderEvents,
      });

      return extraData;
    });

    return orderStatusesAndAmountsFilled;
  };

  const getLimitOrderStatusAndAmountFilled: GetOrderExtraData = async (
    orderMaker,
    order,
    overrides = {}
  ) => {
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

      const ordersWithEtras = orders.map<AnyLimitOrder>((order, index) => {
        const extras = orderExtras[index];
        assert(extras, `Failed to get status for order ${order.orderHash}`);

        return {
          ...order,
          ...extras,
        };
      });

      return ordersWithEtras;
    } catch (error) {
      console.warn('Error fetching Orders status onchain', error);

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

interface StatusAndAmountFilledOptions {
  remainingBalance: string;
  wasCancelled: boolean;
  amountFilled?: string;
  orderEvents?: OrderLog[];
}

// RemainingBalance keeps track of remaining amounts of each Order
// 0 -> order unfilled / not exists
// 1 -> order filled / cancelled
// other number -> remaining balance
function _getLimitOrderStatusAndAmountFilled(
  { expiry, makerAmount }: Pick<RawLimitOrder, 'expiry' | 'makerAmount'>,
  {
    remainingBalance,
    wasCancelled,
    amountFilled,
    orderEvents,
  }: StatusAndAmountFilledOptions
): LimitOrderExtra {
  console.log('🚀 ~ remainingBalance', remainingBalance.toString());
  const remainingBalanceBN = new BigNumber(remainingBalance);
  // order exists since we got it from API
  if (remainingBalanceBN.isZero()) {
    const status: LimitOrderStatus =
      Date.now() / 1000 > expiry ? 'expired' : 'open';
    // `expired` status means the Order expired without being filled (even partially)

    return {
      status,
      amountFilled: '0',
    };
  }

  // never return {..., transactionHashes: undefined}
  // to avoid false positive typeguards `'transactionHashes' in order => order is Cancelled | Filled | PartiallyFilled`
  assert(
    orderEvents && orderEvents[0],
    'there should be events for cancelled, filled and partiallyFilled orders'
  );

  const transactionHashes = orderEvents.map((log) => log.transactionHash) as [
    string,
    ...string[]
  ];

  // filled or cancelled
  if (remainingBalanceBN.eq(1)) {
    return {
      status: wasCancelled ? 'canceled' : 'filled',
      // `cancelled` order can be partiallyFilled first
      amountFilled: wasCancelled && amountFilled ? amountFilled : makerAmount,
      transactionHashes,
    };
  }

  // partially filled
  return {
    status: 'partiallyFilled',
    amountFilled: remainingBalanceBN.minus(makerAmount).negated().toString(),
    transactionHashes,
  };
}

type OrderCancelledDecodedArgs = readonly [
  orderHash: string,
  maker: Address
] & {
  orderHash: string;
  maker: Address;
};
interface OrderCancelleDecodedLog {
  topic: string;
  args: OrderCancelledDecodedArgs;
  transactionHash: string;
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
  transactionHash: string;
}

type OrderLog = OrderCancelleDecodedLog | OrderFilledDecodedLog;
