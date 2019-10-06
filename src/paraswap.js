const axios = require('axios');
const _ = require('lodash');

class ParaSwap {
    constructor(network, apiURL) {
        this.network = network;
        this.apiURL = apiURL;
    }

    handleAPIError(e) {
        console.error('API ERROR', new Error(e).message);
        return {error: new Error(e).message};
    }

    async getTokens() {
      try {
        const tokensURL = `${this.apiURL}/tokens/${this.network}`;
        const {data} = await axios.get(tokensURL);
        return data;
      }
      catch (e) {
        return this.handleAPIError(e);
      }
    }

    async getRate(srcToken, destToken, srcAmount) {
        try {
            const pricesURL = `${this.apiURL}/prices/${this.network}/${srcToken}/${destToken}/${srcAmount}`;
            const {data} = await axios.get(pricesURL);
            return data;

        } catch (e) {
            return this.handleAPIError(e);
        }
    }

    async buildTx(srcToken, destToken, srcAmount, destAmount, prices, userAddress, payTo) {
        try {
            const priceRoute = _.pick(prices.priceRoute, 'bestRoute');

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

            return transaction;
        } catch (e) {
            return this.handleAPIError(e);
        }
    }
}

module.exports = ParaSwap;
