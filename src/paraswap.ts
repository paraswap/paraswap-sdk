import axios from 'axios';

import {Address, APIError, OptimalRates, PriceString, Token, Transaction} from "./types";

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
}
