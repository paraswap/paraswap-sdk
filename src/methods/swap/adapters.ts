import type { ConstructFetchInput, ParaSwapVersionUnion } from '../../types';
import { constructSearchString } from '../../helpers/misc';
import { API_URL, DEFAULT_VERSION } from '../../constants';

type Adapter = {
  adapter: string;
  index: number;
};

type AdaptersAsObject = Record<string, Adapter[]>;
type AdaptersAsList = { name: string; adapters: Adapter[] }[];
type AdaptersAsStrings = string[];

type OptionsObject = { type: 'object' };
type OptionsList = { type: 'list'; namesOnly?: false };
type OptionsListNamesOnly = { type: 'list'; namesOnly: true };

export type AllAdaptersOptions =
  | OptionsObject
  | OptionsList
  | OptionsListNamesOnly;

interface GetAdaptersFunc {
  (options: OptionsObject, signal?: AbortSignal): Promise<AdaptersAsObject>;
  (options: OptionsList, signal?: AbortSignal): Promise<AdaptersAsList>;
  (
    options: OptionsListNamesOnly,
    signal?: AbortSignal
  ): Promise<AdaptersAsStrings>;
  (options: AllAdaptersOptions, signal?: AbortSignal): Promise<
    AdaptersAsObject | AdaptersAsList | AdaptersAsStrings
  >;
}

export type GetAdaptersFunctions = {
  getAdapters: GetAdaptersFunc;
};

type SearchStringParams = {
  network: number;
  namesOnly?: boolean;
  version?: ParaSwapVersionUnion;
};

export const constructGetAdapters = ({
  apiURL = API_URL,
  version = DEFAULT_VERSION,
  chainId,
  fetcher,
}: ConstructFetchInput): GetAdaptersFunctions => {
  async function getAdapters(
    options: OptionsObject,
    signal?: AbortSignal
  ): Promise<AdaptersAsObject>;
  async function getAdapters(
    options: OptionsList,
    signal?: AbortSignal
  ): Promise<AdaptersAsList>;
  async function getAdapters(
    options: OptionsListNamesOnly,
    signal?: AbortSignal
  ): Promise<AdaptersAsStrings>;
  async function getAdapters(
    options: AllAdaptersOptions,
    signal?: AbortSignal
  ): Promise<AdaptersAsObject | AdaptersAsList | AdaptersAsStrings>;
  async function getAdapters(
    options: AllAdaptersOptions,
    signal?: AbortSignal
  ): Promise<AdaptersAsObject | AdaptersAsList | AdaptersAsStrings> {
    // always pass explicit type to make sure UrlSearchParams are correct
    const query = constructSearchString<SearchStringParams>({
      network: chainId,
      version,
      namesOnly:
        !!options && 'namesOnly' in options ? options.namesOnly : undefined,
    });

    const fetchURL = `${apiURL}/adapters${
      options?.type === 'list' ? '/list' : ''
    }${query}` as const;

    const data = await fetcher<
      AdaptersAsObject | AdaptersAsList | AdaptersAsStrings
    >({
      url: fetchURL,
      method: 'GET',
      signal,
    });

    return data;
  }

  return { getAdapters };
};
