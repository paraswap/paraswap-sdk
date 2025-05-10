/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { ethers, Wallet } from 'ethersV5';
import {
  constructPartialSDK,
  constructEthersContractCaller,
  constructAxiosFetcher,
  constructAllDeltaOrdersHandlers,
  DeltaAuction,
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
const USDC_TOKEN = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';

async function simpleDeltaFlow() {
  const amount = '1000000000000'; // wei

  const deltaPrice = await deltaSDK.getDeltaPrice({
    srcToken: DAI_TOKEN,
    destToken: USDC_TOKEN,
    amount,
    userAddress: account,
    srcDecimals: 18,
    destDecimals: 6,
    // partner: "..." // if available
  });

  const DeltaContract = await deltaSDK.getDeltaContract();

  // or sign a Permit1 or Permit2 TransferFrom for DeltaContract
  const tx = await deltaSDK.approveTokenForDelta(amount, DAI_TOKEN);
  await tx.wait();

  const slippagePercent = 0.5;
  const destAmountAfterSlippage = BigInt(
    // get rid of exponential notation

    +(+deltaPrice.destAmount * (1 - slippagePercent / 100)).toFixed(0)
    // get rid of decimals
  ).toString(10);

  const deltaAuction = await deltaSDK.submitDeltaOrder({
    deltaPrice,
    owner: account,
    // beneficiary: anotherAccount, // if need to send destToken to another account
    // permit: "0x1234...", // if signed a Permit1 or Permit2 TransferFrom for DeltaContract
    srcToken: DAI_TOKEN,
    destToken: USDC_TOKEN,
    srcAmount: amount,
    destAmount: destAmountAfterSlippage, // minimum acceptable destAmount
  });

  // poll if necessary
  function isExecutedDeltaAuction(
    auction: Omit<DeltaAuction, 'signature'>,
    waitForCrosschain = true // only consider executed when destChain work is done
  ) {
    if (auction.status !== 'EXECUTED') return false;

    // crosschain Order is executed on destChain if bridgeStatus is filled
    if (waitForCrosschain && auction.order.bridge.destinationChainId !== 0) {
      return auction.bridgeStatus === 'filled';
    }

    return true;
  }

  async function fetchOrderPeriodically(auctionId: string) {
    const intervalId = setInterval(async () => {
      const auction = await deltaSDK.getDeltaOrderById(auctionId);
      console.log('checks: ', auction); // Handle or log the fetched auction as needed

      if (isExecutedDeltaAuction(auction)) {
        clearInterval(intervalId); // Stop interval if completed
        console.log('Order completed');
      }
    }, 3000);
    console.log('Order Pending');
    // Return intervalId to enable clearing the interval if needed externally
    return intervalId;
  }

  async function startStatusCheck(auctionId: string) {
    const intervalId = await fetchOrderPeriodically(auctionId);
    setTimeout(() => clearInterval(intervalId), 60000); // Stop after 60 seconds
  }

  startStatusCheck(deltaAuction.id);
}
async function manualDeltaFlow() {
  const amount = '1000000000000'; // wei

  const deltaPrice = await deltaSDK.getDeltaPrice({
    srcToken: DAI_TOKEN,
    destToken: USDC_TOKEN,
    amount,
    userAddress: account,
    srcDecimals: 18,
    destDecimals: 6,
    // partner: "..." // if available
  });

  const DeltaContract = await deltaSDK.getDeltaContract();

  // or sign a Permit1 or Permit2 TransferFrom for DeltaContract
  const tx = await deltaSDK.approveTokenForDelta(amount, DAI_TOKEN);
  await tx.wait();

  const slippagePercent = 0.5;
  const destAmountAfterSlippage = (
    +deltaPrice.destAmount *
    (1 - slippagePercent / 100)
  ).toString(10);

  const signableOrderData = await deltaSDK.buildDeltaOrder({
    deltaPrice,
    owner: account,
    // beneficiary: anotherAccount, // if need to send destToken to another account
    // permit: "0x1234...", // if signed a Permit1 or Permit2 TransferFrom for DeltaContract
    srcToken: DAI_TOKEN,
    destToken: USDC_TOKEN,
    srcAmount: amount,
    destAmount: destAmountAfterSlippage, // minimum acceptable destAmount
  });

  const signature = await deltaSDK.signDeltaOrder(signableOrderData);

  const deltaAuction = await deltaSDK.postDeltaOrder({
    // partner: "..." // if available
    order: signableOrderData.data,
    signature,
  });

  // start_polling_example
  // poll if necessary
  function isExecutedDeltaAuction(
    auction: Omit<DeltaAuction, 'signature'>,
    waitForCrosschain = true // only consider executed when destChain work is done
  ) {
    if (auction.status !== 'EXECUTED') return false;

    // crosschain Order is executed on destChain if bridgeStatus is filled
    if (waitForCrosschain && auction.order.bridge.destinationChainId !== 0) {
      return auction.bridgeStatus === 'filled';
    }

    return true;
  }

  async function fetchOrderPeriodically(auctionId: string) {
    const intervalId = setInterval(async () => {
      const auction = await deltaSDK.getDeltaOrderById(auctionId);
      console.log('checks: ', auction); // Handle or log the fetched auction as needed

      if (isExecutedDeltaAuction(auction)) {
        clearInterval(intervalId); // Stop interval if completed
        console.log('Order completed');
      }
    }, 3000);
    console.log('Order Pending');
    // Return intervalId to enable clearing the interval if needed externally
    return intervalId;
  }

  async function startStatusCheck(auctionId: string) {
    const intervalId = await fetchOrderPeriodically(auctionId);
    setTimeout(() => clearInterval(intervalId), 60000); // Stop after 60 seconds
  }

  startStatusCheck(deltaAuction.id);
  // end_polling_example
}
