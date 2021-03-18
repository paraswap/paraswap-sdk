import BigNumber from 'bignumber.js';

export enum SwapSide {
  BUY = 'BUY',
  SELL = 'SELL',
}

export const priceFeedNetworks = {
  1: '0x12295f06DA62693086F5DA45b78e20B778060853',
  42: '',
};

export const MAX_UINT = new BigNumber(2).pow(256).minus(1);
