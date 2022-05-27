/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { ethers } from 'ethers';
import {
  // swap methods
  constructPartialSDK,
  constructEthersContractCaller,
  constructAxiosFetcher,
  // limitOrders methods
  constructBuildLimitOrder,
  constructCancelLimitOrder,
  constructSignLimitOrder,
  constructFillLimitOrder,
  constructGetLimitOrders,
  constructPostLimitOrder,
  constructApproveTokenForLimitOrder,
  // extra types
  SignableOrderData,
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
const paraSwapLimitOrderSDK = constructPartialSDK(
  {
    network: 1,
    fetcher,
    contractCaller,
  },
  constructBuildLimitOrder,
  constructCancelLimitOrder,
  constructSignLimitOrder,
  constructPostLimitOrder,
  constructGetLimitOrders,
  constructFillLimitOrder,
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
  const currentOrders = await paraSwapLimitOrderSDK.getLimitOrders({
    maker: account,
  });

  const signableOrderData: SignableOrderData =
    paraSwapLimitOrderSDK.buildLimitOrder(orderInput);
  // type string
  const signature: string = await paraSwapLimitOrderSDK.signLimitOrder(
    signableOrderData
  );

  if (currentOrders[0]?.orderHash) {
    const tx1: ethers.ContractTransaction =
      await paraSwapLimitOrderSDK.cancelLimitOrder(currentOrders[0].orderHash);
  }

  const moreOrderHashes = currentOrders
    .slice(1, 2)
    .map((order) => order.orderHash);

  const tx2: ethers.ContractTransaction =
    await paraSwapLimitOrderSDK.cancelLimitOrderBulk(moreOrderHashes);

  const tx3: ethers.ContractTransaction =
    await paraSwapLimitOrderSDK.approveTokenForLimitOrder('1234', '0x1234');

  // to act as order taker
  const anotherAccount = '0x5678...';

  const paraswapLimitOrdersSDKForTaker = constructPartialSDK(
    {
      network: 1,
      fetcher,
      contractCaller: constructEthersContractCaller(
        {
          ethersProviderOrSigner: provider,
          EthersContract: ethers.Contract,
        },
        anotherAccount
      ),
    },
    constructFillLimitOrder
  );

  const tx4: ethers.ContractTransaction =
    await paraswapLimitOrdersSDKForTaker.fillLimitOrder({
      orderData: signableOrderData.data,
      signature,
    });
}
