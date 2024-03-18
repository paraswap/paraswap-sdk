import type {
  AnyFunction,
  ConstructBaseInput,
  ConstructFetchInput,
  ConstructProviderFetchInput,
} from '../types';
import type { Merge, UnionToIntersection } from 'ts-essentials';
import type { ApproveTokenFunctions } from '../methods/swap/approve';
import type { CancelLimitOrderFunctions } from '../methods/limitOrders/cancelOrder';
import type { ApproveTokenForLimitOrderFunctions } from '../methods/limitOrders/approveForOrder';
import type { CancelNFTOrderFunctions } from '../methods/nftOrders/cancelOrder';
import type { ApproveTokenForNFTOrderFunctions } from '../methods/nftOrders/approveForOrder';
import { API_URL, DEFAULT_VERSION } from '../constants';
import { FillOrderDirectlyFunctions } from '../methods/limitOrders/fillOrderDirectly';

export type SDKConfig<TxResponse = any> = ConstructProviderFetchInput<
  TxResponse,
  'staticCall' | 'transactCall' | 'signTypedDataCall'
> &
  ConstructFetchInput;

type SDKFunction<T extends ConstructBaseInput> = (
  config: T
) => Record<string, AnyFunction | Record<string, AnyFunction>>;

type IntersectionOfReturns<Funcs extends AnyFunction[]> = UnionToIntersection<
  ReturnType<Funcs[number]>
>;

type PartialSDKResult<
  Config extends ConstructBaseInput,
  Funcs extends [SDKFunction<Config>, ...SDKFunction<Config>[]]
> = InferWithTxResponse<Config, Funcs>;

type InferWithTxResponse<
  Config extends ConstructBaseInput,
  Funcs extends [SDKFunction<Config>, ...SDKFunction<Config>[]]
> = Config extends SDKConfig<infer TxResponse> // if can infer TxResponse inside Config
  ? // and if returns can be successfully intersected
    IntersectionOfReturns<Funcs> extends Record<string, any>
    ? MergeExtendableRecursively<
        IntersectionOfReturns<Funcs>,
        [
          // if there are ApproveTokenFunctions or CancelLimitOrderFunctions in the intersection
          // which means constructApproveToken or constructCancelLimitOrder was passed in Funcs
          ApproveTokenFunctions<TxResponse>,
          CancelLimitOrderFunctions<TxResponse>,
          FillOrderDirectlyFunctions<TxResponse>,
          ApproveTokenForLimitOrderFunctions<TxResponse>,
          CancelNFTOrderFunctions<TxResponse>,
          ApproveTokenForNFTOrderFunctions<TxResponse>
        ]
        // then merge IntersectionOfReturns<Funcs> with them recursively
      >
    : IntersectionOfReturns<Funcs>
  : IntersectionOfReturns<Funcs>;

// merges Accum with Replacement
// if Accum has keys of Replacement
type MergeExtendableOnce<
  Accum extends Record<string, any>,
  Replacement extends Record<string, any>
> = Accum extends Record<keyof Replacement, any>
  ? Merge<Accum, Replacement>
  : Accum;

// recursively merges Accum with each Replacement
// if Accum has keys of Replacement
type MergeExtendableRecursively<
  Accum extends Record<string, any>,
  Replacements extends Record<string, any>[]
> = Replacements extends [head: infer Head, ...tail: infer Tail] // use [head: infer Head extends Record<string, any>, ...tail: infer Tail] after Ts update
  ? Tail extends Record<string, any>[]
    ? Head extends Record<string, any>
      ? MergeExtendableRecursively<MergeExtendableOnce<Accum, Head>, Tail>
      : Accum
    : Head extends Record<string, any>
    ? MergeExtendableOnce<Accum, Head>
    : Accum
  : Accum;

/** @description construct composable SDK with methods you choose yourself */
export const constructPartialSDK = <
  Config extends ConstructBaseInput,
  Funcs extends [SDKFunction<Config>, ...SDKFunction<Config>[]]
>(
  config: Config, // config is auto-inferred to cover the used functions
  ...funcs: Funcs
): PartialSDKResult<Config, Funcs> & Required<ConstructBaseInput> => {
  const sdkFuncs = funcs.reduce<Partial<IntersectionOfReturns<Funcs>>>(
    (accum, func) => {
      const sdkSlice = func(config);
      return Object.assign(accum, sdkSlice);
    },
    {}
  );

  const sdk = {
    ...sdkFuncs,
    apiURL: config.apiURL ?? API_URL,
    version: config.version ?? DEFAULT_VERSION,
    chainId: config.chainId,
  } as PartialSDKResult<Config, Funcs> & Required<ConstructBaseInput>;

  return sdk;
};
