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
  constructBuildNFTOrder,
  BuildNFTOrderFunctions,
  constructSignNFTOrder,
  SignNFTOrderFunctions,
  constructCancelNFTOrder,
  CancelNFTOrderFunctions,
  constructEthersContractCaller,
  SDKConfig,
  ConstructProviderFetchInput,
  constructAxiosFetcher,
  ApproveTokenForNFTOrderFunctions,
  constructApproveTokenForNFTOrder,
  chainId2verifyingContract,
  constructGetNFTOrdersContract,
  GetNFTOrdersContractFunctions,
  constructPostNFTOrder,
  PostNFTOrderFunctions,
  NFTOrderToSend,
  GetNFTOrdersFunctions,
  constructGetNFTOrders,
  Web3UnpromiEvent,
  constructWeb3ContractCaller,
  GetSpenderFunctions,
  constructGetSpender,
  BuildNFTOrdersTxFunctions,
  constructBuildNFTOrderTx,
  BuildTxFunctions,
  constructBuildTx,
  AssetType,
} from '../src';
import BigNumber from 'bignumber.js';

import ERC20MinableABI from './abi/ERC20Mintable.json';
import { bytecode as ERC20MintableBytecode } from './bytecode/ERC20Mintable.json';
import AugustusRFQAbi from './abi/AugustusRFQ.json';
import { bytecode as AugustusRFQBytecode } from './bytecode/AugustusRFQ.json';

import ganache from 'ganache';

import {
  BuildNFTOrderInput,
  SignableNFTOrderData,
} from '../src/methods/nftOrders/buildOrder';
import { assert } from 'ts-essentials';
import { ZERO_ADDRESS } from '../src/methods/common/orders/buildOrderData';

dotenv.config();

jest.setTimeout(30 * 1000);

declare let process: any;

const referrer = 'sdk-test';

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

const expectTxParamsScheme = expect.objectContaining({
  from: expect.any(String),
  to: expect.any(String),
  value: expect.any(String),
  data: expect.any(String),
  gasPrice: expect.any(String),
  chainId: expect.any(Number),
});

describe('NFT Orders', () => {
  let paraSwap: BuildNFTOrderFunctions &
    SignNFTOrderFunctions &
    GetNFTOrdersContractFunctions &
    PostNFTOrderFunctions &
    GetNFTOrdersFunctions &
    CancelNFTOrderFunctions<ethers.ContractTransaction> &
    ApproveTokenForNFTOrderFunctions<ethers.ContractTransaction> &
    GetSpenderFunctions &
    BuildNFTOrdersTxFunctions &
    BuildTxFunctions;

  type MinEthersSDK = BuildNFTOrderFunctions &
    SignNFTOrderFunctions &
    CancelNFTOrderFunctions<ethers.ContractTransaction> &
    ApproveTokenForNFTOrderFunctions<ethers.ContractTransaction>;
  type MinTakerEthersSDK = BuildNFTOrdersTxFunctions &
    ApproveTokenForNFTOrderFunctions<ethers.ContractTransaction>;
  type MinWeb3SDK = BuildNFTOrderFunctions &
    SignNFTOrderFunctions &
    CancelNFTOrderFunctions<Web3UnpromiEvent> &
    ApproveTokenForNFTOrderFunctions<Web3UnpromiEvent>;
  type MinTakerWeb3SDK = ApproveTokenForNFTOrderFunctions<Web3UnpromiEvent>;

  type EthersCancelOrderConstructor = (
    options: ConstructProviderFetchInput<
      ethers.ContractTransaction,
      'transactCall'
    >
  ) => CancelNFTOrderFunctions<ethers.ContractTransaction>;
  type EthersApproveTokenForNFTOrderConstructor = (
    options: ConstructProviderFetchInput<
      ethers.ContractTransaction,
      'transactCall'
    >
  ) => ApproveTokenForNFTOrderFunctions<ethers.ContractTransaction>;

  type Web3CancelOrderConstructor = (
    options: ConstructProviderFetchInput<Web3UnpromiEvent, 'transactCall'>
  ) => CancelNFTOrderFunctions<Web3UnpromiEvent>;
  type Web3ApproveTokenForNFTOrderConstructor = (
    options: ConstructProviderFetchInput<Web3UnpromiEvent, 'transactCall'>
  ) => ApproveTokenForNFTOrderFunctions<Web3UnpromiEvent>;

  const ethersSDK: MinEthersSDK = constructPartialSDK<
    SDKConfig<ethers.ContractTransaction>,
    [
      typeof constructBuildNFTOrder,
      typeof constructSignNFTOrder,
      EthersCancelOrderConstructor,
      EthersApproveTokenForNFTOrderConstructor
    ]
  >(
    {
      chainId,
      contractCaller: ethersContractCaller,
      fetcher: axiosFetcher,
      apiURL: 'https://api.orders.paraswap.io',
    },
    constructBuildNFTOrder,
    constructSignNFTOrder,
    constructCancelNFTOrder,
    constructApproveTokenForNFTOrder
  );

  const takerEthersSDK: MinTakerEthersSDK = constructPartialSDK<
    SDKConfig<ethers.ContractTransaction>,
    [EthersApproveTokenForNFTOrderConstructor, typeof constructBuildNFTOrderTx]
  >(
    {
      chainId,
      contractCaller: takerEthersContractCaller,
      fetcher: axiosFetcher,
      apiURL: 'https://api.orders.paraswap.io',
    },
    constructApproveTokenForNFTOrder,
    constructBuildNFTOrderTx
  );

  const web3SDK: MinWeb3SDK = constructPartialSDK<
    SDKConfig<Web3UnpromiEvent>,
    [
      typeof constructBuildNFTOrder,
      typeof constructSignNFTOrder,
      Web3CancelOrderConstructor,
      Web3ApproveTokenForNFTOrderConstructor
    ]
  >(
    {
      chainId,
      contractCaller: web3ContractCaller,
      fetcher: axiosFetcher,
      apiURL: 'https://api.orders.paraswap.io',
    },
    constructBuildNFTOrder,
    constructSignNFTOrder,
    constructCancelNFTOrder,
    constructApproveTokenForNFTOrder
  );

  const takerWeb3SDK: MinTakerWeb3SDK = constructPartialSDK<
    SDKConfig<Web3UnpromiEvent>,
    [Web3ApproveTokenForNFTOrderConstructor]
  >(
    {
      chainId,
      contractCaller: takerWeb3ContractCaller,
      fetcher: axiosFetcher,
      apiURL: 'https://api.orders.paraswap.io',
    },

    constructApproveTokenForNFTOrder
  );

  const txSDKs = [
    { lib: 'ethers', sdk: ethersSDK, takerSDK: takerEthersSDK },
    { lib: 'web3', sdk: web3SDK, takerSDK: takerWeb3SDK },
  ] as const;

  let orderInput: BuildNFTOrderInput;
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
      makerAssetType: AssetType.ERC1155,
      takerAssetType: AssetType.ERC20,
      makerAssetId: '9982',
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
        typeof constructBuildNFTOrder,
        typeof constructSignNFTOrder,
        typeof constructGetNFTOrdersContract,
        typeof constructPostNFTOrder,
        typeof constructGetNFTOrders,
        EthersCancelOrderConstructor,
        EthersApproveTokenForNFTOrderConstructor,
        typeof constructGetSpender,
        typeof constructBuildNFTOrderTx,
        typeof constructBuildTx
      ]
    >(
      {
        chainId,
        contractCaller: ethersContractCaller,
        fetcher: axiosFetcher,
        apiURL: 'https://api.orders.paraswap.io',
      },
      constructBuildNFTOrder,
      constructSignNFTOrder,
      constructGetNFTOrdersContract,
      constructPostNFTOrder,
      constructGetNFTOrders,
      constructCancelNFTOrder,
      constructApproveTokenForNFTOrder,
      constructGetSpender,
      constructBuildNFTOrderTx,
      constructBuildTx
    );

    AugustusRFQ = await AugustusRFQFactory.attach(
      paraSwap.getNFTOrdersContract()
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

  test('getNFTOrdersContract', async () => {
    const augustusRFQAddress = paraSwap.getNFTOrdersContract();

    // @TODO replace with snapshot test once contracts are deployed
    expect(augustusRFQAddress).toEqual(AugustusRFQ.address);
  });

  test('get NFT order by hash', async () => {
    const knownOrderHash =
      '0x3ee1eb8574ff323df374ab0d09f6fe968c8cec301d4711ebc37d899d8b30eb33';
    const sdk = constructPartialSDK(
      {
        chainId: 137,
        fetcher: axiosFetcher,
        apiURL: 'https://api.orders.paraswap.io',
      },
      constructGetNFTOrders
    );

    const order = await sdk.getNFTOrderByHash(knownOrderHash);
    expect(order).toMatchInlineSnapshot(`
      Object {
        "chainId": 137,
        "createdAt": 1655458765,
        "expiry": 1658050764,
        "fillableBalance": "1",
        "maker": "0x112f39ea2ccff2d088086590d11cd9f092954f77",
        "makerAmount": "1",
        "makerAsset": "0xcd494673999194365033d7a287af9f0a3b163874",
        "makerAssetId": "1028",
        "makerAssetType": 2,
        "makerBalance": "1",
        "nonceAndMeta": "7616951480031442449908195926141502897956149438841392803682297026303",
        "orderHash": "0x3ee1eb8574ff323df374ab0d09f6fe968c8cec301d4711ebc37d899d8b30eb33",
        "permitMakerAsset": null,
        "signature": "0x1d0ba657f90512b62f1026812b4718ca6f0868919181d069ec7d8258c3ab5e3c449b462de619114faea0569002e850c879b09a6964d9863c192023c9b297ca051c",
        "state": "PENDING",
        "taker": "0xdef171fe48cf0115b1d80b88dc8eab59176fee57",
        "takerAmount": "654",
        "takerAsset": "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
        "takerAssetId": "0",
        "takerAssetType": 0,
        "takerFromMeta": "0x76176c2971300217e9f48e3dd4e40591500b96ff",
        "transactionHash": null,
        "type": "P2P",
      }
    `);
  });

  test('buildNFTOrder', async () => {
    const signableOrderData = await paraSwap.buildNFTOrder(orderInput);

    // taker address that would be checked as part of nonceAndMeta in Augustus
    const metaAddress = deriveTakerFromNonceAndTaker(
      signableOrderData.data.nonceAndMeta
    );

    // taker in nonceAndTaker = Zero
    expect(metaAddress).toBe(ZERO_ADDRESS);

    const AugustusAddress = await paraSwap.getAugustusSwapper();
    // taker in AugustusRFQ = Augustus
    expect(signableOrderData.data.taker.toLowerCase()).toBe(
      AugustusAddress.toLowerCase()
    );

    expect(signableOrderData.data.maker).toBe(senderAddress);
    expect(signableOrderData.data.expiry).toBe(orderExpiry);

    expect(signableOrderData).toMatchSnapshot('Order_Data_Snapshot');
  });

  test('buildNFTOrder p2p', async () => {
    const p2pOrderInput = {
      ...orderInput,
      taker: taker.address,
    };
    const signableOrderData = await paraSwap.buildNFTOrder({
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

  test('Build_NFT_Tx', async () => {
    const NFT = '0xc778417e063141139fce010982780140aa0cd5ab'; // Ropsten
    const BAT = '0xDb0040451F373949A4Be60dcd7b6B8D6E42658B6'; // Ropsten

    // swap NFT -> BAT, then fill BAT (takerAsset) for NFT (makerAsset)

    // 1 NFT
    const makerAmount = '1';
    // for 6 BAT
    const takerAmount = (6e18).toString(10);

    const order = {
      nonce: 99,
      expiry: orderExpiry,
      maker: maker.address,
      makerAsset: NFT,
      makerAmount,
      takerAsset: BAT,
      takerAmount,
      makerAssetType: AssetType.ERC721,
      takerAssetType: AssetType.ERC20,
      makerAssetId: '9982',
    };

    const signableOrderData = await paraSwap.buildNFTOrder(order);

    const signature = await paraSwap.signNFTOrder(signableOrderData);

    const orderWithSignature = {
      ...order, // providers makerAssetType & takerAssetType, necessary for encoding makerAsset & takerAsset as uint (if got order by hash from API)
      ...signableOrderData.data, // provides actual order data necessary for the contract
      signature, // necessary for execution in the contract
      // extra stuff will be removed before POSTing to /transaction
    };

    const swapAndNFTPayload = await paraSwap.buildNFTOrderTx(
      {
        srcDecimals: 18,
        destDecimals: 18,
        userAddress: senderAddress,
        partner: referrer,
        orders: [orderWithSignature],
      },
      { ignoreChecks: true }
    );

    console.log('swapAndNFTPayload', swapAndNFTPayload);

    expect(swapAndNFTPayload).toEqual(expectTxParamsScheme);
    expect({
      from: swapAndNFTPayload.from,
      to: swapAndNFTPayload.to,
      value: swapAndNFTPayload.value,
      chainId: swapAndNFTPayload.chainId,
      //  data & gasPrice vary from run to run
    }).toMatchInlineSnapshot(`
      Object {
        "chainId": 3,
        "from": "0xaC39b311DCEb2A4b2f5d8461c1cdaF756F4F7Ae9",
        "to": "0xdef171fe48cf0115b1d80b88dc8eab59176fee57",
        "value": "0",
      }
    `);
  });

  test(`fillNFTOrder through Augustus`, async () => {
    const NFT = '0xd8bbF8cEb445De814Fb47547436b3CFeecaDD4ec'; // Ropsten
    const NFT_ID = '9982';
    const BAT = '0xDb0040451F373949A4Be60dcd7b6B8D6E42658B6'; // Ropsten

    // 1 NFT
    const makerAmount = (1).toString(10);
    // for 6 BAT
    const takerAmount = (6e18).toString(10);

    // @TODO get account with NFT
    const maker = new ethers.Wallet(process.env.PK1, ethersProvider);
    // @TODO get account with BAT
    const taker = new ethers.Wallet(process.env.PK2, ethersProvider);

    console.log('maker', maker.address, 'taker', taker.address);

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
        apiURL: 'https://api.orders.paraswap.io',
      },
      constructBuildNFTOrder,
      constructSignNFTOrder,
      constructApproveTokenForNFTOrder
    );

    const takerSDK = constructPartialSDK(
      {
        chainId,
        contractCaller: takerEthersContractCaller,
        fetcher: axiosFetcher,
        apiURL: 'https://api.orders.paraswap.io',
      },
      constructBuildNFTOrder,
      constructSignNFTOrder,
      constructApproveTokenForNFTOrder,
      constructBuildNFTOrderTx
    );

    const order: BuildNFTOrderInput = {
      nonce: 999,
      expiry: orderExpiry,
      maker: maker.address,
      makerAsset: NFT,
      makerAmount,
      takerAsset: BAT,
      takerAmount,
      taker: taker.address,
      makerAssetType: AssetType.ERC721,
      takerAssetType: AssetType.ERC20,
      makerAssetId: NFT_ID,
    };

    const signableOrderData = await makerSDK.buildNFTOrder(order);

    const signature = await makerSDK.signNFTOrder(signableOrderData);

    const NFT_Token = erc20Token1.attach(NFT);
    const BAT_Token = erc20Token1.attach(BAT);

    const makerToken1InitBalance: BigNumberEthers = await NFT_Token.balanceOf(
      maker.address
    );
    const takerToken1InitBalance: BigNumberEthers = await NFT_Token.balanceOf(
      taker.address
    );
    const makerToken2InitBalance: BigNumberEthers = await BAT_Token.balanceOf(
      maker.address
    );
    const takerToken2InitBalance: BigNumberEthers = await BAT_Token.balanceOf(
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

    console.log('signature', signature, 'order', signableOrderData.data);

    // without SDK
    // await NFT_Token.connect(maker).approve(Augustus.address, makerAmount);

    // withSDK
    const approveForMakerTx = await makerSDK.approveNFTorNFTOrder(
      NFT_Token.address
    );

    await awaitTx(approveForMakerTx);

    console.log('Approved maker');

    // without SDK
    // await BAT_Token.connect(taker).approve(Augustus.address, takerAmount);

    // withSDK
    const approveForTakerTx = await takerSDK.approveERC20ForNFTOrder(
      takerAmount,
      BAT_Token.address
    );
    await awaitTx(approveForTakerTx);
    console.log('Approved taker');

    const orderWithSignature = {
      ...order, // providers makerAssetType & takerAssetType, necessary for encoding makerAsset & takerAsset as uint (if got order by hash from API)
      ...signableOrderData.data, // provides actual order data necessary for the contract
      signature, // necessary for execution in the contract
    };

    // taker address that would be checked as part of nonceAndMeta in Augustus
    const metaAddress = deriveTakerFromNonceAndTaker(
      signableOrderData.data.nonceAndMeta
    );

    // taker in nonceAndTaker = Zero
    expect(metaAddress.toLowerCase()).toBe(taker.address.toLowerCase());

    expect(orderWithSignature).toMatchInlineSnapshot(`
      Object {
        "expiry": 1671494400,
        "maker": "0x05182E579FDfCf69E4390c3411D8FeA1fb6467cf",
        "makerAmount": "1",
        "makerAsset": "4160337194696582883088243970031020643097982653676",
        "makerAssetId": "9982",
        "makerAssetType": 2,
        "nonce": 999,
        "nonceAndMeta": "1460714318943897704263770406787447386424245213697791",
        "signature": "0xd5e4b726d6f72d591ea7b791eb431649997809a311d35a0493fc0f9130c40a012d2d419e12606ae2bf974c0f9dcdda087658cf3e7fe7b07a8a642e3bd61a8d9f1c",
        "taker": "0xDEF171Fe48CF0115B1d80b88dc8eAB59176FEe57",
        "takerAmount": "6000000000000000000",
        "takerAsset": "1250274577517696612136138646343709056755604805814",
        "takerAssetId": "0",
        "takerAssetType": 0,
      }
    `);

    const { gas: payloadGas, ...NFTPayloadTxParams } =
      await takerSDK.buildNFTOrderTx(
        {
          srcDecimals: 18,
          userAddress: taker.address,
          partner: referrer,
          orders: [orderWithSignature],
        },
        // @TODO remove ignoreChecks, currently ropsten balance is fetched wrong in api
        { ignoreChecks: true }
      );

    console.log('NFTPayloadTxParams', {
      gas: payloadGas,
      ...NFTPayloadTxParams,
    });

    const transaction: ethers.providers.TransactionRequest = {
      ...NFTPayloadTxParams,
      gasPrice: '0x' + new BigNumber(NFTPayloadTxParams.gasPrice).toString(16),
      gasLimit: '0x' + new BigNumber(payloadGas || 5000000).toString(16),
      value: '0x' + new BigNumber(NFTPayloadTxParams.value).toString(16),
    };

    console.log('SENDING TX', transaction);

    const takerFillsOrderTx = await taker.sendTransaction(transaction);

    await awaitTx(takerFillsOrderTx);

    const makerToken1AfterBalance: BigNumberEthers = await NFT_Token.balanceOf(
      maker.address
    );
    const takerToken1AfterBalance: BigNumberEthers = await NFT_Token.balanceOf(
      taker.address
    );
    const makerToken2AfterBalance: BigNumberEthers = await BAT_Token.balanceOf(
      maker.address
    );
    const takerToken2AfterBalance: BigNumberEthers = await BAT_Token.balanceOf(
      taker.address
    );

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

  test(`fill NFTOrder+Swap through Augustus`, async () => {
    const DAI = '0xaD6D458402F60fD3Bd25163575031ACDce07538D'; // Ropsten
    const NFT = '0xc778417e063141139fce010982780140aa0cd5ab'; // Ropsten
    const BAT = '0xDb0040451F373949A4Be60dcd7b6B8D6E42658B6'; // Ropsten

    // swap DAI -> BAT, then fill BAT (takerAsset) for NFT (makerAsset) Order

    // 1 NFT
    const makerAmount = (1).toString(10);
    // for 6 BAT
    const takerAmount = (6e18).toString(10);

    // @TODO get account with NFT
    const maker = new ethers.Wallet(process.env.PK1, ethersProvider);
    // @TODO get account with BAT
    const taker = new ethers.Wallet(process.env.PK2, ethersProvider);

    const order = {
      nonce: 998,
      expiry: orderExpiry,
      maker: maker.address,
      makerAsset: NFT,
      makerAmount,
      takerAsset: BAT,
      takerAmount,
      taker: taker.address,
      makerAssetType: AssetType.ERC1155,
      takerAssetType: AssetType.ERC20,
      makerAssetId: '9982',
    };

    console.log('maker', maker.address, 'taker', taker.address);

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
        apiURL: 'https://api.orders.paraswap.io',
      },
      constructBuildNFTOrder,
      constructSignNFTOrder,
      constructApproveTokenForNFTOrder
    );

    const takerSDK = constructPartialSDK(
      {
        chainId,
        contractCaller: takerEthersContractCaller,
        fetcher: axiosFetcher,
        apiURL: 'https://api.orders.paraswap.io',
      },
      constructBuildNFTOrder,
      constructSignNFTOrder,
      constructApproveTokenForNFTOrder,
      constructBuildNFTOrderTx
    );

    const signableOrderData = await makerSDK.buildNFTOrder(order);

    const signature = await makerSDK.signNFTOrder(signableOrderData);

    const NFT_Token = erc20Token1.attach(NFT);
    const BAT_Token = erc20Token1.attach(BAT);
    const DAI_Token = erc20Token1.attach(DAI);

    const makerToken1InitBalance: BigNumberEthers = await NFT_Token.balanceOf(
      maker.address
    );
    const takerToken1InitBalance: BigNumberEthers = await NFT_Token.balanceOf(
      taker.address
    );
    const makerToken2InitBalance: BigNumberEthers = await BAT_Token.balanceOf(
      maker.address
    );
    const takerToken2InitBalance: BigNumberEthers = await BAT_Token.balanceOf(
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

    console.log('signature', signature, 'order', signableOrderData.data);

    // without SDK
    // await NFT_Token.connect(maker).approve(Augustus.address, makerAmount);

    // withSDK
    const approveForMakerTx = await makerSDK.approveNFTorNFTOrder(
      NFT_Token.address
    );

    await awaitTx(approveForMakerTx);

    // without SDK
    // await DAI_Token.connect(taker).approve(Augustus.address, takerAmount);

    // withSDK
    const approveForTakerTx = await takerSDK.approveERC20ForNFTOrder(
      takerAmount,
      DAI_Token.address
    );
    await awaitTx(approveForTakerTx);

    const orderWithSignature = {
      ...order, // providers makerAssetType & takerAssetType, necessary for encoding makerAsset & takerAsset as uint (if got order by hash from API)
      ...signableOrderData.data, // provides actual order data necessary for the contract
      signature, // necessary for execution in the contract
    };

    // taker address that would be checked as part of nonceAndMeta in Augustus
    const metaAddress = deriveTakerFromNonceAndTaker(
      signableOrderData.data.nonceAndMeta
    );

    // taker in nonceAndTaker = Zero
    expect(metaAddress.toLowerCase()).toBe(taker.address.toLowerCase());

    const priceRoute = await takerSDK.getNFTOrdersRate(
      {
        srcToken: DAI,
        destToken: BAT,
        userAddress: taker.address,
      },
      [order]
    );

    console.log('SWAP priceRoute', priceRoute);

    const swapAndNFTPayloadTxParams = await takerSDK.buildSwapAndNFTOrderTx(
      {
        priceRoute,
        userAddress: taker.address,
        partner: referrer,
        orders: [orderWithSignature],
      },
      { ignoreChecks: true }
    );

    const transaction = {
      ...swapAndNFTPayloadTxParams,
      gasPrice:
        '0x' + new BigNumber(swapAndNFTPayloadTxParams.gasPrice).toString(16),
      gasLimit: '0x' + new BigNumber(5000000).toString(16),
      value: '0x' + new BigNumber(swapAndNFTPayloadTxParams.value).toString(16),
    };

    console.log('SENDING TX', transaction);

    const takerFillsOrderTx = await taker.sendTransaction(transaction);

    await awaitTx(takerFillsOrderTx);

    const makerToken1AfterBalance: BigNumberEthers = await NFT_Token.balanceOf(
      maker.address
    );
    const takerToken1AfterBalance: BigNumberEthers = await NFT_Token.balanceOf(
      taker.address
    );
    const makerToken2AfterBalance: BigNumberEthers = await BAT_Token.balanceOf(
      maker.address
    );
    const takerToken2AfterBalance: BigNumberEthers = await BAT_Token.balanceOf(
      taker.address
    );

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

  test('Build_Swap+NFT_Tx', async () => {
    const DAI = '0xaD6D458402F60fD3Bd25163575031ACDce07538D'; // Ropsten
    const NFT = '0xc778417e063141139fce010982780140aa0cd5ab'; // Ropsten
    const BAT = '0xDb0040451F373949A4Be60dcd7b6B8D6E42658B6'; // Ropsten

    // swap DAI -> BAT, then fill BAT (takerAsset) for NFT (makerAsset)

    // 1 NFT
    const makerAmount = (1).toString(10);
    // for 6 BAT
    const takerAmount = (6e18).toString(10);

    const order = {
      nonce: 99,
      expiry: orderExpiry,
      maker: maker.address,
      makerAsset: NFT,
      makerAmount,
      takerAsset: BAT,
      takerAmount,
      makerAssetType: AssetType.ERC721,
      takerAssetType: AssetType.ERC20,
      makerAssetId: '9982',
    };

    // token to get after SWAP must be the takerAsset to allow to fill Order
    const destToken = order.takerAsset;
    // token to swap for destToken prior to filling Order
    const srcToken = DAI;

    const signableOrderData = await paraSwap.buildNFTOrder(order);

    const signature = await paraSwap.signNFTOrder(signableOrderData);

    const priceRoute = await paraSwap.getNFTOrdersRate(
      {
        srcToken,
        destToken,
        userAddress: senderAddress,
      },
      [order]
    );

    console.log('priceRoute', priceRoute);

    const stablePriceRouteMatch: typeof priceRoute = {
      ...priceRoute,
      blockNumber: NaN, // will change with time
      srcAmount: '---', //will change based on srcToken/destToken rate
      hmac: '---', // will change with any other change
      bestRoute: priceRoute.bestRoute.map((route) => ({
        ...route,
        swaps: route.swaps.map((swap) => ({
          ...swap,
          swapExchanges: swap.swapExchanges.map((exchange) => ({
            ...exchange,
            srcAmount: '---', //will change based on srcToken/destToken rate
          })),
        })),
      })),
    };

    // @CONSIDER this may change
    expect(stablePriceRouteMatch).toMatchInlineSnapshot(`
      Object {
        "bestRoute": Array [
          Object {
            "percent": 100,
            "swaps": Array [
              Object {
                "destDecimals": 18,
                "destToken": "0xDb0040451F373949A4Be60dcd7b6B8D6E42658B6",
                "srcDecimals": 18,
                "srcToken": "0xaD6D458402F60fD3Bd25163575031ACDce07538D",
                "swapExchanges": Array [
                  Object {
                    "data": Object {
                      "factory": "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
                      "feeFactor": 10000,
                      "gasUSD": "0.000000",
                      "initCode": "0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f",
                      "path": Array [
                        "0xad6d458402f60fd3bd25163575031acdce07538d",
                        "0xdb0040451f373949a4be60dcd7b6b8d6e42658b6",
                      ],
                      "pools": Array [
                        Object {
                          "address": "0xf4371c1c0Db37e9b67E31Fa34303aeD124522f24",
                          "direction": true,
                          "fee": 30,
                        },
                      ],
                      "router": "0x53e693c6C7FFC4446c53B205Cf513105Bf140D7b",
                    },
                    "destAmount": "6000000000000000000",
                    "exchange": "UniswapV2",
                    "percent": 100,
                    "poolAddresses": Array [
                      "0xf4371c1c0Db37e9b67E31Fa34303aeD124522f24",
                    ],
                    "srcAmount": "---",
                  },
                ],
              },
            ],
          },
        ],
        "blockNumber": NaN,
        "contractAddress": "0xDEF171Fe48CF0115B1d80b88dc8eAB59176FEe57",
        "contractMethod": "simpleBuy",
        "destAmount": "6000000000000000000",
        "destDecimals": 18,
        "destToken": "0xDb0040451F373949A4Be60dcd7b6B8D6E42658B6",
        "destUSD": "0",
        "gasCost": "0",
        "gasCostUSD": "0.000000",
        "hmac": "---",
        "maxImpactReached": false,
        "network": 3,
        "partner": "anon",
        "partnerFee": 0,
        "side": "BUY",
        "srcAmount": "---",
        "srcDecimals": 18,
        "srcToken": "0xaD6D458402F60fD3Bd25163575031ACDce07538D",
        "srcUSD": "0",
        "tokenTransferProxy": "0x216b4b4ba9f3e719726886d34a177484278bfcae",
      }
    `);

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

    console.log('swapTxPayload', swapTxPayload);
    expect(swapTxPayload).toEqual(expectTxParamsScheme);

    expect({
      from: swapTxPayload.from,
      to: swapTxPayload.to,
      value: swapTxPayload.value,
      chainId: swapTxPayload.chainId,
      //  data & gasPrice vary from run to run
    }).toMatchInlineSnapshot(`
      Object {
        "chainId": 3,
        "from": "0xaC39b311DCEb2A4b2f5d8461c1cdaF756F4F7Ae9",
        "to": "0xDEF171Fe48CF0115B1d80b88dc8eAB59176FEe57",
        "value": "0",
      }
    `);

    const swappableOrder = {
      ...order, // providers makerAssetType & takerAssetType, necessary for encoding makerAsset & takerAsset as uint (if got order by hash from API)
      ...signableOrderData.data, // provides actual order data necessary for the contract
      signature, // necessary for execution in the contract
    };

    const swapAndNFTPayload = await paraSwap.buildSwapAndNFTOrderTx(
      {
        priceRoute,
        userAddress: senderAddress,
        partner: referrer,
        orders: [swappableOrder],
      },
      { ignoreChecks: true }
    );

    console.log('swapAndNFTPayload', swapAndNFTPayload);

    expect(swapAndNFTPayload).toEqual(expectTxParamsScheme);
    expect({
      from: swapAndNFTPayload.from,
      to: swapAndNFTPayload.to,
      value: swapAndNFTPayload.value,
      chainId: swapAndNFTPayload.chainId,
      //  data & gasPrice vary from run to run
    }).toMatchInlineSnapshot(`
      Object {
        "chainId": 3,
        "from": "0xaC39b311DCEb2A4b2f5d8461c1cdaF756F4F7Ae9",
        "to": "0xDEF171Fe48CF0115B1d80b88dc8eAB59176FEe57",
        "value": "0",
      }
    `);
  });

  describe.each(txSDKs)(
    'ethereum lib tests: $lib',
    ({ lib, sdk, takerSDK }) => {
      test(`signNFTOrder with ${lib}`, async () => {
        const signableOrderData = await sdk.buildNFTOrder(orderInput);
        console.log('🚀 orderInput', signableOrderData.data);

        const signature = await sdk.signNFTOrder(signableOrderData);
        expect(signature).toMatchInlineSnapshot(
          `"0x1aa5388855841c17e989d3e03d3dab17fc50fbdabd5b29d0d76ffb0d6858c86f195a6de6587cec6c282503f4a0abd8dd52f32a497bcda7a7729242d44a47ab791c"`
        );

        const presumedOrderHash = calculateOrderHash(signableOrderData);

        expect(
          ethers.utils.recoverAddress(presumedOrderHash, signature)
        ).toEqual(senderAddress);
      });

      test(`cancelNFTOrder with ${lib}`, async () => {
        const libDependentNumber = lib === 'ethers' ? 1 : 2;
        // bytes32
        const randomOrderHash = `0x${libDependentNumber}000000000000000000000000000000000000000000000000000000000000000`;

        const tx = await sdk.cancelNFTOrder(randomOrderHash);
        await awaitTx(tx);

        const orderStatus: BigNumberEthers = await AugustusRFQ.remaining(
          senderAddress,
          randomOrderHash
        );
        expect(orderStatus.toNumber()).toEqual(1);
      });

      test(`cancelNFTOrder Bulk with ${lib}`, async () => {
        const libDependentNumber = lib === 'ethers' ? 1 : 2;
        // bytes32[]
        const randomOrderHashes = [
          `0x20${libDependentNumber}0000000000000000000000000000000000000000000000000000000000000`,
          `0x30${libDependentNumber}0000000000000000000000000000000000000000000000000000000000000`,
        ];

        const tx = await sdk.cancelNFTOrderBulk(randomOrderHashes);
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

  // @TODO switch to getNFTOrders
  test.skip('getRawNFTOrders', async () => {
    const account = '0x05182E579FDfCf69E4390c3411D8FeA1fb6467cf';
    const orderHash =
      '0x6b3906698abedb72c2954b2ea39006e4be779b12eb9e72a1b8dba8dbd2ba975b';

    const orders = await paraSwap.getNFTOrders({
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

  test.skip('postNFTOrder', async () => {
    // @TODO breaks with 'maker' doesn't have sufficient balance for this NFT order
    // because of API balance check
    // need to use a fixed address through a PK
    const signableOrderData = await paraSwap.buildNFTOrder({
      ...orderInput,
      nonce: 2,
    });

    const signature = await paraSwap.signNFTOrder(signableOrderData);
    // expect(signature).toMatchInlineSnapshot(
    //   `"0x3aa58967f07b7752c8220191ebd80e9e00f95212b2e9f3ee61f9e92ebbeeffab397833627056ade28ae2726d59534a30ee3099731aa1b41176e7e7bb0f8b28e71b"`
    // );

    const orderWithSignature: NFTOrderToSend = {
      ...signableOrderData.data,
      signature,
    };

    console.log('🚀 orderWithSignature', orderWithSignature);

    const newOrder = await paraSwap.postNFTLimitOrder(orderWithSignature);
    console.log('🚀 newOrder from API', newOrder);

    const recoveredAddress = ethers.utils.recoverAddress(
      newOrder.orderHash,
      signature
    );
    console.log('🚀 recoveredAddress', recoveredAddress);

    expect(recoveredAddress).toEqual(senderAddress);

    // expect(newOrder).toMatchSnapshot('Order_from_API_Snapshot');
  });
});

function calculateOrderHash({
  domain,
  types,
  data,
}: SignableNFTOrderData): string {
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
