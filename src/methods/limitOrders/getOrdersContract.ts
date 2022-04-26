import { assert } from 'ts-essentials';
import type { ConstructFetchInput } from '../../types';
import { chainId2verifyingContract } from './helpers/misc';

type GetLimitOrdersContract = (/* signal?: AbortSignal */) => string;

export type GetLimitOrdersContractFunctions = {
  getLimitOrdersContract: GetLimitOrdersContract;
};

export const constructGetLimitOrdersContract = ({
  // apiURL = API_URL,
  network,
}: // fetcher,
ConstructFetchInput): GetLimitOrdersContractFunctions => {
  // const baseFetchURL = `${apiURL}/contracts/${network}`;
  const verifyingContract = chainId2verifyingContract[network];

  // analogous to getSpender() but for Limit Orders Contract = AugustusRFQ
  // @TODO maybe get from API
  const getLimitOrdersContract: GetLimitOrdersContract = () => {
    assert(
      verifyingContract,
      `AugustusRFQ contract for Limit Orders not available on chain ${network}`
    );

    return verifyingContract;
  };

  return { getLimitOrdersContract };
};
