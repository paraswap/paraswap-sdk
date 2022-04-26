import type { ConstructProviderFetchInput } from '../../types';
import type { LimitOrderToSend } from './helpers/types';
import { BuildLimitOrderInput, constructBuildLimitOrder } from './buildOrder';
import {
  CancelLimitOrderFunctions,
  constructCancelLimitOrder,
} from './cancelOrder';
import { constructGetLimitOrders, GetLimitOrdersFunctions } from './getOrders';
import { constructPostLimitOrder, OpenLimitOrder } from './postOrder';
import { constructSignLimitOrder } from './signOrder';

type SubmitLimitOrder = (
  buildLimitOrderParams: BuildLimitOrderInput,
  signal?: AbortSignal
) => Promise<OpenLimitOrder>;

export type SubmitLimitOrderFuncs = {
  submitLimitOrder: SubmitLimitOrder;
};

export const constructSubmitLimitOrder = (
  options: ConstructProviderFetchInput<any, 'signTypedDataCall'>
): SubmitLimitOrderFuncs => {
  const { buildLimitOrder } = constructBuildLimitOrder(options);
  const { signLimitOrder } = constructSignLimitOrder(options);
  const { postLimitOrder } = constructPostLimitOrder(options);

  const submitLimitOrder: SubmitLimitOrder = async (
    buildLimitOrderParams,
    signal
  ) => {
    const orderData = buildLimitOrder(buildLimitOrderParams);
    const signature = await signLimitOrder(orderData);

    const orderWithSignature: LimitOrderToSend = {
      ...orderData.data,
      chainId: orderData.domain.chainId,
      signature,
    };

    const newOrder = await postLimitOrder(orderWithSignature, signal);

    console.log('newOrder created', newOrder);
    return newOrder;
  };

  return { submitLimitOrder };
};
