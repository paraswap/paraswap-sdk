import { Contract } from 'web3-eth-contract';

import M_STABLE_ASSET_ABI from '../../abi/mStable-mAsset.abi.json';
import M_STABLE_POOL_ABI from '../../abi/mStable-Pool.abi.json';

import { Address, OptimalRate } from '../../types';
import Adapter from './adapter';
import { DexParams, mStableData, mStableOpTypes } from './dex-types';

export class mStable extends Adapter {
  constructor(
    protected network: number,
    protected web3Provider: any,
    protected augustus?: any,
  ) {
    super(network, web3Provider, augustus);
  }

  static getDexData(optimalRate: OptimalRate, name: string): mStableData {
    const {
      srcAmount,
      data: { exchange, opType, isAssetContract },
    } = optimalRate;
    return {
      destAmount: '1',
      name,
      srcAmount,
      exchange,
      opType,
      isAssetContract,
    };
  }

  private getSwapFn(srcToken: Address, destToken: Address, data: mStableData) {
    const { exchange, opType, isAssetContract } = data;

    const mStableC: Contract = new this.web3Provider.eth.Contract(
      isAssetContract ? M_STABLE_ASSET_ABI : M_STABLE_POOL_ABI,
      exchange,
    );

    switch (opType) {
      case mStableOpTypes.Mint:
        return mStableC.methods.mint(
          srcToken,
          data.srcAmount,
          data.destAmount,
          this.augustus._address,
        );
      case mStableOpTypes.Swap:
        return mStableC.methods.swap(
          srcToken,
          destToken,
          data.srcAmount,
          data.destAmount,
          this.augustus._address,
        );
      case mStableOpTypes.Redeem:
        return mStableC.methods.redeem(
          destToken,
          data.srcAmount,
          data.destAmount,
          this.augustus._address,
        );
      default:
        throw new Error(`Can not build swap for OpType ${opType}`);
    }
  }

  private _swap(srcToken: Address, destToken: Address, data: mStableData) {
    const { exchange } = data;

    const swapData = this.getSwapFn(srcToken, destToken, data).encodeABI();

    return super.swap(srcToken, destToken, data, swapData, exchange);
  }

  async tokenToTokenSwap(
    srcToken: Address,
    destToken: Address,
    data: mStableData,
  ): Promise<DexParams> {
    return this._swap(srcToken, destToken, data);
  }
}
