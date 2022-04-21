import * as dotenv from 'dotenv';
import Web3 from 'web3';
import { BigNumber as BigNumberEthers, Contract, ethers } from 'ethers';
import axios from 'axios';
import fetch from 'isomorphic-unfetch';
import {
  isAllowance,
  SwapSide,
  SDKFetchMethods,
  AllSDKMethods,
  TxHash,
  constructPartialSDK,
  constructBuildLimitOrder,
  BuildLimitOrderFunctions,
  constructSignLimitOrder,
  SignLimitOrderFunctions,
  constructCancelLimitOrder,
  constructEthersContractCaller,
  CancelOrderFunctions,
  SDKConfig,
  ConstructProviderFetchInput,
  constructAxiosFetcher,
} from '../src';
import BigNumber from 'bignumber.js';

import ERC20MinableABI from './abi/ERC20Mintable.json';
import { bytecode as ERC20MintableBytecode } from './bytecode/ERC20Mintable.json';
import AugustusRFQAbi from './abi/AugustusRFQ.json';
import { bytecode as AugustusRFQBytecode } from './bytecode/AugustusRFQ.json';

import ganache from 'ganache';

import { BuildLimitOrderInput } from '../src/methods/limitOrders/buildOrder';
import { chainId2verifyingContract } from '../src/methods/limitOrders/helpers/misc';

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
const srcToken = DAI;
const destToken = HEX;
const srcAmount = (1 * 1e18).toString(); //The source amount multiplied by its decimals

const referrer = 'sdk-test';

const TEST_MNEMONIC =
  'radar blur cabbage chef fix engine embark joy scheme fiction master release';
const walletStable = ethers.Wallet.fromMnemonic(TEST_MNEMONIC);
const walletRandom = ethers.Wallet.createRandom();

const ganacheProvider = ganache.provider({
  wallet: {
    accounts: [
      { balance: 8e18, secretKey: walletStable.privateKey },
      { balance: 8e18, secretKey: walletRandom.privateKey },
    ],
  },
  fork: {
    url: PROVIDER_URL,
  },
  chain: {
    chainId: network,
  },
  quiet: true,
});

const web3provider = new Web3(ganacheProvider as any);

const ethersProvider = new ethers.providers.Web3Provider(
  ganacheProvider as any
);

const signer = walletStable.connect(ethersProvider);
const senderAddress = signer.address;

const axiosFetcher = constructAxiosFetcher(axios);

const ethersContractCaller = constructEthersContractCaller(
  {
    ethersProviderOrSigner: signer,
    EthersContract: ethers.Contract,
  },
  senderAddress
);

const ERC20MintableFactory = new ethers.ContractFactory(
  ERC20MinableABI,
  ERC20MintableBytecode,
  signer
);

const AugustusRFQFactory = new ethers.ContractFactory(
  AugustusRFQAbi,
  AugustusRFQBytecode,
  signer
);

describe('Limit Orders', () => {
  let paraSwap: BuildLimitOrderFunctions &
    SignLimitOrderFunctions &
    CancelOrderFunctions<ethers.ContractTransaction>;

  let orderInput: BuildLimitOrderInput;
  const orderExpiry = new Date('12.20.2022').getTime();

  let erc20Token1: Contract;
  let erc20Token2: Contract;

  let AugustusRFQ: Contract;

  let initialChainId2verifyingContract = { ...chainId2verifyingContract };

  beforeAll(async () => {
    orderInput = {
      nonceAndMeta: 1,
      expiry: orderExpiry,
      makerAsset: srcToken,
      takerAsset: destToken,
      makerAmount: (1e18).toString(10),
      takerAmount: (8e18).toString(10),
      maker: senderAddress,
    };

    erc20Token1 = await ERC20MintableFactory.deploy(
      'ERC20Token1',
      'ERC20Token1'
    );
    await erc20Token1.deployTransaction.wait();

    erc20Token2 = await ERC20MintableFactory.deploy(
      'ERC20Token2',
      'ERC20Token2'
    );
    await erc20Token2.deployTransaction.wait();

    await erc20Token1.mint(walletStable.address, (10e18).toString(10));
    await erc20Token1.mint(walletRandom.address, (10e18).toString(10));
    await erc20Token2.mint(walletStable.address, (10e18).toString(10));
    await erc20Token2.mint(walletRandom.address, (10e18).toString(10));

    AugustusRFQ = await AugustusRFQFactory.deploy();
    await AugustusRFQ.deployTransaction.wait();

    console.log('AugustusRFQ', AugustusRFQ.address);

    // @TODO reconsider after real contracts are deployed
    // override for tests only
    chainId2verifyingContract[network] = AugustusRFQ.address; // 0x0c33fC429fDCb7b0A813bEb595D36c5Fadb3CEDC

    type CancelOrderConstructor = (
      options: ConstructProviderFetchInput<
        ethers.ContractTransaction,
        'transactCall'
      >
    ) => CancelOrderFunctions<ethers.ContractTransaction>;

    paraSwap = constructPartialSDK<
      SDKConfig<ethers.ContractTransaction>,
      [
        typeof constructBuildLimitOrder,
        typeof constructSignLimitOrder,
        CancelOrderConstructor
      ]
    >(
      { network, contractCaller: ethersContractCaller, fetcher: axiosFetcher },
      constructBuildLimitOrder,
      constructSignLimitOrder,
      constructCancelLimitOrder
    );
  });

  // takes care of `there are asynchronous operations that weren't stopped in your tests`
  // @TODO check if still needed after there are tx tests
  afterAll(async () => {
    Object.assign(chainId2verifyingContract, initialChainId2verifyingContract);
  });

  test('buildLimitOrder', async () => {
    const orderData = paraSwap.buildLimitOrder(orderInput);

    expect(orderData.data.maker).toBe(senderAddress);
    expect(orderData.data.expiry).toBe(orderExpiry);

    expect(orderData).toMatchSnapshot('Order_Data_Snapshot');
  });

  test('signLimitOrder', async () => {
    const orderData = paraSwap.buildLimitOrder(orderInput);

    const signature = await paraSwap.signLimitOrder(orderData);
    expect(signature).toMatchInlineSnapshot(
      `"0xe0c6fbcf0660ef93dee579c715efbaee41e9c9504464669f8f96f3dc0c9f279634cfe4eaca930be2793f506e237d8826ddb91bb3d4cd1dadede631f198e0915c1c"`
    );
  });

  test('fillLimitOrder', async () => {
    const maker = signer;
    const taker = walletRandom.connect(ethersProvider);

    const makerAmount = (1e18).toString(10);
    const takerAmount = (8e18).toString(10);

    const orderData = paraSwap.buildLimitOrder({
      nonceAndMeta: 1,
      expiry: orderExpiry,
      maker: maker.address,
      makerAsset: erc20Token1.address,
      makerAmount,
      takerAsset: erc20Token2.address,
      takerAmount,
    });

    const signature = await paraSwap.signLimitOrder(orderData);

    const makerToken1InitBalance: BigNumberEthers = await erc20Token1.balanceOf(
      maker.address
    );
    const takerToken1InitBalance: BigNumberEthers = await erc20Token1.balanceOf(
      taker.address
    );
    const makerToken2InitBalance: BigNumberEthers = await erc20Token2.balanceOf(
      maker.address
    );
    const takerToken2InitBalance: BigNumberEthers = await erc20Token2.balanceOf(
      taker.address
    );

    console.log('balances', {
      makerToken1InitBalance: new BigNumber(makerToken1InitBalance.toString())
        .div(1e18)
        .toString(10),
      takerToken1InitBalance: new BigNumber(takerToken1InitBalance.toString())
        .div(1e18)
        .toString(10),
      makerToken2InitBalance: new BigNumber(makerToken2InitBalance.toString())
        .div(1e18)
        .toString(10),
      takerToken2InitBalance: new BigNumber(takerToken2InitBalance.toString())
        .div(1e18)
        .toString(10),
    });

    await erc20Token1.connect(maker).approve(AugustusRFQ.address, makerAmount);
    await erc20Token2.connect(taker).approve(AugustusRFQ.address, takerAmount);

    console.log('signature', signature, 'order', orderData.data);

    await AugustusRFQ.connect(taker).fillOrder(orderData.data, signature);

    const makerToken1AfterBalance: BigNumberEthers =
      await erc20Token1.balanceOf(maker.address);
    const takerToken1AfterBalance: BigNumberEthers =
      await erc20Token1.balanceOf(taker.address);
    const makerToken2AfterBalance: BigNumberEthers =
      await erc20Token2.balanceOf(maker.address);
    const takerToken2AfterBalance: BigNumberEthers =
      await erc20Token2.balanceOf(taker.address);

    console.log('balances after', {
      makerToken1AfterBalance: new BigNumber(makerToken1AfterBalance.toString())
        .div(1e18)
        .toString(10),
      takerToken1AfterBalance: new BigNumber(takerToken1AfterBalance.toString())
        .div(1e18)
        .toString(10),
      makerToken2AfterBalance: new BigNumber(makerToken2AfterBalance.toString())
        .div(1e18)
        .toString(10),
      takerToken2AfterBalance: new BigNumber(takerToken2AfterBalance.toString())
        .div(1e18)
        .toString(10),
    });

    expect(
      new BigNumber(makerToken1AfterBalance.toString()).toNumber()
    ).toEqual(
      new BigNumber(makerToken1InitBalance.toString()).toNumber() - +makerAmount
    );
    expect(
      new BigNumber(takerToken1AfterBalance.toString()).toNumber()
    ).toEqual(
      new BigNumber(takerToken1InitBalance.toString()).toNumber() + +makerAmount
    );
    expect(
      new BigNumber(makerToken2AfterBalance.toString()).toNumber()
    ).toEqual(
      new BigNumber(makerToken2InitBalance.toString()).toNumber() + +takerAmount
    );
    expect(
      new BigNumber(takerToken2AfterBalance.toString()).toNumber()
    ).toEqual(
      new BigNumber(takerToken2InitBalance.toString()).toNumber() - +takerAmount
    );
  });

  test('cancelLimitOrder', async () => {
    // bytes32
    const randomOrderHash =
      '0x1000000000000000000000000000000000000000000000000000000000000000';

    await paraSwap.cancelLimitOrder(randomOrderHash);

    const orderStatus: BigNumberEthers = await AugustusRFQ.remaining(
      senderAddress,
      randomOrderHash
    );
    expect(orderStatus.toNumber()).toEqual(1);
  });
  test('cancelLimitOrder Bulk', async () => {
    // bytes32[]
    const randomOrderHashes = [
      '0x1000000000000000000000000000000000000000000000000000000000000000',
      '0x2000000000000000000000000000000000000000000000000000000000000000',
    ];

    await paraSwap.cancelLimitOrderBulk(randomOrderHashes);

    const orderStatus0 = await AugustusRFQ.remaining(
      senderAddress,
      randomOrderHashes[0]
    );
    const orderStatus1 = await AugustusRFQ.remaining(
      senderAddress,
      randomOrderHashes[1]
    );

    expect(orderStatus0.toNumber()).toEqual(1);
    expect(orderStatus1.toNumber()).toEqual(1);
  });
});
/* 
describe.each([
  ['fetch', { fetch }],
  ['axios', { axios }],
])('ParaSwap SDK: fetcher made with: %s', (testName, fetcherOptions) => {
  let paraSwap: SDKFetchMethods;

  beforeAll(() => {
    paraSwap = constructSimpleSDK({ network, ...fetcherOptions });
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

    const [daiAllowance, hexAllowance] = allowances.map(
      (allowance) => allowance.allowance
    );

    expect(daiAllowance).toEqual('123000000000000000');
    expect(hexAllowance).toEqual('32100000');
  });

  test('Get_Adapters', async () => {
    const adapters = await paraSwap.getAdapters({ type: 'object' });
    expect(adapters.paraswappool?.[0]?.adapter).toBeDefined();
    expect(adapters.uniswapv2?.[0]?.adapter).toBeDefined();
    expect(adapters.uniswapv2?.[0]?.index).toBeDefined();
    expect(adapters.kyberdmm?.[0]?.adapter).toBeDefined();
    expect(adapters.kyberdmm?.[0]?.index).toBeDefined();
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
    let paraSwap: AllSDKMethods<TxHash>;

    beforeAll(() => {
      paraSwap = constructSimpleSDK(
        { network, ...fetcherOptions },
        providerOptions
      );
    });
    test('approveToken', async () => {
      const txHash = await paraSwap.approveToken('12345', DAI);

      await ethersProvider.waitForTransaction(txHash);

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
 */
