export type DeltaAuctionOrder = {
  /** @description The address of the order owner */
  owner: string;
  /** @description The address of the order beneficiary */
  beneficiary: string; // beneficiary==owner if no transferTo
  /** @description The address of the src token */
  srcToken: string; // lowercase
  /** @description The address of the dest token */
  destToken: string; // lowercase
  /** @description The amount of src token to swap */
  srcAmount: string; // wei
  /** @description The minimum amount of dest token to receive */
  destAmount: string; // wei
  /** @description The expected amount of dest token to receive */
  expectedDestAmount: string; // wei
  /** @description The deadline for the order */
  deadline: number; // seconds
  /** @description The nonce of the order */
  nonce: string; // can be random, can even be Date.now()
  /** @description Optional permit signature for the src token */
  permit: string; //can be "0x"
  /** @description Encoded partner address, fee bps, and flags for the order. partnerAndFee = (partner << 96) | (partnerTakesSurplus << 8) | fee in bps (max fee is 2%) */
  partnerAndFee: string;
  /** @description The bridge input */
  bridge: Bridge;
};

export type Bridge = {
  maxRelayerFee: string;
  destinationChainId: number;
  outputToken: string; // same as Order.destToken but on destination chain, so can still be a different address
};

export type BridgeInput = Bridge;

type DeltaAuctionStatus =
  | 'NOT_STARTED'
  | 'POSTED'
  | 'RUNNING'
  | 'EXECUTING'
  | 'EXECUTED'
  | 'FAILED'
  | 'EXPIRED';

type DeltaAuctionTransaction = {
  id: string;
  hash: string;
  blockNumber: number;
  blockHash: string;
  gasUsed: bigint;
  gasPrice: bigint;
  blobGasUsed: bigint;
  blobGasPrice: bigint;
  index: number;
  status: number;
  from: string;
  to: string;
  receivedAmount: string;
  spentAmount: string;
  filledPercent: number; // in base points
  protocolFee: string;
  partnerFee: string;
  agent: string;
  auctionId: string;
};

export type ParaswapDeltaAuction = {
  id: string;
  deltaVersion: string; // 1.0 or 2.0 currently
  user: string;
  signature: string;
  status: DeltaAuctionStatus;
  order: DeltaAuctionOrder;
  orderHash: string;
  transactions: DeltaAuctionTransaction[];
  chainId: number;
  partner: string;
  expiresAt: string;
  createdAt: string;
  updatedAt: string;
  partiallyFillable: boolean;

  bridgeMetadata: BridgeMetadata | null;
  bridgeStatus: BridgeStatus | null;
};

export type BridgeMetadata = {
  /** @description The amount that user should expect to get */
  outputAmount: string;
  /** @description The cross-chain deadline. If deadline passes, the bridgeStatus would be expired */
  fillDeadline: number;
  /** @description The deposit id */
  depositId: number;
  /** @description The transaction hash on the destination chain that fulfilled the order. WHen bridgeStatus='filled' */
  fillTx?: string;
};

//                                                             refunded is basically failed
export type BridgeStatus = 'pending' | 'filled' | 'expired' | 'refunded';
