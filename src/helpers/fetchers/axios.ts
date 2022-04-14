import type { FetcherFunction } from '../../types';
import type AxiosStatic from 'axios';
import { FetcherError } from '../misc';

export const constructFetcher =
  (axios: typeof AxiosStatic): FetcherFunction =>
  async (params) => {
    try {
      const { data } = await axios.request(params);

      return data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        // attach a more meaningful message and other props
        throw new FetcherError(error);
      }

      throw error;
    }
  };
