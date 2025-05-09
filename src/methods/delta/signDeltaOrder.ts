import type { ConstructProviderFetchInput } from '../../types';
import { SignableDeltaOrderData } from './helpers/buildDeltaOrderData';
import { sanitizeDeltaOrderData } from './helpers/misc';

export type SignLimitOrderFunctions = {
  signLimitOrder: (
    signableOrderData: SignableDeltaOrderData
  ) => Promise<string>;
};

type SignDeltaOrder = (
  signableOrderData: SignableDeltaOrderData
) => Promise<string>;

export type SignDeltaOrderFunctions = {
  signDeltaOrder: SignDeltaOrder;
};

// returns whatever `contractCaller` returns
// to allow for better versatility
export const constructSignDeltaOrder = (
  options: Pick<
    ConstructProviderFetchInput<any, 'signTypedDataCall'>,
    'contractCaller'
  >
): SignDeltaOrderFunctions => {
  const signDeltaOrder: SignDeltaOrder = async (typedData) => {
    // types allow to pass OrderData & extra_stuff, but tx will break like that
    const typedDataOnly: SignableDeltaOrderData = {
      ...typedData,
      data: sanitizeDeltaOrderData(typedData.data),
    };
    const signature = await options.contractCaller.signTypedDataCall(
      typedDataOnly
    );

    return signature;
  };

  return { signDeltaOrder };
};
