import { API_URL } from '../../constants';
import { constructToken } from '../../helpers/token';
import type {
  ConstructFetchInput,
  Token,
  TokensApiResponse,
} from '../../types';

type GetTokens = (signal?: AbortSignal) => Promise<Token[]>;

export type GetTokensFunctions = {
  getTokens: GetTokens;
};

export const constructGetTokens = ({
  apiURL = API_URL,
  chainId,
  fetcher,
}: ConstructFetchInput): GetTokensFunctions => {
  const fetchURL = `${apiURL}/tokens/${chainId}`;

  const getTokens: GetTokens = async (signal) => {
    const data = await fetcher<TokensApiResponse>({
      url: fetchURL,
      method: 'GET',
      signal,
    });

    const tokens = data.tokens.map(constructToken);
    return tokens;
  };

  return { getTokens };
};
