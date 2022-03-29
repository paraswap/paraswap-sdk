import { constructApproveToken, ApproveTokenFunctions } from './approve';
import { constructGetBalances, GetBalancesFunctions } from './balance';
import { constructGetSpender, GetSpenderFunctions } from './spender';
import { constructGetAdapters, AdaptersFunctions } from './adapters';
import { constructGetRate, GetRateFunctions } from './rates';
import {
  constructGetTokens,
  constructToken,
  GetTokensFunctions,
  Token,
  PriceString,
} from './token';
import { BuildTxFunctions, constructBuildTx } from './transaction';
import {
  constructEthersContractCaller,
  constructWeb3ContractCaller,
  constructAxiosFetcher,
  constructFetchFetcher,
  isFetcherError,
} from './helpers';
import {
  ConstructBaseInput,
  ConstructFetchInput,
  ConstructProviderFetchInput,
  Address,
} from './types';
import { UnionToIntersection } from 'ts-essentials';

export type { TransactionParams } from './transaction';
export type { Web3UnpromiEvent } from './helpers';
export * from './constants';

// can import these individually
// and use in constructPartialSDK only what you need
// unused should tree-shake
export {
  constructApproveToken,
  constructGetBalances, // getAllowances is inside
  constructGetSpender, // this was getTokenTransferProxy
  constructGetTokens,
  constructBuildTx,
  constructEthersContractCaller,
  constructWeb3ContractCaller,
  constructAxiosFetcher,
  constructFetchFetcher,
  constructToken,
  constructGetAdapters,
  constructGetRate,
  isFetcherError,
};

export type {
  ApproveTokenFunctions,
  GetBalancesFunctions,
  GetSpenderFunctions,
  GetTokensFunctions,
  BuildTxFunctions,
  ConstructFetchInput,
  ConstructProviderFetchInput,
  AdaptersFunctions as ConstructAdaptersFunctions,
  Token,
  Address,
  PriceString,
};

export type SDKConfig<TxResponse = any> = ConstructProviderFetchInput<
  TxResponse,
  'transactCall'
> &
  ConstructFetchInput;

export type AllSDKMethods<TxResponse> = GetBalancesFunctions &
  GetTokensFunctions &
  GetSpenderFunctions &
  ApproveTokenFunctions<TxResponse> &
  BuildTxFunctions &
  AdaptersFunctions &
  GetRateFunctions;

type AnyFunction = (...args: any[]) => any;

type SDKFunction<T extends ConstructBaseInput> = (
  config: T
) => Record<string, AnyFunction>;

type IntersectionOfReturns<Funcs extends AnyFunction[]> = UnionToIntersection<
  ReturnType<Funcs[number]>
>;

type ApproveTokenFunctionsKeys = keyof ApproveTokenFunctions<any>;

type PartialSDKResult<
  Config extends ConstructBaseInput,
  Funcs extends [SDKFunction<Config>, ...SDKFunction<Config>[]]
> = IntersectionOfReturns<Funcs> extends ApproveTokenFunctions<any> // if there are ApproveTokenFunctions in the intersection
  ? // which means constructApproveToken was passed in Funcs
    Omit<IntersectionOfReturns<Funcs>, ApproveTokenFunctionsKeys> &
      ApproveTokenFunctions<
        // infer what TxResponse was used in Config
        Config extends SDKConfig<infer TxResponse> ? TxResponse : unknown
        // and make the ApproveTokenFunctions<unknow> in the intersection a specific ApproveTokenFunctions<TxResponse>
      >
  : IntersectionOfReturns<Funcs>;

export const constructPartialSDK = <
  Config extends ConstructBaseInput,
  Funcs extends [SDKFunction<Config>, ...SDKFunction<Config>[]]
>(
  config: Config, // config is auto-inferred to cover the used functions
  ...funcs: Funcs
): PartialSDKResult<Config, Funcs> => {
  const sdkFuncs = funcs.reduce<Partial<IntersectionOfReturns<Funcs>>>(
    (accum, func) => {
      const sdkSlice = func(config);
      return Object.assign(accum, sdkSlice);
    },
    {}
  );

  return sdkFuncs as PartialSDKResult<Config, Funcs>;
};

export const constructSDK = <TxResponse = any>(
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

export { ParaSwap } from './legacy';
