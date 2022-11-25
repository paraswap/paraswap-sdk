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

// when priceRoute with side=SELL, slippage can replace destAmount
export type TxInputAmountsPartSell = {
  slippage: number;
  srcAmount: PriceString;
  destAmount?: never; // disallowed
};
// when priceRoute with side=BUY, slippage can replace srcAmount
export type TxInputAmountsPartBuy = {
  slippage: number;
  srcAmount?: never; // disallowed
  destAmount: PriceString;
};
// both srcAmount and destAmount can be present in absence of slippage
export type TxInputAmountsPartBuyOrSell = {
  slippage?: never; // disallowed
  srcAmount: PriceString;
  destAmount: PriceString;
};

export type BuildTxInputBase = {
  srcToken: Address;
  destToken: Address;
  userAddress: Address;
  /** @description used with referral link */
  referrer?: string;
  partner?: string;
  partnerAddress?: string;
  partnerFeeBps?: number;
  receiver?: Address;
  srcDecimals?: number;
  destDecimals?: number;
  permit?: string;
  deadline?: string;
};

// for Swap transaction
export type BuildSwapTxInput = BuildTxInputBase & {
  priceRoute: OptimalRate;
} & (
    | TxInputAmountsPartSell
    | TxInputAmountsPartBuy
    | TxInputAmountsPartBuyOrSell
  ); // this union doesn't allow to mix srcAmount & destAmount & slippage together

// building block for LimitOrders and NFT Orders swaps
// can only use priceRoute.side=BUY and related TxInputAmountsPart*
type BuildTxInputBaseBUYForOrders<
  // to Omit extra keys
  // can't do Omit<> around union, breaks discriminated union
  K extends keyof TxInputAmountsPartBuy | keyof BuildTxInputBase = never
> = Omit<BuildTxInputBase, K> &
  // destAmount is sum(orders[].makerAmount)
  (| Omit<TxInputAmountsPartBuy, 'destAmount' | K>
    | Omit<TxInputAmountsPartBuyOrSell, 'destAmount' | K>
  );

// for LimitOrder Fill, without swap
export type BuildLimitOrderTxInput = BuildTxInputBaseBUYForOrders & {
  orders: SwappableOrder[];
  srcDecimals: number;
  destDecimals: number;
};

// for NFT Order Fill, without swap
export type BuildNFTOrderTxInput =
  // @TODO if NFT can ever be srcToken, change logic
  //                           for NFT token destDecimals = 0 is acceptable
  BuildTxInputBaseBUYForOrders<'destDecimals'> & {
    orders: SwappableNFTOrder[];
    srcDecimals: number;
  };

export interface BuildSwapAndLimitOrderTxInput0
  // destAmount is sum(orders[].makerAmount)
  extends Omit<BuildTxInputBase, 'destAmount'> {
  priceRoute: OptimalRate; // priceRoute.side=BUY
  orders: SwappableOrder[];
  destDecimals: number;
}
// for Swap + LimitOrder, priceRoute must have side=BUY
export type BuildSwapAndLimitOrderTxInput =
  // destAmount is sum(orders[].makerAmount)
  BuildTxInputBaseBUYForOrders & {
    priceRoute: OptimalRate; // priceRoute.side=BUY & priceRoute.contractMethod=simpleBuy
    orders: SwappableOrder[];
    destDecimals: number;
  };

// with slippage for a swap and fill - p2p - order, without to fill a p2p order directly with the intended taker asset

// for Swap + NFT Order, priceRoute must have side=BUY
export type BuildSwapAndNFTOrderTxInput =
  // destAmount is sum(orders[].makerAmount)
  BuildTxInputBaseBUYForOrders & {
    priceRoute: OptimalRate; // priceRoute.side=BUY & priceRoute.contractMethod=simpleBuy
    orders: SwappableNFTOrder[];
  };

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
    if (
      'priceRoute' in params &&
      'destAmount' in params && // isn't provided together with `orders`
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

      // user provides srcAmount or slippage but not both. so we only validate accordingly.
      assert(
        areAmountsCorrect({
          queryParams: params,
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
  queryParams: { srcAmount?: string; destAmount?: string; slippage?: number };
  side: SwapSide;
  priceRoute: OptimalRate;
}

function areAmountsCorrect({
  queryParams,
  side,
  priceRoute,
}: AreAmountsCorrectInput): boolean {
  // return early after a simpler check if the user was swapping before filling
  if (queryParams.slippage) {
    return (
      (side === SwapSide.BUY &&
        queryParams.destAmount === priceRoute.destAmount) ||
      (side === SwapSide.SELL && queryParams.srcAmount === priceRoute.srcAmount)
    );
  }

  // provided amounts match the previously queried price route
  const [inputAmount, priceRouteAmount] =
    side === SwapSide.SELL
      ? [queryParams.srcAmount, priceRoute.srcAmount]
      : [queryParams.destAmount, priceRoute.destAmount];

  return inputAmount === priceRouteAmount;
}
