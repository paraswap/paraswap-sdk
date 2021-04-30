import Adapter from './adapter';
import { Address, OptimalRate } from '../../types';
import { DODODexData, DexParams } from './dex-types';
import DODOProxyAbi from '../../abi/dodov2-proxy.abi.json';

const MAX_UINT =
  '115792089237316195423570985008687907853269984665640564039457584007913129639935';

const DODOV2ProxyAddress: { [network: number]: Address } = {
  1: '0xa356867fdcea8e71aeaf87805808803806231fdc',
  56: '0x8F8Dd7DB1bDA5eD3da8C9daf3bfa471c12d58486',
};

const DODOAproveAddress: { [network: number]: Address } = {
  1: '0xCB859eA579b28e02B87A1FDE08d087ab9dbE5149',
  56: '0xa128Ba44B2738A558A1fdC06d6303d52D3Cef8c1',
};

export class DODOV2 extends Adapter {
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

  protected async ethToTokenSwap(
    srcToken: Address,
    destToken: Address,
    data: DODODexData,
  ): Promise<DexParams> {
    const dodoContract = new this.web3Provider.eth.Contract(
      DODOProxyAbi,
      DODOV2ProxyAddress[this.network],
    );

    const swapData = dodoContract.methods
      .dodoSwapV2ETHToToken(
        data.toToken,
        data.destAmount,
        data.dodoPairs,
        data.directions,
        data.isIncentive,
        data.deadLine,
      )
      .encodeABI();

    return {
      callees: [DODOV2ProxyAddress[this.network]],
      calldata: [swapData],
      values: [data.srcAmount],
    };
  }

  protected async tokenToEthSwap(
    srcToken: Address,
    destToken: Address,
    data: DODODexData,
  ): Promise<DexParams> {
    const dodoContract = new this.web3Provider.eth.Contract(
      DODOProxyAbi,
      DODOV2ProxyAddress[this.network],
    );

    const swapData = dodoContract.methods
      .dodoSwapV2TokenToETH(
        data.fromToken,
        data.srcAmount,
        data.destAmount,
        data.dodoPairs,
        data.directions,
        data.isIncentive,
        data.deadLine,
      )
      .encodeABI();

    const approveCallData = await this.getApproveCallData(
      srcToken,
      data.srcAmount,
      DODOAproveAddress[this.network],
    );

    const callees = approveCallData
      ? [approveCallData.callee, DODOV2ProxyAddress[this.network]]
      : [DODOV2ProxyAddress[this.network]];
    const calldata = approveCallData
      ? [approveCallData.calldata, swapData]
      : [swapData];
    const values = approveCallData ? ['0', '0'] : ['0'];

    return {
      callees,
      calldata,
      values,
    };
  }

  protected async tokenToTokenSwap(
    srcToken: Address,
    destToken: Address,
    data: DODODexData,
  ): Promise<DexParams> {
    const dodoContract = new this.web3Provider.eth.Contract(
      DODOProxyAbi,
      DODOV2ProxyAddress[this.network],
    );

    const swapData = dodoContract.methods
      .dodoSwapV2TokenToToken(
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

    const approveCallData = await this.getApproveCallData(
      srcToken,
      data.srcAmount,
      DODOAproveAddress[this.network],
    );

    const callees = approveCallData
      ? [approveCallData.callee, DODOV2ProxyAddress[this.network]]
      : [DODOV2ProxyAddress[this.network]];
    const calldata = approveCallData
      ? [approveCallData.calldata, swapData]
      : [swapData];
    const values = approveCallData ? ['0', '0'] : ['0'];

    return {
      callees,
      calldata,
      values,
    };
  }
}
