export type DeltaAuctionOrder = {
  owner: string;
  beneficiary: string; // beneficiary==owner if no transferTo
  srcToken: string; // lowercase
  destToken: string; // lowercase
  srcAmount: string; // wei
  destAmount: string; // wei
  expectedDestAmount: string; // wei
  deadline: number; // seconds
  nonce: string; // can be random, can even be Date.now()
  permit: string; //can be "0x"
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
