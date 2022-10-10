import type {
  Contract as EthersContract,
  ContractFunction as EthersContractFunction,
  PopulatedTransaction as EthersPopulatedTransaction,
  BigNumber as EthersBigNumber,
} from 'ethers';
import type {
  ContractSendMethod as Web3ContractSendMethod,
  Contract as Web3Contract,
} from 'web3-eth-contract';
import { assert, Primitive } from 'ts-essentials';

import type { AxiosError } from 'axios';

export type EthersContractWithMethod<T extends string> = EthersContract & {
  readonly [method in T]: EthersContractFunction;
} & {
  readonly functions: { [method in T]: EthersContractFunction };

  readonly callStatic: { [method in T]: EthersContractFunction };
  readonly estimateGas: {
    [method in T]: EthersContractFunction<EthersBigNumber>;
  };
  readonly populateTransaction: {
    [method in T]: EthersContractFunction<EthersPopulatedTransaction>;
  };
};

export function ethersContractHasMethods<T extends string>(
  contract: EthersContract,
  ...methods: T[]
): contract is EthersContractWithMethod<T> {
  return methods.every((method) => typeof contract[method] === 'function');
}

export function assertEthersContractHasMethods<T extends string>(
  contract: EthersContract,
  ...methods: T[]
): asserts contract is EthersContractWithMethod<T> {
  assert(
    ethersContractHasMethods(contract, ...methods),
    `Contract must have methods: ${methods.join(', ')}`
  );
}

export type Web3ContractWithMethod<T extends string> = Web3Contract & {
  methods: { [method in T]: Web3ContractSendMethod };
};

export function web3ContractHasMethods<T extends string>(
  contract: Web3Contract,
  ...methods: T[]
): contract is Web3ContractWithMethod<T> {
  return methods.every(
    (method) => typeof contract.methods[method] === 'function'
  );
}

export function assertWeb3ContractHasMethods<T extends string>(
  contract: Web3Contract,
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
//                                                            not arrays or mappings
export const constructSearchString = <U extends Record<string, Primitive>>(
  queryOptions: U
): `?${string}` | '' => {
  const queryEntries = objectToFilledEntries(queryOptions);

  const queryString = new URLSearchParams(queryEntries).toString();

  // returns empty string or `?${string}`
  return queryString && `?${queryString}`;
};

type FetcherErrorConstructorInput = Pick<
  AxiosError,
  'code' | 'request' | 'response' | 'isAxiosError' | 'message'
>;

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
