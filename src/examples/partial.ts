/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { ethers } from 'ethers';
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
  providerOrSigner: provider,
  Contract: ethers.Contract,
});

//  type = AdaptersFunctions & ApproveTokenFunctions<ethers.ContractTransaction>
const part1 = constructPartialSDK(
  {
    network: 1,
    fetcher,
    contractCaller,
  },
  constructGetAdapters,
  constructApproveToken
);

// type = AdaptersAsObject
const res1 = part1.getAdapters({ type: 'object' });
// type = ethers.ContractTransaction
const res2 = part1.approveToken('123', '0x...');
