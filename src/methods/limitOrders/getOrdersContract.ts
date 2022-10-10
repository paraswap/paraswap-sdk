import type { ConstructFetchInput } from '../../types';
import { constructGetSpender, GetSpender } from '../swap/spender';

export type GetLimitOrdersContractFunctions = {
  getLimitOrdersContract: GetSpender;
  getTokenTransferProxy: GetSpender;
};

export const constructGetLimitOrdersContract = (
  options: ConstructFetchInput
): GetLimitOrdersContractFunctions => {
  // analogous to getSpender() but for Limit Orders Contract = AugustusRFQ

  const {
    getSpender: getTokenTransferProxy,
    getAugustusRFQ: getLimitOrdersContract,
  } = constructGetSpender(options);

  return { getLimitOrdersContract, getTokenTransferProxy };
};
