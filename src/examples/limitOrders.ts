/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { ethers } from 'ethers';
import {
  // swap methods
  constructPartialSDK,
  constructEthersContractCaller,
  constructAxiosFetcher,
  constructApproveToken,
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

const fetcher = constructAxiosFetcher(axios);

const provider = ethers.getDefaultProvider(1);
const contractCaller = constructEthersContractCaller({
  ethersProviderOrSigner: provider,
  EthersContract: ethers.Contract,
});

// type BuildLimitOrderFunctions
// & SignLimitOrderFunctions
// & CancelLimitOrderFunctions<ethers.ContractTransaction>
// & ApproveTokenFunctions<ethers.ContractTransaction>
const part1 = constructPartialSDK(
  {
    network: 1,
    fetcher,
    contractCaller,
  },
  constructBuildLimitOrder,
  constructApproveToken,
  constructCancelLimitOrder,
  constructSignLimitOrder,
  constructPostLimitOrder,
  constructGetLimitOrders,
  constructFillLimitOrder,
  constructApproveTokenForLimitOrder
);

const orderInput = {
  nonce: 1,
  expiry: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7, // week from now, in sec
  makerAsset: '0x1234...',
  takerAsset: '0x1234...',
  makerAmount: (1e18).toString(10),
  takerAmount: (8e18).toString(10),
  maker: '0x1234...',
};

async function run() {
  const signableOrderData: SignableOrderData =
    part1.buildLimitOrder(orderInput);
  // type string
  const signature: string = await part1.signLimitOrder(signableOrderData);

  const tx1: ethers.ContractTransaction = await part1.cancelLimitOrder(
    'order hash bytes32'
  );
  const tx2: ethers.ContractTransaction = await part1.cancelLimitOrderBulk([
    'order hash bytes32',
    'more order hashes',
  ]);

  const tx3: ethers.ContractTransaction = await part1.approveToken(
    '1234',
    '0x1234'
  );

  const tx4: ethers.ContractTransaction = await part1.approveTokenForLimitOrder(
    '1234',
    '0x1234'
  );

  const tx5: ethers.ContractTransaction = await part1.fillLimitOrder({
    orderData: signableOrderData.data,
    signature,
  });
}
