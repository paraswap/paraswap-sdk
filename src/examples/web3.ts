/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import Web3 from 'web3';
import {
  constructSDK,
  constructAxiosFetcher,
  constructWeb3ContractCaller,
} from '..';

const fetcher = constructAxiosFetcher(axios);
const web3 = new Web3(Web3.givenProvider);
const contractCaller = constructWeb3ContractCaller(web3);

const paraswap = constructSDK({
  network: 1,
  fetcher,
  contractCaller,
});

async function main() {
  const eventfulTxResponse = await paraswap.approveToken(
    '1000000000000000000',
    '0xcafe001067cDEF266AfB7Eb5A286dCFD277f3dE5'
  );

  eventfulTxResponse.once('transactionHash', (txHash) =>
    console.log('watch for tx', txHash)
  );
}

main();
