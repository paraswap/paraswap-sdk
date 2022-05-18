import { constructPartialSDK, SDKConfig } from './partial';
import {
  GetAdaptersFunctions,
  constructGetAdapters,
} from '../methods/adapters';
import { GetBalancesFunctions, constructGetBalances } from '../methods/balance';
import { GetRateFunctions, constructGetRate } from '../methods/rates';
import { GetSpenderFunctions, constructGetSpender } from '../methods/spender';
import { GetTokensFunctions, constructGetTokens } from '../methods/token';
import { BuildTxFunctions, constructBuildTx } from '../methods/transaction';

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

import type AxiosStatic from 'axios';
import { constructFullSDK, SwapSDKMethods } from './full';
import {
  BuildLimitOrderFunctions,
  constructBuildLimitOrder,
} from '../methods/limitOrders/buildOrder';
import {
  constructPostLimitOrder,
  PostLimitOrderFunctions,
} from '../methods/limitOrders/postOrder';
// import {
//   constructGetLimitOrders,
//   GetLimitOrdersFunctions,
// } from '../methods/limitOrders/getOrders';
import {
  constructGetLimitOrdersContract,
  GetLimitOrdersContractFunctions,
} from '../methods/limitOrders/getOrdersContract';
import {
  constructAllLimitOrdersHandlers,
  LimitOrderHandlers,
} from '../methods/limitOrders';

export type SwapFetchMethods = GetBalancesFunctions &
  GetTokensFunctions &
  GetSpenderFunctions &
  BuildTxFunctions &
  GetAdaptersFunctions &
  GetRateFunctions;

export type LimitOrdersFetchMethods = GetLimitOrdersContractFunctions &
  // GetLimitOrdersFunctions &
  BuildLimitOrderFunctions &
  PostLimitOrderFunctions;

export type SimpleFetchSDK = {
  swap: SwapFetchMethods;
  limitOrders: LimitOrdersFetchMethods;
};

export type SimpleSDK = {
  swap: SwapSDKMethods<TxHash>;
  limitOrders: LimitOrderHandlers<TxHash>;
};

type SimpleOptions = ConstructBaseInput &
  (
    | {
        axios: typeof AxiosStatic;
      }
    | { fetch: typeof fetch }
  );

type ProviderOptions = (EthersProviderDeps | { web3: Web3 }) & {
  account: Address;
};

/** @description construct SDK with methods that fetch from API and optionally with token approval methods */
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
      network: options.network,
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
      // constructGetLimitOrders, @TODO reenable when removing provider dependency
      constructGetLimitOrdersContract
    );

    return { swap, limitOrders };
  }

  const contractCaller = constructSimpleContractCaller(providerOptions);

  const config: SDKConfig<TxHash> = {
    apiURL: options.apiURL,
    network: options.network,
    fetcher,
    contractCaller,
  };

  const swap: SwapSDKMethods<TxHash> = constructFullSDK(config);

  const limitOrders: LimitOrderHandlers<TxHash> =
    constructAllLimitOrdersHandlers<TxHash>(config);

  return { swap, limitOrders };
}

function constructSimpleContractCaller(
  providerOptions: ProviderOptions
): ContractCallerFunctions<TxHash> {
  if ('ethersProviderOrSigner' in providerOptions) {
    const {
      staticCall,
      transactCall: _transactCall,
      signTypedDataCall,
      getLogsCall,
    } = constructEthersContractCaller(providerOptions, providerOptions.account);

    const transactCall: TransactionContractCallerFn<TxHash> = async (
      params
    ) => {
      const contractTx = await _transactCall(params);

      // as soon as tx is sent
      // returning tx hash, it's up to the user to wait for tx
      return contractTx.hash;
    };

    return { staticCall, transactCall, signTypedDataCall, getLogsCall };
  }

  const {
    staticCall,
    transactCall: _transactCall,
    signTypedDataCall,
    getLogsCall,
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

  return { staticCall, transactCall, signTypedDataCall, getLogsCall };
}
