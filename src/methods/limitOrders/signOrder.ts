import type {
  ConstructProviderFetchInput,
  SignTypedDataContractCallerFn,
} from '../../types';

export type SignLimitOrderFunctions = {
  signLimitOrder: SignTypedDataContractCallerFn;
};

// returns whatever `contractCaller` returns
// to allow for better versatility
export const constructSignLimitOrder = (
  options: Pick<
    ConstructProviderFetchInput<any, 'signTypedDataCall'>,
    'contractCaller'
  >
): SignLimitOrderFunctions => {
  const signLimitOrder: SignTypedDataContractCallerFn = (typedData) => {
    return options.contractCaller.signTypedDataCall(typedData);
  };

  return { signLimitOrder };
};
