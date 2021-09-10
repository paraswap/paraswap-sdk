import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import * as qs from 'qs';
import * as _ from 'lodash';
import Web3 from 'web3';
import type { SendOptions } from 'web3-eth-contract';

import {
  Address,
  AddressOrSymbol,
  Allowance,
  APIError,
  BuildOptions,
  NetworkID,
  PriceString,
  RateOptions,
  Transaction,
  // OptimalRatesWithPartnerFees,
} from './types';

import { OptimalRate } from 'paraswap-core';

import ERC20_ABI = require('./abi/erc20.json');

import AUGUSTUS_ABI = require('./abi/augustus-v4.json');

import { Token } from './lib/token';
import { SwapSide } from './constants';

const API_URL = 'https://apiv5.paraswap.io';

export class ParaSwap {
  constructor(
    private network: NetworkID = 1,
    private apiURL: string = API_URL,
    public web3Provider?: any,
  ) {
    if (web3Provider && !web3Provider.eth) {
      this.web3Provider = new Web3(web3Provider);
    }
  }

  private handleAPIError(e: AxiosError): APIError {
    if (e.response) {
      const { data, status } = e.response!;
      return { status, message: data.error, data };
    }
    return new Error(e.message);
  }

  private checkDexList(dexs?: string) {
    if (dexs) {
      const targetDEXs = dexs.split(',');

      if (!targetDEXs.length) {
        throw new Error('Invalid DEX list');
      }
    }
  }

  setWeb3Provider(web3Provider: any) {
    if (!web3Provider.eth) {
      this.web3Provider = new Web3(web3Provider);
    } else {
      this.web3Provider = web3Provider;
    }
    return this;
  }

  async getTokens() {
    try {
      const tokensURL = `${this.apiURL}/tokens/${this.network}`;
      const { data } = await axios.get(tokensURL);
      const tokens = (data.tokens as Token[]).map(
        t =>
          new Token(
            t.address,
            t.decimals,
            t.symbol,
            t.tokenType,
            t.mainConnector,
            t.connectors,
            t.network,
            t.img,
          ),
      );
      return tokens;
    } catch (e) {
      return this.handleAPIError(e);
    }
  }

  async getAdapters() {
    try {
      const { data } = await axios.get(
        `${this.apiURL}/adapters/${this.network}`,
      );
      return data;
    } catch (e) {
      return this.handleAPIError(e);
    }
  }

  async getRateByRoute(
    route: AddressOrSymbol[],
    amount: PriceString,
    userAddress?: Address,
    side: SwapSide = SwapSide.SELL,
    options?: RateOptions,
    srcDecimals?: number,
    destDecimals?: number,
  ): Promise<OptimalRate | APIError> {
    try {
      const {
        excludeDEXS,
        includeDEXS,
        excludePricingMethods,
        excludeContractMethods,
        includeContractMethods,
        adapterVersion,
        excludePools,
        partner,
        maxImpact,
        maxUSDImpact,
      } = options || {};

      // TODO: all use typed enum for include/excludeDEXS
      // TODO: check the semver validity for the adapterVersion
      this.checkDexList(includeDEXS);
      this.checkDexList(excludeDEXS);

      const _excludePricingMethods = excludePricingMethods
        ? excludePricingMethods.join(',')
        : '';
      const _excludeContractMethods = excludeContractMethods
        ? excludeContractMethods.join(',')
        : '';
      const _includeContractMethods = includeContractMethods
        ? includeContractMethods.join(',')
        : '';

      if (route.length < 2) {
        return { message: 'Invalid Route' };
      }

      const query = qs.stringify({
        excludeDEXS,
        includeDEXS,
        excludePools,
        version: adapterVersion,
        excludePricingMethods: _excludePricingMethods,
        excludeContractMethods: _excludeContractMethods,
        includeContractMethods: _includeContractMethods,
        srcDecimals,
        destDecimals,
        maxImpact,
        maxUSDImpact,
        userAddress,
      });

      const pricesURL = `${this.apiURL}/prices/?route=${route.join(
        '-',
      )}&amount=${amount}&${query}&side=${side}&network=${
        this.network
      }&partner=${partner || 'paraswap.io'}`;

      const { data } = await axios.get(pricesURL);

      return data.priceRoute;
    } catch (e) {
      return this.handleAPIError(e);
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
    destDecimals?: number,
  ): Promise<OptimalRate | APIError> {
    try {
      const {
        excludeDEXS,
        includeDEXS,
        excludePricingMethods,
        excludeContractMethods,
        includeContractMethods,
        adapterVersion,
        excludePools,
        partner,
        maxImpact,
        maxUSDImpact,
      } = options;

      // TODO: all use typed enum for include/excludeDEXS
      // TODO: check the semver validity for the adapterVersion
      this.checkDexList(includeDEXS);
      this.checkDexList(excludeDEXS);

      const _excludePricingMethods = excludePricingMethods
        ? excludePricingMethods.join(',')
        : undefined;
      const _excludeContractMethods = excludeContractMethods
        ? excludeContractMethods.join(',')
        : undefined;
      const _includeContractMethods = includeContractMethods
        ? includeContractMethods.join(',')
        : undefined;

      const query = qs.stringify({
        excludeDEXS,
        includeDEXS,
        excludePools,
        version: adapterVersion,
        excludePricingMethods: _excludePricingMethods,
        excludeContractMethods: _excludeContractMethods,
        includeContractMethods: _includeContractMethods,
        srcDecimals,
        destDecimals,
        maxImpact,
        maxUSDImpact,
        userAddress,
      });

      const pricesURL = `${
        this.apiURL
      }/prices/?srcToken=${srcToken}&destToken=${destToken}&amount=${amount}${
        query ? '&' + query : ''
      }&side=${side}&network=${this.network}&partner=${
        partner || 'paraswap.io'
      }`;
      const { data } = await axios.get(pricesURL);
      return data.priceRoute;
    } catch (e) {
      return this.handleAPIError(e);
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
    deadline?: string,
  ) {
    try {
      const query = _.isEmpty(options) ? '' : qs.stringify(options);

      const txURL = `${this.apiURL}/transactions/${this.network}/?${query}`;

      const txConfig = {
        priceRoute,
        srcToken,
        destToken,
        srcAmount,
        destAmount,
        userAddress,
        partner,
        partnerAddress,
        partnerFeeBps,
        receiver,
        srcDecimals,
        destDecimals,
        permit,
        deadline,
      };

      const { data } = await axios.post(txURL, txConfig);

      return data as Transaction;
    } catch (e) {
      return this.handleAPIError(e);
    }
  }

  async getTokenTransferProxy(_provider?: any): Promise<Address | APIError> {
    try {
      const { data } = await axios.get(
        `${this.apiURL}/adapters/contracts?network=${this.network}`,
      );
      return data.TokenTransferProxy;
    } catch (e) {
      return this.handleAPIError(e);
    }
  }

  async getAllowances(
    userAddress: Address,
    tokenAddresses: Address[],
  ): Promise<Allowance[] | APIError> {
    try {
      const balancesOrError = await this.getBalances(userAddress);

      if ((<APIError>balancesOrError).message) {
        return <APIError>balancesOrError;
      }

      return (<Token[]>balancesOrError)
        .filter(t =>
          tokenAddresses.find(
            addr => addr.toLowerCase() === t.address.toLowerCase(),
          ),
        )
        .map(token => ({
          tokenAddress: token.address,
          allowance: token.allowance || '0',
        }));
    } catch (e) {
      return { message: e.message };
    }
  }

  async getAllowance(
    userAddress: Address,
    tokenAddress: Address,
  ): Promise<Allowance | APIError> {
    try {
      const allowanceOrError = await this.getAllowances(userAddress, [
        tokenAddress,
      ]);

      if ((<APIError>allowanceOrError).message) {
        return <APIError>allowanceOrError;
      }

      const allowances = allowanceOrError as Allowance[];

      if (!allowances.length) {
        return { message: 'Not Found' };
      }

      return allowances[0];
    } catch (e) {
      return { message: e.message };
    }
  }

  async approveTokenBulk(
    amount: PriceString,
    userAddress: Address,
    tokenAddresses: Address[],
    _provider?: any,
  ): Promise<string[]> {
    return await Promise.all(
      tokenAddresses.map(tokenAddress =>
        this.approveToken(amount, userAddress, tokenAddress, _provider),
      ),
    );
  }

  async approveToken(
    amount: PriceString,
    userAddress: Address,
    tokenAddress: Address,
    _provider?: any,
    sendOptions?: Omit<SendOptions, 'from'>,
  ): Promise<string> {
    return new Promise(async (resolve, reject) => {
      const spender = await this.getTokenTransferProxy();

      const provider = _provider || this.web3Provider;

      const contract: any = new provider!.eth.Contract(ERC20_ABI, tokenAddress);

      return contract.methods
        .approve(spender, amount)
        .send(
          { from: userAddress, ...sendOptions },
          (err: any, txHash: string) => {
            if (err) return reject(err.message);
            resolve(txHash);
          },
        );
    });
  }

  async getMarketNames(): Promise<string[] | APIError> {
    try {
      const { data } = await axios.get(
        `${this.apiURL}/adapters/list?namesOnly=true`,
      );

      return data;
    } catch (e) {
      return this.handleAPIError(e);
    }
  }

  async getBalance(
    userAddress: Address,
    token: AddressOrSymbol,
  ): Promise<Token | APIError> {
    return new Promise(async (resolve, reject) => {
      try {
        const tokensURL = `${this.apiURL}/users/tokens/${this.network}/${userAddress}/${token}`;

        const { data } = await axios.get(tokensURL);

        resolve(data.token);
      } catch (e) {
        reject({ error: e.message });
      }
    });
  }

  async getBalances(userAddress: Address): Promise<Token[] | APIError> {
    return new Promise(async (resolve, reject) => {
      try {
        const tokensURL = `${this.apiURL}/users/tokens/${this.network}/${userAddress}`;

        const { data } = await axios.get(tokensURL);
        const tokens = (data.tokens as Token[]).map(t => {
          let token = new Token(t.address, t.decimals, t.symbol);
          token.balance = t.balance;
          token.allowance = t.allowance;
          return token;
        });

        resolve(tokens);
      } catch (e) {
        reject({ error: e.message });
      }
    });
  }
}
