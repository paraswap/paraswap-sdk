import {
  Contract,
  ContractFunction,
  PopulatedTransaction,
  BigNumber,
} from 'ethers';
import { assert } from 'ts-essentials';

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
