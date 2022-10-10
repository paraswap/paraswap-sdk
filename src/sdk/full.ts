import type { ApproveTokenFunctions } from '../methods/swap/approve';
import type { GetBalancesFunctions } from '../methods/swap/balance';
import type { GetSpenderFunctions } from '../methods/swap/spender';
import type { GetAdaptersFunctions } from '../methods/swap/adapters';
import type { GetRateFunctions } from '../methods/swap/rates';
import type { GetTokensFunctions } from '../methods/swap/token';
import type { BuildTxFunctions } from '../methods/swap/transaction';
import type { SDKConfig } from './partial';
import { constructSwapSDK } from '../methods/swap';
import {
  constructAllLimitOrdersHandlers,
  LimitOrderHandlers,
} from '../methods/limitOrders';
import {
  constructAllNFTOrdersHandlers,
  NFTOrderHandlers,
} from '../methods/nftOrders';

export type SwapSDKMethods<TxResponse> = GetBalancesFunctions &
  GetTokensFunctions &
  GetSpenderFunctions &
  ApproveTokenFunctions<TxResponse> &
  BuildTxFunctions &
  GetAdaptersFunctions &
  GetRateFunctions;

export type AllSDKMethods<TxResponse> = {
  swap: SwapSDKMethods<TxResponse>;
  limitOrders: LimitOrderHandlers<TxResponse>;
  nftOrders: NFTOrderHandlers<TxResponse>;
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

  return { swap, limitOrders, nftOrders };
};
