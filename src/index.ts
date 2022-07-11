import {
  constructApproveToken,
  ApproveTokenFunctions,
} from './methods/swap/approve';
import {
  constructGetBalances,
  GetBalancesFunctions,
  isAllowance,
  Allowance,
} from './methods/swap/balance';
import {
  constructGetSpender,
  GetSpenderFunctions,
} from './methods/swap/spender';
import {
  constructGetAdapters,
  GetAdaptersFunctions,
} from './methods/swap/adapters';
import { constructGetRate, GetRateFunctions } from './methods/swap/rates';
import { constructGetTokens, GetTokensFunctions } from './methods/swap/token';
import { BuildTxFunctions, constructBuildTx } from './methods/swap/transaction';

import {
  BuildLimitOrderFunctions,
  BuildLimitOrderInput,
  BuildOrderDataInput,
  constructBuildLimitOrder,
} from './methods/limitOrders/buildOrder';
import {
  SignLimitOrderFunctions,
  constructSignLimitOrder,
} from './methods/limitOrders/signOrder';
import {
  CancelLimitOrderFunctions,
  constructCancelLimitOrder,
} from './methods/limitOrders/cancelOrder';
import {
  GetLimitOrdersFunctions,
  constructGetLimitOrders,
  LimitOrdersUserParams,
} from './methods/limitOrders/getOrders';
import {
  PostLimitOrderFunctions,
  constructPostLimitOrder,
} from './methods/limitOrders/postOrder';
import {
  ApproveTokenForLimitOrderFunctions,
  constructApproveTokenForLimitOrder,
} from './methods/limitOrders/approveForOrder';
import {
  GetLimitOrdersContractFunctions,
  constructGetLimitOrdersContract,
} from './methods/limitOrders/getOrdersContract';
import {
  BuildLimitOrdersTxFunctions,
  constructBuildLimitOrderTx,
} from './methods/limitOrders/transaction';

import {
  BuildNFTOrderFunctions,
  BuildNFTOrderInput,
  BuildNFTOrderDataInput,
  constructBuildNFTOrder,
} from './methods/nftOrders/buildOrder';
import {
  SignNFTOrderFunctions,
  constructSignNFTOrder,
} from './methods/nftOrders/signOrder';
import {
  CancelNFTOrderFunctions,
  constructCancelNFTOrder,
} from './methods/nftOrders/cancelOrder';
import {
  GetNFTOrdersFunctions,
  constructGetNFTOrders,
  NFTOrdersUserParams,
} from './methods/nftOrders/getOrders';
import {
  PostNFTOrderFunctions,
  constructPostNFTOrder,
} from './methods/nftOrders/postOrder';
import {
  ApproveTokenForNFTOrderFunctions,
  constructApproveTokenForNFTOrder,
} from './methods/nftOrders/approveForOrder';
import {
  GetNFTOrdersContractFunctions,
  constructGetNFTOrdersContract,
} from './methods/nftOrders/getOrdersContract';
import {
  BuildNFTOrdersTxFunctions,
  constructBuildNFTOrderTx,
} from './methods/nftOrders/transaction';

import {
  constructEthersContractCaller,
  constructWeb3ContractCaller,
  constructAxiosFetcher,
  constructFetchFetcher,
  isFetcherError,
  FetcherError,
  FetcherErrorInterface,
  EthersProviderDeps,
  constructToken,
} from './helpers';
import type {
  ConstructFetchInput,
  ConstructProviderFetchInput,
  Address,
  AddressOrSymbol,
  Token,
  PriceString,
  TxHash,
  TxSendOverrides,
  OptimalRate,
  OptionalRate,
} from './types';

export { constructSwapSDK, SwapSDKMethods } from './methods/swap';

export {
  constructAllLimitOrdersHandlers,
  constructSubmitLimitOrder,
  LimitOrderHandlers,
} from './methods/limitOrders';

export type {
  TransactionParams,
  BuildOptions,
  BuildOptionsBase,
  BuildOptionsWitWithMaxFee,
  BuildOptionsWithGasPrice,
  BuildTxInput,
  BuildSwapTxInput,
  BuildLimitOrderTxInput,
  BuildNFTOrderTxInput,
  BuildSwapAndLimitOrderTxInput,
  BuildSwapAndNFTOrderTxInput,
  SwappableOrder,
  SwappableNFTOrder,
} from './methods/swap/transaction';
export type { Web3UnpromiEvent } from './helpers';
export * from './constants';
export type {
  SignableOrderData,
  OrderData,
} from './methods/limitOrders/helpers/buildOrderData';
export type {
  SignableNFTOrderData,
  NFTOrderData,
} from './methods/nftOrders/helpers/buildOrderData';
export type { SignableTypedData } from './methods/common/orders/buildOrderData';

// can import these individually
// and use in constructPartialSDK only what you need
// unused should tree-shake
export {
  // swap methods:
  constructApproveToken,
  constructGetBalances, // getAllowances is inside
  constructGetSpender, // this was getTokenTransferProxy
  constructGetTokens,
  constructBuildTx,
  constructGetAdapters,
  constructGetRate,
  // limitOrders methods:
  constructBuildLimitOrder,
  constructSignLimitOrder,
  constructCancelLimitOrder,
  constructGetLimitOrders,
  constructPostLimitOrder,
  constructApproveTokenForLimitOrder,
  constructGetLimitOrdersContract,
  constructBuildLimitOrderTx,
  // nftOrders methods
  constructBuildNFTOrder,
  constructSignNFTOrder,
  constructCancelNFTOrder,
  constructGetNFTOrders,
  constructPostNFTOrder,
  constructApproveTokenForNFTOrder,
  constructGetNFTOrdersContract,
  constructBuildNFTOrderTx,
  // different helpers
  constructEthersContractCaller,
  constructWeb3ContractCaller,
  constructAxiosFetcher,
  constructFetchFetcher,
  isFetcherError,
  isAllowance,
  constructToken,
};

export type {
  Allowance,
  // types for swap methods:
  EthersProviderDeps,
  ApproveTokenFunctions,
  GetBalancesFunctions,
  GetSpenderFunctions,
  GetTokensFunctions,
  GetAdaptersFunctions,
  GetRateFunctions,
  BuildTxFunctions,
  // types for limitOrders methods:
  BuildLimitOrderFunctions,
  SignLimitOrderFunctions,
  CancelLimitOrderFunctions,
  GetLimitOrdersContractFunctions,
  BuildLimitOrdersTxFunctions,
  BuildLimitOrderInput,
  BuildOrderDataInput,
  PostLimitOrderFunctions,
  ApproveTokenForLimitOrderFunctions,
  GetLimitOrdersFunctions,
  LimitOrdersUserParams,
  // types for nftOrders methods:
  SignNFTOrderFunctions,
  CancelNFTOrderFunctions,
  GetNFTOrdersFunctions,
  PostNFTOrderFunctions,
  ApproveTokenForNFTOrderFunctions,
  GetNFTOrdersContractFunctions,
  BuildNFTOrdersTxFunctions,
  BuildNFTOrderFunctions,
  BuildNFTOrderInput,
  BuildNFTOrderDataInput,
  NFTOrdersUserParams,
  //common
  ConstructFetchInput,
  ConstructProviderFetchInput,
  // other types
  Token,
  Address,
  AddressOrSymbol,
  PriceString,
  TxHash,
  TxSendOverrides,
  OptimalRate,
  OptionalRate,
  FetcherError,
  FetcherErrorInterface,
};

export { SDKConfig, constructPartialSDK } from './sdk/partial';
export { AllSDKMethods, constructFullSDK } from './sdk/full';
export { SimpleFetchSDK, SimpleSDK, constructSimpleSDK } from './sdk/simple';

export { ParaSwap } from './legacy';

// bundled methods for limitOrders
export * from './methods/limitOrders';
export * from './methods/limitOrders/helpers/types';
// bundled methods for nftOrders
export * from './methods/nftOrders';
export * from './methods/nftOrders/helpers/types';
export { AssetType } from './methods/nftOrders/helpers/misc';
