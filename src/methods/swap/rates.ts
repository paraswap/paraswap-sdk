import {
  SwapSide,
  ContractMethod,
  API_URL,
  DEFAULT_VERSION,
} from '../../constants';
import { constructSearchString } from '../../helpers/misc';
import type {
  ConstructFetchInput,
  PriceRouteApiResponse,
  Address,
  AddressOrSymbol,
  PriceString,
  OptimalRate,
} from '../../types';

// TODO: This is legacy and can be removed
export enum PricingMethod {
  megapath = 'megapath',
  multipath = 'multipath',
  simplepath = 'simplepath',
}

// more details in the docs https://developers.paraswap.network/api/get-rate-for-a-token-pair#query-parameters
export type RateOptions = {
  excludeDEXS?: string[];
  includeDEXS?: string[];
  excludePools?: string[];
  excludePricingMethods?: PricingMethod[];
  excludeContractMethods?: ContractMethod[];
  includeContractMethods?: ContractMethod[];
  excludeContractMethodsWithoutFeeModel?: boolean;
  partner?: string;
  maxImpact?: number;
  maxUSDImpact?: number;
  otherExchangePrices?: boolean;
  /** @description proceed with priceRoute building even when tokens don't have USD price. Default: false */
  ignoreBadUsdPrice?: boolean;
  /** @description 	Specify that methods without fee support should be excluded from the price route. Default: false */
  exlcudeContractMethodsWithoutFeeModel?: boolean;
  /** @description If the source token is a tax token, you should specify the tax amount in BPS.  */
  srcTokenTransferFee?: string;
  /** @description If the destination token is a tax token, you should specify the tax amount in BPS.  */
  destTokenTransferFee?: string;
  /** @description Some tokens only charge tax when swapped in/out DEXs and not on ordinary transfers.  */
  srcTokenDexTransferFee?: string;
  /** @description Some tokens only charge tax when swapped in/out DEXs and not on ordinary transfers.  */
  destTokenDexTransferFee?: string;
};

type CommonGetRateInput = {
  amount: PriceString;
  userAddress?: Address;
  side?: SwapSide;
  options?: RateOptions;
  srcDecimals?: number;
  destDecimals?: number;
};

export type GetRateInput = CommonGetRateInput & {
  srcToken: AddressOrSymbol;
  destToken: AddressOrSymbol;
};

export type GetRate = (
  options: GetRateInput,
  signal?: AbortSignal
) => Promise<OptimalRate>;

type GetRateByRouteInput = CommonGetRateInput & {
  route: AddressOrSymbol[];
};

type GetRateByRoute = (
  options: GetRateByRouteInput,
  signal?: AbortSignal
) => Promise<OptimalRate>;

export type GetRateFunctions = {
  getRate: GetRate;
  getRateByRoute: GetRateByRoute;
};

const DEFAULT_PARTNER = 'paraswap.io';

const INVALID_ROUTE = 'Invalid Route';

type SearchStringParams = CommonGetRateResult & {
  srcToken: AddressOrSymbol;
  destToken: AddressOrSymbol;
  network: number;
  version: string;
};

export const constructGetRate = ({
  apiURL = API_URL,
  version = DEFAULT_VERSION,
  chainId,
  fetcher,
}: ConstructFetchInput): GetRateFunctions => {
  const pricesUrl = `${apiURL}/prices` as const;

  const getRate: GetRate = async ({ srcToken, destToken, ...rest }, signal) => {
    const parsedOptions = commonGetRateOptionsGetter(rest);

    // always pass explicit type to make sure UrlSearchParams are correct
    const search = constructSearchString<SearchStringParams>({
      srcToken,
      destToken,
      network: chainId,
      version,
      ...parsedOptions,
    });

    const fetchURL = `${pricesUrl}/${search}` as const;

    const data = await fetcher<PriceRouteApiResponse>({
      url: fetchURL,
      method: 'GET',
      signal,
    });

    return data.priceRoute;
  };

  const getRateByRoute: GetRateByRoute = async ({ route, ...rest }, signal) => {
    if (route.length < 2) {
      throw new Error(INVALID_ROUTE);
    }

    const parsedOptions = commonGetRateOptionsGetter(rest);

    const _route = route.join('-');

    const search = constructSearchString({
      route: _route,
      network: chainId,
      version,
      ...parsedOptions,
    });

    const fetchURL = `${pricesUrl}/${search}` as const;

    const data = await fetcher<PriceRouteApiResponse>({
      url: fetchURL,
      method: 'GET',
      signal,
    });

    return data.priceRoute;
  };

  return {
    getRate,
    getRateByRoute,
  };
};

type CommonGetRateResult = {
  amount: string;
  side?: SwapSide;
  excludeDEXS?: string;
  includeDEXS?: string;
  excludePools?: string;
  excludePricingMethods?: string;
  excludeContractMethods?: string;
  includeContractMethods?: string;
  srcDecimals?: number;
  destDecimals?: number;
  maxImpact?: number;
  maxUSDImpact?: number;
  userAddress?: string;
  partner: string;
  otherExchangePrices?: boolean;
};
function commonGetRateOptionsGetter({
  options = {},
  ...restInput
}: CommonGetRateInput): CommonGetRateResult {
  const {
    excludePricingMethods,
    excludeContractMethods,
    includeContractMethods,
    partner = DEFAULT_PARTNER,
    includeDEXS,
    excludeDEXS,
    excludePools,
    ...restOptions
  } = options;

  const [
    _includeDEXS,
    _excludeDEXS,
    _excludePools,
    _excludePricingMethods,
    _excludeContractMethods,
    _includeContractMethods,
  ] = [
    includeDEXS,
    excludeDEXS,
    excludePools,
    excludePricingMethods,
    excludeContractMethods,
    includeContractMethods,
    //                                                                                              no "" empty string
  ].map((array) => array?.join(',') || undefined);

  return {
    excludePricingMethods: _excludePricingMethods,
    excludeContractMethods: _excludeContractMethods,
    includeContractMethods: _includeContractMethods,
    partner,
    includeDEXS: _includeDEXS,
    excludeDEXS: _excludeDEXS,
    excludePools: _excludePools,
    ...restInput,
    ...restOptions,
  };
}
