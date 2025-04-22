import type { ExtraFetchParams, FetcherFunction } from '../../types';
import { FetcherError } from '../misc';

// @TODO may not work with node-fetch
type Fetch = typeof fetch;

export const constructFetcher =
  (fetch: Fetch, extra?: ExtraFetchParams): FetcherFunction =>
  async (params) => {
    try {
      const { url, method, requestParams } = params;
      const body = method === 'POST' ? JSON.stringify(params.data) : null;
      // Only JSON response for POST requests
      const POSTheaders =
        method === 'POST' && body
          ? {
              'Content-Type': 'application/json',
            }
          : undefined;

      // adding apiKey to headers if it's provided
      const apiHeaders = extra?.apiKey
        ? { 'X-API-KEY': extra.apiKey }
        : undefined;

      // all headers combined
      const headers =
        POSTheaders || apiHeaders || params.headers || requestParams?.headers
          ? {
              ...apiHeaders,
              ...POSTheaders,
              ...params.headers,
              ...requestParams?.headers,
            }
          : undefined;

      const response = await fetch(url, {
        method,
        body,
        ...requestParams,
        headers,
      });

      const data = await response.json();

      if (!response.ok) {
        // @TODO figure out if this works analogous to AxiosError, especially code ==? status
        throw new FetcherError({
          code: String(response.status),
          response: {
            data,
            status: response.status,
            statusText: response.statusText,
            headers: Object.fromEntries(response.headers.entries()),
            config: { url, method },
          },
          message: response.statusText,
          isAxiosError: false,
        });
      }

      return data;
    } catch (error: any) {
      if (error instanceof FetcherError) throw error;
      throw new FetcherError(error);
    }
  };
