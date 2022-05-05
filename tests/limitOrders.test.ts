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

import { BuildLimitOrderInput } from '../src/methods/limitOrders/buildOrder';
import { assert } from 'ts-essentials';

dotenv.config();

jest.setTimeout(30 * 1000);

declare let process: any;

// const ETH = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
const DAI = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
const HEX = '0x2b591e99afe9f32eaa6214f7b7629768c40eeb39';

// const DUMMY_ADDRESS_FOR_TESTING_ORDERS =
//   '0xb9A079479A7b0F4E7F398F7ED3946bE6d9a40E79';

const PROVIDER_URL: string = process.env.PROVIDER_URL.replace(
  'mainnet',
  'ropsten'
);
const network = 3; // @TODO return to mainnet
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
    chainId: network,
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
  const orderExpiry = Math.floor(new Date('12.20.2022').getTime() / 1000);

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

    await erc20Token1.mint(walletStable.address, (10e18).toString(10));
    await erc20Token1.mint(walletRandom.address, (10e18).toString(10));
    await erc20Token2.mint(walletStable.address, (10e18).toString(10));
    await erc20Token2.mint(walletRandom.address, (10e18).toString(10));

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
        network,
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
    chainId2verifyingContract[network] = AugustusRFQ.address; // 0x0c33fC429fDCb7b0A813bEb595D36c5Fadb3CEDC
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
      `"0x9d1b0b9d2b9c5f3aaa28835579d05e9326301d8089d37bdaf5c73b85bdc5be5256c8c935a44d02189639d2487749f6b258423e868963efea32496510359e768a1b"`
    );

    const presumedOrderHash = calculateOrderHash(signableOrderData);

    expect(ethers.utils.recoverAddress(presumedOrderHash, signature)).toEqual(
      senderAddress
    );
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
      { network, contractCaller: takerContractCaller, fetcher: axiosFetcher },
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

  test('getOrderStatus', async () => {
    // order that should not change anymore
    const orderHash =
      '0x54c588bd7c47c6d382ea24de9a1aca5375514da4baae84d5ba401979c6d4019b';
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
      { network: 3, fetcher: axiosFetcher, contractCaller },
      constructGetLimitOrders
    );

    const orders = await paraSwap.getRawLimitOrders(account);

    const order = orders.find((order) => order.orderHash === orderHash);

    assert(order, `must have an order with orderHash ${orderHash}`);

    const orderExtraData = await paraSwap.getLimitOrderStatusAndAmountFilled(
      account,
      order
    );

    expect(orderExtraData).toMatchInlineSnapshot(`
      Object {
        "amountFilled": "1000000000000000000",
        "status": "canceled",
        "transactionHashes": Array [
          "0x123312868fa1201f029b9fabfa485d24738459a65c41563869a9f6cd134c2fe2",
        ],
      }
    `);
  });

  test('getOrdersStatus', async () => {
    // orders that should not change anymore
    const orderHashes = [
      '0x54c588bd7c47c6d382ea24de9a1aca5375514da4baae84d5ba401979c6d4019b',
      '0x7439ebc1766075e4bd12776baed3c272538a858d8f01ebf94438b205eec4e6da',
      '0x0086663f44b3a8b250a8d2f9cb98c4281da3a83cb2d743fb650ea5c8aa84bc03',
      '0x04ccb2face97aae119c712bf14dfae675ea3ba9a195b046e89ac255fd85f38bc',
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
      { network, fetcher: axiosFetcher, contractCaller },
      constructGetLimitOrders
    );

    const orders = await paraSwap.getRawLimitOrders(account);

    const selectedOrders = orders.filter((order) =>
      orderHashes.includes(order.orderHash)
    );

    // all orderHashes should be found
    expect(orderHashes.length).toEqual(selectedOrders.length);

    const ordersExtraData = await paraSwap.getLimitOrdersStatusAndAmountFilled(
      account,
      orderHashes.map((orderHash) => ({
        expiry: orderExpiry,
        makerAmount: '100000000',
        orderHash,
      }))
    );
    expect(ordersExtraData).toMatchInlineSnapshot(`
      Array [
        Object {
          "amountFilled": "100000000",
          "status": "canceled",
          "transactionHashes": Array [
            "0x123312868fa1201f029b9fabfa485d24738459a65c41563869a9f6cd134c2fe2",
          ],
        },
        Object {
          "amountFilled": "100000000",
          "status": "canceled",
          "transactionHashes": Array [
            "0x3b158b11455ef3a84dacada5932c9f65f1966c29af65eb11e193ab07b0e089f8",
          ],
        },
        Object {
          "amountFilled": "100000000",
          "status": "canceled",
          "transactionHashes": Array [
            "0x896f579d71f588f95f4957c4f59a3dfbc6810b9a2ddb3fff0c3084504e28c9dd",
          ],
        },
        Object {
          "amountFilled": "100000000",
          "status": "canceled",
          "transactionHashes": Array [
            "0xf4122de565f18a812c74451c5945397ce4e859e1ef6125e6f8f6c413e90ace95",
          ],
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
