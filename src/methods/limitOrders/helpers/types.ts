import type { OrderData } from './buildOrderData';

export type LimitOrderType = 'LIMIT' | 'P2P';

export type LimitOrder = LimitOrderFromApi;

export type LimitOrderToSend = OrderData & {
  permitMakerAsset?: string;
  signature: string;
};

export type LimitOrdersApiResponse = {
  limit: number;
  offset: number;
  total: number;
  hasMore: boolean;
  orders: LimitOrderFromApi[];
};
export type LimitOrderApiResponse = {
  order: LimitOrderFromApi;
};

// display states such as EXPIRED and PARTIALLY_FILLLED derived on client side
// returned by API but can be calculated too, EXPIRED == order.expiry < Date.now()/1000
// PARTIALLY_FILLED == order.fillableBalance < order.makerAmount && order.fillableBalance !== '0'
export type LimitOrderState =
  | 'DRAFT'
  | 'PENDING'
  | 'FULFILLED'
  | 'CANCELLED'
  | 'EXPIRED';

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
  makerBalance: string; // min(fillableBalance, allowance(maker), balance(maker)]
  signature: string; // supplied by FE
  permitMakerAsset: null | string; // address
  orderHash: string; // hex string
  createdAt: number; // timestamp
  updatedAt: number; // timestamp
  state: LimitOrderState;
  /** @description transaction with the last event pertaining to the order: OrderFilled or OrderCancelled */
  transactionHash: null | string;
  // not yet returned
  // transactions: LimitOrderTransaction[];
  type: LimitOrderType;
  takerFromMeta: string; // the intended receiver, eg receiving address of p2p order where `taker` would be augustus
  fillableBalance: string; // amount that remains to be filled
  reservedBalance: string; // amount that is currently reserved in this order
  swappableBalance: string; // actual amount that can be filled at this time
};
