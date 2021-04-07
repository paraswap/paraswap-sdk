import Web3 from 'web3';
import BigNumber from 'bignumber.js';
import _ = require('lodash');
import {
  Adapters,
  Address,
  NumberAsString,
  PriceString,
  Rate,
  TransactionPath,
  TransactionMegaPath,
  TransactionRoute,
  OptimalRatesWithPartnerFees,
  OptimalRatesWithPartnerFeesSell,
  OptimalRatesWithPartnerFeesBuy,
  OptimalRate,
  LegacyTransactionSellParams,
  ETHER_ADDRESS,
} from '../types';

import { Token } from './token';
import { SwapSide, ContractMethod, AugustusVersion } from '../constants';

import { Swapper } from './swapper';
import { DEXData } from './dexs/dex-types';
import { getDEX } from './dexs';
import { PayloadEncoder } from './payload-encoder';

const AUGUSTUS_V2_ABI = require('../abi/augustus-v2.json');
const AUGUSTUS_V3_ABI = require('../abi/augustus-v3.json');
const AUGUSTUS_V4_ABI = require('../abi/augustus-v4.json');

export const NULL_ADDRESS = '0x0000000000000000000000000000000000000000';

//Gas units overhead in order to maximize the transaction success rate
export const GAS_MULTIPLIER = Number(process.env.GAS_MULTIPLIER || 23);

export const ZRX_GAZ_MULTIPLIER = 70000;
const LENDING_DEXES = ['compound', 'Fulcrum', 'idle', 'aave', 'aave2'];
const UNISWAPV2_FORKS = [
  'uniswapv2',
  'sushiswap',
  'defiswap',
  'linkswap',
  'pancakeswap',
  'julswap',
  'streetswap',
  'quickswap',
  'cometh',
];

/*
BUY SUPPORTED:
aave, balancer, bdai, beth, bzx, chai, compound, idle, kyber, oasis, uniswapv1, uniswapv2, weth, 0x v2, 0x v3

NOT:
bancor, curve
*/

// TODO: add augustus v4 abi
const AugustusAbi: { [version: number]: any } = {
  [AugustusVersion.v2]: AUGUSTUS_V2_ABI,
  [AugustusVersion.v3]: AUGUSTUS_V3_ABI,
  [AugustusVersion.v4]: AUGUSTUS_V4_ABI,
};

export class TransactionBuilder {
  augustusContract: any;
  swapper: Swapper;
  buildersMap: {
    [version: number]: {
      [contractMethod: string]: (
        srcToken: Token,
        destToken: Token,
        amount: PriceString,
        minMaxAmount: PriceString,
        priceRoute: OptimalRatesWithPartnerFees,
        userAddress: Address,
        referrer: string,
        referrerIndex: number,
        gasPrice: NumberAsString,
        useReduxToken: boolean,
        receiver?: Address,
        version?: AugustusVersion,
      ) => any;
    };
  };
  payloadEncoder: PayloadEncoder;

  constructor(
    private network: number,
    private web3Provider: Web3,
    private dexConf: Adapters,
    private tokens: Token[],
    private augustusVersion: AugustusVersion,
  ) {
    const augustusAddress = this.dexConf.augustus.exchange;
    this.augustusContract = new this.web3Provider.eth.Contract(
      AugustusAbi[augustusVersion],
      augustusAddress,
    );

    this.payloadEncoder = new PayloadEncoder(
      network,
      web3Provider,
      dexConf,
      tokens,
      augustusVersion,
    );

    this.swapper = new Swapper(
      this.network,
      this.web3Provider,
      this.augustusContract,
    );

    this.buildersMap = {
      [AugustusVersion.v2]: {
        [ContractMethod.multiSwap.toLowerCase()]: this.getLegacyMultiswapTx.bind(
          this,
        ),
      },
      [AugustusVersion.v3]: {
        [ContractMethod.multiSwap.toLowerCase()]: this.getMultiSwapTx.bind(
          this,
        ),
        [ContractMethod.simpleSwap.toLowerCase()]: this.getSimpleSwapTx.bind(
          this,
        ),
        [ContractMethod.buy.toLowerCase()]: this.getBuyTx.bind(this),
      },
      [AugustusVersion.v4]: {
        [ContractMethod.multiSwap.toLowerCase()]: this.getMultiSwapTx.bind(
          this,
        ),
        [ContractMethod.simpleSwap.toLowerCase()]: this.getSimpleSwapTx.bind(
          this,
        ),
        [ContractMethod.buy.toLowerCase()]: this.getBuyTx.bind(this),
        // [ContractMethod.simpleBuy.toLowerCase()]: this.getSimpleBuyTx.bind(
        //   this,
        // ),
        [ContractMethod.megaSwap.toLowerCase()]: this.getMegaSwapTx.bind(this),
        [ContractMethod.swapOnUniswap.toLowerCase()]: this.getSwapOnUniswapTx.bind(
          this,
        ),
        [ContractMethod.buyOnUniswap.toLowerCase()]: this.getBuyOnUniswapTx.bind(
          this,
        ),
        [ContractMethod.swapOnUniswapFork.toLowerCase()]: this.getSwapOnUniswapForkTx.bind(
          this,
        ),
        [ContractMethod.buyOnUniswapFork.toLowerCase()]: this.getBuyOnUniswapForkTx.bind(
          this,
        ),
      },
    };
  }

  private isETHAddress = (address: string) =>
    address.toLowerCase() === ETHER_ADDRESS.toLowerCase();

  private getSimpleSwapValue = (values: NumberAsString[]) => {
    return values.reduce((acc, v) => acc.plus(v), new BigNumber(0)).toString();
  };

  private getMegaValue = (
    srcToken: Address,
    srcAmount: string,
    path: TransactionMegaPath<TransactionRoute>[],
  ) => {
    const networkFees = _(path)
      .map(p => p.path)
      .flatten()
      .map(p => p.routes)
      .flatten()
      .reduce(
        (acc: BigNumber, r: TransactionRoute) =>
          r.networkFee ? acc : acc.plus(r.networkFee),
        new BigNumber('0'),
      );
    const value = this.isETHAddress(srcToken) ? srcAmount : '0';
    return networkFees.plus(value).toFixed();
  };

  private getValue = (
    srcToken: Address,
    srcAmount: string,
    path: TransactionPath<TransactionRoute>[],
  ) => {
    const networkFees = _(path)
      .map(p => p.routes)
      .flatten()
      .reduce(
        (acc: BigNumber, r: TransactionRoute) =>
          r.networkFee ? acc : acc.plus(r.networkFee),
        new BigNumber('0'),
      );
    const value = this.isETHAddress(srcToken) ? srcAmount : '0';
    return new BigNumber(value).plus(networkFees).toFixed();
  };

  estimateGas = async (
    swapMethodData: any,
    fromUser: Address,
    value: NumberAsString,
    gasPrice: NumberAsString,
    multiSwapSteps: number,
  ): Promise<NumberAsString> => {
    const gas = await swapMethodData.estimateGas({
      from: fromUser,
      value,
      data: swapMethodData,
      gasPrice,
    });

    const multiplier = new BigNumber(GAS_MULTIPLIER).times(multiSwapSteps);

    const gasOverhead =
      GAS_MULTIPLIER > 0 ? new BigNumber(1).plus(multiplier.dividedBy(100)) : 1;

    return new BigNumber(gas).times(gasOverhead).toFixed(0);
  };

  getBuyTx = async (
    srcToken: Token,
    destToken: Token,
    destAmount: PriceString,
    maxAmountIn: PriceString,
    priceRoute: OptimalRatesWithPartnerFees,
    userAddress: Address,
    referrer: string,
    referrerIndex: number,
    gasPrice: NumberAsString,
    useReduxToken: boolean = false,
    receiver: Address = NULL_ADDRESS,
    version: AugustusVersion = AugustusVersion.v4,
  ) => {
    const slippageFactor = new BigNumber(maxAmountIn).dividedBy(
      priceRoute.srcAmount,
    );
    const route = await this.payloadEncoder.getBuyPath(
      srcToken.address,
      destToken.address,
      priceRoute as OptimalRatesWithPartnerFeesBuy,
      gasPrice,
      slippageFactor,
    );

    const params =
      version === AugustusVersion.v4
        ? {
            fromToken: srcToken.address,
            toToken: destToken.address,
            fromAmount: maxAmountIn,
            toAmount: destAmount,
            beneficiary: receiver,
            referrer,
            useReduxToken,
            route: route[0]!.routes,
          }
        : {
            fromToken: srcToken.address,
            toToken: destToken.address,
            fromAmount: maxAmountIn,
            toAmount: destAmount,
            expectedAmount: priceRoute.srcAmount,
            // we keep route structure similar to sell
            // in lieu of eventually having multihop with buy
            route: route[0]!.routes,
            beneficiary: receiver,
            referrer,
          };

    const method = this.augustusContract.methods.buy.bind(
      this.augustusContract,
    );
    const value = this.getValue(srcToken.address, maxAmountIn, route);

    return {
      method,
      value,
      params: { data: params },
    };
  };

  getMultiSwapTx = async (
    srcToken: Token,
    destToken: Token,
    srcAmount: PriceString,
    minAmountOut: PriceString,
    priceRoute: OptimalRatesWithPartnerFees,
    userAddress: Address,
    referrer: string,
    referrerIndex: number,
    gasPrice: NumberAsString,
    useReduxToken: boolean = false,
    receiver: Address = NULL_ADDRESS,
    version: AugustusVersion = AugustusVersion.v4,
  ) => {
    const path = await this.payloadEncoder.getSellPath(
      srcToken.address,
      destToken.address,
      priceRoute as OptimalRatesWithPartnerFeesSell,
      gasPrice,
    );

    const params =
      version === AugustusVersion.v4
        ? {
            fromToken: srcToken.address,
            fromAmount: srcAmount,
            toAmount: minAmountOut,
            expectedAmount: priceRoute.destAmount,
            beneficiary: receiver,
            referrer,
            useReduxToken,
            path,
          }
        : {
            fromToken: srcToken.address,
            toToken: destToken.address,
            fromAmount: srcAmount,
            toAmount: minAmountOut,
            expectedAmount: priceRoute.destAmount,
            beneficiary: receiver,
            referrer,
            path,
          };

    const method = this.augustusContract.methods.multiSwap.bind(
      this.augustusContract,
    );
    const value = this.getValue(srcToken.address, srcAmount, path);

    return {
      method,
      value,
      params: { data: params },
    };
  };

  getSimpleSwapTx = async (
    srcToken: Token,
    destToken: Token,
    srcAmount: PriceString,
    toAmount: PriceString,
    priceRoute: OptimalRatesWithPartnerFees,
    userAddress: Address,
    referrer: string,
    referrerIndex: number,
    gasPrice: NumberAsString,
    useReduxToken: boolean = false,
    beneficiary: Address = NULL_ADDRESS,
    version?: AugustusVersion,
  ) => {
    const exchangeData: DEXData[] = (priceRoute as OptimalRatesWithPartnerFeesSell).bestRoute.map(
      (br: OptimalRate) => {
        const Dex = getDEX(br.exchange);

        if (Dex) {
          return Dex.getDexData(br, br.exchange);
        } else {
          throw new Error('Unsupported Exchange: ' + br.exchange);
        }
      },
    );

    const {
      callees,
      values,
      calldata,
      startIndexes,
    } = await this.swapper.buildSwap(
      srcToken.address,
      destToken.address,
      srcAmount,
      toAmount,
      exchangeData,
    );

    const redux = version === AugustusVersion.v4 ? { useReduxToken } : {};

    const params = {
      fromToken: srcToken.address,
      toToken: destToken.address,
      fromAmount: srcAmount,
      toAmount,
      expectedAmount: priceRoute.destAmount,
      callees,
      exchangeData: calldata,
      startIndexes,
      values,
      beneficiary,
      referrer,
      ...redux,
    };

    const method = this.augustusContract.methods.simpleSwap.bind(
      this.augustusContract,
    );
    const value = this.getSimpleSwapValue(values);
    return {
      method,
      value,
      params,
    };
  };

  getLegacyMultiswapTx = async (
    srcToken: Token,
    destToken: Token,
    srcAmount: PriceString,
    minAmountOut: PriceString,
    priceRoute: OptimalRatesWithPartnerFees,
    userAddress: Address,
    referrer: string,
    referrerIndex: number,
    gasPrice: NumberAsString,
    useReduxToken: boolean = false,
    receiver: Address = NULL_ADDRESS,
  ) => {
    const path = await this.payloadEncoder.getSellPath(
      srcToken.address,
      destToken.address,
      priceRoute as OptimalRatesWithPartnerFeesSell,
      gasPrice,
    );
    const params: LegacyTransactionSellParams = {
      fromToken: srcToken.address,
      toToken: destToken.address,
      fromAmount: srcAmount,
      toAmount: minAmountOut,
      expectedAmount: minAmountOut,
      path,
      mintPrice: '0',
      beneficiary: receiver,
      donationBasisPoints: '0',
      referrer,
    };

    const method = this.augustusContract.methods.multiSwap.bind(
      this.augustusContract,
    );

    const value = this.getValue(srcToken.address, srcAmount, path);
    return {
      method,
      value,
      params,
    };
  };

  // TODO: Complete buy implementation
  // getSimpleBuyTx = async (
  //   srcToken: Token,
  //   destToken: Token,
  //   srcAmount: PriceString,
  //   minAmountOut: PriceString,
  //   priceRoute: OptimalRatesWithPartnerFees,
  //   userAddress: Address,
  //   referrer: Address,
  //   gasPrice: NumberAsString,
  //   useReduxToken: boolean = false,
  //   receiver: Address = NULL_ADDRESS,
  // ) => {

  // };

  getMegaSwapTx = async (
    srcToken: Token,
    destToken: Token,
    srcAmount: PriceString,
    minAmountOut: PriceString,
    priceRoute: OptimalRatesWithPartnerFees,
    userAddress: Address,
    referrer: string,
    referrerIndex: number,
    gasPrice: NumberAsString,
    useReduxToken: boolean = false,
    receiver: Address = NULL_ADDRESS,
  ) => {
    const path = await this.payloadEncoder.getSellMegaPath(
      srcToken.address,
      destToken.address,
      priceRoute as OptimalRatesWithPartnerFeesSell,
      gasPrice,
    );

    const params = {
      fromToken: srcToken.address,
      fromAmount: srcAmount,
      toAmount: minAmountOut,
      expectedAmount: priceRoute.destAmount,
      beneficiary: receiver,
      referrer,
      useReduxToken,
      path,
    };

    const method = this.augustusContract.methods.megaSwap.bind(
      this.augustusContract,
    );

    const value = this.getMegaValue(srcToken.address, srcAmount, path);
    return {
      method,
      value,
      params: { data: params },
    };
  };

  fixUniswapPath = (
    srcToken: Token,
    destToken: Token,
    path: Address[],
  ): Address[] => {
    let _path = _.clone(path);
    _path[0] = this.isETHAddress(srcToken.address) ? ETHER_ADDRESS : _path[0];
    _path[path.length - 1] = this.isETHAddress(destToken.address)
      ? ETHER_ADDRESS
      : _path[path.length - 1];
    return _path;
  };

  getSwapOnUniswapTx = async (
    srcToken: Token,
    destToken: Token,
    srcAmount: PriceString,
    minAmountOut: PriceString,
    priceRoute: OptimalRatesWithPartnerFees,
    userAddress: Address,
    referrer: string,
    referrerIndex: number,
    gasPrice: NumberAsString,
    useReduxToken: boolean = false,
    receiver: Address = NULL_ADDRESS,
  ) => {
    if (
      !(
        priceRoute.bestRoute[0].exchange.toLowerCase() === 'uniswapv2' &&
        priceRoute.bestRoute[0].data.path
      )
    )
      throw new Error(
        `TransactionBuilder_getSwapOnUniswapTx: Invalid contractMethod or priceRoute.`,
      );

    const path = this.fixUniswapPath(
      srcToken,
      destToken,
      priceRoute.bestRoute[0].data.path,
    );

    const params = {
      amountIn: srcAmount,
      amountOutMin: minAmountOut,
      path,
      referrer: referrerIndex || 0,
    };

    const method = this.augustusContract.methods.swapOnUniswap.bind(
      this.augustusContract,
    );
    const value = this.isETHAddress(srcToken.address) ? srcAmount : '0';
    return {
      method,
      value,
      params,
    };
  };

  getBuyOnUniswapTx = async (
    srcToken: Token,
    destToken: Token,
    dstAmount: PriceString,
    maxAmountIn: PriceString,
    priceRoute: OptimalRatesWithPartnerFees,
    userAddress: Address,
    referrer: string,
    referrerIndex: number,
    gasPrice: NumberAsString,
    useReduxToken: boolean = false,
    receiver: Address = NULL_ADDRESS,
  ) => {
    if (
      !(
        priceRoute.bestRoute[0].exchange.toLowerCase() === 'uniswapv2' &&
        priceRoute.bestRoute[0].data.path
      )
    )
      throw new Error(
        `TransactionBuilder_getBuyOnUniswapTx: Invalid contractMethod or priceRoute.`,
      );

    const path = this.fixUniswapPath(
      srcToken,
      destToken,
      priceRoute.bestRoute[0].data.path,
    );

    const params = {
      amountInMax: maxAmountIn,
      amountOut: dstAmount,
      path,
      referrer: referrerIndex || 0,
    };

    const method = this.augustusContract.methods.buyOnUniswap.bind(
      this.augustusContract,
    );
    const value = this.isETHAddress(srcToken.address) ? maxAmountIn : '0';
    return {
      method,
      value,
      params,
    };
  };

  getSwapOnUniswapForkTx = async (
    srcToken: Token,
    destToken: Token,
    srcAmount: PriceString,
    minAmountOut: PriceString,
    priceRoute: OptimalRatesWithPartnerFees,
    userAddress: Address,
    referrer: string,
    referrerIndex: number,
    gasPrice: NumberAsString,
    useReduxToken: boolean = false,
    receiver: Address = NULL_ADDRESS,
  ) => {
    if (
      !(
        UNISWAPV2_FORKS.includes(
          priceRoute.bestRoute[0].exchange.toLowerCase(),
        ) && priceRoute.bestRoute[0].data.path
      )
    )
      throw new Error(
        `TransactionBuilder_getSwapOnUniswapForkTx: Invalid contractMethod or priceRoute.`,
      );

    const path = this.fixUniswapPath(
      srcToken,
      destToken,
      priceRoute.bestRoute[0].data.path,
    );

    const params = {
      factory: priceRoute.bestRoute[0].data.factory,
      initCode: priceRoute.bestRoute[0].data.initCode,
      amountIn: srcAmount,
      amountOutMin: minAmountOut,
      path,
      referrer: referrerIndex || 0,
    };

    const method = this.augustusContract.methods.swapOnUniswapFork.bind(
      this.augustusContract,
    );
    const value = this.isETHAddress(srcToken.address) ? srcAmount : '0';
    return {
      method,
      value,
      params,
    };
  };

  getBuyOnUniswapForkTx = async (
    srcToken: Token,
    destToken: Token,
    dstAmount: PriceString,
    maxAmountIn: PriceString,
    priceRoute: OptimalRatesWithPartnerFees,
    userAddress: Address,
    referrer: string,
    referrerIndex: number,
    gasPrice: NumberAsString,
    useReduxToken: boolean = false,
    receiver: Address = NULL_ADDRESS,
  ) => {
    if (
      !(
        UNISWAPV2_FORKS.includes(
          priceRoute.bestRoute[0].exchange.toLowerCase(),
        ) && priceRoute.bestRoute[0].data.path
      )
    )
      throw new Error(
        `TransactionBuilder_getBuyOnUniswapForkTx: Invalid contractMethod or priceRoute.`,
      );

    const path = this.fixUniswapPath(
      srcToken,
      destToken,
      priceRoute.bestRoute[0].data.path,
    );

    const params = {
      factory: priceRoute.bestRoute[0].data.factory,
      initCode: priceRoute.bestRoute[0].data.initCode,
      amountInMax: maxAmountIn,
      amountOut: dstAmount,
      path,
      referrer: referrerIndex || 0,
    };

    const method = this.augustusContract.methods.buyOnUniswapFork.bind(
      this.augustusContract,
    );
    const value = this.isETHAddress(srcToken.address) ? maxAmountIn : '0';
    return {
      method,
      value,
      params,
    };
  };

  buildTransaction = async (
    srcToken: Token,
    destToken: Token,
    srcAmount: PriceString,
    destAmount: PriceString,
    priceRoute: OptimalRatesWithPartnerFees,
    userAddress: Address,
    referrer: string,
    referrerIndex: number,
    gasPrice: NumberAsString,
    receiver: Address,
    ignoreGas: boolean,
    version: AugustusVersion,
    onlyParams: boolean = false,
    useReduxToken: boolean = false,
  ) => {
    if (
      !(
        version in this.buildersMap &&
        priceRoute.contractMethod.toLowerCase() in this.buildersMap[version]
      )
    )
      throw new Error(
        'TransactionBuilder_buildTransaction unsupported version or contractMethod',
      );

    const amount =
      priceRoute.side.toLowerCase() === SwapSide.SELL.toLowerCase()
        ? srcAmount
        : destAmount;
    const minMaxAmount =
      priceRoute.side.toLowerCase() === SwapSide.SELL.toLowerCase()
        ? destAmount
        : srcAmount;

    const partialTx = await this.buildersMap[version][
      priceRoute.contractMethod.toLowerCase()
    ](
      srcToken,
      destToken,
      amount,
      minMaxAmount,
      priceRoute,
      userAddress,
      referrer,
      referrerIndex,
      gasPrice,
      useReduxToken,
      receiver,
      version,
    );

    if (onlyParams) return partialTx.params;

    const method = partialTx.method.apply(
      null,
      Object.values(partialTx.params),
    );
    const gas = ignoreGas
      ? {}
      : {
          gas: await this.estimateGas(
            method,
            userAddress,
            partialTx.value,
            gasPrice,
            this.payloadEncoder.multiSwapSteps(priceRoute),
          ),
        };

    // Fix augustus address for multiple versions!
    return {
      from: userAddress,
      to: this.augustusContract._address,
      chainId: this.network,
      value: partialTx.value,
      data: method.encodeABI(),
      ...gas,
      gasPrice,
    };
  };
}
