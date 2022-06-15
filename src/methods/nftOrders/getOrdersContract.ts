import type { ConstructFetchInput } from '../../types';
import { constructGetLimitOrdersContract } from '../limitOrders/getOrdersContract';
import type { GetSpender } from '../swap/spender';

type GetNFTOrdersContract = (/* signal?: AbortSignal */) => string;

export type GetNFTOrdersContractFunctions = {
  getNFTOrdersContract: GetNFTOrdersContract;
  getTokenTransferProxy: GetSpender;
};

// should work the same as LimitOrders
export const constructGetNFTOrdersContract = (
  options: ConstructFetchInput
): GetNFTOrdersContractFunctions => {
  const { getLimitOrdersContract, getTokenTransferProxy } =
    constructGetLimitOrdersContract(options);

  return {
    getNFTOrdersContract: getLimitOrdersContract,
    getTokenTransferProxy,
  };
};
