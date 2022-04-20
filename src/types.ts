import type { JsonFragment } from '@ethersproject/abi';
import type { OptimalRate, OptionalRate } from 'paraswap-core';
import type {
  Address,
  AddressOrSymbol,
  PriceString,
  Token,
  TxHash,
} from './helpers/token';
import type { SignableTypedData } from './methods/limitOrders/helpers/buildOrderData';

export type {
  Address,
  AddressOrSymbol,
  PriceString,
  Token,
  TxHash,
  OptimalRate,
  OptionalRate,
};

export interface ConstructBaseInput {
  apiURL?: string;
  network: number;
}

interface FetcherInputBase {
  url: string;
  headers?: Record<string, string>;
  signal?: AbortSignal;
}
export interface FetcherGetInput extends FetcherInputBase {
  method: 'GET';
}
export interface FetcherPostInput extends FetcherInputBase {
  method: 'POST';
  data: Record<string, any>;
}

export type FetcherFunction = <T>(
  params: FetcherGetInput | FetcherPostInput
) => Promise<T>;

export interface ConstructFetchInput extends ConstructBaseInput {
  fetcher: FetcherFunction;
}

interface OverridesBase {
  from?: string;
  gasPrice?: string;
  gas?: number;
  value?: number | string;
}

export interface StaticCallOverrides extends OverridesBase {
  block?: string | number | 'latest' | 'pending' | 'earliest' | 'genesis';
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

interface ContractCallStaticInput<T extends string>
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

export type PriceRouteApiErrorResponse =
  | {
      error: string;
    }
  | { error: string; value: string; priceRoute: OptimalRate };
