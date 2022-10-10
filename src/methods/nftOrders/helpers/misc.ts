import {
  BaseFetchUrl,
  baseFetchUrlGetterFactory,
  BaseFetchUrlInputConstructor,
  MinFetchUrl,
} from '../../common/orders/misc';
import {
  assetAddressToUint,
  BuildNFTOrderDataInput,
  NFTOrderData,
} from './buildOrderData';

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
    makerAssetType !== undefined && _makerAsset.startsWith('0x')
      ? assetAddressToUint(_makerAsset, makerAssetType)
      : _makerAsset;
  const takerAsset =
    takerAssetType !== undefined && _takerAsset.startsWith('0x')
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

/* 
GET
/nft/orders/:chainId/maker/:walletAddress
/nft/orders/:chainId/taker/:walletAddress
/nft/p2p/:chainId/maker/:walletAddress
/nft/p2p/:chainId/taker/:walletAddress
*/
export type GetOrdersURLs = `${BaseFetchUrl<'nft'>}/${
  | 'taker'
  | 'maker'}/${string}`;

/*
GET
/nft/order/:orderHash (get you p2p or orders)
*/
export type GetOrderURL = `${MinFetchUrl<'nft'>}/${string}`;

/* 
POST create order
/nft/orders/:chainId/
/nft/p2p/:chainId/
*/
export type PostOrderURLs = BaseFetchUrl<'nft'>;

export const constructBaseFetchUrlGetter: BaseFetchUrlInputConstructor<'nft'> =
  baseFetchUrlGetterFactory('nft');
