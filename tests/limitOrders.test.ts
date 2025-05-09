import * as dotenv from 'dotenv';
import Web3 from 'web3';
import type { TransactionReceipt as Web3TransactionReceipt } from 'web3';
import { BigNumber as BigNumberEthers, Contract, ethers } from 'ethersV5';
import { ethers as ethersV6 } from 'ethers';
import { hexValue, hexZeroPad } from '@ethersproject/bytes';
import axios from 'axios';
import {
  constructPartialSDK,
  constructBuildLimitOrder,
  BuildLimitOrderFunctions,
  constructSignLimitOrder,
  SignLimitOrderFunctions,
  constructCancelLimitOrder,
  CancelLimitOrderFunctions,
  constructEthersV5ContractCaller,
  constructEthersV6ContractCaller,
  SDKConfig,
  ConstructProviderFetchInput,
  constructAxiosFetcher,
  ApproveTokenForLimitOrderFunctions,
  constructApproveTokenForLimitOrder,
  constructGetLimitOrdersContract,
  GetLimitOrdersContractFunctions,
  SignableOrderData,
  constructPostLimitOrder,
  PostLimitOrderFunctions,
  LimitOrderToSend,
  GetLimitOrdersFunctions,
  constructGetLimitOrders,
  Web3UnpromiEvent,
  constructWeb3ContractCaller,
  GetSpenderFunctions,
  constructGetSpender,
  BuildLimitOrdersTxFunctions,
  constructBuildLimitOrderTx,
  BuildTxFunctions,
  constructBuildTx,
  constructFillOrderDirectly,
} from '../src';
import BigNumber from 'bignumber.js';

import ERC20MinableABI from './abi/ERC20Mintable.json';
import { bytecode as ERC20MintableBytecode } from './bytecode/ERC20Mintable.json';
import AugustusRFQAbi from './abi/AugustusRFQ.json';
import { bytecode as AugustusRFQBytecode } from './bytecode/AugustusRFQ.json';

import type { BuildLimitOrderInput } from '../src/methods/limitOrders/buildOrder';
import { assert } from 'ts-essentials';
import { ZERO_ADDRESS } from '../src/methods/common/orders/buildOrderData';
import { buyErc20TokenForEth } from './helpers';
import { HardhatProvider, setupFork } from './helpers/hardhat';

dotenv.config();

jest.setTimeout(30 * 1000);

const referrer = 'sdk-test';

const DAI = '0x6b175474e89094c44da98b954eedeac495271d0f';
const HEX = '0x2b591e99afe9f32eaa6214f7b7629768c40eeb39';
const WETH = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';
const BAT = '0x0d8775f648430679a709e98d2b0cb6250d2887ef';
const USDC = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48';

// const DUMMY_ADDRESS_FOR_TESTING_ORDERS =
//   '0xb9A079479A7b0F4E7F398F7ED3946bE6d9a40E79';

const chainId = 1;

const srcToken = DAI;
const destToken = HEX;

const TEST_MNEMONIC =
  'radar blur cabbage chef fix engine embark joy scheme fiction master release';
//0xaC39b311DCEb2A4b2f5d8461c1cdaF756F4F7Ae9
const walletV5Stable = ethers.Wallet.fromMnemonic(TEST_MNEMONIC);
//0xD7c0Cd9e7d2701c710D64Fc492C7086679BdF7b4
const walletV5Stable2 = ethers.Wallet.fromMnemonic(
  TEST_MNEMONIC,
  "m/44'/60'/0'/0/1"
);

// if test against tenderly fork, make sure accounts have enough ETH and zero nonce
const tenderlyForkUrl = process.env.TENDERLY_FORK_URL;
const ethersV5Provider = tenderlyForkUrl
  ? new ethers.providers.JsonRpcProvider(tenderlyForkUrl)
  : new ethers.providers.Web3Provider(HardhatProvider as any);

const signerV5 = walletV5Stable.connect(ethersV5Provider);
const senderAddress = signerV5.address;

const maker = signerV5;
const takerV5 = walletV5Stable2.connect(ethersV5Provider);

const walletV6Stable = ethersV6.HDNodeWallet.fromPhrase(TEST_MNEMONIC);
const walletV6Stable2 = ethersV6.HDNodeWallet.fromPhrase(
  TEST_MNEMONIC,
  undefined,
  "m/44'/60'/0'/0/1"
);

const ethersV6Provider = new ethersV6.BrowserProvider(HardhatProvider);

const signerV6 = walletV6Stable.connect(ethersV6Provider);
const takerV6 = walletV6Stable2.connect(ethersV6Provider);

const axiosFetcher = constructAxiosFetcher(axios);

const ethersV5ContractCaller = constructEthersV5ContractCaller(
  {
    ethersProviderOrSigner: signerV5,
    EthersContract: ethers.Contract,
  },
  senderAddress
);
const takerEthersV5ContractCaller = constructEthersV5ContractCaller(
  {
    ethersProviderOrSigner: takerV5,
    EthersContract: ethers.Contract,
  },
  walletV5Stable2.address
);

const ethersV6ContractCaller = constructEthersV6ContractCaller(
  {
    ethersV6ProviderOrSigner: signerV6,
    EthersV6Contract: ethersV6.Contract,
  },
  senderAddress
);
const takerEthersV6ContractCaller = constructEthersV6ContractCaller(
  {
    ethersV6ProviderOrSigner: takerV6,
    EthersV6Contract: ethersV6.Contract,
  },
  walletV6Stable2.address
);

const web3provider = new Web3(HardhatProvider as any);

const web3ContractCaller = constructWeb3ContractCaller(
  web3provider,
  senderAddress
);
const takerWeb3ContractCaller = constructWeb3ContractCaller(
  web3provider,
  walletV5Stable2.address
);

const ERC20MintableFactory = new ethers.ContractFactory(
  ERC20MinableABI,
  ERC20MintableBytecode,
  signerV5
);

const AugustusRFQFactory = new ethers.ContractFactory(
  AugustusRFQAbi,
  AugustusRFQBytecode,
  signerV5
);

const expectTxParamsScheme = expect.objectContaining({
  from: expect.any(String),
  to: expect.any(String),
  value: expect.any(String),
  data: expect.any(String),
  gasPrice: expect.any(String),
  chainId: expect.any(Number),
});

describe('Limit Orders', () => {
  let sdk: BuildLimitOrderFunctions &
    SignLimitOrderFunctions &
    GetLimitOrdersContractFunctions &
    PostLimitOrderFunctions &
    GetLimitOrdersFunctions &
    CancelLimitOrderFunctions<ethers.ContractTransaction> &
    ApproveTokenForLimitOrderFunctions<ethers.ContractTransaction> &
    GetSpenderFunctions &
    BuildLimitOrdersTxFunctions &
    BuildTxFunctions;

  type MinEthersV5SDK = BuildLimitOrderFunctions &
    SignLimitOrderFunctions &
    CancelLimitOrderFunctions<ethers.ContractTransaction> &
    ApproveTokenForLimitOrderFunctions<ethers.ContractTransaction>;
  type MinTakerEthersV5SDK = BuildLimitOrdersTxFunctions &
    ApproveTokenForLimitOrderFunctions<ethers.ContractTransaction>;

  type MinEthersV6SDK = BuildLimitOrderFunctions &
    SignLimitOrderFunctions &
    CancelLimitOrderFunctions<ethersV6.ContractTransactionResponse> &
    ApproveTokenForLimitOrderFunctions<ethersV6.ContractTransactionResponse>;
  type MinTakerEthersV6SDK = BuildLimitOrdersTxFunctions &
    ApproveTokenForLimitOrderFunctions<ethersV6.ContractTransactionResponse>;

  type MinWeb3SDK = BuildLimitOrderFunctions &
    SignLimitOrderFunctions &
    CancelLimitOrderFunctions<Web3UnpromiEvent> &
    ApproveTokenForLimitOrderFunctions<Web3UnpromiEvent>;
  type MinTakerWeb3SDK = ApproveTokenForLimitOrderFunctions<Web3UnpromiEvent>;

  type EthersV5CancelOrderConstructor = (
    options: ConstructProviderFetchInput<
      ethers.ContractTransaction,
      'transactCall'
    >
  ) => CancelLimitOrderFunctions<ethers.ContractTransaction>;
  type EthersV5ApproveTokenForLimitOrderConstructor = (
    options: ConstructProviderFetchInput<
      ethers.ContractTransaction,
      'transactCall'
    >
  ) => ApproveTokenForLimitOrderFunctions<ethers.ContractTransaction>;

  type EthersV6CancelOrderConstructor = (
    options: ConstructProviderFetchInput<
      ethersV6.ContractTransactionResponse,
      'transactCall'
    >
  ) => CancelLimitOrderFunctions<ethersV6.ContractTransactionResponse>;
  type EthersV6ApproveTokenForLimitOrderConstructor = (
    options: ConstructProviderFetchInput<
      ethersV6.ContractTransactionResponse,
      'transactCall'
    >
  ) => ApproveTokenForLimitOrderFunctions<ethersV6.ContractTransactionResponse>;

  type Web3CancelOrderConstructor = (
    options: ConstructProviderFetchInput<Web3UnpromiEvent, 'transactCall'>
  ) => CancelLimitOrderFunctions<Web3UnpromiEvent>;
  type Web3ApproveTokenForLimitOrderConstructor = (
    options: ConstructProviderFetchInput<Web3UnpromiEvent, 'transactCall'>
  ) => ApproveTokenForLimitOrderFunctions<Web3UnpromiEvent>;

  const ethersV5SDK: MinEthersV5SDK = constructPartialSDK<
    SDKConfig<ethers.ContractTransaction>,
    [
      typeof constructBuildLimitOrder,
      typeof constructSignLimitOrder,
      EthersV5CancelOrderConstructor,
      EthersV5ApproveTokenForLimitOrderConstructor
    ]
  >(
    {
      chainId,
      contractCaller: ethersV5ContractCaller,
      fetcher: axiosFetcher,
      apiURL: process.env.API_URL,
      version: '5',
    },
    constructBuildLimitOrder,
    constructSignLimitOrder,
    constructCancelLimitOrder,
    constructApproveTokenForLimitOrder
  );

  const takerEthersV5SDK: MinTakerEthersV5SDK = constructPartialSDK<
    SDKConfig<ethers.ContractTransaction>,
    [
      EthersV5ApproveTokenForLimitOrderConstructor,
      typeof constructBuildLimitOrderTx
    ]
  >(
    {
      chainId,
      contractCaller: takerEthersV5ContractCaller,
      fetcher: axiosFetcher,
      apiURL: process.env.API_URL,
      version: '5',
    },
    constructApproveTokenForLimitOrder,
    constructBuildLimitOrderTx
  );

  const ethersV6SDK: MinEthersV6SDK = constructPartialSDK<
    SDKConfig<ethersV6.ContractTransactionResponse>,
    [
      typeof constructBuildLimitOrder,
      typeof constructSignLimitOrder,
      EthersV6CancelOrderConstructor,
      EthersV6ApproveTokenForLimitOrderConstructor
    ]
  >(
    {
      chainId,
      contractCaller: ethersV6ContractCaller,
      fetcher: axiosFetcher,
      apiURL: process.env.API_URL,
      version: '5',
    },
    constructBuildLimitOrder,
    constructSignLimitOrder,
    constructCancelLimitOrder,
    constructApproveTokenForLimitOrder
  );

  const takerEthersV6SDK: MinTakerEthersV6SDK = constructPartialSDK<
    SDKConfig<ethersV6.ContractTransactionResponse>,
    [
      EthersV6ApproveTokenForLimitOrderConstructor,
      typeof constructBuildLimitOrderTx
    ]
  >(
    {
      chainId,
      contractCaller: takerEthersV6ContractCaller,
      fetcher: axiosFetcher,
      apiURL: process.env.API_URL,
      version: '5',
    },
    constructApproveTokenForLimitOrder,
    constructBuildLimitOrderTx
  );

  const web3SDK: MinWeb3SDK = constructPartialSDK<
    SDKConfig<Web3UnpromiEvent>,
    [
      typeof constructBuildLimitOrder,
      typeof constructSignLimitOrder,
      Web3CancelOrderConstructor,
      Web3ApproveTokenForLimitOrderConstructor
    ]
  >(
    {
      chainId,
      contractCaller: web3ContractCaller,
      fetcher: axiosFetcher,
      apiURL: process.env.API_URL,
      version: '5',
    },
    constructBuildLimitOrder,
    constructSignLimitOrder,
    constructCancelLimitOrder,
    constructApproveTokenForLimitOrder
  );

  const takerWeb3SDK: MinTakerWeb3SDK = constructPartialSDK<
    SDKConfig<Web3UnpromiEvent>,
    [Web3ApproveTokenForLimitOrderConstructor]
  >(
    {
      chainId,
      contractCaller: takerWeb3ContractCaller,
      fetcher: axiosFetcher,
      apiURL: process.env.API_URL,
      version: '5',
    },

    constructApproveTokenForLimitOrder
  );

  const txSDKs = [
    { lib: 'ethersV5', sdk: ethersV5SDK, takerSDK: takerEthersV5SDK },
    { lib: 'ethersV6', sdk: ethersV6SDK, takerSDK: takerEthersV6SDK },
    { lib: 'web3', sdk: web3SDK, takerSDK: takerWeb3SDK },
  ] as const;

  let orderInput: BuildLimitOrderInput;
  //                                        UTC format
  const orderExpiry = Math.floor(new Date('2025-12-20').getTime() / 1000);

  let AugustusRFQ: Contract;

  // let initialChainId2verifyingContract = { ...chainId2verifyingContract };

  beforeAll(async () => {
    await setupFork({
      accounts: [
        { balance: 80e18, address: walletV5Stable.address },
        { balance: 80e18, address: walletV5Stable2.address },
      ],
    });

    orderInput = {
      nonce: 1,
      expiry: orderExpiry,
      makerAsset: srcToken,
      takerAsset: destToken,
      makerAmount: (1e18).toString(10),
      takerAmount: (8e18).toString(10),
      maker: senderAddress,
    };

    sdk = constructPartialSDK<
      SDKConfig<ethers.ContractTransaction>,
      [
        typeof constructBuildLimitOrder,
        typeof constructSignLimitOrder,
        typeof constructGetLimitOrdersContract,
        typeof constructPostLimitOrder,
        typeof constructGetLimitOrders,
        EthersV5CancelOrderConstructor,
        EthersV5ApproveTokenForLimitOrderConstructor,
        typeof constructGetSpender,
        typeof constructBuildLimitOrderTx,
        typeof constructBuildTx
      ]
    >(
      {
        chainId,
        contractCaller: ethersV5ContractCaller,
        fetcher: axiosFetcher,
        apiURL: process.env.API_URL,
        version: '5',
      },
      constructBuildLimitOrder,
      constructSignLimitOrder,
      constructGetLimitOrdersContract,
      constructPostLimitOrder,
      constructGetLimitOrders,
      constructCancelLimitOrder,
      constructApproveTokenForLimitOrder,
      constructGetSpender,
      constructBuildLimitOrderTx,
      constructBuildTx
    );

    AugustusRFQ = AugustusRFQFactory.attach(await sdk.getLimitOrdersContract());
    // AugustusRFQ = await AugustusRFQFactory.deploy();
    // await AugustusRFQ.deployTransaction.wait();
  });

  // takes care of `there are asynchronous operations that weren't stopped in your tests`
  // @TODO check if still needed after there are tx tests
  // afterAll(async () => {
  //   Object.assign(chainId2verifyingContract, initialChainId2verifyingContract);
  // });

  test('getLimitOrdersContract', async () => {
    const augustusRFQAddress = await sdk.getLimitOrdersContract();

    expect(augustusRFQAddress).toMatchInlineSnapshot(
      `"0xe92b586627ccA7a83dC919cc7127196d70f55a06"`
    );
  });

  test('buildLimitOrder', async () => {
    const signableOrderData = await sdk.buildLimitOrder(orderInput);

    // taker address that would be checked as part of nonceAndMeta in Augustus
    const takerFromMeta = deriveTakerFromNonceAndTaker(
      signableOrderData.data.nonceAndMeta
    );

    // taker in nonceAndTaker = Zero
    expect(takerFromMeta).toBe(ZERO_ADDRESS);

    // not P2P order? taker = Zero
    expect(signableOrderData.data.taker.toLowerCase()).toBe(ZERO_ADDRESS);

    expect(signableOrderData.data.maker).toBe(senderAddress);
    expect(signableOrderData.data.expiry).toBe(orderExpiry);

    expect(signableOrderData).toMatchSnapshot('Order_Data_Snapshot');
  });

  test('buildLimitOrder p2p', async () => {
    const p2pOrderInput = {
      ...orderInput,
      taker: takerV5.address,
    };
    const signableOrderData = await sdk.buildLimitOrder({
      ...orderInput,
      taker: takerV5.address,
    });

    // taker address that would be checked as part of nonceAndMeta in Augustus
    const metaAddress = deriveTakerFromNonceAndTaker(
      signableOrderData.data.nonceAndMeta
    );

    // taker in nonceAndTaker = p2pOrderInput.taker
    expect(metaAddress.toLowerCase()).toBe(p2pOrderInput.taker.toLowerCase());

    const AugustusAddress = await sdk.getAugustusSwapper();
    // taker in AugustusRFQ = Augustus
    expect(signableOrderData.data.taker.toLowerCase()).toBe(
      AugustusAddress.toLowerCase()
    );

    expect(signableOrderData.data.maker).toBe(senderAddress);
    expect(signableOrderData.data.expiry).toBe(orderExpiry);

    expect(signableOrderData).toMatchSnapshot('P2P_Order_Data_Snapshot');
  });

  test('Build_LO_Tx', async () => {
    // swap WETH -> BAT, then fill BAT (takerAsset) for WETH (makerAsset)
    // 0.01 WETH
    const makerAmount = (0.01e18).toString(10);
    // for 6 BAT
    const takerAmount = (6e18).toString(10);

    const order = {
      nonce: 99,
      expiry: orderExpiry,
      maker: maker.address,
      makerAsset: WETH,
      makerAmount,
      takerAsset: BAT,
      takerAmount,
    };

    const signableOrderData = await sdk.buildLimitOrder(order);

    const signature = await sdk.signLimitOrder(signableOrderData);

    const orderWithSignature = { ...signableOrderData.data, signature };

    const swapAndLOPayload = await sdk.buildLimitOrderTx(
      {
        srcDecimals: 18,
        destDecimals: 18,
        userAddress: senderAddress,
        partner: referrer,
        orders: [orderWithSignature],
      },
      { ignoreChecks: true }
    );

    expect(swapAndLOPayload).toEqual(expectTxParamsScheme);
    expect({
      from: swapAndLOPayload.from,
      to: swapAndLOPayload.to,
      value: swapAndLOPayload.value,
      chainId: swapAndLOPayload.chainId,
      //  data & gasPrice vary from run to run
    }).toMatchInlineSnapshot(`
      {
        "chainId": 1,
        "from": "0xaC39b311DCEb2A4b2f5d8461c1cdaF756F4F7Ae9",
        "to": "0xdef171fe48cf0115b1d80b88dc8eab59176fee57",
        "value": "0",
      }
    `);
  });

  test(`fillLimitOrder through Augustus`, async () => {
    // 0.01 WETH
    const makerAmount = (0.01e18).toString(10);
    // for 6 BAT
    const takerAmount = (6e18).toString(10);

    // get some WETH onto maker wallet
    const maker = new ethers.Wallet(
      walletV5Stable.privateKey,
      ethersV5Provider
    );
    const { balance: wethBalance } = await buyErc20TokenForEth({
      fetcherOptions: { axios },
      tokenAddress: WETH,
      amount: makerAmount,
      signer: maker,
      providerOptions: {
        ethersProviderOrSigner: maker,
        EthersContract: ethers.Contract,
        account: maker.address,
      },
      chainId,
      ethersProvider: ethersV5Provider,
    });

    // for some reason BUY WETH may result into greater amount, unlike BUY other ERC20
    expect(new BigNumber(wethBalance).gt(makerAmount)).toBeTruthy();

    // get some BAT onto the taker wallet
    const taker = new ethers.Wallet(
      walletV5Stable2.privateKey,
      ethersV5Provider
    );
    const { balance: batBalance } = await buyErc20TokenForEth({
      fetcherOptions: { axios },
      tokenAddress: BAT,
      amount: takerAmount,
      signer: taker,
      providerOptions: {
        ethersProviderOrSigner: taker,
        EthersContract: ethers.Contract,
        account: taker.address,
      },
      chainId,
      ethersProvider: ethersV5Provider,
    });

    expect(new BigNumber(batBalance).gte(takerAmount)).toBeTruthy();

    const makerEthersContractCaller = constructEthersV5ContractCaller(
      {
        ethersProviderOrSigner: maker,
        EthersContract: ethers.Contract,
      },
      maker.address
    );
    const takerEthersContractCaller = constructEthersV5ContractCaller(
      {
        ethersProviderOrSigner: taker,
        EthersContract: ethers.Contract,
      },
      taker.address
    );

    const makerSDK = constructPartialSDK(
      {
        chainId,
        contractCaller: makerEthersContractCaller,
        fetcher: axiosFetcher,
        apiURL: process.env.API_URL,
        version: '5',
      },
      constructBuildLimitOrder,
      constructSignLimitOrder,
      constructApproveTokenForLimitOrder
    );

    const takerSDK = constructPartialSDK(
      {
        chainId,
        contractCaller: takerEthersContractCaller,
        fetcher: axiosFetcher,
        apiURL: process.env.API_URL,
        version: '5',
      },
      constructBuildLimitOrder,
      constructSignLimitOrder,
      constructApproveTokenForLimitOrder,
      constructBuildLimitOrderTx
    );

    const order = {
      nonce: 999,
      expiry: orderExpiry,
      maker: maker.address,
      makerAsset: WETH,
      makerAmount,
      takerAsset: BAT,
      takerAmount,
      taker: taker.address,
    };

    const signableOrderData = await makerSDK.buildLimitOrder(order);

    const signature = await makerSDK.signLimitOrder(signableOrderData);

    const WETH_Token = ERC20MintableFactory.attach(WETH);
    const BAT_Token = ERC20MintableFactory.attach(BAT);

    const makerToken1InitBalance: BigNumberEthers = await WETH_Token.balanceOf(
      maker.address
    );
    const takerToken1InitBalance: BigNumberEthers = await WETH_Token.balanceOf(
      taker.address
    );
    const makerToken2InitBalance: BigNumberEthers = await BAT_Token.balanceOf(
      maker.address
    );
    const takerToken2InitBalance: BigNumberEthers = await BAT_Token.balanceOf(
      taker.address
    );

    // without SDK
    // await WETH_Token.connect(maker).approve(AugustusRFQ.address, makerAmount);

    // withSDK
    const approveForMakerTx = await makerSDK.approveMakerTokenForLimitOrder(
      makerAmount,
      WETH_Token.address
    );

    await awaitTx(approveForMakerTx);

    // without SDK
    // await BAT_Token.connect(taker).approve(AugustusSwapper.address, takerAmount);

    // withSDK
    const approveForTakerTx = await takerSDK.approveTakerTokenForLimitOrder(
      takerAmount,
      BAT_Token.address
    );
    await awaitTx(approveForTakerTx);

    const orderWithSignature = { ...signableOrderData.data, signature };

    // taker address that would be checked as part of nonceAndMeta in Augustus
    const metaAddress = deriveTakerFromNonceAndTaker(
      signableOrderData.data.nonceAndMeta
    );

    // taker in nonceAndTaker = p2pOrderInput.taker
    expect(metaAddress.toLowerCase()).toBe(taker.address.toLowerCase());

    const { gas: payloadGas, ...LOPayloadTxParams } =
      await takerSDK.buildLimitOrderTx(
        {
          srcDecimals: 18,
          destDecimals: 18,
          userAddress: taker.address,
          partner: referrer,
          orders: [orderWithSignature],
        },
        // ignore checks as otherwise would throw "not enough BAT balance"
        { ignoreChecks: true }
      );

    const transaction = {
      ...LOPayloadTxParams,
      gasPrice:
        LOPayloadTxParams.gasPrice &&
        '0x' + new BigNumber(LOPayloadTxParams.gasPrice).toString(16),
      maxFeePerGas:
        LOPayloadTxParams.maxFeePerGas &&
        '0x' + new BigNumber(LOPayloadTxParams.maxFeePerGas).toString(16),
      maxPriorityFeePerGas:
        LOPayloadTxParams.maxPriorityFeePerGas &&
        '0x' +
          new BigNumber(LOPayloadTxParams.maxPriorityFeePerGas).toString(16),
      gasLimit: '0x' + new BigNumber(payloadGas || 5000000).toString(16),
      value: '0x' + new BigNumber(LOPayloadTxParams.value).toString(16),
    };

    const takerFillsOrderTx = await taker.sendTransaction(transaction);

    await awaitTx(takerFillsOrderTx);

    const makerToken1AfterBalance: BigNumberEthers = await WETH_Token.balanceOf(
      maker.address
    );
    const takerToken1AfterBalance: BigNumberEthers = await WETH_Token.balanceOf(
      taker.address
    );
    const makerToken2AfterBalance: BigNumberEthers = await BAT_Token.balanceOf(
      maker.address
    );
    const takerToken2AfterBalance: BigNumberEthers = await BAT_Token.balanceOf(
      taker.address
    );

    expect(
      new BigNumber(makerToken1AfterBalance.toString()).toString(10)
    ).toEqual(
      new BigNumber(makerToken1InitBalance.toString())
        .minus(makerAmount)
        .toString(10)
    );
    expect(
      new BigNumber(takerToken1AfterBalance.toString()).toString(10)
    ).toEqual(
      new BigNumber(takerToken1InitBalance.toString())
        .plus(makerAmount)
        .toString(10)
    );
    expect(
      new BigNumber(makerToken2AfterBalance.toString()).toString(10)
    ).toEqual(
      new BigNumber(makerToken2InitBalance.toString())
        .plus(takerAmount)
        .toString(10)
    );
    expect(
      new BigNumber(takerToken2AfterBalance.toString()).toString(10)
    ).toEqual(
      new BigNumber(takerToken2InitBalance.toString())
        .minus(takerAmount)
        .toString(10)
    );
  });

  test(`fill LimitOrder+Swap through Augustus`, async () => {
    // swap DAI -> BAT, then fill BAT (takerAsset) for WETH (makerAsset) Order

    // 0.01 WETH
    const makerAmount = (0.01e18).toString(10);
    // for 6 BAT
    const takerAmount = (6e18).toString(10);

    // get some WETH onto maker account
    const maker = new ethers.Wallet(
      walletV5Stable.privateKey,
      ethersV5Provider
    );
    const { balance: wethBalance } = await buyErc20TokenForEth({
      fetcherOptions: { axios },
      tokenAddress: WETH,
      amount: makerAmount,
      signer: maker,
      providerOptions: {
        ethersProviderOrSigner: maker,
        EthersContract: ethers.Contract,
        account: maker.address,
      },
      chainId,
      ethersProvider: ethersV5Provider,
    });

    // for some reason BUY WETH may result into greater amount, unlike BUY other ERC20
    expect(new BigNumber(wethBalance).gt(makerAmount)).toBeTruthy();

    // get some DAI onto taker account
    const taker = new ethers.Wallet(
      walletV5Stable2.privateKey,
      ethersV5Provider
    );
    const { balance: daiBalance } = await buyErc20TokenForEth({
      fetcherOptions: { axios },
      tokenAddress: DAI,
      amount: takerAmount,
      signer: taker,
      providerOptions: {
        ethersProviderOrSigner: taker,
        EthersContract: ethers.Contract,
        account: taker.address,
      },
      chainId,
      ethersProvider: ethersV5Provider,
    });

    expect(new BigNumber(daiBalance).gte(takerAmount)).toBeTruthy();

    const order = {
      nonce: 998,
      expiry: orderExpiry,
      maker: maker.address,
      makerAsset: WETH,
      makerAmount,
      takerAsset: BAT,
      takerAmount,
      taker: taker.address,
    };

    const makerEthersContractCaller = constructEthersV5ContractCaller(
      {
        ethersProviderOrSigner: maker,
        EthersContract: ethers.Contract,
      },
      maker.address
    );
    const takerEthersContractCaller = constructEthersV5ContractCaller(
      {
        ethersProviderOrSigner: taker,
        EthersContract: ethers.Contract,
      },
      taker.address
    );

    const makerSDK = constructPartialSDK(
      {
        chainId,
        contractCaller: makerEthersContractCaller,
        fetcher: axiosFetcher,
        apiURL: process.env.API_URL,
        version: '5',
      },
      constructBuildLimitOrder,
      constructSignLimitOrder,
      constructApproveTokenForLimitOrder
    );

    const takerSDK = constructPartialSDK(
      {
        chainId,
        contractCaller: takerEthersContractCaller,
        fetcher: axiosFetcher,
        apiURL: process.env.API_URL,
        version: '5',
      },
      constructBuildLimitOrder,
      constructSignLimitOrder,
      constructApproveTokenForLimitOrder,
      constructBuildLimitOrderTx,
      constructGetSpender
    );

    const signableOrderData = await makerSDK.buildLimitOrder(order);

    const signature = await makerSDK.signLimitOrder(signableOrderData);

    const WETH_Token = ERC20MintableFactory.attach(WETH);
    const BAT_Token = ERC20MintableFactory.attach(BAT);
    const DAI_Token = ERC20MintableFactory.attach(DAI);

    const makerToken1InitBalance: BigNumberEthers = await WETH_Token.balanceOf(
      maker.address
    );
    const takerToken1InitBalance: BigNumberEthers = await WETH_Token.balanceOf(
      taker.address
    );
    const makerToken2InitBalance: BigNumberEthers = await BAT_Token.balanceOf(
      maker.address
    );
    const takerToken2InitBalance: BigNumberEthers = await BAT_Token.balanceOf(
      taker.address
    );

    // without SDK
    // await WETH_Token.connect(maker).approve(AugustusRFQ.address, makerAmount);

    // withSDK
    const approveForMakerTx = await makerSDK.approveMakerTokenForLimitOrder(
      makerAmount,
      WETH_Token.address
    );

    await awaitTx(approveForMakerTx);

    // without SDK
    // await DAI_Token.connect(taker).approve(AugustusSwapper.address, takerAmount);

    // withSDK
    const approveForTakerTx = await takerSDK.approveTakerTokenForLimitOrder(
      takerAmount,
      DAI_Token.address
    );
    await awaitTx(approveForTakerTx);

    const orderWithSignature = { ...signableOrderData.data, signature };

    // taker address that would be checked as part of nonceAndMeta in Augustus
    const metaAddress = deriveTakerFromNonceAndTaker(
      signableOrderData.data.nonceAndMeta
    );

    // taker in nonceAndTaker = p2pOrderInput.taker
    expect(metaAddress.toLowerCase()).toBe(taker.address.toLowerCase());

    const priceRoute = await takerSDK.getLimitOrdersRate(
      {
        srcToken: DAI,
        srcDecimals: 18,
        destDecimals: 18,
        destToken: BAT,
        userAddress: taker.address,
      },
      [order]
    );

    const swapAndLOPayloadTxParams = await takerSDK.buildSwapAndLimitOrderTx(
      {
        priceRoute,
        userAddress: taker.address,
        partner: referrer,
        orders: [orderWithSignature],
      },
      { ignoreChecks: true }
    );

    const transaction = {
      ...swapAndLOPayloadTxParams,
      gasPrice:
        swapAndLOPayloadTxParams.gasPrice &&
        '0x' + new BigNumber(swapAndLOPayloadTxParams.gasPrice).toString(16),
      maxFeePerGas:
        swapAndLOPayloadTxParams.maxFeePerGas &&
        '0x' +
          new BigNumber(swapAndLOPayloadTxParams.maxFeePerGas).toString(16),
      maxPriorityFeePerGas:
        swapAndLOPayloadTxParams.maxPriorityFeePerGas &&
        '0x' +
          new BigNumber(swapAndLOPayloadTxParams.maxPriorityFeePerGas).toString(
            16
          ),
      gasLimit: '0x' + new BigNumber(5000000).toString(16),
      value: '0x' + new BigNumber(swapAndLOPayloadTxParams.value).toString(16),
    };

    const augustusTakerTokenBalanceBeforeSwap: BigNumberEthers =
      await BAT_Token.balanceOf(await takerSDK.getAugustusSwapper());

    const takerFillsOrderTx = await taker.sendTransaction(transaction);

    await awaitTx(takerFillsOrderTx);

    const makerToken1AfterBalance: BigNumberEthers = await WETH_Token.balanceOf(
      maker.address
    );
    const takerToken1AfterBalance: BigNumberEthers = await WETH_Token.balanceOf(
      taker.address
    );
    const makerToken2AfterBalance: BigNumberEthers = await BAT_Token.balanceOf(
      maker.address
    );
    const takerToken2AfterBalance: BigNumberEthers = await BAT_Token.balanceOf(
      taker.address
    );

    expect(
      new BigNumber(makerToken1AfterBalance.toString()).toString(10)
    ).toEqual(
      new BigNumber(makerToken1InitBalance.toString())
        .minus(makerAmount)
        .toString(10)
    );
    expect(
      new BigNumber(takerToken1AfterBalance.toString()).toString(10)
    ).toEqual(
      new BigNumber(takerToken1InitBalance.toString())
        .plus(makerAmount)
        .toString(10)
    );
    expect(
      new BigNumber(makerToken2AfterBalance.toString()).toString(10)
    ).toEqual(
      new BigNumber(makerToken2InitBalance.toString())
        .plus(takerAmount)
        .toString(10)
    );
    expect(
      new BigNumber(takerToken2AfterBalance.toString())
        .plus(augustusTakerTokenBalanceBeforeSwap.toString()) // if augustus contained some dust, it'll be transferred to the taker in the result of a swap
        .toString(10)
    ).toEqual(
      new BigNumber(takerToken2InitBalance.toString()) // initial balance
        .plus(priceRoute.destAmount) // + swapped destAmount
        .minus(takerAmount) // - given to fill the order
        .toString(10)
    );
  });

  test('Build_Swap+LO_Tx', async () => {
    // swap DAI -> BAT, then fill BAT (takerAsset) for WETH (makerAsset)

    // 0.01 WETH
    const makerAmount = (0.01e18).toString(10);
    // for 6 BAT
    const takerAmount = (6e18).toString(10);

    const order = {
      nonce: 99,
      expiry: orderExpiry,
      maker: maker.address,
      makerAsset: WETH,
      makerAmount,
      takerAsset: BAT,
      takerAmount,
    };

    // token to get after SWAP must be the takerAsset to allow to fill Order
    const destToken = order.takerAsset;
    // token to swap for destToken prior to filling Order
    const srcToken = DAI;

    const signableOrderData = await sdk.buildLimitOrder(order);

    const signature = await sdk.signLimitOrder(signableOrderData);

    const priceRoute = await sdk.getLimitOrdersRate(
      {
        srcToken,
        destToken,
        userAddress: senderAddress,
        options: { includeDEXS: ['UniswapV2'] },
      },
      [order]
    );

    const stablePriceRouteMatch: typeof priceRoute = {
      ...priceRoute,
      blockNumber: NaN, // will change with time
      srcAmount: '---', //will change based on srcToken/destToken rate
      hmac: '---', // will change with any other change
      destUSD: '---',
      gasCost: '---',
      gasCostUSD: '---',
      srcUSD: '---',
      bestRoute: priceRoute.bestRoute.map((route) => ({
        ...route,
        swaps: route.swaps.map((swap) => ({
          ...swap,
          swapExchanges: swap.swapExchanges.map((exchange) => ({
            ...exchange,
            data: {
              ...exchange.data,
              gasUSD: '---',
            },
            srcAmount: '---', //will change based on srcToken/destToken rate
          })),
        })),
      })),
    };

    // @CONSIDER this may change
    expect(stablePriceRouteMatch).toMatchSnapshot();

    const swapTxPayload = await sdk.buildTx(
      {
        srcToken,
        destToken,
        srcAmount: priceRoute.srcAmount,
        destAmount: priceRoute.destAmount,
        priceRoute,
        userAddress: senderAddress,
        partner: referrer,
      },
      { ignoreChecks: true }
    );

    expect(swapTxPayload).toEqual(expectTxParamsScheme);

    expect({
      from: swapTxPayload.from,
      to: swapTxPayload.to,
      value: swapTxPayload.value,
      chainId: swapTxPayload.chainId,
      //  data & gasPrice vary from run to run
    }).toMatchInlineSnapshot(`
      {
        "chainId": 1,
        "from": "0xaC39b311DCEb2A4b2f5d8461c1cdaF756F4F7Ae9",
        "to": "0xDEF171Fe48CF0115B1d80b88dc8eAB59176FEe57",
        "value": "0",
      }
    `);

    const swappableOrder = { ...signableOrderData.data, signature };

    const swapAndLOPayload = await sdk.buildSwapAndLimitOrderTx(
      {
        priceRoute,
        userAddress: senderAddress,
        partner: referrer,
        orders: [swappableOrder],
      },
      { ignoreChecks: true }
    );

    expect(swapAndLOPayload).toEqual(expectTxParamsScheme);
    expect({
      from: swapAndLOPayload.from,
      to: swapAndLOPayload.to,
      value: swapAndLOPayload.value,
      chainId: swapAndLOPayload.chainId,
      //  data & gasPrice vary from run to run
    }).toMatchInlineSnapshot(`
      {
        "chainId": 1,
        "from": "0xaC39b311DCEb2A4b2f5d8461c1cdaF756F4F7Ae9",
        "to": "0xDEF171Fe48CF0115B1d80b88dc8eAB59176FEe57",
        "value": "0",
      }
    `);
  });

  describe.each(txSDKs)(
    'ethereum lib tests: $lib',
    ({ lib, sdk, takerSDK }) => {
      test(`signLimitOrder with ${lib}`, async () => {
        const signableOrderData = await sdk.buildLimitOrder(orderInput);

        const signature = await sdk.signLimitOrder(signableOrderData);
        expect(signature).toMatchInlineSnapshot(
          `"0x18b022691daab1d8a3486aab5a006f2e98932b1c2fe4f04726c766e7a4e6d4935cbbf6d03ef945f23bef5cf4e250086f14581b1b8097f6c3ffd62653c8b2454b1b"`
        );

        const presumedOrderHash = calculateOrderHash(signableOrderData);

        expect(
          ethers.utils.recoverAddress(presumedOrderHash, signature)
        ).toEqual(senderAddress);
      });

      let libDependentNumber = 1;

      test(`cancelLimitOrder with ${lib}`, async () => {
        // bytes32
        const randomOrderHash = `0x${libDependentNumber++}000000000000000000000000000000000000000000000000000000000000000`;

        const tx = await sdk.cancelLimitOrder(randomOrderHash);
        await awaitTx(tx);

        const orderStatus: BigNumberEthers = await AugustusRFQ.remaining(
          senderAddress,
          randomOrderHash
        );
        expect(orderStatus.toNumber()).toEqual(1);
      });

      test(`cancelLimitOrder Bulk with ${lib}`, async () => {
        // bytes32[]
        const randomOrderHashes = [
          `0x20${libDependentNumber++}0000000000000000000000000000000000000000000000000000000000000`,
          `0x30${libDependentNumber++}0000000000000000000000000000000000000000000000000000000000000`,
        ];

        const tx = await sdk.cancelLimitOrderBulk(randomOrderHashes);
        await awaitTx(tx);

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
    }
  );

  test('getLimitOrders', async () => {
    const sdk = constructPartialSDK(
      {
        chainId: 137,
        fetcher: axiosFetcher,
        apiURL: process.env.API_URL,
        version: '5',
      },
      constructGetLimitOrders
    );
    const account = '0x05182E579FDfCf69E4390c3411D8FeA1fb6467cf';
    const knownOrderHashes = [
      '0xfd076127e9fe40c5acf2efd03f8dd0cf2412fe277013d241c95a5da3eb64d5f8',
      '0xef9fdf84be98cc70c05dbfe62af88412c1231f3025d3c829cf93b29f578a66fd',
      '0x005c10e295af191364c7b47df72c0ca71b75b8f827231b352c4199ae109d4234',
    ];

    const { orders } = await sdk.getLimitOrders({
      maker: account,
      type: 'LIMIT',
    });

    const knownOrders = orders.filter((order) =>
      knownOrderHashes.includes(order.orderHash.toLowerCase())
    );

    assert(
      knownOrders.length > 0,
      `order must exist for orderHashes ${knownOrderHashes.join(', ')}`
    );

    // EXPIRED | CANCELLED order won't change
    expect(knownOrders).toMatchSnapshot();
  });

  test.skip('postLimitOrder', async () => {
    // @TODO breaks with 'maker' doesn't have sufficient balance for this limit order
    // because of API balance check
    // need to use a fixed address through a PK
    const signableOrderData = await sdk.buildLimitOrder({
      ...orderInput,
      nonce: 2,
    });

    const signature = await sdk.signLimitOrder(signableOrderData);
    // expect(signature).toMatchInlineSnapshot(
    //   `"0x3aa58967f07b7752c8220191ebd80e9e00f95212b2e9f3ee61f9e92ebbeeffab397833627056ade28ae2726d59534a30ee3099731aa1b41176e7e7bb0f8b28e71b"`
    // );

    const orderWithSignature: LimitOrderToSend = {
      ...signableOrderData.data,
      signature,
    };

    const newOrder = await sdk.postLimitOrder(orderWithSignature);

    const recoveredAddress = ethers.utils.recoverAddress(
      newOrder.orderHash,
      signature
    );

    expect(recoveredAddress).toEqual(senderAddress);

    // expect(newOrder).toMatchSnapshot('Order_from_API_Snapshot');
  });

  test(`fill OTC Order directly`, async () => {
    // 0.01 WETH
    const makerAmount = (0.01e18).toString(10);
    // for 6 BAT
    const takerAmount = (6e18).toString(10);

    // get some WETH onto maker wallet
    const maker = new ethers.Wallet(
      walletV5Stable.privateKey,
      ethersV5Provider
    );
    const { balance: wethBalance } = await buyErc20TokenForEth({
      fetcherOptions: { axios },
      tokenAddress: WETH,
      amount: makerAmount,
      signer: maker,
      providerOptions: {
        ethersProviderOrSigner: maker,
        EthersContract: ethers.Contract,
        account: maker.address,
      },
      chainId,
      ethersProvider: ethersV5Provider,
    });

    // for some reason BUY WETH may result into greater amount, unlike BUY other ERC20
    expect(new BigNumber(wethBalance).gt(makerAmount)).toBeTruthy();

    // get some BAT onto the taker wallet
    const taker = new ethers.Wallet(
      walletV5Stable2.privateKey,
      ethersV5Provider
    );
    const { balance: batBalance } = await buyErc20TokenForEth({
      fetcherOptions: { axios },
      tokenAddress: BAT,
      amount: takerAmount,
      signer: taker,
      providerOptions: {
        ethersProviderOrSigner: taker,
        EthersContract: ethers.Contract,
        account: taker.address,
      },
      chainId,
      ethersProvider: ethersV5Provider,
    });

    expect(new BigNumber(batBalance).gte(takerAmount)).toBeTruthy();

    const makerEthersContractCaller = constructEthersV5ContractCaller(
      {
        ethersProviderOrSigner: maker,
        EthersContract: ethers.Contract,
      },
      maker.address
    );
    const takerEthersContractCaller = constructEthersV5ContractCaller(
      {
        ethersProviderOrSigner: taker,
        EthersContract: ethers.Contract,
      },
      taker.address
    );

    const makerSDK = constructPartialSDK(
      {
        chainId,
        contractCaller: makerEthersContractCaller,
        fetcher: axiosFetcher,
        apiURL: process.env.API_URL,
        version: '6.2',
      },
      constructBuildLimitOrder,
      constructSignLimitOrder,
      constructApproveTokenForLimitOrder
    );

    const takerSDK = constructPartialSDK(
      {
        chainId,
        contractCaller: takerEthersContractCaller,
        fetcher: axiosFetcher,
        apiURL: process.env.API_URL,
        version: '6.2', // direct Order filling is supported on v6 only
      },
      constructBuildLimitOrder,
      constructSignLimitOrder,
      constructApproveTokenForLimitOrder,
      constructBuildLimitOrderTx,
      constructFillOrderDirectly
    );

    const order = {
      nonce: 9991,
      expiry: orderExpiry,
      maker: maker.address,
      makerAsset: WETH,
      makerAmount,
      takerAsset: BAT,
      takerAmount,
      taker: taker.address,
    };

    const signableOrderData = await makerSDK.buildLimitOrder(order);

    const signature = await makerSDK.signLimitOrder(signableOrderData);

    const WETH_Token = ERC20MintableFactory.attach(WETH);
    const BAT_Token = ERC20MintableFactory.attach(BAT);

    const makerToken1InitBalance: BigNumberEthers = await WETH_Token.balanceOf(
      maker.address
    );
    const takerToken1InitBalance: BigNumberEthers = await WETH_Token.balanceOf(
      taker.address
    );
    const makerToken2InitBalance: BigNumberEthers = await BAT_Token.balanceOf(
      maker.address
    );
    const takerToken2InitBalance: BigNumberEthers = await BAT_Token.balanceOf(
      taker.address
    );

    // without SDK
    // await WETH_Token.connect(maker).approve(AugustusRFQ.address, makerAmount);

    // withSDK
    const approveForMakerTx = await makerSDK.approveMakerTokenForLimitOrder(
      makerAmount,
      WETH_Token.address
    );

    await awaitTx(approveForMakerTx);

    // without SDK
    // await BAT_Token.connect(taker).approve(AugustusRFQ.address, takerAmount);

    // withSDK
    const approveForTakerTx =
      await takerSDK.approveTakerTokenForFillingP2POrderDirectly(
        takerAmount,
        BAT_Token.address
      );
    await awaitTx(approveForTakerTx);

    const orderWithSignature = { ...signableOrderData.data, signature };

    // taker address that would be checked as part of nonceAndMeta in Augustus
    const metaAddress = deriveTakerFromNonceAndTaker(
      signableOrderData.data.nonceAndMeta
    );

    // taker in nonceAndTaker = p2pOrderInput.taker
    expect(metaAddress.toLowerCase()).toBe(taker.address.toLowerCase());
    // taker = p2pOrderInput.taker
    expect(orderWithSignature.taker.toLowerCase()).toBe(
      taker.address.toLowerCase()
    );

    const takerFillsOrderTx = await takerSDK.fillOrderDirectly({
      order: orderWithSignature,
      signature: orderWithSignature.signature,
    });

    await awaitTx(takerFillsOrderTx);

    const makerToken1AfterBalance: BigNumberEthers = await WETH_Token.balanceOf(
      maker.address
    );
    const takerToken1AfterBalance: BigNumberEthers = await WETH_Token.balanceOf(
      taker.address
    );
    const makerToken2AfterBalance: BigNumberEthers = await BAT_Token.balanceOf(
      maker.address
    );
    const takerToken2AfterBalance: BigNumberEthers = await BAT_Token.balanceOf(
      taker.address
    );

    expect(
      new BigNumber(makerToken1AfterBalance.toString()).toString(10)
    ).toEqual(
      new BigNumber(makerToken1InitBalance.toString())
        .minus(makerAmount)
        .toString(10)
    );
    expect(
      new BigNumber(takerToken1AfterBalance.toString()).toString(10)
    ).toEqual(
      new BigNumber(takerToken1InitBalance.toString())
        .plus(makerAmount)
        .toString(10)
    );
    expect(
      new BigNumber(makerToken2AfterBalance.toString()).toString(10)
    ).toEqual(
      new BigNumber(makerToken2InitBalance.toString())
        .plus(takerAmount)
        .toString(10)
    );
    expect(
      new BigNumber(takerToken2AfterBalance.toString()).toString(10)
    ).toEqual(
      new BigNumber(takerToken2InitBalance.toString())
        .minus(takerAmount)
        .toString(10)
    );
  });

  test(`fill OTC Order directly with Taker Permit1`, async () => {
    // 0.01 WETH
    const makerAmount = (0.01e18).toString(10);
    // for 60 USDC
    const takerAmount = (60e6).toString(10);

    // get some WETH onto maker wallet
    const maker = new ethers.Wallet(
      walletV5Stable.privateKey,
      ethersV5Provider
    );
    const { balance: wethBalance } = await buyErc20TokenForEth({
      fetcherOptions: { axios },
      tokenAddress: WETH,
      amount: makerAmount,
      signer: maker,
      providerOptions: {
        ethersProviderOrSigner: maker,
        EthersContract: ethers.Contract,
        account: maker.address,
      },
      chainId,
      ethersProvider: ethersV5Provider,
    });

    // for some reason BUY WETH may result into greater amount, unlike BUY other ERC20
    expect(new BigNumber(wethBalance).gt(makerAmount)).toBeTruthy();

    // get some USDC onto the taker wallet
    const taker = new ethers.Wallet(
      walletV5Stable2.privateKey,
      ethersV5Provider
    );
    const { balance: usdcBalance } = await buyErc20TokenForEth({
      fetcherOptions: { axios },
      tokenAddress: USDC,
      destDecimals: 6,
      amount: takerAmount,
      signer: taker,
      providerOptions: {
        ethersProviderOrSigner: taker,
        EthersContract: ethers.Contract,
        account: taker.address,
      },
      chainId,
      ethersProvider: ethersV5Provider,
    });

    expect(new BigNumber(usdcBalance).gte(takerAmount)).toBeTruthy();

    const makerEthersContractCaller = constructEthersV5ContractCaller(
      {
        ethersProviderOrSigner: maker,
        EthersContract: ethers.Contract,
      },
      maker.address
    );
    const takerEthersContractCaller = constructEthersV5ContractCaller(
      {
        ethersProviderOrSigner: taker,
        EthersContract: ethers.Contract,
      },
      taker.address
    );

    const makerSDK = constructPartialSDK(
      {
        chainId,
        contractCaller: makerEthersContractCaller,
        fetcher: axiosFetcher,
        apiURL: process.env.API_URL,
        version: '6.2',
      },
      constructBuildLimitOrder,
      constructSignLimitOrder,
      constructApproveTokenForLimitOrder
    );

    const takerSDK = constructPartialSDK(
      {
        chainId,
        contractCaller: takerEthersContractCaller,
        fetcher: axiosFetcher,
        apiURL: process.env.API_URL,
        version: '6.2', // direct Order filling is supported on v6 only
      },
      constructBuildLimitOrder,
      constructSignLimitOrder,
      constructApproveTokenForLimitOrder,
      constructBuildLimitOrderTx,
      constructFillOrderDirectly
    );

    const order = {
      nonce: 9992,
      expiry: orderExpiry,
      maker: maker.address,
      makerAsset: WETH,
      makerAmount,
      takerAsset: USDC,
      takerAmount,
      taker: taker.address,
    };

    const signableOrderData = await makerSDK.buildLimitOrder(order);

    const signature = await makerSDK.signLimitOrder(signableOrderData);

    const WETH_Token = ERC20MintableFactory.attach(WETH);
    const USDC_Token = ERC20MintableFactory.attach(USDC);

    const makerToken1InitBalance: BigNumberEthers = await WETH_Token.balanceOf(
      maker.address
    );
    const takerToken1InitBalance: BigNumberEthers = await WETH_Token.balanceOf(
      taker.address
    );
    const makerToken2InitBalance: BigNumberEthers = await USDC_Token.balanceOf(
      maker.address
    );
    const takerToken2InitBalance: BigNumberEthers = await USDC_Token.balanceOf(
      taker.address
    );

    // without SDK
    // await WETH_Token.connect(maker).approve(AugustusRFQ.address, makerAmount);

    // withSDK
    const approveForMakerTx = await makerSDK.approveMakerTokenForLimitOrder(
      makerAmount,
      WETH_Token.address
    );

    await awaitTx(approveForMakerTx);

    const orderWithSignature = { ...signableOrderData.data, signature };

    // taker address that would be checked as part of nonceAndMeta in Augustus
    const metaAddress = deriveTakerFromNonceAndTaker(
      signableOrderData.data.nonceAndMeta
    );

    // taker in nonceAndTaker = p2pOrderInput.taker
    expect(metaAddress.toLowerCase()).toBe(taker.address.toLowerCase());
    // taker = p2pOrderInput.taker
    expect(orderWithSignature.taker.toLowerCase()).toBe(
      taker.address.toLowerCase()
    );

    const AugustusRFQAddress = await sdk.getLimitOrdersContract();

    const permitDeadline = Math.ceil((Date.now() + 1000 * 60 * 60) / 1000);

    const takerPermitSignature = await signPermit1({
      signer: taker,
      user: taker.address,
      spender: AugustusRFQAddress,
      tokenName: 'USD Coin',
      tokenAddress: USDC,
      version: '2',
      chainId,
      amount: takerAmount,
      nonce: 0,
      deadline: permitDeadline,
    });

    const takerFillsOrderTx = await takerSDK.fillOrderDirectly({
      order: orderWithSignature,
      signature: orderWithSignature.signature,
      takerPermit: {
        signature: takerPermitSignature,
        deadline: permitDeadline,
      },
    });

    await awaitTx(takerFillsOrderTx);

    const makerToken1AfterBalance: BigNumberEthers = await WETH_Token.balanceOf(
      maker.address
    );
    const takerToken1AfterBalance: BigNumberEthers = await WETH_Token.balanceOf(
      taker.address
    );
    const makerToken2AfterBalance: BigNumberEthers = await USDC_Token.balanceOf(
      maker.address
    );
    const takerToken2AfterBalance: BigNumberEthers = await USDC_Token.balanceOf(
      taker.address
    );

    expect(
      new BigNumber(makerToken1AfterBalance.toString()).toString(10)
    ).toEqual(
      new BigNumber(makerToken1InitBalance.toString())
        .minus(makerAmount)
        .toString(10)
    );
    expect(
      new BigNumber(takerToken1AfterBalance.toString()).toString(10)
    ).toEqual(
      new BigNumber(takerToken1InitBalance.toString())
        .plus(makerAmount)
        .toString(10)
    );
    expect(
      new BigNumber(makerToken2AfterBalance.toString()).toString(10)
    ).toEqual(
      new BigNumber(makerToken2InitBalance.toString())
        .plus(takerAmount)
        .toString(10)
    );
    expect(
      new BigNumber(takerToken2AfterBalance.toString()).toString(10)
    ).toEqual(
      new BigNumber(takerToken2InitBalance.toString())
        .minus(takerAmount)
        .toString(10)
    );
  });

  test(`fill OTC Order directly with Taker DAI Permit`, async () => {
    // 0.01 WETH
    const makerAmount = (0.01e18).toString(10);
    // for 60 DAI
    const takerAmount = (60e18).toString(10);

    // get some WETH onto maker wallet
    const maker = new ethers.Wallet(
      walletV5Stable.privateKey,
      ethersV5Provider
    );
    const { balance: wethBalance } = await buyErc20TokenForEth({
      fetcherOptions: { axios },
      tokenAddress: WETH,
      amount: makerAmount,
      signer: maker,
      providerOptions: {
        ethersProviderOrSigner: maker,
        EthersContract: ethers.Contract,
        account: maker.address,
      },
      chainId,
      ethersProvider: ethersV5Provider,
    });

    // for some reason BUY WETH may result into greater amount, unlike BUY other ERC20
    expect(new BigNumber(wethBalance).gt(makerAmount)).toBeTruthy();

    // get some USDC onto the taker wallet
    const taker = new ethers.Wallet(
      walletV5Stable2.privateKey,
      ethersV5Provider
    );
    const { balance: daiBalance } = await buyErc20TokenForEth({
      fetcherOptions: { axios },
      tokenAddress: DAI,
      amount: takerAmount,
      signer: taker,
      providerOptions: {
        ethersProviderOrSigner: taker,
        EthersContract: ethers.Contract,
        account: taker.address,
      },
      chainId,
      ethersProvider: ethersV5Provider,
    });

    expect(new BigNumber(daiBalance).gte(takerAmount)).toBeTruthy();

    const makerEthersContractCaller = constructEthersV5ContractCaller(
      {
        ethersProviderOrSigner: maker,
        EthersContract: ethers.Contract,
      },
      maker.address
    );
    const takerEthersContractCaller = constructEthersV5ContractCaller(
      {
        ethersProviderOrSigner: taker,
        EthersContract: ethers.Contract,
      },
      taker.address
    );

    const makerSDK = constructPartialSDK(
      {
        chainId,
        contractCaller: makerEthersContractCaller,
        fetcher: axiosFetcher,
        apiURL: process.env.API_URL,
        version: '6.2',
      },
      constructBuildLimitOrder,
      constructSignLimitOrder,
      constructApproveTokenForLimitOrder
    );

    const takerSDK = constructPartialSDK(
      {
        chainId,
        contractCaller: takerEthersContractCaller,
        fetcher: axiosFetcher,
        apiURL: process.env.API_URL,
        version: '6.2', // direct Order filling is supported on v6 only
      },
      constructBuildLimitOrder,
      constructSignLimitOrder,
      constructApproveTokenForLimitOrder,
      constructBuildLimitOrderTx,
      constructFillOrderDirectly
    );

    const order = {
      nonce: 9993,
      expiry: orderExpiry,
      maker: maker.address,
      makerAsset: WETH,
      makerAmount,
      takerAsset: DAI,
      takerAmount,
      taker: taker.address,
    };

    const signableOrderData = await makerSDK.buildLimitOrder(order);

    const signature = await makerSDK.signLimitOrder(signableOrderData);

    const WETH_Token = ERC20MintableFactory.attach(WETH);
    const DAI_Token = ERC20MintableFactory.attach(DAI);

    const makerToken1InitBalance: BigNumberEthers = await WETH_Token.balanceOf(
      maker.address
    );
    const takerToken1InitBalance: BigNumberEthers = await WETH_Token.balanceOf(
      taker.address
    );
    const makerToken2InitBalance: BigNumberEthers = await DAI_Token.balanceOf(
      maker.address
    );
    const takerToken2InitBalance: BigNumberEthers = await DAI_Token.balanceOf(
      taker.address
    );

    // without SDK
    // await WETH_Token.connect(maker).approve(AugustusRFQ.address, makerAmount);

    // withSDK
    const approveForMakerTx = await makerSDK.approveMakerTokenForLimitOrder(
      makerAmount,
      WETH_Token.address
    );

    await awaitTx(approveForMakerTx);

    const orderWithSignature = { ...signableOrderData.data, signature };

    // taker address that would be checked as part of nonceAndMeta in Augustus
    const metaAddress = deriveTakerFromNonceAndTaker(
      signableOrderData.data.nonceAndMeta
    );

    // taker in nonceAndTaker = p2pOrderInput.taker
    expect(metaAddress.toLowerCase()).toBe(taker.address.toLowerCase());
    // taker = p2pOrderInput.taker
    expect(orderWithSignature.taker.toLowerCase()).toBe(
      taker.address.toLowerCase()
    );

    const AugustusRFQAddress = await sdk.getLimitOrdersContract();

    const permitExpiry = Math.ceil((Date.now() + 1000 * 60 * 60) / 1000);

    const takerPermitSignature = await signDaiPermit({
      signer: taker,
      user: taker.address,
      spender: AugustusRFQAddress,
      tokenName: 'Dai Stablecoin',
      tokenAddress: DAI,
      version: '1',
      chainId,
      amount: takerAmount,
      nonce: 0,
      expiry: permitExpiry,
    });

    const takerFillsOrderTx = await takerSDK.fillOrderDirectly({
      order: orderWithSignature,
      signature: orderWithSignature.signature,
      takerPermit: {
        isDaiPermit: true,
        signature: takerPermitSignature,
        expiry: permitExpiry,
        nonce: 0,
      },
    });

    await awaitTx(takerFillsOrderTx);

    const makerToken1AfterBalance: BigNumberEthers = await WETH_Token.balanceOf(
      maker.address
    );
    const takerToken1AfterBalance: BigNumberEthers = await WETH_Token.balanceOf(
      taker.address
    );
    const makerToken2AfterBalance: BigNumberEthers = await DAI_Token.balanceOf(
      maker.address
    );
    const takerToken2AfterBalance: BigNumberEthers = await DAI_Token.balanceOf(
      taker.address
    );

    expect(
      new BigNumber(makerToken1AfterBalance.toString()).toString(10)
    ).toEqual(
      new BigNumber(makerToken1InitBalance.toString())
        .minus(makerAmount)
        .toString(10)
    );
    expect(
      new BigNumber(takerToken1AfterBalance.toString()).toString(10)
    ).toEqual(
      new BigNumber(takerToken1InitBalance.toString())
        .plus(makerAmount)
        .toString(10)
    );
    expect(
      new BigNumber(makerToken2AfterBalance.toString()).toString(10)
    ).toEqual(
      new BigNumber(makerToken2InitBalance.toString())
        .plus(takerAmount)
        .toString(10)
    );
    expect(
      new BigNumber(takerToken2AfterBalance.toString()).toString(10)
    ).toEqual(
      new BigNumber(takerToken2InitBalance.toString())
        .minus(takerAmount)
        .toString(10)
    );
  });
});

function calculateOrderHash({
  domain,
  types,
  data,
}: SignableOrderData): string {
  return ethers.utils._TypedDataEncoder.hash(domain, types, data);
}

async function awaitTx(
  tx: { wait(): Promise<unknown> } | Web3UnpromiEvent
): Promise<void> {
  if ('wait' in tx) {
    await tx.wait();

    return;
  }

  await new Promise<Web3TransactionReceipt>((resolve, reject) => {
    tx.once('receipt', resolve);
    tx.once('error', reject);
  });
}

function deriveTakerFromNonceAndTaker(nonceAndMeta: string): string {
  return hexZeroPad(
    hexValue(BigInt(nonceAndMeta) & ((BigInt(1) << BigInt(160)) - BigInt(1))),
    20
  );
}

type SignPermit1Input = {
  signer: ethers.providers.JsonRpcSigner | ethers.Wallet;
  user: string;
  spender: string;
  tokenName: string;
  tokenAddress: string;
  version: string;
  chainId: number;
  amount: string;
  nonce: number;
  deadline: number;
};

async function signPermit1({
  signer,
  user,
  spender,
  tokenAddress,
  tokenName,
  version,
  chainId,
  amount,
  nonce,
  deadline,
}: SignPermit1Input) {
  const domain = {
    name: tokenName,
    version,
    chainId,
    verifyingContract: tokenAddress,
  };

  const types = {
    Permit: [
      {
        name: 'owner',
        type: 'address',
      },
      {
        name: 'spender',
        type: 'address',
      },
      {
        name: 'value',
        type: 'uint256',
      },
      {
        name: 'nonce',
        type: 'uint256',
      },
      {
        name: 'deadline',
        type: 'uint256',
      },
    ],
  };

  const message = {
    owner: user,
    spender,
    value: amount,
    nonce,
    deadline,
  };

  const signature = await signer._signTypedData(domain, types, message);

  return signature;
}

type SignDAIPermitInput = {
  signer: ethers.providers.JsonRpcSigner | ethers.Wallet;
  user: string;
  spender: string;
  tokenName: string;
  tokenAddress: string;
  version: string;
  chainId: number;
  amount: string;
  nonce: number;
  expiry: number;
};

async function signDaiPermit({
  signer,
  user,
  spender,
  tokenName,
  tokenAddress,
  version,
  chainId,
  nonce,
  expiry,
}: SignDAIPermitInput) {
  const domain = {
    name: tokenName,
    verifyingContract: tokenAddress,
    chainId,
    version,
  };
  const types = {
    Permit: [
      {
        name: 'holder',
        type: 'address',
      },
      {
        name: 'spender',
        type: 'address',
      },
      {
        name: 'nonce',
        type: 'uint256',
      },
      {
        name: 'expiry',
        type: 'uint256',
      },
      {
        name: 'allowed',
        type: 'bool',
      },
    ],
  };

  const message = {
    holder: user,
    spender,
    allowed: true,
    nonce,
    expiry,
  };
  const signature = await signer._signTypedData(domain, types, message);

  return signature;
}
