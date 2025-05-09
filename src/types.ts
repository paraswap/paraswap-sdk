import type {
  OptimalRate,
  OptionalRate,
  ParaSwapVersion,
} from '@paraswap/core';
import type {
  Address,
  AddressOrSymbol,
  PriceString,
  Token,
  TxHash,
} from './helpers/token';
import type { SignableTypedData } from './methods/common/orders/buildOrderData';
import { TransactionParams } from './methods/swap/transaction';

export type {
  Address,
  AddressOrSymbol,
  PriceString,
  Token,
  TxHash,
  OptimalRate,
  OptionalRate,
};

export type EnumerateLiteral<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends `${infer n}` ? n : never;
}[keyof T];
// keeping version as string allows for more flexibility
// `alpha`,`beta` and other non-numbers can be used
// allowing enum only forces users to import and pass that enum

/** @description Passed to version API endpoints as ?version: to /prices and /adapters */
export type APIVersion = EnumerateLiteral<typeof ParaSwapVersion>;

export interface ConstructBaseInput {
  apiURL?: string;
  version?: APIVersion;
  chainId: number;
}

/** @description Any params that can be passed to fetcher. E.g. Axios fetcher can accept signal and timeout, fetch can accept signal */
export type RequestParameters = { [K: string]: any; signal?: AbortSignal };

interface FetcherInputBase<URL extends string = string> {
  url: URL;
  headers?: Record<string, string>;
  requestParams?: RequestParameters;
}
export interface FetcherGetInput<URL extends string = string>
  extends FetcherInputBase<URL> {
  method: 'GET';
}
export interface FetcherPostInput<URL extends string = string>
  extends FetcherInputBase<URL> {
  method: 'POST';
  data: Record<string, any>;
}

export type FetcherFunction = <T, URL extends string = string>(
  params: FetcherGetInput<URL> | FetcherPostInput<URL>
) => Promise<T>;

// authentication or some other params required in `fetcher`
export type ExtraFetchParams = { apiKey?: string };

export interface ConstructFetchInput extends ConstructBaseInput {
  fetcher: FetcherFunction;
}

interface OverridesBase {
  from?: string;
  gasPrice?: string;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
  gas?: number;
  value?: number | string;
}

type BlockTag = string | number | 'latest' | 'pending' | 'earliest' | 'genesis';

export interface StaticCallOverrides extends OverridesBase {
  block?: BlockTag;
}
export interface TxSendOverrides extends OverridesBase {
  nonce?: number;
}

interface ContractCallInput<T extends string> {
  address: Address;
  abi: ReadonlyArray<JsonFragment>;
  contractMethod: T;
  args: any[];
}

export interface ContractCallStaticInput<T extends string>
  extends ContractCallInput<T> {
  overrides: StaticCallOverrides;
}

interface ContractCallTransactionInput<T extends string>
  extends ContractCallInput<T> {
  overrides: TxSendOverrides;
}

// may have to type result T differently if we ever use staticCalls in SDK
export type StaticContractCallerFn = <T, M extends string = string>(
  params: ContractCallStaticInput<M>
) => Promise<T>;
export type TransactionContractCallerFn<T> = <M extends string = string>(
  params: ContractCallTransactionInput<M>
) => Promise<T>;
export type SignTypedDataContractCallerFn = (
  typedData: SignableTypedData
) => Promise<string>;

export interface ContractCallerFunctions<T> {
  staticCall: StaticContractCallerFn;
  transactCall: TransactionContractCallerFn<T>;
  signTypedDataCall: SignTypedDataContractCallerFn;
}

export interface ConstructProviderFetchInput<
  T,
  D extends keyof ContractCallerFunctions<T> = keyof ContractCallerFunctions<T>
> extends ConstructFetchInput {
  contractCaller: Pick<ContractCallerFunctions<T>, D>;
}

export type TokenFromApi = Pick<
  Token,
  'address' | 'decimals' | 'symbol' | 'balance' | 'allowance'
>;

export interface TokensApiResponse {
  tokens: TokenFromApi[];
}
export interface TokenApiResponse {
  token?: TokenFromApi;
}

// if no extra keys in Checking, return Checking, otherwise never
export type NoExtraKeysCheck<Checking, CheckAgainst> = Exclude<
  keyof Checking,
  keyof CheckAgainst
> extends never
  ? Checking
  : never;

export type PriceRouteApiResponse = {
  priceRoute: OptimalRate;
};

export type SwapApiResponse = {
  priceRoute: OptimalRate;
  txParams: Omit<TransactionParams, 'gas'>;
};

export type PriceRouteApiErrorResponse =
  | {
      error: string;
    }
  | { error: string; value: string; priceRoute: OptimalRate };

export type AnyFunction = (...args: any[]) => any;

// --------- from ethers types --------------
export interface JsonFragmentType {
  /**
   *  The parameter name.
   */
  readonly name?: string;

  /**
   *  If the parameter is indexed.
   */
  readonly indexed?: boolean;

  /**
   *  The type of the parameter.
   */
  readonly type?: string;

  /**
   *  The internal Solidity type.
   */
  readonly internalType?: string;

  /**
   *  The components for a tuple.
   */
  readonly components?: ReadonlyArray<JsonFragmentType>;
}

export interface JsonFragment {
  /**
   *  The name of the error, event, function, etc.
   */
  readonly name?: string;

  /**
   *  The type of the fragment (e.g. ``event``, ``"function"``, etc.)
   */
  readonly type?: string;

  /**
   *  If the event is anonymous.
   */
  readonly anonymous?: boolean;

  /**
   *  If the function is payable.
   */
  readonly payable?: boolean;

  /**
   *  If the function is constant.
   */
  readonly constant?: boolean;

  /**
   *  The mutability state of the function.
   */
  readonly stateMutability?: string;

  /**
   *  The input parameters.
   */
  readonly inputs?: ReadonlyArray<JsonFragmentType>;

  /**
   *  The output parameters.
   */
  readonly outputs?: ReadonlyArray<JsonFragmentType>;

  /**
   *  The gas limit to use when sending a transaction for this function.
   */
  readonly gas?: string;
}
