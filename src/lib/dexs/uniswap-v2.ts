import Adapter from './adapter';
import { Address, EXCHANGES, OptimalRate } from '../../types';
import { DexParams, UniswapV2DEXData } from './dex-types';

import UNISWAP_V2_ROUTER_ABI = require('../../abi/uniswap.v2.router.json');
import { ETHER_ADDRESS } from '../transaction-builder';

export class UniswapV2 extends Adapter {
  static getDexData(optimalRate: OptimalRate): UniswapV2DEXData {
    return {
      name: EXCHANGES.UNISWAPV2,
      srcAmount: optimalRate.srcAmount,
      destAmount: '1',
      path: optimalRate.data.path,
      router: optimalRate.data.router,
    };
  }

  getRouter(data: UniswapV2DEXData) {
    return new this.web3Provider.eth.Contract(UNISWAP_V2_ROUTER_ABI, data.router);
  }

  pathWithETH(srcToken: Address, destToken: Address, data: UniswapV2DEXData) {
    if (this.isETHAddress(srcToken)) {
      return [
        ETHER_ADDRESS,
        ...data.path.slice(1),
      ];
    }
    return data.path;
  }

  protected async swap(srcToken: Address, destToken: Address, data: UniswapV2DEXData): Promise<DexParams> {
    const router = this.getRouter(data);

    const path = this.pathWithETH(srcToken, destToken, data);

    const calldata = router.methods.swap(
      data.srcAmount,
      data.destAmount,
      path,
    ).encodeABI();

    const value = this.isETHAddress(srcToken) ? data.srcAmount : '0';

    return {
      callees: [data.router],
      calldata: [calldata],
      values: [value],
    };
  }

  protected async ethToTokenSwap(srcToken: Address, destToken: Address, data: UniswapV2DEXData): Promise<DexParams> {
    return this.swap(srcToken, destToken, data);
  }

  protected async tokenToEthSwap(srcToken: Address, destToken: Address, data: UniswapV2DEXData): Promise<DexParams> {
    return this.swap(srcToken, destToken, data);
  }

  protected async tokenToTokenSwap(srcToken: Address, destToken: Address, data: UniswapV2DEXData): Promise<DexParams> {
    return this.swap(srcToken, destToken, data);
  }

}
