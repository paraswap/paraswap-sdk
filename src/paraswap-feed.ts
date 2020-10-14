import _ = require('lodash');
import BigNumber from 'bignumber.js';

import {
  Address,
  APIError,
  OnChainOptimalRates,
  OptimalRates,
  PriceString,
  Rate,
} from './types';

import * as PriceFeedAbi from './abi/priceFeed.json';

export class ParaswapFeed {
  constructor(private network: number, public web3Provider: any) {}

  async getRate(
    srcToken: Address,
    destToken: Address,
    srcAmount: PriceString,
  ): Promise<OnChainOptimalRates | APIError> {
    try {
      const { abi, address } = (PriceFeedAbi as any)[this.network];

      const contract = new this.web3Provider.eth.Contract(abi, address);

      const result = await contract.methods
        .getBestPrice(srcToken, destToken, srcAmount)
        .call();

      const amount = new BigNumber(result.rate).toFixed();

      const bestRoute: Rate[] = _(result.distribution)
        .keys()
        .filter((k: string) => _.isNaN(Number(k)))
        .reduce((acc: Rate[], exchange: string) => {
          const percent = new BigNumber(result.distribution[exchange]);

          const _destAmount = percent.times(amount).dividedBy(100).toFixed(0);
          const _srcAmount = percent
            .times(new BigNumber(srcAmount))
            .dividedBy(100)
            .toFixed(0);

          acc.push({
            destAmount: _destAmount,
            srcAmount: _srcAmount,
            percent: percent.toFixed(0),
            exchange,
          });

          return acc;
        }, []);

      return { amount, bestRoute };
    } catch (error) {
      return { message: new Error(error).message };
    }
  }
}
