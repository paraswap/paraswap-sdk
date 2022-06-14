import { API_URL } from '../../constants';
import type { ConstructFetchInput } from '../../types';
import { constructBaseFetchUrlGetter, PostOrderURLs } from './helpers/misc';
import type {
  NftOrderToSend,
  NftOrderType,
  NftOrderFromAPI,
  NftOrderApiResponse,
} from './helpers/types';

type PostNFTOrder = (
  NFTOrderWithSignatureAndPermit: NftOrderToSend,
  signal?: AbortSignal
) => Promise<NftOrderFromAPI>;

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
    NFTOrderWithSignatureAndPermit: NftOrderToSend,
    type: NftOrderType,
    signal?: AbortSignal
  ): Promise<NftOrderFromAPI> => {
    const fetchURL = getBaseFetchURLByOrderType(type);

    // @TODO check API return matches
    const { order: newOrder } = await fetcher<
      NftOrderApiResponse,
      PostOrderURLs
    >({
      url: fetchURL,
      method: 'POST',
      data: NFTOrderWithSignatureAndPermit,
      signal,
    });
    console.log('🚀 ~ file: postOrder.ts ~ created new NFT Order', newOrder);

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
