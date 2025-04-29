import type {
  ConstructProviderFetchInput,
  RequestParameters,
} from '../../types';
import { ApproveToken, approveTokenMethodFactory } from '../../helpers/approve';
import { constructGetDeltaContract } from './getDeltaContract';

export type ApproveTokenForDeltaFunctions<T> = {
  /** @description approving ParaswapDelta contract as spender for Token */
  approveTokenForDelta: ApproveToken<T>;
};

// returns whatever `contractCaller` returns
// to allow for better versatility
export const constructApproveTokenForDelta = <T>(
  options: ConstructProviderFetchInput<T, 'transactCall'>
): ApproveTokenForDeltaFunctions<T> => {
  // getDeltaContract is cached internally for the same instance of SDK
  // so should persist across same apiUrl & network
  const { getDeltaContract } = constructGetDeltaContract(options);

  const getParaswapDeltaAddress = async (requestParams?: RequestParameters) => {
    const deltaContract = await getDeltaContract(requestParams);
    if (!deltaContract) {
      throw new Error(`Delta is not available on chain ${options.chainId}`);
    }
    return deltaContract;
  };

  const approveTokenForDelta: ApproveToken<T> = approveTokenMethodFactory<T>(
    options.contractCaller,
    getParaswapDeltaAddress
  );

  return {
    approveTokenForDelta,
  };
};
