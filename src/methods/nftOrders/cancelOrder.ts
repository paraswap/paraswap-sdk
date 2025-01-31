import type { ConstructProviderFetchInput } from '../../types';
import {
  CancelOrder,
  CancelOrderBulk,
  constructCancelLimitOrder,
} from '../limitOrders/cancelOrder';

export type CancelNFTOrderFunctions<T> = {
  cancelNFTOrder: CancelOrder<T>;
  cancelNFTOrderBulk: CancelOrderBulk<T>;
};

// should work the same as for LimitOrders
export const constructCancelNFTOrder = <T>(
  options: ConstructProviderFetchInput<T, 'transactCall'>
): CancelNFTOrderFunctions<T> => {
  const { cancelLimitOrder, cancelLimitOrderBulk } =
    constructCancelLimitOrder(options);
  return {
    cancelNFTOrder: cancelLimitOrder,
    cancelNFTOrderBulk: cancelLimitOrderBulk,
  };
};
