import type { ConstructProviderFetchInput } from '../../types';
import { ApproveToken, approveTokenMethodFactory } from '../../helpers/approve';
import { chainId2verifyingContract } from './helpers/misc';
import { assert } from 'ts-essentials';

export type ApproveTokenForLimitOrderFunctions<T> = {
  approveTokenForLimitOrder: ApproveToken<T>;
};

// returns whatever `contractCaller` returns
// to allow for better versatility
export const constructApproveTokenForLimitOrder = <T>(
  options: ConstructProviderFetchInput<T, 'transactCall'>
): ApproveTokenForLimitOrderFunctions<T> => {
  const verifyingContract = chainId2verifyingContract[options.network];

  const getSpender = (): string => {
    assert(
      verifyingContract,
      `AugustusRFQ contract for Limit Orders not available on chain ${options.network}`
    );

    return verifyingContract;
  };

  const approveTokenForLimitOrder: ApproveToken<T> =
    approveTokenMethodFactory<T>(options.contractCaller, getSpender);

  return { approveTokenForLimitOrder };
};
