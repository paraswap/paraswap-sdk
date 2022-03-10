import type { JsonFragment } from '@ethersproject/abi';
import { OptimalRate } from 'paraswap-core';
import { Address, Token, TxHash } from './token';

export type { Address, Token, TxHash };

export interface ConstructBaseInput {
  apiURL: string;
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
  static: boolean;
  args: any[];
}

interface ContractCallStaticInput<T extends string>
  extends ContractCallInput<T> {
  static: true;
  overrides: StaticCallOverrides;
}

interface ContractCallTransactionInput<T extends string>
  extends ContractCallInput<T> {
  static: false;
  overrides: TxSendOverrides;
}

export type ContractCallerFunction = <T, M extends string = string>(
  params: ContractCallTransactionInput<M> | ContractCallStaticInput<M>
) => Promise<T>;

export interface ConstructProviderFetchInput extends ConstructFetchInput {
  contractCaller: ContractCallerFunction;
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
