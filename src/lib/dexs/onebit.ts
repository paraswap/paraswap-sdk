import Adapter from './adapter';
import { Address, OptimalRate } from '../../types';
import { DexParams, OMM1EXData } from './dex-types';
import { Weth } from './weth';

import ONEBITP_ABI = require('../../abi/onebit.abi.json');
import ERC20_ABI = require('../../abi/erc20.json');

export class OneBit extends Adapter {
  static getDexData(optimalRate: OptimalRate, name: string): OMM1EXData {
    const exchange = optimalRate.data.router;

    return {
      name,
      srcAmount: optimalRate.srcAmount,
      destAmount: '1',
      exchange,
    };
  }

  getRouter(data: OMM1EXData) {
    return new this.web3Provider.eth.Contract(
      ONEBITP_ABI,
      data.exchange,
    );
  }

  protected async ethToTokenSwap(
    srcToken: Address,
    destToken: Address,
    data: OMM1EXData,
  ): Promise<DexParams> {
    const wethToken = Weth.getAddress(this.network);
    const wethContract = new this.web3Provider.eth.Contract(
      ERC20_ABI,
      wethToken,
    );
    const depositWethData = wethContract.methods.deposit().encodeABI();

    const wethToTokenData = await this.getTokenToTokenSwapData(
      wethToken,
      destToken,
      data,
    );

    return {
      callees: [wethToken, ...wethToTokenData.callees],
      calldata: [depositWethData, ...wethToTokenData.calldata],
      values: [data.srcAmount, ...wethToTokenData.values],
    };
  }

  protected async tokenToEthSwap(
    srcToken: Address,
    destToken: Address,
    data: OMM1EXData,
  ): Promise<DexParams> {
    const wethToken = Weth.getAddress(this.network);
    const wethToTokenData = await this.getTokenToTokenSwapData(
      srcToken,
      wethToken,
      data,
    );
    const withdrawWethData = this.augustus.methods
      .withdrawAllWETH(wethToken)
      .encodeABI();

    return {
      callees: [...wethToTokenData.callees, this.augustus._address],
      calldata: [...wethToTokenData.calldata, withdrawWethData],
      values: [...wethToTokenData.values, '0'],
    };
  }

  protected async tokenToTokenSwap(
    srcToken: Address,
    destToken: Address,
    data: OMM1EXData,
  ): Promise<DexParams> {
    const swapData = await this.getTokenToTokenSwapData(
      srcToken,
      destToken,
      data,
    );

    return {
      callees: [...swapData.callees],
      calldata: [...swapData.calldata],
      values: [...swapData.values],
    };
  }

  private async getTokenToTokenSwapData(
    srcToken: Address,
    destToken: Address,
    data: OMM1EXData,
  ) {
    const approveCallData = await this.getApproveCallData(
      srcToken,
      data.srcAmount,
      data.exchange,
    );

    const assetSwapperData = this.buildSwapData(srcToken, destToken, data);

    const callees = approveCallData
      ? [this.augustus._address, data.exchange]
      : [data.exchange];

    const calldata = approveCallData
      ? [approveCallData.calldata, assetSwapperData]
      : [assetSwapperData];

    const networkFees = this.getNetworkFees(srcToken, destToken);

    const values = approveCallData ? ['0', networkFees] : [networkFees];

    return {
      callees,
      calldata,
      values,
    };
  }

  private buildSwapData(srcToken: Address, destToken: Address, data: OMM1EXData) {
    return this.getRouter(data).methods
      .swapTokensWithTrust(
        srcToken,
        destToken,
        data.srcAmount,
        data.destAmount,
        this.augustus._address,
      )
      .encodeABI();
  }
}
