import type { AxiosStatic } from 'axios';
import type Web3 from 'web3';
import type { SendOptions } from 'web3-eth-contract';
import type { ContractTransaction } from '@ethersproject/contracts';

import { API_URL, SwapSide } from '../constants';
import {
  AllSDKMethods,
  constructBuildTx,
  constructGetAdapters,
  constructGetBalances,
  constructGetSpender,
  constructGetTokens,
  constructPartialSDK,
  constructGetRate,
  constructFullSDK,
  PriceString,
  Address,
  OptimalRate,
} from '..';
import { assert } from 'ts-essentials';
import {
  constructAxiosFetcher,
  constructFetchFetcher,
  constructEthersContractCaller,
  constructWeb3ContractCaller,
  isFetcherError,
  Web3UnpromiEvent,
  EthersProviderDeps,
} from '../helpers';

import type { RateOptions } from '../methods/rates';
import type { BuildOptions, TransactionParams } from '../methods/transaction';
import type { AddressOrSymbol, Token, FetcherFunction } from '../types';
import type { Allowance } from '../methods/balance';
import { isDataWithError } from '../helpers/misc';

export type APIError = {
  message: string;
  status?: number;
  data?: any;
};
type Fetch = typeof fetch;

type TxResponse = Web3UnpromiEvent | ContractTransaction;

/** @deprecated */
export class ParaSwap {
  sdk: Partial<AllSDKMethods<TxResponse>> = {};
  fetcher: FetcherFunction;

  constructor(
    private network: number = 1,
    private apiURL: string = API_URL,
    public web3Provider?: Web3,
    public ethersDeps?: EthersProviderDeps, // need to be a provider with signer for approve requests
    public account?: Address,
    public axios?: AxiosStatic,
    public fetch?: Fetch
  ) {
    const fetcher = axios
      ? constructAxiosFetcher(axios)
      : fetch
      ? constructFetchFetcher(fetch)
      : null;

    assert(fetcher, 'at least one fetcher is needed');
    this.fetcher = fetcher;

    if (!web3Provider && !ethersDeps) {
      this.sdk = constructPartialSDK(
        { fetcher, apiURL, network },
        constructGetBalances,
        constructGetTokens,
        constructGetSpender,
        constructBuildTx,
        constructGetAdapters,
        constructGetRate
      );

      return;
    }

    const contractCaller = ethersDeps
      ? constructEthersContractCaller(ethersDeps, account)
      : web3Provider
      ? constructWeb3ContractCaller(web3Provider, account)
      : null;

    if (contractCaller) {
      this.sdk = constructFullSDK<TxResponse>({
        fetcher,
        contractCaller,
        apiURL,
        network,
      });
    }
  }

  private static handleAPIError(e: unknown): APIError {
    // @CONSIDER if some errors should not be replaced
    if (!isFetcherError(e)) {
      return { message: `Unknown error: ${e}` };
    }

    if (!e.response) {
      return { message: e.message };
    }

    const { status, data } = e.response;

    return {
      status,
      message: isDataWithError(data) ? data.error : e.message,
      data,
    };
  }

  private static async extractHasFromTxResponse(
    txResponse: TxResponse
  ): Promise<string> {
    if ('once' in txResponse) {
      return new Promise<string>((resolve, reject) => {
        txResponse.once('transactionHash', resolve);
        txResponse.once('error', reject);
      });
    }

    const { hash } = await txResponse;
    return hash;
  }

  setWeb3Provider(web3Provider: Web3, account?: string): this {
    const contractCaller = constructWeb3ContractCaller(web3Provider, account);
    const { apiURL, network, fetcher } = this;

    this.sdk = constructFullSDK({
      fetcher,
      contractCaller,
      apiURL,
      network,
    });

    this.web3Provider = web3Provider;
    this.ethersDeps = undefined;
    this.account = account;

    return this;
  }

  setEthersProvider(ethersDeps: EthersProviderDeps, account?: string): this {
    const contractCaller = constructEthersContractCaller(ethersDeps, account);
    const { apiURL, network, fetcher } = this;

    this.sdk = constructFullSDK({
      fetcher,
      contractCaller,
      apiURL,
      network,
    });

    this.web3Provider = undefined;
    this.ethersDeps = ethersDeps;
    this.account = account;

    return this;
  }

  // @CONSIDER I still think there's no need for a class Token
  async getTokens(): Promise<Token[] | APIError> {
    assert(this.sdk.getTokens, 'sdk must be initialized with a fetcher');
    try {
      return await this.sdk.getTokens();
    } catch (e) {
      return ParaSwap.handleAPIError(e);
    }
  }

  async getAdapters() {
    assert(this.sdk.getAdapters, 'sdk must be initialized with a fetcher');
    try {
      return await this.sdk.getAdapters({ type: 'object' });
    } catch (e) {
      return ParaSwap.handleAPIError(e);
    }
  }

  async getRateByRoute(
    route: AddressOrSymbol[],
    amount: PriceString,
    userAddress?: Address,
    side: SwapSide = SwapSide.SELL,
    options?: RateOptions,
    srcDecimals?: number,
    destDecimals?: number
  ): Promise<OptimalRate | APIError> {
    assert(this.sdk.getRateByRoute, 'sdk must be initialized with a fetcher');
    if (route.length < 2) {
      return { message: 'Invalid Route' };
    }

    try {
      return await this.sdk.getRateByRoute({
        route,
        amount,
        userAddress,
        side,
        options,
        srcDecimals,
        destDecimals,
      });
    } catch (e) {
      // @TODO this overrides any non FetchError,
      // including Error('Invalid DEX list')
      return ParaSwap.handleAPIError(e);
    }
  }

  async getRate(
    srcToken: AddressOrSymbol,
    destToken: AddressOrSymbol,
    amount: PriceString,
    userAddress?: Address,
    side: SwapSide = SwapSide.SELL,
    options: RateOptions = {},
    srcDecimals?: number,
    destDecimals?: number
  ): Promise<OptimalRate | APIError> {
    assert(this.sdk.getRate, 'sdk must be initialized with a fetcher');
    try {
      return await this.sdk.getRate({
        srcToken,
        destToken,
        amount,
        userAddress,
        side,
        options,
        srcDecimals,
        destDecimals,
      });
    } catch (e) {
      return ParaSwap.handleAPIError(e);
    }
  }

  async buildTx(
    srcToken: Address,
    destToken: Address,
    srcAmount: PriceString,
    destAmount: PriceString,
    priceRoute: OptimalRate,
    userAddress: Address,
    partner?: string,
    partnerAddress?: string,
    partnerFeeBps?: number,
    receiver?: Address,
    options: BuildOptions = {},
    srcDecimals?: number,
    destDecimals?: number,
    permit?: string,
    deadline?: string
  ): Promise<TransactionParams | APIError> {
    assert(this.sdk.buildTx, 'sdk must be initialized with a fetcher');
    try {
      return await this.sdk.buildTx(
        {
          srcToken,
          destToken,
          srcAmount,
          destAmount,
          priceRoute,
          userAddress,
          partner,
          partnerAddress,
          partnerFeeBps,
          receiver,
          srcDecimals,
          destDecimals,
          permit,
          deadline,
        },
        options
      );
    } catch (e) {
      return ParaSwap.handleAPIError(e);
    }
  }

  async getTokenTransferProxy(_provider?: any): Promise<Address | APIError> {
    assert(this.sdk.getSpender, 'sdk must be initialized with a fetcher');
    try {
      return await this.sdk.getSpender();
    } catch (e) {
      return ParaSwap.handleAPIError(e);
    }
  }

  async getAllowances(
    userAddress: Address,
    tokenAddresses: Address[]
  ): Promise<Allowance[] | APIError> {
    assert(this.sdk.getAllowances, 'sdk must be initialized with a fetcher');
    try {
      return await this.sdk.getAllowances(userAddress, tokenAddresses);
    } catch (e) {
      return ParaSwap.handleAPIError(e);
    }
  }

  async getAllowance(
    userAddress: Address,
    tokenAddress: Address
  ): Promise<Allowance | APIError> {
    assert(this.sdk.getAllowance, 'sdk must be initialized with a fetcher');
    try {
      return await this.sdk.getAllowance(userAddress, tokenAddress);
    } catch (e) {
      return ParaSwap.handleAPIError(e);
    }
  }

  async approveTokenBulk(
    amount: PriceString,
    userAddress: Address,
    tokenAddresses: Address[],
    /** @deprecated */
    _provider?: any // not used, can't detect if Ethers or Web3 provider without importing them
  ): Promise<string[] | APIError> {
    // @TODO expand sendOptions
    assert(
      this.sdk.approveTokenBulk,
      'sdk must be initialized with a provider'
    );
    try {
      // @TODO allow to pass Web3 specific sendOptions ({from: userAddress})
      const txResponses = await this.sdk.approveTokenBulk(
        amount,
        tokenAddresses
      );

      return await Promise.all(
        txResponses.map(ParaSwap.extractHasFromTxResponse)
      );
    } catch (e) {
      return ParaSwap.handleAPIError(e);
    }
  }

  async approveToken(
    amount: PriceString,
    userAddress: Address,
    tokenAddress: Address,
    /** @deprecated */
    _provider?: any, // not used, can't detect if Ethers or Web3 provider without importing them
    sendOptions?: Omit<SendOptions, 'from'>
  ): Promise<string | APIError> {
    // @TODO expand sendOptions
    assert(this.sdk.approveToken, 'sdk must be initialized with a provider');
    try {
      // @TODO allow to pass Web3 specific sendOptions ({from: userAddress})
      const txResponse = await this.sdk.approveToken(amount, tokenAddress);

      return await ParaSwap.extractHasFromTxResponse(txResponse);
    } catch (e) {
      return ParaSwap.handleAPIError(e);
    }
  }

  async getMarketNames(): Promise<string[] | APIError> {
    assert(this.sdk.getAdapters, 'sdk must be initialized with a fetcher');
    try {
      return await this.sdk.getAdapters({ type: 'list', namesOnly: true });
    } catch (e) {
      return ParaSwap.handleAPIError(e);
    }
  }

  async getBalance(
    userAddress: Address,
    token: AddressOrSymbol
  ): Promise<Token | APIError> {
    assert(this.sdk.getBalance, 'sdk must be initialized with a fetcher');
    try {
      return await this.sdk.getBalance(userAddress, token);
    } catch (e) {
      return ParaSwap.handleAPIError(e);
    }
  }

  async getBalances(userAddress: Address): Promise<Token[] | APIError> {
    assert(this.sdk.getBalances, 'sdk must be initialized with a fetcher');
    try {
      return await this.sdk.getBalances(userAddress);
    } catch (e) {
      return ParaSwap.handleAPIError(e);
    }
  }
}
