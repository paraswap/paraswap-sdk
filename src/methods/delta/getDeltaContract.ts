import type { Address, ConstructFetchInput } from '../../types';
import { constructGetSpender } from '../swap/spender';

type GetDeltaContract = (signal?: AbortSignal) => Promise<Address | null>;
export type GetDeltaContractFunctions = {
  /** @description returns ParaswapDelta contract address when Delta is available on current chain */
  getDeltaContract: GetDeltaContract;
};

export const constructGetDeltaContract = (
  options: ConstructFetchInput
): GetDeltaContractFunctions => {
  // analogous to getSpender() but for Delta Orders Contract = ParaswapDelta

  const { getContracts } = constructGetSpender(options);

  const getDeltaContract: GetDeltaContract = async (signal) => {
    const { ParaswapDelta } = await getContracts(signal);
    return ParaswapDelta || null;
  };

  return { getDeltaContract };
};
