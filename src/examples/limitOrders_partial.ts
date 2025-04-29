/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import BigNumber from 'bignumber.js';
import { ethers } from 'ethersV5';
import { assert } from 'ts-essentials';
import {
  // swap methods
  constructPartialSDK,
  constructEthersContractCaller,
  constructAxiosFetcher,
  // limitOrders methods
  constructBuildLimitOrder,
  constructCancelLimitOrder,
  constructSignLimitOrder,
  constructGetLimitOrders,
  constructPostLimitOrder,
  constructApproveTokenForLimitOrder,
  // extra types
  SignableOrderData,
  LimitOrderToSend,
  constructBuildLimitOrderTx,
} from '..';

const account = '0x1234...';

const fetcher = constructAxiosFetcher(axios);

// provider must have write access to account
// this would usually be wallet provider (Metamask)
const provider = ethers.getDefaultProvider(1);
const contractCaller = constructEthersContractCaller(
  {
    ethersProviderOrSigner: provider,
    EthersContract: ethers.Contract,
  },
  account
);

// type BuildLimitOrderFunctions
// & SignLimitOrderFunctions
// & CancelLimitOrderFunctions<ethers.ContractTransaction>
// & ApproveTokenFunctions<ethers.ContractTransaction>
const limitOrderSDK = constructPartialSDK(
  {
    chainId: 1,
    fetcher,
    contractCaller,
  },
  constructBuildLimitOrder,
  constructCancelLimitOrder,
  constructSignLimitOrder,
  constructPostLimitOrder,
  constructGetLimitOrders,
  constructApproveTokenForLimitOrder
);

const DAI = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
const HEX = '0x2b591e99afe9f32eaa6214f7b7629768c40eeb39';

const orderInput = {
  nonce: 1,
  expiry: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7, // week from now, in sec
  makerAsset: DAI,
  takerAsset: HEX,
  makerAmount: (1e18).toString(10),
  takerAmount: (8e18).toString(10),
  maker: account,
};

async function run() {
  /// cancelling current orders
  const { orders: currentOrders } = await limitOrderSDK.getLimitOrders({
    maker: account,
    type: 'LIMIT',
  });

  if (currentOrders[0]?.orderHash) {
    const tx1: ethers.ContractTransaction =
      await limitOrderSDK.cancelLimitOrder(currentOrders[0].orderHash);
  }

  const moreOrderHashes = currentOrders
    .slice(1, 2)
    .map((order) => order.orderHash);

  const tx2: ethers.ContractTransaction =
    await limitOrderSDK.cancelLimitOrderBulk(moreOrderHashes);

  /// creating a new order

  const tx3: ethers.ContractTransaction =
    await limitOrderSDK.approveMakerTokenForLimitOrder(
      orderInput.makerAmount,
      orderInput.makerAsset
    );

  const signableOrderData: SignableOrderData =
    await limitOrderSDK.buildLimitOrder(orderInput);

  const signature: string = await limitOrderSDK.signLimitOrder(
    signableOrderData
  );

  const orderToPostToApi: LimitOrderToSend = {
    ...signableOrderData.data,
    signature,
  };

  const newOrder = await limitOrderSDK.postLimitOrder(orderToPostToApi);

  /// filling an order

  // to act as order taker
  const anotherAccount = '0x5678...';

  const limitOrderSDKForTaker = constructPartialSDK(
    {
      chainId: 1,
      fetcher,
      contractCaller: constructEthersContractCaller(
        {
          ethersProviderOrSigner: provider,
          EthersContract: ethers.Contract,
        },
        anotherAccount
      ),
    },
    constructBuildLimitOrderTx,
    constructApproveTokenForLimitOrder
  );

  const tx4: ethers.ContractTransaction =
    await limitOrderSDKForTaker.approveTakerTokenForLimitOrder(
      orderInput.takerAmount,
      orderInput.takerAsset
    );

  const { gas: payloadGas, ...LOPayloadTxParams } =
    await limitOrderSDKForTaker.buildLimitOrderTx({
      srcDecimals: 18,
      destDecimals: 18,
      userAddress: anotherAccount, // taker
      orders: [orderToPostToApi],
    });

  const tx5Params = {
    ...LOPayloadTxParams,
    gasPrice:
      LOPayloadTxParams.gasPrice &&
      '0x' + new BigNumber(LOPayloadTxParams.gasPrice).toString(16),
    maxFeePerGas:
      LOPayloadTxParams.maxFeePerGas &&
      '0x' + new BigNumber(LOPayloadTxParams.maxFeePerGas).toString(16),
    maxPriorityFeePerGas:
      LOPayloadTxParams.maxPriorityFeePerGas &&
      '0x' + new BigNumber(LOPayloadTxParams.maxPriorityFeePerGas).toString(16),
    gasLimit: '0x' + new BigNumber(payloadGas || 5000000).toString(16),
    value: '0x' + new BigNumber(LOPayloadTxParams.value).toString(16),
  };

  console.log('SENDING TX', tx5Params);

  assert(
    provider instanceof ethers.providers.JsonRpcProvider,
    'provider has signer (JsonRpcProvider)'
  );

  const tx5 = await provider
    .getSigner(anotherAccount)
    .sendTransaction(tx5Params);
}
