/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { ethers } from 'ethersV5';
import {
  constructPartialSDK,
  constructFullSDK,
  constructGetAdapters,
  constructEthersV5ContractCaller,
  constructAxiosFetcher,
} from '..';

const fetcher = constructAxiosFetcher(axios);

const provider = ethers.getDefaultProvider(1);
const contractCaller = constructEthersV5ContractCaller({
  ethersProviderOrSigner: provider,
  EthersContract: ethers.Contract,
});

const paraswap = constructFullSDK({
  apiURL: '',
  chainId: 1,
  fetcher,
  contractCaller,
});

const res = paraswap.swap.getAdapters();

// type Promise<ContractTransaction>
const txResponse = paraswap.swap.approveToken('1', '0x...');
// type Promise<ContractTransaction[]>
const txResponses = paraswap.swap.approveTokenBulk('1', ['0x...']);

const partial = constructPartialSDK(
  { apiURL: '', chainId: 1, fetcher },
  constructGetAdapters
);

const res1 = partial.getAdapters();
