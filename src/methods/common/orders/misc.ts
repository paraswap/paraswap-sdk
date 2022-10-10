import type { OrderType } from './types';

type GetBaseFetchUrlInput = {
  apiURL: string;
  chainId: number;
};

export type BaseFetchUrlInputConstructor<Kind extends OrderKind> = (
  params: GetBaseFetchUrlInput
) => UrlByTypeFunction<Kind>;

type OrderType2URLPart = {
  LIMIT: 'orders';
  P2P: 'p2p';
};

type OrderKind = 'nft' | 'ft';

export type BaseFetchUrl<
  Kind extends OrderKind,
  Type extends OrderType = OrderType
> = `${string}/${Kind}/${OrderType2URLPart[Type]}/${number}`;

export type MinFetchUrl<Kind extends OrderKind> = `${string}/${Kind}/order`;

interface UrlByTypeFunction<Kind extends OrderKind> {
  (): MinFetchUrl<Kind>;
  (type: 'LIMIT'): BaseFetchUrl<Kind, 'LIMIT'>;
  (type: 'P2P'): BaseFetchUrl<Kind, 'P2P'>;
  (type: OrderType): BaseFetchUrl<Kind>;
  (type?: OrderType): BaseFetchUrl<Kind> | MinFetchUrl<Kind>;
}

export function baseFetchUrlGetterFactory<Kind extends OrderKind>(
  orderKind: Kind
): BaseFetchUrlInputConstructor<Kind> {
  return function constructBaseFetchUrlGetter({
    chainId,
    apiURL,
  }: GetBaseFetchUrlInput): UrlByTypeFunction<Kind> {
    function urlGetter(type: 'LIMIT'): BaseFetchUrl<Kind, 'LIMIT'>;
    function urlGetter(type: 'P2P'): BaseFetchUrl<Kind, 'P2P'>;
    function urlGetter(type: OrderType): BaseFetchUrl<Kind>;
    function urlGetter(): MinFetchUrl<Kind>;
    function urlGetter(
      type?: OrderType
    ): BaseFetchUrl<Kind> | MinFetchUrl<Kind> {
      if (!type) return `${apiURL}/${orderKind}/order` as const;

      const orderURLpart = type === 'LIMIT' ? 'orders' : 'p2p';
      return `${apiURL}/${orderKind}/${orderURLpart}/${chainId}` as const;
    }

    return urlGetter;
  };
}
