/* esslint-disable @typescript-eslint/no-unused-vars */
import {
  Chain,
  createClient,
  createPublicClient,
  createWalletClient,
  custom,
  Hex,
  http,
  parseAbi,
  PublicActions,
  publicActions,
  SendTransactionRequest,
  WalletActions,
} from 'viem';
import { mainnet } from 'viem/chains';

// declares types for window.ethereum
import 'viem/window';
import {
  constructPartialSDK,
  constructSimpleSDK,
  constructSubmitLimitOrder,
} from '../';
import { constructViemContractCaller } from '../';
import { constructAxiosFetcher } from '../helpers';
import axios from 'axios';
import {
  constructAllLimitOrdersHandlers,
  type BuildLimitOrderInput,
} from '../';
import { assert } from 'ts-essentials';
import { txParamsToViemTxParams } from '../helpers/providers/viem';

// necessary when using write methods from SDK (transactions: approve Token, signTypedData: signing Orders)
/**
 * necessary when using write methods from SDK:
 * transactions: approve Token, Fill or Cancel Order,
 * signTypedData: signing Orders.
 */
const walletClient = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum!),
});

// example of a minimal SDK for submitting Limit Orders only
async function limitOrderSDKExample() {
  const [account] = await walletClient.getAddresses();
  assert(account, 'account is necessary for Order signing');

  const contractCaller = constructViemContractCaller(
    walletClient,
    account // pass account to enable write methods (tx signing, signTypedData)
  );
  const fetcher = constructAxiosFetcher(axios);
  // SDK with `submitLimitOrder` and `submitP2POrder` methods only
  const LOrderSDK = constructPartialSDK(
    {
      contractCaller,
      fetcher,
      chainId: 1, // same chain as for walletClient
    },
    constructSubmitLimitOrder
  );

  /*
  // alternatively, SDK with all Order methods: `submitLimitOrder`,  `cancelLimitOrder`, `fillLimitOrder`, `getLimitOrders`, etc. methods
  const LOrderSDK = constructPartialSDK(
    {
      contractCaller,
      fetcher,
      chainId: 1, // same chain as for walletClient
    },
    constructAllLimitOrdersHandlers
  ); */

  const DAI = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
  const HEX = '0x2b591e99afe9f32eaa6214f7b7629768c40eeb39';

  const orderInput: BuildLimitOrderInput = {
    nonce: 1,
    expiry: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7, // week from now, in sec
    makerAsset: DAI,
    takerAsset: HEX,
    makerAmount: (1e18).toString(10),
    takerAmount: (8e18).toString(10),
    maker: account,
  };

  // submitted Order if successful
  const orderFromAPI = LOrderSDK.submitLimitOrder(orderInput);
}

async function simpleSDKExample() {
  const [account] = await walletClient.getAddresses();
  assert(account, 'account is necessary for Order signing');

  const fetcher = constructAxiosFetcher(axios);

  const simpleSDK = constructSimpleSDK(
    {
      fetcher,
      chainId: 1, // same chain as for walletClient
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
  /*   ...(maxFeePerGas !== undefined
    ? { maxFeePerGas, maxPriorityFeePerGas }
    : { gasPrice }), */

  const gas = txParams.gas !== undefined ? BigInt(txParams.gas) : undefined;
  const gasPrice =
    txParams.gasPrice !== undefined ? BigInt(txParams.gasPrice) : undefined;
  const maxFeePerGas =
    txParams.maxFeePerGas !== undefined
      ? BigInt(txParams.maxFeePerGas)
      : undefined;
  const maxPriorityFeePerGas =
    txParams.maxPriorityFeePerGas !== undefined
      ? BigInt(txParams.maxPriorityFeePerGas)
      : undefined;

  const viemTxParams = {
    account: txParams.from as Hex,
    to: txParams.to as Hex,
    data: txParams.data as Hex,
    value: txParams.value !== undefined ? BigInt(txParams.value) : undefined,
    gas,
    ...(txParams.maxFeePerGas !== undefined
      ? { maxFeePerGas, maxPriorityFeePerGas }
      : { gasPrice }),
  };

  const vTxParams = txParamsToViemTxParams(txParams);

  walletClient.sendTransaction(vTxParams);
}
