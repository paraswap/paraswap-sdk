import type { ConstructFetchInput, RequestParameters } from '../../types';
import { ZERO_ADDRESS } from '../common/orders/buildOrderData';
import { constructGetDeltaContract } from './getDeltaContract';
import { DeltaPrice } from './getDeltaPrice';
import { constructGetPartnerFee } from './getPartnerFee';
import {
  buildDeltaSignableOrderData,
  type BuildDeltaOrderDataInput,
  type SignableDeltaOrderData,
} from './helpers/buildDeltaOrderData';
import { Bridge, BridgeInput } from './helpers/types';
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
  nonce?: number | string; // can be random, can even be Date.now()
  /** @description Optional permit signature for the src token https://developers.paraswap.network/api/paraswap-delta/build-and-sign-a-delta-order#supported-permits */
  permit?: string; //can be "0x"
  /** @description Partner string. */
  partner?: string;

  /** @description The bridge input */
  bridge?: BridgeInput;

  /** @description price response received from /delta/prices (getDeltaPrice method) */
  deltaPrice: Pick<DeltaPrice, 'destAmount' | 'partner' | 'partnerFee'>;

  /** @description partner fee in basis points (bps), 50bps=0.5% */
  partnerFeeBps?: number;
  /** @description partner address */
  partnerAddress?: string;
  /** @description take surplus */
  partnerTakesSurplus?: boolean;
};

type BuildDeltaOrder = (
  buildOrderParams: BuildDeltaOrderDataParams,
  requestParams?: RequestParameters
) => Promise<SignableDeltaOrderData>;

export type BuildDeltaOrderFunctions = {
  /** @description Build Orders to be posted to Delta API for execution */
  buildDeltaOrder: BuildDeltaOrder;
};

// for same-chain Orders, all 0 params
const DEFAULT_BRIDGE: Bridge = {
  maxRelayerFee: '0',
  destinationChainId: 0,
  outputToken: ZERO_ADDRESS,
  multiCallHandler: ZERO_ADDRESS,
};

export const constructBuildDeltaOrder = (
  options: ConstructFetchInput
): BuildDeltaOrderFunctions => {
  const { chainId } = options;

  // cached internally
  const { getDeltaContract } = constructGetDeltaContract(options);
  // cached internally for `partner`
  const { getPartnerFee } = constructGetPartnerFee(options);

  const buildDeltaOrder: BuildDeltaOrder = async (options, requestParams) => {
    const ParaswapDelta = await getDeltaContract(requestParams);
    if (!ParaswapDelta) {
      throw new Error(`Delta is not available on chain ${chainId}`);
    }

    // externally supplied partner fee data takes precedence
    let partnerAddress = options.partnerAddress;
    let partnerFeeBps =
      options.partnerFeeBps ?? options.deltaPrice.partnerFee * 100;
    let partnerTakesSurplus = options.partnerTakesSurplus;

    // if fee given, takeSurplus is ignored
    const feeOrTakeSurplusSupplied =
      partnerFeeBps !== undefined || partnerTakesSurplus !== undefined;

    if (partnerAddress === undefined || feeOrTakeSurplusSupplied) {
      const partner = options.partner || options.deltaPrice.partner;
      const partnerFeeResponse = await getPartnerFee(
        { partner },
        requestParams
      );

      partnerAddress = partnerAddress ?? partnerFeeResponse.partnerAddress;
      // deltaPrice.partnerFee and partnerFeeResponse.partnerFee should be the same, but give priority to externally provided
      partnerFeeBps = partnerFeeBps ?? partnerFeeResponse.partnerFee;
      partnerTakesSurplus =
        partnerTakesSurplus ?? partnerFeeResponse.takeSurplus;
    }

    const bridge: Bridge = options.bridge
      ? {
          ...options.bridge,
          multiCallHandler:
            // multicallHandler will be provided when transferring Native ETH to a Smart Contract receiver
            // otherwise Smart Contract receiver will get WETH
            options.bridge.multiCallHandler || DEFAULT_BRIDGE.multiCallHandler,
        }
      : DEFAULT_BRIDGE;

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
      partnerTakesSurplus,
      partnerFeeBps,

      bridge,
    };

    return buildDeltaSignableOrderData(input);
  };

  return {
    buildDeltaOrder,
  };
};
