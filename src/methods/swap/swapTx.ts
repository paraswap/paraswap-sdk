import {
  API_URL,
  DEFAULT_VERSION,
  ContractMethodByName,
} from '../../constants';
import { constructSearchString } from '../../helpers/misc';
import type {
  ConstructFetchInput,
  RequestParameters,
  SwapApiResponse,
} from '../../types';
import { normalizeRateOptions } from './helpers/normalizeRateOptions';

/**
 * Types for transaction parameters.
 */
type SwapQueryParams = {
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
  side: 'SELL' | 'BUY';

  /**
   * @description Network ID. (Mainnet - 1, Optimism - 10, BSC - 56, Polygon - 137, Fantom - 250, zkEVM - 1101, Base - 8453, Arbitrum - 42161, Avalanche - 43114). Default: `1`.
   */
  network?: number;

  /**
   * @description Comma Separated List of DEXs to include. **Supported DEXs:** Uniswap, Kyber, Bancor, AugustusRFQ, Oasis, Compound, Fulcrum, 0x, MakerDAO, Chai, Aave, Aave2, MultiPath, MegaPath, Curve, Curve3, Saddle, IronV2, BDai, idle, Weth, Beth, UniswapV2, Balancer, 0xRFQt, SushiSwap, LINKSWAP, Synthetix, DefiSwap, Swerve, CoFiX, Shell, DODOV1, DODOV2, OnChainPricing, PancakeSwap, PancakeSwapV2, ApeSwap, Wbnb, acryptos, streetswap, bakeryswap, julswap, vswap, vpegswap, beltfi, ellipsis, QuickSwap, COMETH, Wmatic, Nerve, Dfyn, UniswapV3, Smoothy, PantherSwap, OMM1, OneInchLP, CurveV2, mStable, WaultFinance, MDEX, ShibaSwap, CoinSwap, SakeSwap, JetSwap, Biswap, BProtocol eg: `UniswapV3,0x`.
   */
  includeDEXS?: string;

  /**
   * @description Comma Separated List of DEXs to exclude. (from the list of DEXs mentioned above).
   */
  excludeDEXS?: string;

  /**
   * @description Comma Separated List of Contract Methods to include without spaces. **Available values:** swapOnUniswap, buyOnUniswap, swapOnUniswapFork, buyOnUniswapFork, swapOnUniswapV2Fork, buyOnUniswapV2Fork, simpleBuy, simpleSwap, multiSwap, megaSwap, protectedMultiSwap, protectedMegaSwap, protectedSimpleSwap, protectedSimpleBuy, swapOnZeroXv2, swapOnZeroXv4, buy. eg: `simpleSwap,multiSwap`.
   */
  includeContractMethods?: string;

  /**
   * @description Comma Separated List of Contract Methods to exclude without spaces. (from the list of contract methods mentioned above).
   */
  excludeContractMethods?: string;

  /**
   * @description User's Wallet Address.
   */
  userAddress: string;

  /**
   * @description Dash (-) separated list of tokens (addresses or symbols from `/tokens`) to comprise the price route. _Max 4 tokens._ _**\*Note:**_ _If_ `_route_` _is specified, the response will only comprise of the route specified which might not be the optimal route._
   */
  route?: string;

  /**
   * @description Partner string.
   */
  partner?: string;

  /**
   * @description If provided it is used together with `partnerAddress`. Should be in basis points percentage. Look at `slippage` parameter description for understanding better. Eg: `200` (for 2% fee percent). Fees have to be claimed from the Fee Claimer contract unless `_isSurplusToUser_` or `_isDirectFeeTransfer_` are used.
   */
  partnerFeeBps?: string;

  /**
   * @description Address that will be entitled to claim fees or surplus. Fees have to be claimed from the Fee Claimer contract unless `_isSurplusToUser_` or `_isDirectFeeTransfer_` are used.
   */
  partnerAddress?: string;

  /**
   * @description Allowed slippage percentage represented in basis points. _Eg:_ for **2.5%** slippage, set the value to **2.5 \* 100 = 250**; for 10% = 1000.
   */
  slippage: number;

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
   * @description If tokens USD prices are not available, `Bad USD Price` error will be thrown. Use this param to skip this check. Default: `false`.
   */
  ignoreBadUsdPrice?: boolean;

  /**
   * @description Specify if user should receive surplus instead of partner. Default: `false`.
   */
  isSurplusToUser?: boolean;

  /**
   * @description Specify if fees should be sent directly to the partner instead of registering them on FeeClaimer. Default: `false`.
   */
  isDirectFeeTransfer?: boolean;

  /**
   * @description Allows for capping the surplus at 1% maximum. Default: `true`.
   */
  isCapSurplus?: boolean;

  /**
   * @description Allows to collect surplus. Works with `partnerAddress`. Default: `false`.
   */
  takeSurplus?: boolean;
};

type SwapTxInputFields =
  | 'srcToken'
  | 'destToken'
  | 'amount'
  | 'side'
  | 'srcDecimals'
  | 'destDecimals'
  | 'userAddress'
  | 'slippage';
type SwapTxInputListFields =
  | 'includeDEXS'
  | 'excludeDEXS'
  | 'includeContractMethods'
  | 'excludeContractMethods'
  | 'route';

type SwapRateOptions = Omit<
  SwapQueryParams,
  SwapTxInputFields | SwapTxInputListFields | 'network' | 'version'
> & {
  /**
   * @description List of DEXs to include. **Supported DEXs:** Uniswap, Kyber, Bancor, AugustusRFQ, Oasis, Compound, Fulcrum, 0x, MakerDAO, Chai, Aave, Aave2, MultiPath, MegaPath, Curve, Curve3, Saddle, IronV2, BDai, idle, Weth, Beth, UniswapV2, Balancer, 0xRFQt, SushiSwap, LINKSWAP, Synthetix, DefiSwap, Swerve, CoFiX, Shell, DODOV1, DODOV2, OnChainPricing, PancakeSwap, PancakeSwapV2, ApeSwap, Wbnb, acryptos, streetswap, bakeryswap, julswap, vswap, vpegswap, beltfi, ellipsis, QuickSwap, COMETH, Wmatic, Nerve, Dfyn, UniswapV3, Smoothy, PantherSwap, OMM1, OneInchLP, CurveV2, mStable, WaultFinance, MDEX, ShibaSwap, CoinSwap, SakeSwap, JetSwap, Biswap, BProtocol eg: `UniswapV3,0x`.
   */
  includeDEXS?: string[];

  /**
   * @description List of DEXs to exclude. (from the list of DEXs mentioned above).
   */
  excludeDEXS?: string[];

  /**
   * @description List of Contract Methods to include without spaces. **Available values:** swapOnUniswap, buyOnUniswap, swapOnUniswapFork, buyOnUniswapFork, swapOnUniswapV2Fork, buyOnUniswapV2Fork, simpleBuy, simpleSwap, multiSwap, megaSwap, protectedMultiSwap, protectedMegaSwap, protectedSimpleSwap, protectedSimpleBuy, swapOnZeroXv2, swapOnZeroXv4, buy. eg: `simpleSwap,multiSwap`.
   */
  includeContractMethods?: ContractMethodByName[];

  /**
   * @description List of Contract Methods to exclude without spaces. (from the list of contract methods mentioned above).
   */
  excludeContractMethods?: ContractMethodByName[];
};

type SwapTxInput = Pick<SwapQueryParams, SwapTxInputFields> & {
  /**
   * @description List of tokens (addresses or symbols from `/tokens`) to comprise the price route. _Max 4 tokens._ _**\*Note:**_ _If_ `_route_` _is specified, the response will only comprise of the route specified which might not be the optimal route._
   */
  route?: string[];

  options?: SwapRateOptions;
};

export type SwapTxResult = SwapApiResponse;

export type GetSwapTxData = (
  options: SwapTxInput,
  requestParams?: RequestParameters
) => Promise<SwapTxResult>;

export type GetSwapTxFunctions = {
  getSwapTxData: GetSwapTxData;
};

export const constructSwapTx = ({
  apiURL = API_URL,
  version = DEFAULT_VERSION,
  chainId,
  fetcher,
}: ConstructFetchInput): GetSwapTxFunctions => {
  const pricesUrl = `${apiURL}/swap` as const;

  const getSwapTxData: GetSwapTxData = async (
    { srcToken, destToken, amount, route, ...rest },
    requestParams
  ) => {
    const parsedOptions = normalizeRateOptions(rest);

    const _route = route?.join('-');

    // always pass explicit type to make sure UrlSearchParams are correct
    const search = constructSearchString<SwapQueryParams>({
      amount,
      srcToken,
      destToken,
      route: _route,
      network: chainId,
      version,
      ...parsedOptions,
    });

    const fetchURL = `${pricesUrl}/${search}` as const;

    const data = await fetcher<SwapApiResponse>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });

    return data;
  };

  return {
    getSwapTxData,
  };
};
