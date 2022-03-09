import { ConstructFetchInput } from "./types"
import { constructSearchString } from "./helpers/misc"

type Adapter = {
  adapter: string;
  index: number;
}

type AdaptersAsObject = Record<string, Adapter[]>
type AdaptersAsList = { name: string, adapters: Adapter[] }[]
type AdaptersAsStrings = string[]

type OptionsObject = { type: 'object' }
type OptionsList = { type: 'list'; namesOnly?: false }
type OptionsListNamesOnly = { type: 'list'; namesOnly: true }

type AllAdaptersOptions = OptionsObject | OptionsList | OptionsListNamesOnly

interface GetAdapternsFunc {
  (options: OptionsObject): Promise<AdaptersAsObject>
  (options: OptionsList): Promise<AdaptersAsList>
  (options: OptionsListNamesOnly): Promise<AdaptersAsStrings>
}

export type ConstructAdaptersFunctions = {
  getAdapters: GetAdapternsFunc
}

export const constructGetAdapters = (
  { apiURL, network, fetcher }: ConstructFetchInput
): ConstructAdaptersFunctions => {
  async function getAdapters(options: OptionsObject): Promise<AdaptersAsObject>
  async function getAdapters(options: OptionsList): Promise<AdaptersAsList>
  async function getAdapters(options: OptionsListNamesOnly): Promise<AdaptersAsStrings>
  async function getAdapters(options: AllAdaptersOptions): Promise<AdaptersAsObject | AdaptersAsList | AdaptersAsStrings> {
    const query = constructSearchString({
      network,
      namesOnly: !!options && 'namesOnly' in options ? options.namesOnly : undefined
    })
    const fetchURL = `${apiURL}/adapters${options?.type === 'list' ? '/list' : ''}${query}`

    const data = await fetcher<AdaptersAsObject | AdaptersAsList | AdaptersAsStrings>({
      url: fetchURL,
      method: "GET",
    });


    return data;
  };

  return { getAdapters };
}