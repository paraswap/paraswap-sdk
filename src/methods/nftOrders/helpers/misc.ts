import {
  assetAddressToUint,
  BuildNFTOrderDataInput,
  NFTOrderData,
} from './buildOrderData';
import type { NFTOrderType } from './types';

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

export function sanitizeOrderData({
  nonceAndMeta,
  expiry,
  makerAsset: _makerAsset,
  takerAsset: _takerAsset,
  maker,
  taker,
  makerAmount,
  takerAmount,
  makerAssetId,
  takerAssetId,
  // asset types provided when Order has them ,e.g. got Order by hash from API
  makerAssetType,
  takerAssetType,
}: NFTOrderData &
  Partial<Pick<BuildNFTOrderDataInput, 'makerAssetType' | 'takerAssetType'>> &
  Record<string, any>): NFTOrderData {
  const makerAsset =
    makerAssetType && _makerAsset.startsWith('0x')
      ? assetAddressToUint(_makerAsset, makerAssetType)
      : _makerAsset;
  const takerAsset =
    takerAssetType && _takerAsset.startsWith('0x')
      ? assetAddressToUint(_takerAsset, takerAssetType)
      : _takerAsset;

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

type BaseFetchUrl<T extends NFTOrderType = NFTOrderType> =
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
  (type: NFTOrderType): BaseFetchUrl;
  (type?: NFTOrderType): BaseFetchUrl | MinFetchUrl;
}

export function constructBaseFetchUrlGetter({
  chainId,
  apiURL,
}: GetBaseFetchUrlInput): UrlByTypeFunction {
  function urlGetter(type: 'LIMIT'): BaseFetchUrl<'LIMIT'>;
  function urlGetter(type: 'P2P'): BaseFetchUrl<'P2P'>;
  function urlGetter(type: NFTOrderType): BaseFetchUrl;
  function urlGetter(): MinFetchUrl;
  function urlGetter(type?: NFTOrderType): BaseFetchUrl | MinFetchUrl {
    if (!type) return `${apiURL}/nft/order/${chainId}` as const;

    const orderURLpart = type === 'LIMIT' ? 'orders' : 'p2p';
    return `${apiURL}/nft/${orderURLpart}/${chainId}` as const;
  }

  return urlGetter;
}
