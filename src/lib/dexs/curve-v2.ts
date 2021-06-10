import Adapter from './adapter';
import { Address, OptimalRate } from '../../types';
import { CurveDexData, DexParams } from './dex-types';
import { Weth } from './weth';
import CURVE_ABI = require('../../abi/curve-v2.json');

export class CurveV2 extends Adapter {
  static getDexData(optimalRate: OptimalRate, name: string): CurveDexData {
    const {
      srcAmount,
      data: { exchange, i, j, underlyingSwap, tokenFrom },
    } = optimalRate;
    return {
      name,
      srcAmount,
      destAmount: '1',
      minConversionRate: '1',
      exchange,
      i,
      j,
      underlyingSwap,
    };
  }

  private getCallData(
    srcToken: Address,
    destToken: Address,
    data: CurveDexData,
  ) {
    const { exchange, i, j, underlyingSwap } = data;
    const curveContract = new this.web3Provider.eth.Contract(
      CURVE_ABI,
      exchange,
    );
    let defaultArgs: any[] = [i, j, data.srcAmount, data.minConversionRate];
    // Only non underlyingSwaps in mainnet have an option to directly deposit ETH
    if (!underlyingSwap && this.isETHAddress(srcToken)) defaultArgs.push(true);
    const swapMethod = underlyingSwap
      ? curveContract.methods.exchange_underlying
      : curveContract.methods.exchange;
    return swapMethod.apply(this, defaultArgs).encodeABI();
  }

  protected async ethToTokenSwap(
    srcToken: Address,
    destToken: Address,
    data: CurveDexData,
  ): Promise<DexParams> {
    const swapCallData = this.getCallData(srcToken, destToken, data);
    return {
      callees: [data.exchange],
      calldata: [swapCallData],
      values: [data.srcAmount],
    };
  }

  protected async tokenToEthSwap(
    srcToken: Address,
    destToken: Address,
    data: CurveDexData,
  ): Promise<DexParams> {
    const tokenToTokenSwapParams = await this.tokenToTokenSwap(
      srcToken,
      destToken,
      data,
    );
    const wethToken = Weth.getAddress(this.network);
    const withdrawWethData = this.augustus.methods
      .withdrawAllWETH(wethToken)
      .encodeABI();

    return {
      callees: [...tokenToTokenSwapParams.callees, this.augustus._address],
      calldata: [...tokenToTokenSwapParams.calldata, withdrawWethData],
      values: [...tokenToTokenSwapParams.values, '0'],
    };
  }

  protected async tokenToTokenSwap(
    srcToken: Address,
    destToken: Address,
    data: CurveDexData,
  ): Promise<DexParams> {
    const approveCallData = await this.getApproveCallData(
      srcToken,
      data.srcAmount,
      data.exchange,
    );
    const swapCallData = this.getCallData(srcToken, destToken, data);
    if (approveCallData) {
      return {
        callees: [approveCallData!.callee, data.exchange],
        calldata: [approveCallData!.calldata, swapCallData],
        values: [approveCallData!.value, '0'],
      };
    } else {
      return {
        callees: [data.exchange],
        calldata: [swapCallData],
        values: ['0'],
      };
    }
  }
}
