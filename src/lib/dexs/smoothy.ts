import Adapter from './adapter';
import { Address, OptimalRate } from '../../types';
import { DexParams, SmoothyDexData } from './dex-types';
import SMOOTHY_ABI = require('../../abi/smoothyV1.abi.json');

export class Smoothy extends Adapter {
  static getDexData(optimalRate: OptimalRate, name: string): SmoothyDexData {
    const {
      srcAmount,
      data: { exchange, i, j },
    } = optimalRate;
    return {
      name,
      srcAmount,
      destAmount: '1',
      i,
      j,
      exchange,
    };
  }

  private _swap(srcToken: Address, destToken: Address, data: SmoothyDexData) {
    const { exchange, i, j } = data;

    const smoothyContract = new this.web3Provider.eth.Contract(
      SMOOTHY_ABI,
      exchange,
    );

    const swapData = smoothyContract.methods
      .swap(i, j, data.srcAmount, data.destAmount)
      .encodeABI();

    return super.swap(srcToken, destToken, data, swapData, exchange);
  }

  async buildSwap(
    srcToken: Address,
    destToken: Address,
    data: SmoothyDexData,
  ): Promise<DexParams> {
    return this._swap(srcToken, destToken, data);
  }
}
