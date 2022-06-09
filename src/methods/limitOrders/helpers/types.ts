import type { NonNever } from 'ts-essentials';
import type { OrderData } from './buildOrderData';

export type LimitOrderStatus =
  | 'open'
  | 'filled'
  | 'partiallyFilled'
  | 'expired'
  | 'canceled'
  | 'unknown';

export type OrderType = 'LIMIT' | 'P2P';

export type LimitOrder = LimitOrderFromApi & {
  status: LimitOrderStatus; // `status` likely not available from API
  amountFilled?: string;
  transactionHashes?: string[];
};

export type ExpiredLimitOrder = LimitOrderFromApi & {
  status: 'expired';
  amountFilled: '0';
};
export type OpenLimitOrder = LimitOrderFromApi & {
  status: 'open';
  amountFilled: '0';
};
export type UnknownLimitOrder = LimitOrderFromApi & { status: 'unknown' };
export type FilledLimitOrder = LimitOrderFromApi & {
  status: 'filled';
  amountFilled: string;
  transactionHashes: [string, ...string[]];
};
export type PartiallyFilledLimitOrder = LimitOrderFromApi & {
  status: 'partiallyFilled';
  amountFilled: string;
  transactionHashes: [string, ...string[]];
};
export type CancelledLimitOrder = LimitOrderFromApi & {
  status: 'canceled';
  amountFilled: string;
  /** @description  last tx hash is always for OrderCancelled event */
  transactionHashes: [string, ...string[]]; // last tx hash is always for OrderCancelled event
};

// these Orders can be discriminated by `status`, unlike the generic LimitOrder
//  any of them is assignable to LimitOrder
export type AnyLimitOrder =
  | ExpiredLimitOrder
  | OpenLimitOrder
  | FilledLimitOrder
  | PartiallyFilledLimitOrder
  | CancelledLimitOrder;

type PickExistingKeys<T, K extends string> = NonNever<{
  [P in K]: P extends keyof T ? T[P] : never;
}>;

type _PickExistingKeysInArrayHelper<
  T extends Record<string, any>[],
  K extends string,
  Accum
> = T extends [head: infer Head, ...tail: infer Tail]
  ? Tail extends Record<string, any>[]
    ? _PickExistingKeysInArrayHelper<Tail, K, PickExistingKeys<Head, K> | Accum>
    : PickExistingKeys<Head, K> | Accum
  : Accum;

// returns union of array elements with existing keys priocked from K given
type PickExistingKeysInArray<
  T extends Record<string, any>[],
  K extends string
> = _PickExistingKeysInArrayHelper<T, K, never>;

// union of {status, amountFilled?, transactionHashes?} correctly corresponding to each Order type
export type LimitOrderExtra = PickExistingKeysInArray<
  [
    ExpiredLimitOrder,
    OpenLimitOrder,
    FilledLimitOrder,
    PartiallyFilledLimitOrder,
    CancelledLimitOrder
  ],
  'status' | 'amountFilled' | 'transactionHashes'
>;

export type RawLimitOrder = LimitOrderFromApi;

export type LimitOrderToSend = OrderData & {
  permitMakerAsset?: string;
  chainId: number;
  signature: string;
};

export type LimitOrdersApiResponse = {
  orders: LimitOrderFromApi[];
};
export type LimitOrderApiResponse = {
  order: LimitOrderFromApi;
};

// display states such as EXPIRED and PARTIALLY_FILLLED derived on client side
// returned by API but can be calculated too, EXPIRED == order.expiry < Date.now()/1000
// PARTIALLY_FILLED == order.makerBalance < order.makerAmount && order.makerBalance !== '0'
export type LimitOrderState = 'PENDING' | 'FULFILLED' | 'CANCELLED' | 'EXPIRED';

export type LimitOrderEvent = '';

export type LimitOrderTransaction = {
  hash: string;
  event_type: 'OrderFilled' | 'OrderCancelled';
};

export type LimitOrderFromApi = {
  chainId: number;
  nonceAndMeta: string; // uiint
  expiry: number; // timestamp
  maker: string; // address
  taker: string; // address
  makerAsset: string; // address
  takerAsset: string; // address
  makerAmount: string; // wei
  takerAmount: string; // wei
  makerBalance: string; // wei, balance left to fill (remainingBalance in contract)
  signature: string; // supplied by FE
  permitMakerAsset: null | string; // address
  orderHash: string; // hex string
  // not returned for now
  // updatedAt: number; // timestamp
  createdAt: number; // timestamp
  state: LimitOrderState;
  // not yet returned
  transactions: LimitOrderTransaction[];
  type: OrderType;
};
