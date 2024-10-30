import * as dotenv from 'dotenv';
import axios from 'axios';
import {
  createTevmTransport,
  createMemoryClient,
  http,
  tevmSetAccount,
  tevmMine,
} from 'tevm';
import { mainnet } from 'tevm/common';
import {
  createTestClient,
  createClient,
  publicActions,
  createWalletClient,
  parseEther,
  Hex,
  getContract,
} from 'viem';
import {
  constructSimpleSDK,
  SimpleSDK,
  txParamsToViemTxParams,
} from '../src/index';
import { privateKeyToAccount, mnemonicToAccount } from 'viem/accounts';
import { ethers } from 'ethers';
import BigNumber from 'bignumber.js';

dotenv.config();

jest.setTimeout(30 * 1000);

const memClient = createMemoryClient({
  fork: {
    transport: http(process.env.PROVIDER_URL)({}),
  },
  common: mainnet,
});

const transport = createTevmTransport({
  fork: {
    transport: http(process.env.PROVIDER_URL)({}),
  },
  // miningConfig: { type: 'auto' }, doesn't seem to work, have to tevmMine() manually
  common: mainnet,
});
const viemClient = createClient({
  transport,
  chain: mainnet,
}).extend(publicActions);

const TEST_MNEMONIC =
  'radar blur cabbage chef fix engine embark joy scheme fiction master release';

const account = mnemonicToAccount(TEST_MNEMONIC);
const viemWalletClient = createWalletClient({
  // either walletClient needs to have account set at creation
  // or provider must own the account (for testing can `await viemTestClient.impersonateAccount({ address: senderAddress });`)
  // to be able to sign transactions
  account,
  chain: mainnet,
  transport: transport,
  // transport: custom(provider),
});

const EthersWallet = ethers.Wallet.fromMnemonic(TEST_MNEMONIC);
const ethersProvider = new ethers.providers.Web3Provider(
  viemWalletClient as any
);

const signer = EthersWallet.connect(ethersProvider);

const chainId = mainnet.id;

const senderAddress = account.address;

describe('tevm', () => {
  let SDKwithViem: SimpleSDK;
  let SDKwithEthers: SimpleSDK;

  const ETH = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
  const DAI = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
  const HEX = '0x2b591e99afe9f32eaa6214f7b7629768c40eeb39';

  const srcToken = DAI;
  const destToken = HEX;

  //                                        UTC format
  const orderExpiry = Math.floor(new Date('2025-12-20').getTime() / 1000);

  const orderInput = {
    nonce: 1,
    expiry: orderExpiry,
    makerAsset: srcToken,
    takerAsset: destToken,
    makerAmount: (1e18).toString(10),
    takerAmount: (8e18).toString(10),
    maker: senderAddress,
  };

  let spender: Hex;

  const DAIContract = getContract({
    address: DAI,
    abi: [
      {
        constant: true,
        inputs: [
          { name: '_owner', type: 'address' },
          { name: '_spender', type: 'address' },
        ],
        name: 'allowance',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [{ name: '_owner', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ name: 'balance', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
    ],
    client: { public: viemClient, wallet: viemWalletClient },
  });

  beforeAll(async () => {
    // await startFork();

    // await viemTestClient.setBalance({
    //   address: senderAddress,
    //   value: parseEther('10'),
    // });

    await tevmSetAccount(viemClient, {
      address: senderAddress,
      balance: parseEther('10'),
    });

    SDKwithViem = constructSimpleSDK(
      {
        chainId,
        axios,
        version: '6.2',
      },
      {
        viemClient: viemWalletClient,
        account: senderAddress,
      }
    );

    SDKwithEthers = constructSimpleSDK(
      {
        chainId,
        axios,
        version: '6.2',
      },
      {
        ethersProviderOrSigner: signer,
        EthersContract: ethers.Contract,
        account: senderAddress,
      }
    );

    // spender = '0x6a000f20005980200259b80c5102003040001068';
    spender = (await SDKwithViem.swap.getSpender()) as Hex;
  });

  test('get chainId from memoryClient', async () => {
    const chainId = await memClient.getChainId();
    expect(chainId).toBe(1);
  });
  test('get chainId from viemClient', async () => {
    const chainId = await viemClient.getChainId();
    expect(chainId).toBe(1);
  });

  test('check balance', async () => {
    const balance = await viemClient.getBalance({ address: senderAddress });

    expect(balance).toBe(parseEther('10'));
  });

  test('approval with viem', async () => {
    const allowance1 = await getDaiAllowance();

    expect(allowance1).toEqual(0n);

    const txHash = await SDKwithViem.swap.approveToken('12345', DAI);

    await tevmMine(viemClient);

    await viemClient.waitForTransactionReceipt({ hash: txHash });

    const allowance2 = await getDaiAllowance();

    expect(allowance2).toEqual(12345n);
  });

  test('approveToken', async () => {
    const ethersTxHash = await SDKwithEthers.swap.approveToken('123456', DAI);
    await tevmMine(viemClient);
    await viemClient.waitForTransactionReceipt({
      hash: ethersTxHash,
    });
    const allowance1 = await getDaiAllowance();
    expect(allowance1).toEqual(123456n);

    const viemTxHash = await SDKwithViem.swap.approveToken('1234567', DAI);
    await tevmMine(viemClient);
    await viemClient.waitForTransactionReceipt({ hash: viemTxHash });

    const allowance2 = await getDaiAllowance();
    expect(allowance2).toEqual(1234567n);
  });

  test('signOrder', async () => {
    const signableOrderData = await SDKwithEthers.limitOrders.buildLimitOrder(
      orderInput
    );

    expect(signableOrderData).toMatchSnapshot('LimitOrder to sign');

    const ethersSignature = await SDKwithEthers.limitOrders.signLimitOrder(
      signableOrderData
    );

    const viemSignature = await SDKwithViem.limitOrders.signLimitOrder(
      signableOrderData
    );

    expect(viemSignature).toMatchInlineSnapshot(
      `"0x18b022691daab1d8a3486aab5a006f2e98932b1c2fe4f04726c766e7a4e6d4935cbbf6d03ef945f23bef5cf4e250086f14581b1b8097f6c3ffd62653c8b2454b1b"`
    );
    expect(ethersSignature).toEqual(viemSignature);
  });

  test.only('market swap', async () => {
    const srcAmount = (1 * 1e18).toString();
    const srcToken = ETH;
    const destToken = DAI;
    const userAddress = senderAddress;

    const priceRoute = await SDKwithViem.swap.getRate({
      srcToken,
      destToken,
      amount: srcAmount,
      userAddress,
      options: {
        includeDEXS: ['Uniswap', 'UniswapV2', 'Balancer'],
      },
    });

    const destAmount = new BigNumber(priceRoute.destAmount)
      .times(0.99) // slippage 1%
      .toFixed(0);

    const txParams = await SDKwithViem.swap.buildTx(
      {
        srcToken,
        destToken,
        srcAmount,
        destAmount,
        priceRoute,
        userAddress,
      },
      { ignoreChecks: true }
    );

    const viemTxParams = txParamsToViemTxParams(txParams);

    const balanceDAI1 = await getDaiBalance();
    expect(balanceDAI1).toEqual(0n);
    const balanceETH1 = await viemClient.getBalance({
      address: senderAddress,
    });

    console.error('viemTxParams', viemTxParams);
    // @ts-expect-error sdds
    delete viemTxParams.gasPrice;
    const txHash = await viemWalletClient.sendTransaction(viemTxParams);
    await tevmMine(viemClient); // tx silently fails
    const receipt = await viemClient.waitForTransactionReceipt({
      hash: txHash,
    });

    console.error('🚀 ~ test.only ~ receipt:', receipt);
    const balanceDAI2 = await getDaiBalance();
    // destAmount + a bit more if lucky enough
    expect(balanceDAI2).toBeGreaterThanOrEqual(BigInt(destAmount));

    const balanceETH2 = await viemClient.getBalance({
      address: senderAddress,
    });
    // bal1 - srcAmount - some gas
    expect(balanceETH2).toBeLessThan(balanceETH1 - BigInt(srcAmount));
  }, 1200000);

  async function getDaiAllowance() {
    const allowance = await DAIContract.read.allowance([
      senderAddress,
      spender,
    ]);

    return allowance;
  }

  async function getDaiBalance() {
    const balance = await DAIContract.read.balanceOf([senderAddress]);

    return balance;
  }
});
