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

// const ETH = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
const DAI = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
const HEX = '0x2b591e99afe9f32eaa6214f7b7629768c40eeb39';

// const DUMMY_ADDRESS_FOR_TESTING_ORDERS =
//   '0xb9A079479A7b0F4E7F398F7ED3946bE6d9a40E79';

const PROVIDER_URL = process.env.PROVIDER_URL;
const network = 1;
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
    CancelLimitOrderFunctions<ethers.ContractTransaction>;

  let orderInput: BuildLimitOrderInput;
  const orderExpiry = new Date('12.20.2022').getTime();

  let erc20Token1: Contract;
  let erc20Token2: Contract;

  let AugustusRFQ: Contract;

  let initialChainId2verifyingContract = { ...chainId2verifyingContract };

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
    ) => CancelLimitOrderFunctions<ethers.ContractTransaction>;

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
    const signableOrderData = paraSwap.buildLimitOrder(orderInput);

    expect(signableOrderData.data.maker).toBe(senderAddress);
    expect(signableOrderData.data.expiry).toBe(orderExpiry);

    expect(signableOrderData).toMatchSnapshot('Order_Data_Snapshot');
  });

  test('signLimitOrder', async () => {
    const signableOrderData = paraSwap.buildLimitOrder(orderInput);

    const signature = await paraSwap.signLimitOrder(signableOrderData);
    expect(signature).toMatchInlineSnapshot(
      `"0x6c03f1b5d40c19ba2adf25d8edc2afaa0e3100dd9173550aa2c1a9890ae79a516d2944b6204354f0437a0c5aa918521df42d5373772edf6f7a8f548fabb6892f1c"`
    );
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

    await erc20Token1.connect(maker).approve(AugustusRFQ.address, makerAmount);
    await erc20Token2.connect(taker).approve(AugustusRFQ.address, takerAmount);

    console.log('signature', signature, 'order', signableOrderData.data);

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
      constructFillLimitOrder
    );

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
});
