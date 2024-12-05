import * as dotenv from 'dotenv';
import fetch from 'isomorphic-unfetch';
import {
  constructFetchFetcher,
  constructPartialSDK,
  constructGetQuote,
  isFetcherError,
} from '../src';

import { assert } from 'ts-essentials';

dotenv.config();

jest.setTimeout(30 * 1000);

const ETH = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE';
const USDC = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';

const chainId = 1;

const fetchFetcher = constructFetchFetcher(fetch);

describe('Quote:methods', () => {
  const quoteSDK = constructPartialSDK(
    {
      chainId,
      fetcher: fetchFetcher,
      apiURL: process.env.API_URL,
    },
    constructGetQuote
  );

  const amount = '100000000000'; // 100000 USDC,

  test('Get Quote for delta', async () => {
    const quote = await quoteSDK.getQuote({
      srcToken: USDC,
      destToken: ETH,
      amount,
      srcDecimals: 18,
      destDecimals: 18,
      mode: 'delta',
      side: 'SELL',
    });

    expect('delta' in quote).toBeTruthy();
    assert('delta' in quote, 'Delta price not found in Quote');

    const staticDeltaPrice: typeof quote.delta = {
      ...quote.delta,
      destAmount: 'dynamic_number',
      destAmountBeforeFee: 'dynamic_number',
      srcUSD: 'dynamic_number',
      destUSD: 'dynamic_number',
      destUSDBeforeFee: 'dynamic_number',
      gasCost: 'dynamic_number',
      gasCostBeforeFee: 'dynamic_number',
      gasCostUSD: 'dynamic_number',
      gasCostUSDBeforeFee: 'dynamic_number',
    };

    expect(staticDeltaPrice).toMatchInlineSnapshot(`
      {
        "destAmount": "dynamic_number",
        "destAmountBeforeFee": "dynamic_number",
        "destToken": "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        "destUSD": "dynamic_number",
        "destUSDBeforeFee": "dynamic_number",
        "gasCost": "dynamic_number",
        "gasCostBeforeFee": "dynamic_number",
        "gasCostUSD": "dynamic_number",
        "gasCostUSDBeforeFee": "dynamic_number",
        "partner": "anon",
        "partnerFee": 0,
        "srcAmount": "100000000000",
        "srcToken": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "srcUSD": "dynamic_number",
      }
    `);
  });

  test('Fail Quote for delta for small amounts', async () => {
    const quotePromise = quoteSDK.getQuote({
      srcToken: USDC,
      destToken: ETH,
      amount: (+amount / 1e6).toFixed(0),
      srcDecimals: 18,
      destDecimals: 18,
      mode: 'delta',
      side: 'SELL',
    });

    await expect(quotePromise).rejects.toThrowErrorMatchingInlineSnapshot(
      `"Bad Request"`
    );

    const error = await quotePromise.catch((e) => e);

    assert(isFetcherError(error), 'Error should be a FetchError');
    const { details, errorType } = error.response?.data;

    expect({ details, errorType }).toMatchInlineSnapshot(`
      {
        "details": "Gas cost exceeds trade amount",
        "errorType": "GasCostExceedsTradeAmount",
      }
    `);
  });

  test('Fail to Get Quote for delta with Native Token', async () => {
    const quote = await quoteSDK.getQuote({
      srcToken: ETH,
      destToken: USDC,
      amount,
      srcDecimals: 18,
      destDecimals: 18,
      mode: 'delta',
      side: 'SELL',
    });

    assert(!('delta' in quote), 'elta price should not be available in Quote');

    expect(quote).toMatchInlineSnapshot(`
      {
        "details": "ETH as source token is not supported",
        "errorType": "SourceEth",
      }
    `);
  });

  test('Fail to Get Quote for delta for BUY', async () => {
    const quote = await quoteSDK.getQuote({
      srcToken: USDC,
      destToken: ETH,
      amount,
      srcDecimals: 18,
      destDecimals: 18,
      mode: 'delta',
      side: 'BUY',
    });

    assert(!('delta' in quote), 'Delta price should not be available in Quote');

    expect(quote).toMatchInlineSnapshot(`
      {
        "details": "BUY is not supported",
        "errorType": "UnsupportedSide",
      }
    `);
  });

  test('Get Quote for market', async () => {
    const quote = await quoteSDK.getQuote({
      srcToken: USDC,
      destToken: ETH,
      amount,
      srcDecimals: 18,
      destDecimals: 18,
      mode: 'market',
      side: 'SELL',
    });

    expect(quote.market).toBeDefined();
    const priceRoute = quote.market;

    const bestRouteStable = priceRoute.bestRoute.map((b) => ({
      ...b,
      percentage: 'dynamic_number',
      swaps: 'dynamic_array',
    }));

    const priceRouteStable = {
      ...priceRoute,
      gasCost: 'dynamic_number',
      gasCostUSD: 'dynamic_number',
      hmac: 'dynamic_number',
      destAmount: 'dynamic_number',
      blockNumber: 'dynamic_number',
      srcUSD: 'dynamic_number',
      destUSD: 'dynamic_number',
      contractMethod: 'dynamic_string',
      bestRoute: bestRouteStable,
    };

    expect(priceRouteStable).toMatchSnapshot();
  });

  test('Get Delta Quote for all', async () => {
    const quote = await quoteSDK.getQuote({
      srcToken: USDC,
      destToken: ETH,
      amount,
      srcDecimals: 18,
      destDecimals: 18,
      mode: 'all',
      side: 'SELL',
    });

    expect('delta' in quote).toBeTruthy();
    assert('delta' in quote, 'Delta price not found in Quote');

    const staticDeltaPrice: typeof quote.delta = {
      ...quote.delta,
      destAmount: 'dynamic_number',
      destAmountBeforeFee: 'dynamic_number',
      srcUSD: 'dynamic_number',
      destUSD: 'dynamic_number',
      destUSDBeforeFee: 'dynamic_number',
      gasCost: 'dynamic_number',
      gasCostBeforeFee: 'dynamic_number',
      gasCostUSD: 'dynamic_number',
      gasCostUSDBeforeFee: 'dynamic_number',
    };

    expect(staticDeltaPrice).toMatchInlineSnapshot(`
      {
        "destAmount": "dynamic_number",
        "destAmountBeforeFee": "dynamic_number",
        "destToken": "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        "destUSD": "dynamic_number",
        "destUSDBeforeFee": "dynamic_number",
        "gasCost": "dynamic_number",
        "gasCostBeforeFee": "dynamic_number",
        "gasCostUSD": "dynamic_number",
        "gasCostUSDBeforeFee": "dynamic_number",
        "partner": "anon",
        "partnerFee": 0,
        "srcAmount": "100000000000",
        "srcToken": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "srcUSD": "dynamic_number",
      }
    `);
  });

  test('Get Fallback Market Quote for all', async () => {
    const quote = await quoteSDK.getQuote({
      srcToken: USDC,
      destToken: ETH,
      amount: (10e6).toString(),
      srcDecimals: 18,
      destDecimals: 18,
      mode: 'all',
      side: 'SELL',
    });

    assert(!('delta' in quote), 'Delta price not found in quote');

    expect(quote.fallbackReason).toMatchInlineSnapshot(`
      {
        "details": "Gas cost exceeds trade amount",
        "errorType": "GasCostExceedsTradeAmount",
      }
    `);

    const priceRoute = quote.market;

    const bestRouteStable = priceRoute.bestRoute.map((b) => ({
      ...b,
      swaps: b.swaps.map((s) => ({
        ...s,
        swapExchanges: s.swapExchanges.map((se) => ({
          ...se,
          exchange: 'dynamic_string',
          destAmount: 'dynamic_number',
          data: 'largerly dynamic object',
          poolAddresses: 'dynamic_array',
        })),
      })),
    }));

    const priceRouteStable = {
      ...priceRoute,
      gasCost: 'dynamic_number',
      gasCostUSD: 'dynamic_number',
      hmac: 'dynamic_number',
      destAmount: 'dynamic_number',
      blockNumber: 'dynamic_number',
      srcUSD: 'dynamic_number',
      destUSD: 'dynamic_number',
      bestRoute: bestRouteStable,
    };

    expect(priceRouteStable).toMatchSnapshot();
  });
});
