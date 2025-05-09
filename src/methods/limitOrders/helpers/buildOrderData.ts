import { getRandomInt } from '../../../helpers/misc';
import type { Address, APIVersion } from '../../../types';
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
  // OrderData.taker must be Augustus (or other Executor) for p2p limitOrders to involve swap through Augustus
  /** @description actual user taker which will go into nonceAndMeta */
  taker?: Address;
  /** @description contract executor (Augustus or similar) that is allowed to execute the order, gois in Order.taker */
  contractTaker?: Address;

  AugustusAddress: Address;
  AppVersion: APIVersion;
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
  // if taker is specified -- p2p order for that taker only to fill through Augustus (v5) or directly (v6)-- taker = Augustus | _taker, takerInNonce = _taker
  // if taker is not specified -- limitOrder for anyone to fill through Augustus or not -- taker = Zero, takerInNonce = Zero
  taker: takerInNonce = ZERO_ADDRESS,
  // if given, overrides the above choices made based on `taker`
  contractTaker,
  // for v6 only support taker=_taker for OTC orders
  AppVersion,
}: BuildOrderDataInput): SignableOrderData {
  // first 160 bits is taker address (for p2p orders),
  // or 0 for limitOrders, so that anyone can be the taker of the Order
  const nonceAndMeta = (
    BigInt(takerInNonce) +
    (BigInt(nonce) << BigInt(160))
  ).toString(10);

  let taker: string;
  // contractTaker overrides always
  if (contractTaker) {
    taker = contractTaker;
  } else if (takerInNonce === ZERO_ADDRESS) {
    // no takerInNonce -> not p2p order -> allow anyone to fill (not only Augustus)
    taker = ZERO_ADDRESS;
  } else {
    // otherwise for p2p order ->
    if (AppVersion.startsWith('6.')) {
      //support 6.1+ versions

      // limit taker to EOA for v6 version (no Arbitrary Token Swaps + OTC Fill, or OTC Fill through AugustusSwapper)
      taker = takerInNonce;
    } else {
      // on v5
      // -> fill through Augustus only
      taker = AugustusAddress;
    }
  }

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
