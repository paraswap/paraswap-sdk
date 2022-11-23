import { constructPartialSDK, SDKConfig } from './partial';
import {
  GetAdaptersFunctions,
  constructGetAdapters,
} from '../methods/swap/adapters';
import {
  GetBalancesFunctions,
  constructGetBalances,
} from '../methods/swap/balance';
import { GetRateFunctions, constructGetRate } from '../methods/swap/rates';
import {
  GetSpenderFunctions,
  constructGetSpender,
} from '../methods/swap/spender';
import { GetTokensFunctions, constructGetTokens } from '../methods/swap/token';
import {
  BuildTxFunctions,
  constructBuildTx,
} from '../methods/swap/transaction';

import {
  constructAxiosFetcher,
  constructFetchFetcher,
  constructEthersContractCaller,
  constructWeb3ContractCaller,
} from '../helpers';

import type {
  ConstructBaseInput,
  ConstructFetchInput,
  ContractCallerFunctions,
  TransactionContractCallerFn,
  TxHash,
  Address,
} from '../types';

import type { EthersProviderDeps } from '../helpers';
import type Web3 from 'web3';

import type { SwapSDKMethods } from './full';
import {
  BuildLimitOrderFunctions,
  constructBuildLimitOrder,
} from '../methods/limitOrders/buildOrder';
import {
  constructPostLimitOrder,
  PostLimitOrderFunctions,
} from '../methods/limitOrders/postOrder';
import {
  constructGetLimitOrders,
  GetLimitOrdersFunctions,
} from '../methods/limitOrders/getOrders';
import {
  constructGetLimitOrdersContract,
  GetLimitOrdersContractFunctions,
} from '../methods/limitOrders/getOrdersContract';
import {
  constructBuildLimitOrderTx,
  BuildLimitOrdersTxFunctions,
} from '../methods/limitOrders/transaction';
import {
  constructAllLimitOrdersHandlers,
  LimitOrderHandlers,
} from '../methods/limitOrders';

import {
  constructGetNFTOrdersContract,
  GetNFTOrdersContractFunctions,
} from '../methods/nftOrders/getOrdersContract';
import {
  constructGetNFTOrders,
  GetNFTOrdersFunctions,
} from '../methods/nftOrders/getOrders';
import {
  BuildNFTOrderFunctions,
  constructBuildNFTOrder,
} from '../methods/nftOrders/buildOrder';
import {
  constructPostNFTOrder,
  PostNFTOrderFunctions,
} from '../methods/nftOrders/postOrder';
import {
  constructBuildNFTOrderTx,
  BuildNFTOrdersTxFunctions,
} from '../methods/nftOrders/transaction';
import {
  constructAllNFTOrdersHandlers,
  NFTOrderHandlers,
} from '../methods/nftOrders';

import { constructSwapSDK } from '../methods/swap';
import type { AxiosRequirement } from '../helpers/fetchers/axios';

export type SwapFetchMethods = GetBalancesFunctions &
  GetTokensFunctions &
  GetSpenderFunctions &
  BuildTxFunctions &
  GetAdaptersFunctions &
  GetRateFunctions;

export type LimitOrdersFetchMethods = GetLimitOrdersContractFunctions &
  GetLimitOrdersFunctions &
  BuildLimitOrderFunctions &
  PostLimitOrderFunctions &
  BuildLimitOrdersTxFunctions;

export type NFTOrdersFetchMethods = GetNFTOrdersContractFunctions &
  GetNFTOrdersFunctions &
  BuildNFTOrderFunctions &
  PostNFTOrderFunctions &
  BuildNFTOrdersTxFunctions;

export type SimpleFetchSDK = {
  swap: SwapFetchMethods;
  limitOrders: LimitOrdersFetchMethods;
  nftOrders: NFTOrdersFetchMethods;
};

export type SimpleSDK = {
  swap: SwapSDKMethods<TxHash>;
  limitOrders: LimitOrderHandlers<TxHash>;
  nftOrders: NFTOrderHandlers<TxHash>;
};

export type FetcherOptions =
  | {
      axios: AxiosRequirement;
    }
  | { fetch: typeof fetch };

type SimpleOptions = ConstructBaseInput & FetcherOptions;

export type ProviderOptions = (EthersProviderDeps | { web3: Web3 }) & {
  account: Address;
};

/** @description construct SDK with methods that fetch from API and optionally with blockchain provider calling methods */
export function constructSimpleSDK(options: SimpleOptions): SimpleFetchSDK;
export function constructSimpleSDK(
  options: SimpleOptions,
  providerOptions: ProviderOptions
): SimpleSDK;
export function constructSimpleSDK(
  options: SimpleOptions,
  providerOptions?: ProviderOptions
): SimpleFetchSDK | SimpleSDK {
  const fetcher =
    'axios' in options
      ? constructAxiosFetcher(options.axios)
      : constructFetchFetcher(options.fetch);

  if (!providerOptions) {
    const config: ConstructFetchInput = {
      apiURL: options.apiURL,
      chainId: options.chainId,
      fetcher,
    };

    // include all available functions that don't need `contractCaller`
    const swap: SwapFetchMethods = constructPartialSDK(
      config,
      constructGetBalances,
      constructGetTokens,
      constructGetSpender,
      constructBuildTx,
      constructGetAdapters,
      constructGetRate
    );

    const limitOrders = constructPartialSDK(
      config,
      constructBuildLimitOrder,
      constructPostLimitOrder,
      constructGetLimitOrders,
      constructGetLimitOrdersContract,
      constructBuildLimitOrderTx
    );

    const nftOrders = constructPartialSDK(
      config,
      constructBuildNFTOrder,
      constructPostNFTOrder,
      constructGetNFTOrders,
      constructGetNFTOrdersContract,
      constructBuildNFTOrderTx
    );

    return { swap, limitOrders, nftOrders };
  }

  const contractCaller = constructSimpleContractCaller(providerOptions);

  const config: SDKConfig<TxHash> = {
    apiURL: options.apiURL,
    chainId: options.chainId,
    fetcher,
    contractCaller,
  };

  const swap: SwapSDKMethods<TxHash> = constructSwapSDK(config);

  const limitOrders: LimitOrderHandlers<TxHash> =
    constructAllLimitOrdersHandlers<TxHash>(config);

  const nftOrders: NFTOrderHandlers<TxHash> =
    constructAllNFTOrdersHandlers<TxHash>(config);

  return { swap, limitOrders, nftOrders };
}

function constructSimpleContractCaller(
  providerOptions: ProviderOptions
): ContractCallerFunctions<TxHash> {
  if ('ethersProviderOrSigner' in providerOptions) {
    const {
      staticCall,
      transactCall: _transactCall,
      signTypedDataCall,
    } = constructEthersContractCaller(providerOptions, providerOptions.account);

    const transactCall: TransactionContractCallerFn<TxHash> = async (
      params
    ) => {
      const contractTx = await _transactCall(params);

      // as soon as tx is sent
      // returning tx hash, it's up to the user to wait for tx
      return contractTx.hash;
    };

    return { staticCall, transactCall, signTypedDataCall };
  }

  const {
    staticCall,
    transactCall: _transactCall,
    signTypedDataCall,
  } = constructWeb3ContractCaller(
    providerOptions.web3,
    providerOptions.account
  );

  const transactCall: TransactionContractCallerFn<TxHash> = async (params) => {
    const unpromiEvent = await _transactCall(params);

    // as soon as tx is sent
    // returning tx hash, it's up to the user to wait for tx
    return new Promise<TxHash>((resolve, reject) => {
      unpromiEvent.once('transactionHash', resolve);
      unpromiEvent.once('error', reject);
    });
  };

  return { staticCall, transactCall, signTypedDataCall };
}
