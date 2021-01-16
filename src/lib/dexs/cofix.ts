import Adapter from './adapter';
import { Address, OptimalRate } from '../../types';
import { DexParams, CofixDEXData } from './dex-types';
import COFIX_ABI = require('../../abi/cofix.json');
import BigNumber from 'bignumber.js';

const REWARDR_ECEIVER = '0x6F52A45c54518E5726DfD76d6472CE4F8Cd3dc06';

export class Cofix extends Adapter {
  static getDexData(optimalRate: OptimalRate, name: string): CofixDEXData {
    return {
      name,
      srcAmount: optimalRate.srcAmount,
      destAmount: '1',
      exchange: optimalRate.data.exchange,
      deadline: optimalRate.data.deadline,
    };
  }

  getNetworkFees(srcToken: Address, destToken: Address) {
    const fee = new BigNumber(1e18).dividedBy(100); //0.01 ETH
    return this.isETHAddress(srcToken) || this.isETHAddress(destToken)
      ? fee.toFixed(0)
      : fee.times(2).toFixed(0);
  }

  private async getFillMethod(
    srcToken: Address,
    destToken: Address,
    data: CofixDEXData,
  ) {
    const contract = new this.web3Provider.eth.Contract(
      COFIX_ABI,
      data.exchange,
    );

    const deadline = data.deadline || (await this.getDeadline());

    if (this.isETHAddress(srcToken)) {
      return contract.methods
        .swapExactETHForTokens(
          destToken,
          data.srcAmount,
          data.destAmount,
          this.augustus._address,
          REWARDR_ECEIVER,
          deadline,
        )
        .encodeABI();
    } else if (this.isETHAddress(destToken)) {
      return contract.methods
        .swapExactTokensForETH(
          srcToken,
          data.srcAmount,
          data.destAmount,
          this.augustus._address,
          REWARDR_ECEIVER,
          deadline,
        )
        .encodeABI();
    } else {
      return contract.methods
        .swapExactTokensForTokens(
          srcToken,
          destToken,
          data.srcAmount,
          data.destAmount,
          this.augustus._address,
          REWARDR_ECEIVER,
          deadline,
        )
        .encodeABI();
    }
  }

  async buildSwap(
    srcToken: Address,
    destToken: Address,
    data: CofixDEXData,
  ): Promise<DexParams> {
    const swapData = await this.getFillMethod(srcToken, destToken, data);

    return this.swap(srcToken, destToken, data, swapData, data.exchange);
  }
}
