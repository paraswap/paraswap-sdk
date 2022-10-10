import { API_URL } from '../../constants';
import { runOnceAndCache } from '../../helpers/misc';
import type { ConstructFetchInput, Address } from '../../types';

export type GetSpender = (signal?: AbortSignal) => Promise<Address>;
type GetContracts = (signal?: AbortSignal) => Promise<AdaptersContractsResult>;

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
}

export const constructGetSpender = ({
  apiURL = API_URL,
  chainId,
  fetcher,
}: ConstructFetchInput): GetSpenderFunctions => {
  const fetchURL = `${apiURL}/adapters/contracts?network=${chainId}`;

  const _getContracts: GetContracts = async (signal) => {
    const data = await fetcher<AdaptersContractsResult>({
      url: fetchURL,
      method: 'GET',
      signal,
    });

    return data;
  };

  // cached for the same instance of `{getContracts, getSpender, getAugustusSwapper, getAugustusRFQ} = constructGetSpender()`
  // so should persist across same apiUrl & network
  const getContracts = runOnceAndCache(_getContracts);

  const getSpender: GetSpender = async (signal) => {
    const { TokenTransferProxy } = await getContracts(signal);
    return TokenTransferProxy;
  };

  const getAugustusSwapper: GetSpender = async (signal) => {
    const { AugustusSwapper } = await getContracts(signal);
    return AugustusSwapper;
  };

  const getAugustusRFQ: GetSpender = async (signal) => {
    const { AugustusRFQ } = await getContracts(signal);
    return AugustusRFQ;
  };

  return { getContracts, getSpender, getAugustusSwapper, getAugustusRFQ };
};
