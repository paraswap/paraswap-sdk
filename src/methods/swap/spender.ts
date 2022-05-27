import { API_URL } from '../../constants';
import type { ConstructFetchInput, Address } from '../../types';

type GetSpender = (signal?: AbortSignal) => Promise<Address>;

export type GetSpenderFunctions = {
  getSpender: GetSpender;
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

  const getSpender: GetSpender = async (signal) => {
    const data = await fetcher<AdaptersContractsResult>({
      url: fetchURL,
      method: 'GET',
      signal,
    });

    return data.TokenTransferProxy;
  };

  return { getSpender };
};
