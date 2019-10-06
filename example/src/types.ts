import BigNumber from "./swapper";

export type Rate = {
  destAmount: string
  exchange: string
  percent: string
  srcAmount: string
}

export type OthersRate = {
  exchange: "string"
  rate: string
  unit: string
}

export type OptimalRates = {
  amount: string,
  bestRoute: Rate[],
  others: OthersRate[]
};

export class User {
  constructor(public address: string, public network: number) {
  }
}

export class Token {
  constructor(
    public address: string,
    public decimals: number,
    public symbol: string,
    public allowance?: BigNumber
  ) {
  }
}
