const Axios = require('axios');
const SDK = require('./');
const fetcher = SDK.constructAxiosFetcher(Axios);

const Util = require('util');

const sdk = SDK.constructPartialSDK(
  { chainId: 1, fetcher },
  SDK.constructGetRate
);

const DAI_TOKEN = '0x6b175474e89094c44da98b954eedeac495271d0f';
const PSP_TOKEN = '0xcafe001067cdef266afb7eb5a286dcfd277f3de5';

async function main() {
  try {
    return await sdk.getRate({
      srcToken: DAI_TOKEN,
      destToken: PSP_TOKEN,
      amount: '10000000',
    });
  } catch (error) {
    console.error(Util.format(error));
  }
}

main().then(console.log).catch(console.error);
