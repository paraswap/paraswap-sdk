const web3Coder = require('web3-eth-abi');
import BigNumber from 'bignumber.js';
import { utils } from 'ethers';
import Web3 from 'web3';
import _ = require('lodash');

import { Cofix } from './dexs/cofix';
import {
  Adapters,
  Address,
  Rate,
  TransactionBuyRoute,
  TransactionSellRoute,
  TransactionPath,
  TransactionMegaPath,
  TransactionRoute,
  OptimalRatesWithPartnerFees,
  OptimalRatesWithPartnerFeesSell,
  OptimalRatesWithPartnerFeesBuy,
  OptimalRoute,
  OptimalRate,
  ETHER_ADDRESS,
} from '../types';

import { ZeroXOrder } from './dexs/zerox';
import { Token } from './token';
import { Oasis } from './dexs/oasis';
import { Kyber } from './dexs/kyber';
import { SwapSide, AugustusVersion } from '../constants';

export const NULL_ADDRESS = '0x0000000000000000000000000000000000000000';

export const ZRX_GAZ_MULTIPLIER = 70000;
const LENDING_DEXES = ['compound', 'Fulcrum', 'idle', 'aave', 'aave2'];

export class PayloadEncoder {
  constructor(
    private network: number,
    private web3Provider: Web3,
    private dexConf: Adapters,
    private tokens: Token[],
    private augustusVersion: AugustusVersion,
  ) {}

  private getTotalNetworkFee(routes: TransactionRoute[]) {
    return routes.reduce((acc: string, route) => {
      acc = new BigNumber(acc).plus(route.networkFee || '0').toFixed(0);
      return acc;
    }, '0');
  }

  multiSwapSteps = (priceRoute: OptimalRatesWithPartnerFees) => {
    return (priceRoute.multiRoute && priceRoute.multiRoute.length) || 1;
  };

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
          await this.getBuyRouteParams(route, gasPrice, slippageFactor),
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

  getSellRouteParams = async (
    route: Rate,
    gasPrice: string,
  ): Promise<TransactionSellRoute> => {
    const { tokenFrom, tokenTo } = route.data;
    const exchangeName = route.exchange.toLowerCase();

    const networkFee = this.networkFee(
      exchangeName,
      tokenFrom,
      tokenTo,
      gasPrice,
      route.data,
    );

    const payload = await this.getPayLoad(
      tokenFrom,
      tokenTo,
      exchangeName,
      route.data,
      networkFee,
      SwapSide.SELL,
    );

    const targetExchange = this.getTargetExchange(
      tokenFrom,
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
  };

  getBuyRouteParams = async (
    route: Rate,
    gasPrice: string,
    slippageFactor: BigNumber,
  ): Promise<TransactionBuyRoute> => {
    const { tokenFrom, tokenTo } = route.data;
    const exchangeName = route.exchange.toLowerCase();

    const networkFee = this.networkFee(
      exchangeName,
      tokenFrom,
      tokenTo,
      gasPrice,
      route.data,
    );

    const payload = await this.getPayLoad(
      tokenFrom,
      tokenTo,
      exchangeName,
      route.data,
      networkFee,
      SwapSide.BUY,
    );
    const targetExchange = this.getTargetExchange(
      tokenFrom,
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
  };

  encodeSellMegaPath = async (
    route: OptimalRoute[],
    gasPrice: string,
  ): Promise<TransactionMegaPath<TransactionSellRoute>[]> => {
    return Promise.all(
      route.map(async (route: OptimalRoute) => ({
        fromAmountPercent: new BigNumber(route.percent).times(100).toFixed(0),
        path: await this.encodeSellPath(route.route, gasPrice),
      })),
    );
  };

  encodeSellPath = async (
    path: Rate[][],
    gasPrice: string,
  ): Promise<TransactionPath<TransactionSellRoute>[]> => {
    return Promise.all(
      path.map(async (swap: Rate[]) => {
        const encodedSwap = await this.encodeSellSwap(swap, gasPrice);
        return {
          to: <Address>swap[0].data.tokenTo,
          totalNetworkFee: this.getTotalNetworkFee(encodedSwap),
          routes: encodedSwap,
        };
      }),
    );
  };

  encodeSellSwap = async (
    swap: Rate[],
    gasPrice: string,
  ): Promise<TransactionSellRoute[]> => {
    return Promise.all(
      swap.map(
        async (rate: Rate) => await this.getSellRouteParams(rate, gasPrice),
      ),
    );
  };

  getSellMegaPath = async (
    srcToken: Address,
    destToken: Address,
    priceRoute: OptimalRatesWithPartnerFeesSell,
    gasPrice: string,
  ): Promise<TransactionMegaPath<TransactionSellRoute>[]> => {
    const { multiRoute, megaRoute, bestRoute } = priceRoute;
    const isGiantPath = megaRoute && megaRoute.length !== 0;
    const isMultiPath = multiRoute && multiRoute.length !== 0;
    return isGiantPath
      ? this.encodeSellMegaPath(megaRoute!, gasPrice)
      : this.encodeSellMegaPath(
          [
            {
              percent: '100',
              route: isMultiPath ? multiRoute! : [bestRoute!],
            },
          ],
          gasPrice,
        );
  };

  getSellPath = async (
    srcToken: Address,
    destToken: Address,
    priceRoute: OptimalRatesWithPartnerFeesSell,
    gasPrice: string,
  ): Promise<TransactionPath<TransactionSellRoute>[]> => {
    const { multiRoute, bestRoute } = priceRoute;
    const isMultiPath = this.multiSwapSteps(priceRoute) > 1;
    return this.encodeSellPath(
      isMultiPath ? multiRoute! : [bestRoute!],
      gasPrice,
    );
  };

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
      case 'pancakeswapv2':
      case 'apeswap':
      case 'bakeryswap':
      case 'julswap':
      case 'streetswap':
      case 'quickswap':
      case 'cometh':
      case 'uniswapv3':
      case 'dfyn':
      case 'pantherswap':
      case 'mdex':
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
      'curvev2',
      'ellipsis',
      'nerve',
      'saddle',
      'oneinchlp',
      'mstable',
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

  private getPayLoad = async (
    fromToken: Address,
    toToken: Address,
    exchange: string,
    data: any,
    networkFee: string,
    side: SwapSide,
  ): Promise<string> => {
    const srcToken = this.tokens!.find(
      t => t.address.toLowerCase() === fromToken.toLowerCase(),
    )!;
    const destToken = this.tokens!.find(
      t => t.address.toLowerCase() === toToken.toLowerCase(),
    )!;

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
      case '0xrfqt': {
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
      }
      case 'oasis': {
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
      }
      case 'kyber': {
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
      }
      case 'bancor': {
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
      }
      case 'balancer': {
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
      }
      case 'dodov1': {
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
      }
      case 'dodov2': {
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
      }
      case 'compound': {
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
      }
      case 'aave2': {
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
      }
      case 'aave': {
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
      }
      case 'idle': {
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
      }
      case 'fulcrum': {
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
      }
      case 'uniswapv2':
      case 'sushiswap':
      case 'defiswap':
      case 'linkswap':
      case 'pancakeswap':
      case 'pancakeswapv2':
      case 'apeswap':
      case 'bakeryswap':
      case 'julswap':
      case 'streetswap':
      case 'quickswap':
      case 'cometh':
      case 'dfyn':
      case 'mdex':
      case 'pantherswap': {
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
      }
      case 'curvev2':
        try {
          const { i, j, underlyingSwap } = data;

          return web3Coder.encodeParameter(
            {
              ParentStruct: {
                i: 'uint256',
                j: 'uint256',
                underlyingSwap: 'bool',
              },
            },
            { i, j, underlyingSwap },
          );
        } catch (e) {
          console.error('Curve Error', e);
          return '0x';
        }
      case 'curve3':
      case 'swerve':
      case 'curve':
      case 'acryptos':
      case 'beltfi':
      case 'ellipsis': {
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
      }
      case 'saddle':
      case 'nerve': {
        try {
          const { i, j, deadline } = data;
          return web3Coder.encodeParameter(
            {
              ParentStruct: {
                i: 'int128',
                j: 'int128',
                deadline: 'uint256',
              },
            },
            { i, j, deadline },
          );
        } catch (e) {
          console.error('Nerve Error', e);
          return '0x';
        }
      }
      case 'uniswapv3': {
        try {
          const { fee, deadline, sqrtPriceLimitX96 } = data;
          return web3Coder.encodeParameter(
            {
              ParentStruct: {
                fee: 'uint24',
                deadline: 'uint256',
                sqrtPriceLimitX96: 'uint160',
              },
            },
            {
              fee,
              deadline:
                deadline || Math.floor(new Date().getTime() / 1000) + 60 * 60,
              sqrtPriceLimitX96: sqrtPriceLimitX96 || 0,
            },
          );
        } catch (e) {
          console.error('uniswapv3 Error', e);
          return '0x';
        }
      }
      case 'smoothy': {
        try {
          const { i, j } = data;
          return web3Coder.encodeParameter(
            {
              ParentStruct: {
                i: 'uint256',
                j: 'uint256',
              },
            },
            {
              i,
              j,
            },
          );
        } catch (e) {
          console.error('smoothy Error', e);
          return '0x';
        }
      }
      case 'mstable': {
        try {
          const { opType } = data;
          const type = ['swap', 'mint', 'redeem'].indexOf(opType);
          if (type === undefined) {
            throw new Error(
              `mStable: Invalid OpType ${opType}, Should be one of ['mint', 'swap', 'redeem']`,
            );
          }

          return web3Coder.encodeParameter(
            {
              ParentStruct: {
                opType: 'uint',
              },
            },
            {
              opType: type,
            },
          );
        } catch (e) {
          console.error('mstable Error', e);
          return '0x';
        }
      }
      default:
        return '0x';
    }
  };
}
