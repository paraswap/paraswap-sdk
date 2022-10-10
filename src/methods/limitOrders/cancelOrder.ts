import type { ExtractAbiMethodNames } from '../../helpers/misc';
import type { ConstructProviderFetchInput, TxSendOverrides } from '../../types';
import { constructGetSpender } from '../swap/spender';

type CancelOrder<T> = (
  orderHash: string,
  overrides?: TxSendOverrides,
  signal?: AbortSignal
) => Promise<T>;

type CancelOrderBulk<T> = (
  orderHashes: string[],
  overrides?: TxSendOverrides,
  signal?: AbortSignal
) => Promise<T>;

export type CancelLimitOrderFunctions<T> = {
  cancelLimitOrder: CancelOrder<T>;
  cancelLimitOrderBulk: CancelOrderBulk<T>;
};

// much smaller than the whole ERC20_ABI
const MinAugustusRFQAbi = [
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'orderHash',
        type: 'bytes32',
      },
    ],
    name: 'cancelOrder',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32[]',
        name: 'orderHashes',
        type: 'bytes32[]',
      },
    ],
    name: 'cancelOrders',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

type AvailableMethods = ExtractAbiMethodNames<typeof MinAugustusRFQAbi>;

// returns whatever `contractCaller` returns
// to allow for better versatility
export const constructCancelLimitOrder = <T>(
  options: ConstructProviderFetchInput<T, 'transactCall'>
): CancelLimitOrderFunctions<T> => {
  // getAugustusRFQ is cached internally for the same instance of SDK
  // so should persist across same apiUrl & network
  const { getAugustusRFQ } = constructGetSpender(options);

  const cancelLimitOrder: CancelOrder<T> = async (
    orderHash,
    overrides = {},
    signal
  ) => {
    const verifyingContract = await getAugustusRFQ(signal);

    const res = await options.contractCaller.transactCall<AvailableMethods>({
      // @CHECK if verifyingContract is the one we need to approve
      // maybe a Proxy in-between
      address: verifyingContract,
      abi: MinAugustusRFQAbi,
      contractMethod: 'cancelOrder',
      args: [orderHash],
      overrides,
    });

    return res;
  };

  const cancelLimitOrderBulk: CancelOrderBulk<T> = async (
    orderHashes,
    overrides = {},
    signal
  ) => {
    const verifyingContract = await getAugustusRFQ(signal);

    const res = await options.contractCaller.transactCall<AvailableMethods>({
      // @CHECK if verifyingContract is the one we need to approve
      // maybe a Proxy in-between
      address: verifyingContract,
      abi: MinAugustusRFQAbi,
      contractMethod: 'cancelOrders',
      args: [orderHashes],
      overrides,
    });

    return res;
  };

  return {
    cancelLimitOrder,
    cancelLimitOrderBulk,
  };
};
