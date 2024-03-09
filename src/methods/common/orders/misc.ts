import type { LimitOrderFromApi } from '../../limitOrders/helpers/types';
import { ZERO_ADDRESS } from './buildOrderData';
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
export type OrderFillableBalanceFetchUrl<Kind extends OrderKind> =
  `${string}/${Kind}/fillablebalance/${number}`;

interface UrlByTypeFunction<Kind extends OrderKind> {
  (): MinFetchUrl<Kind>;
  (type: 'LIMIT'): BaseFetchUrl<Kind, 'LIMIT'>;
  (type: 'P2P'): BaseFetchUrl<Kind, 'P2P'>;
  (type: OrderType): BaseFetchUrl<Kind>;
  (type: 'fillablebalance'): OrderFillableBalanceFetchUrl<Kind>;
  (type?: OrderType | 'fillablebalance'):
    | BaseFetchUrl<Kind>
    | MinFetchUrl<Kind>
    | OrderFillableBalanceFetchUrl<Kind>;
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
    function urlGetter(
      type: 'fillablebalance'
    ): OrderFillableBalanceFetchUrl<Kind>;
    function urlGetter(): MinFetchUrl<Kind>;
    function urlGetter(
      type?: OrderType | 'fillablebalance'
    ):
      | BaseFetchUrl<Kind>
      | MinFetchUrl<Kind>
      | OrderFillableBalanceFetchUrl<Kind> {
      if (!type) return `${apiURL}/${orderKind}/order` as const;

      if (type === 'fillablebalance')
        return `${apiURL}/${orderKind}/fillablebalance/${chainId}` as const;

      const orderURLpart = type === 'LIMIT' ? 'orders' : 'p2p';
      return `${apiURL}/${orderKind}/${orderURLpart}/${chainId}` as const;
    }

    return urlGetter;
  };
}

// orders with taker = EOA address
// that can't be filled through AugustusSwapper,
// only through AugustusRFQ
export function isOrderFillableDirectlyOnRFQOnly(
  order: Pick<LimitOrderFromApi, 'taker' | 'takerFromMeta'>
): boolean {
  // with 0x taker fillable by anyone
  if (order.taker === ZERO_ADDRESS) return false;

  // same intended EOA taker and msg.sender taker
  return order.taker.toLowerCase() === order.takerFromMeta.toLowerCase();
}
