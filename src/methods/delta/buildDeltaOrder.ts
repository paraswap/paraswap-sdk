import type { ConstructFetchInput } from '../../types';
import { constructGetDeltaContract } from './getDeltaContract';
import { DeltaPrice } from './getDeltaPrice';
import { constructGetPartnerFee } from './getPartnerFee';
import {
  buildDeltaSignableOrderData,
  type BuildDeltaOrderDataInput,
  type SignableDeltaOrderData,
} from './helpers/buildDeltaOrderData';

export type BuildDeltaOrderDataParams = {
  owner: string;
  beneficiary?: string; // beneficiary==owner if no transferTo
  srcToken: string; // lowercase
  destToken: string; // lowercase
  srcAmount: string; // wei
  destAmount: string; // wei, deltaPrice.destAmount - slippage
  deadline?: number; // seconds
  nonce?: number; // can be random, can even be Date.now()
  permit?: string; //can be "0x"
  partner?: string;

  deltaPrice: Pick<DeltaPrice, 'destAmount' | 'partner' | 'partnerFee'>;
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
      { partner: options.partner || options.deltaPrice.partner },
      signal
    );

    const input: BuildDeltaOrderDataInput = {
      owner: options.owner,
      beneficiary: options.beneficiary,
      srcToken: options.srcToken,
      destToken: options.destToken,
      srcAmount: options.srcAmount,
      destAmount: options.destAmount,
      expectedDestAmount: options.deltaPrice.destAmount,
      deadline: options.deadline,
      nonce: options.nonce,
      permit: options.permit,

      chainId,
      paraswapDeltaAddress: ParaswapDelta,
      partnerAddress: partnerFeeResponse.partnerAddress,
      takeSurplus: partnerFeeResponse.takeSurplus,
      partnerFee:
        options.deltaPrice.partnerFee ?? partnerFeeResponse.partnerFee, // should be the same, but give priority to externally provided
    };

    return buildDeltaSignableOrderData(input);
  };

  return {
    buildDeltaOrder,
  };
};
