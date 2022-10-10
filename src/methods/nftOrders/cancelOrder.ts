import type { ConstructProviderFetchInput, TxSendOverrides } from '../../types';
import { constructCancelLimitOrder } from '../limitOrders/cancelOrder';

type CancelOrder<T> = (
  orderHash: string,
  overrides?: TxSendOverrides
) => Promise<T>;

type CancelOrderBulk<T> = (
  orderHashes: string[],
  overrides?: TxSendOverrides
) => Promise<T>;

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
