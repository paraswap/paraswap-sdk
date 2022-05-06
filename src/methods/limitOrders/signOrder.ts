import type { ConstructProviderFetchInput } from '../../types';
import type { SignableOrderData } from './buildOrder';
import { sanitizeOrderData } from './helpers/misc';

export type SignLimitOrderFunctions = {
  signLimitOrder: (signableOrderData: SignableOrderData) => Promise<string>;
};

// returns whatever `contractCaller` returns
// to allow for better versatility
export const constructSignLimitOrder = (
  options: Pick<
    ConstructProviderFetchInput<any, 'signTypedDataCall'>,
    'contractCaller'
  >
): SignLimitOrderFunctions => {
  const signLimitOrder: SignLimitOrderFunctions['signLimitOrder'] = (
    typedData
  ) => {
    // types allow to pass OrderData & extra_stuff, but tx will break like that
    const typedDataOnly: SignableOrderData = {
      ...typedData,
      data: sanitizeOrderData(typedData.data),
    };
    return options.contractCaller.signTypedDataCall(typedDataOnly);
  };

  return { signLimitOrder };
};
