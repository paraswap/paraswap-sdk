import { ConstructFetchInput } from "./types"
import { constructSearchString } from "./helpers/misc"

type Adapter = {
    adapter: string;
    index: number;
}

type AdaptersAsObject  = Record<string, Adapter[]>
type AdaptersAsList = {name: string, adapters: Adapter[]}[]
type AdaptersAsStrings = string[]
type AllAdaptersOptions =  { type: 'object' } | {type: 'list', namesOnly?: false} |{type: 'list', namesOnly: true}

export type ConstructAdaptersFunctions = {
   getAdapters: 
        | ((options: { type: 'object' }) => Promise<AdaptersAsObject>) 
        | ((options: { type: 'list'; namesOnly: false }) => Promise<AdaptersAsList>)
        | ((options: { type: 'list'; namesOnly: true }) => Promise<AdaptersAsStrings>)
}

export const constructGetAdapters = (
    { apiURL, network, fetcher}: ConstructFetchInput
): ConstructAdaptersFunctions => {
    async function getAdapters(options: {type: 'object'}) : Promise<AdaptersAsObject>
    async function getAdapters(options: {type: 'list', namesOnly: false}):  Promise<AdaptersAsList>
    async function getAdapters(options: {type: 'list', namesOnly: true}): Promise<AdaptersAsStrings>
    async function getAdapters(options: AllAdaptersOptions) : Promise<AdaptersAsObject | AdaptersAsList | AdaptersAsStrings> {
      const query = constructSearchString({
        network,
        namesOnly: !!options && 'namesOnly' in options ? options.namesOnly : undefined
     })
    const fetchURL = `${apiURL}/adapters${options?.type === 'list' ? '/list':''}${query}`
 
    const data = await fetcher<AdaptersAsObject | AdaptersAsList | AdaptersAsStrings>({
      url: fetchURL,
      method: "GET",
    });


    return data;
  };

  return { getAdapters };
}