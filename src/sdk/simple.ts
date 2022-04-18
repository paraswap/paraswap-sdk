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
import { AllSDKMethods, constructFullSDK } from './full';

export type SDKFetchMethods = GetBalancesFunctions &
  GetTokensFunctions &
  GetSpenderFunctions &
  BuildTxFunctions &
  GetAdaptersFunctions &
  GetRateFunctions;

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
export function constructSimpleSDK(options: SimpleOptions): SDKFetchMethods;
export function constructSimpleSDK(
  options: SimpleOptions,
  providerOptions: ProviderOptions
): AllSDKMethods<TxHash>;
export function constructSimpleSDK(
  options: SimpleOptions,
  providerOptions?: ProviderOptions
): SDKFetchMethods | AllSDKMethods<TxHash> {
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
    const sdk: SDKFetchMethods = constructPartialSDK(
      config,
      constructGetBalances,
      constructGetTokens,
      constructGetSpender,
      constructBuildTx,
      constructGetAdapters,
      constructGetRate
    );

    return sdk;
  }

  const contractCaller = constructSimpleContractCaller(providerOptions);

  const config: SDKConfig<TxHash> = {
    apiURL: options.apiURL,
    network: options.network,
    fetcher,
    contractCaller,
  };

  const sdk: AllSDKMethods<TxHash> = constructFullSDK(config);

  return sdk;
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
