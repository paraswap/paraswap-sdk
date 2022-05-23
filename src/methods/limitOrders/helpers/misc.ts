import type { Address } from '../../../types';
import { OrderData } from './buildOrderData';

// @TODO either fill in or fetch from API
export const chainId2verifyingContract: Record<number, Address> = {
  1: '0xDEF171Fe48CF0115B1d80b88dc8eAB59176FEe57',
  3: '0xA21eBa22ab9EBE4eCE0DaEBAaBEb5F8098a404c9',
};

export const chainId2BlockContractDeployedAt: Record<number, number> = {
  3: 12240016,
};

export function sanitizeOrderData({
  nonceAndMeta,
  expiry,
  makerAsset,
  takerAsset,
  maker,
  taker,
  makerAmount,
  takerAmount,
}: OrderData & Record<string, any>): OrderData {
  return {
    nonceAndMeta,
    expiry,
    makerAsset,
    takerAsset,
    maker,
    taker,
    makerAmount,
    takerAmount,
  };
}
