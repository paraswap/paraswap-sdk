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
  constructBuildLimitOrder,
} from './methods/limitOrders/buildOrder';
import {
  SignLimitOrderFunctions,
  constructSignLimitOrder,
} from './methods/limitOrders/signOrder';
import {
  CancelOrderFunctions,
  constructCancelLimitOrder,
} from './methods/limitOrders/cancelOrder';

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
import {
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

// can import these individually
// and use in constructPartialSDK only what you need
// unused should tree-shake
export {
  constructApproveToken,
  constructGetBalances, // getAllowances is inside
  constructGetSpender, // this was getTokenTransferProxy
  constructGetTokens,
  constructBuildTx,
  constructBuildLimitOrder,
  constructSignLimitOrder,
  constructCancelLimitOrder,
  constructEthersContractCaller,
  constructWeb3ContractCaller,
  constructAxiosFetcher,
  constructFetchFetcher,
  constructGetAdapters,
  constructGetRate,
  isFetcherError,
  isAllowance,
  constructToken,
};

export type {
  Allowance,
  EthersProviderDeps,
  ApproveTokenFunctions,
  GetBalancesFunctions,
  GetSpenderFunctions,
  GetTokensFunctions,
  GetAdaptersFunctions,
  GetRateFunctions,
  BuildTxFunctions,
  BuildLimitOrderFunctions,
  SignLimitOrderFunctions,
  CancelOrderFunctions,
  ConstructFetchInput,
  ConstructProviderFetchInput,
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
export { SDKFetchMethods, constructSimpleSDK } from './sdk/simple';

export { ParaSwap } from './legacy';
