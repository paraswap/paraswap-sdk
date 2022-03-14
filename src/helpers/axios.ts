import { FetcherFunction } from '../types';
import type Axios from 'axios';
import { FetcherError } from './misc';

export const constructFetcher =
  (axios: typeof Axios): FetcherFunction =>
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
