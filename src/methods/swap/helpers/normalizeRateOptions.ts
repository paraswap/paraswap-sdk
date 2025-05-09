import type { PickKeys } from 'ts-essentials';
import type { RateOptions } from '../rates';

type StringArrKeys = PickKeys<RateOptions, string[] | undefined>;

type MinRateOptionsInput = Pick<RateOptions, StringArrKeys> &
  Pick<RateOptions, 'partner'>;

type NormalizedRateOptions<
  O extends MinRateOptionsInput,
  T extends { options?: Partial<O> }
> = Partial<Record<StringArrKeys | 'partner', string>> &
  Partial<Omit<O, StringArrKeys | 'partner'>> &
  Omit<T, 'options'>;

export function normalizeRateOptions<
  O extends MinRateOptionsInput,
  T extends { options?: Partial<O> }
>({ options = {}, ...restInput }: T): NormalizedRateOptions<O, T> {
  const {
    excludeContractMethods,
    includeContractMethods,
    partner,
    includeDEXS,
    excludeDEXS,
    excludePools,
    ...restOptions
  } = options;

  const [
    _includeDEXS,
    _excludeDEXS,
    _excludePools,
    _excludeContractMethods,
    _includeContractMethods,
  ] = [
    includeDEXS,
    excludeDEXS,
    excludePools,
    excludeContractMethods,
    includeContractMethods,
    //                                                                                              no "" empty string
  ].map((array) => array?.join(',') || undefined);

  const transformed: Partial<Record<StringArrKeys | 'partner', string>> = {
    excludeContractMethods: _excludeContractMethods,
    includeContractMethods: _includeContractMethods,
    partner,
    includeDEXS: _includeDEXS,
    excludeDEXS: _excludeDEXS,
    excludePools: _excludePools,
  };

  return { ...transformed, ...restOptions, ...restInput };
}
