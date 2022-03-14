import {
  Contract,
  ContractFunction,
  PopulatedTransaction,
  BigNumber,
} from 'ethers';
import { assert } from 'ts-essentials';

import type { AxiosError } from 'axios';

export type ContractWithMethod<T extends string> = Contract & {
  readonly [method in T]: ContractFunction;
} & {
  readonly functions: { [method in T]: ContractFunction };

  readonly callStatic: { [method in T]: ContractFunction };
  readonly estimateGas: { [method in T]: ContractFunction<BigNumber> };
  readonly populateTransaction: {
    [method in T]: ContractFunction<PopulatedTransaction>;
  };
};

export function contractHasMethods<T extends string>(
  contract: Contract,
  ...methods: T[]
): contract is ContractWithMethod<T> {
  return methods.every((method) => typeof contract[method] === 'function');
}

export function assertContractHasMethods<T extends string>(
  contract: Contract,
  ...methods: T[]
): asserts contract is ContractWithMethod<T> {
  assert(
    contractHasMethods(contract, ...methods),
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

export const constructSearchString = <U extends Record<string, unknown>>(
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

interface FetcherErrorInterface extends FetcherErrorConstructorInput {
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
    this.message = data?.error || message;
  }
}
