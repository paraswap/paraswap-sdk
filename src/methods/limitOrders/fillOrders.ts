// @TODO add fulfillLimitOrder
import { assert } from 'ts-essentials';
import { ExtractAbiMethodNames } from '../../helpers/misc';
import type { ConstructProviderFetchInput, TxSendOverrides } from '../../types';
import { OrderData } from './buildOrder';
import { chainId2verifyingContract } from './helpers/misc';

interface FillOrderInput {
  orderData: OrderData;
  signature: string;
}

type FillOrder<T> = (
  params: FillOrderInput,
  overrides?: TxSendOverrides
) => Promise<T>;

interface PartialFillOrderInput extends FillOrderInput {
  fillAmount: string;
}

type PartialFillOrder<T> = (
  params: PartialFillOrderInput,
  overrides?: TxSendOverrides
) => Promise<T>;

type CancelOrderBulk<T> = (
  orderHashes: string[],
  overrides?: TxSendOverrides
) => Promise<T>;

export type FillLimitOrderFunctions<T> = {
  fillLimitOrder: FillOrder<T>;
  partialFilllLimitOrder: PartialFillOrder<T>;
};

// much smaller than the whole ERC20_ABI
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

type AvailableMethods = ExtractAbiMethodNames<typeof MinAugustusRFQAbi>;

// returns whatever `contractCaller` returns
// to allow for better versatility
export const constructFillLimitOrder = <T>(
  options: ConstructProviderFetchInput<T, 'transactCall'>
): FillLimitOrderFunctions<T> => {
  const verifyingContract = chainId2verifyingContract[options.network];

  const fillLimitOrder: FillOrder<T> = async (
    { orderData, signature },
    overrides = {}
  ) => {
    assert(
      verifyingContract,
      `AugustusRFQ contract for Limit Orders not available on chain ${options.network}`
    );

    const res = await options.contractCaller.transactCall<AvailableMethods>({
      address: verifyingContract,
      abi: MinAugustusRFQAbi,
      contractMethod: 'fillOrder',
      args: [orderData, signature],
      overrides,
    });

    return res;
  };

  return {
    fillLimitOrder,
  };
};
