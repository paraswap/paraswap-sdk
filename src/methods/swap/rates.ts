import { SwapSide, ContractMethod, API_URL } from '../../constants';
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

export type RateOptions = {
  excludeDEXS?: string;
  includeDEXS?: string;
  excludePools?: string;
  excludePricingMethods?: PricingMethod[];
  excludeContractMethods?: ContractMethod[];
  includeContractMethods?: ContractMethod[];
  adapterVersion?: string;
  partner?: string;
  maxImpact?: number;
  maxUSDImpact?: number;
  otherExchangePrices?: boolean;
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

const INVALID_DEX_LIST = 'Invalid DEX list';
const INVALID_ROUTE = 'Invalid Route';

type SearchStringParams = CommonGetRateResult & {
  srcToken: AddressOrSymbol;
  destToken: AddressOrSymbol;
  network: number;
};

export const constructGetRate = ({
  apiURL = API_URL,
  chainId,
  fetcher,
}: ConstructFetchInput): GetRateFunctions => {
  const pricesUrl = `${apiURL}/prices`;

  const getRate: GetRate = async ({ srcToken, destToken, ...rest }, signal) => {
    const parsedOptions = commonGetRateOptionsGetter(rest);

    // always pass explicit type to make sure UrlSearchParams are correct
    const search = constructSearchString<SearchStringParams>({
      srcToken,
      destToken,
      network: chainId,
      ...parsedOptions,
    });

    const fetchURL = `${pricesUrl}/${search}`;

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
      ...parsedOptions,
    });

    const fetchURL = `${pricesUrl}/${search}`;

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
  version?: string;
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
    adapterVersion,
    partner = DEFAULT_PARTNER,
    includeDEXS,
    excludeDEXS,
    ...restOptions
  } = options;

  checkDexList(includeDEXS);
  checkDexList(excludeDEXS);

  const _excludePricingMethods = excludePricingMethods?.join(',');
  const _excludeContractMethods = excludeContractMethods?.join(',');
  const _includeContractMethods = includeContractMethods?.join(',');

  return {
    version: adapterVersion,
    excludePricingMethods: _excludePricingMethods,
    excludeContractMethods: _excludeContractMethods,
    includeContractMethods: _includeContractMethods,
    partner,
    includeDEXS,
    excludeDEXS,
    ...restInput,
    ...restOptions,
  };
}

function checkDexList(dexs?: string) {
  if (dexs) {
    const targetDEXs = dexs.split(',');

    if (!targetDEXs.length) {
      throw new Error(INVALID_DEX_LIST);
    }
  }
}
