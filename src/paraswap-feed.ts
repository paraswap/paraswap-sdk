import Web3 = require("web3");
import _ = require("lodash");
import BigNumber from "bignumber.js";

import {Address, APIError, OptimalRates, PriceString, Rate} from "./types";

const PriceFeedAbi = require("./abi/priceFeed.json");

const PROVIDER_URL = process.env.PROVIDER_URL;

export class ParaswapFeed {
  constructor(private network: number) {
  }

  async getRate(srcToken: Address, destToken: Address, srcAmount: PriceString): Promise<OptimalRates | APIError> {
    try {
      const provider = new Web3(new Web3.providers.HttpProvider(PROVIDER_URL!));

      const {abi, address} = PriceFeedAbi[this.network];

      const contract = new provider.eth.Contract(abi, address);

      const result = await contract.methods.getBestPrice(
        srcToken,
        destToken,
        srcAmount
      ).call();

      const amount = new BigNumber(result.rate).toFixed();

      const bestRoute: Rate[] = _(result.distribution).keys()
        .filter((k: string) => _.isNaN(Number(k)))
        .reduce((acc: Rate[], exchange: string) => {
          const percent = new BigNumber(result.distribution[exchange]);

          const _destAmount = percent.times(amount).dividedBy(100).toFixed(0);
          const _srcAmount = percent.times(new BigNumber(srcAmount)).dividedBy(100).toFixed(0);

          acc.push({
            destAmount: _destAmount,
            srcAmount: _srcAmount,
            percent: percent.toFixed(0),
            exchange,
          });

          return acc;
        }, []);

      return {amount, bestRoute};

    } catch (error) {
      return {error: new Error(error).message};
    }

  }
}
