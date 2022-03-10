import { Address } from './token';
import { ConstructFetchInput } from './types';

type GetSpender = (signal?: AbortSignal) => Promise<Address>;

export type GetSpenderFunctions = {
  getSpender: GetSpender;
};

interface AdaptersContractsResult {
  AugustusSwapper: string;
  TokenTransferProxy: string;
}

export const constructGetSpender = ({
  apiURL,
  network,
  fetcher,
}: ConstructFetchInput): GetSpenderFunctions => {
  const fetchURL = `${apiURL}/adapters/contracts?network=${network}`;

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
