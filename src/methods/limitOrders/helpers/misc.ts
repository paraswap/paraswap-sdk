import type { Address } from '../../../types';

// @TODO either fill in or fetch from API
export const chainId2verifyingContract: Record<number, Address> = {
  1: '0xDEF171Fe48CF0115B1d80b88dc8eAB59176FEe57',
  3: '0xe10ada2399359f004264c9d399a1DD6E83eD6660',
};

export const chainId2BlockContractDeployedAt: Record<number, number> = {
  3: 12223870,
};
