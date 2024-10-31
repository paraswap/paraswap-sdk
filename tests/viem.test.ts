import * as dotenv from 'dotenv';
import { ethers } from 'ethers';
import axios from 'axios';
import {
  createTestClient,
  custom,
  Hex,
  publicActions,
  parseEther,
  createWalletClient,
} from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { hardhat } from 'viem/chains';

import { constructSimpleSDK, SimpleSDK } from '../src/sdk/simple';
import BigNumber from 'bignumber.js';
import { txParamsToViemTxParams } from '../src/helpers';
import { HardhatProvider } from './helpers/hardhat';

dotenv.config();

jest.setTimeout(30 * 1000);

const chainId = 1;

const TEST_MNEMONIC =
  'radar blur cabbage chef fix engine embark joy scheme fiction master release';
const wallet = ethers.Wallet.fromMnemonic(TEST_MNEMONIC);

const ethersProvider = new ethers.providers.Web3Provider(
  HardhatProvider as any
);

const signer = wallet.connect(ethersProvider);
const senderAddress = signer.address as Hex;

const viemTestClient = createTestClient({
  chain: { ...hardhat, id: chainId }, // may need to override chainId
  mode: 'hardhat',
  transport: custom(HardhatProvider),
}).extend(publicActions);

const viemWalletClient = createWalletClient({
  // either walletClient needs to have account set at creation
  // or provider must own the account (for testing can `await viemTestClient.impersonateAccount({ address: senderAddress });`)
  // to be able to sign transactions
  account: privateKeyToAccount(wallet.privateKey as Hex),
  chain: { ...hardhat, id: chainId },
  transport: custom(HardhatProvider),
});

describe('ParaSwap SDK: contract calling methods', () => {
  let SDKwithEthers: SimpleSDK;
  let SDKwithViem: SimpleSDK;

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

  beforeAll(async () => {
    await viemTestClient.setBalance({
      address: senderAddress,
      value: parseEther('10'),
    });

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

    spender = (await SDKwithEthers.swap.getSpender()) as Hex;
  });

  async function getDaiAllowance() {
    const allowance = await viemTestClient.readContract({
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
      ],
      functionName: 'allowance',
      args: [senderAddress, spender],
    });

    return allowance;
  }

  async function getDaiBalance() {
    const balance = await viemTestClient.readContract({
      address: DAI,
      abi: [
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
      functionName: 'balanceOf',
      args: [senderAddress],
    });

    return balance;
  }

  test('approval with viem', async () => {
    const allowance1 = await getDaiAllowance();

    expect(allowance1).toEqual(0n);

    const txHash = await SDKwithViem.swap.approveToken('12345', DAI);

    await viemTestClient.waitForTransactionReceipt({ hash: txHash as Hex });

    const allowance2 = await getDaiAllowance();

    expect(allowance2).toEqual(12345n);
  });

  test('approveToken', async () => {
    const ethersTxHash = await SDKwithEthers.swap.approveToken('12345', DAI);
    await viemTestClient.waitForTransactionReceipt({
      hash: ethersTxHash as Hex,
    });
    const allowance1 = await getDaiAllowance();
    expect(allowance1).toEqual(12345n);

    const viemTxHash = await SDKwithViem.swap.approveToken('1234567', DAI);
    await viemTestClient.waitForTransactionReceipt({ hash: viemTxHash });

    const allowance2 = await getDaiAllowance();
    expect(allowance2).toEqual(1234567n);
  }, 120000);

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

  test('market swap', async () => {
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
    const balanceETH1 = await viemTestClient.getBalance({
      address: senderAddress,
    });

    const txHash = await viemWalletClient.sendTransaction(viemTxParams);
    await viemTestClient.waitForTransactionReceipt({
      hash: txHash,
    });

    const balanceDAI2 = await getDaiBalance();
    // destAmount + a bit more if lucky enough
    expect(balanceDAI2).toBeGreaterThanOrEqual(BigInt(destAmount));

    const balanceETH2 = await viemTestClient.getBalance({
      address: senderAddress,
    });
    // bal1 - srcAmount - some gas
    expect(balanceETH2).toBeLessThan(balanceETH1 - BigInt(srcAmount));
  });
});
