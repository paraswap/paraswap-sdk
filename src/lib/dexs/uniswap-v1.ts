import UNISWAP_V1_EXCHANGE_ABI = require('../../abi/uniswap.v1.exchange.json');
import UNISWAP_V1_FACTORY_ABI = require('../../abi/uniswap.v1.factory.json');

import Adapter from './adapter';
import { Address, EXCHANGES, OptimalRate } from '../../types';
import { UniswapV1DEXData, DexParams } from './dex-types';

export class UniswapV1 extends Adapter {
  static getDexData(optimalRate: OptimalRate): UniswapV1DEXData {
    return {
      name: EXCHANGES.UNISWAP,
      srcAmount: optimalRate.srcAmount,
      destAmount: '1',
      exchange: optimalRate.data.exchange,
      factory: optimalRate.data.factory,
      deadline: 0,
      minEthBought: '1',
    };
  }

  async getExchange(
    srcToken: Address,
    destToken: Address,
    data: UniswapV1DEXData,
  ) {
    if (data.exchange) return data.exchange;

    const uniswapFactory = new this.web3Provider.eth.Contract(
      UNISWAP_V1_FACTORY_ABI,
      data.factory,
    );

    const token = this.isETHAddress(srcToken) ? destToken : srcToken;

    return await uniswapFactory.methods.getExchange(token).call();
  }

  async getExchangeContract(
    srcToken: Address,
    destToken: Address,
    data: UniswapV1DEXData,
  ) {
    const exchangeAddress =
      data.exchange || (await this.getExchange(srcToken, destToken, data));

    return new this.web3Provider.eth.Contract(
      UNISWAP_V1_EXCHANGE_ABI,
      exchangeAddress,
    );
  }

  async ethToTokenSwap(
    srcToken: Address,
    destToken: Address,
    data: UniswapV1DEXData,
  ): Promise<DexParams> {
    const uniswapExchange = await this.getExchangeContract(
      srcToken,
      destToken,
      data,
    );

    const deadline = data.deadline || (await this.getDeadline());

    const calldata = uniswapExchange.methods
      .ethToTokenSwapInput(data.destAmount, deadline)
      .encodeABI();

    return {
      callees: [uniswapExchange._address],
      calldata: [calldata],
      values: [data.srcAmount],
    };
  }

  async tokenToEthSwap(
    srcToken: Address,
    destToken: Address,
    data: UniswapV1DEXData,
  ): Promise<DexParams> {
    const uniswapExchange = await this.getExchangeContract(
      srcToken,
      destToken,
      data,
    );

    const deadline = data.deadline || (await this.getDeadline());

    const approveData = this.augustus.methods
      .approve(data.exchange, srcToken, data.srcAmount)
      .encodeABI();

    const calldata = uniswapExchange.methods
      .tokenToEthSwapInput(data.srcAmount, data.destAmount, deadline)
      .encodeABI();

    return {
      callees: [this.augustus._address, uniswapExchange._address],
      calldata: [approveData, calldata],
      values: ['0', '0'],
    };
  }

  async tokenToTokenSwap(
    srcToken: Address,
    destToken: Address,
    data: UniswapV1DEXData,
  ): Promise<DexParams> {
    const uniswapExchange = await this.getExchangeContract(
      srcToken,
      destToken,
      data,
    );

    const deadline = data.deadline || (await this.getDeadline());

    const approveData = this.augustus.methods
      .approve(data.exchange, srcToken, data.srcAmount)
      .encodeABI();

    const calldata = uniswapExchange.methods
      .tokenToTokenSwapInput(
        data.srcAmount,
        data.destAmount,
        data.minEthBought,
        deadline,
        destToken,
      )
      .encodeABI();

    return {
      callees: [this.augustus._address, uniswapExchange._address],
      calldata: [approveData, calldata],
      values: ['0', '0'],
    };
  }
}
