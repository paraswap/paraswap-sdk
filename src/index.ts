import {
  constructApproveToken,
  ApproveTokenFunctions,
} from './methods/approve';
import {
  constructGetBalances,
  GetBalancesFunctions,
  isAllowance,
  Allowance,
} from './methods/balance';
import { constructGetSpender, GetSpenderFunctions } from './methods/spender';
import { constructGetAdapters, GetAdaptersFunctions } from './methods/adapters';
import { constructGetRate, GetRateFunctions } from './methods/rates';
import { constructGetTokens, GetTokensFunctions } from './methods/token';
import { BuildTxFunctions, constructBuildTx } from './methods/transaction';
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
} from './methods/limitOrders/getOrders';
import {
  PostLimitOrderFunctions,
  constructPostLimitOrder,
} from './methods/limitOrders/postOrder';
import {
  FillLimitOrderFunctions,
  FillOrderInput,
  PartialFillOrderInput,
  constructFillLimitOrder,
} from './methods/limitOrders/fillOrders';
import {
  ApproveTokenForLimitOrderFunctions,
  constructApproveTokenForLimitOrder,
} from './methods/limitOrders/approveForOrder';
import {
  GetLimitOrdersContractFunctions,
  constructGetLimitOrdersContract,
} from './methods/limitOrders/getOrdersContract';

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

export type {
  TransactionParams,
  BuildOptions,
  BuildOptionsBase,
  BuildOptionsWitWithMaxFee,
  BuildOptionsWithGasPrice,
  BuildTxInput,
} from './methods/transaction';
export type { Web3UnpromiEvent } from './helpers';
export * from './constants';
export * from './methods/limitOrders/helpers/types';
export type {
  SignableOrderData,
  SignableTypedData,
  OrderData,
} from './methods/limitOrders/helpers/buildOrderData';

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
  constructFillLimitOrder,
  constructApproveTokenForLimitOrder,
  constructGetLimitOrdersContract,
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
  ConstructFetchInput,
  ConstructProviderFetchInput,
  BuildLimitOrderInput,
  BuildOrderDataInput,
  PostLimitOrderFunctions,
  FillLimitOrderFunctions,
  FillOrderInput,
  PartialFillOrderInput,
  ApproveTokenForLimitOrderFunctions,
  GetLimitOrdersFunctions,
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
export { SimpleFetchSDK, constructSimpleSDK } from './sdk/simple';

export { ParaSwap } from './legacy';

// bundled methods for limitOrders
export * from './methods/limitOrders';

/* @hidden */
export { chainId2verifyingContract } from './methods/limitOrders/helpers/misc';
