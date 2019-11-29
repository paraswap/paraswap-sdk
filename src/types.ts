export type Address = string;
export type PriceString = string;
export type NumberAsString = string;

export type NetworkID = "1" | "3" | "42" | "4";

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
