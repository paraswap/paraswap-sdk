import {
  constructApproveToken,
  ApproveTokenFunctions,
} from '../methods/approve';
import { constructGetBalances, GetBalancesFunctions } from '../methods/balance';
import { constructGetSpender, GetSpenderFunctions } from '../methods/spender';
import {
  constructGetAdapters,
  GetAdaptersFunctions,
} from '../methods/adapters';
import { constructGetRate, GetRateFunctions } from '../methods/rates';
import { constructGetTokens, GetTokensFunctions } from '../methods/token';
import { constructBuildTx, BuildTxFunctions } from '../methods/transaction';
import { constructPartialSDK, SDKConfig } from './partial';
import type { ConstructProviderFetchInput } from '../types';

export type AllSDKMethods<TxResponse> = GetBalancesFunctions &
  GetTokensFunctions &
  GetSpenderFunctions &
  ApproveTokenFunctions<TxResponse> &
  BuildTxFunctions &
  GetAdaptersFunctions &
  GetRateFunctions;

/** @description construct SDK with every method, fetching from API and token approval */
export const constructFullSDK = <TxResponse = any>(
  config: SDKConfig<TxResponse>
): AllSDKMethods<TxResponse> =>
  // include all available functions
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
