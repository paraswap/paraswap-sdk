import BigNumber from "bignumber.js";

export type Address = string;
export type PriceString = string;
export type NumberAsString = string;

export type NetworkID = 1 | 3 | 42 | 4;

export const ETHER_ADDRESS = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';

export const UNLIMITED_ALLOWANCE = new BigNumber(2).pow(256).minus(1).toFixed();

export type APIQuery = {
  [name: string]: string | number | boolean
}

export type DexConf = { exchange: string, targetExchange?: string };

export type Adapters = {
  augustus: { exchange: Address }
  [adapter: string]: DexConf
};

export type Allowance = {
  tokenAddress: Address,
  allowance: string
};

export type APIError = {
  message: string,
  status?: number,
}

export type Transaction = {
  from: Address,
  to: Address,
  value: string,
  data: string,
  chainId: number,
}

export type Rate = {
  amount: PriceString
  exchange: string
  percent: NumberAsString
  srcAmount: PriceString,
  data?: any,
}

export type OthersRate = {
  exchange: string
  rate: NumberAsString
  unit: NumberAsString
}

export type OnChainOptimalRates = {
  amount: PriceString,
  bestRoute: Rate[],
  others?: OthersRate[]
};

export type OptimalRates = {
  amount: PriceString,
  bestRoute: Rate[],
  multiRoute?: Rate[][],
  others: OthersRate[],
  fromUSD?: string,
  toUSD?: string,
  details?:
    {
      tokenFrom: Address,
      tokenTo: Address,
      srcAmount: PriceString
    }
};

export class User {
  constructor(public address: Address, public network: NetworkID) {
  }
}

export enum EXCHANGES {
  KYBER = "Kyber",
  UNISWAP = "Uniswap",
  BANCOR = "Bancor",
  Oasis = "Oasis",
  COMPOUND = "Compound",
  BZX = "Fulcrum",
  ZEROX = "0x",
  MakerDAO = "MakerDAO",
  CHAI = "Chai",
  PARASWAPPOOL = "ParaSwapPool",
  AAVE = "Aave",
}

export type RateOptions = {
  excludeDEXS?: string,
  includeDEXS?: string,
  includeMPDEXS?: string,
  excludeMPDEXS?: string,
}

export type TransactionRoute = {
  exchange: Address,
  targetExchange: Address | undefined,
  percent: NumberAsString,
  payload: string,
  networkFee: NumberAsString
}

export type TransactionPath = {
  from: Address
  to: Address
  routes: TransactionRoute[]
}

export type TransactionParams = {
  value: PriceString
  fromToken: Address
  toToken: Address
  fromAmount: PriceString
  toAmount: PriceString
  expectedAmount: PriceString
  path: TransactionPath[]
  mintPrice: PriceString
  beneficiary: Address
  donationPercentage: NumberAsString
  referrer: Address
}

export type TransactionData = {
  from: Address,
  to: Address,
  data: string,
  chainId: number,
  value: PriceString,
  gasPrice: PriceString,
  gas: NumberAsString,

}
