import {
  API_URL,
  DEFAULT_VERSION,
  ContractMethodByName,
} from '../../constants';
import { constructSearchString } from '../../helpers/misc';
import type {
  ConstructFetchInput,
  PriceRouteApiResponse,
  Address,
  AddressOrSymbol,
  PriceString,
  OptimalRate,
  RequestParameters,
} from '../../types';
import { normalizeRateOptions } from './helpers/normalizeRateOptions';

type RateQueryParams = {
  /**
   * @description Source Token Address. Instead, **Token Symbol** could be used for tokens listed in the `/tokens` endpoint.
   */
  srcToken: string;

  /**
   * @description Source Token Decimals. (Can be omitted if Token Symbol is used in `srcToken`).
   */
  srcDecimals?: number;

  /**
   * @description Destination Token Address. Instead, **Token Symbol** could be used for tokens listed in the `/tokens` endpoint.
   */
  destToken: string;

  /**
   * @description srcToken amount (in case of SELL) or destToken amount (in case of BUY). The amount should be in **WEI/Raw units** (eg. 1WBTC -> 100000000).
   */
  amount: string;

  /**
   * @description **SELL** or **BUY**. Default: `SELL`.
   */
  side?: 'SELL' | 'BUY';

  /**
   * @description Network ID. (Mainnet - 1, Optimism - 10, BSC - 56, Polygon - 137, Fantom - 250, zkEVM - 1101, Base - 8453, Arbitrum - 42161, Avalanche - 43114). Default: `1`.
   */
  network?: number;

  /**
   * @description If provided, **others** object is filled in the response with price quotes from other exchanges _(if available for comparison)_. Default: `false`.
   */
  otherExchangePrices?: boolean;

  /**
   * @description Comma Separated List of DEXs to include. **Supported DEXs:** UniswapV2, UniswapV3, Kyber, Bancor, AugustusRFQ, Oasis, Compound, Fulcrum, Balancer, MakerDAO, Chai, Aave, Aave2 and more. You can view all currently supported dexes filtered by chain [here](https://api.paraswap.io/adapters/list/1) eg: `UniswapV3,MakerDAO`.
   */
  includeDEXS?: string;

  /**
   * @description Comma Separated List of DEXs to exclude. (from the list of DEXs mentioned above).
   */
  excludeDEXS?: string;

  /**
   * @description Comma Separated List of Contract Methods to include in pricing (without spaces). View the list of the supported methods for [V5](https://developers.velora.xyz/api/velora-api/velora-market-api/master/api-v5#supported-methods) and [V6](https://developers.velora.xyz/api/velora-api/velora-market-api/master/api-v6.2#supported-methods) eg: `swapExactAmountIn,swapExactAmountInOnUniswapV2`.
   */
  includeContractMethods?: string;

  /**
   * @description Comma Separated List of Contract Methods to exclude from pricing (without spaces). View the list of the supported methods for [V5](https://developers.velora.xyz/api/velora-api/velora-market-api/master/api-v5#supported-methods) and [V6](https://developers.velora.xyz/api/velora-api/velora-market-api/master/api-v6.2#supported-methods).
   */
  excludeContractMethods?: string;

  /**
   * @description User's Wallet Address.
   */
  userAddress?: string;

  /**
   * @description Dash (-) separated list of tokens (addresses or symbols from `/tokens`) to comprise the price route. _Max 4 tokens._ _**\*Note:**_ _If_ `_route_` _is specified, the response will only comprise of the route specified which might not be the optimal route._
   */
  route?: string;

  /**
   * @description Partner string.
   */
  partner?: string;

  /**
   * @description Destination Token Decimals. (Can be omitted if Token Symbol is used in `destToken`).
   */
  destDecimals?: number;

  /**
   * @description In %. It's a way to bypass the API price impact check (default = 15%).
   */
  maxImpact?: number;

  /**
   * @description Receiver's Wallet address. (Can be omitted if swapping tokens from and to same account).
   */
  receiver?: string;

  /**
   * @description If the source token is a tax token, you should specify the tax amount in BPS. For example: for a token with a 5% tax, you should set it to 500 as `[(500/10000)*100=5%]`. Note: not all DEXs and contract methods support trading tax tokens, so we will filter those that don't.
   */
  srcTokenTransferFee?: string;

  /**
   * @description If the destination token is a tax token, you should specify the tax amount in BPS. For example: for a token with a 5% tax, you should set it to 500 as `[(500/10000)*100=5%]`. Note: not all DEXs and contract methods support trading tax tokens, so we will filter those that don't.
   */
  destTokenTransferFee?: string;

  /**
   * @description If the source token is a tax token, you should specify the tax amount in BPS. Some tokens only charge tax when swapped in/out DEXs and not on ordinary transfers.
   */
  srcTokenDexTransferFee?: string;

  /**
   * @description If the destination token is a tax token, you should specify the tax amount in BPS. Some tokens only charge tax when swapped in/out DEXs, not on ordinary transfers.
   */
  destTokenDexTransferFee?: string;

  /**
   * @description To specify the protocol version. **Values:** 5 or 6.2 **Default**: 5.
   */
  version?: number | string;

  /**
   * @description Specify that methods without fee support should be excluded from the price route. Default: `false`.
   */
  excludeContractMethodsWithoutFeeModel?: boolean;

  /**
   * @description If tokens USD prices are not available, `Bad USD Price` error will be thrown. Use this param to skip this check. Default: `false`.
   */
  ignoreBadUsdPrice?: boolean;
  /**
   * @description 	Exclude all RFQs from pricing, e.g.: AugustusRFQ, Hashflow. Default: false
   */
  excludeRFQ?: boolean;
};

// more details in the docs https://developers.velora.xyz/api/velora-api/velora-market-api/get-rate-for-a-token-pair#query-parameters
export type RateOptions = {
  excludeDEXS?: string[];
  includeDEXS?: string[];
  excludePools?: string[];
  excludeContractMethods?: ContractMethodByName[];
  includeContractMethods?: ContractMethodByName[];
  partner?: string;
  /** @description In %. It's a way to bypass the API price impact check (default = 15%) */
  maxImpact?: number;
  maxUSDImpact?: number;
  otherExchangePrices?: boolean;
  /** @description proceed with priceRoute building even when tokens don't have USD price. Default: false */
  ignoreBadUsdPrice?: boolean;
  /** @description Exclude all RFQs from pricing, e.g.: AugustusRFQ, Hashflow. Default: false */
  excludeRFQ?: boolean;
  /** @description 	Specify that methods without fee support should be excluded from the price route. Default: false */
  excludeContractMethodsWithoutFeeModel?: boolean;
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
  side?: 'SELL' | 'BUY';
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
  requestParams?: RequestParameters
) => Promise<OptimalRate>;

type GetRateByRouteInput = CommonGetRateInput & {
  route: AddressOrSymbol[];
};

type GetRateByRoute = (
  options: GetRateByRouteInput,
  requestParams?: RequestParameters
) => Promise<OptimalRate>;

export type GetRateFunctions = {
  getRate: GetRate;
  getRateByRoute: GetRateByRoute;
};
const INVALID_ROUTE = 'Invalid Route';

export const constructGetRate = ({
  apiURL = API_URL,
  version = DEFAULT_VERSION,
  chainId,
  fetcher,
}: ConstructFetchInput): GetRateFunctions => {
  const pricesUrl = `${apiURL}/prices` as const;

  const getRate: GetRate = async (
    { srcToken, destToken, ...rest },
    requestParams
  ) => {
    const parsedOptions = normalizeRateOptions(rest);

    // always pass explicit type to make sure UrlSearchParams are correct
    const search = constructSearchString<Omit<RateQueryParams, 'route'>>({
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
      requestParams,
    });

    return data.priceRoute;
  };

  const getRateByRoute: GetRateByRoute = async (
    { route, ...rest },
    requestParams
  ) => {
    if (route.length < 2) {
      throw new Error(INVALID_ROUTE);
    }

    const parsedOptions = normalizeRateOptions(rest);

    const _route = route.join('-');

    const search = constructSearchString<
      Omit<RateQueryParams, 'srcToken' | 'destToken'>
    >({
      route: _route, // route can be used in place of srcToken+destToken
      network: chainId,
      version,
      ...parsedOptions,
    });

    const fetchURL = `${pricesUrl}/${search}` as const;

    const data = await fetcher<PriceRouteApiResponse>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });

    return data.priceRoute;
  };

  return {
    getRate,
    getRateByRoute,
  };
};
