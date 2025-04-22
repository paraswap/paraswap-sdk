import type {
  ConstructProviderFetchInput,
  RequestParameters,
} from '../../types';
import type { NFTOrderToSend, NFTOrderFromAPI } from './helpers/types';
import {
  BuildNFTOrderFunctions,
  BuildNFTOrderInput,
  constructBuildNFTOrder,
} from './buildOrder';
import {
  CancelNFTOrderFunctions,
  constructCancelNFTOrder,
} from './cancelOrder';
import { constructGetNFTOrders, GetNFTOrdersFunctions } from './getOrders';
import { constructPostNFTOrder, PostNFTOrderFunctions } from './postOrder';
import { constructSignNFTOrder, SignNFTOrderFunctions } from './signOrder';
import {
  constructApproveTokenForNFTOrder,
  ApproveTokenForNFTOrderFunctions,
} from './approveForOrder';
import {
  GetNFTOrdersContractFunctions,
  constructGetNFTOrdersContract,
} from './getOrdersContract';
import {
  BuildNFTOrdersTxFunctions,
  constructBuildNFTOrderTx,
} from './transaction';

type SubmitNFTOrder = (
  buildNFTOrderParams: BuildNFTOrderInput,
  extra?: { permitMakerAsset?: string },
  requestParams?: RequestParameters
) => Promise<NFTOrderFromAPI>;

export type SubmitNFTOrderFuncs = {
  submitNFTOrder: SubmitNFTOrder;
  submitP2POrder: SubmitNFTOrder;
};

export const constructSubmitNFTOrder = (
  options: ConstructProviderFetchInput<any, 'signTypedDataCall'>
): SubmitNFTOrderFuncs => {
  const { buildNFTOrder } = constructBuildNFTOrder(options);
  const { signNFTOrder } = constructSignNFTOrder(options);
  const { postNFTLimitOrder, postNFTP2POrder } = constructPostNFTOrder(options);

  const prepareNFTOrder = async (
    buildNFTOrderParams: BuildNFTOrderInput,
    extra?: { permitMakerAsset?: string }
  ): Promise<NFTOrderToSend> => {
    const orderData = await buildNFTOrder(buildNFTOrderParams);
    const signature = await signNFTOrder(orderData);

    const orderWithSignature: NFTOrderToSend = {
      ...orderData.data,
      ...extra,
      signature,
    };

    return orderWithSignature;
  };

  const submitNFTOrder: SubmitNFTOrder = async (
    buildNFTOrderParams,
    extra = {},
    requestParams
  ) => {
    const orderWithSignature: NFTOrderToSend = await prepareNFTOrder(
      buildNFTOrderParams,
      extra
    );

    const newOrder = await postNFTLimitOrder(orderWithSignature, requestParams);

    return newOrder;
  };

  const submitP2POrder: SubmitNFTOrder = async (
    buildNFTOrderParams,
    extra = {},
    requestParams
  ) => {
    const orderWithSignature: NFTOrderToSend = await prepareNFTOrder(
      buildNFTOrderParams,
      extra
    );

    const newOrder = await postNFTP2POrder(orderWithSignature, requestParams);

    return newOrder;
  };

  return { submitNFTOrder, submitP2POrder };
};

export type NFTOrderHandlers<T> = SubmitNFTOrderFuncs &
  BuildNFTOrderFunctions &
  SignNFTOrderFunctions &
  PostNFTOrderFunctions &
  GetNFTOrdersFunctions &
  GetNFTOrdersContractFunctions &
  BuildNFTOrdersTxFunctions &
  CancelNFTOrderFunctions<T> &
  ApproveTokenForNFTOrderFunctions<T>;

/** @description construct SDK with every NFTOrders-related method, fetching from API and contract calls */
export const constructAllNFTOrdersHandlers = <TxResponse>(
  options: ConstructProviderFetchInput<
    TxResponse,
    'signTypedDataCall' | 'transactCall' | 'staticCall'
  >
): NFTOrderHandlers<TxResponse> => {
  const NFTOrdersGetters = constructGetNFTOrders(options);
  const NFTOrdersContractGetter = constructGetNFTOrdersContract(options);

  const NFTOrdersSubmit = constructSubmitNFTOrder(options);
  const NFTOrdersBuild = constructBuildNFTOrder(options);
  const NFTOrdersSign = constructSignNFTOrder(options);
  const NFTOrdersPost = constructPostNFTOrder(options);

  const NFTOrdersCancel = constructCancelNFTOrder(options);
  const NFTOrdersApproveToken = constructApproveTokenForNFTOrder(options);

  const NFTOrdersBuildTx = constructBuildNFTOrderTx(options);

  return {
    ...NFTOrdersGetters,
    ...NFTOrdersContractGetter,
    ...NFTOrdersSubmit,
    ...NFTOrdersBuild,
    ...NFTOrdersSign,
    ...NFTOrdersPost,
    ...NFTOrdersCancel,
    ...NFTOrdersApproveToken,
    ...NFTOrdersBuildTx,
  };
};
