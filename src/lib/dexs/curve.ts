import Adapter from './adapter';
import { Address, OptimalRate } from '../../types';
import { CurveDexData, DexParams } from './dex-types';
import CURVE_ABI = require('../../abi/curve.json');

export class Curve extends Adapter {
  static getDexData(optimalRate: OptimalRate, name: string): CurveDexData {
    const {
      srcAmount,
      data: { exchange, i, j, underlyingSwap },
    } = optimalRate;
    return {
      name,
      srcAmount,
      destAmount: '1',
      minConversionRate: '1',
      exchange,
      i,
      j,
      underlyingSwap,
    };
  }

  private _swap(srcToken: Address, destToken: Address, data: CurveDexData) {
    const { exchange, i, j, underlyingSwap } = data;

    const curveContract = new this.web3Provider.eth.Contract(
      CURVE_ABI,
      exchange,
    );

    const defaultArgs = [i, j, data.srcAmount, data.minConversionRate];

    const swapMethod = underlyingSwap
      ? curveContract.methods.exchange_underlying
      : curveContract.methods.exchange;

    const swapData = swapMethod.apply(this, defaultArgs).encodeABI();

    return super.swap(srcToken, destToken, data, swapData, exchange);
  }

  async buildSwap(
    srcToken: Address,
    destToken: Address,
    data: CurveDexData,
  ): Promise<DexParams> {
    return this._swap(srcToken, destToken, data);
  }
}
