import type {
  ConstructProviderFetchInput,
  SignTypedDataContractCallerFn,
} from '../../types';

export type SignLimitOrderFunctions = {
  signLimitOrder: SignTypedDataContractCallerFn;
};

// returns whatever `contractCaller` returns
// to allow for better versatility
export const constructSignLimitOrder = <T>(
  options: Pick<
    ConstructProviderFetchInput<T, 'signTypedDataCall'>,
    'contractCaller'
  >
): SignLimitOrderFunctions => {
  const signLimitOrder: SignTypedDataContractCallerFn = (typedData) => {
    return options.contractCaller.signTypedDataCall(typedData);
  };

  return { signLimitOrder };
};
