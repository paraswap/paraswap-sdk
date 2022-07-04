import { getRandomInt } from '../../../helpers/misc';
import type { Address } from '../../../types';
import {
  Domain,
  name,
  version,
  ZERO_ADDRESS,
} from '../../common/orders/buildOrderData';

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
  // OrderData.taker must be Augustus for p2p limitOrders to involve swap through Augustus
  // this is the actual user taker which will go into nonceAndMeta
  taker?: Address;
  AugustusAddress: Address;
}

export type SignableOrderData = {
  types: { Order: typeof Order };
  domain: Domain;
  data: OrderData;
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
  AugustusAddress,
  // if taker is specified -- p2p order for that taker only to fill through Augustus -- taker = Augustus, takerInNonce = _taker
  // if taker is not specified -- limitOrder for anyone to fill through Augustus -- taker = Augustus, takerInNonce = Zero
  taker: takerInNonce = ZERO_ADDRESS, //@TODO allow Orders outside of AugustusRFQ
}: BuildOrderDataInput): SignableOrderData {
  // first 160 bits is taker address (for p2p orders),
  // or 0 for limitOrders, so that anyone can be the taker of the Order
  const nonceAndMeta = (
    BigInt(takerInNonce) +
    (BigInt(nonce) << BigInt(160))
  ).toString(10);

  const order: OrderData = {
    nonceAndMeta,
    expiry,
    makerAsset,
    takerAsset,
    maker,
    taker: AugustusAddress,
    makerAmount,
    takerAmount,
  };

  return {
    types: { Order },
    domain: { name, version, chainId, verifyingContract },
    data: order,
  };
}

/** @deprecated use buildOrderData */
export function buildDirectOrderData({
  chainId,
  verifyingContract,
  nonce = getRandomInt(),
  expiry,
  makerAsset,
  takerAsset,
  makerAmount,
  takerAmount,
  maker,
  // for orders directly through AugustusRFQ taker can be 0 or another user
  taker: takerInNonce = ZERO_ADDRESS,
}: Omit<BuildOrderDataInput, 'AugustusAddress'>): SignableOrderData {
  // first 160 bits is taker address (for p2p orders),
  // or 0 for limitOrders, so that anyone can be the taker of the Order
  const nonceAndMeta = (
    BigInt(takerInNonce) +
    (BigInt(nonce) << BigInt(160))
  ).toString();

  const order: OrderData = {
    nonceAndMeta,
    expiry,
    makerAsset,
    takerAsset,
    maker,
    taker: takerInNonce,
    makerAmount,
    takerAmount,
  };

  return {
    types: { Order },
    domain: { name, version, chainId, verifyingContract },
    data: order,
  };
}
