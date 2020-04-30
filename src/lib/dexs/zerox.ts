import BigNumber from "bignumber.js";

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

export class ZeroXOrder {
  static formatOrder(order: ZeroXSignedOrder, isV3: boolean) {
    const feeAssetData = isV3 ? {
      makerFeeAssetData: order.makerFeeAssetData,
      takerFeeAssetData: order.takerFeeAssetData
    } : {};

    return {
      makerAddress: order.makerAddress,
      takerAddress: order.takerAddress,
      feeRecipientAddress: order.feeRecipientAddress,
      senderAddress: order.senderAddress,
      makerAssetData: order.makerAssetData,
      takerAssetData: order.takerAssetData,
      makerFee: new BigNumber(order.makerFee).toFixed(0),
      takerFee: new BigNumber(order.takerFee).toFixed(0),
      expirationTimeSeconds: new BigNumber(order.expirationTimeSeconds).toFixed(0),
      salt: new BigNumber(order.salt).toFixed(0),
      makerAssetAmount: new BigNumber(order.makerAssetAmount).toFixed(0),
      takerAssetAmount: new BigNumber(order.takerAssetAmount).toFixed(0),

      ...feeAssetData,
    }
  }

  static formatOrders(orders: ZeroXSignedOrder[], isV3: boolean = false) {
    return orders.map(o => ZeroXOrder.formatOrder(o, isV3));
  }
}
