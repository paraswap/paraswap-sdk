import type { ConstructFetchInput, ParaSwapVersionUnion } from '../../types';
import { constructSearchString } from '../../helpers/misc';
import { API_URL, DEFAULT_VERSION } from '../../constants';

type AdaptersAsStrings = string[];

export type GetAdaptersFunctions = {
  getAdapters: (signal?: AbortSignal) => Promise<AdaptersAsStrings>;
};

type SearchStringParams = {
  network: number;
  version?: ParaSwapVersionUnion;
};

export const constructGetAdapters = ({
  apiURL = API_URL,
  version = DEFAULT_VERSION,
  chainId,
  fetcher,
}: ConstructFetchInput): GetAdaptersFunctions => {
  const getAdapters: GetAdaptersFunctions['getAdapters'] = async (
    signal?: AbortSignal
  ): Promise<AdaptersAsStrings> => {
    // always pass explicit type to make sure UrlSearchParams are correct
    const query = constructSearchString<SearchStringParams>({
      network: chainId,
      version,
    });

    const fetchURL = `${apiURL}/adapters/list${query}` as const;

    const data = await fetcher<AdaptersAsStrings>({
      url: fetchURL,
      method: 'GET',
      signal,
    });

    return data;
  };

  return { getAdapters };
};
