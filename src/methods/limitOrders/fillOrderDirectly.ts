import type { ExtractAbiMethodNames } from '../../helpers/misc';
import type { ConstructProviderFetchInput, TxSendOverrides } from '../../types';
import type { OrderData } from './buildOrder';
import { constructGetSpender } from '../swap/spender';
import { sanitizeOrderData } from './helpers/misc';

export type FillOrderDirectlyFunctions<T> = {
  fillOrderDirectly: FillOrderDirectly<T>;
};

export type FillOrderDirectly<T> = (
  order: OrderData,
  signature: string,
  overrides?: TxSendOverrides,
  signal?: AbortSignal
) => Promise<T>;

// much smaller than the whole AugustusRFQ_ABI
const MinAugustusRFQAbi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'nonceAndMeta',
            type: 'uint256',
          },
          {
            internalType: 'uint128',
            name: 'expiry',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'makerAsset',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'takerAsset',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'maker',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'taker',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'makerAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'takerAmount',
            type: 'uint256',
          },
        ],
        internalType: 'struct AugustusRFQ.Order',
        name: 'order',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'fillOrder',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

type FillOrderMethods = ExtractAbiMethodNames<typeof MinAugustusRFQAbi>;

// returns whatever `contractCaller` returns
// to allow for better versatility
export function constructFillOrderDirectly<T>(
  options: ConstructProviderFetchInput<T, 'transactCall'>
): FillOrderDirectlyFunctions<T> {
  // getAugustusRFQ is cached internally for the same instance of SDK
  // so should persist across same apiUrl & network
  const { getAugustusRFQ } = constructGetSpender(options);

  const fillOrderDirectly: FillOrderDirectly<T> = async (
    order,
    signature,
    overrides = {},
    signal
  ) => {
    const AugustusRFQ = await getAugustusRFQ(signal);

    const sanitizedOrder = sanitizeOrderData(order);

    const res = await options.contractCaller.transactCall<FillOrderMethods>({
      address: AugustusRFQ,
      abi: MinAugustusRFQAbi,
      contractMethod: 'fillOrder',
      args: [sanitizedOrder, signature],
      overrides,
    });

    return res;
  };

  return { fillOrderDirectly };
}
