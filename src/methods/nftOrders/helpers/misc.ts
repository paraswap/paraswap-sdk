import type { NftOrderData } from './buildOrderData';
import type { NftOrderType } from './types';

export function sanitizeOrderData({
  nonceAndMeta,
  expiry,
  makerAsset,
  takerAsset,
  maker,
  taker,
  makerAmount,
  takerAmount,
  makerAssetId,
  takerAssetId,
}: NftOrderData & Record<string, any>): NftOrderData {
  return {
    nonceAndMeta,
    expiry,
    makerAsset,
    takerAsset,
    maker,
    taker,
    makerAmount,
    takerAmount,
    makerAssetId,
    takerAssetId,
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

type BaseFetchUrl<T extends NftOrderType = NftOrderType> =
  `${string}/nft/${OrderType2URLPart[T]}/${number}`;

type MinFetchUrl = `${string}/nft/order/${number}`;

/* 
GET
/nft/orders/:chainId/maker/:walletAddress
/nft/orders/:chainId/taker/:walletAddress
/nft/p2p/:chainId/maker/:walletAddress
/nft/p2p/:chainId/taker/:walletAddress
*/
export type GetOrdersURLs = `${BaseFetchUrl}/${'taker' | 'maker'}/${string}`;

/*
GET
/nft/order/:chainId/:orderHash (get you p2p or orders)
*/
export type GetOrderURL = `${MinFetchUrl}/${string}`;

/* 
POST create order
/nft/orders/:chainId/
/nft/p2p/:chainId/
*/
export type PostOrderURLs = BaseFetchUrl;

interface UrlByTypeFunction {
  (): MinFetchUrl;
  (type: 'LIMIT'): BaseFetchUrl<'LIMIT'>;
  (type: 'P2P'): BaseFetchUrl<'P2P'>;
  (type: NftOrderType): BaseFetchUrl;
  (type?: NftOrderType): BaseFetchUrl | MinFetchUrl;
}

export function constructBaseFetchUrlGetter({
  chainId,
  apiURL,
}: GetBaseFetchUrlInput): UrlByTypeFunction {
  function urlGetter(type: 'LIMIT'): BaseFetchUrl<'LIMIT'>;
  function urlGetter(type: 'P2P'): BaseFetchUrl<'P2P'>;
  function urlGetter(type: NftOrderType): BaseFetchUrl;
  function urlGetter(): MinFetchUrl;
  function urlGetter(type?: NftOrderType): BaseFetchUrl | MinFetchUrl {
    if (!type) return `${apiURL}/nft/order/${chainId}` as const;

    const orderURLpart = type === 'LIMIT' ? 'orders' : 'p2p';
    return `${apiURL}/nft/${orderURLpart}/${chainId}` as const;
  }

  return urlGetter;
}
