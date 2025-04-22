import type { Address, ConstructFetchInput, OptimalRate } from '../../types';

import { assert } from 'ts-essentials';
import {
  API_URL,
  SwapSide,
  ContractMethod,
  DEFAULT_VERSION,
} from '../../constants';
import {
  BuildNFTOrderTxInput,
  BuildOptions,
  BuildSwapAndNFTOrderTxInput,
  TransactionParams,
  constructBuildTx,
} from '../swap/transaction';
import { constructGetRate, GetRateInput, RateOptions } from '../swap/rates';
import type { BigIntAsString, NFTOrderData } from './buildOrder';
import { isFilledArray } from '../../helpers/misc';
import type { RequestParameters } from '../../types';
type MinBuildSwapAndNFTOrderTxInput = Omit<
  // these are derived from `orders`
  BuildSwapAndNFTOrderTxInput,
  'srcToken' | 'srcAmount' | 'destToken' | 'destDecimals'
>;

type BuildSwapAndNFTOrdersTx = (
  params: MinBuildSwapAndNFTOrderTxInput,
  options?: BuildOptions,
  requestParams?: RequestParameters
) => Promise<TransactionParams>;

type MinBuildNFTOrderTxInput = Omit<
  BuildNFTOrderTxInput,
  // these are derived from `orders`
  'srcToken' | 'srcAmount' | 'destToken' | 'slippage'
  // `slippage` doesn't participate as we derive `srcAmount` already
>;

type BuildNFTOrdersTx = (
  params: MinBuildNFTOrderTxInput,
  options?: BuildOptions,
  requestParams?: RequestParameters
) => Promise<TransactionParams>;

export type BuildNFTOrdersTxFunctions = {
  getNFTOrdersRate: GetNFTOrdersRate;
  buildNFTOrderTx: BuildNFTOrdersTx;
  buildSwapAndNFTOrderTx: BuildSwapAndNFTOrdersTx;
};

type GetNFTOrdersRate = (
  // `amount`, if given, must equal the total of the orders' `takerAmounts`
  options: Omit<GetRateInput, 'amount' | 'side'> & { amount?: string },
  orders: CheckableOrderData[],
  requestParams?: RequestParameters
) => Promise<OptimalRate>;

export const constructBuildNFTOrderTx = ({
  apiURL = API_URL,
  version = DEFAULT_VERSION,
  chainId,
  fetcher,
}: ConstructFetchInput): BuildNFTOrdersTxFunctions => {
  const { buildTx: buildSwapTx } = constructBuildTx({
    apiURL,
    version,
    chainId,
    fetcher,
  });

  const { getRate: getSwapAndNFTOrderRate } = constructGetRate({
    apiURL,
    version,
    chainId,
    fetcher,
  });

  //  returns priceRoute that would allow from swap from srcToken to destToken(=order.takerAsset) followed by filling NFT orders
  const getNFTOrdersRate: GetNFTOrdersRate = async (
    { srcToken, destToken, amount, options: _options = {}, ...rest },
    orders,
    requestParams
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
    const optimalRate = await getSwapAndNFTOrderRate(rateInput, requestParams);
    return optimalRate;
  };

  // derive srcToken, destToken and srcAmount from orders[]
  const buildNFTOrderTx: BuildNFTOrdersTx = (
    params,
    options,
    requestParams
  ) => {
    const { takerAsset, totalTakerAmount } = checkAndParseOrders(params.orders);

    const fillParams: BuildNFTOrderTxInput = {
      ...params,
      // taker supplies takerAsset
      srcToken: takerAsset,
      srcAmount: totalTakerAmount.toString(10),
      // taker gets makerAsset in the end
      destToken: 'NFT', // support any NFT
    };

    return buildSwapTx(fillParams, options, requestParams);
  };
  const buildSwapAndNFTOrderTx: BuildSwapAndNFTOrdersTx = (
    params,
    options,
    requestParams
  ) => {
    checkAndParseOrders(params.orders);

    const fillParams: BuildSwapAndNFTOrderTxInput = {
      ...params,
      // taker supplies srcToken
      srcToken: params.priceRoute.srcToken,
      // one or the other
      ...(params.slippage
        ? { slippage: params.slippage }
        : //                                        may sneak in as part of `params`
          { srcAmount: params.priceRoute.srcAmount, slippage: undefined }),
      destToken: 'NFT', // support any NFT,
      destDecimals: params.priceRoute.destDecimals,
    };
    return buildSwapTx(fillParams, options, requestParams);
  };

  return {
    getNFTOrdersRate,
    buildNFTOrderTx,
    buildSwapAndNFTOrderTx,
  };
};

type CheckAndParseOrdersResult = Omit<CheckableOrderData, 'takerAmount'> & {
  totalTakerAmount: bigint;
};

type CheckableOrderData = Pick<
  NFTOrderData,
  'takerAsset' | 'makerAsset' | 'takerAmount' | 'maker'
> & { taker?: NFTOrderData['taker'] };

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
    makerAsset: makerAsset.startsWith('0x')
      ? makerAsset
      : uintToAssetAddress(makerAsset),
    takerAsset: takerAsset.startsWith('0x')
      ? takerAsset
      : uintToAssetAddress(takerAsset),
  };
}

// extract asset address from makerAsset or takerAsset packed number encoded to contain AssetType
function uintToAssetAddress(assetUint: BigIntAsString): Address {
  return (
    '0x' +
    (BigInt(assetUint) & ((BigInt(1) << BigInt(160)) - BigInt(1))).toString(16)
  );
}
