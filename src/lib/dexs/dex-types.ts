import { Address, NumberAsString } from '../../types';

export type DexParams = {
  callees: string[];
  calldata: string[];
  values: string[];
};

export type DEXData = {
  name: string;
  srcAmount: string;
  destAmount: string;
};

export type ZeroXEXData = DEXData & {
  minConversionRate: string;
  orders: any[];
  signatures: any[];
  networkFees?: string;
  version: number;
};

export type UniswapV1DEXData = DEXData & {
  exchange: string;
  factory?: string;
  deadline: number;
  minEthBought: string;
};

export type UniswapV2DEXData = DEXData & {
  exchange?: Address;
  path: Address[];
  router: Address;
};

export type UniswapV3DEXData = DEXData & {
  // ExactInputSingleParams
  fee: number;
  deadline?: number;
  sqrtPriceLimitX96?: NumberAsString;
};

export type KyberDEXData = DEXData & {
  exchange: Address;
  minConversionRate: string;
  maxDestAmount?: string;
  hint?: string;
};

export type AaveDexData = DEXData & {
  fromAToken: boolean;
  isV2: boolean;
};

export type CompoundDEXData = DEXData & {
  fromCToken: boolean;
};

export type ShellDEXData = DEXData & {
  exchange: Address;
  deadline?: number;
};

export type CofixDEXData = DEXData & {
  exchange: Address;
  deadline?: number;
};

export type BalancerDEXData = DEXData & {
  exchangeProxy: Address;
  swaps: {
    pool: Address;
    tokenInParam: string;
    tokenOutParam: string;
    maxPrice: string;
  }[];
};

export type CurveDexData = DEXData & {
  minConversionRate: string;
  exchange: string;
  i: number;
  j: number;
  underlyingSwap: boolean;
};

export type OneInchData = DEXData & { exchange: string };

export type mStableData = DEXData & {
  exchange: string;
  opType: mStableOpTypes;
  isAssetContract: boolean;
};
export enum mStableOpTypes {
  Mint = 'mint',
  Redeem = 'redeem',
  Swap = 'swap',
}

export type NerveDexData = DEXData & {
  minConversionRate: string;
  exchange: string;
  i: number;
  j: number;
  deadline: number;
};

export type SmoothyDexData = DEXData & {
  i: number;
  j: number;
  exchange: string;
};

export type DODODexData = DEXData & {
  fromToken: Address;
  toToken: Address;
  dodoPairs: Address[];
  directions: string;
  isIncentive: boolean;
  deadLine: string;
};

export type BancorDEXData = DEXData & {
  minDestToken: string;
  path: Address[];
  bancorNetwork?: string;
};

export type ExchangeData = {
  callees: string[];
  values: string[];
  startIndexes: number[];
  calldata: string;
};

export type SwapData = ExchangeData & {
  srcToken: string;
  destToken: string;
  srcAmount: string;
  minDestinationAmount: string;
};
