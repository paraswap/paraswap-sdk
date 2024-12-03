import type { ConstructFetchInput } from '../../types';
import { constructGetDeltaContract } from './getDeltaContract';
import { DeltaPrice } from './getDeltaPrice';
import {
  constructGetPartnerFee,
  type PartnerFeeResponse,
} from './getPartnerFee';
import {
  buildDeltaSignableOrderData,
  type BuildDeltaOrderDataInput,
  type SignableDeltaOrderData,
} from './helpers/buildDeltaOrderData';
export type { SignableDeltaOrderData } from './helpers/buildDeltaOrderData';

export type BuildDeltaOrderDataParams = {
  owner: string;
  beneficiary?: string; // beneficiary==owner if no transferTo
  srcToken: string; // lowercase
  destToken: string; // lowercase
  srcAmount: string; // wei
  destAmount: string; // wei, deltaPrice.destAmount - slippage
  deadline?: number; // seconds
  nonce?: number | string; // can be random, can even be Date.now()
  permit?: string; //can be "0x"
  partner?: string;

  deltaPrice: Pick<DeltaPrice, 'destAmount' | 'partner' | 'partnerFee'>;
} & Partial<PartnerFeeResponse>; // can override partnerFee, partnerAddress, takeSurplus, which otherwise will be fetched

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

    let partnerAddress = options.partnerAddress;
    let partnerFee = options.partnerFee ?? options.deltaPrice.partnerFee;
    let takeSurplus = options.takeSurplus;

    if (
      partnerAddress === undefined ||
      partnerFee === undefined ||
      takeSurplus === undefined
    ) {
      const partner = options.partner || options.deltaPrice.partner;
      const partnerFeeResponse = await getPartnerFee({ partner }, signal);

      partnerAddress = partnerAddress ?? partnerFeeResponse.partnerAddress;
      // deltaPrice.partnerFee and partnerFeeResponse.partnerFee should be the same, but give priority to externally provided
      partnerFee = partnerFee ?? partnerFeeResponse.partnerFee;
      takeSurplus = takeSurplus ?? partnerFeeResponse.takeSurplus;
    }

    const input: BuildDeltaOrderDataInput = {
      owner: options.owner,
      beneficiary: options.beneficiary,
      srcToken: options.srcToken,
      destToken: options.destToken,
      srcAmount: options.srcAmount,
      destAmount: options.destAmount,
      expectedDestAmount: options.deltaPrice.destAmount,
      deadline: options.deadline,
      nonce: options.nonce?.toString(10),
      permit: options.permit,

      chainId,
      paraswapDeltaAddress: ParaswapDelta,
      partnerAddress,
      takeSurplus,
      partnerFee,
    };

    return buildDeltaSignableOrderData(input);
  };

  return {
    buildDeltaOrder,
  };
};
