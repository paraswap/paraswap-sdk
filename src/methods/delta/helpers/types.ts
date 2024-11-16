export type DeltaAuctionOrder = {
  owner: string;
  beneficiary: string; // beneficiary==owner if no transferTo
  srcToken: string; // lowercase
  destToken: string; // lowercase
  srcAmount: string; // wei
  destAmount: string; // wei
  expectedDestAmount: string; // wei
  deadline: number; // seconds
  nonce: number; // can be random, can even be Date.now()
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

export type ParaswapDeltaAuction = {
  id: string;
  user: string;
  signature: string;
  status: DeltaAuctionStatus;
  order: DeltaAuctionOrder;
  orderHash: string | null;
  transaction: EthersV6TransactionReceipt | null;
  chainId: number;
  partner: string;
  receivedAmount: string | null;
  expiresAt: string;
  createdAt: string;
  updatedAt: string;
};

type EthersV6TransactionReceipt = {
  to: string | null;
  from: string;
  contractAddress: string | null;
  hash: string;
  index: number;
  blockHash: string;
  blockNumber: number;
  logs: {
    _type: 'log';
    address: string;
    blockHash: string;
    blockNumber: number;
    data: string;
    index: number;
    topics: string[];
    transactionHash: string;
    transactionIndex: number;
  }[];
  logsBloom: string;
  gasUsed: bigint;
  blobGasUsed: bigint | null;
  cumulativeGasUsed: bigint;
  gasPrice: bigint;
  blobGasPrice: bigint | null;
  _type: 'TransactionReceipt';
  status: number | null;
};
