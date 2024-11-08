import type {
  Contract as EthersContractV5,
  ContractFunction as EthersContractFunctionV5,
  PopulatedTransaction as EthersPopulatedTransactionV5,
  BigNumber as EthersBigNumberV5,
} from 'ethers';
import { assert, Primitive } from 'ts-essentials';

import type { AxiosError, AxiosResponse } from 'axios';
import type { ContractAbi, Contract as Web3Contract } from 'web3';

/// ethers v5
export type EthersContractWithMethodV5<T extends string> = EthersContractV5 & {
  readonly [method in T]: EthersContractFunctionV5;
} & {
  readonly functions: { [method in T]: EthersContractFunctionV5 };

  readonly callStatic: { [method in T]: EthersContractFunctionV5 };
  readonly estimateGas: {
    [method in T]: EthersContractFunctionV5<EthersBigNumberV5>;
  };
  readonly populateTransaction: {
    [method in T]: EthersContractFunctionV5<EthersPopulatedTransactionV5>;
  };
};

export function ethersContractHasMethodsV5<T extends string>(
  contract: EthersContractV5,
  ...methods: T[]
): contract is EthersContractWithMethodV5<T> {
  return methods.every((method) => typeof contract[method] === 'function');
}

export function assertEthersContractHasMethodsV5<T extends string>(
  contract: EthersContractV5,
  ...methods: T[]
): asserts contract is EthersContractWithMethodV5<T> {
  assert(
    ethersContractHasMethodsV5(contract, ...methods),
    `Contract must have methods: ${methods.join(', ')}`
  );
}

/// web3@4
export type Web3ContractSendMethod =
  Web3Contract<ContractAbi>['methods'][string];

export type Web3ContractWithMethod<T extends string> =
  Web3Contract<ContractAbi> & {
    methods: { [method in T]: Web3ContractSendMethod };
  };

export function web3ContractHasMethods<T extends string>(
  contract: Web3Contract<ContractAbi>,
  ...methods: T[]
): contract is Web3ContractWithMethod<T> {
  return methods.every(
    (method) => typeof contract.methods[method] === 'function'
  );
}

export function assertWeb3ContractHasMethods<T extends string>(
  contract: Web3Contract<ContractAbi>,
  ...methods: T[]
): asserts contract is Web3ContractWithMethod<T> {
  assert(
    web3ContractHasMethods(contract, ...methods),
    `Contract must have methods: ${methods.join(', ')}`
  );
}

export const objectToFilledEntries = <T extends Record<string, unknown>>(
  object: T
): [string, string][] => {
  return (
    Object.entries(object)
      // removes keys with undefined values
      .filter(([, value]) => value !== undefined)
      .map(([key, value]) => [key, String(value)])
  );
};

export const constructSearchString = <
  //                               not arrays or mappings
  U extends Record<string, Exclude<Primitive, symbol>>
>(
  queryOptions: U
): `?${string}` | '' => {
  const queryEntries = objectToFilledEntries(queryOptions);

  const queryString = new URLSearchParams(queryEntries).toString();

  // returns empty string or `?${string}`
  return queryString && `?${queryString}`;
};

type MinAxiosError = {
  code?: string;
  request?: any;
  isAxiosError: boolean;
  message: string;
};

type MinAxiosResponse = {
  data: any;
  status: number;
  statusText: string;
  headers: Record<string, any>;
  config: { url?: string; method?: string };
};

type FetcherErrorConstructorInput = MinAxiosError & {
  response?: MinAxiosResponse;
};

export interface FetcherErrorInterface extends FetcherErrorConstructorInput {
  status?: number;
  code?: string;
}

export const isFetcherError = (error: unknown): error is FetcherError => {
  return error instanceof FetcherError;
};

export class FetcherError extends Error implements FetcherErrorInterface {
  code;
  status;
  request;
  response;
  isAxiosError = false;

  public constructor({
    code,
    request,
    response,
    isAxiosError,
    message,
  }: FetcherErrorConstructorInput) {
    super();

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, FetcherError);
    }

    this.name = this.constructor.name;
    this.code = code;
    this.request = request;
    this.isAxiosError = isAxiosError;

    // no response on AxiosError
    if (!response) {
      this.message = message;
      return;
    }

    this.response = response;

    const { data, status } = response;
    this.status = status;
    this.message = isDataWithError(data) ? data.error : message;
  }
}
// to turn `object -> Record` for indexed variable access
function isObject(obj: unknown): obj is Record<string | symbol, any> {
  return !!obj && typeof obj === 'object';
}

export function isDataWithError(data: unknown): data is { error: string } {
  return isObject(data) && typeof data['error'] === 'string';
}

export type ExtractAbiMethodNames<T extends readonly { name: string }[]> =
  T[number]['name'];

// reduce element[] to Object{key: prop, val?: element}
// for example
// gatherObjectsByProp(Token[], token => token.address) => Record<address, Token|undefined>
export function gatherObjectsByProp<T>(
  elements: T[],
  pickProp: (elem: T, index: number) => string
): Record<string, T>;
export function gatherObjectsByProp<T, U>(
  elements: T[],
  pickProp: (elem: T, index: number) => string,
  transfrom: (elem: T, accumElem: U | undefined, index: number) => U
): Record<string, U>;
export function gatherObjectsByProp<T, U>(
  elements: T[],
  pickProp: (elem: T, index: number) => string,
  transform?: (elem: T, accumElem: U | undefined, index: number) => U
): Record<string, T> | Record<string, U> {
  return elements.reduce<Record<string, T> | Record<string, U>>(
    (accum, element, index) => {
      const key = pickProp(element, index);

      const accumElem: T | U | undefined = accum[key];
      const transformedElement = transform
        ? //                       if transform is available, can only be U | undefined
          transform(element, accumElem as U | undefined, index)
        : element;

      accum[key] = transformedElement;

      return accum;
    },
    {}
  );
}

// checks that array has at least one element
export const isFilledArray = <T>(array: T[]): array is [T, ...T[]] => {
  return array.length > 0;
};

export function getRandomInt(): number {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
}

export function runOnceAndCache<T, Args extends any[]>(
  // can pass `(...any[]) => any but null | undefined`
  func: (...args: Args) => NonNullable<T>
): (...args: Args) => NonNullable<T> {
  let result: NonNullable<T>;

  return (...args) => {
    return result ?? (result = func(...args));
  };
}
