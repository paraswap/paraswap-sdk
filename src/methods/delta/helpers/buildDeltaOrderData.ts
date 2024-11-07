import { MarkOptional } from 'ts-essentials';
import type { Address, ParaSwapVersionUnion } from '../../../types';
import { Domain } from '../../common/orders/buildOrderData';
import { DeltaAuctionOrder } from './types';
import { composeDeltaOrderPermit } from './composePermit';
import { DeltaPrice } from '../getDeltaPrice';

// Order(address owner,address beneficiary,address srcToken,address destToken,uint256 srcAmount,uint256 destAmount,uint256 deadline,uint256 nonce,bytes permit)";
const Order = [
  { name: 'owner', type: 'address' },
  { name: 'beneficiary', type: 'address' },
  { name: 'srcToken', type: 'address' },
  { name: 'destToken', type: 'address' },
  { name: 'srcAmount', type: 'uint256' },
  { name: 'destAmount', type: 'uint256' },
  { name: 'expectedDestAmount', type: 'uint256' },
  { name: 'deadline', type: 'uint256' },
  { name: 'nonce', type: 'uint256' },
  { name: 'partnerAndFee', type: 'uint256' },
  { name: 'permit', type: 'bytes' },
];

export type SignableDeltaOrderData = {
  types: {
    Order: typeof Order;
  };
  domain: Domain;
  data: DeltaAuctionOrder;
};

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
  AppVersion: ParaSwapVersionUnion;
}

type SignDeltaOrderInput = {
  orderInput: DeltaAuctionOrder;
  paraswapDeltaAddress: string;
  chainId: number;
};

function produceDeltaOrderTypedData({
  orderInput,
  chainId,
  paraswapDeltaAddress,
}: SignDeltaOrderInput): SignableDeltaOrderData {
  const typedData = {
    types: { Order },
    domain: {
      name: 'Portikus',
      version: '2.0.0',
      chainId,
      verifyingContract: paraswapDeltaAddress,
    },
    data: orderInput,
  };

  return typedData;
}

export type DeltaOrderDataInput = MarkOptional<
  Omit<DeltaAuctionOrder, 'partnerAndFee'>,
  'beneficiary' | 'deadline' | 'nonce' | 'permit'
> &
  Pick<DeltaPrice, 'partnerFee'>;

export type BuildDeltaOrderDataInput = DeltaOrderDataInput & {
  partnerAddress: string;
  paraswapDeltaAddress: string;
  chainId: number;
};

// default deadline = 1 hour from now (may be changed later)
export const DELTA_DEFAULT_EXPIRY = 60 * 60; // seconds

export function buildDeltaSignableOrderData({
  owner,
  beneficiary = owner,

  srcToken,
  destToken,
  srcAmount,
  destAmount,
  expectedDestAmount,

  deadline = Math.floor(Date.now() / 1000 + DELTA_DEFAULT_EXPIRY),
  nonce = Date.now(), // random enough to not cause collisions

  permit = '0x',

  partnerAddress,
  partnerFee,

  chainId,
  paraswapDeltaAddress,
}: BuildDeltaOrderDataInput): SignableDeltaOrderData {
  const orderInput: DeltaAuctionOrder = {
    owner,
    beneficiary,
    srcToken,
    destToken,
    srcAmount,
    destAmount,
    expectedDestAmount,
    deadline,
    nonce,
    permit: composeDeltaOrderPermit({ permit, nonce }),
    partnerAndFee: producePartnerAndFee({ partnerFee, partnerAddress }),
  };

  return produceDeltaOrderTypedData({
    orderInput,
    chainId,
    paraswapDeltaAddress,
  });
}

type ProducePartnerAndFeeInput = {
  partnerFee: number;
  partnerAddress: string;
};

// fee and address are encoded together
function producePartnerAndFee({
  partnerFee,
  partnerAddress,
}: ProducePartnerAndFeeInput): string {
  const partnerFeeBps = BigInt((partnerFee * 100).toFixed(0));
  const partnerAndFee = (BigInt(partnerAddress) << BigInt(96)) | partnerFeeBps;

  return partnerAndFee.toString(10);
}
