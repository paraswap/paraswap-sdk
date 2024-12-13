/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { ethers } from 'ethersV5';
import { constructSimpleSDK } from '..';

const DAI_TOKEN = '0x6b175474e89094c44da98b954eedeac495271d0f';
const PSP_TOKEN = '0xcafe001067cdef266afb7eb5a286dcfd277f3de5';

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
    destToken: PSP_TOKEN,
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
      destToken: PSP_TOKEN,
      srcAmount: amount,
      destAmount: destAmountAfterSlippage, // minimum acceptable destAmount
    });

    // poll if necessary
    const auction = await simpleSDK.delta.getDeltaOrderById(deltaAuction.id);
    if (auction?.status === 'EXECUTED') {
      console.log('Auction was executed');
    }
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
      destToken: PSP_TOKEN,
      srcAmount: amount,
      slippage: 250, // 2.5%
      priceRoute,
      userAddress: account,
      // partner: '...' // if available
    });

    const swapTx = await signer.sendTransaction(txParams);
  }
}
