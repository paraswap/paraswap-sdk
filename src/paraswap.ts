import axios, {AxiosError} from 'axios';
import Web3 = require("web3");
import * as async from 'async';
import * as qs from 'qs';
import _ = require("lodash");

import {
  Address,
  APIError, APIQuery,
  ETHER_ADDRESS,
  NetworkID,
  OptimalRates,
  PriceString,
  Token,
  Transaction,
} from "./types";

const ERC20_ABI = require('./abi/erc20.json');
import * as AUGUSTUS_ABI from "./abi/augustus.json";
import {ParaswapFeed} from "./paraswap-feed";

declare let web3: any;

export class ParaSwap {
  constructor(private network: number, private apiURL: string, public web3Provider?: Web3) {

  }

  handleAPIError(e: AxiosError): APIError {
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
      return (data.tokens as Token[]).map(t => new Token(t.address, t.decimals, t.symbol));
    } catch (e) {
      return this.handleAPIError(e);
    }
  }

  async getContractRate(srcToken: Address, destToken: Address, srcAmount: PriceString): Promise<OptimalRates | APIError> {
    return await new ParaswapFeed(this.network).getRate(srcToken, destToken, srcAmount);
  }

  async getRate(srcToken: Address, destToken: Address, srcAmount: PriceString, exchanges: string = ''): Promise<OptimalRates | APIError> {
    try {
      if (exchanges) {
        const targetDEXs = exchanges.split(',');

        if (!targetDEXs.length) {
          throw new Error('Invalid DEX list');
        }
      }

      const pricesURL = `${this.apiURL}/prices/${this.network}/${srcToken}/${destToken}/${srcAmount}/${exchanges}`;
      const {data} = await axios.get(pricesURL);
      return data.priceRoute as OptimalRates;
    } catch (e) {
      return this.handleAPIError(e);
    }
  }

  async buildTx(srcToken: Address, destToken: Address, srcAmount: PriceString, destAmount: PriceString, priceRoute: OptimalRates, userAddress: Address, referrer: string, payTo?: Address, options: APIQuery = {}) {
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
        payTo: payTo || ''
      };

      const {data} = await axios.post(txURL, txConfig);

      return data as Transaction;
    } catch (e) {
      return this.handleAPIError(e);
    }
  }

  private async getSpender(network: NetworkID, provider: Web3): Promise<Address> {
    const augustusAddress = AUGUSTUS_ABI.addresses[network];

    const augustusContract = new provider.eth.Contract(AUGUSTUS_ABI.abi, augustusAddress);

    return augustusContract.methods.getTokenTransferProxy().call();
  }

  async getAllowances(userAddress: Address, tokenAddresses: Address[], network: NetworkID) {
    return new Promise(async (resolve, reject) => {
      const spender = await this.getSpender(network, this.web3Provider!);

      async.map(
        tokenAddresses,
        async (tokenAddress: Address, callback: any) => {
          try {
            const allowance = await this.getAllowance(userAddress, tokenAddress, network, spender);
            callback(null, {tokenAddress, allowance});
          } catch (e) {
            console.error("ERROR_getAllowance", tokenAddress, e);
            callback(null, {tokenAddress, allowance: '0'});
          }
        },
        (error, results: any) => {
          if (error) {
            console.error("ERROR_getAllowances", error);
            return reject({error});
          }
          resolve(results);
        }
      )
    });
  }

  async getAllowance(userAddress: Address, tokenAddress: Address, network: NetworkID, _spender?: string) {
    if (tokenAddress.toLowerCase() === ETHER_ADDRESS) {
      return '0';
    }

    const spender = _spender || await this.getSpender(network, this.web3Provider!);

    const contract = new this.web3Provider!.eth.Contract(ERC20_ABI, tokenAddress);

    return contract.methods.allowance(userAddress, spender).call();
  }

  async approveTokenBulk(amount: PriceString, userAddress: Address, tokenAddresses: Address[], network: NetworkID): Promise<string[]> {
    return await Promise.all(
      tokenAddresses.map(tokenAddress => this.approveToken(amount, userAddress, tokenAddress, network))
    )
  }

  async approveToken(amount: PriceString, userAddress: Address, tokenAddress: Address, network: NetworkID): Promise<string> {
    return new Promise(async (resolve, reject) => {
      const provider = new Web3(web3.currentProvider);

      const spender = await this.getSpender(network, provider);

      const contract: any = new provider.eth.Contract(ERC20_ABI, tokenAddress);

      return contract.methods.approve(spender, amount).send({from: userAddress},
        (err: any, txHash: string) => {
          if (err) return reject(err.message);
          resolve(txHash);
        });
    })
  }
}
