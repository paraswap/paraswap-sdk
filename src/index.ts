import { constructApproveToken, ApproveTokenFunctions } from './approve';
import { constructGetBalances, GetBalancesFunctions } from './balance';
import { constructGetSpender, GetSpenderFunctions } from './spender';
import { constructGetAdapters, ConstructAdaptersFunctions } from './adapters';
import {
  constructGetTokens,
  constructToken,
  GetTokensFunctions,
  Token,
  PriceString,
} from './token';
import { BuildTxFunctions, constructBuildTx } from './transaction';
import {
  constructContractCaller,
  constructFetcher,
  isFetcherError,
} from './helpers';
import {
  ConstructBaseInput,
  ConstructFetchInput,
  ConstructProviderFetchInput,
  Address,
} from './types';
import { UnionToIntersection } from 'ts-essentials';

export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('dev only output');
  }
  return a + b;
};
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
  constructContractCaller,
  constructFetcher,
  constructToken,
  constructGetAdapters,
  isFetcherError,
};
// @TODO missing fro parity with older SDK:
// getRate, getRateByRoute

export type {
  ApproveTokenFunctions,
  GetBalancesFunctions,
  GetSpenderFunctions,
  GetTokensFunctions,
  BuildTxFunctions,
  ConstructFetchInput,
  ConstructProviderFetchInput,
  ConstructAdaptersFunctions,
  Token,
  Address,
  PriceString,
};

export type SDKConfig = ConstructProviderFetchInput & ConstructFetchInput;

export type AllSDKMethods = GetBalancesFunctions &
  GetTokensFunctions &
  GetSpenderFunctions &
  ApproveTokenFunctions &
  BuildTxFunctions &
  ConstructAdaptersFunctions;

type AnyFunction = (...args: any[]) => any;

type SDKFunction<T extends ConstructBaseInput> = (
  config: T
) => Record<string, AnyFunction>;

type IntersectionOfReturns<Funcs extends AnyFunction[]> = UnionToIntersection<
  ReturnType<Funcs[number]>
>;

export const constructPartialSDK = <
  T extends ConstructBaseInput,
  Funcs extends [SDKFunction<T>, ...SDKFunction<T>[]]
>(
  config: T, // config is auto-inferred to cover the used functions
  ...funcs: Funcs
): IntersectionOfReturns<Funcs> => {
  const sdkFuncs = funcs.reduce<Partial<IntersectionOfReturns<Funcs>>>(
    (accum, func) => {
      const sdkSlice = func(config);
      return Object.assign(accum, sdkSlice);
    },
    {}
  );

  return sdkFuncs as IntersectionOfReturns<Funcs>;
};

export const constructSDK = (config: SDKConfig): AllSDKMethods =>
  // include all available functions
  constructPartialSDK(
    config,
    constructGetBalances,
    constructGetTokens,
    constructGetSpender,
    constructApproveToken,
    constructBuildTx,
    constructGetAdapters
  );
