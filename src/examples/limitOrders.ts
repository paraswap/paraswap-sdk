/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { ethers } from 'ethers';
import {
  constructPartialSDK,
  constructEthersContractCaller,
  constructAxiosFetcher,
  constructBuildLimitOrder,
  constructCancelLimitOrder,
  constructSignLimitOrder,
} from '..';
import { constructApproveToken } from '../methods/approve';

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
  constructSignLimitOrder
);

const orderInput = {
  nonceAndMeta: 1,
  expiry: Date.now() + 10_000_000,
  makerAsset: '0x1234...',
  takerAsset: '0x1234...',
  makerAmount: (1e18).toString(10),
  takerAmount: (8e18).toString(10),
  maker: '0x1234...',
};

// type SignableOrderData
const signableOrderData = part1.limitOrders.buildLimitOrder(orderInput);
// type Promise<string>
const signature = part1.signLimitOrder(signableOrderData);

// type Promise<ethers.ContractTransaction>
const res1 = part1.cancelLimitOrder('order hash bytes32');
// type Promise<ethers.ContractTransaction>
const res2 = part1.cancelLimitOrderBulk([
  'order hash bytes32',
  'more order hashes',
]);

// type Promise<ethers.ContractTransaction>
const res3 = part1.approveToken('', '');
