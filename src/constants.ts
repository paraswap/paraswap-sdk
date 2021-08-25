import BigNumber from 'bignumber.js';

export { ContractMethod, SwapSide } from 'paraswap-core';

// TODO: This is legacy and can be removed
export enum PricingMethod {
  megapath = 'megapath',
  multipath = 'multipath',
  simplepath = 'simplepath',
}

export const MAX_UINT = new BigNumber(2).pow(256).minus(1);
