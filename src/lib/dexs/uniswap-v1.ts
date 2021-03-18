import UNISWAP_V1_EXCHANGE_ABI = require('../../abi/uniswap.v1.exchange.json');
import UNISWAP_V1_FACTORY_ABI = require('../../abi/uniswap.v1.factory.json');

import Adapter from './adapter';
import { Address, OptimalRate } from '../../types';
import { UniswapV1DEXData, DexParams } from './dex-types';

export class UniswapV1 extends Adapter {

  static getDexData(optimalRate: OptimalRate, name: string): UniswapV1DEXData {
    return {
      name,
      srcAmount: optimalRate.srcAmount,
      destAmount: '1',
      exchange: optimalRate.data.exchange,
      factory: optimalRate.data.factory,
      deadline: 0,
      minEthBought: '1',
    };
  }

  async getExchange(srcToken: Address, destToken: Address, data: UniswapV1DEXData) {
    if (data.exchange) return data.exchange;

    const uniswapFactory = new this.web3Provider.eth.Contract(UNISWAP_V1_FACTORY_ABI, data.factory);

    const token = this.isETHAddress(srcToken) ? destToken : srcToken;

    return await uniswapFactory.methods.getExchange(token).call();
  }

  async getExchangeContract(srcToken: Address, destToken: Address, data: UniswapV1DEXData) {
    const exchangeAddress = data.exchange || await this.getExchange(srcToken, destToken, data);

    return new this.web3Provider.eth.Contract(UNISWAP_V1_EXCHANGE_ABI, exchangeAddress);
  }

  async ethToTokenSwap(srcToken: Address, destToken: Address, data: UniswapV1DEXData): Promise<DexParams> {
    const uniswapExchange = await this.getExchangeContract(srcToken, destToken, data);

    const deadline = data.deadline || this.getDeadline();

    const swapData = uniswapExchange.methods.ethToTokenSwapInput(data.destAmount, deadline).encodeABI();

    return super.swap(
      srcToken,
      destToken,
      data,
      swapData,
      uniswapExchange._address,
    );
  }

  async tokenToEthSwap(srcToken: Address, destToken: Address, data: UniswapV1DEXData): Promise<DexParams> {
    const uniswapExchange = await this.getExchangeContract(srcToken, destToken, data);

    const deadline = data.deadline || this.getDeadline();

    const swapData = uniswapExchange.methods.tokenToEthSwapInput(
      data.srcAmount,
      data.destAmount,
      deadline,
    ).encodeABI();

    return super.swap(
      srcToken,
      destToken,
      data,
      swapData,
      uniswapExchange._address,
    );
  }

  async tokenToTokenSwap(srcToken: Address, destToken: Address, data: UniswapV1DEXData): Promise<DexParams> {
    const uniswapExchange = await this.getExchangeContract(srcToken, destToken, data);

    const deadline = data.deadline || this.getDeadline();

    const swapData = uniswapExchange.methods.tokenToTokenSwapInput(
      data.srcAmount,
      data.destAmount,
      data.minEthBought,
      deadline,
      destToken,
    ).encodeABI();

    return super.swap(
      srcToken,
      destToken,
      data,
      swapData,
      uniswapExchange._address,
    );
  }

}
