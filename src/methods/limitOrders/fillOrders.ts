// @TODO add fulfillLimitOrder
import { ExtractAbiMethodNames, runOnceAndCache } from '../../helpers/misc';
import type {
  Address,
  ConstructProviderFetchInput,
  TxSendOverrides,
} from '../../types';
import { constructGetSpender } from '../swap/spender';
import type { OrderData } from './buildOrder';
import { sanitizeOrderData } from './helpers/misc';

export interface FillOrderInput {
  orderData: OrderData;
  signature: string;
}

type FillOrder<T> = (
  params: FillOrderInput,
  overrides?: TxSendOverrides,
  signal?: AbortSignal
) => Promise<T>;

export interface OrderInfoForBatchFill {
  order: OrderData;
  signature: string;
  /** @description for partially filling an order, will fully fill by default */
  takerTokenFillAmount?: string;
  /** @description for permissible taker's Token, '0x' by default === no permit used */
  permitTakerAsset?: string;
  /** @description for permissible maker's Token, '0x' by default === no permit used */
  permitMakerAsset?: string;
}

export interface FillOrdersInput {
  orderInfos: OrderInfoForBatchFill[];
  /** @description address to send tokens to. Pass current account */
  target: Address;
}

type BatchFillOrders<T> = (
  params: FillOrdersInput,
  overrides?: TxSendOverrides,
  signal?: AbortSignal
) => Promise<T>;

export interface PartialFillOrderInput extends FillOrderInput {
  fillAmount: string;
}

type PartialFillOrder<T> = (
  params: PartialFillOrderInput,
  overrides?: TxSendOverrides,
  signal?: AbortSignal
) => Promise<T>;

export interface PartialFillOrderWithTargetPermitInput
  extends PartialFillOrderInput {
  /** @description address to send tokens to. Pass current account */
  target: Address;
  /** @description for permissible taker's Token, '0x' by default === no permit used */
  permitTakerAsset?: string;
  /** @description for permissible maker's Token, '0x' by default === no permit used */
  permitMakerAsset?: string;
}

type PartialFillOrderWithTargetPermit<T> = (
  params: PartialFillOrderWithTargetPermitInput,
  overrides?: TxSendOverrides,
  signal?: AbortSignal
) => Promise<T>;

export type FillLimitOrderFunctions<T> = {
  /** @deprecated use buildLimitOrderTx */
  fillDirectLimitOrder: FillOrder<T>;
  /** @deprecated use buildLimitOrderTx */
  partialFillDirectLimitOrder: PartialFillOrder<T>;
  /** @deprecated use buildLimitOrderTx */
  partialFillDirectLimitOrderWithTargetPermit: PartialFillOrderWithTargetPermit<T>;
  /** @deprecated use buildLimitOrderTx */
  batchFillDirectLimitOrderWithTarget: BatchFillOrders<T>;
  // @TODO add direct vs Augustus methods
  // @TODO add buildLimitOrderTx (by analogy with swap.buildTX) method
  // @TODO rewrite tests
};

// much smaller than the whole ERC20_ABI
const MinAugustusRFQAbi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'nonceAndMeta',
            type: 'uint256',
          },
          {
            internalType: 'uint128',
            name: 'expiry',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'makerAsset',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'takerAsset',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'maker',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'taker',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'makerAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'takerAmount',
            type: 'uint256',
          },
        ],
        internalType: 'struct AugustusRFQ.Order',
        name: 'order',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'fillOrder',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'nonceAndMeta',
                type: 'uint256',
              },
              {
                internalType: 'uint128',
                name: 'expiry',
                type: 'uint128',
              },
              {
                internalType: 'address',
                name: 'makerAsset',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'takerAsset',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'maker',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'taker',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'makerAmount',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'takerAmount',
                type: 'uint256',
              },
            ],
            internalType: 'struct AugustusRFQ.Order',
            name: 'order',
            type: 'tuple',
          },
          {
            internalType: 'bytes',
            name: 'signature',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'takerTokenFillAmount',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'permitTakerAsset',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'permitMakerAsset',
            type: 'bytes',
          },
        ],
        internalType: 'struct AugustusRFQ.OrderInfo[]',
        name: 'orderInfos',
        type: 'tuple[]',
      },
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
    ],
    name: 'batchFillOrderWithTarget',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'nonceAndMeta',
            type: 'uint256',
          },
          {
            internalType: 'uint128',
            name: 'expiry',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'makerAsset',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'takerAsset',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'maker',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'taker',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'makerAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'takerAmount',
            type: 'uint256',
          },
        ],
        internalType: 'struct AugustusRFQ.Order',
        name: 'order',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
      {
        internalType: 'uint256',
        name: 'takerTokenFillAmount',
        type: 'uint256',
      },
    ],
    name: 'partialFillOrder',
    outputs: [
      {
        internalType: 'uint256',
        name: 'makerTokenFilledAmount',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'nonceAndMeta',
            type: 'uint256',
          },
          {
            internalType: 'uint128',
            name: 'expiry',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'makerAsset',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'takerAsset',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'maker',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'taker',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'makerAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'takerAmount',
            type: 'uint256',
          },
        ],
        internalType: 'struct AugustusRFQ.Order',
        name: 'order',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
      {
        internalType: 'uint256',
        name: 'takerTokenFillAmount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'permitTakerAsset',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'permitMakerAsset',
        type: 'bytes',
      },
    ],
    name: 'partialFillOrderWithTargetPermit',
    outputs: [
      {
        internalType: 'uint256',
        name: 'makerTokenFilledAmount',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

type AvailableMethods = ExtractAbiMethodNames<typeof MinAugustusRFQAbi>;

// returns whatever `contractCaller` returns
// to allow for better versatility
export const constructFillLimitOrder = <T>(
  options: ConstructProviderFetchInput<T, 'transactCall'>
): FillLimitOrderFunctions<T> => {
  const { getAugustusRFQ: _getAugustusRFQ } = constructGetSpender(options);

  // cached for the same instance of `fillDirectLimitOrder = constructFillLimitOrder()`
  // so should persist across same apiUrl & network
  const getAugustusRFQ = runOnceAndCache(_getAugustusRFQ);

  // @TODO add fillOrderWithTarget variants and bulk* variants

  const fillDirectLimitOrder: FillOrder<T> = async (
    { orderData, signature },
    overrides = {},
    signal
  ) => {
    const verifyingContract = await getAugustusRFQ(signal);

    const res = await options.contractCaller.transactCall<AvailableMethods>({
      address: verifyingContract,
      abi: MinAugustusRFQAbi,
      contractMethod: 'fillOrder',
      // types allow to pass OrderData & extra_stuff, but tx will break like that
      args: [sanitizeOrderData(orderData), signature],
      overrides,
    });

    return res;
  };

  const batchFillDirectLimitOrderWithTarget: BatchFillOrders<T> = async (
    { orderInfos, target },
    overrides = {},
    signal
  ) => {
    const verifyingContract = await getAugustusRFQ(signal);

    const sanitizedOrderInfos = orderInfos.map<Required<OrderInfoForBatchFill>>(
      ({
        order,
        signature,
        takerTokenFillAmount = order.takerAmount,
        permitMakerAsset = '0x',
        permitTakerAsset = '0x',
      }) => {
        return {
          order: sanitizeOrderData(order),
          signature,
          takerTokenFillAmount,
          permitMakerAsset,
          permitTakerAsset,
        };
      }
    );

    const res = await options.contractCaller.transactCall<AvailableMethods>({
      address: verifyingContract,
      abi: MinAugustusRFQAbi,
      contractMethod: 'batchFillOrderWithTarget',
      // types allow to pass (OrderInfo & extra_stuff)[], but tx will break like that
      args: [sanitizedOrderInfos, target],
      overrides,
    });

    return res;
  };

  const partialFillDirectLimitOrder: PartialFillOrder<T> = async (
    { orderData, signature, fillAmount },
    overrides = {},
    signal
  ) => {
    const verifyingContract = await getAugustusRFQ(signal);

    const res = await options.contractCaller.transactCall<AvailableMethods>({
      address: verifyingContract,
      abi: MinAugustusRFQAbi,
      contractMethod: 'partialFillOrder',
      // types allow to pass OrderData & extra_stuff, but tx will break like that
      args: [sanitizeOrderData(orderData), signature, fillAmount],
      overrides,
    });

    return res;
  };

  const partialFillDirectLimitOrderWithTargetPermit: PartialFillOrderWithTargetPermit<
    T
  > = async (
    {
      orderData,
      signature,
      fillAmount,
      target,
      permitTakerAsset = '0x',
      permitMakerAsset = '0x',
    },
    overrides = {},
    signal
  ) => {
    const verifyingContract = await getAugustusRFQ(signal);

    const res = await options.contractCaller.transactCall<AvailableMethods>({
      address: verifyingContract,
      abi: MinAugustusRFQAbi,
      contractMethod: 'partialFillOrderWithTargetPermit',
      args: [
        // types allow to pass OrderData & extra_stuff, but tx will break like that
        sanitizeOrderData(orderData),
        signature,
        fillAmount,
        target,
        permitTakerAsset,
        permitMakerAsset,
      ],
      overrides,
    });

    return res;
  };

  return {
    fillDirectLimitOrder,
    batchFillDirectLimitOrderWithTarget,
    partialFillDirectLimitOrder,
    partialFillDirectLimitOrderWithTargetPermit,
  };
};
