/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { mainnet } from '@wagmi/core/chains';
import {
  getAccount,
  getWalletClient,
  sendTransaction,
  waitForTransactionReceipt,
  http,
  createConfig,
} from '@wagmi/core';
import { injected } from '@wagmi/connectors';
import { constructSimpleSDK, txParamsToViemTxParams } from '../';
import { assert } from 'ts-essentials';

export const config = createConfig({
  chains: [mainnet],
  connectors: [injected()],
  transports: {
    [mainnet.id]: http(),
  },
});

async function simpleSDKExample() {
  const walletClient = await getWalletClient(config, { chainId: mainnet.id });
  const account = getAccount(config).address; // make sure wallet is connected at this point
  assert(account, 'account is necessary for Order signing');

  const simpleSDK = constructSimpleSDK(
    {
      axios,
      chainId: mainnet.id, // same chain as for walletClient
    },
    { viemClient: walletClient, account }
  );

  const ETH = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
  const DAI = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
  const srcAmount = (1 * 1e18).toString();

  const destToken = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48';
  const priceRoute = await simpleSDK.swap.getRate({
    srcToken: ETH,
    destToken: DAI,
    amount: srcAmount,
    userAddress: account,
    side: 'SELL',
    srcDecimals: 18,
    destDecimals: 18,
  });

  const txParams = await simpleSDK.swap.buildTx({
    srcToken: ETH,
    destToken,
    srcAmount,
    slippage: 250, // 2.5%
    priceRoute,
    userAddress: account,
  });

  const vTxParams = txParamsToViemTxParams(txParams);

  const txHash = await sendTransaction(config, vTxParams);

  const txReceipt = waitForTransactionReceipt(config, { hash: txHash });
}

// Look at examples/viem for more examples
