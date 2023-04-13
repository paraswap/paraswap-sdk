import {
  BaseFetchUrl,
  baseFetchUrlGetterFactory,
  BaseFetchUrlInputConstructor,
  MinFetchUrl,
  OrderFillableBalanceFetchUrl,
} from '../../common/orders/misc';
import type { OrderData } from './buildOrderData';

export function sanitizeOrderData({
  nonceAndMeta,
  expiry,
  makerAsset,
  takerAsset,
  maker,
  taker,
  makerAmount,
  takerAmount,
}: OrderData & Record<string, any>): OrderData {
  return {
    nonceAndMeta,
    expiry,
    makerAsset,
    takerAsset,
    maker,
    taker,
    makerAmount,
    takerAmount,
  };
}

/* 
GET
/ft/orders/:chainId/maker/:walletAddress
/ft/orders/:chainId/taker/:walletAddress
/ft/p2p/:chainId/maker/:walletAddress
/ft/p2p/:chainId/taker/:walletAddress
*/
export type GetOrdersURLs = `${BaseFetchUrl<'ft'>}/${
  | 'taker'
  | 'maker'}/${string}`;

/*
GET
/ft/fillablebalance/:chainId/:walletAddress/:makerAsset?
*/
export type GetRequiredAllowanceURL =
  `${OrderFillableBalanceFetchUrl<'ft'>}/${string}${`/${string}` | ''}`;

/*
GET
/ft/order/:orderHash (get you p2p or orders)
*/
export type GetOrderURL = `${MinFetchUrl<'ft'>}/${string}`;

/* 
POST create order
/ft/orders/:chainId/
/ft/p2p/:chainId/
*/
export type PostOrderURLs = BaseFetchUrl<'ft'>;

export const constructBaseFetchUrlGetter: BaseFetchUrlInputConstructor<'ft'> =
  baseFetchUrlGetterFactory('ft');
