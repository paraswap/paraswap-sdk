import {
  TypedDataDomain,
  TypedDataField,
} from '@ethersproject/abstract-signer';
import { Address } from '../../types';

const Order = [
  { name: 'nonceAndMeta', type: 'uint256' },
  { name: 'expiry', type: 'uint128' },
  { name: 'makerAsset', type: 'address' },
  { name: 'takerAsset', type: 'address' },
  { name: 'maker', type: 'address' },
  { name: 'taker', type: 'address' },
  { name: 'makerAmount', type: 'uint256' },
  { name: 'takerAmount', type: 'uint256' },
];

const name = 'AUGUSTUS RFQ';
const version = '1';
const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

export enum AssetType {
  ERC20 = 0,
  ERC1155 = 1,
  ERC721 = 2,
}

interface BuildOrderDataInput {
  chainId: number;
  verifyingContract: Address;
  nonceAndMeta: number;
  expiry: number;
  makerAsset: Address;
  takerAsset: Address;
  makerAmount: number;
  takerAmount: number;
  maker: Address;
  taker?: Address;
}

export type SignableOrderData = {
  types: { Order: typeof Order };
  domain: Domain;
  order: OrderData;
};

// works for ethers
// @TODO no way this works for web3
export type SignableTypedData = {
  domain: TypedDataDomain;
  types: Record<string, TypedDataField[]>;
  data: Record<string, any>;
};

type Domain = {
  name: string;
  version: string;
  chainId: number;
  verifyingContract: string;
};

type OrderData = {
  nonceAndMeta: number;
  expiry: number;
  makerAsset: string;
  takerAsset: string;
  maker: string;
  taker: string;
  makerAmount: number;
  takerAmount: number;
};

export function buildOrderData({
  chainId,
  verifyingContract,
  nonceAndMeta,
  expiry,
  makerAsset,
  takerAsset,
  makerAmount,
  takerAmount,
  maker,
  taker = ZERO_ADDRESS,
}: BuildOrderDataInput): SignableOrderData {
  const order: OrderData = {
    nonceAndMeta,
    expiry,
    makerAsset,
    takerAsset,
    maker,
    taker,
    makerAmount,
    takerAmount,
  };

  return {
    types: { Order },
    domain: { name, version, chainId, verifyingContract },
    order,
  };
}
