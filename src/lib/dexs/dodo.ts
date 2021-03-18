import Adapter from './adapter';
import { Address, OptimalRate } from '../../types';
import { DODODexData, DexParams } from './dex-types';
import DODOProxyAbi from '../../abi/dodov2-proxy.abi.json';

const MAX_UINT =
  '115792089237316195423570985008687907853269984665640564039457584007913129639935';

// We use dodo-v2 proxy as the new proxy supports both v1 and v2
const DODOV2ProxyAddress: { [network: number]: Address } = {
  1: '0xa356867fdcea8e71aeaf87805808803806231fdc',
};

const DODOAproveAddress: { [network: number]: Address } = {
  1: '0xCB859eA579b28e02B87A1FDE08d087ab9dbE5149',
};

export class DODO extends Adapter {
  static getDexData(optimalRate: OptimalRate, name: string): DODODexData {
    const {
      srcAmount,
      data: { exchange, tokenFrom, tokenTo, dodoPairs, directions },
    } = optimalRate;
    return {
      name,
      fromToken: tokenFrom,
      toToken: tokenTo,
      srcAmount,
      destAmount: '1',
      dodoPairs,
      directions,
      isIncentive: false,
      deadLine: MAX_UINT,
    };
  }

  private async _swap(srcToken: Address, destToken: Address, data: DODODexData) {
    const dodoContract = new this.web3Provider.eth.Contract(
      DODOProxyAbi,
      DODOV2ProxyAddress[this.network],
    );

    const swapData = dodoContract.methods
      .dodoSwapV1(
        data.fromToken,
        data.toToken,
        data.srcAmount,
        data.destAmount,
        data.dodoPairs,
        data.directions,
        data.isIncentive,
        data.deadLine,
      )
      .encodeABI();

    if (!this.isETHAddress(srcToken)) {
      const approveCallData = await this.getApproveCallData(
        srcToken,
        data.srcAmount,
        DODOAproveAddress[this.network],
      );

      const callees = approveCallData ? [approveCallData.callee, DODOV2ProxyAddress[this.network]] : [DODOV2ProxyAddress[this.network]];
      const calldata = approveCallData ? [approveCallData.calldata, swapData] : [swapData];
      const values = approveCallData ? ['0', '0'] : ['0'];

      return {
        callees,
        calldata,
        values,
      };
    } else {
      return {
        callees: [DODOV2ProxyAddress[this.network]],
        calldata: [swapData],
        values: [data.srcAmount],
      };
    }
  }

  async buildSwap(
    srcToken: Address,
    destToken: Address,
    data: DODODexData,
  ): Promise<DexParams> {
    return this._swap(srcToken, destToken, data);
  }
}
