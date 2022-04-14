/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { ethers } from 'ethers';
import {
  constructPartialSDK,
  constructFullSDK,
  constructGetAdapters,
  constructEthersContractCaller,
  constructAxiosFetcher,
} from '..';

const fetcher = constructAxiosFetcher(axios);

const provider = ethers.getDefaultProvider(1);
const contractCaller = constructEthersContractCaller({
  ethersProviderOrSigner: provider,
  EthersContract: ethers.Contract,
});

const paraswap = constructFullSDK({
  apiURL: '',
  network: 1,
  fetcher,
  contractCaller,
});

const res = paraswap.getAdapters({ type: 'list', namesOnly: false });

// type Promise<ContractTransaction>
const txResponse = paraswap.approveToken('1', '0x...');
// type Promise<ContractTransaction[]>
const txResponses = paraswap.approveTokenBulk('1', ['0x...']);

const part1 = constructPartialSDK(
  { apiURL: '', network: 1, fetcher },
  constructGetAdapters
);

const res1 = part1.getAdapters({ type: 'object' });
