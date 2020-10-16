const web3Coder = require('web3-eth-abi');

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
  TransactionSellPath,
  TransactionRoute,
  OptimalRatesWithPartnerFees,
  OptimalRatesWithPartnerFeesSell,
  OptimalRatesWithPartnerFeesBuy,
} from '../types';
import { Token } from './token';
import { Curve } from './dexs/curve';
import { ZeroXOrder } from './dexs/zerox';
import { Oasis } from './dexs/oasis';
import { Kyber } from './dexs/kyber';
import { SwapSide } from '../constants';

const AUGUSTUS_ABI = require('../abi/augustus.json');

export const NULL_ADDRESS = '0x0000000000000000000000000000000000000000';
export const ETHER_ADDRESS = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';

//Gas units overhead in order to maximize the transaction success rate
export const GAS_MULTIPLIER = Number(process.env.GAS_MULTIPLIER || 23);

export const ZRX_GAZ_MULTIPLIER = 70000;
const LENDING_DEXES = ['compound', 'Fulcrum', 'idle'];

/*
BUY SUPPORTED:
aave, balancer, bdai, beth, bzx, chai, compound, idle, kyber, oasis, uniswapv1, uniswapv2, weth, 0x v2, 0x v3

NOT:
bancor, curve
*/

export class TransactionBuilder {
  constructor(
    private network: number,
    private web3Provider: any,
    private dexConf: Adapters,
    private tokens: Token[],
  ) {}

  isMultiPath = (priceRoute: OptimalRatesWithPartnerFees) => {
    return priceRoute.multiRoute && priceRoute.multiRoute.length;
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
      case 'paraswappool':
      case 'paraswappool2':
        if (
          side == SwapSide.BUY &&
          exchange.toLocaleLowerCase() == 'paraswappool2'
        )
          return '0x';
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
        return web3Coder.encodeParameter(
          {
            ParentStruct: {
              path: 'address[]',
            },
          },
          { path: data.path },
        );

      case 'curve':
        if (side == SwapSide.BUY) return '0x';
        try {
          const [i, j, underlyingSwap] = Curve.getSwapIndexes(
            srcToken.symbol,
            destToken.symbol,
          );

          //TODO: This has no use since it's related to the old Curve Compound. Remove when updating the Curve contract
          const deadline = 0;

          return web3Coder.encodeParameter(
            {
              ParentStruct: {
                i: 'int128',
                j: 'int128',
                deadline: 'uint256',
                underlyingSwap: 'bool',
              },
            },
            { i, j, deadline, underlyingSwap },
          );
        } catch (e) {
          console.error('Curve Error', e);
          return '0x';
        }

      default:
        return '0x';
    }
  };

  private networkFee = (exchange: string, gasPrice: string, payload: any) => {
    if (exchange.toLowerCase() === '0x' || exchange.toLowerCase() === '0xapi') {
      return new BigNumber(gasPrice)
        .times(ZRX_GAZ_MULTIPLIER)
        .times(payload.orders.length)
        .toFixed();
    }
    return '0';
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

    if (exchangeName.toLowerCase() === 'curve') {
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
  ): Promise<TransactionRoute> {
    const exchangeName = route.exchange.toLowerCase();

    const networkFee = this.networkFee(exchangeName, gasPrice, route.data);

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
  ): Promise<TransactionSellPath[]> => {
    const { multiRoute, bestRoute } = priceRoute;
    if (this.isMultiPath(priceRoute)) {
      return await Promise.all(
        multiRoute!.map(async _routes => {
          const { tokenFrom, tokenTo } = _routes[0].data;

          const routes = await Promise.all(
            _routes.map(route =>
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
      const routes = await Promise.all(
        bestRoute.map(
          async route =>
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

  private getValue = (srcToken: Address, srcAmount: string, path: any[]) => {
    const networkFees =
      _(path)
        .map((p: any) => p.routes)
        .flatten()
        .filter((r: any) => !!r.networkFee)
        .map((r: any) => r.networkFee)
        .reduce((acc: any, nf: string) => {
          acc = new BigNumber(acc).plus(nf);
          return acc.toFixed();
        }, '0') || '0';

    const value = this.isETHAddress(srcToken) ? srcAmount : '0';

    return new BigNumber(value).plus(networkFees).toFixed();
  };

  getTransactionSellParams = async (
    srcToken: Token,
    destToken: Token,
    srcAmount: PriceString,
    minAmount: PriceString,
    priceRoute: OptimalRatesWithPartnerFeesSell,
    userAddress: Address,
    referrer: Address,
    gasPrice: NumberAsString,
    receiver: Address = NULL_ADDRESS,
    donatePercent: NumberAsString,
  ): Promise<TransactionSellParams> => {
    const path = await this.getSellPath(
      srcToken.address,
      destToken.address,
      priceRoute,
      gasPrice,
    );

    const value = this.getValue(srcToken.address!, srcAmount, path);
    return {
      value,
      fromToken: srcToken.address,
      toToken: destToken.address,
      fromAmount: srcAmount,
      toAmount: minAmount,
      expectedAmount: priceRoute.destAmount,
      path,
      mintPrice: '1',
      beneficiary: receiver,
      donationPercentage: new BigNumber(donatePercent).times(100).toFixed(0),
      referrer,
    };
  };

  estimateGas = async (
    swapMethodData: any,
    fromUser: Address,
    value: NumberAsString,
    gasPrice: NumberAsString,
  ): Promise<NumberAsString> => {
    const gas = await swapMethodData.estimateGas({
      from: fromUser,
      value,
      data: swapMethodData,
      gasPrice,
    });

    const gasOverhead =
      GAS_MULTIPLIER > 0
        ? new BigNumber(1).plus(new BigNumber(GAS_MULTIPLIER).dividedBy(100))
        : 1;

    return new BigNumber(gas).times(gasOverhead).toFixed(0);
  };

  buildTransaction = async (
    srcToken: Token,
    destToken: Token,
    amount: PriceString,
    minAmount: PriceString,
    priceRoute: OptimalRatesWithPartnerFees,
    userAddress: Address,
    referrer: Address,
    gasPrice: NumberAsString,
    receiver: Address = NULL_ADDRESS,
    donatePercent: NumberAsString,
    ignoreGas: boolean,
  ): Promise<TransactionData> => {
    if (priceRoute.side == SwapSide.BUY) {
      throw new Error('buildTransaction: Buy side not implemented');
    }
    const { value, ...params } = await this.getTransactionSellParams(
      srcToken,
      destToken,
      amount,
      minAmount,
      priceRoute,
      userAddress,
      referrer,
      gasPrice,
      receiver,
      donatePercent,
    );

    const augustusAddress = this.dexConf.augustus.exchange;

    const augustusContract = new this.web3Provider.eth.Contract(
      AUGUSTUS_ABI,
      augustusAddress,
    );
    const swapMethodData = augustusContract.methods.multiSwap.apply(
      null,
      Object.values(params),
    );

    const gas = ignoreGas
      ? {}
      : {
          gas: await this.estimateGas(
            swapMethodData,
            userAddress,
            value,
            gasPrice,
          ),
        };

    return {
      from: userAddress,
      to: augustusAddress,
      data: swapMethodData.encodeABI(),
      chainId: this.network,
      value,
      ...gas,
      gasPrice,
    };
  };
}
