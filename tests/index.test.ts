import * as dotenv from 'dotenv';
import Web3 from 'web3';
import { ethers } from 'ethers';
import axios from 'axios';
import { Address, ParaSwap, PriceString, Token } from '../src';
import BigNumber from 'bignumber.js';
import { SwapSide } from '../src';
import { OptimalRate, Adapters } from 'paraswap-core';
import { Allowance } from '../src/balance';
import { APIError } from '../src/legacy';
import { RateOptions } from '../src/rates';
import { AddressOrSymbol } from '../src/token';
import { BuildOptions, TransactionParams } from '../src/transaction';
import { constructSearchString } from '../src/helpers/misc';
import erc20abi from '../src/abi/ERC20.json';

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
// const senderAddress =
//   process.env.SENDER_ADDRESS || '0xfceA770875E7e6f25E33CEa5188d12Ef234606b4';
const referrer = 'sdk-test';
// const receiver = '0x8B4e846c90a2521F0D2733EaCb56760209EAd51A';

const provider = new Web3(new Web3.providers.HttpProvider(PROVIDER_URL));

const ethersProvider = new ethers.providers.JsonRpcProvider(PROVIDER_URL);

const signer = ethers.Wallet.createRandom().connect(ethersProvider);
const senderAddress = signer.address;

async function getRateLegacy(
  srcToken: AddressOrSymbol,
  destToken: AddressOrSymbol,
  amount: PriceString,
  options?: RateOptions
): Promise<OptimalRate | APIError> {
  const { excludeDEXS, includeDEXS } = options || {};

  const query = constructSearchString({ excludeDEXS, includeDEXS });

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
  priceRoute: OptimalRate,
  userAddress: Address,
  referrer: string,
  receiver?: Address,
  options: BuildOptions = {}
) {
  const query = constructSearchString(options);

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
  return data as TransactionParams;
}

describe('ParaSwap SDK', () => {
  let paraSwap: ParaSwap;

  beforeAll(async () => {
    paraSwap = new ParaSwap(
      network,
      API_URL,
      undefined,
      undefined,
      senderAddress,
      axios
    ).setWeb3Provider(provider);
    // @ts-expect-error
    paraSwap.adapters = (await paraSwap.getAdapters()) as Adapters;
  });

  afterAll((done) => {
    done();
  });

  test('Get_Balance', async () => {
    const balance = await paraSwap.getBalance(senderAddress, ETH);
    expect(balance).toBeDefined();
  });

  test('Get_Markets', async () => {
    const markets = await paraSwap.getMarketNames();
    expect((markets as string[]).length).toBeGreaterThan(15);
  });

  test('Get_Tokens', async () => {
    const tokensOrError = await paraSwap.getTokens();

    const tokens = tokensOrError as Token[];

    expect(Array.isArray(tokens)).toBe(true);
    expect(tokens.length).toBeGreaterThan(0);
    expect(tokens[0]).toEqual(
      expect.objectContaining({
        symbol: expect.any(String),
        address: expect.any(String),
        decimals: expect.any(Number),
      })
    );
  });

  test('Get_Rates', async () => {
    const ratesOrError = await paraSwap.getRate(
      'ETH',
      'DAI',
      srcAmount,
      senderAddress,
      SwapSide.SELL,
      { includeDEXS: 'UniswapV2', otherExchangePrices: true }
    );
    const priceRoute = ratesOrError as OptimalRate;

    const { destAmount, bestRoute, others } = priceRoute;

    expect(typeof destAmount).toBe('string');

    expect(Array.isArray(bestRoute)).toBe(true);

    const swapExchange = bestRoute[0]?.swaps[0]?.swapExchanges[0];

    expect(swapExchange).toBeDefined();

    expect(typeof swapExchange.destAmount).toBe('string');
    expect(new BigNumber(swapExchange.destAmount).isNaN()).toBe(false);

    expect(typeof swapExchange.exchange).toBe('string');

    expect(typeof bestRoute[0].percent).toBe('number');
    expect(new BigNumber(bestRoute[0].percent).isNaN()).toBe(false);

    expect(typeof swapExchange.srcAmount).toBe('string');
    expect(new BigNumber(swapExchange.srcAmount).isNaN()).toBe(false);

    expect(Array.isArray(others)).toBe(true);

    expect(typeof others![0].exchange).toBe('string');

    expect(typeof others![0].unit).toBe('string');
    expect(new BigNumber(others![0].unit as string).isNaN()).toBe(false);
  });

  test('Get_Spender', async () => {
    const spender = await paraSwap.getTokenTransferProxy();
    expect(provider.utils.isAddress(spender as string));
  });

  test('Get_Allowance', async () => {
    const allowance = await paraSwap.getAllowance(senderAddress, DAI);

    if (!allowance || (allowance as APIError).message) {
      return;
    }

    expect(new BigNumber((allowance as Allowance).allowance).isNaN()).toBe(
      false
    );
  });

  test('Get_Allowances', async () => {
    const allowancesOrError = await paraSwap.getAllowances(senderAddress, [
      DAI,
      BAT,
      MANA,
    ]);

    const allowances = allowancesOrError as Allowance[];

    await Promise.all(
      allowances.map((allowance) =>
        expect(new BigNumber(allowance.allowance).isNaN()).toBe(false)
      )
    );
  });

  test('Get_Adapters', async () => {
    const adaptersOrError = await paraSwap.getAdapters();

    const adapters = adaptersOrError as Adapters;

    expect(adapters.paraswappool[0].adapter).toBeDefined();
    expect(adapters.uniswap[0].adapter).toBeDefined();
    expect(adapters.uniswap[0].index).toBeDefined();
    expect(adapters.kyber[0].adapter).toBeDefined();
    expect(adapters.kyber[0].index).toBeDefined();
  });

  test('Build_Tx', async () => {
    const destToken = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48';
    const ratesOrError = await paraSwap.getRate(
      srcToken,
      destToken,
      srcAmount,
      senderAddress,
      SwapSide.SELL,
      { includeDEXS: 'UniswapV2' }
    );

    expect((ratesOrError as APIError)?.data?.error).toBeUndefined();

    const priceRoute = ratesOrError as OptimalRate;

    const destAmount = new BigNumber(priceRoute.destAmount)
      .times(0.99)
      .toFixed(0);

    console.log(
      '🚀 ~ file: index.test.ts ~ line 253 ~ test ~ senderAddress',
      senderAddress
    );
    const txOrError = await paraSwap.buildTx(
      srcToken,
      destToken,
      srcAmount,
      destAmount,
      priceRoute,
      senderAddress,
      referrer,
      undefined,
      undefined,
      undefined,
      { ignoreChecks: true }
    );

    expect(txOrError.data.error).toBeUndefined();
    expect(typeof txOrError).toBe('object');
  });
  if (TESTING_ENV) {
    test('Build_tx_legacy', async () => {
      const ratesOrError = await paraSwap.getRate(
        srcToken,
        destToken,
        srcAmount,
        senderAddress,
        SwapSide.SELL,
        { includeDEXS: 'Uniswap,UniswapV2,Balancer,Oasis' }
      );
      const priceRoute = ratesOrError as OptimalRate;
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
        undefined,
        undefined,
        { ignoreChecks: true }
      );
      const transaction = txOrError as TransactionParams;
      expect(typeof transaction).toBe('object');
    });
    test('Build_and_Send_Tx', async () => {
      const ratesOrError = await paraSwap.getRate(
        srcToken,
        destToken,
        srcAmount,
        senderAddress,
        SwapSide.SELL,
        { includeDEXS: 'Uniswap,UniswapV2,Balancer,Oasis' }
      );
      const priceRoute = ratesOrError as OptimalRate;
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
        undefined,
        undefined,
        { ignoreChecks: true }
      );
      const _tx = txOrError as TransactionParams;
      const transaction = {
        ..._tx,
        chainId: 1337,
        gasPrice: '0x' + new BigNumber(_tx.gasPrice).toString(16),
        gasLimit: '0x' + new BigNumber(5000000).toString(16),
        value: '0x' + new BigNumber(_tx.value).toString(16),
      };
      const toContract = new ethers.Contract(
        destToken,
        erc20abi,
        ethersProvider
      );
      const beforeFromBalance = await ethersProvider.getBalance(signer.address);
      const beforeToBalance = await toContract.balanceOf(signer.address);

      // disable write calls for now
      return;

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
        senderAddress,
        SwapSide.BUY,
        { includeDEXS: 'Uniswap,UniswapV2,Balancer,Oasis' }
      );
      const priceRoute = ratesOrError as OptimalRate;
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
        undefined,
        undefined,
        { ignoreChecks: true }
      );
      const _tx = txOrError as TransactionParams;
      const transaction = {
        ..._tx,
        chainId: 1337,
        gasPrice: '0x' + new BigNumber(_tx.gasPrice).toString(16),
        gasLimit: '0x' + new BigNumber(5000000).toString(16),
        value: '0x' + new BigNumber(_tx.value).toString(16),
      };
      const toContract = new ethers.Contract(
        destToken,
        erc20abi,
        ethersProvider
      );
      const beforeFromBalance = await ethersProvider.getBalance(signer.address);
      const beforeToBalance = await toContract.balanceOf(signer.address);

      // disable write calls for now
      return;

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
        { ignoreChecks: true }
      );
      const _tx = txOrError as TransactionParams;
      const transaction = {
        ..._tx,
        chainId: 1337,
        gasPrice: '0x' + new BigNumber(_tx.gasPrice).toString(16),
        gasLimit: '0x' + new BigNumber(5000000).toString(16),
        value: '0x' + new BigNumber(_tx.value).toString(16),
      };
      const toContract = new ethers.Contract(
        destToken,
        erc20abi,
        ethersProvider
      );
      const beforeFromBalance = await ethersProvider.getBalance(signer.address);
      const beforeToBalance = await toContract.balanceOf(signer.address);

      // disable write calls for now
      return;

      const txr = await signer.sendTransaction(transaction);
      await txr.wait(1);
      const afterFromBalance = await ethersProvider.getBalance(signer.address);
      const afterToBalance = await toContract.balanceOf(signer.address);
      expect(beforeFromBalance.gt(afterFromBalance)).toBeTruthy();
      expect(beforeToBalance.lt(afterToBalance)).toBeTruthy();
    });
  }
});
