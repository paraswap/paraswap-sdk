import * as dotenv from 'dotenv';
import Web3 from 'web3';
import type { TransactionReceipt as Web3TransactionReceipt } from 'web3-core';
import { BigNumber as BigNumberEthers, Contract, ethers } from 'ethers';
import type {
  TransactionResponse as EthersTransactionResponse,
  TransactionReceipt as EthersTransactionReceipt,
} from '@ethersproject/abstract-provider';
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
  constructEthersContractCaller,
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
} from '../src';
import BigNumber from 'bignumber.js';

import ERC20MinableABI from './abi/ERC20Mintable.json';
import { bytecode as ERC20MintableBytecode } from './bytecode/ERC20Mintable.json';
import AugustusRFQAbi from './abi/AugustusRFQ.json';
import { bytecode as AugustusRFQBytecode } from './bytecode/AugustusRFQ.json';

import ganache from 'ganache';

import type { BuildLimitOrderInput } from '../src/methods/limitOrders/buildOrder';
import { assert } from 'ts-essentials';
import { ZERO_ADDRESS } from '../src/methods/common/orders/buildOrderData';
import { buyErc20TokenForEth } from './helpers';

dotenv.config();

jest.setTimeout(30 * 1000);

declare let process: any;

const referrer = 'sdk-test';

const DAI = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
const HEX = '0x2b591e99afe9f32eaa6214f7b7629768c40eeb39';
const WETH = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';
const BAT = '0x0d8775f648430679a709e98d2b0cb6250d2887ef';

// const DUMMY_ADDRESS_FOR_TESTING_ORDERS =
//   '0xb9A079479A7b0F4E7F398F7ED3946bE6d9a40E79';

const chainId = 1;

const PROVIDER_URL: string = process.env.PROVIDER_URL;
const srcToken = DAI;
const destToken = HEX;

const TEST_MNEMONIC =
  'radar blur cabbage chef fix engine embark joy scheme fiction master release';
const walletStable = ethers.Wallet.fromMnemonic(TEST_MNEMONIC);
const walletStable2 = ethers.Wallet.fromMnemonic(
  TEST_MNEMONIC,
  "m/44'/60'/0'/0/1"
);

const ganacheProvider = ganache.provider({
  wallet: {
    accounts: [
      { balance: 80e18, secretKey: walletStable.privateKey },
      { balance: 80e18, secretKey: walletStable2.privateKey },
    ],
  },
  fork: {
    url: PROVIDER_URL,
  },
  chain: {
    chainId,
  },
  quiet: true,
});

const ethersProvider = new ethers.providers.Web3Provider(
  ganacheProvider as any
);

const signer = walletStable.connect(ethersProvider);
const senderAddress = signer.address;

const maker = signer;
const taker = walletStable2.connect(ethersProvider);

const axiosFetcher = constructAxiosFetcher(axios);

const ethersContractCaller = constructEthersContractCaller(
  {
    ethersProviderOrSigner: signer,
    EthersContract: ethers.Contract,
  },
  senderAddress
);
const takerEthersContractCaller = constructEthersContractCaller(
  {
    ethersProviderOrSigner: taker,
    EthersContract: ethers.Contract,
  },
  walletStable2.address
);

const web3provider = new Web3(ganacheProvider as any);

const web3ContractCaller = constructWeb3ContractCaller(
  web3provider,
  senderAddress
);
const takerWeb3ContractCaller = constructWeb3ContractCaller(
  web3provider,
  walletStable2.address
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

const expectTxParamsScheme = expect.objectContaining({
  from: expect.any(String),
  to: expect.any(String),
  value: expect.any(String),
  data: expect.any(String),
  gasPrice: expect.any(String),
  chainId: expect.any(Number),
});

describe('Limit Orders', () => {
  let paraSwap: BuildLimitOrderFunctions &
    SignLimitOrderFunctions &
    GetLimitOrdersContractFunctions &
    PostLimitOrderFunctions &
    GetLimitOrdersFunctions &
    CancelLimitOrderFunctions<ethers.ContractTransaction> &
    ApproveTokenForLimitOrderFunctions<ethers.ContractTransaction> &
    GetSpenderFunctions &
    BuildLimitOrdersTxFunctions &
    BuildTxFunctions;

  type MinEthersSDK = BuildLimitOrderFunctions &
    SignLimitOrderFunctions &
    CancelLimitOrderFunctions<ethers.ContractTransaction> &
    ApproveTokenForLimitOrderFunctions<ethers.ContractTransaction>;
  type MinTakerEthersSDK = BuildLimitOrdersTxFunctions &
    ApproveTokenForLimitOrderFunctions<ethers.ContractTransaction>;
  type MinWeb3SDK = BuildLimitOrderFunctions &
    SignLimitOrderFunctions &
    CancelLimitOrderFunctions<Web3UnpromiEvent> &
    ApproveTokenForLimitOrderFunctions<Web3UnpromiEvent>;
  type MinTakerWeb3SDK = ApproveTokenForLimitOrderFunctions<Web3UnpromiEvent>;

  type EthersCancelOrderConstructor = (
    options: ConstructProviderFetchInput<
      ethers.ContractTransaction,
      'transactCall'
    >
  ) => CancelLimitOrderFunctions<ethers.ContractTransaction>;
  type EthersApproveTokenForLimitOrderConstructor = (
    options: ConstructProviderFetchInput<
      ethers.ContractTransaction,
      'transactCall'
    >
  ) => ApproveTokenForLimitOrderFunctions<ethers.ContractTransaction>;

  type Web3CancelOrderConstructor = (
    options: ConstructProviderFetchInput<Web3UnpromiEvent, 'transactCall'>
  ) => CancelLimitOrderFunctions<Web3UnpromiEvent>;
  type Web3ApproveTokenForLimitOrderConstructor = (
    options: ConstructProviderFetchInput<Web3UnpromiEvent, 'transactCall'>
  ) => ApproveTokenForLimitOrderFunctions<Web3UnpromiEvent>;

  const ethersSDK: MinEthersSDK = constructPartialSDK<
    SDKConfig<ethers.ContractTransaction>,
    [
      typeof constructBuildLimitOrder,
      typeof constructSignLimitOrder,
      EthersCancelOrderConstructor,
      EthersApproveTokenForLimitOrderConstructor
    ]
  >(
    {
      chainId,
      contractCaller: ethersContractCaller,
      fetcher: axiosFetcher,
      apiURL: process.env.API_URL,
    },
    constructBuildLimitOrder,
    constructSignLimitOrder,
    constructCancelLimitOrder,
    constructApproveTokenForLimitOrder
  );

  const takerEthersSDK: MinTakerEthersSDK = constructPartialSDK<
    SDKConfig<ethers.ContractTransaction>,
    [
      EthersApproveTokenForLimitOrderConstructor,
      typeof constructBuildLimitOrderTx
    ]
  >(
    {
      chainId,
      contractCaller: takerEthersContractCaller,
      fetcher: axiosFetcher,
      apiURL: process.env.API_URL,
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
    },

    constructApproveTokenForLimitOrder
  );

  const txSDKs = [
    { lib: 'ethers', sdk: ethersSDK, takerSDK: takerEthersSDK },
    { lib: 'web3', sdk: web3SDK, takerSDK: takerWeb3SDK },
  ] as const;

  let orderInput: BuildLimitOrderInput;
  //                                        UTC format
  const orderExpiry = Math.floor(new Date('2025-12-20').getTime() / 1000);

  let AugustusRFQ: Contract;

  // let initialChainId2verifyingContract = { ...chainId2verifyingContract };

  beforeAll(async () => {
    orderInput = {
      nonce: 1,
      expiry: orderExpiry,
      makerAsset: srcToken,
      takerAsset: destToken,
      makerAmount: (1e18).toString(10),
      takerAmount: (8e18).toString(10),
      maker: senderAddress,
    };

    paraSwap = constructPartialSDK<
      SDKConfig<ethers.ContractTransaction>,
      [
        typeof constructBuildLimitOrder,
        typeof constructSignLimitOrder,
        typeof constructGetLimitOrdersContract,
        typeof constructPostLimitOrder,
        typeof constructGetLimitOrders,
        EthersCancelOrderConstructor,
        EthersApproveTokenForLimitOrderConstructor,
        typeof constructGetSpender,
        typeof constructBuildLimitOrderTx,
        typeof constructBuildTx
      ]
    >(
      {
        chainId,
        contractCaller: ethersContractCaller,
        fetcher: axiosFetcher,
        apiURL: process.env.API_URL,
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

    AugustusRFQ = AugustusRFQFactory.attach(
      await paraSwap.getLimitOrdersContract()
    );
    // AugustusRFQ = await AugustusRFQFactory.deploy();
    // await AugustusRFQ.deployTransaction.wait();
  });

  // takes care of `there are asynchronous operations that weren't stopped in your tests`
  // @TODO check if still needed after there are tx tests
  // afterAll(async () => {
  //   Object.assign(chainId2verifyingContract, initialChainId2verifyingContract);
  // });

  test('getLimitOrdersContract', async () => {
    const augustusRFQAddress = await paraSwap.getLimitOrdersContract();

    expect(augustusRFQAddress).toMatchInlineSnapshot(
      `"0xe92b586627ccA7a83dC919cc7127196d70f55a06"`
    );
  });

  test('buildLimitOrder', async () => {
    const signableOrderData = await paraSwap.buildLimitOrder(orderInput);

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
      taker: taker.address,
    };
    const signableOrderData = await paraSwap.buildLimitOrder({
      ...orderInput,
      taker: taker.address,
    });

    // taker address that would be checked as part of nonceAndMeta in Augustus
    const metaAddress = deriveTakerFromNonceAndTaker(
      signableOrderData.data.nonceAndMeta
    );

    // taker in nonceAndTaker = p2pOrderInput.taker
    expect(metaAddress.toLowerCase()).toBe(p2pOrderInput.taker.toLowerCase());

    const AugustusAddress = await paraSwap.getAugustusSwapper();
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

    const signableOrderData = await paraSwap.buildLimitOrder(order);

    const signature = await paraSwap.signLimitOrder(signableOrderData);

    const orderWithSignature = { ...signableOrderData.data, signature };

    const swapAndLOPayload = await paraSwap.buildLimitOrderTx(
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
      Object {
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
    const maker = new ethers.Wallet(walletStable.privateKey, ethersProvider);
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
      ethersProvider,
    });

    // for some reason BUY WETH may result into greater amount, unlike BUY other ERC20
    expect(new BigNumber(wethBalance).gt(makerAmount)).toBeTruthy();

    // get some BAT onto the taker wallet
    const taker = new ethers.Wallet(walletStable2.privateKey, ethersProvider);
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
      ethersProvider,
    });

    expect(new BigNumber(batBalance).gte(takerAmount)).toBeTruthy();

    const makerEthersContractCaller = constructEthersContractCaller(
      {
        ethersProviderOrSigner: maker,
        EthersContract: ethers.Contract,
      },
      maker.address
    );
    const takerEthersContractCaller = constructEthersContractCaller(
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
    // await WETH_Token.connect(maker).approve(Augustus.address, makerAmount);

    // withSDK
    const approveForMakerTx = await makerSDK.approveMakerTokenForLimitOrder(
      makerAmount,
      WETH_Token.address
    );

    await awaitTx(approveForMakerTx);

    // without SDK
    // await BAT_Token.connect(taker).approve(Augustus.address, takerAmount);

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

    // taker in nonceAndTaker = Zero
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
      gasPrice: '0x' + new BigNumber(LOPayloadTxParams.gasPrice).toString(16),
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
    const maker = new ethers.Wallet(walletStable.privateKey, ethersProvider);
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
      ethersProvider,
    });

    // for some reason BUY WETH may result into greater amount, unlike BUY other ERC20
    expect(new BigNumber(wethBalance).gt(makerAmount)).toBeTruthy();

    // get some DAI onto taker account
    const taker = new ethers.Wallet(walletStable2.privateKey, ethersProvider);
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
      ethersProvider,
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

    const makerEthersContractCaller = constructEthersContractCaller(
      {
        ethersProviderOrSigner: maker,
        EthersContract: ethers.Contract,
      },
      maker.address
    );
    const takerEthersContractCaller = constructEthersContractCaller(
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
      },
      constructBuildLimitOrder,
      constructSignLimitOrder,
      constructApproveTokenForLimitOrder,
      constructBuildLimitOrderTx
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
    // await WETH_Token.connect(maker).approve(Augustus.address, makerAmount);

    // withSDK
    const approveForMakerTx = await makerSDK.approveMakerTokenForLimitOrder(
      makerAmount,
      WETH_Token.address
    );

    await awaitTx(approveForMakerTx);

    // without SDK
    // await DAI_Token.connect(taker).approve(Augustus.address, takerAmount);

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

    // taker in nonceAndTaker = Zero
    expect(metaAddress.toLowerCase()).toBe(taker.address.toLowerCase());

    const priceRoute = await takerSDK.getLimitOrdersRate(
      {
        srcToken: DAI,
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
        '0x' + new BigNumber(swapAndLOPayloadTxParams.gasPrice).toString(16),
      gasLimit: '0x' + new BigNumber(5000000).toString(16),
      value: '0x' + new BigNumber(swapAndLOPayloadTxParams.value).toString(16),
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

    const signableOrderData = await paraSwap.buildLimitOrder(order);

    const signature = await paraSwap.signLimitOrder(signableOrderData);

    const priceRoute = await paraSwap.getLimitOrdersRate(
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

    const swapTxPayload = await paraSwap.buildTx(
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
      Object {
        "chainId": 1,
        "from": "0xaC39b311DCEb2A4b2f5d8461c1cdaF756F4F7Ae9",
        "to": "0xDEF171Fe48CF0115B1d80b88dc8eAB59176FEe57",
        "value": "0",
      }
    `);

    const swappableOrder = { ...signableOrderData.data, signature };

    const swapAndLOPayload = await paraSwap.buildSwapAndLimitOrderTx(
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
      Object {
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

      test(`cancelLimitOrder with ${lib}`, async () => {
        const libDependentNumber = lib === 'ethers' ? 1 : 2;
        // bytes32
        const randomOrderHash = `0x${libDependentNumber}000000000000000000000000000000000000000000000000000000000000000`;

        const tx = await sdk.cancelLimitOrder(randomOrderHash);
        await awaitTx(tx);

        const orderStatus: BigNumberEthers = await AugustusRFQ.remaining(
          senderAddress,
          randomOrderHash
        );
        expect(orderStatus.toNumber()).toEqual(1);
      });

      test(`cancelLimitOrder Bulk with ${lib}`, async () => {
        const libDependentNumber = lib === 'ethers' ? 1 : 2;
        // bytes32[]
        const randomOrderHashes = [
          `0x20${libDependentNumber}0000000000000000000000000000000000000000000000000000000000000`,
          `0x30${libDependentNumber}0000000000000000000000000000000000000000000000000000000000000`,
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
    const paraSwap = constructPartialSDK(
      {
        chainId: 137,
        fetcher: axiosFetcher,
        apiURL: process.env.API_URL,
      },
      constructGetLimitOrders
    );
    const account = '0x05182E579FDfCf69E4390c3411D8FeA1fb6467cf';
    const knownOrderHashes = [
      '0xfd076127e9fe40c5acf2efd03f8dd0cf2412fe277013d241c95a5da3eb64d5f8',
      '0xef9fdf84be98cc70c05dbfe62af88412c1231f3025d3c829cf93b29f578a66fd',
      '0x005c10e295af191364c7b47df72c0ca71b75b8f827231b352c4199ae109d4234',
    ];

    const { orders } = await paraSwap.getLimitOrders({
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
    const signableOrderData = await paraSwap.buildLimitOrder({
      ...orderInput,
      nonce: 2,
    });

    const signature = await paraSwap.signLimitOrder(signableOrderData);
    // expect(signature).toMatchInlineSnapshot(
    //   `"0x3aa58967f07b7752c8220191ebd80e9e00f95212b2e9f3ee61f9e92ebbeeffab397833627056ade28ae2726d59534a30ee3099731aa1b41176e7e7bb0f8b28e71b"`
    // );

    const orderWithSignature: LimitOrderToSend = {
      ...signableOrderData.data,
      signature,
    };

    const newOrder = await paraSwap.postLimitOrder(orderWithSignature);

    const recoveredAddress = ethers.utils.recoverAddress(
      newOrder.orderHash,
      signature
    );

    expect(recoveredAddress).toEqual(senderAddress);

    // expect(newOrder).toMatchSnapshot('Order_from_API_Snapshot');
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
  tx: EthersTransactionResponse
): Promise<EthersTransactionReceipt>;
async function awaitTx(tx: Web3UnpromiEvent): Promise<Web3TransactionReceipt>;
async function awaitTx(
  tx: EthersTransactionResponse | Web3UnpromiEvent
): Promise<EthersTransactionReceipt | Web3TransactionReceipt>;
async function awaitTx(
  tx: EthersTransactionResponse | Web3UnpromiEvent
): Promise<EthersTransactionReceipt | Web3TransactionReceipt> {
  if ('wait' in tx) {
    const res = await tx.wait();

    return res;
  }

  const res = await new Promise<Web3TransactionReceipt>((resolve, reject) => {
    tx.once('receipt', resolve);
    tx.once('error', reject);
  });

  return res;
}

function deriveTakerFromNonceAndTaker(nonceAndMeta: string): string {
  return hexZeroPad(
    hexValue(BigInt(nonceAndMeta) & ((BigInt(1) << BigInt(160)) - BigInt(1))),
    20
  );
}
