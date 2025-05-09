export type OrderTransaction = {
  hash: string;
  event_type: 'OrderFilled' | 'OrderCancelled';
};

export type OrderType = 'LIMIT' | 'P2P';

// display states such as EXPIRED and PARTIALLY_FILLLED derived on client side
// returned by API but can be calculated too, EXPIRED == order.expiry < Date.now()/1000
// PARTIALLY_FILLED == order.fillableBalance < order.makerAmount && order.fillableBalance !== '0'
export type OrderState = 'PENDING' | 'FULFILLED' | 'CANCELLED' | 'EXPIRED';

export type BeneficiaryType = 'EOA' | 'SmartContract';
