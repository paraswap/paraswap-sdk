// import { deriveCompactSignature } from '../../helpers/misc';
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

    // Safe signature with only one signer has length 132
    // but if it is compacted, the recovered address doesn't match the signer

    return signature;

    // if (signature.length > 132) {
    //   // signature more than 65 bytes, likely a multisig
    //   // not compatible with EIP-2098 Compact Signatures
    //   return signature;
    // }

    // // both full and compact signatures work in the ParaswapDelta contract;
    // // compact signature can be marginally more gas efficient
    // try {
    //   return deriveCompactSignature(signature);
    // } catch {
    //   return signature;
    // }
  };

  return { signDeltaOrder };
};
