import type { ConstructProviderFetchInput } from '../../types';
import { ApproveToken, approveTokenMethodFactory } from '../../helpers/approve';
import { chainId2verifyingContract } from './helpers/misc';
import { assert } from 'ts-essentials';
import { constructApproveToken } from '../swap/approve';

export type ApproveTokenForLimitOrderFunctions<T> = {
  /** @description approving AugustusRFQ directly */
  /** @deprecated use Limit Orders through AugustusSwapper */
  approveTokenForDirectLimitOrder: ApproveToken<T>;
  /** @description approving AugustusSwapper for Limit Orders that will be executed through it */
  approveTokenForLimitOrder: ApproveToken<T>;
};

// returns whatever `contractCaller` returns
// to allow for better versatility
export const constructApproveTokenForLimitOrder = <T>(
  options: ConstructProviderFetchInput<T, 'transactCall'>
): ApproveTokenForLimitOrderFunctions<T> => {
  const verifyingContract = chainId2verifyingContract[options.chainId];

  const getSpender = (): string => {
    assert(
      verifyingContract,
      `AugustusRFQ contract for Limit Orders not available on chain ${options.chainId}`
    );

    return verifyingContract;
  };

  const approveTokenForDirectLimitOrder: ApproveToken<T> =
    approveTokenMethodFactory<T>(options.contractCaller, getSpender);

  const { approveToken: approveTokenForLimitOrder } =
    constructApproveToken(options);

  return { approveTokenForDirectLimitOrder, approveTokenForLimitOrder };
};
