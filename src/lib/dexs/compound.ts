import Adapter from './adapter';
import { Address, OptimalRate } from '../../types';
import { CompoundDEXData, DexParams } from './dex-types';
import ERC20_ABI = require('../../abi/erc20.json');
import CETH_ABI = require('../../abi/ceth_erc20.json');

export class Compound extends Adapter {
  static getDexData(optimalRate: OptimalRate, name: string): CompoundDEXData {
    return {
      name,
      srcAmount: optimalRate.srcAmount,
      destAmount: '1',
      fromCToken: optimalRate.data.fromCToken,
    };
  }

  private _swap(
    srcToken: Address,
    destToken: Address,
    data: CompoundDEXData,
  ): DexParams {
    const cToken = data.fromCToken ? srcToken : destToken;

    const cContract = this.isETHAddress(srcToken)
      ? new this.web3Provider.eth.Contract(CETH_ABI, cToken)
      : new this.web3Provider.eth.Contract(ERC20_ABI, cToken);

    const value = this.isETHAddress(srcToken) ? [] : [data.srcAmount];

    const swapData = data.fromCToken
      ? cContract.methods.redeem(data.srcAmount).encodeABI()
      : cContract.methods.mint.apply(this, value).encodeABI();

    return this.swap(srcToken, destToken, data, swapData, cToken);
  }

  async buildSwap(
    srcToken: Address,
    destToken: Address,
    data: CompoundDEXData,
  ): Promise<DexParams> {
    return this._swap(srcToken, destToken, data);
  }
}
