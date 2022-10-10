import type { ConstructFetchInput } from '../../types';
import { constructSearchString } from '../../helpers/misc';
import { API_URL } from '../../constants';

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
};

export const constructGetAdapters = ({
  apiURL = API_URL,
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
      namesOnly:
        !!options && 'namesOnly' in options ? options.namesOnly : undefined,
    });

    const fetchURL = `${apiURL}/adapters${
      options?.type === 'list' ? '/list' : ''
    }${query}`;

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
