import { MarkOptional } from 'ts-essentials';
import { Domain, ZERO_ADDRESS } from '../../common/orders/buildOrderData';
import { BridgeInput, DeltaAuctionOrder } from './types';
import { composeDeltaOrderPermit } from './composePermit';
import { DeltaPrice } from '../getDeltaPrice';

// Order(address owner,address beneficiary,address srcToken,address destToken,uint256 srcAmount,uint256 destAmount,uint256 deadline,uint256 nonce,bytes permit, bridge Bridge)";
const SWAP_ORDER_EIP_712_TYPES = {
  Order: [
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
    { name: 'bridge', type: 'Bridge' },
  ],
  Bridge: [
    { name: 'maxRelayerFee', type: 'uint256' },
    { name: 'destinationChainId', type: 'uint256' },
    { name: 'outputToken', type: 'address' },
  ],
};

export type SignableDeltaOrderData = {
  types: {
    Order: typeof SWAP_ORDER_EIP_712_TYPES.Order;
    Bridge: typeof SWAP_ORDER_EIP_712_TYPES.Bridge;
  };
  domain: Domain;
  data: DeltaAuctionOrder;
};

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
    types: {
      Order: SWAP_ORDER_EIP_712_TYPES.Order,
      Bridge: SWAP_ORDER_EIP_712_TYPES.Bridge,
    },
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
  takeSurplus: boolean;
  chainId: number;
  bridge: BridgeInput;
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
  nonce = Date.now().toString(10), // random enough to not cause collisions

  permit = '0x',

  partnerAddress,
  partnerFee,
  takeSurplus,

  chainId,
  paraswapDeltaAddress,
  bridge,
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
    partnerAndFee: producePartnerAndFee({
      partnerFee,
      partnerAddress,
      takeSurplus,
    }),
    bridge,
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
  takeSurplus: boolean;
};

// fee and address are encoded together
function producePartnerAndFee({
  partnerFee,
  partnerAddress,
  takeSurplus,
}: ProducePartnerAndFeeInput): string {
  if (partnerAddress === ZERO_ADDRESS) return '0';

  const partnerFeeBps = BigInt((partnerFee * 100).toFixed(0));
  const partnerAndFee =
    (BigInt(partnerAddress) << BigInt(96)) |
    partnerFeeBps |
    (BigInt(takeSurplus) << BigInt(8));

  return partnerAndFee.toString(10);
}
