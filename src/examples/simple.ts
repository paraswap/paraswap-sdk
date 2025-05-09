/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { ethers, Wallet } from 'ethersV5';
import {
  constructSimpleSDK,
  ContractMethod,
  SwapSide,
  SimpleSDKProviderOptions,
} from '..';

const provider = ethers.getDefaultProvider(1);
const signer = Wallet.createRandom().connect(provider);
// only methods that fetch from API
const simpleFetchOnlySDK = constructSimpleSDK({ chainId: 1, axios });

const DAI_TOKEN = '0x6b175474e89094c44da98b954eedeac495271d0f';
const USDC_TOKEN = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';

const account = signer.address;

// type Promise<OptimalRate>
const rateRes = simpleFetchOnlySDK.swap.getRate({
  srcToken: DAI_TOKEN,
  destToken: USDC_TOKEN,
  amount: '1000000000000',
  userAddress: account,
  side: SwapSide.SELL,
});

const providerOptions: SimpleSDKProviderOptions = {
  ethersProviderOrSigner: signer,
  EthersContract: ethers.Contract,
  account,
};

const SDKwithApprove = constructSimpleSDK(
  { chainId: 1, axios },
  providerOptions
);

const approveTxHash = SDKwithApprove.swap.approveToken(
  '1000000000000',
  DAI_TOKEN
);
