import type { Address } from '../../../types';
import type { OrderData } from './buildOrderData';
import type { LimitOrderType } from './types';

// @TODO either fill in or fetch from API
export const chainId2verifyingContract: Record<number, Address> = {
  1: '0xe92b586627ccA7a83dC919cc7127196d70f55a06', // Mainnet
  3: '0x34268C38fcbC798814b058656bC0156C7511c0E4', // Ropsten
  56: '0x8DcDfe88EF0351f27437284D0710cD65b20288bb', // BSC
  137: '0xF3CD476C3C4D3Ac5cA2724767f269070CA09A043', // Polygon
  250: '0x2DF17455B96Dde3618FD6B1C3a9AA06D6aB89347', // Fantom
  43114: '0x34302c4267d0dA0A8c65510282Cc22E9e39df51f', // Avalanche
};

export const chainId2BlockContractDeployedAt: Record<number, number> = {
  1: 14853783,
  3: 12316905,
  56: 18164860,
  137: 28829754,
  250: 39169691,
  43114: 15242064,
};

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

type GetBaseFetchUrlInput = {
  apiURL: string;
  chainId: number;
};

type OrderType2URLPart = {
  LIMIT: 'orders';
  P2P: 'p2p';
};

type BaseFetchUrl<T extends LimitOrderType = LimitOrderType> =
  `${string}/ft/${OrderType2URLPart[T]}/${number}`;

type MinFetchUrl = `${string}/ft/order`;

/* 
GET
/ft/orders/:chainId/maker/:walletAddress
/ft/orders/:chainId/taker/:walletAddress
/ft/p2p/:chainId/maker/:walletAddress
/ft/p2p/:chainId/taker/:walletAddress
*/
export type GetOrdersURLs = `${BaseFetchUrl}/${'taker' | 'maker'}/${string}`;

/*
GET
/ft/order/:orderHash (get you p2p or orders)
*/
export type GetOrderURL = `${MinFetchUrl}/${string}`;

/* 
POST create order
/ft/orders/:chainId/
/ft/p2p/:chainId/
*/
export type PostOrderURLs = BaseFetchUrl;

interface UrlByTypeFunction {
  (): MinFetchUrl;
  (type: 'LIMIT'): BaseFetchUrl<'LIMIT'>;
  (type: 'P2P'): BaseFetchUrl<'P2P'>;
  (type: LimitOrderType): BaseFetchUrl;
  (type?: LimitOrderType): BaseFetchUrl | MinFetchUrl;
}

export function constructBaseFetchUrlGetter({
  chainId,
  apiURL,
}: GetBaseFetchUrlInput): UrlByTypeFunction {
  function urlGetter(type: 'LIMIT'): BaseFetchUrl<'LIMIT'>;
  function urlGetter(type: 'P2P'): BaseFetchUrl<'P2P'>;
  function urlGetter(type: LimitOrderType): BaseFetchUrl;
  function urlGetter(): MinFetchUrl;
  function urlGetter(type?: LimitOrderType): BaseFetchUrl | MinFetchUrl {
    if (!type) return `${apiURL}/ft/order` as const;

    const orderURLpart = type === 'LIMIT' ? 'orders' : 'p2p';
    return `${apiURL}/ft/${orderURLpart}/${chainId}` as const;
  }

  return urlGetter;
}
