import { ApproveTokenFunctions } from '../methods/approve';
import {
  ConstructBaseInput,
  ConstructFetchInput,
  ConstructProviderFetchInput,
} from '../types';
import { UnionToIntersection } from 'ts-essentials';

export type SDKConfig<TxResponse = any> = ConstructProviderFetchInput<
  TxResponse,
  'transactCall'
> &
  ConstructFetchInput;

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
