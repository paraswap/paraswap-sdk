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

  private _swap(srcToken: Address, destToken: Address, data: DODODexData) {
    let callees = [];
    let calldata = [];
    let values = [];

    if (!this.isETHAddress(srcToken)) {
      const approveCallData = this.getApproveCallData(
        srcToken,
        data.srcAmount,
        DODOAproveAddress[this.network],
      );
      callees.push(approveCallData.callee);
      calldata.push(approveCallData.calldata);
      values.push(approveCallData.value);
      values.push('0');
    } else {
      values.push(data.srcAmount);
    }

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

    callees.push(DODOV2ProxyAddress[this.network]);
    calldata.push(swapData);

    return {
      callees,
      calldata,
      values,
    };
  }

  async buildSwap(
    srcToken: Address,
    destToken: Address,
    data: DODODexData,
  ): Promise<DexParams> {
    return this._swap(srcToken, destToken, data);
  }
}
