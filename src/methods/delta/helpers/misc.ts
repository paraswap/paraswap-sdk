import type { SignableDeltaOrderData } from './buildDeltaOrderData';

export function sanitizeDeltaOrderData({
  owner,
  beneficiary,
  srcToken,
  destToken,
  srcAmount,
  destAmount,
  expectedDestAmount,
  deadline,
  nonce,
  permit,
  partnerAndFee,
  bridge,
}: SignableDeltaOrderData['data'] &
  Record<string, any>): SignableDeltaOrderData['data'] {
  return {
    owner,
    beneficiary,
    srcToken,
    destToken,
    srcAmount,
    destAmount,
    expectedDestAmount,
    deadline,
    nonce,
    permit,
    partnerAndFee,
    bridge,
  };
}
