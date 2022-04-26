export type LimitOrderStatus = 'open' | 'filled' | 'expired' | 'canceled';
// @TODO what else? `orderHash`?
export type LimitOrder = {
  orderHash: string;
  expiry: number; // timestamp
  makerAsset: string;
  takerAsset: string;
  maker: string;
  taker: string;
  makerAmount: string;
  takerAmount: string;
  status: LimitOrderStatus; // `status` likely not available from API
  // amountFilled: string; // @TODO do we have this? Not from API at the start
  chainId: number;
};

export type RawLimitOrder = Omit<LimitOrder, 'status'>;

export type LimitOrderToSend = Omit<LimitOrder, 'orderHash' | 'status'> & {
  signature: string;
};

// @TODO check what format Dates are and if we get them from bith POST /orders and GET /orders/:walletAddress
export type LimitOrderFromApi = RawLimitOrder & {
  createdAt: string; // Date
  updatedAt: string; // Date
};

export type LimitOrdersApiResponse = LimitOrder[];
