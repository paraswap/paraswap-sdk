import * as dotenv from 'dotenv';
import Web3 from 'web3';
import { BigNumber as BigNumberEthers, ethers } from 'ethers';
import axios from 'axios';
import fetch from 'isomorphic-unfetch';
import {
  constructApproveToken,
  constructAxiosFetcher,
  constructBuildTx,
  constructEthersContractCaller,
  constructFetchFetcher,
  constructGetAdapters,
  constructGetRate,
  constructGetSpender,
  constructGetTokens,
} from '../src';
import BigNumber from 'bignumber.js';
import { SwapSide } from '../src';
import { Allowance, constructGetBalances } from '../src/balance';
import { APIError } from '../src/legacy';
import erc20abi from './abi/ERC20.json';

import ganache from 'ganache';
import { assert } from 'ts-essentials';

dotenv.config();

jest.setTimeout(30 * 1000);

declare let process: any;

const ETH = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
const DAI = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
const HEX = '0x2b591e99afe9f32eaa6214f7b7629768c40eeb39';

const DUMMY_ADDRESS_FOR_TESTING_ALLOWANCES =
  '0xb9A079479A7b0F4E7F398F7ED3946bE6d9a40E79';

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
  ['fetchFetcher', fetchFetcher],
  ['axiosFetcher', axiosFetcher],
])('ParaSwap SDK: fetching methods: %s', (testName, fetcher) => {
  test('getBalance', async () => {
    const { getBalance } = constructGetBalances({
      network,
      fetcher,
    });
    const balance = await getBalance(senderAddress, ETH);
    expect(balance).toBeDefined();
  });

  test('Get_Markets', async () => {
    const { getAdapters } = constructGetAdapters({ network, fetcher });
    const markets = await getAdapters({
      type: 'list',
      namesOnly: true,
    });
    expect(markets.length).toBeGreaterThan(15);
  });

  test('Get_Tokens', async () => {
    const { getTokens } = constructGetTokens({ network, fetcher });
    const tokens = await getTokens();

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
    const { getRate } = constructGetRate({ network, fetcher });
    const priceRoute = await getRate({
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

    const firstRoute = others?.[0];

    assert(firstRoute, 'at least one route must exist');

    expect(typeof firstRoute.exchange).toBe('string');

    expect(typeof firstRoute.unit).toBe('string');
    expect(firstRoute.unit && new BigNumber(firstRoute.unit).isNaN()).toBe(
      false
    );
  });

  test('Get_Spender', async () => {
    const { getSpender } = constructGetSpender({ network, fetcher });
    const spender = await getSpender();
    expect(web3provider.utils.isAddress(spender));
  });

  test('Get_Allowance', async () => {
    const { getAllowance } = constructGetBalances({ network, fetcher });
    const allowance = await getAllowance(
      DUMMY_ADDRESS_FOR_TESTING_ALLOWANCES,
      DAI
    );

    assert(isAllowance(allowance), 'hardcoded dummy address should be found');

    expect(allowance.allowance).toEqual('123000000000000000');
  });

  test('Get_Allowances', async () => {
    const { getAllowances } = constructGetBalances({ network, fetcher });
    const allowances = await getAllowances(
      DUMMY_ADDRESS_FOR_TESTING_ALLOWANCES,
      [DAI, HEX]
    );
    console.log('Get_Allowances', allowances);

    const [daiAllowance, hexAllowance] = await Promise.all(
      allowances.map((allowance) => allowance.allowance)
    );
    expect(daiAllowance).toEqual('123000000000000000');
    expect(hexAllowance).toEqual('32100000');
  });

  test('Get_Adapters', async () => {
    const { getAdapters } = constructGetAdapters({ network, fetcher });
    const adapters = await getAdapters({ type: 'object' });
    expect(adapters.paraswappool[0].adapter).toBeDefined();
    expect(adapters.uniswapv2[0].adapter).toBeDefined();
    expect(adapters.uniswapv2[0].index).toBeDefined();
    expect(adapters.kyber[0].adapter).toBeDefined();
    expect(adapters.kyber[0].index).toBeDefined();
  });

  test('Build_Tx', async () => {
    const { getRate } = constructGetRate({ network, fetcher });
    const destToken = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48';
    const priceRoute = await getRate({
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

    const { buildTx } = constructBuildTx({ network, fetcher });
    const txParams = await buildTx(
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
    const { getRate } = constructGetRate({ network, fetcher });
    const priceRoute = await getRate({
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

    const { buildTx } = constructBuildTx({ network, fetcher });
    const txParams = await buildTx(
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
    const { getRate } = constructGetRate({ network, fetcher });
    const destAmount = srcAmount;
    const priceRoute = await getRate({
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

    const { buildTx } = constructBuildTx({ network, fetcher });
    const txParams = await buildTx(
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

describe.each([
  ['fetchFetcher & ethersContractCaller', fetchFetcher, ethersContractCaller],
  ['axiosFetcher & web3ContractCaller', axiosFetcher, web3ContractCaller],
])(
  'ParaSwap SDK: contract calling methods: %s',
  (testName, fetcher, contractCaller) => {
    test('approveToken', async () => {
      const { approveToken } = constructApproveToken({
        fetcher,
        network,
        contractCaller,
      });

      const tx = await approveToken('12345', DAI);
      await tx.wait(1);
      const toContract = new ethers.Contract(
        destToken,
        erc20abi,
        ethersProvider
      );
      const { getSpender } = constructGetSpender({ network, fetcher });
      const spender = await getSpender();
      const allowance: BigNumberEthers = await toContract.allowance(
        signer.address,
        spender
      );
      expect(allowance.toString()).toEqual('12345');
    });
  }
);
