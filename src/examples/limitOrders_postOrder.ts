/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { ethers } from 'ethersV5';

import {
  // swap methods
  constructPartialSDK,
  constructEthersContractCaller,
  constructAxiosFetcher,
  // limitOrders methods
  constructBuildLimitOrder,
  constructSignLimitOrder,
  constructPostLimitOrder,
  // extra types
  SignableOrderData,
  LimitOrderToSend,
} from '..';

const wallet = ethers.Wallet.createRandom();

const fetcher = constructAxiosFetcher(axios);

const provider = wallet.connect(ethers.getDefaultProvider(1));
const contractCaller = constructEthersContractCaller(
  {
    ethersProviderOrSigner: provider,
    EthersContract: ethers.Contract,
  },
  wallet.address
);

// type BuildLimitOrderFunctions
// & SignLimitOrderFunctions
// & PostLimitOrderFunctions

const limitOrderSDK = constructPartialSDK(
  {
    chainId: 1,
    fetcher,
    contractCaller,
  },
  constructBuildLimitOrder,
  constructSignLimitOrder,
  constructPostLimitOrder
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
  maker: wallet.address,
};

async function run() {
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
  console.log(newOrder);
}

run();
