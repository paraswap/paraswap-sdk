import BigNumber from "bignumber.js";

export type Address = string;
export type PriceString = string;
export type NumberAsString = string;

export type APIError = {
  error: string
}

export type Transaction = {
  from: Address,
  to: Address,
  value: string,
  data: string,
  chainId: number,
}

export type Rate = {
  destAmount: PriceString
  exchange: Address
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
  others: OthersRate[]
};

export class User {
  constructor(public address: Address, public network: number) {
  }
}

export class Token {
  constructor(
    public address: Address,
    public decimals: number,
    public symbol: string,
    public allowance?: BigNumber
  ) {
  }
}
