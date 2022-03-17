import * as dotenv from 'dotenv';
import Web3 from 'web3';
import { ethers } from 'ethers';
import axios from 'axios';
import fetch from 'isomorphic-unfetch';
import {
  AllSDKMethods,
  constructAxiosFetcher,
  constructEthersContractCaller,
  constructFetchFetcher,
  constructSDK,
} from '../src';
import BigNumber from 'bignumber.js';
import { SwapSide } from '../src';
import { Adapters } from 'paraswap-core';
import { Allowance } from '../src/balance';
import { APIError } from '../src/legacy';
import erc20abi from './abi/ERC20.json';

import ganache from 'ganache';

dotenv.config();

jest.setTimeout(30 * 1000);

declare let process: any;

const ETH = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
const DAI = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
const BAT = '0x0d8775f648430679a709e98d2b0cb6250d2887ef';
const MANA = '0x0f5d2fb29fb7d3cfee444a200298f468908cc942';

const TESTING_ENV = true;
const PROVIDER_URL = process.env.PROVIDER_URL;
const network = 1;
const srcToken = ETH;
const destToken = DAI;
const srcAmount = (1 * 1e18).toString(); //The source amount multiplied by its decimals

const referrer = 'sdk-test';

const wallet = ethers.Wallet.createRandom();

const ganacheProvider = ganache.provider({
  wallet: {
    accounts: [{ balance: 8e18, secretKey: wallet.privateKey }],
  },
  fork: {
    url: PROVIDER_URL,
  },
  chain: {
    chainId: 1,
  },
});

const web3provider = new Web3(ganacheProvider as any);

const ethersProvider = new ethers.providers.Web3Provider(
  ganacheProvider as any
);

const fetchFetcher = constructFetchFetcher(fetch);
const axiosFetcher = constructAxiosFetcher(axios);

const signer = wallet.connect(ethersProvider);
const senderAddress = signer.address;

const ethersContractCaller = constructEthersContractCaller(
  {
    providerOrSigner: signer,
    Contract: ethers.Contract,
  },
  senderAddress
);

const web3ContractCaller = constructEthersContractCaller(
  {
    providerOrSigner: signer,
    Contract: ethers.Contract,
  },
  senderAddress
);

describe.each([
  ['fetchFetcher & web3ContractCaller', fetchFetcher, web3ContractCaller],
  ['axiosFetcher & ethersContractCaller', axiosFetcher, ethersContractCaller],
])('ParaSwap SDK: %s', (testName, fetcher, contractCaller) => {
  let paraSwap: AllSDKMethods;

  beforeAll(async () => {
    paraSwap = constructSDK({
      network,
      fetcher,
      contractCaller,
    });
    // @ts-expect-error
    paraSwap.adapters = (await paraSwap.getAdapters()) as Adapters;
  });

  test('Get_Balance', async () => {
    const balance = await paraSwap.getBalance(senderAddress, ETH);
    expect(balance).toBeDefined();
  });

  test('Get_Markets', async () => {
    const markets = await paraSwap.getAdapters({
      type: 'list',
      namesOnly: true,
    });
    expect((markets as string[]).length).toBeGreaterThan(15);
  });

  test('Get_Tokens', async () => {
    const tokens = await paraSwap.getTokens();

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
    const priceRoute = await paraSwap.getRate({
      srcToken: ETH,
      destToken: DAI,
      amount: srcAmount,
      userAddress: senderAddress,
      side: SwapSide.SELL,
      options: {
        includeDEXS: 'UniswapV2',
        otherExchangePrices: true,
      },
    });

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
    const spender = await paraSwap.getSpender();
    expect(web3provider.utils.isAddress(spender as string));
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
    const allowances = await paraSwap.getAllowances(senderAddress, [
      DAI,
      BAT,
      MANA,
    ]);

    await Promise.all(
      allowances.map((allowance) =>
        expect(new BigNumber(allowance.allowance).isNaN()).toBe(false)
      )
    );
  });

  test('Get_Adapters', async () => {
    const adapters = await paraSwap.getAdapters({ type: 'object' });
    expect(adapters.paraswappool[0].adapter).toBeDefined();
    expect(adapters.uniswapv2[0].adapter).toBeDefined();
    expect(adapters.uniswapv2[0].index).toBeDefined();
    expect(adapters.kyber[0].adapter).toBeDefined();
    expect(adapters.kyber[0].index).toBeDefined();
  });

  test('Build_Tx', async () => {
    const destToken = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48';
    const priceRoute = await paraSwap.getRate({
      srcToken,
      destToken,
      amount: srcAmount,
      userAddress: senderAddress,
      side: SwapSide.SELL,
      options: {
        includeDEXS: 'UniswapV2',
      },
    });

    const destAmount = new BigNumber(priceRoute.destAmount)
      .times(0.99)
      .toFixed(0);

    const txParams = await paraSwap.buildTx(
      {
        srcToken,
        destToken,
        srcAmount,
        destAmount,
        priceRoute,
        userAddress: senderAddress,
        partner: referrer,
      },
      { ignoreChecks: true }
    );

    expect(typeof txParams).toBe('object');
  });
  if (TESTING_ENV) {
    test('Build_tx_legacy', async () => {
      const priceRoute = await paraSwap.getRate({
        srcToken,
        destToken,
        amount: srcAmount,
        userAddress: senderAddress,
        side: SwapSide.SELL,
        options: {
          includeDEXS: 'Uniswap,UniswapV2,Balancer,Oasis',
        },
      });
      const destAmount = new BigNumber(priceRoute.destAmount)
        .times(0.99)
        .toFixed(0);

      const transaction = await paraSwap.buildTx(
        {
          srcToken,
          destToken,
          srcAmount,
          destAmount,
          priceRoute,
          userAddress: senderAddress,
          partner: referrer,
        },
        { ignoreChecks: true }
      );
      expect(typeof transaction).toBe('object');
    });
    test('Build_and_Send_Tx', async () => {
      const priceRoute = await paraSwap.getRate({
        srcToken,
        destToken,
        amount: srcAmount,
        userAddress: senderAddress,
        side: SwapSide.SELL,
        options: {
          includeDEXS: 'Uniswap,UniswapV2,Balancer,Oasis',
        },
      });

      const destAmount = new BigNumber(priceRoute.destAmount)
        .times(0.99)
        .toFixed(0);

      const txParams = await paraSwap.buildTx(
        {
          srcToken,
          destToken,
          srcAmount,
          destAmount,
          priceRoute,
          userAddress: signer.address,
          partner: referrer,
        },
        { ignoreChecks: true }
      );

      const transaction = {
        ...txParams,
        gasPrice: '0x' + new BigNumber(txParams.gasPrice).toString(16),
        gasLimit: '0x' + new BigNumber(5000000).toString(16),
        value: '0x' + new BigNumber(txParams.value).toString(16),
      };
      const toContract = new ethers.Contract(
        destToken,
        erc20abi,
        ethersProvider
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
      const priceRoute = await paraSwap.getRate({
        srcToken,
        destToken,
        amount: destAmount,
        userAddress: senderAddress,
        side: SwapSide.BUY,
        options: { includeDEXS: 'Uniswap,UniswapV2,Balancer,Oasis' },
      });
      const _srcAmount = new BigNumber(priceRoute.srcAmount)
        .times(1.1)
        .toFixed(0);

      const txParams = await paraSwap.buildTx(
        {
          srcToken,
          destToken,
          srcAmount: _srcAmount,
          destAmount,
          priceRoute,
          userAddress: signer.address,
          partner: referrer,
        },
        { ignoreChecks: true }
      );

      const transaction = {
        ...txParams,
        gasPrice: '0x' + new BigNumber(txParams.gasPrice).toString(16),
        gasLimit: '0x' + new BigNumber(5000000).toString(16),
        value: '0x' + new BigNumber(txParams.value).toString(16),
      };
      const toContract = new ethers.Contract(
        destToken,
        erc20abi,
        ethersProvider
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
