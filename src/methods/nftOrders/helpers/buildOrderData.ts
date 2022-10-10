import type { Address } from '../../../types';
import type { AssetTypeVariant } from './types';
import {
  Domain,
  name,
  version,
  ZERO_ADDRESS,
} from '../../common/orders/buildOrderData';
import { getRandomInt } from '../../../helpers/misc';

const OrderNFT = [
  { name: 'nonceAndMeta', type: 'uint256' },
  { name: 'expiry', type: 'uint128' },
  { name: 'makerAsset', type: 'uint256' },
  { name: 'makerAssetId', type: 'uint256' },
  { name: 'takerAsset', type: 'uint256' },
  { name: 'takerAssetId', type: 'uint256' },
  { name: 'maker', type: 'address' },
  { name: 'taker', type: 'address' },
  { name: 'makerAmount', type: 'uint256' },
  { name: 'takerAmount', type: 'uint256' },
];

export interface BuildNFTOrderDataInput {
  chainId: number;
  verifyingContract: Address;
  nonce?: number;
  expiry: number;
  makerAsset: Address;
  takerAsset: Address;
  makerAmount: string;
  takerAmount: string;
  /** @description NFT Token id, will default to 0 (ERC20), provide for NFT */
  makerAssetId: string; // required when BUYing NFT
  /** @description NFT Token id, will default to 0 (ERC20), provide for NFT */
  takerAssetId?: string;
  /** @description Token type: ERC20 = 0, ERC1155 = 1, ERC721 = 2 */
  makerAssetType: AssetTypeVariant;
  /** @description Token type: ERC20 = 0, ERC1155 = 1, ERC721 = 2 */
  takerAssetType: AssetTypeVariant;
  maker: Address;
  // OrderData.taker must be Augustus for p2p limitOrders to involve swap through Augustus
  // this is the actual user taker which will go into nonceAndMeta
  taker?: Address;
  AugustusAddress: Address;
}

export type SignableNFTOrderData = {
  types: { OrderNFT: typeof OrderNFT };
  domain: Domain;
  data: NFTOrderData;
};

export type BigIntAsString = string;

export type NFTOrderData = {
  expiry: number;
  // '1' when trading 1 NFT token
  makerAmount: BigIntAsString;
  makerAsset: BigIntAsString;
  // '0' indicates ERC20
  makerAssetId: BigIntAsString;
  // '1' when trading 1 NFT token
  takerAmount: BigIntAsString;
  takerAsset: BigIntAsString;
  // '0' indicates ERC20
  takerAssetId: BigIntAsString;
  nonceAndMeta: BigIntAsString;
  maker: Address;
  taker: Address;
};

export function buildOrderData({
  chainId,
  verifyingContract,
  nonce = getRandomInt(),
  expiry,
  makerAsset: _makerAssetAddress,
  takerAsset: _takerAssetAddress,
  makerAmount,
  takerAmount,
  makerAssetId,
  takerAssetId = '0',
  makerAssetType,
  takerAssetType,
  maker,
  AugustusAddress,
  // if taker is specified -- p2p order for that taker only to fill through Augustus -- taker = Augustus, takerInNonce = _taker
  // if taker is not specified -- limitOrder for anyone to fill through Augustus -- taker = Augustus, takerInNonce = Zero
  taker: takerInNonce = ZERO_ADDRESS, //@TODO allow Orders outside of AugustusRFQ
}: BuildNFTOrderDataInput): SignableNFTOrderData {
  // first 160 bits is taker address (for p2p orders),
  // or 0 for limitOrders, so that anyone can be the taker of the Order
  const nonceAndMeta = (
    BigInt(takerInNonce) +
    (BigInt(nonce) << BigInt(160))
  ).toString(10);

  const makerAsset = assetAddressToUint(_makerAssetAddress, makerAssetType);

  const takerAsset = assetAddressToUint(_takerAssetAddress, takerAssetType);

  const orderNFT: NFTOrderData = {
    nonceAndMeta,
    expiry,
    makerAsset,
    takerAsset,
    maker,
    taker: AugustusAddress,
    makerAmount,
    takerAmount,
    makerAssetId,
    takerAssetId,
  };

  return {
    types: { OrderNFT },
    domain: { name, version, chainId, verifyingContract },
    data: orderNFT,
  };
}

// create a packed number that contains assetAddress and AssetType
export function assetAddressToUint(
  assetAddress: Address,
  assetType: AssetTypeVariant
): BigIntAsString {
  return (BigInt(assetAddress) + (BigInt(assetType) << BigInt(160))).toString(
    10
  );
}
