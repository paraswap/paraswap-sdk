import { assert } from 'ts-essentials';
import type { ConstructFetchInput, RequestParameters } from '../../types';
import { ZERO_ADDRESS } from '../common/orders/buildOrderData';
import { constructGetDeltaContract } from './getDeltaContract';
import { BridgePrice, DeltaPrice } from './getDeltaPrice';
import { constructGetMulticallHandlers } from './getMulticallHandlers';
import { constructGetPartnerFee } from './getPartnerFee';
import { getDeltaBridgeAndDestToken } from './helpers/across';
import {
  buildDeltaSignableOrderData,
  type BuildDeltaOrderDataInput,
  type SignableDeltaOrderData,
} from './helpers/buildDeltaOrderData';
import { Bridge, DeltaAuctionOrder } from './helpers/types';
export type { SignableDeltaOrderData } from './helpers/buildDeltaOrderData';

export type BuildDeltaOrderDataParams = {
  /** @description The address of the order owner */
  owner: string;
  /** @description The address of the order beneficiary */
  beneficiary?: string; // beneficiary==owner if no transferTo
  /** @description The address of the src token */
  srcToken: string; // lowercase
  /** @description The address of the dest token. For Crosschain Order - destination token on the destination chain */
  destToken: string; // lowercase
  /** @description The amount of src token to swap */
  srcAmount: string; // wei
  /** @description The minimum amount of dest token to receive */
  destAmount: string; // wei, deltaPrice.destAmount - slippage
  /** @description The deadline for the order */
  deadline?: number; // seconds
  /** @description The nonce of the order */
  nonce?: number | string; // can be random, can even be Date.now()
  /** @description Optional permit signature for the src token https://developers.velora.xyz/api/velora-api/velora-delta-api/build-a-delta-order-to-sign#supported-permits-order#supported-permits */
  permit?: string; //can be "0x"
  /** @description Partner string. */
  partner?: string;

  /** @description The bridge input */
  bridge?: Bridge;
  /** @description Destination Chain ID for Crosschain Orders */
  destChainId?: number;
  /** @description Whether the beneficiary is a contract. Needed to automatically fill in crosschain Bridge */
  isBeneficiaryContract?: boolean;

  /** @description price response received from /delta/prices (getDeltaPrice method) */
  deltaPrice: Pick<DeltaPrice, 'destAmount' | 'partner' | 'partnerFee'> &
    Partial<Pick<BridgePrice, 'bridgeFee'>>;

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
  // cached internally for `multicall` contracts
  const { getMulticallHandlers } = constructGetMulticallHandlers(options);

  const buildDeltaOrder: BuildDeltaOrder = async (options, requestParams) => {
    const ParaswapDelta = await getDeltaContract(requestParams);
    if (!ParaswapDelta) {
      throw new Error(`Delta is not available on chain ${chainId}`);
    }

    ////// Partner logic //////

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

    ////// Bridge logic //////

    // Bridge is necessary for Crosschain Delta Orders
    let bridge = options.bridge;
    let partialChangedOrder: Pick<DeltaAuctionOrder, 'destToken'> | null = null;

    // give preference to user-provided bridge
    if (!bridge) {
      // no bridge passed in input

      if (options.destChainId && chainId !== options.destChainId) {
        // crosschain Delta Order
        assert(
          options.deltaPrice.bridgeFee,
          '`bridgeFee` is required in `deltaPrice` for crosschain Delta Orders'
        );

        const getMulticallHandler = async (chainId: number) => {
          const multicallHandlersMap = await getMulticallHandlers();
          const multicallHandler = multicallHandlersMap[chainId];

          assert(
            multicallHandler,
            `Multicall handler not found for chain ${chainId}`
          );

          return multicallHandler;
        };

        const { bridge: constructedBridge, order: partialOrder } =
          await getDeltaBridgeAndDestToken({
            destTokenDestChain: options.destToken,
            destChainId: options.destChainId,
            destTokenSrcChain: options.srcToken,
            srcChainId: chainId,
            bridgeFee: options.deltaPrice.bridgeFee,
            isBeneficiaryContract: options.isBeneficiaryContract || false,
            getMulticallHandler,
          });

        bridge = constructedBridge;
        partialChangedOrder = partialOrder;
      } else {
        // 0-values bridge for same-chain Orders
        bridge = DEFAULT_BRIDGE;
      }
    }

    const input: BuildDeltaOrderDataInput = {
      owner: options.owner,
      beneficiary: options.beneficiary,
      srcToken: options.srcToken,
      // for some cases of WETH<->ETH crosschain swaps, the destToken is to WETH or ETH
      destToken: partialChangedOrder?.destToken ?? options.destToken,
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
