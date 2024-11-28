import { API_URL } from '../../constants';
import type { ConstructFetchInput } from '../../types';
import { DeltaAuctionOrder, ParaswapDeltaAuction } from './helpers/types';

export type DeltaOrderToPost = {
  partner?: string;
  order: DeltaAuctionOrder;
  signature: string;
  chainId: number;
  partiallyFillable?: boolean;
};

export type PostDeltaOrderParams = Omit<DeltaOrderToPost, 'chainId'>;

type DeltaOrderApiResponse = ParaswapDeltaAuction;

type PostDeltaOrder = (
  postData: PostDeltaOrderParams,
  signal?: AbortSignal
) => Promise<DeltaOrderApiResponse>;

export type PostDeltaOrderFunctions = {
  postDeltaOrder: PostDeltaOrder;
};

export const constructPostDeltaOrder = ({
  apiURL = API_URL,
  chainId,
  fetcher,
}: ConstructFetchInput): PostDeltaOrderFunctions => {
  const postOrderUrl = `${apiURL}/delta/orders` as const;

  const postDeltaOrder: PostDeltaOrder = (postData, signal) => {
    const deltaOrderToPost: DeltaOrderToPost = { ...postData, chainId };

    return fetcher<DeltaOrderApiResponse>({
      url: postOrderUrl,
      method: 'POST',
      data: deltaOrderToPost,
      signal,
    });
  };

  return { postDeltaOrder };
};
