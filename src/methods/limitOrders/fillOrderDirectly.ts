import type { ExtractAbiMethodNames } from '../../helpers/misc';
import type { ConstructProviderFetchInput, TxSendOverrides } from '../../types';
import type { OrderData } from './buildOrder';
import { constructGetSpender } from '../swap/spender';
import { sanitizeOrderData } from './helpers/misc';
import { encodeEIP_2612PermitFunctionInput } from '../common/orders/encoding';

export type FillOrderDirectlyFunctions<T> = {
  fillOrderDirectly: FillOrderDirectly<T>;
};

export type FillOrderDirectly<T> = (
  orderFillData: {
    order: OrderData;
    signature: string;
    /** @description Permit1 or DAI Permit by taker for Taker Asset with AugustusRFQ as spender */
    takerPermit?: {
      signature: string;
      deadline: number;
      value?: string;
    };
  },
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
      {
        internalType: 'uint256',
        name: 'takerTokenFillAmount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'permitTakerAsset',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'permitMakerAsset',
        type: 'bytes',
      },
    ],
    name: 'partialFillOrderWithTargetPermit',
    outputs: [
      {
        internalType: 'uint256',
        name: 'makerTokenFilledAmount',
        type: 'uint256',
      },
    ],
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
    { order, signature, takerPermit },
    overrides = {},
    signal
  ) => {
    const AugustusRFQ = await getAugustusRFQ(signal);

    const sanitizedOrder = sanitizeOrderData(order);

    if (!takerPermit || takerPermit.signature === '0x') {
      const res = await options.contractCaller.transactCall<FillOrderMethods>({
        address: AugustusRFQ,
        abi: MinAugustusRFQAbi,
        contractMethod: 'fillOrder',
        args: [sanitizedOrder, signature],
        overrides,
      });

      return res;
    }

    // encoded TakerAsset.permit() function params by taker with AugustusRFQ as spender, Permit1 and DAI Permit only
    const permitTakerAsset = encodeEIP_2612PermitFunctionInput({
      owner: order.taker,
      spender: AugustusRFQ,
      value: takerPermit.value || order.takerAmount, // can use permit with a bigger value, fallback to exact Order takerAmount
      deadline: takerPermit.deadline,
      permitSignature: takerPermit.signature,
    });

    const res = await options.contractCaller.transactCall<FillOrderMethods>({
      address: AugustusRFQ,
      abi: MinAugustusRFQAbi,
      contractMethod: 'partialFillOrderWithTargetPermit',
      args: [
        sanitizedOrder, // order
        signature, // order.signature
        order.takerAmount, // takerTokenFillAmount, can even partially fill
        order.taker, // target
        permitTakerAsset,
        '0x', // permitMakerAsset, unused because hard to account for changing nonce for long running Orders
      ],
      overrides,
    });

    return res;
  };

  return { fillOrderDirectly };
}
