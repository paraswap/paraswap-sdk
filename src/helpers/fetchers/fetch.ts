import type { FetcherFunction } from '../../types';
import { FetcherError } from '../misc';

// @TODO may not work with node-fetch
type Fetch = typeof fetch;

export const constructFetcher =
  (fetch: Fetch): FetcherFunction =>
  async (params) => {
    try {
      const { url, method, signal } = params;
      const body = method === 'POST' ? JSON.stringify(params.data) : null;
      const headers =
        method === 'POST' && body
          ? {
              'Content-Type': 'application/json',
            }
          : undefined;

      const response = await fetch(url, { method, body, signal, headers });

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
