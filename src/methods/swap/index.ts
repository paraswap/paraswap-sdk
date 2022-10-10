import { constructPartialSDK, SDKConfig } from '../../sdk/partial';
import { ConstructProviderFetchInput } from '../../types';
import { constructGetAdapters, GetAdaptersFunctions } from './adapters';
import { ApproveTokenFunctions, constructApproveToken } from './approve';
import { constructGetBalances, GetBalancesFunctions } from './balance';
import { constructGetRate, GetRateFunctions } from './rates';
import { constructGetSpender, GetSpenderFunctions } from './spender';
import { constructGetTokens, GetTokensFunctions } from './token';
import { BuildTxFunctions, constructBuildTx } from './transaction';

export type SwapSDKMethods<TxResponse> = GetBalancesFunctions &
  GetTokensFunctions &
  GetSpenderFunctions &
  ApproveTokenFunctions<TxResponse> &
  BuildTxFunctions &
  GetAdaptersFunctions &
  GetRateFunctions;

/** @description construct SDK with every Swap-related method, fetching from API and token approval */
export const constructSwapSDK = <TxResponse>(
  config: SDKConfig<TxResponse>
): SwapSDKMethods<TxResponse> =>
  // include all available Swap methods
  constructPartialSDK(
    config,
    constructGetBalances,
    constructGetTokens,
    constructGetSpender,
    constructApproveToken as (
      options: ConstructProviderFetchInput<TxResponse, 'transactCall'>
    ) => ApproveTokenFunctions<TxResponse>, // @TODO try Instantiation Expression when TS 4.7 `as constructApproveToken<TxResponse>`
    constructBuildTx,
    constructGetAdapters,
    constructGetRate
  );
