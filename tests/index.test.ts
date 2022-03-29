import * as dotenv from 'dotenv';
import Web3 from 'web3';
import { TransactionReceipt as Web3TransactionReceipt } from 'web3-core';
import { BigNumber as BigNumberEthers, ethers } from 'ethers';
import axios from 'axios';
import fetch from 'isomorphic-unfetch';
import {
  ApproveTokenFunctions,
  BuildTxFunctions,
  constructApproveToken,
  constructAxiosFetcher,
  constructBuildTx,
  constructEthersContractCaller,
  constructFetchFetcher,
  constructGetAdapters,
  constructGetRate,
  constructGetSpender,
  constructGetTokens,
  constructPartialSDK,
  constructWeb3ContractCaller,
  ConstructProviderFetchInput,
  GetSpenderFunctions,
  GetTokensFunctions,
  SDKConfig,
  Web3UnpromiEvent,
} from '../src';
import BigNumber from 'bignumber.js';
import { SwapSide } from '../src';
import {
  constructGetBalances,
  GetBalancesFunctions,
  isAllowance,
} from '../src/balance';
import { AdaptersFunctions } from '../src/adapters';
import erc20abi from './abi/ERC20.json';

import ganache from 'ganache';
import { assert } from 'ts-essentials';
import { GetRateFunctions } from '../src/rates';
import {
  ContractCallerFunctions,
  TransactionContractCallerFn,
  // StaticContractCallerFn,
} from '../src/types';

dotenv.config();

jest.setTimeout(30 * 1000);

declare let process: any;

const ETH = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
const DAI = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
const HEX = '0x2b591e99afe9f32eaa6214f7b7629768c40eeb39';

const DUMMY_ADDRESS_FOR_TESTING_ALLOWANCES =
  '0xb9A079479A7b0F4E7F398F7ED3946bE6d9a40E79';

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

const web3ContractCaller = constructWeb3ContractCaller(
  web3provider,
  senderAddress
);

const customGanacheContractCaller = constructProviderOnlyContractCaller(
  ganacheProvider,
  senderAddress
);

describe.each([
  ['fetchFetcher', fetchFetcher],
  ['axiosFetcher', axiosFetcher],
])('ParaSwap SDK: fetching methods: %s', (testName, fetcher) => {
  let paraSwap: GetBalancesFunctions &
    AdaptersFunctions &
    GetTokensFunctions &
    GetRateFunctions &
    GetSpenderFunctions &
    BuildTxFunctions;

  beforeAll(() => {
    paraSwap = constructPartialSDK(
      { network, fetcher },
      constructGetBalances,
      constructGetAdapters,
      constructGetTokens,
      constructGetRate,
      constructGetSpender,
      constructBuildTx
    );
  });
  test('getBalance', async () => {
    const balance = await paraSwap.getBalance(senderAddress, ETH);
    expect(balance).toBeDefined();
  });

  test('Get_Markets', async () => {
    const markets = await paraSwap.getAdapters({
      type: 'list',
      namesOnly: true,
    });
    expect(markets.length).toBeGreaterThan(15);
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

    const firstRoute = others?.[0];

    assert(firstRoute, 'at least one route must exist');

    expect(typeof firstRoute.exchange).toBe('string');

    expect(typeof firstRoute.unit).toBe('string');
    expect(firstRoute.unit && new BigNumber(firstRoute.unit).isNaN()).toBe(
      false
    );
  });

  test('Get_Spender', async () => {
    const spender = await paraSwap.getSpender();
    expect(web3provider.utils.isAddress(spender));
  });

  test('Get_Allowance', async () => {
    const allowance = await paraSwap.getAllowance(
      DUMMY_ADDRESS_FOR_TESTING_ALLOWANCES,
      DAI
    );

    assert(isAllowance(allowance), 'hardcoded dummy address should be found');

    expect(allowance.allowance).toEqual('123000000000000000');
  });

  test('Get_Allowances', async () => {
    const allowances = await paraSwap.getAllowances(
      DUMMY_ADDRESS_FOR_TESTING_ALLOWANCES,
      [DAI, HEX]
    );

    const [daiAllowance, hexAllowance] = await Promise.all(
      allowances.map((allowance) => allowance.allowance)
    );
    expect(daiAllowance).toEqual('123000000000000000');
    expect(hexAllowance).toEqual('32100000');
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
  [
    'axiosFetcher & customGanacheContractCaller',
    axiosFetcher,
    customGanacheContractCaller,
  ],
])(
  'ParaSwap SDK: contract calling methods: %s',
  (testName, fetcher, contractCaller) => {
    type ApproveTxResult =
      | ethers.ContractTransaction
      | Web3UnpromiEvent
      | string;
    // @TODO try Instantiation Expression when TS 4.7 `as constructApproveToken<TxResponse>`
    type ApproveConstructor = (
      options: ConstructProviderFetchInput<ApproveTxResult, 'transactCall'>
    ) => ApproveTokenFunctions<ApproveTxResult>;

    let paraSwap: ApproveTokenFunctions<ApproveTxResult> & GetSpenderFunctions;

    beforeAll(() => {
      paraSwap = constructPartialSDK<
        SDKConfig<ApproveTxResult>,
        [ApproveConstructor, typeof constructGetSpender]
      >(
        { network, fetcher, contractCaller },
        constructApproveToken,
        constructGetSpender
      );
    });
    test('approveToken', async () => {
      const tx = await paraSwap.approveToken('12345', DAI);

      if (typeof tx === 'string') {
        // tx is sent
        // wait for it to mine however you prefer
        await ethersProvider.waitForTransaction(tx);
      } else if ('wait' in tx) {
        await tx.wait(1);
      } else if ('on' in tx) {
        await new Promise<Web3TransactionReceipt>((resolve, reject) => {
          tx.on('receipt', resolve);
          tx.on('error', reject);
        });
      }
      const toContract = new ethers.Contract(
        destToken,
        erc20abi,
        ethersProvider
      );
      const spender = await paraSwap.getSpender();
      const allowance: BigNumberEthers = await toContract.allowance(
        signer.address,
        spender
      );
      expect(allowance.toString()).toEqual('12345');
    });
  }
);

interface MinProvider {
  request(args: { method: string; params: any }): Promise<any>;
}
// example of constructing a custom contractCaller with provider only
function constructProviderOnlyContractCaller(
  provider: MinProvider,
  account?: string
): Pick<ContractCallerFunctions<string>, 'transactCall'> {
  // staticCall isn't currently necessary, because provider is only used in approveToken currently for tx making
  /* const staticCall: StaticContractCallerFn = async ({
    address,
    abi,
    contractMethod,
    args,
    overrides,
  }) => {
    // need to encode data somehow, to send raw call
    const iface = new ethers.utils.Interface(abi);
    const calldataEncoded = iface.encodeFunctionData(contractMethod, args);

    const gasPrice =
      overrides.gasPrice &&
      '0x' + Number.parseInt(overrides.gasPrice).toString(16);
    const gas = overrides.gas && '0x' + overrides.gas.toString(16);
    const value = overrides.value && '0x' + overrides.value.toString(16);

    const params = [
      {
        from: account,
        to: address,
        gasPrice,
        gas,
        value,
        data: calldataEncoded,
      },
    ];

    // what provider here returns will depend on provider
    // ganache returns `result` from {"id":1, "jsonrpc": "2.0", "result": "0x..."} JsonRpcResponse
    // keeping it `as any` as we don't know
    const res = await provider.request({
      method: 'eth_call',
      params,
    });

    return res;
  }; */

  const transactCall: TransactionContractCallerFn<string> = async ({
    address,
    abi,
    contractMethod,
    args,
    overrides,
  }) => {
    const iface = new ethers.utils.Interface(abi);
    const calldataEncoded = iface.encodeFunctionData(contractMethod, args);

    const gasPrice =
      overrides.gasPrice &&
      '0x' + Number.parseInt(overrides.gasPrice).toString(16);
    const gas = overrides.gas && '0x' + overrides.gas.toString(16);
    const value = overrides.value && '0x' + overrides.value.toString(16);

    const params = [
      {
        from: account,
        to: address,
        gasPrice,
        gas,
        value,
        data: calldataEncoded,
      },
    ];

    // what provider here returns will depend on provider
    // ganache returns `result` from {"id":1, "jsonrpc": "2.0", "result": "0x..."} JsonRpcResponse
    // `string`
    const res = await provider.request({
      // we can only sendTransaction right away because accounts in ganache are unlocked
      // for other provider we may need to signTransaction first, then sendRawTransaction
      method: 'eth_sendTransaction',
      params,
    });

    return res;
  };

  return { transactCall /* , staticCall */ };
}
