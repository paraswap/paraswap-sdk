import type {
  TypedDataDomain,
  TypedDataField,
} from '@ethersproject/abstract-signer';
import type { Address } from '../../../types';

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
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

export interface BuildOrderDataInput {
  chainId: number;
  verifyingContract: Address;
  nonce?: number;
  expiry: number;
  makerAsset: Address;
  takerAsset: Address;
  makerAmount: string;
  takerAmount: string;
  maker: Address;
  taker?: Address;
}

export type SignableOrderData = {
  types: { Order: typeof Order };
  domain: Domain;
  data: OrderData;
};

// works for ethers
// @TODO no way this works for web3
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

export type OrderData = {
  nonceAndMeta: string;
  expiry: number;
  makerAsset: string;
  takerAsset: string;
  maker: string;
  taker: string;
  makerAmount: string;
  takerAmount: string;
};

function getRandomInt(): number {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
}

export function buildOrderData({
  chainId,
  verifyingContract,
  nonce = getRandomInt(),
  expiry,
  makerAsset,
  takerAsset,
  makerAmount,
  takerAmount,
  maker,
  // `taker` is always AugustusRFQ if using our contract
  taker = ZERO_ADDRESS, //@TODO allow Orders outside of AugustusRFQ
}: BuildOrderDataInput): SignableOrderData {
  // first 160 bits is 0, so that anyone can be the taker of the Order
  const nonceAndMeta = (BigInt(nonce) << BigInt(160)).toString(10);

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
    data: order,
  };
}
