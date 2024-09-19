import * as dotenv from 'dotenv';
import Web3 from 'web3';
import { BigNumber as BigNumberEthers, ethers } from 'ethers';
import axios from 'axios';
import fetch from 'isomorphic-unfetch';
import { isAllowance, SwapSide, SimpleFetchSDK } from '../src';
import BigNumber from 'bignumber.js';

import {
  createTestClient,
  custom,
  Hex,
  http,
  publicActions,
  walletActions,
  defineChain,
  parseEther,
  createWalletClient,
} from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { hardhat, localhost } from 'viem/chains';

import erc20abi from './abi/ERC20.json';

import ganache from 'ganache';
import hre from 'hardhat';
import { assert } from 'ts-essentials';

import { constructSimpleSDK, SimpleSDK } from '../src/sdk/simple';

// hre.network.config.accounts = 'remote';

dotenv.config();

jest.setTimeout(30 * 1000);

declare let process: any;

const ETH = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
const DAI = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
// const HEX = '0x2b591e99afe9f32eaa6214f7b7629768c40eeb39';

const DUMMY_ADDRESS_FOR_TESTING_ALLOWANCES =
  '0xb9A079479A7b0F4E7F398F7ED3946bE6d9a40E79';

const PROVIDER_URL = process.env.PROVIDER_URL;
const chainId = 1;
const srcToken = ETH;
const destToken = DAI;
const srcAmount = (1 * 1e18).toString(); //The source amount multiplied by its decimals

const referrer = 'sdk-test';

const wallet = ethers.Wallet.createRandom();
const wallet2 = ethers.Wallet.createRandom();

// hre.network.provider.request({method: "hardhat_impersonateAccount", params: [wallet.address]});
// hre.config

/* const ganacheProvider = ganache.provider({
  wallet: {
    accounts: [{ balance: 8e18, secretKey: wallet.privateKey }],
  },
  fork: {
    url: PROVIDER_URL,
  },
  chain: {
    chainId,
  },
  logging: {
    // quiet: true,
    quiet: false,
  },
}); */

const web3provider = new Web3(hre.network.provider as any);

const ethersProvider = new ethers.providers.Web3Provider(
  hre.network.provider as any
);

const signer = wallet.connect(ethersProvider);
const senderAddress = signer.address as Hex;
console.log('🚀 ~ senderAddress:', senderAddress);

const ganacheChain = defineChain({
  ...localhost, // same rpcUrl=http://127.0.0.1:8545
  name: 'Ganache',
  id: chainId,
});

const viemTestClient = createTestClient({
  chain: hardhat,
  mode: 'hardhat',
  transport: custom(hre.network.provider),
  // transport: http(),
  // transport: http('http://localhost:8545'),
  // transport: custom(ganacheProvider),
})
  .extend(publicActions)
  .extend(walletActions);

const viewWalletClient = createWalletClient({
  // either walletClient needs to have account set at creation
  // or provider must own the account (for testing can `await viemTestClient.impersonateAccount({ address: senderAddress });`)
  // to be able to sign transactions
  account: privateKeyToAccount(wallet.privateKey as Hex),
  chain: hardhat,
  transport: custom(hre.network.provider),
});

describe('ParaSwap SDK: contract calling methods', () => {
  let SDKwithEthers: SimpleSDK;
  let SDKwithWeb3: SimpleSDK;
  let SDKwithViem: SimpleSDK;

  const DAI = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
  const HEX = '0x2b591e99afe9f32eaa6214f7b7629768c40eeb39';
  const WETH = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';
  const BAT = '0x0d8775f648430679a709e98d2b0cb6250d2887ef';

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
    await hre.network.provider.request({
      method: 'hardhat_reset',
      params: [
        {
          forking: {
            jsonRpcUrl: PROVIDER_URL,
            // Optionally, specify the block number
            // blockNumber: 12345678,
          },
          // chainId: 1, // Set to Ethereum Mainnet's chainId
        },
      ],
    });

    await viemTestClient.setBalance({
      address: senderAddress as Hex,
      value: parseEther('10'),
    });

    SDKwithEthers = constructSimpleSDK(
      {
        chainId,
        axios,
        // version: '5',
      },
      {
        ethersProviderOrSigner: signer,
        EthersContract: ethers.Contract,
        account: senderAddress,
      }
    );

    SDKwithWeb3 = constructSimpleSDK(
      {
        chainId,
        axios,
        // version: '5',
      },
      { web3: web3provider, account: senderAddress }
    );

    const client: Pick<typeof viemTestClient, 'writeContract'> = {
      writeContract: (options) => {
        console.log('🚀 ~ writeContract', options);
        return viemTestClient.writeContract(options);
      },
    };

    SDKwithViem = constructSimpleSDK(
      {
        chainId,
        axios,
        // version: '5',
      },
      {
        viemClient: viewWalletClient,
        account: senderAddress,
      }
    );

    spender = (await SDKwithEthers.swap.getSpender()) as Hex;
  });

  async function getDaiAllowance() {
    const allowance = await viemTestClient.readContract({
      address: DAI as Hex,
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
      args: [senderAddress as Hex, spender as Hex],
    });

    return allowance;
  }

  test('read stuff', async () => {
    const balance = await viemTestClient.getBalance({
      address: senderAddress as Hex,
    });
    expect(balance).toEqual(parseEther('1'));
  });
  test('send ETH', async () => {
    const balance1 = await viemTestClient.getBalance({
      address: senderAddress as Hex,
    });

    const txHash = await viemTestClient.sendTransaction({
      to: wallet2.address as Hex,
      value: parseEther('0.1'),
    } as any);

    await viemTestClient.waitForTransactionReceipt({
      hash: txHash,
    });

    const balance2 = await viemTestClient.getBalance({
      address: senderAddress as Hex,
    });

    const balance3 = await viemTestClient.getBalance({
      address: wallet2.address as Hex,
    });

    expect(Number(balance1 - parseEther('0.1'))).toBeGreaterThan(
      Number(balance2)
    );
    expect(balance3).toEqual(parseEther('0.1'));
  });

  test('approval with ethers', async () => {
    const snapshotId = await viemTestClient.snapshot();
    const spender = await SDKwithEthers.swap.getSpender();

    const allowance1 = await viemTestClient.readContract({
      address: DAI as Hex,
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
      args: [senderAddress as Hex, spender as Hex],
    });

    console.log('allowance1', allowance1);
    expect(allowance1).toEqual(0n);

    const ethersTxHash = await SDKwithEthers.swap.approveToken('12345', DAI);

    await viemTestClient.waitForTransactionReceipt({
      hash: ethersTxHash as Hex,
    });

    const allowance2 = await viemTestClient.readContract({
      address: DAI as Hex,
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
      args: [senderAddress as Hex, spender as Hex],
    });
    console.log('🚀 ~ test.only ~ allowance2:', allowance2);

    expect(allowance2).toEqual(12345n);
    await viemTestClient.revert({ id: snapshotId });
  });
  test.only('approval with viem', async () => {
    const allowance1 = await getDaiAllowance();

    console.log('allowance1', allowance1);
    expect(allowance1).toEqual(0n);

    const txHash = await SDKwithViem.swap.approveToken('12345', DAI);

    await viemTestClient.waitForTransactionReceipt({ hash: txHash as Hex });

    const allowance2 = await getDaiAllowance();

    expect(allowance2).toEqual(12345n);
  });

  test.only('approveToken', async () => {
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

    const ethersSignature = await SDKwithEthers.limitOrders.signLimitOrder(
      signableOrderData
    );
    const web3Signature = await SDKwithWeb3.limitOrders.signLimitOrder(
      signableOrderData
    );
    const viemSignature = await SDKwithViem.limitOrders.signLimitOrder(
      signableOrderData
    );

    console.log('signatures', {
      ethersSignature,
      web3Signature,
      viemSignature,
    });
  });
});
