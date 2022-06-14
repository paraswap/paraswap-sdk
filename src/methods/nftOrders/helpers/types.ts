import type { Address } from '../../../types';
import type { NftOrderData } from './buildOrderData';

export type NftOrderTransaction = {
  hash: string;
  event_type: 'OrderFilled' | 'OrderCancelled';
};

export type NftOrderType = 'LIMIT' | 'P2P';

export type NftOrderToSend = NftOrderData & {
  signature: string;
  permitMakerAsset?: string;
};

// display states such as EXPIRED and PARTIALLY_FILLLED derived on client side
// returned by API but can be calculated too, EXPIRED == order.expiry < Date.now()/1000
// PARTIALLY_FILLED == order.fillableBalance < order.makerAmount && order.fillableBalance !== '0'
export type NftOrderState = 'PENDING' | 'FULFILLED' | 'CANCELLED' | 'EXPIRED';

export type NftOrderFromAPI = NftOrderToSend & {
  makerAsset: Address;
  takerAsset: Address;
  createdAt: number; // timestamp
  makerAssetType: AssetTypeVariant;
  takerAssetType: AssetTypeVariant;
  makerBalance: string; // min(fillableBalance, allowance(maker), balance(maker)]
  fillableBalance: string; // amount that remains to be filled
  orderHash: string;
  permitMakerAsset: null | string;
  state: NftOrderState;
  takerFromMeta: string; // the intended receiver, eg receiving address of p2p order where `taker` would be augustus
  // not yet returned
  // transactions: NftOrderTransaction[];
};

export type NftOrdersApiResponse = {
  orders: NftOrderFromAPI[];
};
export type NftOrderApiResponse = {
  order: NftOrderFromAPI;
};

// any number can be assigned to AssetType enum
// https://github.com/Microsoft/TypeScript/issues/22311
// export enum AssetType {
//   ERC20 = 0,
//   ERC1155 = 1,
//   ERC721 = 2,
// }

export const AssetType = {
  ERC20: 0,
  ERC1155: 1,
  ERC721: 2,
} as const;

export type AssetTypeVariant = typeof AssetType[keyof typeof AssetType];
