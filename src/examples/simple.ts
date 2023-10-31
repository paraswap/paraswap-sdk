/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { ethers, Wallet } from 'ethers';
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
const PSP_TOKEN = '0xcafe001067cdef266afb7eb5a286dcfd277f3de5';

const account = signer.address;

// type Promise<OptimalRate>
const rateRes = simpleFetchOnlySDK.swap.getRate({
  srcToken: DAI_TOKEN,
  destToken: PSP_TOKEN,
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
  PSP_TOKEN
);
