import { assert } from 'ts-essentials';
import type { ConstructFetchInput, RequestParameters } from '../../types';
import { BridgePrice } from './getDeltaPrice';
import { constructGetMulticallHandlers } from './getMulticallHandlers';
import {
  getDeltaBridgeAndDestToken,
  GetDeltaBridgeAndDestTokenOutput,
} from './helpers/across';
import { BeneficiaryType } from '../common/orders/types';
export type { SignableDeltaOrderData } from './helpers/buildDeltaOrderData';

export type BuildCrosschainOrderBridgeParams = {
  /** @description The address of the destination token on the destination chain */
  destToken: string; // lowercase
  /** @description Destination Chain ID for Crosschain Orders */
  destChainId: number;
  /** @description Whether the beneficiary is a contract. Needed to automatically fill in crosschain Bridge */
  beneficiaryType: BeneficiaryType;

  /** @description price response received from /delta/prices (getDeltaPrice method) */
  deltaPrice: Pick<BridgePrice, 'bridgeFee' | 'destToken'>;
};

type BuildCrosschainOrderBridge = (
  buildOrderParams: BuildCrosschainOrderBridgeParams,
  requestParams?: RequestParameters
) => Promise<GetDeltaBridgeAndDestTokenOutput>;

export { GetDeltaBridgeAndDestTokenOutput as CrosschainOrderBridgeAndChanges };

export type BuildCrosschainOrderBridgeFunctions = {
  /** @description Build Orders to be posted to Delta API for execution */
  buildCrosschainOrderBridge: BuildCrosschainOrderBridge;
};

export const constructBuildCrosschainOrderBridge = (
  options: ConstructFetchInput
): BuildCrosschainOrderBridgeFunctions => {
  const { chainId } = options;

  // cached internally for `multicall` contracts
  const { getMulticallHandlers } = constructGetMulticallHandlers(options);

  const buildCrosschainOrderBridge: BuildCrosschainOrderBridge = async (
    { destToken, destChainId, beneficiaryType, deltaPrice },
    requestParams
  ) => {
    assert(
      chainId !== destChainId,
      '`destChainId` must be different from `chainId` for crosschain Order.bridge'
    );

    const getMulticallHandler = async (chainId: number) => {
      const multicallHandlersMap = await getMulticallHandlers(requestParams);
      const multicallHandler = multicallHandlersMap[chainId];

      assert(
        multicallHandler,
        `Multicall handler not found for chain ${chainId}`
      );

      return multicallHandler;
    };

    const { bridge, orderChanges } = await getDeltaBridgeAndDestToken({
      destTokenDestChain: destToken,
      destChainId: destChainId,
      destTokenSrcChain: deltaPrice.destToken,
      srcChainId: chainId,
      bridgeFee: deltaPrice.bridgeFee,
      beneficiaryType,
      getMulticallHandler,
    });

    return {
      bridge,
      orderChanges,
    };
  };

  return {
    buildCrosschainOrderBridge,
  };
};
