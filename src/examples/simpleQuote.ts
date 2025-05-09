/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { ethers } from 'ethersV5';
import { constructSimpleSDK, DeltaAuction } from '..';

const DAI_TOKEN = '0x6b175474e89094c44da98b954eedeac495271d0f';
const USDC_TOKEN = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';

async function allQuote() {
  // @ts-expect-error assume window.ethereum is available
  const ethersProvider = new ethers.providers.Web3Provider(window.ethereum);

  const accounts = await ethersProvider.listAccounts();
  const account = accounts[0]!;
  const signer = ethersProvider.getSigner(account);

  const simpleSDK = constructSimpleSDK(
    { chainId: 1, axios },
    {
      ethersProviderOrSigner: signer,
      EthersContract: ethers.Contract,
      account,
    }
  );

  const amount = '1000000000000'; // wei

  const quote = await simpleSDK.quote.getQuote({
    srcToken: DAI_TOKEN,
    destToken: USDC_TOKEN,
    amount,
    userAddress: account,
    srcDecimals: 18,
    destDecimals: 18,
    mode: 'all', // Delta quote if possible, with fallback to Market price
    side: 'SELL',
    // partner: "..." // if available
  });

  if ('delta' in quote) {
    const deltaPrice = quote.delta;

    const DeltaContract = await simpleSDK.delta.getDeltaContract();

    // or sign a Permit1 or Permit2 TransferFrom for DeltaContract
    const approveTxHash = await simpleSDK.delta.approveTokenForDelta(
      amount,
      DAI_TOKEN
    );

    const slippagePercent = 0.5;
    const destAmountAfterSlippage = BigInt(
      // get rid of exponential notation

      +(+deltaPrice.destAmount * (1 - slippagePercent / 100)).toFixed(0)
      // get rid of decimals
    ).toString(10);

    const deltaAuction = await simpleSDK.delta.submitDeltaOrder({
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
        const auction = await simpleSDK.delta.getDeltaOrderById(auctionId);
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
  } else {
    console.log(
      `Delta Quote failed: ${quote.fallbackReason.errorType} - ${quote.fallbackReason.details}`
    );
    const priceRoute = quote.market;

    const TokenTransferProxy = await simpleSDK.swap.getSpender();

    // or sign a Permit1 or Permit2 TransferFrom for TokenTransferProxy
    const approveTxHash = simpleSDK.swap.approveToken(amount, DAI_TOKEN);

    const txParams = await simpleSDK.swap.buildTx({
      srcToken: DAI_TOKEN,
      destToken: USDC_TOKEN,
      srcAmount: amount,
      slippage: 250, // 2.5%
      priceRoute,
      userAddress: account,
      // partner: '...' // if available
    });

    const swapTx = await signer.sendTransaction(txParams);
  }
}
