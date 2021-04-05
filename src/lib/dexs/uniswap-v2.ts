import Adapter from './adapter';
import { Address, OptimalRate } from '../../types';
import { DexParams, UniswapV2DEXData } from './dex-types';

import UNISWAP_V2_ROUTER_ABI = require('../../abi/uniswap.v2.router.json');
import { ETHER_ADDRESS } from '../../types';

export class UniswapV2 extends Adapter {
  static getDexData(optimalRate: OptimalRate, name: string): UniswapV2DEXData {
    return {
      name,
      srcAmount: optimalRate.srcAmount,
      destAmount: '1',
      path: optimalRate.data.path,
      router: optimalRate.data.router,
    };
  }

  getRouter(data: UniswapV2DEXData) {
    return new this.web3Provider.eth.Contract(
      UNISWAP_V2_ROUTER_ABI,
      data.router,
    );
  }

  pathWithETH(srcToken: Address, destToken: Address, data: UniswapV2DEXData) {
    if (this.isETHAddress(srcToken)) {
      return [ETHER_ADDRESS, ...data.path.slice(1)];
    } else if (this.isETHAddress(destToken)) {
      return [...data.path.slice(0, data.path.length - 1), ETHER_ADDRESS];
    }

    return data.path;
  }

  private async _swap(
    srcToken: Address,
    destToken: Address,
    data: UniswapV2DEXData,
  ): Promise<DexParams> {
    const router = this.getRouter(data);

    const path = this.pathWithETH(srcToken, destToken, data);

    const swapData = router.methods
      .swap(data.srcAmount, data.destAmount, path)
      .encodeABI();

    return super.swap(srcToken, destToken, data, swapData, data.router);
  }

  async buildSwap(
    srcToken: Address,
    destToken: Address,
    data: UniswapV2DEXData,
  ): Promise<DexParams> {
    return this._swap(srcToken, destToken, data);
  }
}
