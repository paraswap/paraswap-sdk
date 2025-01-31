import type {
  Address,
  ConstructFetchInput,
  RequestParameters,
} from '../../types';
import { constructGetSpender } from '../swap/spender';

type GetDeltaContract = (
  requestParams?: RequestParameters
) => Promise<Address | null>;
export type GetDeltaContractFunctions = {
  /** @description returns ParaswapDelta contract address when Delta is available on current chain */
  getDeltaContract: GetDeltaContract;
};

export const constructGetDeltaContract = (
  options: ConstructFetchInput
): GetDeltaContractFunctions => {
  // analogous to getSpender() but for Delta Orders Contract = ParaswapDelta

  const { getContracts } = constructGetSpender(options);

  const getDeltaContract: GetDeltaContract = async (requestParams) => {
    const { ParaswapDelta } = await getContracts(requestParams);
    return ParaswapDelta || null;
  };

  return { getDeltaContract };
};
