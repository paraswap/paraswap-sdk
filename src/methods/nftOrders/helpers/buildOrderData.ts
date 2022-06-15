import type {
  TypedDataDomain as EthersTypedDataDomain,
  TypedDataField,
} from '@ethersproject/abstract-signer';
import type { Address } from '../../../types';
import type { AssetTypeVariant } from './types';

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

const name = 'AUGUSTUS RFQ';
const version = '1';
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

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

type TypedDataDomain = Omit<EthersTypedDataDomain, 'chainId'> & {
  chainId: number;
};

export type SignableTypedData = {
  types: Record<string, TypedDataField[]>;
  domain: TypedDataDomain;
  data: Record<string, any>;
};

type Domain = {
  name: string;
  version: string;
  chainId: number;
  verifyingContract: string;
};

type BigIntAsString = string;

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

function getRandomInt(): number {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
}

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

  const makerAsset = (
    BigInt(_makerAssetAddress) +
    (BigInt(makerAssetType) << BigInt(160))
  ).toString(10);

  const takerAsset = (
    BigInt(_takerAssetAddress) +
    (BigInt(takerAssetType) << BigInt(160))
  ).toString(10);

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
