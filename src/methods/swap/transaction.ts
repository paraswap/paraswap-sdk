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
import { sanitizeOrderData as sanitizeLimitOrderData } from '../limitOrders/helpers/misc';
import { sanitizeOrderData as sanitizeNFTOrderData } from '../nftOrders/helpers/misc';
import { AssetTypeVariant } from '../nftOrders/helpers/types';

export interface TransactionParams {
  to: string;
  from: string;
  value: string;
  data: string;
  gasPrice: string;
  gas?: string;
  chainId: number;
}

export type SwappableOrder = OrderData & {
  permitMakerAsset?: string;
  signature: string;
};

export type SwappableNFTOrder = SwappableOrder & {
  makerAssetId: string;
  takerAssetId: string;
  makerAssetType: AssetTypeVariant;
  takerAssetType: AssetTypeVariant;
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
export interface BuildLimitOrderTxInput
  // destAmount is sum(orders[].makerAmount)
  extends Omit<BuildTxInputBase, 'destAmount'> {
  orders: SwappableOrder[];
  srcDecimals: number;
  destDecimals: number;
}

// for NFT Order Fill, without swap
export interface BuildNFTOrderTxInput
  extends Omit<BuildTxInputBase, 'destAmount'> {
  orders: SwappableNFTOrder[];
  srcDecimals: number;
}

// for Swap + LimitOrder
export interface BuildSwapAndLimitOrderTxInput
  // destAmount is sum(orders[].makerAmount)
  extends Omit<BuildTxInputBase, 'destAmount'> {
  priceRoute: OptimalRate;
  orders: SwappableOrder[];
  destDecimals: number;
}

// for Swap + NFT Order
export interface BuildSwapAndNFTOrderTxInput
  // destAmount is sum(orders[].makerAmount)
  extends Omit<BuildTxInputBase, 'destAmount'> {
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
    const { srcAmount } = params;

    if (
      'priceRoute' in params &&
      'destAmount' in params && // isn't providers together with `orders`
      !('orders' in params) // when present, destAmount becomes sum(orders[].makerAmount)
    ) {
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
          queryParams: { srcAmount, destAmount: params.destAmount },
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
              const sanitizedOrderData =
                'makerAssetId' in order || 'takerAssetId' in order
                  ? sanitizeNFTOrderData(order) // assetType is provided here, because Order.*Asset may be address
                  : // if Order received from API by hash
                    sanitizeLimitOrderData(order);

              const sanitizedOrder: SwappableOrder = {
                ...sanitizedOrderData,
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
