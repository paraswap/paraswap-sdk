import type { SDKConfig } from './partial';
import { constructSwapSDK, SwapSDKMethods } from '../methods/swap';
import {
  constructAllLimitOrdersHandlers,
  LimitOrderHandlers,
} from '../methods/limitOrders';
import {
  constructAllNFTOrdersHandlers,
  NFTOrderHandlers,
} from '../methods/nftOrders';
import {
  constructAllDeltaOrdersHandlers,
  DeltaOrderHandlers,
} from '../methods/delta';

export type AllSDKMethods<TxResponse> = {
  swap: SwapSDKMethods<TxResponse>;
  limitOrders: LimitOrderHandlers<TxResponse>;
  nftOrders: NFTOrderHandlers<TxResponse>;
  delta: DeltaOrderHandlers<TxResponse>;
};

/** @description construct SDK with every method, for swap and limitOrders */
export const constructFullSDK = <TxResponse = any>(
  config: SDKConfig<TxResponse>
): AllSDKMethods<TxResponse> => {
  // include all available functions
  const swap: SwapSDKMethods<TxResponse> = constructSwapSDK(config);
  const limitOrders: LimitOrderHandlers<TxResponse> =
    constructAllLimitOrdersHandlers(config);
  const nftOrders: NFTOrderHandlers<TxResponse> =
    constructAllNFTOrdersHandlers(config);
  const delta: DeltaOrderHandlers<TxResponse> =
    constructAllDeltaOrdersHandlers(config);

  return { swap, limitOrders, nftOrders, delta };
};
