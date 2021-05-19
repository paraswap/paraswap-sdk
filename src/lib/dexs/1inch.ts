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
    console.log('1inch: In getDexData!!!!!!', optimalRate);
    const {
      data: { poolAddress },
    } = optimalRate;
    return {
      name,
      srcAmount: optimalRate.srcAmount,
      destAmount: optimalRate.destAmount,
      poolAddress,
    };
  }

  private _swap(srcToken: Address, destToken: Address, data: OneInchData) {
    console.log('1inch: In _swap!!!!! ', data);
    const { poolAddress } = data;

    const oneInchContract = new this.web3Provider.eth.Contract(
      ONE_INCH_ABI,
      poolAddress,
    );

    const swapData = oneInchContract.methods
      .swap(srcToken, destToken, data.srcAmount, data.destAmount, NULL_ADDRESS)
      .encodeABI();

    return super.swap(srcToken, destToken, data, swapData, poolAddress);
  }

  async buildSwap(
    srcToken: Address,
    destToken: Address,
    data: OneInchData,
  ): Promise<DexParams> {
    console.log('1inch: In buildSwap', data);
    return this._swap(srcToken, destToken, data);
  }
}
