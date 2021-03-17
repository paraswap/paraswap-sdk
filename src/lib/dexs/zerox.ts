import BigNumber from 'bignumber.js';
import { AbiEncoder } from '@0x/utils';

import Adapter from './adapter';
import { Address, OptimalRate } from '../../types';
import { DexParams, ZeroXEXData } from './dex-types';
import { Weth } from './weth';
import ERC20_ABI = require('../../abi/erc20.json');
import ZRX_V2_ABI = require('../../abi/zrx.v2.json');
import ZRX_V3_ABI = require('../../abi/zrx.v3.json');
import ZRX_V4_ABI = require('../../abi/zrx.v4.json');

const ZRX_EXCHANGE: any = {
  1: {
    2: '0x080bf510fcbf18b91105470639e9561022937712',
    3: '0x61935CbDd02287B511119DDb11Aeb42F1593b7Ef',
    4: '0xdef1c0ded9bec7f1a1670819833240f027b25eff',
  },
};

const ZRX_ABI: any = {
  2: ZRX_V2_ABI,
  3: ZRX_V3_ABI,
  4: ZRX_V4_ABI,
};

const ZRX_EXCHANGE_ERC20PROXY: any = {
  1: {
    1: '0x95E6F48254609A6ee006F7D493c8e5fB97094ceF',
    2: '0x95E6F48254609A6ee006F7D493c8e5fB97094ceF',
    4: '0xdef1c0ded9bec7f1a1670819833240f027b25eff',
  },
};

enum OrderStatus {
  INVALID, // Default value
  INVALID_MAKER_ASSET_AMOUNT, // Order does not have a valid maker asset amount
  INVALID_TAKER_ASSET_AMOUNT, // Order does not have a valid taker asset amount
  FILLABLE, // Order is fillable
  EXPIRED, // Order has already expired
  FULLY_FILLED, // Order is fully filled
  CANCELLED, // Order has been cancelled
}

export interface ZeroXSignedOrder {
  senderAddress: string;
  makerAddress: string;
  takerAddress: string;
  makerFee: BigNumber;
  takerFee: BigNumber;
  makerAssetAmount: BigNumber;
  takerAssetAmount: BigNumber;
  makerAssetData: string;
  takerAssetData: string;
  salt: BigNumber;
  exchangeAddress: string;
  feeRecipientAddress: string;
  expirationTimeSeconds: BigNumber;
  makerFeeAssetData: string;
  takerFeeAssetData: string;
  signature: string;
}

export interface ZeroXSignedOrderV4 {
  makerToken: string;
  takerToken: string;
  makerAmount: BigNumber;
  takerAmount: BigNumber;
  maker: string;
  taker: string;
  txOrigin: string;
  pool: string;
  expiry: BigNumber;
  salt: BigNumber;
}

export interface IzXSignedOrderV3 {
  exchangeAddress: string;
  makerAddress: string;
  takerAddress: string;
  feeRecipientAddress: string;
  senderAddress: string;
  makerAssetAmount: BigNumber;
  takerAssetAmount: BigNumber;
  makerFee: BigNumber;
  takerFee: BigNumber;
  expirationTimeSeconds: BigNumber;
  salt: BigNumber;
  makerAssetData: string;
  takerAssetData: string;
  signature: string;
  chainId: number;
  makerFeeAssetData: string;
  takerFeeAssetData: string;
}

export class ZeroXOrder extends Adapter {
  static formatOrderV4(order: ZeroXSignedOrderV4, version: number) {
    return {
      makerToken: order.makerToken,
      takerToken: order.takerToken,
      makerAmount: new BigNumber(order.makerAmount).toFixed(),
      takerAmount: new BigNumber(order.takerAmount).toFixed(),
      maker: order.maker,
      taker: order.taker,
      txOrigin: order.txOrigin,
      pool: order.pool,
      expiry: new BigNumber(order.expiry).toFixed(),
      salt: new BigNumber(order.salt).toFixed(),
    };
  }

  static formatOrderV23(order: ZeroXSignedOrder, version: number) {
    const feeAssetData =
      version === 3
        ? {
            makerFeeAssetData: order.makerFeeAssetData,
            takerFeeAssetData: order.takerFeeAssetData,
          }
        : {};

    return {
      makerAddress: order.makerAddress,
      takerAddress: order.takerAddress,
      feeRecipientAddress: order.feeRecipientAddress,
      senderAddress: order.senderAddress,
      makerAssetAmount: new BigNumber(order.makerAssetAmount).toFixed(0),
      takerAssetAmount: new BigNumber(order.takerAssetAmount).toFixed(0),
      makerFee: new BigNumber(order.makerFee).toFixed(0),
      takerFee: new BigNumber(order.takerFee).toFixed(0),
      expirationTimeSeconds: new BigNumber(order.expirationTimeSeconds).toFixed(
        0,
      ),
      salt: new BigNumber(order.salt).toFixed(0),
      makerAssetData: order.makerAssetData,
      takerAssetData: order.takerAssetData,
      ...feeAssetData,
    };
  }

  static formatOrders(
    orders: (ZeroXSignedOrder | ZeroXSignedOrderV4)[],
    version: number = 2,
  ) {
    return version === 4
      ? orders.map(o =>
          ZeroXOrder.formatOrderV4(o as ZeroXSignedOrderV4, version),
        )
      : orders.map(o =>
          ZeroXOrder.formatOrderV23(o as ZeroXSignedOrder, version),
        );
  }
}

export class Zerox extends Adapter {
  static getDexData(optimalRate: OptimalRate, name: string): ZeroXEXData {
    return {
      name,
      srcAmount: optimalRate.srcAmount,
      destAmount: '1',
      minConversionRate: '1',
      orders: optimalRate.data.orders,
      signatures: optimalRate.data.orders.map((o: any) => o.signature),
      networkFees: optimalRate.data.networkFees || '0',
      version: optimalRate.data.version || 2,
    };
  }

  getExchange(data: ZeroXEXData) {
    return ZRX_EXCHANGE[this.network][data.version];
  }

  buildSwapData(data: ZeroXEXData) {
    const zrxABI = ZRX_ABI[data.version];
    const orders = ZeroXOrder.formatOrders(data.orders, data.version);
    const takerAssetFillAmount = new BigNumber(data.srcAmount);
    const signatures = data.signatures;

    const methodAbi = zrxABI.find(
      (m: any) =>
        m.name ===
        (data.version === 4 ? 'fillRfqOrder' : 'marketSellOrdersNoThrow'),
    );

    const abiEncoder = new AbiEncoder.Method(methodAbi);
    // TODO: fillLimitOrder only accepts one order, find something that can accept multiple orders
    return abiEncoder.encode(
      data.version === 4
        ? [orders[0], signatures[0], takerAssetFillAmount]
        : [orders, takerAssetFillAmount, signatures],
    );
  }

  async isFillable(order: IzXSignedOrderV3, provider: any) {
    const orderInfo = await this.getOrderInfo(order, provider);
    return Number(orderInfo.orderStatus) === OrderStatus.FILLABLE;
  }

  async getOrderInfo(order: IzXSignedOrderV3, provider: any) {
    const contract = new this.web3Provider.eth.Contract(
      ZRX_V3_ABI,
      ZRX_EXCHANGE[this.network][3],
    );
    return contract.methods.getOrderInfo(order).call();
  }

  private getTokenToTokenSwapData(srcToken: Address, data: ZeroXEXData) {
    const approveCallData = this.getApproveCallData(
      srcToken,
      data.srcAmount,
      ZRX_EXCHANGE_ERC20PROXY[this.network][data.version],
    );

    const assetSwapperData = this.buildSwapData(data);

    const networkFees = data.networkFees || '0';

    return {
      callees: [this.augustus._address, this.getExchange(data)],
      calldata: [approveCallData.calldata, assetSwapperData],
      values: ['0', networkFees],
    };
  }

  protected async ethToTokenSwap(
    srcToken: Address,
    destToken: Address,
    data: ZeroXEXData,
  ): Promise<DexParams> {
    const wethToken = Weth.getAddress(this.network);
    const wethContract = new this.web3Provider.eth.Contract(
      ERC20_ABI,
      wethToken,
    );
    const depositWethData = wethContract.methods.deposit().encodeABI();

    const wethToTokenData = this.getTokenToTokenSwapData(wethToken, data);

    return {
      callees: [wethToken, ...wethToTokenData.callees],
      calldata: [depositWethData, ...wethToTokenData.calldata],
      values: [data.srcAmount, ...wethToTokenData.values],
    };
  }

  protected async tokenToEthSwap(
    srcToken: Address,
    destToken: Address,
    data: ZeroXEXData,
  ): Promise<DexParams> {
    const wethToken = Weth.getAddress(this.network);
    const wethToTokenData = await this.getTokenToTokenSwapData(srcToken, data);
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
    data: ZeroXEXData,
  ): Promise<DexParams> {
    const swapData = await this.getTokenToTokenSwapData(srcToken, data);

    return {
      callees: [...swapData.callees],
      calldata: [...swapData.calldata],
      values: [...swapData.values],
    };
  }
}
