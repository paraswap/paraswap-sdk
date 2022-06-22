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
  constructFillLimitOrder,
  ApproveTokenForLimitOrderFunctions,
  constructApproveTokenForLimitOrder,
  chainId2verifyingContract,
  constructGetLimitOrdersContract,
  GetLimitOrdersContractFunctions,
  SignableOrderData,
  constructPostLimitOrder,
  PostLimitOrderFunctions,
  LimitOrderToSend,
  GetLimitOrdersFunctions,
  constructGetLimitOrders,
  OrderInfoForBatchFill,
  Web3UnpromiEvent,
  constructWeb3ContractCaller,
  FillLimitOrderFunctions,
  GetSpenderFunctions,
  constructGetSpender,
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

dotenv.config();

jest.setTimeout(30 * 1000);

declare let process: any;

// const ETH = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
const DAI = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
const HEX = '0x2b591e99afe9f32eaa6214f7b7629768c40eeb39';

// const DUMMY_ADDRESS_FOR_TESTING_ORDERS =
//   '0xb9A079479A7b0F4E7F398F7ED3946bE6d9a40E79';

const chainId = 3; // @TODO return to mainnet

const PROVIDER_URL: string = process.env.PROVIDER_URL.replace(
  'mainnet',
  'ropsten'
).replace(/\/1$/, `/${chainId}`);
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

describe('Direct Limit Orders', () => {
  let paraSwap: BuildLimitOrderFunctions &
    SignLimitOrderFunctions &
    GetLimitOrdersContractFunctions &
    PostLimitOrderFunctions &
    GetLimitOrdersFunctions &
    CancelLimitOrderFunctions<ethers.ContractTransaction> &
    ApproveTokenForLimitOrderFunctions<ethers.ContractTransaction> &
    GetSpenderFunctions;

  type MinEthersSDK = BuildLimitOrderFunctions &
    SignLimitOrderFunctions &
    CancelLimitOrderFunctions<ethers.ContractTransaction> &
    ApproveTokenForLimitOrderFunctions<ethers.ContractTransaction>;
  type MinTakerEthersSDK =
    ApproveTokenForLimitOrderFunctions<ethers.ContractTransaction> &
      FillLimitOrderFunctions<ethers.ContractTransaction>;
  type MinWeb3SDK = BuildLimitOrderFunctions &
    SignLimitOrderFunctions &
    CancelLimitOrderFunctions<Web3UnpromiEvent> &
    ApproveTokenForLimitOrderFunctions<Web3UnpromiEvent>;
  type MinTakerWeb3SDK = ApproveTokenForLimitOrderFunctions<Web3UnpromiEvent> &
    FillLimitOrderFunctions<Web3UnpromiEvent>;

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
  type EthersFillLimitOrderConstructor = (
    options: ConstructProviderFetchInput<
      ethers.ContractTransaction,
      'transactCall'
    >
  ) => FillLimitOrderFunctions<ethers.ContractTransaction>;

  type Web3CancelOrderConstructor = (
    options: ConstructProviderFetchInput<Web3UnpromiEvent, 'transactCall'>
  ) => CancelLimitOrderFunctions<Web3UnpromiEvent>;
  type Web3ApproveTokenForLimitOrderConstructor = (
    options: ConstructProviderFetchInput<Web3UnpromiEvent, 'transactCall'>
  ) => ApproveTokenForLimitOrderFunctions<Web3UnpromiEvent>;
  type Web3FillLimitOrderConstructor = (
    options: ConstructProviderFetchInput<Web3UnpromiEvent, 'transactCall'>
  ) => FillLimitOrderFunctions<Web3UnpromiEvent>;

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
      apiURL: 'https://api.staging.paraswap.io',
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
      EthersFillLimitOrderConstructor
    ]
  >(
    {
      chainId,
      contractCaller: takerEthersContractCaller,
      fetcher: axiosFetcher,
      apiURL: 'https://api.staging.paraswap.io',
    },
    constructApproveTokenForLimitOrder,
    constructFillLimitOrder
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
      apiURL: 'https://api.staging.paraswap.io',
    },
    constructBuildLimitOrder,
    constructSignLimitOrder,
    constructCancelLimitOrder,
    constructApproveTokenForLimitOrder
  );

  const takerWeb3SDK: MinTakerWeb3SDK = constructPartialSDK<
    SDKConfig<Web3UnpromiEvent>,
    [Web3ApproveTokenForLimitOrderConstructor, Web3FillLimitOrderConstructor]
  >(
    {
      chainId,
      contractCaller: takerWeb3ContractCaller,
      fetcher: axiosFetcher,
      apiURL: 'https://api.staging.paraswap.io',
    },

    constructApproveTokenForLimitOrder,
    constructFillLimitOrder
  );

  const txSDKs = [
    { lib: 'ethers', sdk: ethersSDK, takerSDK: takerEthersSDK },
    { lib: 'web3', sdk: web3SDK, takerSDK: takerWeb3SDK },
  ] as const;

  let orderInput: BuildLimitOrderInput;
  //                                        UTC format
  const orderExpiry = Math.floor(new Date('2022-12-20').getTime() / 1000);

  let erc20Token1: Contract;
  let erc20Token2: Contract;

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

    await erc20Token1.mint(walletStable.address, (60e18).toString(10));
    await erc20Token1.mint(walletStable2.address, (60e18).toString(10));
    await erc20Token2.mint(walletStable.address, (60e18).toString(10));
    await erc20Token2.mint(walletStable2.address, (60e18).toString(10));

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
        typeof constructGetSpender
      ]
    >(
      {
        chainId,
        contractCaller: ethersContractCaller,
        fetcher: axiosFetcher,
        apiURL: 'https://api.staging.paraswap.io',
      },
      constructBuildLimitOrder,
      constructSignLimitOrder,
      constructGetLimitOrdersContract,
      constructPostLimitOrder,
      constructGetLimitOrders,
      constructCancelLimitOrder,
      constructApproveTokenForLimitOrder,
      constructGetSpender
    );

    AugustusRFQ = await AugustusRFQFactory.attach(
      paraSwap.getLimitOrdersContract()
    );
    // AugustusRFQ = await AugustusRFQFactory.deploy();
    // await AugustusRFQ.deployTransaction.wait();

    console.log('AugustusRFQ', AugustusRFQ.address);

    // @TODO reconsider after real contracts are deployed
    // override for tests only
    chainId2verifyingContract[chainId] = AugustusRFQ.address; // 0x0c33fC429fDCb7b0A813bEb595D36c5Fadb3CEDC
  });

  // takes care of `there are asynchronous operations that weren't stopped in your tests`
  // @TODO check if still needed after there are tx tests
  // afterAll(async () => {
  //   Object.assign(chainId2verifyingContract, initialChainId2verifyingContract);
  // });

  test('getLimitOrdersContract', async () => {
    const augustusRFQAddress = paraSwap.getLimitOrdersContract();

    // @TODO replace with snapshot test once contracts are deployed
    expect(augustusRFQAddress).toEqual(AugustusRFQ.address);
  });

  test('buildDirectLimitOrder', async () => {
    const signableOrderData = await paraSwap.buildDirectLimitOrder(orderInput);

    // taker address that would be checked as part of nonceAndMeta in Augustus
    const metaAddress = deriveTakerFromNonceAndTaker(
      signableOrderData.data.nonceAndMeta
    );

    // taker in nonceAndTaker = Zero
    expect(metaAddress).toBe(ZERO_ADDRESS);

    expect(signableOrderData.data.taker.toLowerCase()).toBe(ZERO_ADDRESS);

    expect(signableOrderData.data.maker).toBe(senderAddress);
    expect(signableOrderData.data.expiry).toBe(orderExpiry);

    expect(signableOrderData).toMatchSnapshot('Order_Data_Snapshot');
  });

  test('buildDirectLimitOrder p2p', async () => {
    const p2pOrderInput = {
      ...orderInput,
      taker: taker.address,
    };
    const signableOrderData = await paraSwap.buildDirectLimitOrder({
      ...orderInput,
      taker: taker.address,
    });

    // taker address that would be checked as part of nonceAndMeta in Augustus
    const metaAddress = deriveTakerFromNonceAndTaker(
      signableOrderData.data.nonceAndMeta
    );

    // taker in nonceAndTaker = p2pOrderInput.taker
    expect(metaAddress.toLowerCase()).toBe(p2pOrderInput.taker.toLowerCase());

    expect(signableOrderData.data.taker.toLowerCase()).toBe(
      p2pOrderInput.taker.toLowerCase()
    );

    expect(signableOrderData.data.maker).toBe(senderAddress);
    expect(signableOrderData.data.expiry).toBe(orderExpiry);

    expect(signableOrderData).toMatchSnapshot('P2P_Order_Data_Snapshot');
  });

  describe.each(txSDKs)(
    'ethereum lib tests: $lib',
    ({ lib, sdk, takerSDK }) => {
      test(`signLimitOrder with ${lib}`, async () => {
        const signableOrderData = await sdk.buildDirectLimitOrder(orderInput);
        console.log('🚀 orderInput', signableOrderData.data);

        const signature = await sdk.signLimitOrder(signableOrderData);
        expect(signature).toMatchInlineSnapshot(
          `"0x9a3c601b5b6ece2d2e08d977a4f42c606e655a3539deda01f64a134bb018e4d5734ed3789eba0b0d962fd74aac0596377903ac738efe96a1ebc3f8435096f68a1b"`
        );

        const presumedOrderHash = calculateOrderHash(signableOrderData);

        expect(
          ethers.utils.recoverAddress(presumedOrderHash, signature)
        ).toEqual(senderAddress);
      });

      test(`fillLimitOrder with ${lib}`, async () => {
        const makerAmount = (1e18).toString(10);
        const takerAmount = (8e18).toString(10);

        const libDependentNumber = lib === 'ethers' ? 1 : 2;

        const signableOrderData = await sdk.buildDirectLimitOrder({
          nonce: 1 + 5 * libDependentNumber,
          expiry: orderExpiry,
          maker: maker.address,
          makerAsset: erc20Token1.address,
          makerAmount,
          takerAsset: erc20Token2.address,
          takerAmount,
        });

        const signature = await sdk.signLimitOrder(signableOrderData);

        const makerToken1InitBalance: BigNumberEthers =
          await erc20Token1.balanceOf(maker.address);
        const takerToken1InitBalance: BigNumberEthers =
          await erc20Token1.balanceOf(taker.address);
        const makerToken2InitBalance: BigNumberEthers =
          await erc20Token2.balanceOf(maker.address);
        const takerToken2InitBalance: BigNumberEthers =
          await erc20Token2.balanceOf(taker.address);

        console.log('balances', {
          makerToken1InitBalance: new BigNumber(
            makerToken1InitBalance.toString()
          )
            .div(1e18)
            .toString(10),
          takerToken1InitBalance: new BigNumber(
            takerToken1InitBalance.toString()
          )
            .div(1e18)
            .toString(10),
          makerToken2InitBalance: new BigNumber(
            makerToken2InitBalance.toString()
          )
            .div(1e18)
            .toString(10),
          takerToken2InitBalance: new BigNumber(
            takerToken2InitBalance.toString()
          )
            .div(1e18)
            .toString(10),
        });

        console.log('signature', signature, 'order', signableOrderData.data);

        // without SDK
        // await erc20Token1.connect(maker).approve(AugustusRFQ.address, makerAmount);

        // withSDK
        const approveForMakerTx = await sdk.approveMakerTokenForLimitOrder(
          makerAmount,
          erc20Token1.address
        );

        await awaitTx(approveForMakerTx);

        /* Without SDK
       await AugustusRFQ.connect(taker).fillOrder(
        signableOrderData.data,
        signature
      ); */

        // without SDK
        // await erc20Token2.connect(taker).approve(AugustusRFQ.address, takerAmount);

        // withSDK
        const approveForTakerTx =
          // approving same as maker token, because this is a direct-through-AugustusRFQ Order
          await takerSDK.approveMakerTokenForLimitOrder(
            takerAmount,
            erc20Token2.address
          );
        await awaitTx(approveForTakerTx);

        const takerFillsOrderTx = await takerSDK.fillDirectLimitOrder(
          {
            orderData: signableOrderData.data,
            signature,
          },
          // web3 underestimates gas here
          lib === 'web3' ? { gas: 150000 } : undefined
        );

        await awaitTx(takerFillsOrderTx);

        const makerToken1AfterBalance: BigNumberEthers =
          await erc20Token1.balanceOf(maker.address);
        const takerToken1AfterBalance: BigNumberEthers =
          await erc20Token1.balanceOf(taker.address);
        const makerToken2AfterBalance: BigNumberEthers =
          await erc20Token2.balanceOf(maker.address);
        const takerToken2AfterBalance: BigNumberEthers =
          await erc20Token2.balanceOf(taker.address);

        console.log('balances after', {
          makerToken1AfterBalance: new BigNumber(
            makerToken1AfterBalance.toString()
          )
            .div(1e18)
            .toString(10),
          takerToken1AfterBalance: new BigNumber(
            takerToken1AfterBalance.toString()
          )
            .div(1e18)
            .toString(10),
          makerToken2AfterBalance: new BigNumber(
            makerToken2AfterBalance.toString()
          )
            .div(1e18)
            .toString(10),
          takerToken2AfterBalance: new BigNumber(
            takerToken2AfterBalance.toString()
          )
            .div(1e18)
            .toString(10),
        });

        expect(
          new BigNumber(makerToken1AfterBalance.toString()).toNumber()
        ).toEqual(
          new BigNumber(makerToken1InitBalance.toString()).toNumber() -
            +makerAmount
        );
        expect(
          new BigNumber(takerToken1AfterBalance.toString()).toNumber()
        ).toEqual(
          new BigNumber(takerToken1InitBalance.toString()).toNumber() +
            +makerAmount
        );
        expect(
          new BigNumber(makerToken2AfterBalance.toString()).toNumber()
        ).toEqual(
          new BigNumber(makerToken2InitBalance.toString()).toNumber() +
            +takerAmount
        );
        expect(
          new BigNumber(takerToken2AfterBalance.toString()).toNumber()
        ).toEqual(
          new BigNumber(takerToken2InitBalance.toString()).toNumber() -
            +takerAmount
        );
      });

      test(`batchFillLimitOrderWithTarget with ${lib}`, async () => {
        const maker = signer;

        const makerAmount = (1e18).toString(10);
        const takerAmount = (8e18).toString(10);

        const libDependentNumber = lib === 'ethers' ? 1 : 2;

        const orders = await Promise.all(
          [2 + 5 * libDependentNumber, 3 + 5 * libDependentNumber].map<
            Promise<OrderInfoForBatchFill>
          >(async (nonce) => {
            const signableOrderData = await sdk.buildDirectLimitOrder({
              nonce,
              expiry: orderExpiry,
              maker: maker.address,
              makerAsset: erc20Token1.address,
              makerAmount: (+makerAmount / 2).toString(10),
              takerAsset: erc20Token2.address,
              takerAmount: (+takerAmount / 2).toString(10),
            });

            const signature = await sdk.signLimitOrder(signableOrderData);

            return {
              order: signableOrderData.data,
              signature,
            };
          })
        );

        const makerToken1InitBalance: BigNumberEthers =
          await erc20Token1.balanceOf(maker.address);
        const takerToken1InitBalance: BigNumberEthers =
          await erc20Token1.balanceOf(taker.address);
        const makerToken2InitBalance: BigNumberEthers =
          await erc20Token2.balanceOf(maker.address);
        const takerToken2InitBalance: BigNumberEthers =
          await erc20Token2.balanceOf(taker.address);

        console.log('balances', {
          makerToken1InitBalance: new BigNumber(
            makerToken1InitBalance.toString()
          )
            .div(1e18)
            .toString(10),
          takerToken1InitBalance: new BigNumber(
            takerToken1InitBalance.toString()
          )
            .div(1e18)
            .toString(10),
          makerToken2InitBalance: new BigNumber(
            makerToken2InitBalance.toString()
          )
            .div(1e18)
            .toString(10),
          takerToken2InitBalance: new BigNumber(
            takerToken2InitBalance.toString()
          )
            .div(1e18)
            .toString(10),
        });

        // without SDK
        // await erc20Token1.connect(maker).approve(AugustusRFQ.address, makerAmount);

        // withSDK
        const approveForMakerTx = await sdk.approveMakerTokenForLimitOrder(
          makerAmount,
          erc20Token1.address
        );
        await awaitTx(approveForMakerTx);

        /* Without SDK
       await AugustusRFQ.connect(taker).fillOrder(
        signableOrderData.data,
        signature
      ); */

        // without SDK
        // await erc20Token2.connect(taker).approve(AugustusRFQ.address, takerAmount);

        // withSDK
        const approveForTakerTx =
          // approving same as maker token, because this is a direct-through-AugustusRFQ Order
          await takerSDK.approveMakerTokenForLimitOrder(
            takerAmount,
            erc20Token2.address
          );
        // await approveForTakerTx.wait();
        await awaitTx(approveForTakerTx);

        const takerFillsOrdersTx =
          await takerSDK.batchFillDirectLimitOrderWithTarget(
            {
              orderInfos: orders,
              target: taker.address,
            }, // web3 underestimates gas here
            lib === 'web3' ? { gas: 200000 } : undefined
          );

        // await takerFillsOrdersTx.wait();
        await awaitTx(takerFillsOrdersTx);

        const makerToken1AfterBalance: BigNumberEthers =
          await erc20Token1.balanceOf(maker.address);
        const takerToken1AfterBalance: BigNumberEthers =
          await erc20Token1.balanceOf(taker.address);
        const makerToken2AfterBalance: BigNumberEthers =
          await erc20Token2.balanceOf(maker.address);
        const takerToken2AfterBalance: BigNumberEthers =
          await erc20Token2.balanceOf(taker.address);

        console.log('balances after', {
          makerToken1AfterBalance: new BigNumber(
            makerToken1AfterBalance.toString()
          )
            .div(1e18)
            .toString(10),
          takerToken1AfterBalance: new BigNumber(
            takerToken1AfterBalance.toString()
          )
            .div(1e18)
            .toString(10),
          makerToken2AfterBalance: new BigNumber(
            makerToken2AfterBalance.toString()
          )
            .div(1e18)
            .toString(10),
          takerToken2AfterBalance: new BigNumber(
            takerToken2AfterBalance.toString()
          )
            .div(1e18)
            .toString(10),
        });

        expect(
          new BigNumber(makerToken1AfterBalance.toString()).toNumber()
        ).toEqual(
          new BigNumber(makerToken1InitBalance.toString()).toNumber() -
            +makerAmount
        );
        expect(
          new BigNumber(takerToken1AfterBalance.toString()).toNumber()
        ).toEqual(
          new BigNumber(takerToken1InitBalance.toString()).toNumber() +
            +makerAmount
        );
        expect(
          new BigNumber(makerToken2AfterBalance.toString()).toNumber()
        ).toEqual(
          new BigNumber(makerToken2InitBalance.toString()).toNumber() +
            +takerAmount
        );
        expect(
          new BigNumber(takerToken2AfterBalance.toString()).toNumber()
        ).toEqual(
          new BigNumber(takerToken2InitBalance.toString()).toNumber() -
            +takerAmount
        );
      });

      test(`partialFillLimitOrderWithTargetPermit with ${lib}`, async () => {
        const maker = signer;

        const makerAmount = (1e18).toString(10);
        const takerAmount = (8e18).toString(10);

        const libDependentNumber = lib === 'ethers' ? 1 : 2;

        const signableOrderData = await sdk.buildDirectLimitOrder({
          nonce: 4 + 5 * libDependentNumber,
          expiry: orderExpiry,
          maker: maker.address,
          makerAsset: erc20Token1.address,
          makerAmount,
          takerAsset: erc20Token2.address,
          takerAmount,
        });

        const signature = await sdk.signLimitOrder(signableOrderData);

        const makerToken1InitBalance: BigNumberEthers =
          await erc20Token1.balanceOf(maker.address);
        const takerToken1InitBalance: BigNumberEthers =
          await erc20Token1.balanceOf(taker.address);
        const makerToken2InitBalance: BigNumberEthers =
          await erc20Token2.balanceOf(maker.address);
        const takerToken2InitBalance: BigNumberEthers =
          await erc20Token2.balanceOf(taker.address);

        console.log('balances', {
          makerToken1InitBalance: new BigNumber(
            makerToken1InitBalance.toString()
          )
            .div(1e18)
            .toString(10),
          takerToken1InitBalance: new BigNumber(
            takerToken1InitBalance.toString()
          )
            .div(1e18)
            .toString(10),
          makerToken2InitBalance: new BigNumber(
            makerToken2InitBalance.toString()
          )
            .div(1e18)
            .toString(10),
          takerToken2InitBalance: new BigNumber(
            takerToken2InitBalance.toString()
          )
            .div(1e18)
            .toString(10),
        });

        console.log('signature', signature, 'order', signableOrderData.data);

        // without SDK
        // await erc20Token1.connect(maker).approve(AugustusRFQ.address, makerAmount);

        const fillPart = 0.5;
        const fillAmount = +takerAmount * fillPart;

        // withSDK
        const approveForMakerTx = await sdk.approveMakerTokenForLimitOrder(
          makerAmount,
          erc20Token1.address
        );
        await awaitTx(approveForMakerTx);

        /* Without SDK
       await AugustusRFQ.connect(taker).fillOrder(
        signableOrderData.data,
        signature
      ); */

        // without SDK
        // await erc20Token2.connect(taker).approve(AugustusRFQ.address, takerAmount);

        // withSDK
        const approveForTakerTx =
          // approving same as maker token, because this is a direct-through-AugustusRFQ Order
          await takerSDK.approveMakerTokenForLimitOrder(
            takerAmount,
            erc20Token2.address
          );
        await awaitTx(approveForTakerTx);

        const takerFillsOrderTx =
          await takerSDK.partialFillDirectLimitOrderWithTargetPermit(
            {
              orderData: signableOrderData.data,
              signature,
              target: taker.address,
              fillAmount: fillAmount.toString(10),
              // @TODO make a tests with actual `permitTakerData`
            }, // web3 underestimates gas here
            lib === 'web3' ? { gas: 150000 } : undefined
          );

        const receipt = await awaitTx(takerFillsOrderTx);

        console.log(lib, 'Filled order', receipt);

        const makerToken1AfterBalance: BigNumberEthers =
          await erc20Token1.balanceOf(maker.address);
        const takerToken1AfterBalance: BigNumberEthers =
          await erc20Token1.balanceOf(taker.address);
        const makerToken2AfterBalance: BigNumberEthers =
          await erc20Token2.balanceOf(maker.address);
        const takerToken2AfterBalance: BigNumberEthers =
          await erc20Token2.balanceOf(taker.address);

        console.log('balances after', {
          makerToken1AfterBalance: new BigNumber(
            makerToken1AfterBalance.toString()
          )
            .div(1e18)
            .toString(10),
          takerToken1AfterBalance: new BigNumber(
            takerToken1AfterBalance.toString()
          )
            .div(1e18)
            .toString(10),
          makerToken2AfterBalance: new BigNumber(
            makerToken2AfterBalance.toString()
          )
            .div(1e18)
            .toString(10),
          takerToken2AfterBalance: new BigNumber(
            takerToken2AfterBalance.toString()
          )
            .div(1e18)
            .toString(10),
        });

        expect(
          new BigNumber(makerToken1AfterBalance.toString()).toNumber()
        ).toEqual(
          new BigNumber(makerToken1InitBalance.toString()).toNumber() -
            +makerAmount * fillPart
        );
        expect(
          new BigNumber(takerToken1AfterBalance.toString()).toNumber()
        ).toEqual(
          new BigNumber(takerToken1InitBalance.toString()).toNumber() +
            +makerAmount * fillPart
        );
        expect(
          new BigNumber(makerToken2AfterBalance.toString()).toNumber()
        ).toEqual(
          new BigNumber(makerToken2InitBalance.toString()).toNumber() +
            +takerAmount * fillPart
        );
        expect(
          new BigNumber(takerToken2AfterBalance.toString()).toNumber()
        ).toEqual(
          new BigNumber(takerToken2InitBalance.toString()).toNumber() -
            +takerAmount * fillPart
        );
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

  // @TODO switch to getLimitOrders
  test.skip('getRawLimitOrders', async () => {
    const account = '0x05182E579FDfCf69E4390c3411D8FeA1fb6467cf';
    const orderHash =
      '0x6b3906698abedb72c2954b2ea39006e4be779b12eb9e72a1b8dba8dbd2ba975b';

    const orders = await paraSwap.getLimitOrders({
      maker: account,
      type: 'LIMIT',
    });

    const order = orders.find(
      (order) => order.orderHash.toLowerCase() === orderHash
    );

    assert(order, `order must exist for orderHash ${orderHash}`);

    expect(order.state).toEqual('EXPIRED');

    // EXPIRED order won't change
    expect(order).toMatchInlineSnapshot(`
      Object {
        "chainId": 3,
        "createdAt": 1652430671,
        "expiry": 0,
        "maker": "0x05182e579fdfcf69e4390c3411d8fea1fb6467cf",
        "makerAmount": "10000000000000000000",
        "makerAsset": "0xad6d458402f60fd3bd25163575031acdce07538d",
        "makerBalance": "10000000000000000000",
        "nonceAndMeta": "8209317000076433728076072485312968185294986748283703458703343616",
        "orderHash": "0x6b3906698abedb72c2954b2ea39006e4be779b12eb9e72a1b8dba8dbd2ba975b",
        "permitMakerAsset": null,
        "signature": "0x5df9b6f3abaef67993e57e94ab2ed9e58a4c709fb03f0cf23117c0ed8a4b46097c515c2b055d2a5a1c373513faaa618ae3873e167c129128bb0b28a8be5f980e1b",
        "state": "EXPIRED",
        "taker": "0x0000000000000000000000000000000000000000",
        "takerAmount": "1000000000000000000",
        "takerAsset": "0xc778417e063141139fce010982780140aa0cd5ab",
      }
    `);
  });

  test.skip('postLimitOrder', async () => {
    // @TODO breaks with 'maker' doesn't have sufficient balance for this limit order
    // because of API balance check
    // need to use a fixed address through a PK
    const signableOrderData = await paraSwap.buildDirectLimitOrder({
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

    console.log('🚀 orderWithSignature', orderWithSignature);

    const newOrder = await paraSwap.postLimitOrder(orderWithSignature);
    console.log('🚀 newOrder from API', newOrder);

    const recoveredAddress = ethers.utils.recoverAddress(
      newOrder.orderHash,
      signature
    );
    console.log('🚀 recoveredAddress', recoveredAddress);

    expect(recoveredAddress).toEqual(senderAddress);

    // expect(newOrder).toMatchSnapshot('Order_from_API_Snapshot');
  });

  test.skip('getOrderStatus', async () => {
    // order that should not change anymore
    const orderHash =
      '0x636CC5AA95CE9F6E3EA5EB7E65B4136DEBE62C4A743FB9A4D8AF9C0D35C71BA4';

    const order = {
      expiry: 1654418209,
      createdAt: 1651826231,
      chainId: 3,
      nonceAndMeta:
        '3992791579555718835298587613543555574383102812671805313477771264',
      maker: '0x05182e579fdfcf69e4390c3411d8fea1fb6467cf',
      taker: '0x0000000000000000000000000000000000000000',
      makerAsset: '0x21718c0fbd10900565fa57c76e1862cd3f6a4d8e',
      takerAsset: '0xc778417e063141139fce010982780140aa0cd5ab',
      makerAmount: '1000000000000000000',
      takerAmount: '100000000000000000',
      signature:
        '0x7fdb308ff5a4df88c8e2e4fd66e99a0de257ee635f1e2d0e183025688b2b2a183178e9f102e08ed86a6ef6498f7562d13546be84e8853e4ba0d8ac6b9819f4851b',
      orderHash:
        '0x636cc5aa95ce9f6e3ea5eb7e65b4136debe62c4a743fb9a4d8af9c0d35c71ba4',
      permitMakerAsset: null,
    };

    assert(order, `must have an order with orderHash ${orderHash}`);
  });

  test.skip('getOrdersStatus', async () => {
    // orders that should not change anymore
    const orderHashes = [
      '0x6b3906698abedb72c2954b2ea39006e4be779b12eb9e72a1b8dba8dbd2ba975b',
      '0xa5b52be5e7a6cec7e14d8567c561673a931d91368025dd3966f70b1da154c470',
    ];
    const account = '0x05182E579FDfCf69E4390c3411D8FeA1fb6467cf';

    // need real provider, local ganache fork can't get historical events
    const prov = ethers.getDefaultProvider(PROVIDER_URL);
    const connectedWallet = walletStable.connect(prov);
    const contractCaller = constructEthersContractCaller(
      {
        ethersProviderOrSigner: connectedWallet,
        EthersContract: ethers.Contract,
      },
      connectedWallet.address
    );

    const paraSwap = constructPartialSDK(
      {
        chainId,
        apiURL: 'https://api.staging.paraswap.io',
        fetcher: axiosFetcher,
        contractCaller,
      },
      constructGetLimitOrders
    );

    const orders = await paraSwap.getLimitOrders({
      maker: account,
      type: 'LIMIT',
    });

    const selectedOrders = orders.filter((order) =>
      orderHashes.includes(order.orderHash)
    );

    // all orderHashes should be found
    expect(orderHashes.length).toEqual(selectedOrders.length);
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
