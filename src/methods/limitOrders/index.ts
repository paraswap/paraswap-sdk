import type { ConstructProviderFetchInput } from '../../types';
import type { LimitOrderToSend, OpenLimitOrder } from './helpers/types';
import { BuildLimitOrderInput, constructBuildLimitOrder } from './buildOrder';
import {
  CancelLimitOrderFunctions,
  constructCancelLimitOrder,
} from './cancelOrder';
import { constructGetLimitOrders, GetLimitOrdersFunctions } from './getOrders';
import { constructPostLimitOrder } from './postOrder';
import { constructSignLimitOrder } from './signOrder';
import { constructFillLimitOrder, FillLimitOrderFunctions } from './fillOrders';
import {
  constructApproveTokenForLimitOrder,
  ApproveTokenForLimitOrderFunctions,
} from './approveForOrder';
import {
  GetLimitOrdersContractFunctions,
  constructGetLimitOrdersContract,
} from './getOrdersContract';

type SubmitLimitOrder = (
  buildLimitOrderParams: BuildLimitOrderInput,
  extra?: { permitMakerAsset?: string },
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
    extra = {},
    signal
  ) => {
    const orderData = buildLimitOrder(buildLimitOrderParams);
    const signature = await signLimitOrder(orderData);

    const orderWithSignature: LimitOrderToSend = {
      ...orderData.data,
      ...extra,
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
  GetLimitOrdersContractFunctions &
  CancelLimitOrderFunctions<T> &
  FillLimitOrderFunctions<T> &
  ApproveTokenForLimitOrderFunctions<T>;

export const constructAllLimitOrdersHandlers = <T>(
  options: ConstructProviderFetchInput<
    any,
    'signTypedDataCall' | 'transactCall' | 'staticCall' | 'getLogsCall'
  >
): LimitOrderHandlers<T> => {
  const limitOrdersGetters = constructGetLimitOrders(options);
  const limitOrdersContractGetter = constructGetLimitOrdersContract(options);
  const limitOrdersSubmit = constructSubmitLimitOrder(options);
  const limitOrdersCancel = constructCancelLimitOrder(options);
  const limitOrdersFill = constructFillLimitOrder(options);
  const limitOrdersApproveToken = constructApproveTokenForLimitOrder(options);

  return {
    ...limitOrdersGetters,
    ...limitOrdersContractGetter,
    ...limitOrdersSubmit,
    ...limitOrdersCancel,
    ...limitOrdersFill,
    ...limitOrdersApproveToken,
  };
};
