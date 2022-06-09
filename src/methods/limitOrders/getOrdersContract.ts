import { assert } from 'ts-essentials';
import type { ConstructFetchInput } from '../../types';
import { constructGetSpender, GetSpender } from '../swap/spender';
import { chainId2verifyingContract } from './helpers/misc';

type GetLimitOrdersContract = (/* signal?: AbortSignal */) => string;

export type GetLimitOrdersContractFunctions = {
  getLimitOrdersContract: GetLimitOrdersContract;
  getTokenTransferProxy: GetSpender;
};

export const constructGetLimitOrdersContract = (
  options: ConstructFetchInput
): GetLimitOrdersContractFunctions => {
  // const baseFetchURL = `${apiURL}/contracts/${network}`;
  const verifyingContract = chainId2verifyingContract[options.chainId];

  // analogous to getSpender() but for Limit Orders Contract = AugustusRFQ
  // @TODO maybe get from API
  const getLimitOrdersContract: GetLimitOrdersContract = () => {
    assert(
      verifyingContract,
      `AugustusRFQ contract for Limit Orders not available on chain ${options.chainId}`
    );

    return verifyingContract;
  };

  const { getSpender: getTokenTransferProxy } = constructGetSpender(options);

  return { getLimitOrdersContract, getTokenTransferProxy };
};
