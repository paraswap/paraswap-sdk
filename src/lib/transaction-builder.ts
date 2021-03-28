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
  ETHER_ADDRESS,
} from '../types';

import { Token } from './token';
import { ZeroXOrder } from './dexs/zerox';
import { Oasis } from './dexs/oasis';
import { Kyber } from './dexs/kyber';
import { SwapSide, ContractMethod, AugustusVersion } from '../constants';

import { Swapper } from './swapper';
import { DEXData } from './dexs/dex-types';
import { getDEX } from './dexs';

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
        referrer: Address,
        gasPrice: NumberAsString,
        useReduxToken: boolean,
        receiver?: Address,
        version?: AugustusVersion,
      ) => any;
    };
  };

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
        [ContractMethod.simpleBuy.toLowerCase()]: this.getSimpleBuyTx.bind(
          this,
        ),
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
      return data.version === 4
        ? web3Coder.encodeParameter(
            {
              ParentStruct: {
                order: {
                  makerToken: 'address',
                  takerToken: 'address',
                  makerAmount: 'uint128',
                  takerAmount: 'uint128',
                  maker: 'address',
                  taker: 'address',
                  txOrigin: 'address',
                  pool: 'bytes32',
                  expiry: 'uint64',
                  salt: 'uint256',
                },
                signature: {
                  signatureType: 'uint8',
                  v: 'uint8',
                  r: 'bytes32',
                  s: 'bytes32',
                },
              },
            },
            {
              order: ZeroXOrder.formatOrders(data.orders, 4)[0],
              signature: data.orders[0].signature,
            },
          )
        : web3Coder.encodeParameter(
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
        const orderData = ZeroXOrder.formatOrders(data.orders, 3);
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
        const _path =
          this.augustusVersion === AugustusVersion.v2
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
      case 'pancakeswap':
      case 'julswap':
      case 'streetswap':
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

  private getSimpleSwapValue = (values: NumberAsString[]) => {
    return values.reduce((acc, v) => acc.plus(v), new BigNumber(0)).toString();
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
        .map((r: TransactionRoute) => r.networkFee)
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
    referrer: Address,
    gasPrice: NumberAsString,
    useReduxToken: boolean = false,
    receiver: Address = NULL_ADDRESS,
    version: AugustusVersion = AugustusVersion.v4,
  ) => {
    const slippageFactor = new BigNumber(maxAmountIn).dividedBy(
      priceRoute.srcAmount,
    );
    const route = await this.getBuyPath(
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
    referrer: Address,
    gasPrice: NumberAsString,
    useReduxToken: boolean = false,
    receiver: Address = NULL_ADDRESS,
    version: AugustusVersion = AugustusVersion.v4,
  ) => {
    const path = await this.getSellPath(
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
    referrer: Address,
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
    referrer: Address,
    gasPrice: NumberAsString,
    useReduxToken: boolean = false,
    receiver: Address = NULL_ADDRESS,
  ) => {
    const path = await this.getSellPath(
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
      referrer: referrer,
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

  getSimpleBuyTx = async (
    srcToken: Token,
    destToken: Token,
    srcAmount: PriceString,
    minAmountOut: PriceString,
    priceRoute: OptimalRatesWithPartnerFees,
    userAddress: Address,
    referrer: Address,
    gasPrice: NumberAsString,
    useReduxToken: boolean = false,
    receiver: Address = NULL_ADDRESS,
  ) => {
    // const exchangeData: DEXData[] = (priceRoute as OptimalRatesWithPartnerFeesBuy).bestRoute.map(
    //   (br: OptimalRate) => {
    //     const Dex = getDEX(br.exchange);
    //     if (Dex) {
    //       return Dex.getDexData(br, br.exchange);
    //     } else {
    //       throw new Error('Unsupported Exchange: ' + br.exchange);
    //     }
    //   },
    // );
    // const {
    //   callees,
    //   values,
    //   calldata,
    //   startIndexes,
    // } = await this.swapper.buildSwap(
    //   srcToken.address,
    //   destToken.address,
    //   srcAmount,
    //   toAmount,
    //   exchangeData,
    // );
    // const redux = version === AugustusVersion.v4 ? {useReduxToken} : {};
    // const params = {
    //   fromToken: srcToken.address,
    //   toToken: destToken.address,
    //   fromAmount: srcAmount,
    //   toAmount,
    //   expectedAmount: priceRoute.destAmount,
    //   callees,
    //   exchangeData: calldata,
    //   startIndexes,
    //   values,
    //   beneficiary,
    //   referrer,
    //   ...redux
    // };
    // const method = this.augustusContract.methods.simpleBuy.bind(
    //   this.augustusContract,
    // );
    // const value = this.getSimpleSwapValue(values);
    // return {
    //   method,
    //   value,
    //   params,
    // };
  };

  getMegaSwapTx = async (
    srcToken: Token,
    destToken: Token,
    srcAmount: PriceString,
    minAmountOut: PriceString,
    priceRoute: OptimalRatesWithPartnerFees,
    userAddress: Address,
    referrer: Address,
    gasPrice: NumberAsString,
    useReduxToken: boolean = false,
    receiver: Address = NULL_ADDRESS,
  ) => {
    // TODO: add implementation
    return;
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
    referrer: Address,
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

    // TODO: fix referrer
    const params = {
      amountIn: srcAmount,
      amountOutMin: minAmountOut,
      path,
      referrer: 1,
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
    referrer: Address,
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

    // TODO: fix referrer
    const params = {
      amountInMax: maxAmountIn,
      amountOut: dstAmount,
      path,
      referrer: 1,
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
    referrer: Address,
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

    // TODO: fix referrer
    const params = {
      factory: priceRoute.bestRoute[0].data.factory,
      initCode: priceRoute.bestRoute[0].data.initCode,
      amountIn: srcAmount,
      amountOutMin: minAmountOut,
      path,
      referrer: 1,
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
    referrer: Address,
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

    // TODO: fix referrer
    const params = {
      factory: priceRoute.bestRoute[0].data.factory,
      initCode: priceRoute.bestRoute[0].data.initCode,
      amountInMax: maxAmountIn,
      amountOut: dstAmount,
      path,
      referrer: 1,
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
    referrer: Address,
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
            this.multiSwapSteps(priceRoute),
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
