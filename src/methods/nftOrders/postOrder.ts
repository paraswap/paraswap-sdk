import { API_URL } from '../../constants';
import type { ConstructFetchInput } from '../../types';
import { constructBaseFetchUrlGetter, PostOrderURLs } from './helpers/misc';
import type {
  NFTOrderToSend,
  NFTOrderType,
  NFTOrderFromAPI,
  NFTOrderApiResponse,
} from './helpers/types';

type PostNFTOrder = (
  NFTOrderWithSignatureAndPermit: NFTOrderToSend,
  signal?: AbortSignal
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
    signal?: AbortSignal
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
      signal,
    });

    return { ...newOrder };
  };

  const postNFTLimitOrder: PostNFTOrder = (
    NFTOrderWithSignatureAndPermit,
    signal
  ) => {
    return postTypedOrder(NFTOrderWithSignatureAndPermit, 'LIMIT', signal);
  };

  const postNFTP2POrder: PostNFTOrder = (
    NFTOrderWithSignatureAndPermit,
    signal
  ) => {
    return postTypedOrder(NFTOrderWithSignatureAndPermit, 'P2P', signal);
  };

  return { postNFTLimitOrder, postNFTP2POrder };
};
