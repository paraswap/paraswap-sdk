import type { ConstructProviderFetchInput } from '../../types';
import { ApproveToken, approveTokenMethodFactory } from '../../helpers/approve';
import { constructApproveToken } from '../swap/approve';
import { constructGetSpender } from '../swap/spender';

export type ApproveTokenForLimitOrderFunctions<T> = {
  /** @description approving AugustusRFQ as spender for makerAsset */
  approveMakerTokenForLimitOrder: ApproveToken<T>;
  /** @description approving AugustusRFQ as spender for takerAsset to call SDK.fillOrderDirectly */
  approveTakerTokenForFillingP2POrderDirectly: ApproveToken<T>;
  /** @description approving AugustusSwapper as spender for takerAsset for Limit Orders that will be executed through it */
  approveTakerTokenForLimitOrder: ApproveToken<T>;
};

// returns whatever `contractCaller` returns
// to allow for better versatility
export const constructApproveTokenForLimitOrder = <T>(
  options: ConstructProviderFetchInput<T, 'transactCall'>
): ApproveTokenForLimitOrderFunctions<T> => {
  // getAugustusRFQ is cached internally for the same instance of SDK
  // so should persist across same apiUrl & network
  const { getAugustusRFQ } = constructGetSpender(options);

  const approveMakerTokenForLimitOrder: ApproveToken<T> =
    approveTokenMethodFactory<T>(options.contractCaller, getAugustusRFQ);

  // approving TokenTransaferProxy as for the swap
  const { approveToken: approveTakerTokenForLimitOrder } =
    constructApproveToken(options);

  return {
    approveMakerTokenForLimitOrder,
    approveTakerTokenForFillingP2POrderDirectly: approveMakerTokenForLimitOrder,
    approveTakerTokenForLimitOrder,
  };
};
