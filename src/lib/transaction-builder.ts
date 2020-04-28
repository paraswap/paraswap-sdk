const web3Coder = require('web3-eth-abi');
import BigNumber from "bignumber.js";
import _ from 'lodash';

import {Adapters, Address, OptimalRates, Rate} from "../types";
import {Token} from "./token";
import {Curve} from "./dexs/curve";
import {ZeroXOrder} from "./dexs/zerox";
import {Oasis} from "./dexs/oasis";

import * as AUGUSTUS_ABI from "../abi/augustus.json";

export const NULL_ADDRESS = '0x0000000000000000000000000000000000000000';
export const ETHER_ADDRESS = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';

export const ZRX_GAZ_MULTIPLIER = 150000;
const LENDING_DEXES = ["compound", "aave", "Fulcrum", "idle"];

export class TransactionBuilder {
  constructor(private network: number, private web3Provider: any, private dexConf: Adapters, private tokens: Token[]) {

  }

  isMultiPath = (priceRoute: OptimalRates) => {
    return (priceRoute.multiRoute && priceRoute.multiRoute.length);
  };

  private isETHAddress = (address: string) => address.toLowerCase() === ETHER_ADDRESS.toLowerCase();

  private getPayLoad = (fromToken: Address, toToken: Address, exchange: string, data: any) => {

    const srcToken = this.tokens!.find(t => t.address === fromToken);
    const destToken = this.tokens!.find(t => t.address === toToken);

    if (!srcToken || !destToken) {
      return null;
    }

    switch (exchange.toLowerCase()) {
      case "0x":
      case "paraswappool":
        const orders = ZeroXOrder.formatOrders(data.orders);
        const signatures = data.orders.map((o: any) => o.signature);

        return web3Coder.encodeParameter(
          {
            "ParentStruct": {
              "orders": 'tuple[]',
              "signatures": 'bytes[]'
            }
          },
          {orders, signatures}
        );

      case "oasis":
        const {otc, weth, factory} = Oasis.getExchangeParams(this.network);

        return web3Coder.encodeParameter(
          {
            "ParentStruct": {
              "otc": 'address',
              "weth": 'address',
              "factory": 'address'
            }
          },
          {otc, weth, factory}
        );

      case "bancor":
        const {path} = data;

        return web3Coder.encodeParameter(
          {
            "ParentStruct": {
              "path": 'address[]'
            }
          },
          {path}
        );

      case "compound":
        const cToken = destToken.tokenType === "cToken" ? destToken.address! : srcToken.address!;

        return web3Coder.encodeParameter(
          {
            "ParentStruct": {
              "cToken": 'address'
            }
          },
          {cToken}
        );

      case "aavee":
        const aToken = destToken.tokenType === "aToken" ? destToken.address! : srcToken.address!;

        return web3Coder.encodeParameter(
          {
            "ParentStruct": {
              "aToken": 'address'
            }
          },
          {aToken}
        );

      case "idle":
        const idleToken = destToken.tokenType === "idleToken" ? destToken.address! : srcToken.address!;

        return web3Coder.encodeParameter(
          {
            "ParentStruct": {
              "idleToken": 'address'
            }
          },
          {idleToken}
        );

      case "fulcrum":

        const iToken = destToken.tokenType === "iToken" ? destToken.address! : srcToken.address!;

        return web3Coder.encodeParameter(
          {
            "ParentStruct": {
              "iToken": 'address'
            }
          },
          {iToken}
        );

      case "curve":
        try {
          const [i, j, underlyingSwap] = Curve.getSwapIndexes(srcToken.symbol, destToken.symbol);

          return web3Coder.encodeParameter(
            {
              "ParentStruct": {
                "i": 'int128',
                "j": 'int128',
                "underlyingSwap": 'bool'
              }
            },
            {i, j, underlyingSwap}
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
    if (exchange.toLowerCase() === '0x') {
      return new BigNumber(gasPrice).times(ZRX_GAZ_MULTIPLIER).times(payload.orders.length).toFixed();
    }
    return '0';
  };

  private getTargetExchange = (tokenFrom: Address, exchangeName: string, exchangeAddress: string) => {
    if (LENDING_DEXES.find(d => d.toString().toLowerCase() === exchangeName.toLowerCase())) {
      return tokenFrom;
    }

    if (exchangeName.toLowerCase() === 'curve') {
      return exchangeAddress;
    }

    return this.dexConf[exchangeName.toLowerCase()].targetExchange;
  };

  private getRouteParams(srcToken: Address, destToken: Address, route: Rate, gasPrice: string) {
    const exchangeName = route.exchange.toLowerCase();

    const payload = this.getPayLoad(srcToken, destToken, exchangeName, route.data);

    const targetExchange = this.getTargetExchange(srcToken, exchangeName, route.data.exchange);

    const networkFee = this.networkFee(exchangeName, gasPrice, route.data);

    return {
      exchange: this.dexConf[exchangeName].exchange,
      targetExchange,
      percent: Number(route.percent) * 100,
      payload,
      networkFee
    }
  }

  private getPath = (srcToken: Address, destToken: Address, priceRoute: OptimalRates, gasPrice: string) => {
    const {multiRoute, bestRoute} = priceRoute;

    if (this.isMultiPath(priceRoute)) {
      return multiRoute!.map(_routes => {
        const {tokenFrom, tokenTo} = _routes[0].data;

        const routes = _routes.map(route => this.getRouteParams(tokenFrom, tokenTo, route, gasPrice));

        return {
          from: tokenFrom,
          to: tokenTo,
          routes
        }
      });
    } else {
      return bestRoute.map(route => ({
        from: srcToken,
        to: destToken,
        routes: [this.getRouteParams(srcToken, destToken, route, gasPrice)]
      }));
    }
  };

  private getValue = (srcToken: Address, srcAmount: string, path: any) => {
    const networkFees = _(path).map((p: any) => p.routes).flatten()
      .filter((r: any) => !!r.networkFee)
      .map((r: any) => r.networkFee)
      .reduce((acc: any, nf: string) => {
        acc = new BigNumber(acc).plus(nf);
        return acc.toFixed();
      }, '0') || '0';

    const value = this.isETHAddress(srcToken) ? srcAmount : '0';

    return new BigNumber(value).plus(networkFees).toFixed();
  };

  buildTransaction = (srcToken: Token, destToken: Token, srcAmount: string, minDestinationAmount: string, priceRoute: OptimalRates, userAddress: string, referrer: string, gasPrice: string, receiver: string = NULL_ADDRESS) => {

    const augustusAddress = this.dexConf.augustus.exchange;

    const augustusContract = new this.web3Provider.eth.Contract(AUGUSTUS_ABI, augustusAddress);

    const path = this.getPath(srcToken.address, destToken.address, priceRoute, gasPrice);

    const expectedAmount = new BigNumber(priceRoute.amount).times(10 ** destToken.decimals).toFixed(0);

    console.log('params', {
      srcToken,
      destToken,
      srcAmount,
      minDestinationAmount,
      expectedAmount,
      path,
      receiver,
      referrer
    });

    const value = this.getValue(srcToken.address!, srcAmount, path);

    const data = augustusContract.methods.multiSwap(
      srcToken.address!,
      destToken.address!,
      srcAmount,
      minDestinationAmount,
      expectedAmount,
      path,
      '1',
      receiver,
      referrer
    ).encodeABI();

    return {
      from: userAddress!,
      to: augustusAddress,
      data,
      chainId: this.network,
      value
    };
  }

}
