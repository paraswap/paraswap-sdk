import type { Address } from '../../../types';
import type { NFTOrderData } from './buildOrderData';
import type { AssetType } from './misc';

export type NFTOrderTransaction = {
  hash: string;
  event_type: 'OrderFilled' | 'OrderCancelled';
};

export type NFTOrderType = 'LIMIT' | 'P2P';

export type NFTOrderToSend = NFTOrderData & {
  signature: string;
  permitMakerAsset?: string;
};

// display states such as EXPIRED and PARTIALLY_FILLLED derived on client side
// returned by API but can be calculated too, EXPIRED == order.expiry < Date.now()/1000
// PARTIALLY_FILLED == order.fillableBalance < order.makerAmount && order.fillableBalance !== '0'
export type NFTOrderState = 'PENDING' | 'FULFILLED' | 'CANCELLED' | 'EXPIRED';

export type NFTOrderFromAPI = NFTOrderToSend & {
  chainId: number;
  makerAsset: Address;
  takerAsset: Address;
  createdAt: number; // timestamp
  makerAssetType: AssetTypeVariant;
  takerAssetType: AssetTypeVariant;
  makerBalance: string; // min(fillableBalance, allowance(maker), balance(maker)]
  fillableBalance: string; // amount that remains to be filled
  orderHash: string;
  permitMakerAsset: null | string;
  state: NFTOrderState;
  takerFromMeta: string; // the intended receiver, eg receiving address of p2p order where `taker` would be augustus
  type: NFTOrderType;
  // not yet returned
  // transactions: NftOrderTransaction[];
};

type t = NFTOrderFromAPI[''];

export type NFTOrdersApiResponse = {
  orders: NFTOrderFromAPI[];
};
export type NFTOrderApiResponse = {
  order: NFTOrderFromAPI;
};

export type AssetTypeVariant = typeof AssetType[keyof typeof AssetType];
