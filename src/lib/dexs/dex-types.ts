export type DexParams = {
  callees: string[],
  calldata: string[],
  values: string[]
}

export type DEXData = {
  name: string,
  srcAmount: string,
  destAmount: string
}

export type UniswapV1DEXData = DEXData & {
  exchange: string,
  factory?: string,
  deadline: number,
  minEthBought: string,
}

export type ExchangeData = {
  callees: string[],
  values: string[]
  startIndexes: number[],
  calldata: string
}

export type SwapData = ExchangeData & {
  srcToken: string,
  destToken: string,
  srcAmount: string,
  minDestinationAmount: string
}
