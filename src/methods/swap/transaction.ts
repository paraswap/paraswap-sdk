import type { WithGasPrice, WithMaxFee } from '../../gas';
import type {
  ConstructFetchInput,
  Address,
  FetcherPostInput,
  PriceString,
  OptimalRate,
} from '../../types';

import { assert } from 'ts-essentials';
import { API_URL, SwapSide } from '../../constants';
import { constructSearchString } from '../../helpers/misc';
import type { OrderData } from '../limitOrders/buildOrder';
import { sanitizeOrderData } from '../limitOrders/helpers/misc';

export interface TransactionParams {
  to: string;
  from: string;
  value: string;
  data: string;
  gasPrice: string;
  gas?: string;
  chainId: number;
}

type SwappableOrder = OrderData & {
  permitMakerAsset?: string;
  signature: string;
};

type SwappableNFTOrder = SwappableOrder & {
  makerAssetId: string;
  takerAssetId: string;
};

export interface BuildTxInputBase {
  srcToken: Address;
  destToken: Address;
  srcAmount: PriceString;
  destAmount: PriceString;
  // priceRoute: OptimalRate;
  // orders?: SwappableOrder[];
  userAddress: Address;
  partner?: string;
  partnerAddress?: string;
  partnerFeeBps?: number;
  receiver?: Address;
  srcDecimals?: number;
  destDecimals?: number;
  permit?: string;
  deadline?: string;
}

// for Swap transaction
export interface BuildSwapTxInput extends BuildTxInputBase {
  priceRoute: OptimalRate;
}

// for LimitOrder Fill, without swap
// @TODO check through a test
export interface BuildLimitOrderTxInput extends BuildTxInputBase {
  orders: SwappableOrder[];
  srcDecimals: number;
  destDecimals: number;
}

// for NFT Order Fill, without swap
export interface BuildNFTOrderTxInput extends BuildTxInputBase {
  orders: SwappableNFTOrder[];
  srcDecimals: number;
}

// for Swap + LimitOrder
export interface BuildSwapAndLimitOrderTxInput extends BuildTxInputBase {
  priceRoute: OptimalRate;
  orders: SwappableOrder[];
}

// for Swap + NFT Order
export interface BuildSwapAndNFTOrderTxInput extends BuildTxInputBase {
  priceRoute: OptimalRate;
  orders: SwappableNFTOrder[];
}

export type BuildTxInput =
  | BuildSwapTxInput
  | BuildLimitOrderTxInput
  | BuildNFTOrderTxInput
  | BuildSwapAndLimitOrderTxInput
  | BuildSwapAndNFTOrderTxInput;

export type BuildOptionsBase = {
  ignoreChecks?: boolean;
  ignoreGasEstimate?: boolean;
  onlyParams?: boolean;
  simple?: boolean;
};

export type BuildOptionsWithGasPrice = BuildOptionsBase & Partial<WithGasPrice>;
export type BuildOptionsWitWithMaxFee = BuildOptionsBase & Partial<WithMaxFee>;

export type BuildOptions = BuildOptionsWithGasPrice | BuildOptionsWitWithMaxFee;

type BuildTx = (
  params: BuildTxInput,
  options?: BuildOptions,
  signal?: AbortSignal
) => Promise<TransactionParams>;

export type BuildTxFunctions = {
  buildTx: BuildTx;
};

type SearchStringParams = BuildOptions;

export const constructBuildTx = ({
  apiURL = API_URL,
  chainId,
  fetcher,
}: ConstructFetchInput): BuildTxFunctions => {
  const transactionsURL = `${apiURL}/transactions/${chainId}`;

  const buildTx: BuildTx = async (params, options = {}, signal) => {
    const { srcAmount, destAmount } = params;

    if ('priceRoute' in params) {
      const {
        priceRoute,
        priceRoute: { side },
      } = params;
      const AmountMistmatchError =
        side === SwapSide.SELL
          ? 'Source Amount Mismatch'
          : 'Destination Amount Mismatch';

      assert(
        areAmountsCorrect({
          queryParams: { srcAmount, destAmount },
          side,
          priceRoute,
        }),
        AmountMistmatchError
      );
    }

    // always pass explicit type to make sure UrlSearchParams are correct
    const search = constructSearchString<SearchStringParams>(options);

    const fetchURL = `${transactionsURL}/${search}`;

    const sanitizedParams =
      'orders' in params && params.orders.length > 0
        ? {
            ...params,
            //  make sure we don't pass more with orders than API expects
            orders: params.orders.map((order) => {
              const sanitizedOrder: SwappableOrder = {
                ...sanitizeOrderData(order),
                signature: order.signature,
              };

              if (order.permitMakerAsset) {
                sanitizedOrder.permitMakerAsset = order.permitMakerAsset;
              }

              return sanitizedOrder;
            }),
          }
        : params;

    const fetchParams: FetcherPostInput = {
      url: fetchURL,
      method: 'POST',
      data: sanitizedParams,
      signal,
    };

    console.log(`
      POST ${fetchURL}
      ${JSON.stringify(sanitizedParams, null, 2)}
    `);

    const builtTx = await fetcher<TransactionParams>(fetchParams);

    return builtTx;
  };

  return { buildTx };
};

interface AreAmountsCorrectInput {
  queryParams: { srcAmount: string; destAmount: string };
  side: SwapSide;
  priceRoute: OptimalRate;
}

function areAmountsCorrect({
  queryParams,
  side,
  priceRoute,
}: AreAmountsCorrectInput): boolean {
  const [inputAmount, priceRouteAmount] =
    side === SwapSide.SELL
      ? [queryParams.srcAmount, priceRoute.srcAmount]
      : [queryParams.destAmount, priceRoute.destAmount];

  return inputAmount === priceRouteAmount;
}
