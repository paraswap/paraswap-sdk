import { Weth } from './weth';
import Adapter from './adapter';
import { Address, NumberAsString, OptimalRate } from '../../types';
import { Contract } from 'web3-eth-contract';
import { DexParams, UniswapV3DEXData } from './dex-types';

import UNISWAP_V3_ROUTER_ABI = require('../../abi/uniswap.v3.router.json');
import ERC20_ABI = require('../../abi/erc20.json');

const UNISWAP_V3_ROUTER_ADDRESSES: { [networkid: number]: Address } = {
  1: '0xE592427A0AEce92De3Edee1F18E0157C05861564',
};

type ExactInputSingleParams = {
  tokenIn: Address; // address
  tokenOut: Address; // address
  fee: number; // 'uint24',
  recipient: Address; // address
  deadline: number; // 'uint256',
  amountIn: NumberAsString; // 'uint256',
  amountOutMinimum: NumberAsString; // 'uint256',
  sqrtPriceLimitX96: NumberAsString; // 'uint160',
};

export class UniswapV3 extends Adapter {
  router: Contract;
  swapRouterAddress: Address;

  constructor(
    protected network: number,
    protected web3Provider: any,
    protected augustus?: any,
  ) {
    super(network, web3Provider, augustus);
    this.swapRouterAddress = UNISWAP_V3_ROUTER_ADDRESSES[this.network];
    this.router = new this.web3Provider.eth.Contract(
      UNISWAP_V3_ROUTER_ABI,
      this.swapRouterAddress,
    );
  }

  static getDexData(optimalRate: OptimalRate, name: string): UniswapV3DEXData {
    return {
      name,
      srcAmount: optimalRate.srcAmount,
      destAmount: '1',
      fee: optimalRate.data.fee,
      deadline: optimalRate.data.deadline,
      sqrtPriceLimitX96: optimalRate.data.sqrtPriceLimitX96 || '0',
    };
  }

  protected async ethToTokenSwap(
    srcToken: Address,
    destToken: Address,
    data: UniswapV3DEXData,
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
    data: UniswapV3DEXData,
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
    data: UniswapV3DEXData,
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
    data: UniswapV3DEXData,
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

  private buildSwapData(
    srcToken: Address,
    destToken: Address,
    data: UniswapV3DEXData,
  ) {
    const exactInputSingleParams: ExactInputSingleParams = {
      tokenIn: srcToken,
      tokenOut: destToken,
      fee: data.fee,
      recipient: this.augustus._address,
      deadline: data.deadline || this.getDeadline(),
      amountIn: data.srcAmount,
      amountOutMinimum: data.destAmount,
      sqrtPriceLimitX96: data.sqrtPriceLimitX96 || '0',
    };

    const swapData = this.router.methods
      .exactInputSingle(exactInputSingleParams)
      .encodeABI();

    return swapData;
  }
}
