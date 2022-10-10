import type { ConstructFetchInput, OptimalRate } from '../../types';

import { assert } from 'ts-essentials';
import { API_URL, SwapSide, ContractMethod } from '../../constants';
import {
  BuildLimitOrderTxInput,
  BuildOptions,
  BuildSwapAndLimitOrderTxInput,
  TransactionParams,
  constructBuildTx,
} from '../swap/transaction';
import { constructGetRate, GetRateInput, RateOptions } from '../swap/rates';
import type { OrderData } from './buildOrder';
import { isFilledArray } from '../../helpers/misc';

type MinBuildSwapAndLimitOrderTxInput = Omit<
  // these are derived from `orders`
  BuildSwapAndLimitOrderTxInput,
  'srcToken' | 'srcAmount' | 'destToken' | 'destDecimals'
>;

type BuildSwapAndLimitOrdersTx = (
  params: MinBuildSwapAndLimitOrderTxInput,
  options?: BuildOptions,
  signal?: AbortSignal
) => Promise<TransactionParams>;

type MinBuildLimitOrderTxInput = Omit<
  BuildLimitOrderTxInput,
  // these are derived from `orders`
  'srcToken' | 'srcAmount' | 'destToken' | 'slippage'
  // `slippage` doesn't participate as we derive `srcAmount` already
>;

type BuildLimitOrdersTx = (
  params: MinBuildLimitOrderTxInput,
  options?: BuildOptions,
  signal?: AbortSignal
) => Promise<TransactionParams>;

export type BuildLimitOrdersTxFunctions = {
  getLimitOrdersRate: GetLimitOrdersRate;
  buildLimitOrderTx: BuildLimitOrdersTx;
  buildSwapAndLimitOrderTx: BuildSwapAndLimitOrdersTx;
};

type GetLimitOrdersRate = (
  // `amount`, if given, must equal the total of the orders' `takerAmounts`
  options: Omit<GetRateInput, 'amount' | 'side'> & { amount?: string },
  orders: CheckableOrderData[],
  signal?: AbortSignal
) => Promise<OptimalRate>;

export const constructBuildLimitOrderTx = ({
  apiURL = API_URL,
  chainId,
  fetcher,
}: ConstructFetchInput): BuildLimitOrdersTxFunctions => {
  const { buildTx: buildSwapTx } = constructBuildTx({
    apiURL,
    chainId,
    fetcher,
  });

  const { getRate: getSwapAndLimitOrderRate } = constructGetRate({
    apiURL,
    chainId,
    fetcher,
  });

  //  returns priceRoute that would allow from swap from srcToken to destToken(=order.takerAsset) followed by filling limit orders
  const getLimitOrdersRate: GetLimitOrdersRate = async (
    { srcToken, destToken, amount, options: _options = {}, ...rest },
    orders,
    signal
  ) => {
    assert(orders.length > 0, 'must pass at least 1 order');

    const { totalTakerAmount, takerAsset } = checkAndParseOrders(orders);
    assert(
      takerAsset.toLowerCase() === destToken.toLowerCase(),
      'All orders must have the same takerAsset as destToken'
    );

    const takerAmountString = totalTakerAmount.toString(10);

    if (amount) {
      assert(
        amount === takerAmountString,
        "`amount` must equal the total of the orders' `takerAmounts`"
      );
    }

    // The pricing must use includeContractMethods=simpleBuy and side=BUY
    const options: RateOptions = {
      ..._options,
      includeContractMethods: [ContractMethod.simpleBuy],
    };

    const side = SwapSide.BUY;

    const rateInput: GetRateInput = {
      ...rest,
      srcToken,
      destToken,
      amount: takerAmountString,
      side,
      options,
    };

    // priceRoute
    const optimalRate = await getSwapAndLimitOrderRate(rateInput, signal);
    return optimalRate;
  };

  // derive srcToken, destToken and srcAmount from orders[]
  const buildLimitOrderTx: BuildLimitOrdersTx = (params, options, signal) => {
    const { makerAsset, takerAsset, totalTakerAmount } = checkAndParseOrders(
      params.orders
    );

    const fillParams: BuildLimitOrderTxInput = {
      ...params,
      // taker supplies takerAsset
      srcToken: takerAsset,
      // no `slippage` in `params`
      srcAmount: totalTakerAmount.toString(10),
      // taker gets makerAsset in the end
      destToken: makerAsset,
    };

    return buildSwapTx(fillParams, options, signal);
  };

  const buildSwapAndLimitOrderTx: BuildSwapAndLimitOrdersTx = (
    params,
    options,
    signal
  ) => {
    const { makerAsset } = checkAndParseOrders(params.orders);

    const fillParams: BuildSwapAndLimitOrderTxInput = {
      ...params,
      // taker supplies srcToken
      srcToken: params.priceRoute.srcToken,
      // which is swapped for makerAsset, that would go towards filling the orders
      destToken: makerAsset,
      destDecimals: params.priceRoute.destDecimals,
      // one or the other
      ...(params.slippage
        ? { slippage: params.slippage }
        : //                                        may sneak in as part of `params`
          { srcAmount: params.priceRoute.srcAmount, slippage: undefined }),
    };

    return buildSwapTx(fillParams, options, signal);
  };

  return {
    getLimitOrdersRate,
    buildLimitOrderTx,
    buildSwapAndLimitOrderTx,
  };
};

type CheckAndParseOrdersResult = Omit<CheckableOrderData, 'takerAmount'> & {
  totalTakerAmount: bigint;
};

type CheckableOrderData = Pick<
  OrderData,
  'takerAsset' | 'makerAsset' | 'takerAmount' | 'maker'
> & { taker?: OrderData['taker'] };

function checkAndParseOrders(
  orders: CheckableOrderData[]
): CheckAndParseOrdersResult {
  assert(isFilledArray(orders), 'must pass at least 1 order');

  const { takerAssetsSet, makerAssetsSet, totalTakerAmount } = orders.reduce<
    Record<'takerAssetsSet' | 'makerAssetsSet', Set<string>> & {
      totalTakerAmount: bigint;
    }
  >(
    (accum, order) => {
      accum.takerAssetsSet.add(order.takerAsset.toLowerCase());
      accum.makerAssetsSet.add(order.makerAsset.toLowerCase());

      accum.totalTakerAmount =
        accum.totalTakerAmount + BigInt(order.takerAmount);
      return accum;
    },
    {
      takerAssetsSet: new Set(),
      makerAssetsSet: new Set(),
      totalTakerAmount: BigInt(0),
    }
  );

  assert(
    takerAssetsSet.size === 1,
    'All orders must have the same takerAsset as destToken'
  );
  assert(makerAssetsSet.size === 1, 'All orders must have the same makerAsset');

  const [{ maker, taker, makerAsset, takerAsset }] = orders;

  return {
    totalTakerAmount,
    maker,
    taker,
    makerAsset,
    takerAsset,
  };
}
