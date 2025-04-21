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
import { constructSwapTx, GetSwapTxFunctions } from './methods/swap/swapTx';
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
  FillOrderDirectlyFunctions,
  constructFillOrderDirectly,
} from './methods/limitOrders/fillOrderDirectly';
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
  constructEthersV5ContractCaller,
  constructEthersV6ContractCaller,
  constructWeb3ContractCaller,
  constructViemContractCaller,
  txParamsToViemTxParams,
  constructAxiosFetcher,
  constructFetchFetcher,
  isFetcherError,
  FetcherErrorInterface,
  EthersProviderDeps,
  EthersV5ProviderDeps,
  EthersV6ProviderDeps,
  MinViemClient,
  constructToken,
  FetcherError,
} from './helpers';
import type {
  ConstructFetchInput,
  ContractCallerFunctions,
  ConstructProviderFetchInput,
  Address,
  AddressOrSymbol,
  FetcherFunction,
  Token,
  PriceString,
  TxHash,
  TxSendOverrides,
  OptimalRate,
  OptionalRate,
  ParaSwapVersionUnion as ParaSwapVersion,
} from './types';

import type {
  DeltaAuctionOrder,
  ParaswapDeltaAuction,
  BridgeMetadata,
  BridgeStatus,
  BridgeInput,
  Bridge,
} from './methods/delta/helpers/types';
import {
  BuildDeltaOrderDataParams,
  BuildDeltaOrderFunctions,
  constructBuildDeltaOrder,
  SignableDeltaOrderData,
} from './methods/delta/buildDeltaOrder';
import {
  constructPostDeltaOrder,
  PostDeltaOrderFunctions,
  PostDeltaOrderParams,
} from './methods/delta/postDeltaOrder';
import {
  constructSignDeltaOrder,
  SignDeltaOrderFunctions,
} from './methods/delta/signDeltaOrder';
import {
  GetDeltaContractFunctions,
  constructGetDeltaContract,
} from './methods/delta/getDeltaContract';
import {
  constructGetDeltaPrice,
  GetDeltaPriceFunctions,
  DeltaPrice,
  BridgePrice,
  DeltaPriceParams,
} from './methods/delta/getDeltaPrice';
import {
  constructGetDeltaOrders,
  GetDeltaOrdersFunctions,
} from './methods/delta/getDeltaOrders';
import {
  ApproveTokenForDeltaFunctions,
  constructApproveTokenForDelta,
} from './methods/delta/approveForDelta';
import {
  constructGetPartnerFee,
  GetPartnerFeeFunctions,
} from './methods/delta/getPartnerFee';
import {
  constructGetBridgeInfo,
  GetBridgeInfoFunctions,
  BridgeInfo,
} from './methods/delta/getBridgeInfo';
import {
  constructGetMulticallHandlers,
  GetMulticallHandlersFunctions,
  MulticallHandlersResponse,
} from './methods/delta/getMulticallHandlers';
import {
  constructIsTokenSupportedInDelta,
  IsTokenSupportedInDeltaFunctions,
} from './methods/delta/isTokenSupportedInDelta';

import {
  constructGetQuote,
  GetQuoteFunctions,
  QuoteParams,
  QuoteResponse,
  QuoteWithDeltaPrice,
  QuoteWithMarketPrice,
  QuoteWithMarketPriceAsFallback,
} from './methods/quote/getQuote';

export { constructSwapSDK, SwapSDKMethods } from './methods/swap';

export {
  constructAllLimitOrdersHandlers,
  constructSubmitLimitOrder,
  LimitOrderHandlers,
} from './methods/limitOrders';

export {
  constructAllDeltaOrdersHandlers,
  constructSubmitDeltaOrder,
  DeltaOrderHandlers,
  SubmitDeltaOrderParams,
} from './methods/delta';

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
  constructSwapTx,
  // limitOrders methods:
  constructBuildLimitOrder,
  constructSignLimitOrder,
  constructCancelLimitOrder,
  constructFillOrderDirectly,
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
  // Delta methods
  constructBuildDeltaOrder,
  constructPostDeltaOrder,
  constructSignDeltaOrder,
  constructGetDeltaContract,
  constructGetDeltaPrice,
  constructGetDeltaOrders,
  constructApproveTokenForDelta,
  // Quote methods
  constructGetQuote,
  // different helpers
  constructGetPartnerFee,
  constructGetBridgeInfo,
  constructIsTokenSupportedInDelta,
  constructGetMulticallHandlers,
  constructEthersContractCaller, // same as constructEthersV5ContractCaller for backwards compatibility
  constructEthersV5ContractCaller,
  constructEthersV6ContractCaller,
  constructWeb3ContractCaller,
  constructViemContractCaller,
  txParamsToViemTxParams,
  constructAxiosFetcher,
  constructFetchFetcher,
  isFetcherError,
  isAllowance,
  constructToken,
  // custom fetcher
  FetcherError,
  FetcherFunction,
};

export type {
  Allowance,
  // contractCaller requirements
  EthersProviderDeps,
  EthersV5ProviderDeps,
  EthersV6ProviderDeps,
  MinViemClient,
  // types for swap methods:
  ApproveTokenFunctions,
  GetBalancesFunctions,
  GetSpenderFunctions,
  GetTokensFunctions,
  GetAdaptersFunctions,
  GetRateFunctions,
  BuildTxFunctions,
  GetSwapTxFunctions,
  // types for limitOrders methods:
  BuildLimitOrderFunctions,
  SignLimitOrderFunctions,
  CancelLimitOrderFunctions,
  FillOrderDirectlyFunctions,
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
  //types for Delta methods
  DeltaPrice,
  BridgePrice,
  DeltaPriceParams,
  DeltaAuctionOrder,
  ParaswapDeltaAuction,
  // bridge part of DeltaOrder
  BridgeMetadata,
  BridgeStatus,
  BridgeInput,
  Bridge,
  BridgeInfo,
  BuildDeltaOrderDataParams,
  BuildDeltaOrderFunctions,
  SignableDeltaOrderData,
  PostDeltaOrderFunctions,
  PostDeltaOrderParams,
  SignDeltaOrderFunctions,
  GetDeltaContractFunctions,
  GetDeltaPriceFunctions,
  GetDeltaOrdersFunctions,
  ApproveTokenForDeltaFunctions,
  // types for Quote methods
  GetQuoteFunctions,
  QuoteParams,
  QuoteResponse,
  QuoteWithDeltaPrice,
  QuoteWithMarketPrice,
  QuoteWithMarketPriceAsFallback,
  //common
  ConstructFetchInput,
  ContractCallerFunctions,
  ConstructProviderFetchInput,
  // other types
  GetPartnerFeeFunctions,
  GetBridgeInfoFunctions,
  IsTokenSupportedInDeltaFunctions,
  GetMulticallHandlersFunctions,
  MulticallHandlersResponse,
  Token,
  Address,
  AddressOrSymbol,
  PriceString,
  TxHash,
  TxSendOverrides,
  OptimalRate,
  OptionalRate,
  FetcherErrorInterface,
  ParaSwapVersion,
};

export { SDKConfig, constructPartialSDK } from './sdk/partial';
export { AllSDKMethods, constructFullSDK } from './sdk/full';
export {
  SimpleFetchSDK,
  SimpleSDK,
  constructSimpleSDK,
  ProviderOptions as SimpleSDKProviderOptions,
} from './sdk/simple';

export { ParaSwap } from './legacy';

// bundled methods for limitOrders
export * from './methods/limitOrders';
export * from './methods/limitOrders/helpers/types';
// bundled methods for nftOrders
export * from './methods/nftOrders';
export * from './methods/nftOrders/helpers/types';
export { AssetType } from './methods/nftOrders/helpers/misc';
