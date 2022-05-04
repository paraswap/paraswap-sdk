export type LimitOrderStatus = 'open' | 'filled' | 'expired' | 'canceled';
export type LimitOrder = LimitOrderFromApi & {
  status: LimitOrderStatus; // `status` likely not available from API
  amountFilled: string;
};

export type OpenLimitOrder = LimitOrderFromApi & { status: 'open' };
export type RawLimitOrder = LimitOrderFromApi;

export type LimitOrderToSend = Omit<
  LimitOrder,
  | 'orderHash'
  | 'status'
  | 'amountFilled'
  | 'createdAt'
  | 'permitMakerAsset'
  | 'permitTakerAsset'
> & {
  signature: string;
};

// @TODO check what format Dates are and if we get them from bith POST /orders and GET /orders/:walletAddress
// export type LimitOrderFromApi = RawLimitOrder & {
//   createdAt: string; // Date
//   updatedAt: string; // Date
// };

export type LimitOrdersApiResponse = {
  orders: LimitOrderFromApi[];
};
export type LimitOrderApiResponse = {
  order: LimitOrderFromApi;
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
  signature: string; // supplied by FE
  permitTakerAsset: null | string; // address
  permitMakerAsset: null | string; // address
  orderHash: string; // hex string
  // not returned for now
  // updatedAt: number; // timestamp
  createdAt: number; // timestamp
};
