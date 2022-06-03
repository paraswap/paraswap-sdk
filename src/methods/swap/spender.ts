import { API_URL } from '../../constants';
import type { ConstructFetchInput, Address } from '../../types';

type GetSpender = (signal?: AbortSignal) => Promise<Address>;
type GetContracts = (signal?: AbortSignal) => Promise<AdaptersContractsResult>;

export type GetSpenderFunctions = {
  getSpender: GetSpender;
  getAugustusSwapper: GetSpender;
  getContracts: GetContracts;
};

interface AdaptersContractsResult {
  AugustusSwapper: string;
  TokenTransferProxy: string;
}

export const constructGetSpender = ({
  apiURL = API_URL,
  chainId,
  fetcher,
}: ConstructFetchInput): GetSpenderFunctions => {
  const fetchURL = `${apiURL}/adapters/contracts?network=${chainId}`;

  const getContracts: GetContracts = async (signal) => {
    const data = await fetcher<AdaptersContractsResult>({
      url: fetchURL,
      method: 'GET',
      signal,
    });

    return data;
  };

  const getSpender: GetSpender = async (signal) => {
    const { TokenTransferProxy } = await getContracts(signal);
    return TokenTransferProxy;
  };

  const getAugustusSwapper: GetSpender = async (signal) => {
    const { AugustusSwapper } = await getContracts(signal);
    return AugustusSwapper;
  };

  return { getContracts, getSpender, getAugustusSwapper };
};
