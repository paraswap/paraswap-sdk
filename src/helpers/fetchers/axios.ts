import type { ExtraFetchParams, FetcherFunction } from '../../types';
import type { AxiosStatic } from 'axios';
import { FetcherError } from '../misc';

export type AxiosRequirement = Pick<AxiosStatic, 'request' | 'isAxiosError'>;

export const constructFetcher =
  (axios: AxiosRequirement, extra?: ExtraFetchParams): FetcherFunction =>
  async (params) => {
    try {
      const { requestParams, ...rest } = params;
      // adding apiKey to headers if it's provided
      const headers = extra?.apiKey
        ? {
            'X-API-KEY': extra.apiKey,
            ...rest.headers,
            ...requestParams?.headers,
          }
        : { ...rest.headers, ...requestParams?.headers };

      const allParams = { ...rest, ...requestParams, headers };

      const { data } = await axios.request(allParams);

      return data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        // attach a more meaningful message and other props
        throw new FetcherError(error);
      }

      throw error;
    }
  };
