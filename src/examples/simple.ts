/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { ethers } from 'ethers';
import { constructSimpleSDK, SwapSide } from '..';

// only methods that fetch from API
const simpleFetchOnlySDK = constructSimpleSDK({ chainId: 1, axios });

const account = '0x...';

// type Promise<OptimalRate>
const rateRes = simpleFetchOnlySDK.swap.getRate({
  srcToken: '0x...',
  destToken: '0x...',
  amount: '1000000000000',
  userAddress: account,
  side: SwapSide.SELL,
});

const provider = ethers.getDefaultProvider(1);
const providerOptions = {
  ethersProviderOrSigner: provider,
  EthersContract: ethers.Contract,
  account,
};

const SDKwithApprove = constructSimpleSDK(
  { chainId: 1, axios },
  providerOptions
);

// type Promise<TxHash>
const approveTxHash = SDKwithApprove.swap.approveToken(
  '1000000000000',
  '0x...'
);
