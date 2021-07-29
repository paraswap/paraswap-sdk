import Adapter from './adapter';
import { Address, OptimalRate } from '../../types';
import { DexParams, BProtocolData } from './dex-types';

import B_PROTOCOL_ABI from '../../abi/b.protolcol.abi.json';

export class BProtocol extends Adapter {
  constructor(
    protected network: number,
    protected web3Provider: any,
    protected augustus?: any,
  ) {
    super(network, web3Provider, augustus);
  }

  static getDexData(optimalRate: OptimalRate, name: string): BProtocolData {
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

  private _swap(srcToken: Address, destToken: Address, data: BProtocolData) {
    const { exchange } = data;

    const bProtocolContract = new this.web3Provider.eth.Contract(
      B_PROTOCOL_ABI,
      exchange,
    );

    const swapData = bProtocolContract.methods
      .swap(data.srcAmount, data.destAmount, this.augustus._address)
      .encodeABI();

    return super.swap(srcToken, destToken, data, swapData, exchange);
  }

  async buildSwap(
    srcToken: Address,
    destToken: Address,
    data: BProtocolData,
  ): Promise<DexParams> {
    return this._swap(srcToken, destToken, data);
  }
}
