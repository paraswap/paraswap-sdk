import BigNumber from 'bignumber.js';

export enum SwapSide {
  BUY = 'BUY',
  SELL = 'SELL',
}

export enum ContractMethod {
  swapOnUniswap = 'swapOnUniswap',
  buyOnUniswap = 'buyOnUniswap',
  swapOnUniswapFork = 'swapOnUniswapFork',
  buyOnUniswapFork = 'buyOnUniswapFork',
  simpleBuy = 'simpleBuy',
  simpleSwap = 'simpleSwap',
  multiSwap = 'multiSwap',
  buy = 'buy',
  megaSwap = 'megaSwap',
}

export enum AugustusVersion {
  v2 = 2,
  v3 = 3,
  v4 = 4,
}

export const AdapterAugustusVersionMap: {
  [adapterVersion: string]: AugustusVersion;
} = {
  ['2.0.0']: AugustusVersion.v2,
  ['2.1.0']: AugustusVersion.v2,
  ['2.2.0']: AugustusVersion.v2,
  ['3.0.0']: AugustusVersion.v3,
  ['4.0.0']: AugustusVersion.v4,
};

export const latestAugustusVersion = AugustusVersion.v3;

export const priceFeedNetworks = {
  1: '0x12295f06DA62693086F5DA45b78e20B778060853',
  42: '',
};

export const MAX_UINT = new BigNumber(2).pow(256).minus(1);
