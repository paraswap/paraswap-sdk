import Adapter from './adapter';
import { Address, OptimalRate } from '../../types';
import { BancorDEXData, DexParams } from './dex-types';
import BANCOR_NETWORK_ABI = require('../../abi/bancor.network.json');
import { NULL_ADDRESS } from '../transaction-builder';

const BANCOR_NETWORK: any = {
  1: '0x2F9EC37d6CcFFf1caB21733BdaDEdE11c823cCB0',
};

export class Bancor extends Adapter {
  static getDexData(optimalRate: OptimalRate, name: string): BancorDEXData {
    return {
      name,
      srcAmount: optimalRate.srcAmount,
      destAmount: '1',
      minDestToken: '1',
      path: optimalRate.data.path,
    };
  };

  private _swap(srcToken: Address, destToken: Address, data: BancorDEXData) {
    const bancorNetwork = data.bancorNetwork || BANCOR_NETWORK[this.network];

    const contract = new this.web3Provider.eth.Contract(BANCOR_NETWORK_ABI, bancorNetwork);

    const swapData = contract.methods.convert2(
      data.path,
      data.srcAmount,
      data.minDestToken,
      NULL_ADDRESS,
      "0"
    ).encodeABI();

    return super.swap(
      srcToken,
      destToken,
      data,
      swapData,
      bancorNetwork,
    );
  }

  protected async ethToTokenSwap(srcToken: Address, destToken: Address, data: BancorDEXData): Promise<DexParams> {
    return this._swap(srcToken, destToken, data);
  };

  protected async tokenToEthSwap(srcToken: Address, destToken: Address, data: BancorDEXData): Promise<DexParams> {
    return this._swap(srcToken, destToken, data);
  };

  protected async tokenToTokenSwap(srcToken: Address, destToken: Address, data: BancorDEXData): Promise<DexParams> {
    return this._swap(srcToken, destToken, data);
  };
}
