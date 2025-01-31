import { API_URL } from '../../constants';
import { constructToken } from '../../helpers/token';
import type {
  RequestParameters,
  ConstructFetchInput,
  Token,
  TokensApiResponse,
} from '../../types';

type GetTokens = (extra?: RequestParameters) => Promise<Token[]>;

export type GetTokensFunctions = {
  getTokens: GetTokens;
};

export const constructGetTokens = ({
  apiURL = API_URL,
  chainId,
  fetcher,
}: ConstructFetchInput): GetTokensFunctions => {
  const fetchURL = `${apiURL}/tokens/${chainId}` as const;

  const getTokens: GetTokens = async (requestParams) => {
    const data = await fetcher<TokensApiResponse>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });

    const tokens = data.tokens.map(constructToken);
    return tokens;
  };

  return { getTokens };
};
