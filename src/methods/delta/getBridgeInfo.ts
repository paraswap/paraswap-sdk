import { API_URL } from '../../constants';
import type {
  Address,
  ConstructFetchInput,
  RequestParameters,
} from '../../types';

// srcChainId -> destChainId -> outputToken[]
// output Tokens that are supported for a srcChainId -> destChainId pair
export type BridgeInfoResponse = Record<number, Record<number, Address[]>>;

type GetBridgeInfo = (
  requestParams?: RequestParameters
) => Promise<BridgeInfoResponse>;

export type GetBridgeInfoFunctions = {
  getBridgeInfo: GetBridgeInfo;
};

export const constructGetBridgeInfo = ({
  apiURL = API_URL,
  fetcher,
}: ConstructFetchInput): GetBridgeInfoFunctions => {
  const bridgeInfoUrl = `${apiURL}/prices/bridge-info` as const;

  const getBridgeInfo: GetBridgeInfo = async (requestParams) => {
    const data = await fetcher<BridgeInfoResponse>({
      url: bridgeInfoUrl,
      method: 'GET',
      requestParams,
    });

    return data;
  };

  return {
    getBridgeInfo,
  };
};
