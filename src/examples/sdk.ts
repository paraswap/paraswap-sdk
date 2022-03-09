/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { ethers } from 'ethers';
import { constructSDK } from '..';
import { constructContractCaller, constructFetcher } from '../helpers';

const fetcher = constructFetcher(axios);

const provider = ethers.getDefaultProvider(1);
const contractCaller = constructContractCaller(provider);

const paraswap = constructSDK({
  apiURL: '',
  network: 1,
  fetcher,
  contractCaller,
});

const res = paraswap.getAdapters({ type: 'list', namesOnly: false });
