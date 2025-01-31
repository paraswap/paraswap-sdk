import type {
  ConstructProviderFetchInput,
  RequestParameters,
} from '../../types';
import type { LimitOrderToSend, LimitOrderFromApi } from './helpers/types';
import {
  BuildLimitOrderFunctions,
  BuildLimitOrderInput,
  constructBuildLimitOrder,
} from './buildOrder';
import {
  CancelLimitOrderFunctions,
  constructCancelLimitOrder,
} from './cancelOrder';
import { constructGetLimitOrders, GetLimitOrdersFunctions } from './getOrders';
import { constructPostLimitOrder, PostLimitOrderFunctions } from './postOrder';
import { constructSignLimitOrder, SignLimitOrderFunctions } from './signOrder';
import {
  constructApproveTokenForLimitOrder,
  ApproveTokenForLimitOrderFunctions,
} from './approveForOrder';
import {
  GetLimitOrdersContractFunctions,
  constructGetLimitOrdersContract,
} from './getOrdersContract';
import {
  BuildLimitOrdersTxFunctions,
  constructBuildLimitOrderTx,
} from './transaction';
import type { Address } from '@paraswap/core';
import {
  FillOrderDirectlyFunctions,
  constructFillOrderDirectly,
} from './fillOrderDirectly';

type SubmitLimitOrder = (
  buildLimitOrderParams: BuildLimitOrderInput,
  extra?: { permitMakerAsset?: string },
  requestParams?: RequestParameters
) => Promise<LimitOrderFromApi>;

type SubmitP2POrder = (
  buildLimitOrderParams: BuildLimitOrderInput & { taker: Address },
  extra?: { permitMakerAsset?: string },
  requestParams?: RequestParameters
) => Promise<LimitOrderFromApi>;

export type SubmitLimitOrderFuncs = {
  submitLimitOrder: SubmitLimitOrder;
  submitP2POrder: SubmitP2POrder;
};

export const constructSubmitLimitOrder = (
  options: ConstructProviderFetchInput<any, 'signTypedDataCall'>
): SubmitLimitOrderFuncs => {
  const { buildLimitOrder } = constructBuildLimitOrder(options);
  const { signLimitOrder } = constructSignLimitOrder(options);
  const { postLimitOrder, postP2POrder } = constructPostLimitOrder(options);

  const prepareLimitOrder = async (
    buildLimitOrderParams: BuildLimitOrderInput,
    extra?: { permitMakerAsset?: string }
  ): Promise<LimitOrderToSend> => {
    const orderData = await buildLimitOrder(buildLimitOrderParams);
    const signature = await signLimitOrder(orderData);

    const orderWithSignature: LimitOrderToSend = {
      ...orderData.data,
      ...extra,
      signature,
    };

    return orderWithSignature;
  };

  const submitLimitOrder: SubmitLimitOrder = async (
    buildLimitOrderParams,
    extra = {},
    requestParams
  ) => {
    const orderWithSignature: LimitOrderToSend = await prepareLimitOrder(
      buildLimitOrderParams,
      extra
    );

    const newOrder = await postLimitOrder(orderWithSignature, requestParams);

    return newOrder;
  };

  const submitP2POrder: SubmitP2POrder = async (
    buildLimitOrderParams,
    extra = {},
    requestParams
  ) => {
    const orderWithSignature: LimitOrderToSend = await prepareLimitOrder(
      buildLimitOrderParams,
      extra
    );

    const newOrder = await postP2POrder(orderWithSignature, requestParams);

    return newOrder;
  };

  return { submitLimitOrder, submitP2POrder };
};

export type LimitOrderHandlers<T> = SubmitLimitOrderFuncs &
  BuildLimitOrderFunctions &
  SignLimitOrderFunctions &
  PostLimitOrderFunctions &
  GetLimitOrdersFunctions &
  GetLimitOrdersContractFunctions &
  BuildLimitOrdersTxFunctions &
  CancelLimitOrderFunctions<T> &
  ApproveTokenForLimitOrderFunctions<T> &
  FillOrderDirectlyFunctions<T>;

/** @description construct SDK with every LimitOrders-related method, fetching from API and contract calls */
export const constructAllLimitOrdersHandlers = <TxResponse>(
  options: ConstructProviderFetchInput<
    TxResponse,
    'signTypedDataCall' | 'transactCall' | 'staticCall'
  >
): LimitOrderHandlers<TxResponse> => {
  const limitOrdersGetters = constructGetLimitOrders(options);
  const limitOrdersContractGetter = constructGetLimitOrdersContract(options);

  const limitOrdersSubmit = constructSubmitLimitOrder(options);
  const limitOrdersBuild = constructBuildLimitOrder(options);
  const limitOrdersSign = constructSignLimitOrder(options);
  const limitOrdersPost = constructPostLimitOrder(options);

  const limitOrdersCancel = constructCancelLimitOrder(options);
  const limitOrdersApproveToken = constructApproveTokenForLimitOrder(options);

  const limitOrdersFillOrderDirectly = constructFillOrderDirectly(options);

  const limitOrdersBuildTx = constructBuildLimitOrderTx(options);

  return {
    ...limitOrdersGetters,
    ...limitOrdersContractGetter,
    ...limitOrdersSubmit,
    ...limitOrdersBuild,
    ...limitOrdersSign,
    ...limitOrdersPost,
    ...limitOrdersCancel,
    ...limitOrdersApproveToken,
    ...limitOrdersFillOrderDirectly,
    ...limitOrdersBuildTx,
  };
};
