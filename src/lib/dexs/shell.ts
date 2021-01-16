import Adapter from './adapter';
import { Address, OptimalRate } from '../../types';
import { ShellDEXData, DexParams } from './dex-types';
import SHELL_ABI = require('../../abi/shell.json');

export class Shell extends Adapter {
  static getDexData(optimalRate: OptimalRate, name: string): ShellDEXData {
    return {
      name,
      srcAmount: optimalRate.srcAmount,
      destAmount: '1',
      exchange: optimalRate.data.exchange,
      deadline: optimalRate.data.deadline,
    };
  }

  async buildSwap(
    srcToken: Address,
    destToken: Address,
    data: ShellDEXData,
  ): Promise<DexParams> {
    const contract = new this.web3Provider.eth.Contract(
      SHELL_ABI,
      data.exchange,
    );

    const deadline = data.deadline || (await this.getDeadline());

    const swapData = contract.methods
      .originSwap(
        srcToken,
        destToken,
        data.srcAmount,
        data.destAmount,
        deadline,
      )
      .encodeABI();

    return this.swap(srcToken, destToken, data, swapData, data.exchange);
  }
}
