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
  signature: string;
}

export class ZeroXOrder {
  static formatOrder(order: ZeroXSignedOrder) {
    return {
      ...order,
      makerFee: new BigNumber(order.makerFee).toFixed(0),
      takerFee: new BigNumber(order.takerFee).toFixed(0),
      makerAssetAmount: new BigNumber(order.makerAssetAmount).toFixed(0),
      takerAssetAmount: new BigNumber(order.takerAssetAmount).toFixed(0),
      salt: new BigNumber(order.salt).toFixed(0),
      expirationTimeSeconds: new BigNumber(order.expirationTimeSeconds).toFixed(0),
    }
  }

  static formatOrders(orders: ZeroXSignedOrder[]) {
    return orders.map(ZeroXOrder.formatOrder);
  }
}
