require("dotenv").config();

const {ParaSwap} = require("paraswap");

const apiURL = process.env.API_URL || 'https://paraswap.io/api';

const network = 1;
const srcToken = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
const destToken = '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359';
const srcAmount = '1000000000000000000'; //The source amount multiplied by its decimals
const senderAddress = '0xfceA770875E7e6f25E33CEa5188d12Ef234606b4';
const payTo = '0x8B4e846c90a2521F0D2733EaCb56760209EAd51A'; // Useful in case of a payment

const paraSwap = new ParaSwap(network, apiURL);

async function getTokens() {
  return paraSwap.getTokens();
}

async function getRate() {
  return paraSwap.getRate(srcToken, destToken, srcAmount);
}

async function buildSwapTx(priceRoute) {
  const destAmount = priceRoute.amount;
  return paraSwap.buildTx(srcToken, destToken, srcAmount, destAmount, priceRoute, senderAddress);
}

async function buildPayTx(priceRoute) {
  const destAmount = priceRoute.amount;
  return paraSwap.buildTx(srcToken, destToken, srcAmount, destAmount, priceRoute, senderAddress, payTo);
}

async function run() {
  const tokens = await getTokens();
  console.log('tokens', tokens);

  const rate = await getRate();
  console.log('rate', rate);

  const swapTx = await buildSwapTx(rate);
  console.log('swapTx', swapTx);

  const payTx = await buildPayTx(rate);
  console.log('payTx', payTx);
}

run();
