import { API_URL } from '../../constants';
import { runOnceAndCache } from '../../helpers/misc';
import type {
  Address,
  ConstructFetchInput,
  RequestParameters,
} from '../../types';

// chainId -> multicallHandler
export type MulticallHandlersResponse = Record<number, Address>;

type GetMulticallHandlers = (
  requestParams?: RequestParameters
) => Promise<MulticallHandlersResponse>;

export type GetMulticallHandlersFunctions = {
  getMulticallHandlers: GetMulticallHandlers;
};

export const constructGetMulticallHandlers = ({
  apiURL = API_URL,
  fetcher,
}: ConstructFetchInput): GetMulticallHandlersFunctions => {
  const multicallHandlersUrl =
    `${apiURL}/delta/prices/multicall-handlers` as const;

  const _getMulticallHandlers: GetMulticallHandlers = async (requestParams) => {
    const data = await fetcher<MulticallHandlersResponse>({
      url: multicallHandlersUrl,
      method: 'GET',
      requestParams,
    });

    return data;
  };

  // cached for the same instance of `{getMulticallHandlers} = constructGetMulticallHandlers()`
  // so should persist across same apiUrl & network (and response is even network agnostic)
  const getMulticallHandlers = runOnceAndCache(_getMulticallHandlers);

  return {
    getMulticallHandlers,
  };
};
