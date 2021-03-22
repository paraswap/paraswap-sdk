import { Cofix } from './dexs/cofix';

const web3Coder = require('web3-eth-abi');
import Web3 from 'web3';

import BigNumber from 'bignumber.js';
import _ = require('lodash');
import {
  Adapters,
  Address,
  NumberAsString,
  PriceString,
  Rate,
  TransactionData,
  TransactionBuyParams,
  TransactionBuyRoute,
  TransactionSellParams,
  TransactionSellRoute,
  TransactionPath,
  TransactionRoute,
  OptimalRatesWithPartnerFees,
  OptimalRatesWithPartnerFeesSell,
  OptimalRatesWithPartnerFeesBuy,
  OptimalRate,
  SimpleSwapTransactionParams,
  LegacyTransactionSellParams,
} from '../types';

import { Token } from './token';
import { ZeroXOrder } from './dexs/zerox';
import { Oasis } from './dexs/oasis';
import { Kyber } from './dexs/kyber';
import { SwapSide } from '../constants';

import { Swapper } from './swapper';
import { DEXData } from './dexs/dex-types';
import { getDEX } from './dexs';

const AUGUSTUS_ABI = require('../abi/augustus.json');
const AUGUSTUS_LEGACY_ABI = require('../abi/augustus-legacy.json');

export const NULL_ADDRESS = '0x0000000000000000000000000000000000000000';
export const ETHER_ADDRESS = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';

//Gas units overhead in order to maximize the transaction success rate
export const GAS_MULTIPLIER = Number(process.env.GAS_MULTIPLIER || 23);

export const ZRX_GAZ_MULTIPLIER = 70000;
const LENDING_DEXES = ['compound', 'Fulcrum', 'idle', 'aave', 'aave2'];

/*
BUY SUPPORTED:
aave, balancer, bdai, beth, bzx, chai, compound, idle, kyber, oasis, uniswapv1, uniswapv2, weth, 0x v2, 0x v3

NOT:
bancor, curve
*/

export class TransactionBuilder {
  augustusContract: any;

  constructor(
    private network: number,
    private web3Provider: Web3,
    private dexConf: Adapters,
    private tokens: Token[],
    private useLegacy: boolean,
  ) {
    const augustusAddress = this.dexConf.augustus.exchange;

    const abi = useLegacy ? AUGUSTUS_LEGACY_ABI : AUGUSTUS_ABI;

    this.augustusContract = new this.web3Provider.eth.Contract(
      abi,
      augustusAddress,
    );
  }

  multiSwapSteps = (priceRoute: OptimalRatesWithPartnerFees) => {
    return (priceRoute.multiRoute && priceRoute.multiRoute.length) || 1;
  };

  private isETHAddress = (address: string) =>
    address.toLowerCase() === ETHER_ADDRESS.toLowerCase();

  private getPayLoad = async (
    fromToken: Address,
    toToken: Address,
    exchange: string,
    data: any,
    networkFee: string,
    side: SwapSide,
  ): Promise<string> => {
    const srcToken = this.tokens!.find(t => t.address === fromToken)!;
    const destToken = this.tokens!.find(t => t.address === toToken)!;

    if (exchange.toLowerCase().match(/^paraswappool(.*)/)) {
      return web3Coder.encodeParameter(
        {
          ParentStruct: {
            'orders[]': {
              makerAddress: 'address', // Address that created the order.
              takerAddress: 'address', // Address that is allowed to fill the order. If set to 0, any address is allowed to fill the order.
              feeRecipientAddress: 'address', // Address that will recieve fees when order is filled.
              senderAddress: 'address', // Address that is allowed to call Exchange contract methods that affect this order. If set to 0, any address is allowed to call these methods.
              makerAssetAmount: 'uint256', // Amount of makerAsset being offered by maker. Must be greater than 0.
              takerAssetAmount: 'uint256', // Amount of takerAsset being bid on by maker. Must be greater than 0.
              makerFee: 'uint256', // Fee paid to feeRecipient by maker when order is filled.
              takerFee: 'uint256', // Fee paid to feeRecipient by taker when order is filled.
              expirationTimeSeconds: 'uint256', // Timestamp in seconds at which order expires.
              salt: 'uint256', // Arbitrary number to facilitate uniqueness of the order's hash.
              makerAssetData: 'bytes', // Encoded data that can be decoded by a specified proxy contract when transferring makerAsset. The leading bytes4 references the id of the asset proxy.
              takerAssetData: 'bytes',
            },
            signatures: 'bytes[]',
          },
        },
        {
          orders: ZeroXOrder.formatOrders(data.orders),
          signatures: data.orders.map((o: any) => o.signature),
        },
      );
    }

    switch (exchange.toLowerCase()) {
      case '0x':
      case '0xrfqt':
        if (side == SwapSide.BUY) return '0x';
        const orderData = ZeroXOrder.formatOrders(data.orders, true);
        const signatures = data.orders.map((o: any) => o.signature);

        return web3Coder.encodeParameter(
          {
            ParentStruct: {
              'orders[]': {
                makerAddress: 'address', // Address that created the order.
                takerAddress: 'address', // Address that is allowed to fill the order. If set to 0, any address is allowed to fill the order.
                feeRecipientAddress: 'address', // Address that will recieve fees when order is filled.
                senderAddress: 'address', // Address that is allowed to call Exchange contract methods that affect this order. If set to 0, any address is allowed to call these methods.
                makerAssetAmount: 'uint256', // Amount of makerAsset being offered by maker. Must be greater than 0.
                takerAssetAmount: 'uint256', // Amount of takerAsset being bid on by maker. Must be greater than 0.
                makerFee: 'uint256', // Fee paid to feeRecipient by maker when order is filled.
                takerFee: 'uint256', // Fee paid to feeRecipient by taker when order is filled.
                expirationTimeSeconds: 'uint256', // Timestamp in seconds at which order expires.
                salt: 'uint256', // Arbitrary number to facilitate uniqueness of the order's hash.
                makerAssetData: 'bytes', // Encoded data that can be decoded by a specified proxy contract when transferring makerAsset. The leading bytes4 references the id of the asset proxy.
                takerAssetData: 'bytes', // Encoded data that can be decoded by a specified proxy contract when transferring takerAsset. The leading bytes4 references the id of the asset proxy.
                makerFeeAssetData: 'bytes', // Encoded data that can be decoded by a specified proxy contract when transferring makerFeeAsset. The leading bytes4 references the id of the asset proxy.
                takerFeeAssetData: 'bytes',
              },
              signatures: 'bytes[]',
              networkFee: 'uint256',
            },
          },
          {
            orders: orderData,
            signatures: signatures,
            networkFee,
          },
        );

      case 'oasis':
        const { otc, weth, factory } = Oasis.getExchangeParams(this.network);

        return web3Coder.encodeParameter(
          {
            ParentStruct: {
              otc: 'address',
              weth: 'address',
              factory: 'address',
            },
          },
          { otc, weth, factory },
        );
      case 'kyber':
        const kyber = new Kyber(this.network, this.web3Provider);
        const hint = await kyber.buildHint(fromToken, toToken);
        const minConversionRateForBuy = 1;
        return web3Coder.encodeParameter(
          {
            ParentStruct: {
              minConversionRateForBuy: 'uint256',
              hint: 'bytes',
            },
          },
          { minConversionRateForBuy, hint },
        );
      case 'bancor':
        if (side == SwapSide.BUY) return '0x';
        const { path } = data;

        return web3Coder.encodeParameter(
          {
            ParentStruct: {
              path: 'address[]',
            },
          },
          { path },
        );

      case 'balancer':
        const { swaps } = data;
        return web3Coder.encodeParameter(
          {
            ParentStruct: {
              'swaps[]': {
                pool: 'address',
                tokenInParam: 'uint',
                tokenOutParam: 'uint',
                maxPrice: 'uint',
              },
            },
          },
          { swaps },
        );

      case 'dodov1':
        const { dodoPairs, directions } = data;
        return web3Coder.encodeParameter(
          {
            ParentStruct: {
              dodoPairs: 'address[]',
              directions: 'uint256',
            },
          },
          { dodoPairs, directions },
        );

      case 'compound':
        const cToken =
          destToken.tokenType === 'cToken'
            ? destToken.address!
            : srcToken.address!;

        return web3Coder.encodeParameter(
          {
            ParentStruct: {
              cToken: 'address',
            },
          },
          { cToken },
        );

      case 'aave2':
        const aToken2 =
          destToken.tokenType === 'aToken2'
            ? destToken.address!
            : srcToken.address!;

        return web3Coder.encodeParameter(
          {
            ParentStruct: {
              aToken: 'address',
            },
          },
          { aToken: aToken2 },
        );

      case 'aave':
        const aToken =
          destToken.tokenType === 'aToken'
            ? destToken.address!
            : srcToken.address!;

        return web3Coder.encodeParameter(
          {
            ParentStruct: {
              aToken: 'address',
            },
          },
          { aToken },
        );

      case 'idle':
        const idleToken =
          destToken.tokenType === 'idleToken'
            ? destToken.address!
            : srcToken.address!;

        return web3Coder.encodeParameter(
          {
            ParentStruct: {
              idleToken: 'address',
            },
          },
          { idleToken },
        );

      case 'fulcrum':
        const iToken =
          destToken.tokenType === 'iToken'
            ? destToken.address!
            : srcToken.address!;

        return web3Coder.encodeParameter(
          {
            ParentStruct: {
              iToken: 'address',
            },
          },
          { iToken },
        );

      case 'uniswapv2':
      case 'sushiswap':
      case 'defiswap':
      case 'linkswap':
      case 'pancakeswap':
      case 'julswap':
      case 'streetswap':
        const _path = this.useLegacy
          ? data.path
          : data.path.map((token: string, i: number) => {
              if (
                (i === 0 &&
                  fromToken.toLowerCase() === ETHER_ADDRESS.toLowerCase()) ||
                (i === data.path.length - 1 &&
                  toToken.toLowerCase() === ETHER_ADDRESS.toLowerCase())
              ) {
                return ETHER_ADDRESS;
              }
              return token;
            });

        return web3Coder.encodeParameter(
          {
            ParentStruct: {
              path: 'address[]',
            },
          },
          { path: _path },
        );
      case 'curve3':
      case 'swerve':
      case 'curve':
      case 'acryptos':
      case 'beltfi':
        try {
          const { i, j, deadline, underlyingSwap, v3 } = data;

          return web3Coder.encodeParameter(
            {
              ParentStruct: {
                i: 'int128',
                j: 'int128',
                deadline: 'uint256',
                underlyingSwap: 'bool',
                v3: 'bool',
              },
            },
            { i, j, deadline, underlyingSwap, v3 },
          );
        } catch (e) {
          console.error('Curve Error', e);
          return '0x';
        }

      default:
        return '0x';
    }
  };

  private applySlippageForBuy(exchange: string) {
    switch (exchange.toLowerCase()) {
      case 'oasis':
      case 'kyber':
      case 'balancer':
      case 'uniswap':
      case 'uniswapv2':
      case 'sushiswap':
      case 'defiswap':
      case 'linkswap':
      case 'shell':
        return true;
      /*
       * 0x(v2/v3), 0xrfqt, paraswappool, paraswappool2, compound, aave, idle,
       * fulcrum (bzx), chai, weth, bdai, beth
       * Not supported for buy: bancor, curve, swerve, cofix
       */
      default:
        return false;
    }
  }

  private networkFee = (
    exchange: string,
    srcToken: Address,
    destToken: Address,
    gasPrice: string,
    payload: any,
  ) => {
    switch (exchange.toLowerCase()) {
      case '0x':
      case '0xrfqt':
        return new BigNumber(gasPrice)
          .times(ZRX_GAZ_MULTIPLIER)
          .times(payload.orders.length)
          .toFixed();
      case 'cofix':
        return new Cofix(this.network, this.web3Provider).getNetworkFees(
          srcToken,
          destToken,
        );
      default:
        return '0';
    }
  };

  private getTargetExchange = (
    tokenFrom: Address,
    exchangeName: string,
    exchangeAddress: string,
  ) => {
    if (
      LENDING_DEXES.find(
        d => d.toString().toLowerCase() === exchangeName.toLowerCase(),
      )
    ) {
      return tokenFrom;
    }

    const _poolSpecificExchanges = [
      'swerve',
      'shell',
      'acryptos',
      'beltfi',
      'curve',
    ];
    if (
      exchangeName.toLowerCase().match(/^curve(.*)/) ||
      _poolSpecificExchanges.includes(exchangeName.toLowerCase())
    ) {
      return exchangeAddress;
    }

    return (
      this.dexConf[exchangeName.toLowerCase()].targetExchange || NULL_ADDRESS
    );
  };

  private async getSellRouteParams(
    srcToken: Address,
    destToken: Address,
    route: Rate,
    gasPrice: string,
  ): Promise<TransactionSellRoute> {
    const exchangeName = route.exchange.toLowerCase();

    const networkFee = this.networkFee(
      exchangeName,
      srcToken,
      destToken,
      gasPrice,
      route.data,
    );

    const payload = await this.getPayLoad(
      srcToken,
      destToken,
      exchangeName,
      route.data,
      networkFee,
      SwapSide.SELL,
    );

    const targetExchange = this.getTargetExchange(
      srcToken,
      exchangeName,
      route.data.exchange,
    );

    return {
      exchange: this.dexConf[exchangeName].exchange,
      targetExchange,
      percent: new BigNumber(route.percent).times(100).toFixed(0),
      payload,
      networkFee,
    };
  }

  private getTotalNetworkFee(routes: TransactionRoute[]) {
    return routes.reduce((acc: string, route) => {
      acc = new BigNumber(acc).plus(route.networkFee || '0').toFixed(0);
      return acc;
    }, '0');
  }

  private getSellPath = async (
    srcToken: Address,
    destToken: Address,
    priceRoute: OptimalRatesWithPartnerFeesSell,
    gasPrice: string,
  ): Promise<TransactionPath<TransactionSellRoute>[]> => {
    const { multiRoute, bestRoute } = priceRoute;
    const isMultiPath = this.multiSwapSteps(priceRoute) > 1;

    if (isMultiPath) {
      return await Promise.all(
        multiRoute!.map(async (_routes: any) => {
          const { tokenFrom, tokenTo } = _routes[0].data;

          const routes: TransactionSellRoute[] = await Promise.all(
            _routes.map((route: any) =>
              this.getSellRouteParams(tokenFrom, tokenTo, route, gasPrice),
            ),
          );

          return {
            to: <Address>tokenTo,
            totalNetworkFee: this.getTotalNetworkFee(routes),
            routes,
          };
        }),
      );
    } else {
      const routes: TransactionSellRoute[] = await Promise.all(
        bestRoute.map(
          async (route: any) =>
            await this.getSellRouteParams(srcToken, destToken, route, gasPrice),
        ),
      );

      return [
        {
          to: <Address>destToken,
          totalNetworkFee: this.getTotalNetworkFee(routes),
          routes,
        },
      ];
    }
  };

  private getSimpleSwapValue = (params: SimpleSwapTransactionParams) => {
    return params.values.reduce((acc, value) => {
      acc = new BigNumber(acc).plus(value).toFixed(0);
      return acc;
    }, '0');
  };

  private getValue = (
    srcToken: Address,
    srcAmount: string,
    path: TransactionPath<TransactionRoute>[],
  ) => {
    const networkFees =
      _(path)
        .map(p => p.routes)
        .flatten()
        .filter(r => !!r.networkFee)
        .map(r => r.networkFee)
        .reduce((acc: string, nf: string) => {
          return new BigNumber(acc).plus(nf).toFixed();
        }, '0') || '0';

    const value = this.isETHAddress(srcToken) ? srcAmount : '0';

    return new BigNumber(value).plus(networkFees).toFixed();
  };

  private async getBuyRouteParams(
    srcToken: Address,
    destToken: Address,
    route: Rate,
    gasPrice: string,
    slippageFactor: BigNumber,
  ): Promise<TransactionBuyRoute> {
    const exchangeName = route.exchange.toLowerCase();

    const networkFee = this.networkFee(
      exchangeName,
      srcToken,
      destToken,
      gasPrice,
      route.data,
    );

    const payload = await this.getPayLoad(
      srcToken,
      destToken,
      exchangeName,
      route.data,
      networkFee,
      SwapSide.BUY,
    );
    const targetExchange = this.getTargetExchange(
      srcToken,
      exchangeName,
      route.data.exchange,
    );

    return {
      exchange: this.dexConf[exchangeName].exchange,
      targetExchange,
      fromAmount: this.applySlippageForBuy(exchangeName)
        ? new BigNumber(route.srcAmount)
            .times(slippageFactor)
            .toFixed(0, BigNumber.ROUND_DOWN)
        : route.srcAmount,
      toAmount: route.destAmount,
      payload,
      networkFee,
    };
  }

  getBuyPath = async (
    srcToken: string,
    destToken: string,
    priceRoute: OptimalRatesWithPartnerFeesBuy,
    gasPrice: string,
    slippageFactor: BigNumber,
  ): Promise<TransactionPath<TransactionBuyRoute>[]> => {
    const routes: TransactionBuyRoute[] = await Promise.all(
      priceRoute.bestRoute.map(
        async (route: any) =>
          await this.getBuyRouteParams(
            srcToken,
            destToken,
            route,
            gasPrice,
            slippageFactor,
          ),
      ),
    );

    return [
      {
        to: <Address>destToken,
        totalNetworkFee: this.getTotalNetworkFee(routes),
        routes,
      },
    ];
  };

  getTransactionBuyParams = async (
    srcToken: Token,
    destToken: Token,
    destAmount: PriceString,
    maxAmountIn: PriceString,
    priceRoute: OptimalRatesWithPartnerFeesBuy,
    userAddress: Address,
    referrer: Address,
    gasPrice: NumberAsString,
    receiver: Address = NULL_ADDRESS,
  ): Promise<TransactionBuyParams> => {
    const slippageFactor = new BigNumber(maxAmountIn).dividedBy(
      priceRoute.srcAmount,
    );
    const route = await this.getBuyPath(
      srcToken.address,
      destToken.address,
      priceRoute,
      gasPrice,
      slippageFactor,
    );

    const value = this.getValue(srcToken.address!, maxAmountIn, route);
    return {
      value,
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
  };

  getTransactionSellParams = async (
    srcToken: Token,
    destToken: Token,
    srcAmount: PriceString,
    minAmountOut: PriceString,
    priceRoute: OptimalRatesWithPartnerFeesSell,
    userAddress: Address,
    referrer: Address,
    gasPrice: NumberAsString,
    receiver: Address = NULL_ADDRESS,
  ): Promise<TransactionSellParams> => {
    const path = await this.getSellPath(
      srcToken.address,
      destToken.address,
      priceRoute,
      gasPrice,
    );

    return {
      fromToken: srcToken.address,
      toToken: destToken.address,
      fromAmount: srcAmount,
      toAmount: minAmountOut,
      expectedAmount: priceRoute.destAmount,
      beneficiary: receiver,
      referrer,
      path,
    };
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

  async getSimpleSellParams(
    srcToken: Token,
    destToken: Token,
    srcAmount: string,
    toAmount: string,
    priceRoute: OptimalRatesWithPartnerFeesSell,
    referrer: string,
    gasPrice: string,
    beneficiary: string = NULL_ADDRESS,
  ): Promise<SimpleSwapTransactionParams> {
    const swapper = new Swapper(
      this.network,
      this.web3Provider,
      this.augustusContract,
    );

    const exchangeData: DEXData[] = priceRoute.bestRoute.map(
      (br: OptimalRate) => {
        const Dex = getDEX(br.exchange.toLowerCase());

        if (Dex) {
          return Dex.getDexData(br, br.exchange);
        } else {
          throw new Error('Unsupported Exchange: ' + br.exchange);
        }
      },
    );

    const { callees, values, calldata, startIndexes } = await swapper.buildSwap(
      srcToken.address,
      destToken.address,
      srcAmount,
      toAmount,
      exchangeData,
    );

    return {
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
    };
  }

  buildTransaction = async (
    srcToken: Token,
    destToken: Token,
    amount: PriceString,
    minMaxAmount: PriceString,
    priceRoute: OptimalRatesWithPartnerFees,
    userAddress: Address,
    referrer: Address,
    gasPrice: NumberAsString,
    receiver: Address = NULL_ADDRESS,
    ignoreGas: boolean,
    useMultiSwap: boolean,
    useAugustusLegacy: boolean,
  ): Promise<TransactionData> => {
    if (priceRoute.side == SwapSide.SELL) {
      const path =
        useMultiSwap || useAugustusLegacy
          ? await this.getSellPath(
              srcToken.address,
              destToken.address,
              priceRoute,
              gasPrice,
            )
          : [];

      const params =
        useMultiSwap || useAugustusLegacy
          ? await this.getTransactionSellParams(
              srcToken,
              destToken,
              amount,
              minMaxAmount,
              priceRoute,
              userAddress,
              referrer,
              gasPrice,
              receiver,
            )
          : await this.getSimpleSellParams(
              srcToken,
              destToken,
              amount,
              minMaxAmount,
              priceRoute,
              referrer,
              gasPrice,
              receiver,
            );

      const value =
        useMultiSwap || useAugustusLegacy
          ? this.getValue(srcToken.address!, amount, path)
          : this.getSimpleSwapValue(<SimpleSwapTransactionParams>params);

      const swapMethod =
        useMultiSwap || useAugustusLegacy
          ? this.augustusContract.methods.multiSwap
          : this.augustusContract.methods.simpleSwap;

      const legacyParams: LegacyTransactionSellParams = {
        fromToken: params.fromToken,
        toToken: params.toToken,
        fromAmount: params.fromAmount,
        toAmount: params.toAmount,
        expectedAmount: params.expectedAmount,
        path: (<TransactionSellParams>params).path,
        mintPrice: '0',
        beneficiary: params.beneficiary,
        donationBasisPoints: '0',
        referrer: params.referrer,
      };

      const contractParams = useAugustusLegacy
        ? legacyParams
        : useMultiSwap
        ? { data: params }
        : params;

      const swapMethodData = swapMethod.apply(
        null,
        Object.values(contractParams),
      );

      const gas = ignoreGas
        ? {}
        : {
            gas: await this.estimateGas(
              swapMethodData,
              userAddress,
              value,
              gasPrice,
              this.multiSwapSteps(priceRoute),
            ),
          };

      return {
        from: userAddress,
        to: this.augustusContract._address,
        data: swapMethodData.encodeABI(),
        chainId: this.network,
        value,
        ...gas,
        gasPrice,
      };
    } else {
      const { value, ...params } = await this.getTransactionBuyParams(
        srcToken,
        destToken,
        amount,
        minMaxAmount,
        priceRoute,
        userAddress,
        referrer,
        gasPrice,
        receiver,
      );

      const swapMethodData = this.augustusContract.methods.buy.apply(
        null,
        Object.values({ data: params }),
      );

      const gas = ignoreGas
        ? {}
        : {
            gas: await this.estimateGas(
              swapMethodData,
              userAddress,
              value,
              gasPrice,
              this.multiSwapSteps(priceRoute),
            ),
          };

      return {
        from: userAddress,
        to: this.augustusContract._address,
        data: swapMethodData.encodeABI(),
        chainId: this.network,
        value,
        ...gas,
        gasPrice,
      };
    }
  };
}
