import * as dotenv from 'dotenv';
import Web3 from 'web3';
import { ethers } from 'ethers';
import qs from 'qs';
import * as _ from 'lodash';
import axios, { AxiosError } from 'axios';
import { ParaSwap, OptimalRates, Token, APIError, Transaction } from '../src';
import BigNumber from 'bignumber.js';
import {
  Adapters,
  Allowance,
  OptimalRatesWithPartnerFees,
  AddressOrSymbol,
  PriceString,
  RateOptions,
  Address,
  BuildOptions,
} from '../src/types';
import { NULL_ADDRESS } from '../src/lib/transaction-builder';
import { SwapSide } from '../src/constants';
import { assert } from 'ts-essentials';
const erc20abi = require('../src/abi/erc20.json');

dotenv.config();

jest.setTimeout(30 * 1000);

declare let process: any;

const ETH = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
const DAI = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
const BAT = '0x0d8775f648430679a709e98d2b0cb6250d2887ef';
const MANA = '0x0f5d2fb29fb7d3cfee444a200298f468908cc942';

const TESTING_ENV = process.env.NODE_ENV === 'TESTING';
const API_URL = process.env.API_URL;
const PROVIDER_URL = process.env.PROVIDER_URL;
const network = 1;
const srcToken = ETH;
const destToken = DAI;
const srcAmount = (1 * 1e18).toString(); //The source amount multiplied by its decimals
const senderAddress =
  process.env.SENDER_ADDRESS || '0xfceA770875E7e6f25E33CEa5188d12Ef234606b4';
const referrer = 'sdk-test';
const receiver = '0x8B4e846c90a2521F0D2733EaCb56760209EAd51A';

const provider = new Web3(new Web3.providers.HttpProvider(PROVIDER_URL));

const ethersProvider = new ethers.providers.JsonRpcProvider(PROVIDER_URL);

const signer = new ethers.Wallet(process.env.PRIVATE_KEY).connect(
  ethersProvider,
);

async function getRateLegacy(
  srcToken: AddressOrSymbol,
  destToken: AddressOrSymbol,
  amount: PriceString,
  options?: RateOptions,
): Promise<OptimalRatesWithPartnerFees | APIError> {
  const { excludeDEXS, includeDEXS } = options || {};

  const query = _.isEmpty(options)
    ? ''
    : qs.stringify({ excludeDEXS, includeDEXS });

  const pricesURL = `${API_URL}/prices/?from=${srcToken}&to=${destToken}&amount=${amount}${
    query ? '&' + query : ''
  }`;
  const { data } = await axios.get(pricesURL);
  return data.priceRoute;
}

async function buildTxLegacy(
  srcToken: Address,
  destToken: Address,
  srcAmount: PriceString,
  destAmount: PriceString,
  priceRoute: OptimalRatesWithPartnerFees,
  userAddress: Address,
  referrer: string,
  receiver?: Address,
  options: BuildOptions = {},
) {
  const query = _.isEmpty(options) ? '' : qs.stringify(options);

  const txURL = `${API_URL}/transactions/1/?${query}`;

  const txConfig = {
    priceRoute,
    srcToken,
    destToken,
    srcAmount,
    destAmount,
    userAddress,
    referrer,
    receiver: receiver || '',
  };

  const { data } = await axios.post(txURL, txConfig);
  return data as Transaction;
}

describe('ParaSwap SDK', () => {
  let paraSwap: ParaSwap;

  beforeAll(async () => {
    paraSwap = new ParaSwap(network, API_URL).setWeb3Provider(provider);

    paraSwap.adapters = (await paraSwap.getAdapters()) as Adapters;
  });

  afterAll(async done => {
    done();
  });

  test('Get_Balance', async () => {
    const balance = await paraSwap.getBalance(senderAddress, ETH);
    expect(balance).toBeDefined();
  });

  test('Get_Markets', async () => {
    const markets = await paraSwap.getMarketNames();
    expect((<string[]>markets).length).toBeGreaterThan(15);
  });

  test('Get_Tokens', async () => {
    const tokensOrError = await paraSwap.getTokens();

    const tokens = tokensOrError as Token[];

    expect(Array.isArray(tokens)).toBe(true);
    expect(tokens.length).toBeGreaterThan(0);
    expect(tokens[0]).toBeInstanceOf(Token);
  });

  test('Get_Rates', async () => {
    const ratesOrError = await paraSwap.getRate(
      'ETH',
      'DAI',
      srcAmount,
      SwapSide.SELL,
      { includeDEXS: 'Uniswap' },
    );

    const priceRoute = ratesOrError as OptimalRates;

    const { destAmount, bestRoute, others } = priceRoute;

    expect(typeof destAmount).toBe('string');

    expect(Array.isArray(bestRoute)).toBe(true);

    expect(typeof bestRoute[0].destAmount).toBe('string');
    expect(new BigNumber(bestRoute[0].destAmount).isNaN()).toBe(false);

    expect(typeof bestRoute[0].exchange).toBe('string');

    expect(typeof bestRoute[0].percent).toBe('string');
    expect(new BigNumber(bestRoute[0].percent).isNaN()).toBe(false);

    expect(typeof bestRoute[0].srcAmount).toBe('string');
    expect(new BigNumber(bestRoute[0].srcAmount).isNaN()).toBe(false);

    expect(Array.isArray(others)).toBe(true);

    expect(typeof others![0].exchange).toBe('string');

    expect(typeof others![0].rate).toBe('string');
    expect(new BigNumber(others![0].rate).isNaN()).toBe(false);

    expect(typeof others![0].unit).toBe('string');
    expect(new BigNumber(<string>others![0].unit).isNaN()).toBe(false);
  });

  test('Get_Spender', async () => {
    const spender = await paraSwap.getSpender();
    expect(provider.utils.isAddress(spender as string));
  });

  test('Get_Allowance', async () => {
    const allowance = await paraSwap.getAllowance(senderAddress, DAI);

    if (!allowance || (<APIError>allowance).message) {
      return;
    }

    expect(new BigNumber((<Allowance>allowance).allowance).isNaN()).toBe(false);
  });

  test('Get_Allowances', async () => {
    const allowancesOrError = await paraSwap.getAllowances(senderAddress, [
      DAI,
      BAT,
      MANA,
    ]);

    const allowances = allowancesOrError as Allowance[];

    await Promise.all(
      allowances.map(allowance =>
        expect(new BigNumber(allowance.allowance).isNaN()).toBe(false),
      ),
    );
  });

  test('Get_Adapters', async () => {
    const adaptersOrError = await paraSwap.getAdapters();

    const adapters = adaptersOrError as Adapters;

    expect(adapters.augustus.exchange).toBeDefined();
    expect(adapters.uniswap.exchange).toBeDefined();
    expect(adapters.uniswap.targetExchange).toBeDefined();
    expect(adapters.kyber.exchange).toBeDefined();
    expect(adapters.kyber.targetExchange).toBeDefined();
  });

  test('Build_Tx_Locally', async () => {
    const srcToken = new Token(ETH, 18, 'DAI');
    const destToken = new Token(DAI, 18, 'KNC');

    assert(srcToken.symbol, 'token should have a symbol');
    assert(destToken.symbol, 'token should have a symbol');

    const ratesOrError = await paraSwap.getRate(
      srcToken.symbol,
      destToken.symbol,
      srcAmount,
      SwapSide.SELL,
      { includeDEXS: 'Kyber' },
    );
    const priceRoute = ratesOrError as OptimalRatesWithPartnerFees;

    const destAmount = priceRoute.destAmount;

    const gasPrice = new BigNumber(10).times(10 ** 9).toFixed();

    const transaction = await paraSwap.buildTxLocally(
      srcToken,
      destToken,
      srcAmount,
      destAmount,
      priceRoute,
      senderAddress,
      referrer,
      undefined,
      gasPrice,
      receiver,
    );
    expect(typeof transaction).toBe('object');
  });

  test('Build_Tx', async () => {
    const ratesOrError = await paraSwap.getRate(
      srcToken,
      destToken,
      srcAmount,
      SwapSide.SELL,
      { includeDEXS: 'Uniswap' },
    );
    const priceRoute = ratesOrError as OptimalRatesWithPartnerFees;

    const destAmount = new BigNumber(priceRoute.destAmount)
      .times(0.99)
      .toFixed();

    const txOrError = await paraSwap.buildTx(
      srcToken,
      destToken,
      srcAmount,
      destAmount,
      priceRoute,
      senderAddress,
      referrer,
      undefined,
      { ignoreChecks: true },
    );

    const transaction = txOrError as Transaction;

    expect(typeof transaction).toBe('object');
  });
  if (TESTING_ENV) {
    test('Build_tx_legacy', async () => {
      const ratesOrError = await paraSwap.getRate(
        srcToken,
        destToken,
        srcAmount,
        SwapSide.SELL,
        { includeDEXS: 'Uniswap,UniswapV2,Balancer,Oasis' },
      );
      const priceRoute = ratesOrError as OptimalRatesWithPartnerFees;
      const destAmount = new BigNumber(priceRoute.destAmount)
        .times(0.99)
        .toFixed();

      const txOrError = await paraSwap.buildTx(
        srcToken,
        destToken,
        srcAmount,
        destAmount,
        priceRoute,
        signer.address,
        referrer,
        undefined,
        { ignoreChecks: true },
      );
      const transaction = txOrError as Transaction;
      expect(typeof transaction).toBe('object');
    });
    test('Build_and_Send_Tx', async () => {
      const ratesOrError = await paraSwap.getRate(
        srcToken,
        destToken,
        srcAmount,
        SwapSide.SELL,
        { includeDEXS: 'Uniswap,UniswapV2,Balancer,Oasis' },
      );
      const priceRoute = ratesOrError as OptimalRatesWithPartnerFees;
      const destAmount = new BigNumber(priceRoute.destAmount)
        .times(0.99)
        .toFixed();

      const txOrError = await paraSwap.buildTx(
        srcToken,
        destToken,
        srcAmount,
        destAmount,
        priceRoute,
        signer.address,
        referrer,
        undefined,
        { ignoreChecks: true },
      );
      const _tx = txOrError as Transaction;
      const transaction = {
        ..._tx,
        chainId: 1337,
        gasPrice: '0x' + new BigNumber((<any>_tx).gasPrice).toString(16),
        gasLimit: '0x' + new BigNumber(5000000).toString(16),
        value: '0x' + new BigNumber(_tx.value).toString(16),
      };
      const toContract = new ethers.Contract(
        destToken,
        erc20abi,
        ethersProvider,
      );
      const beforeFromBalance = await ethersProvider.getBalance(signer.address);
      const beforeToBalance = await toContract.balanceOf(signer.address);
      const txr = await signer.sendTransaction(transaction);
      await txr.wait(1);
      const afterFromBalance = await ethersProvider.getBalance(signer.address);
      const afterToBalance = await toContract.balanceOf(signer.address);
      expect(beforeFromBalance.gt(afterFromBalance)).toBeTruthy();
      expect(beforeToBalance.lt(afterToBalance)).toBeTruthy();
    });
    test('Build_and_Send_Tx_BUY', async () => {
      const destAmount = srcAmount;
      const ratesOrError = await paraSwap.getRate(
        srcToken,
        destToken,
        destAmount,
        SwapSide.BUY,
        { includeDEXS: 'Uniswap,UniswapV2,Balancer,Oasis' },
      );
      const priceRoute = ratesOrError as OptimalRatesWithPartnerFees;
      const _srcAmount = new BigNumber(priceRoute.srcAmount)
        .times(0.99)
        .toFixed(0);

      const txOrError = await paraSwap.buildTx(
        srcToken,
        destToken,
        _srcAmount,
        destAmount,
        priceRoute,
        signer.address,
        referrer,
        undefined,
        { ignoreChecks: true },
      );
      const _tx = txOrError as Transaction;
      const transaction = {
        ..._tx,
        chainId: 1337,
        gasPrice: '0x' + new BigNumber((<any>_tx).gasPrice).toString(16),
        gasLimit: '0x' + new BigNumber(5000000).toString(16),
        value: '0x' + new BigNumber(_tx.value).toString(16),
      };
      const toContract = new ethers.Contract(
        destToken,
        erc20abi,
        ethersProvider,
      );
      const beforeFromBalance = await ethersProvider.getBalance(signer.address);
      const beforeToBalance = await toContract.balanceOf(signer.address);
      const txr = await signer.sendTransaction(transaction);
      await txr.wait(1);
      const afterFromBalance = await ethersProvider.getBalance(signer.address);
      const afterToBalance = await toContract.balanceOf(signer.address);
      expect(beforeFromBalance.gt(afterFromBalance)).toBeTruthy();
      expect(beforeToBalance.lt(afterToBalance)).toBeTruthy();
    });
    test('Build_and_Send_Tx_Legacy', async () => {
      const ratesOrError = await getRateLegacy(srcToken, destToken, srcAmount, {
        includeDEXS: 'Uniswap,UniswapV2,Balancer,Oasis',
      });
      const priceRoute = ratesOrError as any;
      const destAmount = new BigNumber(priceRoute.amount).times(0.99).toFixed();

      const txOrError = await buildTxLegacy(
        srcToken,
        destToken,
        srcAmount,
        destAmount,
        priceRoute,
        signer.address,
        referrer,
        undefined,
        { ignoreChecks: true },
      );
      const _tx = txOrError as Transaction;
      const transaction = {
        ..._tx,
        chainId: 1337,
        gasPrice: '0x' + new BigNumber((<any>_tx).gasPrice).toString(16),
        gasLimit: '0x' + new BigNumber(5000000).toString(16),
        value: '0x' + new BigNumber(_tx.value).toString(16),
      };
      const toContract = new ethers.Contract(
        destToken,
        erc20abi,
        ethersProvider,
      );
      const beforeFromBalance = await ethersProvider.getBalance(signer.address);
      const beforeToBalance = await toContract.balanceOf(signer.address);
      const txr = await signer.sendTransaction(transaction);
      await txr.wait(1);
      const afterFromBalance = await ethersProvider.getBalance(signer.address);
      const afterToBalance = await toContract.balanceOf(signer.address);
      expect(beforeFromBalance.gt(afterFromBalance)).toBeTruthy();
      expect(beforeToBalance.lt(afterToBalance)).toBeTruthy();
    });
  }
});
