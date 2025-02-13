import type { ConstructProviderFetchInput } from '../../types';
import type { ParaswapDeltaAuction } from './helpers/types';
import {
  BuildDeltaOrderDataParams,
  BuildDeltaOrderFunctions,
  constructBuildDeltaOrder,
} from './buildDeltaOrder';
import {
  constructPostDeltaOrder,
  PostDeltaOrderFunctions,
} from './postDeltaOrder';
import {
  constructSignDeltaOrder,
  SignDeltaOrderFunctions,
} from './signDeltaOrder';
import {
  GetDeltaContractFunctions,
  constructGetDeltaContract,
} from './getDeltaContract';
import {
  constructGetDeltaPrice,
  GetDeltaPriceFunctions,
} from './getDeltaPrice';
import {
  constructGetDeltaOrders,
  GetDeltaOrdersFunctions,
} from './getDeltaOrders';
import {
  constructGetPartnerFee,
  GetPartnerFeeFunctions,
} from './getPartnerFee';
import {
  ApproveTokenForDeltaFunctions,
  constructApproveTokenForDelta,
} from './approveForDelta';
import {
  constructGetBridgeInfo,
  GetBridgeInfoFunctions,
} from './getBridgeInfo';
import {
  constructGetMulticallHandlers,
  GetMulticallHandlersFunctions,
} from './getMulticallHandlers';
import {
  constructIsTokenSupportedInDelta,
  IsTokenSupportedInDeltaFunctions,
} from './isTokenSupportedInDelta';

export type SubmitDeltaOrderParams = BuildDeltaOrderDataParams & {
  /** @description designates the Order as being able to be partilly filled, as opposed to fill-or-kill */
  partiallyFillable?: boolean;
};

type SubmitDeltaOrder = (
  orderParams: SubmitDeltaOrderParams
) => Promise<ParaswapDeltaAuction>;

export type SubmitDeltaOrderFuncs = {
  submitDeltaOrder: SubmitDeltaOrder;
};

export const constructSubmitDeltaOrder = (
  options: ConstructProviderFetchInput<any, 'signTypedDataCall'>
): SubmitDeltaOrderFuncs => {
  const { buildDeltaOrder } = constructBuildDeltaOrder(options);
  const { signDeltaOrder } = constructSignDeltaOrder(options);
  const { postDeltaOrder } = constructPostDeltaOrder(options);

  const submitDeltaOrder: SubmitDeltaOrder = async (orderParams) => {
    const orderData = await buildDeltaOrder(orderParams);
    const signature = await signDeltaOrder(orderData);

    const response = await postDeltaOrder({
      signature,
      partner: orderParams.partner,
      order: orderData.data,
      partiallyFillable: orderParams.partiallyFillable,
    });

    return response;
  };

  return { submitDeltaOrder };
};

export type DeltaOrderHandlers<T> = SubmitDeltaOrderFuncs &
  ApproveTokenForDeltaFunctions<T> &
  BuildDeltaOrderFunctions &
  GetDeltaOrdersFunctions &
  GetDeltaPriceFunctions &
  GetDeltaContractFunctions &
  GetPartnerFeeFunctions &
  GetMulticallHandlersFunctions &
  GetBridgeInfoFunctions &
  IsTokenSupportedInDeltaFunctions &
  PostDeltaOrderFunctions &
  SignDeltaOrderFunctions;

/** @description construct SDK with every Delta Order-related method, fetching from API and Order signing */
export const constructAllDeltaOrdersHandlers = <TxResponse>(
  options: ConstructProviderFetchInput<
    TxResponse,
    'signTypedDataCall' | 'transactCall'
  >
): DeltaOrderHandlers<TxResponse> => {
  const deltaOrdersGetters = constructGetDeltaOrders(options);
  const deltaOrdersContractGetter = constructGetDeltaContract(options);
  const deltaPrice = constructGetDeltaPrice(options);

  const partnerFee = constructGetPartnerFee(options);
  const bridgeInfo = constructGetBridgeInfo(options);
  const isTokenSupportedInDelta = constructIsTokenSupportedInDelta(options);
  const multicallHandlers = constructGetMulticallHandlers(options);

  const approveTokenForDelta = constructApproveTokenForDelta(options);

  const deltaOrdersSubmit = constructSubmitDeltaOrder(options);

  const deltaOrdersBuild = constructBuildDeltaOrder(options);
  const deltaOrdersSign = constructSignDeltaOrder(options);
  const deltaOrdersPost = constructPostDeltaOrder(options);

  return {
    ...deltaOrdersGetters,
    ...deltaOrdersContractGetter,
    ...deltaPrice,
    ...partnerFee,
    ...bridgeInfo,
    ...isTokenSupportedInDelta,
    ...multicallHandlers,
    ...approveTokenForDelta,
    ...deltaOrdersSubmit,
    ...deltaOrdersBuild,
    ...deltaOrdersSign,
    ...deltaOrdersPost,
  };
};
