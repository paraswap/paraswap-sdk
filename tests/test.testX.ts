import * as dotenv from 'dotenv';
import Web3 from 'web3';
import { BigNumber as BigNumberEthers, ethers } from 'ethersV5';
import axios from 'axios';
import fetch from 'isomorphic-unfetch';
import { isAllowance, SwapSide, SimpleFetchSDK } from '../src';
import BigNumber from 'bignumber.js';

import erc20abi from './abi/ERC20.json';

import { assert } from 'ts-essentials';

import { constructSimpleSDK, SimpleSDK } from '../src/sdk/simple';
import { setupFork, HardhatProvider } from './helpers/hardhat';

dotenv.config();

jest.setTimeout(30 * 1000);

const ETH = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
const DAI = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
// const HEX = '0x2b591e99afe9f32eaa6214f7b7629768c40eeb39';

const DUMMY_ADDRESS_FOR_TESTING_ALLOWANCES =
  '0xb9A079479A7b0F4E7F398F7ED3946bE6d9a40E79';

const chainId = 1;
const srcToken = ETH;
const destToken = DAI;
const srcAmount = (1 * 1e18).toString(); //The source amount multiplied by its decimals

const referrer = 'sdk-test';

const wallet = ethers.Wallet.createRandom();

const web3provider = new Web3(HardhatProvider as any);

const ethersProvider = new ethers.providers.Web3Provider(
  HardhatProvider as any
);

const signer = wallet.connect(ethersProvider);
const senderAddress = signer.address;

describe.skip.each([
  ['fetch', { fetch }],
  ['axios', { axios }],
])('ParaSwap SDK: fetcher made with: %s', (testName, fetcherOptions) => {
  let paraSwap: SimpleFetchSDK;
  let paraSwapArbitrum: SimpleFetchSDK;

  beforeAll(async () => {
    await setupFork({
      accounts: [{ address: senderAddress, balance: 8e18 }],
    });

    paraSwapArbitrum = constructSimpleSDK({
      chainId: 42161,
      version: '6.2',
      // apiURL: 'https://api-partners.paraswap.io/',
      // apiKey: 'oXF4dtiLJ34kJTod3fcNH5WJtKRZ9cr95O4yaMvD',
      ...fetcherOptions,
    });
    paraSwap = constructSimpleSDK({ chainId, ...fetcherOptions });
  });
  test('getBalance', async () => {
    const balance = await paraSwap.swap.getBalance(senderAddress, ETH);
    expect(balance).toBeDefined();
  });

  test('Get_Markets', async () => {
    const markets = await paraSwap.swap.getAdapters();
    expect(markets.length).toBeGreaterThan(15);
  });

  test('Get_Tokens', async () => {
    const tokens = await paraSwap.swap.getTokens();

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

  test('TEST', async () => {
    const priceRoute = await paraSwapArbitrum.swap.getRate({
      srcToken: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', // DAI on Arbitrum
      srcDecimals: 18,
      destToken: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1', // WETH on Arbitrum
      destDecimals: 6,
      amount: '1000000000000000000000000',
      // userAddress: wrappedLoan.address,
      side: SwapSide.SELL,
      options: {
        // includeContractMethods: [ContractMethod.simpleSwap],
      },
    });
    console.log(
      '🚀 ~ file: test.test.ts:113 ~ test.only ~ priceRoute:',
      priceRoute
    );
  });

  test('Get_Rates', async () => {
    const priceRoute = await paraSwap.swap.getRate({
      srcToken: ETH,
      destToken: DAI,
      amount: srcAmount,
      userAddress: senderAddress,
      side: SwapSide.SELL,
      options: {
        includeDEXS: ['UniswapV2'],
        otherExchangePrices: true,
      },
    });

    const { destAmount, bestRoute, others } = priceRoute;

    expect(typeof destAmount).toBe('string');

    expect(Array.isArray(bestRoute)).toBe(true);

    const swapExchange = bestRoute[0]?.swaps[0]?.swapExchanges[0];

    assert(swapExchange, 'exchange available at swapExchanges[0]');

    expect(typeof swapExchange.destAmount).toBe('string');
    expect(new BigNumber(swapExchange.destAmount).isNaN()).toBe(false);

    expect(typeof swapExchange.exchange).toBe('string');

    const firstBestRoute = bestRoute[0];
    assert(firstBestRoute, 'route available at bestRoute[0]');

    expect(typeof firstBestRoute.percent).toBe('number');
    expect(new BigNumber(firstBestRoute.percent).isNaN()).toBe(false);

    expect(typeof swapExchange.srcAmount).toBe('string');
    expect(new BigNumber(swapExchange.srcAmount).isNaN()).toBe(false);

    expect(Array.isArray(others)).toBe(true);

    const firstRoute = others?.[0];

    assert(firstRoute, 'at least one route must exist');

    expect(typeof firstRoute.exchange).toBe('string');

    expect(typeof firstRoute.unit).toBe('string');
    expect(firstRoute.unit && new BigNumber(firstRoute.unit).isNaN()).toBe(
      false
    );
  });

  test('Get_Spender', async () => {
    const spender = await paraSwap.swap.getSpender();
    expect(web3provider.utils.isAddress(spender));
  });

  test('Get_Allowance', async () => {
    const allowance = await paraSwap.swap.getAllowance(
      DUMMY_ADDRESS_FOR_TESTING_ALLOWANCES,
      DAI
    );

    assert(isAllowance(allowance), 'hardcoded dummy address should be found');

    expect(allowance.allowance).toEqual('123000000000000000');
  });

  // test('Get_Adapters', async () => {
  //   const adapters = await paraSwap.swap.getAdapters();
  //   expect(adapters['paraswappool']?.[0]?.adapter).toBeDefined();
  //   expect(adapters['uniswapv2']?.[0]?.adapter).toBeDefined();
  //   expect(adapters['uniswapv2']?.[0]?.index).toBeDefined();
  //   expect(adapters['kyberdmm']?.[0]?.adapter).toBeDefined();
  //   expect(adapters['kyberdmm']?.[0]?.index).toBeDefined();
  // });

  test('Build_Tx', async () => {
    const destToken = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48';
    const priceRoute = await paraSwap.swap.getRate({
      srcToken,
      destToken,
      amount: srcAmount,
      userAddress: senderAddress,
      side: SwapSide.SELL,
      options: {
        includeDEXS: ['UniswapV2'],
      },
    });

    const destAmount = new BigNumber(priceRoute.destAmount)
      .times(0.99)
      .toFixed(0);

    const txParams = await paraSwap.swap.buildTx(
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
  test('Build_and_Send_Tx', async () => {
    const priceRoute = await paraSwap.swap.getRate({
      srcToken,
      destToken,
      amount: srcAmount,
      userAddress: senderAddress,
      side: SwapSide.SELL,
      options: {
        includeDEXS: ['Uniswap', 'UniswapV2', 'Balancer', 'Oasis'],
      },
    });

    const destAmount = new BigNumber(priceRoute.destAmount)
      .times(0.99)
      .toFixed(0);

    const txParams = await paraSwap.swap.buildTx(
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
      gasPrice:
        txParams.gasPrice &&
        '0x' + new BigNumber(txParams.gasPrice).toString(16),
      maxFeePerGas:
        txParams.maxFeePerGas &&
        '0x' + new BigNumber(txParams.maxFeePerGas).toString(16),
      maxPriorityFeePerGas:
        txParams.maxPriorityFeePerGas &&
        '0x' + new BigNumber(txParams.maxPriorityFeePerGas).toString(16),
      gasLimit: '0x' + new BigNumber(5000000).toString(16),
      value: '0x' + new BigNumber(txParams.value).toString(16),
    };
    const toContract = new ethers.Contract(destToken, erc20abi, ethersProvider);
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
    const priceRoute = await paraSwap.swap.getRate({
      srcToken,
      destToken,
      amount: destAmount,
      userAddress: senderAddress,
      side: SwapSide.BUY,
      options: { includeDEXS: ['Uniswap', 'UniswapV2', 'Balancer', 'Oasis'] },
    });
    const _srcAmount = new BigNumber(priceRoute.srcAmount)
      .times(1.1)
      .toFixed(0);

    const txParams = await paraSwap.swap.buildTx(
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
      gasPrice:
        txParams.gasPrice &&
        '0x' + new BigNumber(txParams.gasPrice).toString(16),
      maxFeePerGas:
        txParams.maxFeePerGas &&
        '0x' + new BigNumber(txParams.maxFeePerGas).toString(16),
      maxPriorityFeePerGas:
        txParams.maxPriorityFeePerGas &&
        '0x' + new BigNumber(txParams.maxPriorityFeePerGas).toString(16),
      gasLimit: '0x' + new BigNumber(5000000).toString(16),
      value: '0x' + new BigNumber(txParams.value).toString(16),
    };
    const toContract = new ethers.Contract(destToken, erc20abi, ethersProvider);
    const beforeFromBalance = await ethersProvider.getBalance(signer.address);
    const beforeToBalance = await toContract.balanceOf(signer.address);

    const txr = await signer.sendTransaction(transaction);
    await txr.wait(1);
    const afterFromBalance = await ethersProvider.getBalance(signer.address);
    const afterToBalance = await toContract.balanceOf(signer.address);
    expect(beforeFromBalance.gt(afterFromBalance)).toBeTruthy();
    expect(beforeToBalance.lt(afterToBalance)).toBeTruthy();
  });
});

describe.skip.each([
  [
    'fetch & ethers',
    { fetch },
    {
      ethersProviderOrSigner: signer,
      EthersContract: ethers.Contract,
      account: senderAddress,
    },
  ],
  ['axios & web3', { axios }, { web3: web3provider, account: senderAddress }],
])(
  'ParaSwap SDK: contract calling methods: %s',
  (testName, fetcherOptions, providerOptions) => {
    let paraSwap: SimpleSDK;

    beforeAll(() => {
      paraSwap = constructSimpleSDK(
        { chainId, ...fetcherOptions },
        providerOptions
      );
    });
    test('approveToken', async () => {
      const txHash = await paraSwap.swap.approveToken('12345', DAI);

      await ethersProvider.waitForTransaction(txHash);

      const toContract = new ethers.Contract(
        destToken,
        erc20abi,
        ethersProvider
      );
      const spender = await paraSwap.swap.getSpender();
      const allowance: BigNumberEthers = await toContract.allowance(
        signer.address,
        spender
      );
      expect(allowance.toString()).toEqual('12345');
    });
  }
);
