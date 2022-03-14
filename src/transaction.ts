import type { OptimalRate } from 'paraswap-core';
import type { WithGasPrice, WithMaxFee } from './gas';
import type { ConstructFetchInput, Address, FetcherPostInput } from './types';

import BigNumber from 'bignumber.js';
import { assert } from 'ts-essentials';
import { API_URL, SwapSide } from './constants';
import { PriceString } from './token';
import { constructSearchString } from './helpers/misc';

export interface TransactionParams {
  to: string;
  from: string;
  value: string;
  data: string;
  gasPrice: string;
  gas?: string;
  chainId: number;
}

interface BuildTxInput {
  srcToken: Address;
  destToken: Address;
  srcAmount: PriceString;
  destAmount: PriceString;
  priceRoute: OptimalRate;
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

type BuildOptionsBase = {
  ignoreChecks?: boolean;
  ignoreGasEstimate?: boolean;
  onlyParams?: boolean;
  simple?: boolean;
};

type BuildOptionsWithGasPrice = BuildOptionsBase & Partial<WithGasPrice>;
type BuildOptionsWitWithMaxFee = BuildOptionsBase & Partial<WithMaxFee>;

export type BuildOptions = BuildOptionsWithGasPrice | BuildOptionsWitWithMaxFee;

type BuildTx = (
  params: BuildTxInput,
  options?: BuildOptions,
  signal?: AbortSignal
) => Promise<TransactionParams>;

export type BuildTxFunctions = {
  buildTx: BuildTx;
};

export const constructBuildTx = ({
  apiURL = API_URL,
  network,
  fetcher,
}: ConstructFetchInput): BuildTxFunctions => {
  const transactionsURL = `${apiURL}/transactions/${network}`;

  const buildTx: BuildTx = async (params, options = {}, signal) => {
    const {
      srcAmount,
      destAmount,
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
    const search = constructSearchString(options);

    const fetchURL = `${transactionsURL}/${search}`;

    const fetchParams: FetcherPostInput = {
      url: fetchURL,
      method: 'POST',
      data: params,
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
  const amount =
    side === SwapSide.SELL ? queryParams.srcAmount : queryParams.destAmount;
  const priceRouteAmount =
    side === SwapSide.SELL ? priceRoute.srcAmount : priceRoute.destAmount;
  return new BigNumber(priceRouteAmount).isEqualTo(amount);
}
