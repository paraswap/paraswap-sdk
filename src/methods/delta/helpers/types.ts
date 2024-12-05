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
  nonce: number; // can be random, can even be Date.now()
  /** @description Optional permit signature for the src token */
  permit: string; //can be "0x"
  /** @description Encoded partner address, fee bps, and flags for the order. partnerAndFee = (partner << 96) | (partnerTakesSurplus << 8) | fee in bps (max fee is 2%) */
  partnerAndFee: string;
};

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
};
