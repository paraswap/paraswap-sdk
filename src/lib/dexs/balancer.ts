import Adapter from './adapter';
import { Address, OptimalRate } from '../../types';
import { BalancerDEXData, DexParams } from './dex-types';
import BALANCER_ABI = require('../../abi/balancer.json');

export class Balancer extends Adapter {
  static getDexData(optimalRate: OptimalRate, name: string): BalancerDEXData {
    return {
      name,
      srcAmount: optimalRate.srcAmount,
      destAmount: '1',
      exchangeProxy: optimalRate.data.exchangeProxy,
      swaps: optimalRate.data.swaps.map((s: any) => ({
        pool: s.pool,
        tokenInParam: s.tokenInParam,
        tokenOutParam: s.tokenOutParam,
        maxPrice: s.maxPrice
      })),
    };
  }

  private getFillMethod(srcToken: Address, destToken: Address, data: BalancerDEXData) {
    const contract = new this.web3Provider.eth.Contract(BALANCER_ABI, data.exchangeProxy);

    if (this.isETHAddress(srcToken)) {
      return contract.methods.batchEthInSwapExactIn(
        data.swaps,
        destToken,
        data.destAmount,
      ).encodeABI();

    } else if (this.isETHAddress(destToken)) {
      return contract.methods.batchEthOutSwapExactIn(
        data.swaps,
        srcToken,
        data.srcAmount,
        data.destAmount,
      ).encodeABI();

    } else {
      return contract.methods.batchSwapExactIn(
        data.swaps,
        srcToken,
        destToken,
        data.srcAmount,
        data.destAmount,
      ).encodeABI();
    }
  }

  async buildSwap(srcToken: Address, destToken: Address, data: BalancerDEXData): Promise<DexParams> {
    const swapData = this.getFillMethod(srcToken, destToken, data);

    return this.swap(
      srcToken,
      destToken,
      data,
      swapData,
      data.exchangeProxy,
    );
  }
}
