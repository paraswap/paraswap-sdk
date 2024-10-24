import { constructPartialSDK, SDKConfig } from '../../sdk/partial';
import { constructGetAdapters, GetAdaptersFunctions } from './adapters';
import { ApproveTokenFunctions, constructApproveToken } from './approve';
import { constructGetBalances, GetBalancesFunctions } from './balance';
import { constructGetRate, GetRateFunctions } from './rates';
import { constructGetSpender, GetSpenderFunctions } from './spender';
import { constructSwapTx, GetSwapTxFunctions } from './swapTx';
import { constructGetTokens, GetTokensFunctions } from './token';
import { BuildTxFunctions, constructBuildTx } from './transaction';

export type SwapSDKMethods<TxResponse> = GetBalancesFunctions &
  GetTokensFunctions &
  GetSpenderFunctions &
  ApproveTokenFunctions<TxResponse> &
  BuildTxFunctions &
  GetAdaptersFunctions &
  GetRateFunctions &
  GetSwapTxFunctions;

/** @description construct SDK with every Swap-related method, fetching from API and token approval */
export const constructSwapSDK = <TxResponse>(
  config: SDKConfig<TxResponse>
): SwapSDKMethods<TxResponse> => {
  const constructApproveTokenWithTxResponse = constructApproveToken<TxResponse>;

  // include all available Swap methods
  return constructPartialSDK(
    config,
    constructGetBalances,
    constructGetTokens,
    constructGetSpender,
    constructApproveTokenWithTxResponse,
    constructBuildTx,
    constructGetAdapters,
    constructGetRate,
    constructSwapTx
  );
};
