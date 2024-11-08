/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { ethers, Wallet } from 'ethers';
import {
  constructPartialSDK,
  constructGetAdapters,
  constructApproveToken,
  constructEthersContractCaller,
  constructAxiosFetcher,
  constructAllDeltaOrdersHandlers,
} from '..';

const fetcher = constructAxiosFetcher(axios);

const provider = ethers.getDefaultProvider(1);
const signer = Wallet.createRandom().connect(provider);
const account = signer.address;
const contractCaller = constructEthersContractCaller({
  ethersProviderOrSigner: provider,
  EthersContract: ethers.Contract,
});

// type AdaptersFunctions & ApproveTokenFunctions<ethers.ContractTransaction>
const deltaSDK = constructPartialSDK(
  {
    chainId: 1,
    fetcher,
    contractCaller,
  },
  constructAllDeltaOrdersHandlers
);

const DAI_TOKEN = '0x6b175474e89094c44da98b954eedeac495271d0f';
const PSP_TOKEN = '0xcafe001067cdef266afb7eb5a286dcfd277f3de5';

async function deltaFlow() {
  const amount = '1000000000000'; // wei

  const deltaPrice = await deltaSDK.getDeltaPrice({
    srcToken: DAI_TOKEN,
    destToken: PSP_TOKEN,
    amount: '1000000000000',
    userAddress: account,
    srcDecimals: 18,
    destDecimals: 18,
  });

  const DeltaContract = await deltaSDK.getDeltaContract();

  // or sign a Permit1 or Permit2 TransferFrom for DeltaContract
  await deltaSDK.approveTokenForDelta(amount, DAI_TOKEN);

  const slippagePercent = 0.5;
  const destAmountAfterSlippage = (
    +deltaPrice.destAmount *
    (1 - slippagePercent / 100)
  ).toString(10);

  const deltaAuction = await deltaSDK.submitDeltaOrder({
    deltaPrice,
    owner: account,
    srcToken: DAI_TOKEN,
    destToken: PSP_TOKEN,
    srcAmount: amount,
    destAmount: destAmountAfterSlippage,
  });

  // poll if necessary
  const auction = await deltaSDK.getDeltaOrderById(deltaAuction.id);
  if (auction?.status === 'EXECUTED') {
    console.log('Auction was executed');
  }
}
