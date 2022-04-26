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
import { constructFillLimitOrder, FillLimitOrderFunctions } from './fillOrders';
import {
  constructApproveTokenForLimitOrder,
  ApproveTokenForLimitOrderFunctions,
} from './approveForOrder';

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

export type LimitOrderHandlers<T> = SubmitLimitOrderFuncs &
  GetLimitOrdersFunctions &
  CancelLimitOrderFunctions<T> &
  FillLimitOrderFunctions<T> &
  ApproveTokenForLimitOrderFunctions<T>;

export const constructAllLimitOrdersHandlers = <T>(
  options: ConstructProviderFetchInput<
    any,
    'signTypedDataCall' | 'transactCall'
  >
): LimitOrderHandlers<T> => {
  const limitOrdersGetters = constructGetLimitOrders(options);
  const limitOrdersSubmit = constructSubmitLimitOrder(options);
  const limitOrdersCancel = constructCancelLimitOrder(options);
  const limitOrdersFill = constructFillLimitOrder(options);
  const limitOrdersApproveToken = constructApproveTokenForLimitOrder(options);

  return {
    ...limitOrdersGetters,
    ...limitOrdersSubmit,
    ...limitOrdersCancel,
    ...limitOrdersFill,
    ...limitOrdersApproveToken,
  };
};
