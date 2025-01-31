import { API_URL, DEFAULT_VERSION } from '../../constants';
import { constructSearchString, runOnceAndCache } from '../../helpers/misc';
import type {
  ConstructFetchInput,
  Address,
  RequestParameters,
} from '../../types';

export type GetSpender = (
  requestParams?: RequestParameters
) => Promise<Address>;
type GetContracts = (
  requestParams?: RequestParameters
) => Promise<AdaptersContractsResult>;

export type GetSpenderFunctions = {
  getSpender: GetSpender;
  getAugustusSwapper: GetSpender;
  getAugustusRFQ: GetSpender;
  getContracts: GetContracts;
};

interface AdaptersContractsResult {
  AugustusSwapper: string;
  TokenTransferProxy: string;
  AugustusRFQ: string;
  Executors: {
    [key: `Executor${number}`]: string;
  };
  ParaswapDelta?: string; // only available on chains with Delta support
}

export const constructGetSpender = ({
  apiURL = API_URL,
  version = DEFAULT_VERSION,
  chainId,
  fetcher,
}: ConstructFetchInput): GetSpenderFunctions => {
  const search = constructSearchString<{ network: number; version: string }>({
    network: chainId,
    version,
  });

  const fetchURL = `${apiURL}/adapters/contracts${search}` as const;

  const _getContracts: GetContracts = async (requestParams) => {
    const data = await fetcher<AdaptersContractsResult>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });

    return data;
  };

  // cached for the same instance of `{getContracts, getSpender, getAugustusSwapper, getAugustusRFQ} = constructGetSpender()`
  // so should persist across same apiUrl & network
  const getContracts = runOnceAndCache(_getContracts);

  const getSpender: GetSpender = async (requestParams) => {
    const { TokenTransferProxy } = await getContracts(requestParams);
    return TokenTransferProxy;
  };

  const getAugustusSwapper: GetSpender = async (requestParams) => {
    const { AugustusSwapper } = await getContracts(requestParams);
    return AugustusSwapper;
  };

  const getAugustusRFQ: GetSpender = async (requestParams) => {
    const { AugustusRFQ } = await getContracts(requestParams);
    return AugustusRFQ;
  };

  return { getContracts, getSpender, getAugustusSwapper, getAugustusRFQ };
};
