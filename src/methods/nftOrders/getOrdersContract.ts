import type { ConstructFetchInput } from '../../types';
import { constructGetSpender, GetSpender } from '../swap/spender';

export type GetNFTOrdersContractFunctions = {
  getNFTOrdersContract: GetSpender;
  getTokenTransferProxy: GetSpender;
};

// should work the same as LimitOrders
export const constructGetNFTOrdersContract = (
  options: ConstructFetchInput
): GetNFTOrdersContractFunctions => {
  // analogous to getSpender() but for Limit Orders Contract = AugustusRFQ

  const {
    getSpender: getTokenTransferProxy,
    getAugustusRFQ: getNFTOrdersContract,
  } = constructGetSpender(options);

  return {
    getNFTOrdersContract,
    getTokenTransferProxy,
  };
};
