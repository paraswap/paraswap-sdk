/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { ethers } from 'ethers';
import { constructPartialSDK, constructSDK } from '..';
import { constructGetAdapters } from '../adapters';
import {
  constructEthersContractCaller,
  constructAxiosFetcher,
} from '../helpers';

const fetcher = constructAxiosFetcher(axios);

const provider = ethers.getDefaultProvider(1);
const contractCaller = constructEthersContractCaller(provider);

const paraswap = constructSDK({
  apiURL: '',
  network: 1,
  fetcher,
  contractCaller,
});

const res = paraswap.getAdapters({ type: 'list', namesOnly: false });

const part1 = constructPartialSDK(
  { apiURL: '', network: 1, fetcher },
  constructGetAdapters
);

const res1 = part1.getAdapters({ type: 'object' });