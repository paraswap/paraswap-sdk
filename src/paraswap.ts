import axios, {AxiosError} from 'axios';
import * as async from 'async';
import * as qs from 'qs';
import * as _ from 'lodash';

import {
  Adapters,
  Address, Allowance,
  APIError, APIQuery,
  ETHER_ADDRESS,
  NetworkID,
  OptimalRates,
  PriceString, RateOptions,
  Transaction,
} from "./types";

import ERC20_ABI = require("./abi/erc20.json");
import AUGUSTUS_ABI = require("./abi/augustus.json");

import {Token} from "./lib/token";
import {NULL_ADDRESS, TransactionBuilder} from "./lib/transaction-builder";

const API_URL = 'https://paraswap.io/api/v1';

export class ParaSwap {
  adapters?: Adapters;
  tokens: Token[] = [];

  constructor(private network: NetworkID = 1, private apiURL: string = API_URL, public web3Provider?: any) {
  }

  setWeb3Provider(web3Provider: any) {
    this.web3Provider = web3Provider;
    return this;
  }

  private handleAPIError(e: AxiosError): APIError {
    if (e.response) {
      const {data, status} = e.response!;
      return {status, message: data.error};
    }
    return new Error(e.message);
  }

  async getTokens() {
    try {
      const tokensURL = `${this.apiURL}/tokens/${this.network}`;
      const {data} = await axios.get(tokensURL);
      this.tokens = (data.tokens as Token[]).map(t => new Token(t.address, t.decimals, t.symbol));
      return this.tokens;

    } catch (e) {
      return this.handleAPIError(e);
    }
  }

  async getAdapters() {
    try {
      const {data} = await axios.get(`${this.apiURL}/adapters/${this.network}`);

      this.adapters = data;

      return this.adapters;

    } catch (e) {
      return this.handleAPIError(e);
    }
  }

  private checkDexList(dexs?: string) {
    if (dexs) {
      const targetDEXs = dexs.split(',');

      if (!targetDEXs.length) {
        throw new Error('Invalid DEX list');
      }
    }
  }

  async getRate(srcToken: Address, destToken: Address, srcAmount: PriceString, options?: RateOptions): Promise<OptimalRates | APIError> {
    try {

      const {excludeDEXS, includeDEXS} = options || {};

      this.checkDexList(includeDEXS);
      this.checkDexList(excludeDEXS);

      const pricesURL = `${this.apiURL}/prices/${this.network}/${srcToken}/${destToken}/${srcAmount}/${includeDEXS || ''}?excludeDEXS=${excludeDEXS || ''}`;

      const {data} = await axios.get(pricesURL);
      return data.priceRoute as OptimalRates;
    } catch (e) {
      return this.handleAPIError(e);
    }
  }

  async buildTx(srcToken: Address, destToken: Address, srcAmount: PriceString, destAmount: PriceString, priceRoute: OptimalRates, userAddress: Address, referrer: string, receiver?: Address, options: APIQuery = {}) {
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
        referrer,
        payTo: receiver || ''
      };

      const {data} = await axios.post(txURL, txConfig);

      return data as Transaction;
    } catch (e) {
      return this.handleAPIError(e);
    }
  }

  //Warning: ParaSwapPool is not supported when building locally
  async buildTxLocally(srcToken: Token, destToken: Token, srcAmount: string, minDestinationAmount: string, priceRoute: OptimalRates, userAddress: string, referrer: string, gasPrice: string, receiver: string = NULL_ADDRESS, donatePercent: string = '0') {
    if (!this.adapters) {
      await this.getAdapters();
    }

    if (!this.tokens.length) {
      await this.getTokens();
    }

    const transaction = new TransactionBuilder(this.network, this.web3Provider!, this.adapters!, this.tokens);

    return transaction.buildTransaction(srcToken, destToken, srcAmount, minDestinationAmount, priceRoute, userAddress, referrer, gasPrice, receiver, donatePercent);
  }

  async getSpender(_provider?: any): Promise<Address | APIError> {
    if (!this.adapters) {
      const adaptersOrError = await this.getAdapters();

      if ((adaptersOrError as APIError).message) {
        return adaptersOrError as APIError;
      }

      this.adapters = adaptersOrError as Adapters;
    }

    const provider = this.web3Provider || _provider;

    const augustusAddress = this.adapters.augustus.exchange;

    const augustusContract = new provider.eth.Contract(AUGUSTUS_ABI, augustusAddress);

    return augustusContract.methods.getTokenTransferProxy().call();
  }

  async getAllowances(userAddress: Address, tokenAddresses: Address[]): Promise<Allowance[] | APIError> {
    return new Promise(async (resolve, reject) => {
      const spenderOrError = await this.getSpender();

      if ((spenderOrError as APIError).message) {
        return reject(spenderOrError as APIError);
      }

      const spender = spenderOrError as Address;

      return async.map(
        tokenAddresses,
        async (tokenAddress: Address, callback: any) => {
          try {
            const allowance = await this.getAllowance(userAddress, tokenAddress, spender);
            callback(null, {tokenAddress, allowance});
          } catch (e) {
            console.error("ERROR_getAllowance", tokenAddress, e);
            callback(null, {tokenAddress, allowance: '0'});
          }
        },
        (error, results: any) => {
          if (error) {
            console.error("ERROR_getAllowances", error);
            return reject({message: error.message});
          }
          resolve(results);
        }
      )
    });
  }

  async getAllowance(userAddress: Address, tokenAddress: Address, _spender?: string) {
    if (tokenAddress.toLowerCase() === ETHER_ADDRESS) {
      return '0';
    }

    const spender = _spender || await this.getSpender(this.web3Provider!);

    const contract = new this.web3Provider!.eth.Contract(ERC20_ABI, tokenAddress);

    return contract.methods.allowance(userAddress, spender).call();
  }

  async approveTokenBulk(amount: PriceString, userAddress: Address, tokenAddresses: Address[]): Promise<string[]> {
    return await Promise.all(
      tokenAddresses.map(tokenAddress => this.approveToken(amount, userAddress, tokenAddress))
    )
  }

  async approveToken(amount: PriceString, userAddress: Address, tokenAddress: Address): Promise<string> {
    return new Promise(async (resolve, reject) => {
      const spender = await this.getSpender();

      const contract: any = new this.web3Provider!.eth.Contract(ERC20_ABI, tokenAddress);

      return contract.methods.approve(spender, amount).send({from: userAddress},
        (err: any, txHash: string) => {
          if (err) return reject(err.message);
          resolve(txHash);
        });
    })
  }
}
