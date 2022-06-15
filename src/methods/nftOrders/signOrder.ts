import type { ConstructProviderFetchInput } from '../../types';
import type { SignableNFTOrderData } from './buildOrder';
import { sanitizeOrderData } from './helpers/misc';

export type SignNFTOrderFunctions = {
  signNFTOrder: (signableOrderData: SignableNFTOrderData) => Promise<string>;
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
    const typedDataOnly: SignableNFTOrderData = {
      ...typedData,
      // here assetType isn't provided, SignableData must already have corrent BigIntAsString
      // @TODO consider using `template_${types}` for Address, likely bad idea when considering 3rd-party code
      data: sanitizeOrderData(typedData.data),
    };
    return options.contractCaller.signTypedDataCall(typedDataOnly);
  };

  return { signNFTOrder };
};
