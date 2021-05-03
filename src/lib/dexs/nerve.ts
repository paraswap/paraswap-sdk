import Adapter from './adapter';
import { Address, OptimalRate } from '../../types';
import { DexParams, NerveDexData } from './dex-types';
import NERVE_ABI = require('../../abi/nerve.abi.json');

export class Nerve extends Adapter {
  static getDexData(optimalRate: OptimalRate, name: string): NerveDexData {
    const {
      srcAmount,
      data: { exchange, i, j, deadline },
    } = optimalRate;
    return {
      name,
      srcAmount,
      destAmount: '1',
      minConversionRate: '1',
      exchange,
      i,
      j,
      deadline,
    };
  }

  private _swap(srcToken: Address, destToken: Address, data: NerveDexData) {
    const { exchange, i, j, deadline } = data;

    const nerveContract = new this.web3Provider.eth.Contract(
      NERVE_ABI,
      exchange,
    );

    const swapData = nerveContract.methods
      .swap(i, j, data.srcAmount, data.minConversionRate, deadline)
      .encodeABI();

    return super.swap(srcToken, destToken, data, swapData, exchange);
  }

  async buildSwap(
    srcToken: Address,
    destToken: Address,
    data: NerveDexData,
  ): Promise<DexParams> {
    return this._swap(srcToken, destToken, data);
  }
}
