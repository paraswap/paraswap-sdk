import * as dotenv from 'dotenv';
// import Web3 from 'web3';
import { BigNumber as BigNumberEthers, Contract, ethers } from 'ethers';
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
} from '../src';
import BigNumber from 'bignumber.js';

import ERC20MinableABI from './abi/ERC20Mintable.json';
import { bytecode as ERC20MintableBytecode } from './bytecode/ERC20Mintable.json';
import AugustusRFQAbi from './abi/AugustusRFQ.json';
import { bytecode as AugustusRFQBytecode } from './bytecode/AugustusRFQ.json';

import ganache from 'ganache';

import {
  BuildLimitOrderInput,
  ZERO_ADDRESS,
} from '../src/methods/limitOrders/buildOrder';
import { assert } from 'ts-essentials';

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
    chainId,
  },
  quiet: true,
});

// @TODO tests with web3, especially eth_signTypedData for signing Orders
// const web3provider = new Web3(ganacheProvider as any);

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
    GetLimitOrdersContractFunctions &
    PostLimitOrderFunctions &
    GetLimitOrdersFunctions &
    CancelLimitOrderFunctions<ethers.ContractTransaction> &
    ApproveTokenForLimitOrderFunctions<ethers.ContractTransaction>;

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

    await erc20Token1.mint(walletStable.address, (30e18).toString(10));
    await erc20Token1.mint(walletRandom.address, (30e18).toString(10));
    await erc20Token2.mint(walletStable.address, (30e18).toString(10));
    await erc20Token2.mint(walletRandom.address, (30e18).toString(10));

    type CancelOrderConstructor = (
      options: ConstructProviderFetchInput<
        ethers.ContractTransaction,
        'transactCall'
      >
    ) => CancelLimitOrderFunctions<ethers.ContractTransaction>;
    type ApproveTokenForLimitOrderConstructor = (
      options: ConstructProviderFetchInput<
        ethers.ContractTransaction,
        'transactCall'
      >
    ) => ApproveTokenForLimitOrderFunctions<ethers.ContractTransaction>;

    paraSwap = constructPartialSDK<
      SDKConfig<ethers.ContractTransaction>,
      [
        typeof constructBuildLimitOrder,
        typeof constructSignLimitOrder,
        typeof constructGetLimitOrdersContract,
        typeof constructPostLimitOrder,
        typeof constructGetLimitOrders,
        CancelOrderConstructor,
        ApproveTokenForLimitOrderConstructor
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
      constructApproveTokenForLimitOrder
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

  test('buildLimitOrder', async () => {
    const signableOrderData = paraSwap.buildLimitOrder(orderInput);

    expect(signableOrderData.data.maker).toBe(senderAddress);
    expect(signableOrderData.data.expiry).toBe(orderExpiry);

    expect(signableOrderData).toMatchSnapshot('Order_Data_Snapshot');
  });

  test('signLimitOrder', async () => {
    const signableOrderData = paraSwap.buildLimitOrder(orderInput);
    console.log('🚀 orderInput', signableOrderData.data);

    const signature = await paraSwap.signLimitOrder(signableOrderData);
    expect(signature).toMatchInlineSnapshot(
      `"0x9a3c601b5b6ece2d2e08d977a4f42c606e655a3539deda01f64a134bb018e4d5734ed3789eba0b0d962fd74aac0596377903ac738efe96a1ebc3f8435096f68a1b"`
    );

    const presumedOrderHash = calculateOrderHash(signableOrderData);

    expect(ethers.utils.recoverAddress(presumedOrderHash, signature)).toEqual(
      senderAddress
    );
  });

  // @TODO switch to getLimitOrders
  test.skip('getRawLimitOrders', async () => {
    const account = '0x05182E579FDfCf69E4390c3411D8FeA1fb6467cf';
    const orderHash =
      '0x6b3906698abedb72c2954b2ea39006e4be779b12eb9e72a1b8dba8dbd2ba975b';

    const orders = await paraSwap.getRawLimitOrders({ maker: account });

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
    const signableOrderData = paraSwap.buildLimitOrder({
      ...orderInput,
      nonce: 2,
    });

    const signature = await paraSwap.signLimitOrder(signableOrderData);
    // expect(signature).toMatchInlineSnapshot(
    //   `"0x3aa58967f07b7752c8220191ebd80e9e00f95212b2e9f3ee61f9e92ebbeeffab397833627056ade28ae2726d59534a30ee3099731aa1b41176e7e7bb0f8b28e71b"`
    // );

    const orderWithSignature: LimitOrderToSend = {
      ...signableOrderData.data,
      chainId: signableOrderData.domain.chainId,
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

  test('fillLimitOrder', async () => {
    const maker = signer;
    const taker = walletRandom.connect(ethersProvider);

    const makerAmount = (1e18).toString(10);
    const takerAmount = (8e18).toString(10);

    const signableOrderData = paraSwap.buildLimitOrder({
      nonce: 1,
      expiry: orderExpiry,
      maker: maker.address,
      makerAsset: erc20Token1.address,
      makerAmount,
      takerAsset: erc20Token2.address,
      takerAmount,
    });

    const signature = await paraSwap.signLimitOrder(signableOrderData);

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

    console.log('signature', signature, 'order', signableOrderData.data);

    // without SDK
    // await erc20Token1.connect(maker).approve(AugustusRFQ.address, makerAmount);

    // withSDK
    const approveForMakerTx = await paraSwap.approveTokenForLimitOrder(
      makerAmount,
      erc20Token1.address
    );
    await approveForMakerTx.wait();

    /* Without SDK
     await AugustusRFQ.connect(taker).fillOrder(
      signableOrderData.data,
      signature
    ); */

    // With SDK
    const takerContractCaller = constructEthersContractCaller(
      {
        ethersProviderOrSigner: taker,
        EthersContract: ethers.Contract,
      },
      taker.address
    );

    const takerParaswapSDK = constructPartialSDK(
      {
        chainId,
        contractCaller: takerContractCaller,
        fetcher: axiosFetcher,
      },
      constructFillLimitOrder,
      constructApproveTokenForLimitOrder
    );

    // without SDK
    // await erc20Token2.connect(taker).approve(AugustusRFQ.address, takerAmount);

    // withSDK
    const approveForTakerTx = await takerParaswapSDK.approveTokenForLimitOrder(
      takerAmount,
      erc20Token2.address
    );
    await approveForTakerTx.wait();

    const takerFillsOrderTx = await takerParaswapSDK.fillLimitOrder({
      orderData: signableOrderData.data,
      signature,
    });

    await takerFillsOrderTx.wait();

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

  test('partialFillLimitOrderWithTargetPermit', async () => {
    const maker = signer;
    const taker = walletRandom.connect(ethersProvider);

    const makerAmount = (1e18).toString(10);
    const takerAmount = (8e18).toString(10);

    const signableOrderData = paraSwap.buildLimitOrder({
      nonce: 2,
      expiry: orderExpiry,
      maker: maker.address,
      makerAsset: erc20Token1.address,
      makerAmount,
      takerAsset: erc20Token2.address,
      takerAmount,
    });

    const signature = await paraSwap.signLimitOrder(signableOrderData);

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

    console.log('signature', signature, 'order', signableOrderData.data);

    // without SDK
    // await erc20Token1.connect(maker).approve(AugustusRFQ.address, makerAmount);

    const fillPart = 0.5;
    const fillAmount = +takerAmount * fillPart;

    // withSDK
    const approveForMakerTx = await paraSwap.approveTokenForLimitOrder(
      makerAmount,
      erc20Token1.address
    );
    await approveForMakerTx.wait();

    /* Without SDK
     await AugustusRFQ.connect(taker).fillOrder(
      signableOrderData.data,
      signature
    ); */

    // With SDK
    const takerContractCaller = constructEthersContractCaller(
      {
        ethersProviderOrSigner: taker,
        EthersContract: ethers.Contract,
      },
      taker.address
    );

    const takerParaswapSDK = constructPartialSDK(
      {
        chainId,
        contractCaller: takerContractCaller,
        fetcher: axiosFetcher,
      },
      constructFillLimitOrder,
      constructApproveTokenForLimitOrder
    );

    // without SDK
    // await erc20Token2.connect(taker).approve(AugustusRFQ.address, takerAmount);

    // withSDK
    const approveForTakerTx = await takerParaswapSDK.approveTokenForLimitOrder(
      takerAmount,
      erc20Token2.address
    );
    await approveForTakerTx.wait();

    const takerFillsOrderTx =
      await takerParaswapSDK.partialFillLimitOrderWithTargetPermit({
        orderData: signableOrderData.data,
        signature,
        target: taker.address,
        fillAmount: fillAmount.toString(10),
        // @TODO make a tests with actual `permitTakerData`
      });

    const receipt = await takerFillsOrderTx.wait();

    console.log('logs', receipt.logs);

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

  test('cancelLimitOrder', async () => {
    // bytes32
    const randomOrderHash =
      '0x1000000000000000000000000000000000000000000000000000000000000000';

    const tx = await paraSwap.cancelLimitOrder(randomOrderHash);
    await tx.wait();

    const orderStatus: BigNumberEthers = await AugustusRFQ.remaining(
      senderAddress,
      randomOrderHash
    );
    expect(orderStatus.toNumber()).toEqual(1);
  });

  test('cancelLimitOrder Bulk', async () => {
    // bytes32[]
    const randomOrderHashes = [
      '0x2000000000000000000000000000000000000000000000000000000000000000',
      '0x3000000000000000000000000000000000000000000000000000000000000000',
    ];

    const tx = await paraSwap.cancelLimitOrderBulk(randomOrderHashes);
    await tx.wait();

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

  test.skip('getOrderStatus', async () => {
    // order that should not change anymore
    const orderHash =
      '0x636CC5AA95CE9F6E3EA5EB7E65B4136DEBE62C4A743FB9A4D8AF9C0D35C71BA4';

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
        chainId: 3,
        apiURL: 'https://api.staging.paraswap.io',
        fetcher: axiosFetcher,
        contractCaller,
      },
      constructGetLimitOrders
    );

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

    const orderExtraData = await paraSwap.getLimitOrderStatusAndAmountFilled(
      order
    );

    expect(orderExtraData).toMatchInlineSnapshot(`
      Object {
        "amountFilled": "50000000000000000",
        "status": "canceled",
        "transactionHashes": Array [
          "0x2d544b7d2cc0f57de2cf51cecd3c975915e33030e33e28ffdd8ebe7e52c7866c",
          "0x107b94c8979d3a7e4e0856bff52e00a57a71f9c0664a79a4e884a3127e666f9e",
          "0xcd6ceb51f996480ab484907bfd79439dea302e8b6e987c90e905075335fdc9e5",
        ],
      }
    `);
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

    const orders = await paraSwap.getRawLimitOrders({ maker: account });

    const selectedOrders = orders.filter((order) =>
      orderHashes.includes(order.orderHash)
    );

    // all orderHashes should be found
    expect(orderHashes.length).toEqual(selectedOrders.length);

    const ordersExtraData = await paraSwap.getLimitOrdersStatusAndAmountFilled(
      orderHashes.map((orderHash) => ({
        expiry: orderExpiry,
        makerAmount: '100000000',
        orderHash,
        maker: senderAddress,
        taker: ZERO_ADDRESS,
      }))
    );
    expect(ordersExtraData).toMatchInlineSnapshot(`
      Array [
        Object {
          "amountFilled": "0",
          "status": "open",
        },
        Object {
          "amountFilled": "0",
          "status": "open",
        },
      ]
    `);
    console.log('🚀 ~ ordersExtraData', ordersExtraData);
  });
});

function calculateOrderHash({
  domain,
  types,
  data,
}: SignableOrderData): string {
  return ethers.utils._TypedDataEncoder.hash(domain, types, data);
}
