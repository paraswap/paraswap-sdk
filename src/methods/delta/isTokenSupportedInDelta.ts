import { API_URL } from '../../constants';
import { constructSearchString } from '../../helpers/misc';
import type {
  Address,
  ConstructFetchInput,
  RequestParameters,
} from '../../types';

type TokenSupportedInDeltaResponse = { supported: boolean };
type IsTokenSupportedInDeltaQueryOptions = {
  token: Address;
  chainId: number;
};

type IsTokenSupportedInDelta = (
  token: Address,
  requestParams?: RequestParameters
) => Promise<boolean>;

export type IsTokenSupportedInDeltaFunctions = {
  isTokenSupportedInDelta: IsTokenSupportedInDelta;
};

export const constructIsTokenSupportedInDelta = ({
  apiURL = API_URL,
  chainId,
  fetcher,
}: ConstructFetchInput): IsTokenSupportedInDeltaFunctions => {
  const bridgeInfoUrl = `${apiURL}/delta/prices/is-token-supported` as const;

  const isTokenSupportedInDelta: IsTokenSupportedInDelta = async (
    token,
    requestParams
  ) => {
    const search = constructSearchString<IsTokenSupportedInDeltaQueryOptions>({
      token,
      chainId,
    });

    const fetchURL = `${bridgeInfoUrl}/${search}` as const;

    const data = await fetcher<TokenSupportedInDeltaResponse>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });

    return data.supported;
  };

  return {
    isTokenSupportedInDelta,
  };
};
