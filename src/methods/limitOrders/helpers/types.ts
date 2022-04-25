export type LimitOrderStatus = 'open' | 'filled' | 'expired' | 'canceled';
// @TODO what else? `orderHash`?
export type LimitOrder = {
  expiry: number; // timestamp
  makerAsset: string;
  takerAsset: string;
  maker: string;
  taker: string;
  makerAmount: string;
  takerAmount: string;
  status: LimitOrderStatus; // `status` likely not available from API
  amountFilled: string;
  chainId: number;
};

export type LimitOrdersApiResponse = LimitOrder[];
