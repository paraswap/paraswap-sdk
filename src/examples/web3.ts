/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import Web3 from 'web3';
import { constructSDK } from '..';
import { constructAxiosFetcher } from '../helpers';
import { constructContractCaller } from '../helpers/web3';

const fetcher = constructAxiosFetcher(axios);
const web3 = new Web3(Web3.givenProvider);
const contractCaller = constructContractCaller(web3);

const paraswap = constructSDK({
  apiURL: '',
  network: 1,
  fetcher,
  contractCaller,
});

async function main() {
  const txHash = await paraswap.approveToken(
    '1000000000000000000',
    '0xcafe001067cDEF266AfB7Eb5A286dCFD277f3dE5'
  );

  console.log('watch for tx', txHash);
}

main();
