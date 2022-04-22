import { ApproveTokenFunctions } from '../methods/approve';
import {
  ConstructBaseInput,
  ConstructFetchInput,
  ConstructProviderFetchInput,
} from '../types';
import { UnionToIntersection } from 'ts-essentials';

export type SDKConfig<TxResponse = any> = ConstructProviderFetchInput<
  TxResponse,
  'transactCall' | 'signTypedDataCall'
> &
  ConstructFetchInput;

type SDKFunction<T extends ConstructBaseInput> = (
  config: T
) => Record<string, AnyFunction | Record<string, AnyFunction>>;

type IntersectionOfReturns<Funcs extends AnyFunction[]> = UnionToIntersection<
  ReturnType<Funcs[number]>
>;

type ApproveTokenFunctionsKeys = keyof ApproveTokenFunctions<any>;
type CancelLimitOrderFunctionsKeys = keyof CancelLimitOrderFunctions<any>;
type TxResponseDetectKeys =
  | ApproveTokenFunctionsKeys
  | CancelLimitOrderFunctionsKeys;
type TxResponseDetectFuncs =
  | ApproveTokenFunctions<any>
  | CancelLimitOrderFunctions<any>;


type PartialSDKResult<
  Config extends ConstructBaseInput,
  Funcs extends [SDKFunction<Config>, ...SDKFunction<Config>[]]
> =
  // if can infer TxResponse inside Config
  Config extends SDKConfig<infer TxResponse>
    ? // if there are ApproveTokenFunctions or CancelLimitOrderFunctions in the intersection
      IntersectionOfReturns<Funcs> extends TxResponseDetectFuncs
      ? // which means constructApproveToken or constructCancelLimitOrder was passed in Funcs
        // then remove them
        Omit<IntersectionOfReturns<Funcs>, TxResponseDetectKeys> &
          // and add them again but with specific TxResponse
          // if both were passed
          (IntersectionOfReturns<Funcs> extends ApproveTokenFunctions<any> &
            CancelLimitOrderFunctions<any>
            ? // make the CancelLimitOrderFunctions<unknow> in the intersection a specific CancelLimitOrderFunctions<TxResponse>
              CancelLimitOrderFunctions<TxResponse> &
                // and make the ApproveTokenFunctions<unknow> in the intersection a specific ApproveTokenFunctions<TxResponse>
                ApproveTokenFunctions<TxResponse>
            : // if constructApproveToken was passed
            IntersectionOfReturns<Funcs> extends ApproveTokenFunctions<any>
            ? ApproveTokenFunctions<TxResponse>
            : // if constructCancelLimitOrder was passed
            IntersectionOfReturns<Funcs> extends CancelLimitOrderFunctions<any>
            ? CancelLimitOrderFunctions<TxResponse>
            : // and make the CancelLimitOrderFunctions<unknow> in the intersection a specific CancelLimitOrderFunctions<TxResponse>
              IntersectionOfReturns<Funcs>)
      : IntersectionOfReturns<Funcs>
    : IntersectionOfReturns<Funcs>;

/** @description construct composable SDK with methods you choose yourself */
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
