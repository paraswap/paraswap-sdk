import * as dotenv from 'dotenv';
import Web3 from 'web3';
import { ethers } from 'ethersV5';
import { ethers as ethersV6 } from 'ethers';
import fetch from 'isomorphic-unfetch';
import {
  constructEthersV5ContractCaller,
  constructEthersV6ContractCaller,
  constructFetchFetcher,
  constructPartialSDK,
  constructWeb3ContractCaller,
  constructGetDeltaContract,
  constructGetDeltaOrders,
  constructGetDeltaPrice,
  constructBuildDeltaOrder,
  constructApproveTokenForDelta,
  constructSignDeltaOrder,
  constructViemContractCaller,
  constructGetPartnerFee,
  SignableDeltaOrderData,
  DeltaPrice,
  constructPostDeltaOrder,
  constructSubmitDeltaOrder,
  PostDeltaOrderParams,
  FetcherFunction,
} from '../src';
import BigNumber from 'bignumber.js';

import erc20abi from './abi/ERC20.json';

import { assert } from 'ts-essentials';
import { HardhatProvider } from './helpers/hardhat';
import { privateKeyToAccount } from 'viem/accounts';
import { createWalletClient, custom, Hex } from 'viem';
import { hardhat } from 'viem/chains';
import { ZERO_ADDRESS } from '../src/methods/common/orders/buildOrderData';

dotenv.config();

jest.setTimeout(30 * 1000);

const WETH = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';
const DAI = '0x6B175474E89094C44Da98b954EedeAC495271d0F';

const chainId = 1;
const srcToken = WETH;
const destToken = DAI;
const srcAmount = (1 * 1e18).toString(); //The source amount multiplied by its decimals

const TEST_MNEMONIC =
  'radar blur cabbage chef fix engine embark joy scheme fiction master release';
//0xaC39b311DCEb2A4b2f5d8461c1cdaF756F4F7Ae9
const wallet = ethers.Wallet.fromMnemonic(TEST_MNEMONIC);
const walletV6 = ethersV6.HDNodeWallet.fromPhrase(TEST_MNEMONIC);

const web3provider = new Web3(HardhatProvider as any);

const ethersProvider = new ethers.providers.Web3Provider(
  HardhatProvider as any
);

const ethersV6Provider = new ethersV6.BrowserProvider(HardhatProvider);
const signerV6 = walletV6.connect(ethersV6Provider);

const fetchFetcher = constructFetchFetcher(fetch);

const signer = wallet.connect(ethersProvider);
const senderAddress = signer.address;

const viemWalletClient = createWalletClient({
  // either walletClient needs to have account set at creation
  // or provider must own the account (for testing can `await viemTestClient.impersonateAccount({ address: senderAddress });`)
  // to be able to sign transactions
  account: privateKeyToAccount(wallet.privateKey as Hex),
  chain: { ...hardhat, id: chainId },
  transport: custom(HardhatProvider),
});

const ethersV5ContractCaller = constructEthersV5ContractCaller(
  {
    ethersProviderOrSigner: signer,
    EthersContract: ethers.Contract,
  },
  senderAddress
);

const ethersV6ContractCaller = constructEthersV6ContractCaller(
  {
    ethersV6ProviderOrSigner: signerV6,
    EthersV6Contract: ethersV6.Contract,
  },
  senderAddress
);

const web3ContractCaller = constructWeb3ContractCaller(
  web3provider,
  senderAddress
);

const viemContractCaller = constructViemContractCaller(
  viemWalletClient,
  senderAddress
);

describe('Delta:methods', () => {
  const deltaSDK = constructPartialSDK(
    {
      chainId: 1,
      fetcher: fetchFetcher,
      contractCaller: ethersV5ContractCaller,
    },
    constructGetDeltaContract,
    constructGetDeltaOrders,
    constructGetDeltaPrice,
    constructBuildDeltaOrder,
    constructApproveTokenForDelta,
    constructGetPartnerFee
  );

  test('Get Delta Price', async () => {
    const deltaPrice = await deltaSDK.getDeltaPrice({
      srcToken: srcToken,
      destToken: destToken,
      amount: srcAmount,
      userAddress: senderAddress,
      srcDecimals: 18,
      destDecimals: 18,
    });

    const staticDeltaPrice: typeof deltaPrice = {
      ...deltaPrice,
      destAmount: 'dynamic_number',
      destAmountBeforeFee: 'dynamic_number',
      srcUSD: 'dynamic_number',
      destUSD: 'dynamic_number',
      destUSDBeforeFee: 'dynamic_number',
      gasCost: 'dynamic_number',
      gasCostBeforeFee: 'dynamic_number',
      gasCostUSD: 'dynamic_number',
      gasCostUSDBeforeFee: 'dynamic_number',
      hmac: 'dynamic_string',
    };

    expect(staticDeltaPrice).toMatchSnapshot();
  });

  test('Get Delta Contract', async () => {
    const deltaContract = await deltaSDK.getDeltaContract();
    expect(deltaContract).toMatchInlineSnapshot(
      `"0x0000000000bbf5c5fd284e657f01bd000933c96d"`
    );
  });

  test('Approve Token For Delta', async () => {
    const deltaContract = await deltaSDK.getDeltaContract();
    assert(deltaContract, 'Delta contract not found');

    const allowanceBefore = await getTokenAllowance({
      tokenAddress: DAI,
      owner: senderAddress,
      spender: deltaContract,
    });

    expect(allowanceBefore.toString()).toEqual('0');

    const amount = '1000000000000000000'; // 1 DAI
    const tx = await deltaSDK.approveTokenForDelta(amount, DAI);
    expect(tx).toBeDefined();
    await tx.wait();

    const allowanceAfter = await getTokenAllowance({
      tokenAddress: DAI,
      owner: senderAddress,
      spender: deltaContract,
    });

    expect(allowanceAfter.toString()).toEqual(amount);
  });

  test('Get Delta Orders for user', async () => {
    const userWithOrders = '0x76176C2971300217E9f48E3dD4e40591500b96Ff';

    const deltaOrders = await deltaSDK.getDeltaOrders({
      userAddress: userWithOrders,
    });

    // Orders that we know the user had in the past
    const staticSliceOfPastOrders = deltaOrders.slice(-2); // first 2 orders historically
    expect(staticSliceOfPastOrders).toMatchSnapshot();
  });

  test('Get Delta Order by Id', async () => {
    const orderId = '50950528-d362-4359-a89e-ed6e49be1a20';
    const deltaOrder = await deltaSDK.getDeltaOrderById(orderId);
    expect(deltaOrder).toMatchSnapshot();
  });

  test('Get PartnerFee', async () => {
    const partnerFee = await deltaSDK.getPartnerFee({ partner: 'paraswap.io' });
    expect(partnerFee).toMatchInlineSnapshot(`
      {
        "partnerAddress": "0xc85f5d432b7fa25287c7e0cb88139a1a4c37f565",
        "partnerFee": 0.15,
        "takeSurplus": false,
      }
    `);
  });

  test('Build Delta Order', async () => {
    const sampleDeltaPrice: DeltaPrice = {
      destAmount: '3163263721766488892666',
      destAmountBeforeFee: '3194635547945152526200',
      destToken: '0x6b175474e89094c44da98b954eedeac495271d0f',
      destUSD: '3166.4269854931',
      destUSDBeforeFee: '3197.8301834931',
      gasCost: '347788',
      gasCostBeforeFee: '124240',
      gasCostUSD: '31.403198',
      gasCostUSDBeforeFee: '11.218137',
      partner: 'anon',
      partnerFee: 0,
      srcAmount: '1000000000000000000',
      srcToken: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      srcUSD: '3191.5500000000',
      hmac: '1234aeb',
    };

    const slippagePercent = 0.5;
    const destAmountAfterSlippage = decreaseBySlippage(
      sampleDeltaPrice.destAmount,
      slippagePercent
    );

    const amount = '1000000000000000000'; // 1 DAI

    const signableOrderData = await deltaSDK.buildDeltaOrder({
      deltaPrice: sampleDeltaPrice,
      owner: senderAddress,
      // beneficiary: anotherAccount, // if need to send destToken to another account
      // permit: "0x1234...", // if signed a Permit1 or Permit2 TransferFrom for DeltaContract
      srcToken: WETH,
      destToken: DAI,
      srcAmount: amount,
      destAmount: destAmountAfterSlippage, // minimum acceptable destAmount
    });

    const staticSignableOrderData: typeof signableOrderData = {
      ...signableOrderData,
      data: {
        ...signableOrderData.data,
        deadline: NaN, // dynamic number
        nonce: 'dynamic_number',
      },
    };
    expect(staticSignableOrderData).toMatchSnapshot();
  });

  let signature = '';

  test.each([
    ['ethersV5', ethersV5ContractCaller],
    ['ethersV6', ethersV6ContractCaller],
    ['web3', web3ContractCaller],
    ['viem', viemContractCaller],
  ])('sign Delta Order with %s', async (libName, contractCaller) => {
    const sdk = constructPartialSDK(
      { chainId: 1, fetcher: fetchFetcher, contractCaller },
      constructSignDeltaOrder
    );

    const sampleOrder: SignableDeltaOrderData = {
      data: {
        beneficiary: '0xaC39b311DCEb2A4b2f5d8461c1cdaF756F4F7Ae9',
        deadline: 1731328853,
        destAmount: '3147447403157656698880',
        destToken: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
        expectedDestAmount: '3163263721766488892666',
        nonce: '1731325253703',
        owner: '0xaC39b311DCEb2A4b2f5d8461c1cdaF756F4F7Ae9',
        partnerAndFee: '0',
        permit: '0x',
        srcAmount: '1000000000000000000',
        srcToken: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
        bridge: {
          maxRelayerFee: '0',
          destinationChainId: 0,
          outputToken: ZERO_ADDRESS,
        },
      },
      domain: {
        chainId: 1,
        name: 'Portikus',
        verifyingContract: '0x0000000000bbf5c5fd284e657f01bd000933c96d',
        version: '2.0.0',
      },
      types: {
        Order: [
          {
            name: 'owner',
            type: 'address',
          },
          {
            name: 'beneficiary',
            type: 'address',
          },
          {
            name: 'srcToken',
            type: 'address',
          },
          {
            name: 'destToken',
            type: 'address',
          },
          {
            name: 'srcAmount',
            type: 'uint256',
          },
          {
            name: 'destAmount',
            type: 'uint256',
          },
          {
            name: 'expectedDestAmount',
            type: 'uint256',
          },
          {
            name: 'deadline',
            type: 'uint256',
          },
          {
            name: 'nonce',
            type: 'uint256',
          },
          {
            name: 'partnerAndFee',
            type: 'uint256',
          },
          {
            name: 'permit',
            type: 'bytes',
          },
          {
            name: 'bridge',
            type: 'Bridge',
          },
        ],
        Bridge: [
          {
            name: 'maxRelayerFee',
            type: 'uint256',
          },
          {
            name: 'destinationChainId',
            type: 'uint256',
          },
          {
            name: 'outputToken',
            type: 'address',
          },
        ],
      },
    };

    const deltaOrderSignature = await sdk.signDeltaOrder(sampleOrder);
    if (!signature) signature = deltaOrderSignature;
    // signatures match between libraries
    expect(deltaOrderSignature).toEqual(signature);
  });

  const dummyFetcher: FetcherFunction = (params) => {
    // intercept POST requests
    if (params.method === 'POST') {
      return params as any;
    }

    return fetchFetcher(params);
  };

  const mockFetch = jest.fn(dummyFetcher);

  const dummySDK = constructPartialSDK(
    {
      chainId: 1,
      fetcher: mockFetch as FetcherFunction,
      contractCaller: ethersV5ContractCaller,
    },
    constructPostDeltaOrder,
    constructSubmitDeltaOrder
  );

  test('Post Delta Order', async () => {
    const sampleOrderData: SignableDeltaOrderData['data'] = {
      beneficiary: '0xaC39b311DCEb2A4b2f5d8461c1cdaF756F4F7Ae9',
      deadline: NaN, // dynamic number
      destAmount: '3147447403157656698880',
      destToken: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      expectedDestAmount: '3163263721766488892666',
      nonce: 'dynamic_number',
      owner: '0xaC39b311DCEb2A4b2f5d8461c1cdaF756F4F7Ae9',
      partnerAndFee: '0',
      permit: '0x',
      srcAmount: '1000000000000000000',
      srcToken: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      bridge: {
        maxRelayerFee: '0',
        destinationChainId: 0,
        outputToken: ZERO_ADDRESS,
      },
    };

    const sampleSignature = '0x1234....';

    const input = {
      order: sampleOrderData,
      signature: sampleSignature,
    };

    await dummySDK.postDeltaOrder(input);

    expect(mockFetch).toHaveBeenLastCalledWith({
      data: { ...input, chainId: dummySDK.chainId },
      method: 'POST',
      url: `${dummySDK.apiURL}/delta/orders`,
    });
  });

  test('Submit(=build+sign+post) Delta Order', async () => {
    const sampleDeltaPrice: DeltaPrice = {
      destAmount: '3163263721766488892666',
      destAmountBeforeFee: '3194635547945152526200',
      destToken: '0x6b175474e89094c44da98b954eedeac495271d0f',
      destUSD: '3166.4269854931',
      destUSDBeforeFee: '3197.8301834931',
      gasCost: '347788',
      gasCostBeforeFee: '124240',
      gasCostUSD: '31.403198',
      gasCostUSDBeforeFee: '11.218137',
      partner: 'anon',
      partnerFee: 0,
      srcAmount: '1000000000000000000',
      srcToken: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      srcUSD: '3191.5500000000',
      hmac: '1234aeb',
    };

    const slippagePercent = 0.5;
    const destAmountAfterSlippage = decreaseBySlippage(
      sampleDeltaPrice.destAmount,
      slippagePercent
    );

    const amount = '1000000000000000000'; // 1 DAI

    const input = {
      deltaPrice: sampleDeltaPrice,
      owner: senderAddress,
      // beneficiary: anotherAccount, // if need to send destToken to another account
      // permit: "0x1234...", // if signed a Permit1 or Permit2 TransferFrom for DeltaContract
      srcToken: WETH,
      destToken: DAI,
      srcAmount: amount,
      destAmount: destAmountAfterSlippage, // minimum acceptable destAmount
    };

    await dummySDK.submitDeltaOrder(input);

    const callArgs = mockFetch.mock.lastCall?.[0];
    assert(callArgs, 'No fetch call was made');
    assert('data' in callArgs, 'No data was sent in the fetch call');
    const { order, signature } = callArgs.data as PostDeltaOrderParams;

    expect(signature).toBeDefined();

    const staticSignedOrderData: SignableDeltaOrderData['data'] = {
      ...order,
      deadline: NaN, // dynamic number
      nonce: 'dynamic_number',
    };

    expect(staticSignedOrderData).toMatchSnapshot();
  });
});

function getTokenAllowance({
  tokenAddress,
  owner,
  spender,
}: {
  tokenAddress: string;
  owner: string;
  spender: string;
}): Promise<BigNumber> {
  const contract = new ethers.Contract(tokenAddress, erc20abi, signer);
  return contract.allowance(owner, spender);
}

function decreaseBySlippage(amount: string, slippagePercent: number): string {
  const amountAfterSlippage = BigInt(
    +(+amount * (1 - slippagePercent / 100)).toFixed(0)
  ).toString(10);

  return amountAfterSlippage;
}
