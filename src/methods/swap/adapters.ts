import type {
  ConstructFetchInput,
  APIVersion,
  RequestParameters,
} from '../../types';
import { constructSearchString } from '../../helpers/misc';
import { API_URL, DEFAULT_VERSION } from '../../constants';

type AdaptersAsStrings = string[];

export type GetAdaptersFunctions = {
  getAdapters: (
    requestParams?: RequestParameters
  ) => Promise<AdaptersAsStrings>;
};

type SearchStringParams = {
  network: number;
  version?: APIVersion;
};

export const constructGetAdapters = ({
  apiURL = API_URL,
  version = DEFAULT_VERSION,
  chainId,
  fetcher,
}: ConstructFetchInput): GetAdaptersFunctions => {
  const getAdapters: GetAdaptersFunctions['getAdapters'] = async (
    requestParams
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
      requestParams,
    });

    return data;
  };

  return { getAdapters };
};
