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

type BuildSwapAndLimitOrdersTx = (
  params: BuildSwapAndLimitOrderTxInput,
  options?: BuildOptions,
  signal?: AbortSignal
) => Promise<TransactionParams>;

type BuildLimitOrdersTx = (
  params: BuildLimitOrderTxInput,
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
  orders: Pick<OrderData, 'takerAsset' | 'makerAsset' | 'takerAmount'>[],
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

    const { takerAssetsSet, makerAssetsSet, takerAmount } = orders.reduce<
      Record<'takerAssetsSet' | 'makerAssetsSet', Set<string>> & {
        takerAmount: bigint;
      }
    >(
      (accum, order) => {
        accum.takerAssetsSet.add(order.takerAsset.toLowerCase());
        accum.makerAssetsSet.add(order.makerAsset.toLowerCase());

        accum.takerAmount = accum.takerAmount + BigInt(order.takerAmount);
        return accum;
      },
      {
        takerAssetsSet: new Set([destToken.toLowerCase()]),
        makerAssetsSet: new Set(),
        takerAmount: BigInt(0),
      }
    );

    assert(
      takerAssetsSet.size === 1,
      'All orders must have the same takerAsset as destToken'
    );
    assert(
      makerAssetsSet.size === 1,
      'All orders must have the same makerAsset'
    );

    const takerAmountString = takerAmount.toString(10);

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

  // cloning functions only to narrow down the types
  const buildLimitOrderTx: BuildLimitOrdersTx = buildSwapTx;
  const buildSwapAndLimitOrderTx: BuildSwapAndLimitOrdersTx = buildSwapTx;

  return {
    getLimitOrdersRate,
    buildLimitOrderTx,
    buildSwapAndLimitOrderTx,
  };
};
