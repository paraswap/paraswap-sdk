import { NULL_ADDRESS } from '../payload-encoder';
import Adapter from './adapter';
import { Address, OptimalRate } from '../../types';
import { DexParams, OneInchData } from './dex-types';

import ONE_INCH_ABI from '../../abi/1inch-pool.abi.json';

export class OneInch extends Adapter {
  constructor(
    protected network: number,
    protected web3Provider: any,
    protected augustus?: any,
  ) {
    super(network, web3Provider, augustus);
  }

  static getDexData(optimalRate: OptimalRate, name: string): OneInchData {
    const {
      data: { exchange },
    } = optimalRate;
    return {
      name,
      srcAmount: optimalRate.srcAmount,
      destAmount: '1',
      exchange: exchange,
    };
  }

  private _swap(srcToken: Address, destToken: Address, data: OneInchData) {
    const { exchange } = data;

    const oneInchContract = new this.web3Provider.eth.Contract(
      ONE_INCH_ABI,
      exchange,
    );

    const swapData = oneInchContract.methods
      .swap(
        this.isETHAddress(srcToken) ? NULL_ADDRESS : srcToken,
        this.isETHAddress(destToken) ? NULL_ADDRESS : destToken,
        data.srcAmount,
        data.destAmount,
        NULL_ADDRESS,
      )
      .encodeABI();

    return super.swap(srcToken, destToken, data, swapData, exchange);
  }

  async buildSwap(
    srcToken: Address,
    destToken: Address,
    data: OneInchData,
  ): Promise<DexParams> {
    return this._swap(srcToken, destToken, data);
  }
}
