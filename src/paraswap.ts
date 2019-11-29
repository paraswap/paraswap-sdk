import axios from 'axios';
import Web3 = require("web3");

import {Address, APIError, NetworkID, OptimalRates, PriceString, Token, Transaction} from "./types";
import * as ERC20_ABI from "./abi/erc20.json";
import * as AUGUSTUS_ABI from "./abi/augustus.json";
import {ParaswapFeed} from "./paraswap-feed";

const PROVIDER_URL = process.env.PROVIDER_URL;
declare let web3: any;

export class ParaSwap {
  constructor(private network: number, private apiURL: string) {
  }

  handleAPIError(error: Error): APIError {
    return {error: error.message};
  }

  async getTokens() {
    try {
      const tokensURL = `${this.apiURL}/tokens/${this.network}`;
      const {data} = await axios.get(tokensURL);
      return (data.tokens as Token[]).map(t => new Token(t.address, t.decimals, t.symbol));
    } catch (e) {
      return this.handleAPIError(new Error(e));
    }
  }

  async getContractRate(srcToken: Address, destToken: Address, srcAmount: PriceString): Promise<OptimalRates | APIError> {
    return await new ParaswapFeed(1).getRate(srcToken, destToken, srcAmount);
  }

  async getRate(srcToken: Address, destToken: Address, srcAmount: PriceString): Promise<OptimalRates | APIError> {
    try {
      const pricesURL = `${this.apiURL}/prices/${this.network}/${srcToken}/${destToken}/${srcAmount}`;
      const {data} = await axios.get(pricesURL);
      return data.priceRoute as OptimalRates;
    } catch (e) {
      return this.handleAPIError(new Error(e));
    }
  }

  async buildTx(srcToken: Address, destToken: Address, srcAmount: PriceString, destAmount: PriceString, priceRoute: OptimalRates, userAddress: Address, payTo?: Address) {
    try {
      const txURL = `${this.apiURL}/transactions/${this.network}`;

      const txConfig = {
        priceRoute,
        srcToken,
        destToken,
        srcAmount,
        destAmount,
        userAddress,
        payTo: payTo || ''
      };

      const {data: transaction} = await axios.post(txURL, txConfig);

      return transaction as Transaction;
    } catch (e) {
      return this.handleAPIError(new Error(e));
    }
  }

  private async getSpender(network: NetworkID, provider: Web3): Promise<Address> {
    const augustusAddress = AUGUSTUS_ABI.addresses[network];

    const augustusContract = new provider.eth.Contract(AUGUSTUS_ABI.abi, augustusAddress);

    return augustusContract.methods.getTokenTransferProxy().call();
  }

  async getAllowance(userAddress: Address, tokenAddress: Address, network: NetworkID) {
    const provider = new Web3(new Web3.providers.HttpProvider(PROVIDER_URL!));

    const spender = await this.getSpender(network, provider);

    const contract = new provider.eth.Contract(ERC20_ABI, tokenAddress);

    return contract.methods.allowance(userAddress, spender).call();
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
