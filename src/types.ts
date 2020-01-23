import BigNumber from "bignumber.js";

export type Address = string;
export type PriceString = string;
export type NumberAsString = string;

export type NetworkID = "1" | "3" | "42" | "4";

export const ETHER_ADDRESS = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';

export const UNLIMITED_ALLOWANCE = new BigNumber(2).pow(256).minus(1).toFixed();

export type APIQuery = {
  [name: string]: string | number | boolean
}

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
  srcAmount: PriceString
}

export type OthersRate = {
  exchange: string
  rate: NumberAsString
  unit: NumberAsString
}

export type OptimalRates = {
  amount: PriceString,
  bestRoute: Rate[],
  others?: OthersRate[]
};

export class User {
  constructor(public address: Address, public network: NetworkID) {
  }
}

export class Token {
  constructor(
    public address: Address,
    public decimals: number,
    public symbol: string,
    public allowance?: string
  ) {
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
