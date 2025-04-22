import { API_URL } from '../../constants';
import type { ConstructFetchInput, RequestParameters } from '../../types';
import { constructBaseFetchUrlGetter, PostOrderURLs } from './helpers/misc';
import type {
  NFTOrderToSend,
  NFTOrderType,
  NFTOrderFromAPI,
  NFTOrderApiResponse,
} from './helpers/types';

type PostNFTOrder = (
  NFTOrderWithSignatureAndPermit: NFTOrderToSend,
  requestParams?: RequestParameters
) => Promise<NFTOrderFromAPI>;

export type PostNFTOrderFunctions = {
  postNFTLimitOrder: PostNFTOrder;
  postNFTP2POrder: PostNFTOrder;
};

export const constructPostNFTOrder = ({
  apiURL = API_URL,
  chainId,
  fetcher,
}: ConstructFetchInput): PostNFTOrderFunctions => {
  const getBaseFetchURLByOrderType = constructBaseFetchUrlGetter({
    apiURL,
    chainId,
  });

  const postTypedOrder = async (
    NFTOrderWithSignatureAndPermit: NFTOrderToSend,
    type: NFTOrderType,
    requestParams?: RequestParameters
  ): Promise<NFTOrderFromAPI> => {
    const fetchURL = getBaseFetchURLByOrderType(type);

    // @TODO check API return matches
    const { order: newOrder } = await fetcher<
      NFTOrderApiResponse,
      PostOrderURLs
    >({
      url: fetchURL,
      method: 'POST',
      data: NFTOrderWithSignatureAndPermit,
      requestParams,
    });

    return { ...newOrder };
  };

  const postNFTLimitOrder: PostNFTOrder = (
    NFTOrderWithSignatureAndPermit,
    requestParams
  ) => {
    return postTypedOrder(
      NFTOrderWithSignatureAndPermit,
      'LIMIT',
      requestParams
    );
  };

  const postNFTP2POrder: PostNFTOrder = (
    NFTOrderWithSignatureAndPermit,
    requestParams
  ) => {
    return postTypedOrder(NFTOrderWithSignatureAndPermit, 'P2P', requestParams);
  };

  return { postNFTLimitOrder, postNFTP2POrder };
};
