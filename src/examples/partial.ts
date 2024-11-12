/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { ethers } from 'ethersV5';
import {
  constructPartialSDK,
  constructGetAdapters,
  constructApproveToken,
  constructEthersContractCaller,
  constructAxiosFetcher,
} from '..';

const fetcher = constructAxiosFetcher(axios);

const provider = ethers.getDefaultProvider(1);
const contractCaller = constructEthersContractCaller({
  ethersProviderOrSigner: provider,
  EthersContract: ethers.Contract,
});

// type AdaptersFunctions & ApproveTokenFunctions<ethers.ContractTransaction>
const part1 = constructPartialSDK(
  {
    chainId: 1,
    fetcher,
    contractCaller,
  },
  constructGetAdapters,
  constructApproveToken
);

// type Promise<AdaptersAsObject>
const res1 = part1.getAdapters();
// type Promise<ethers.ContractTransaction>
const res2 = part1.approveToken('123', '0x...');
