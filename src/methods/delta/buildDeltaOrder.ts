import type { ConstructFetchInput } from '../../types';
import { constructGetDeltaContract } from './getDeltaContract';
import { DeltaPrice } from './getDeltaPrice';
import { constructGetPartnerFee } from './getPartnerFee';
import {
  buildDeltaSignableOrderData,
  type BuildDeltaOrderDataInput,
  type SignableDeltaOrderData,
} from './helpers/buildDeltaOrderData';
export type { SignableDeltaOrderData } from './helpers/buildDeltaOrderData';

export type BuildDeltaOrderDataParams = {
  /** @description The address of the order owner */
  owner: string;
  /** @description The address of the order beneficiary */
  beneficiary?: string; // beneficiary==owner if no transferTo
  /** @description The address of the src token */
  srcToken: string; // lowercase
  /** @description The address of the dest token */
  destToken: string; // lowercase
  /** @description The amount of src token to swap */
  srcAmount: string; // wei
  /** @description The minimum amount of dest token to receive */
  destAmount: string; // wei, deltaPrice.destAmount - slippage
  /** @description The deadline for the order */
  deadline?: number; // seconds
  /** @description The nonce of the order */
  nonce?: number; // can be random, can even be Date.now()
  /** @description Optional permit signature for the src token https://developers.paraswap.network/api/paraswap-delta/build-and-sign-a-delta-order#supported-permits */
  permit?: string; //can be "0x"
  /** @description Partner string. */
  partner?: string;

  /** @description price response received from /delta/prices (getDeltaPrice method) */
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
