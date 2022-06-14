import type { ConstructProviderFetchInput } from '../../types';
import type { SignableOrderData } from './buildOrder';
import { sanitizeOrderData } from './helpers/misc';

export type SignNFTOrderFunctions = {
  signNFTOrder: (signableOrderData: SignableOrderData) => Promise<string>;
};

// returns whatever `contractCaller` returns
// to allow for better versatility
export const constructSignNFTOrder = (
  options: Pick<
    ConstructProviderFetchInput<any, 'signTypedDataCall'>,
    'contractCaller'
  >
): SignNFTOrderFunctions => {
  const signNFTOrder: SignNFTOrderFunctions['signNFTOrder'] = (typedData) => {
    // types allow to pass OrderData & extra_stuff, but tx will break like that
    const typedDataOnly: SignableOrderData = {
      ...typedData,
      data: sanitizeOrderData(typedData.data),
    };
    return options.contractCaller.signTypedDataCall(typedDataOnly);
  };

  return { signNFTOrder };
};
