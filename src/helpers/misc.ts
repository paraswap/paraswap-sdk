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
import { assert } from 'ts-essentials';

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

export function isDataWithError(data: unknown): data is { error: string } {
  return !!data && typeof data == 'object' && 'error' in data;
}

export type ExtractAbiMethodNames<T extends readonly { name: string }[]> =
  T[number]['name'];

// reduce element[] to Object{key: prop, val?: element}
// for example
// gatherObjectsByProp(Token[], token => token.address) => Record<address, Token|undefined>
export function gatherObjectsByProp<T>(
  elements: T[],
  pickProp: (elem: T) => string
): Record<string, T>;
export function gatherObjectsByProp<T, U>(
  elements: T[],
  pickProp: (elem: T) => string,
  transfrom: (elem: T, accumElem?: U) => U
): Record<string, U>;
export function gatherObjectsByProp<T, U>(
  elements: T[],
  pickProp: (elem: T) => string,
  transform?: (elem: T, accumElem?: U) => U
): Record<string, T> | Record<string, U> {
  return elements.reduce<Record<string, T> | Record<string, U>>(
    (accum, element) => {
      const key = pickProp(element);

      const accumElem: T | U | undefined = accum[key];
      const transformedElement = transform
        ? //                       if transform is available, can only be U | undefined
          transform(element, accumElem as U | undefined)
        : element;

      accum[key] = transformedElement;

      return accum;
    },
    {}
  );
}
