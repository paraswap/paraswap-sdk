import * as dotenv from 'dotenv';
import Web3 from 'web3';
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
import hre from 'hardhat';

import { constructSimpleSDK, SimpleSDK } from '../src/sdk/simple';

dotenv.config();

jest.setTimeout(30 * 1000);

const PROVIDER_URL = process.env.PROVIDER_URL;
const chainId = 1;

const wallet = ethers.Wallet.createRandom();

const web3provider = new Web3(hre.network.provider as any);

const ethersProvider = new ethers.providers.Web3Provider(
  hre.network.provider as any
);

const signer = wallet.connect(ethersProvider);
const senderAddress = signer.address as Hex;

const viemTestClient = createTestClient({
  chain: hardhat,
  mode: 'hardhat',
  transport: custom(hre.network.provider),
  // transport: http(),
  // transport: http('http://localhost:8545'),
  // transport: custom(ganacheProvider),
}).extend(publicActions);

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
  let SDKwithViem: SimpleSDK;

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

  test('approval with viem', async () => {
    const allowance1 = await getDaiAllowance();

    console.log('allowance1', allowance1);
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

  test.only('signOrder', async () => {
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
      `"0x8db9e56aad09db63873ee92eade2fcf3f7071dfee3cfacc58643888d3c1bd02e4c4a0171f54ac309441ff84887de9312fa76a7fe55aeb0f12d02e0eee1d063ef1b"`
    );
    expect(ethersSignature).toEqual(viemSignature);
  });
});
