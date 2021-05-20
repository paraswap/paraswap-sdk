import { Address, ETHER_ADDRESS, OptimalRate } from '../../types';
import { DEXData, DexParams } from './dex-types';
import BigNumber from 'bignumber.js';
import ERC20_ABI = require('../../abi/erc20.json');
import { MAX_UINT } from '../../constants';

export default class Adapter {
  constructor(
    protected network: number,
    protected web3Provider: any,
    protected augustus?: any,
  ) {}

  isETHAddress = (address: string) =>
    address.toLowerCase() === ETHER_ADDRESS.toLowerCase();

  static getDexData(_: OptimalRate, __: string): DEXData {
    throw new Error('not implemented!');
  }

  getNetworkFees(srcToken: Address, destToken: Address) {
    return '0';
  }

  private async needsAllowance(token: Address, spender: Address) {
    try {
      if (this.isETHAddress(token)) {
        return false;
      }

      const contract = new this.web3Provider.eth.Contract(ERC20_ABI, token);

      const allowance = await contract.methods
        .allowance(this.augustus._address, spender)
        .call();

      return new BigNumber(allowance).isLessThan(MAX_UINT.dividedBy(2));
    } catch (e) {
      return true;
    }
  }

  async getApproveCallData(
    srcToken: Address,
    srcAmount: string,
    exchange: Address,
  ) {
    const calldata = this.augustus.methods
      .approve(srcToken, exchange, srcAmount)
      .encodeABI();

    const needsAllowance = await this.needsAllowance(srcToken, exchange);

    if (needsAllowance) {
      return { callee: this.augustus._address, calldata, value: '0' };
    }

    return null;
  }

  protected async swap(
    srcToken: Address,
    destToken: Address,
    data: DEXData,
    swapData: string,
    swapExchange: Address,
  ): Promise<DexParams> {
    const approveCallData = await this.getApproveCallData(
      srcToken,
      data.srcAmount,
      swapExchange,
    );

    const callees =
      this.isETHAddress(srcToken) || !approveCallData
        ? [swapExchange]
        : [approveCallData.callee, swapExchange];

    const calldata =
      this.isETHAddress(srcToken) || !approveCallData
        ? [swapData]
        : [approveCallData.calldata, swapData];

    const networkFees = this.getNetworkFees(srcToken, destToken);

    const value = new BigNumber(data.srcAmount).plus(networkFees).toFixed(0);

    const values = this.isETHAddress(srcToken)
      ? [value]
      : approveCallData
      ? ['0', networkFees]
      : [networkFees];

    return {
      callees,
      calldata,
      values,
    };
  }

  async getBlock() {
    return this.web3Provider.eth.getBlock('latest');
  }

  getDeadline() {
    return Math.floor(new Date().getTime() / 1000) + 60 * 60;
  }

  async buildSwap(
    srcToken: Address,
    destToken: Address,
    data: Required<DEXData>,
  ): Promise<DexParams> {
    try {
      if (this.isETHAddress(srcToken)) {
        return this.ethToTokenSwap(srcToken, destToken, data);
      } else if (this.isETHAddress(destToken)) {
        return this.tokenToEthSwap(srcToken, destToken, data);
      } else {
        return this.tokenToTokenSwap(srcToken, destToken, data);
      }
    } catch (e) {
      throw new Error(e.message);
    }
  }

  protected async ethToTokenSwap(
    srcToken: Address,
    destToken: Address,
    data: DEXData,
  ): Promise<DexParams> {
    throw new Error('not implemented!');
  }

  protected async tokenToEthSwap(
    srcToken: Address,
    destToken: Address,
    data: DEXData,
  ): Promise<DexParams> {
    throw new Error('not implemented!');
  }

  protected async tokenToTokenSwap(
    srcToken: Address,
    destToken: Address,
    data: DEXData,
  ): Promise<DexParams> {
    throw new Error('not implemented!');
  }
}
