import Adapter from './adapter';
import { Address, OptimalRate } from '../../types';
import { Contract } from 'web3-eth-contract';
import { DexParams, DEXData } from './dex-types';
import { Weth } from './weth';

import ONEBITP_ABI = require('../../abi/onebit.abi.json');
import ERC20_ABI = require('../../abi/erc20.json');

const ONEBIT_ADDRESSES: { [networkid: number]: Address } = {
  1: '0x39D085e13D7876ca3311f0aFFB42778799d24F09',
};

export class OneBit extends Adapter {
  router: Contract;
  swapRouterAddress: Address;

  constructor(
    protected network: number,
    protected web3Provider: any,
    protected augustus?: any,
  ) {
    super(network, web3Provider, augustus);
    this.swapRouterAddress = ONEBIT_ADDRESSES[this.network];
    this.router = new this.web3Provider.eth.Contract(
      ONEBITP_ABI,
      this.swapRouterAddress,
    );
  }

  static getDexData(optimalRate: OptimalRate, name: string): DEXData {
    return {
      name,
      srcAmount: optimalRate.srcAmount,
      destAmount: '1',
    };
  }

  protected async ethToTokenSwap(
    srcToken: Address,
    destToken: Address,
    data: DEXData,
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
    data: DEXData,
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
    data: DEXData,
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
    data: DEXData,
  ) {
    const approveCallData = await this.getApproveCallData(
      srcToken,
      data.srcAmount,
      this.swapRouterAddress,
    );

    const assetSwapperData = this.buildSwapData(srcToken, destToken, data);

    const callees = approveCallData
      ? [this.augustus._address, this.swapRouterAddress]
      : [this.swapRouterAddress];

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

  private buildSwapData(srcToken: Address, destToken: Address, data: DEXData) {
    return this.router.methods
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
