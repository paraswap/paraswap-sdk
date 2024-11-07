import type { ConstructFetchInput } from '../../types';
import { constructGetDeltaContract } from './getDeltaContract';
import { constructGetPartnerFee } from './getPartnerFee';
import {
  buildDeltaSignableOrderData,
  type DeltaOrderDataInput,
  type SignableDeltaOrderData,
} from './helpers/buildDeltaOrderData';

// reqrite to be { partner, srcAmount, srcToken, destToken, destAmount: (with slippage), destPrice (take expectedAmount=destAmount from it) }
export type BuildDeltaOrderDataParams = DeltaOrderDataInput & {
  partner: string;
};

type BuildDeltaOrder = (
  buildOrderParams: BuildDeltaOrderDataParams,
  signal?: AbortSignal
) => Promise<SignableDeltaOrderData>;

export type BuildDeltaOrderFunctions = {
  /** @description Build Orders to be posted to Delta API for execution */
  buildDeltaOrder: BuildDeltaOrder;
};

export const constructBuildDeltaOrder = (
  options: ConstructFetchInput
): BuildDeltaOrderFunctions => {
  const { chainId } = options;

  // cached internally
  const { getDeltaContract } = constructGetDeltaContract(options);
  // cached internally for `partner`
  const { getPartnerFee } = constructGetPartnerFee(options);

  const buildDeltaOrder: BuildDeltaOrder = async (options, signal) => {
    const ParaswapDelta = await getDeltaContract(signal);
    if (!ParaswapDelta) {
      throw new Error(`Delta is not available on chain ${chainId}`);
    }
    const partnerFeeResponse = await getPartnerFee(
      { partner: options.partner },
      signal
    );

    return buildDeltaSignableOrderData({
      ...options,
      chainId,
      paraswapDeltaAddress: ParaswapDelta,
      partnerAddress: partnerFeeResponse.partnerAddress,
      partnerFee: options.partnerFee ?? partnerFeeResponse.partnerFee, // should be the same, but give priority to externally provided
    });
  };

  return {
    buildDeltaOrder,
  };
};
