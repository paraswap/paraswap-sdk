import { assert } from 'ts-essentials';
import { ExtractAbiMethodNames } from '../../helpers/misc';
import type {
  ConstructProviderFetchInput,
  TxSendOverrides,
  Address,
  PriceString,
} from '../../types';
import { chainId2verifyingContract } from './helpers/misc';

type ApproveToken<T> = (
  amount: PriceString,
  tokenAddress: Address,
  overrides?: TxSendOverrides,
  signal?: AbortSignal
) => Promise<T>;

type ApproveTokenBulk<T> = (
  amount: PriceString,
  tokenAddresses: Address[],
  overrides?: TxSendOverrides
) => Promise<Awaited<T>[]>;

export type ApproveTokenFunctions<T> = {
  approveToken: ApproveToken<T>;
  approveTokenBulk: ApproveTokenBulk<T>;
};

type CancelOrder<T> = (
  orderHash: string,
  overrides?: TxSendOverrides,
  signal?: AbortSignal
) => Promise<T>;

type CancelOrderBulk<T> = (
  orderHashes: string[],
  overrides?: TxSendOverrides
) => Promise<T>;

export type CancelOrderFunctions<T> = {
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
): CancelOrderFunctions<T> => {
  const verifyingContract = chainId2verifyingContract[options.network];

  const cancelLimitOrder: CancelOrder<T> = async (
    orderHash,
    overrides = {}
    // signal //@TODO not needed if no fetch call for `verifyingContract`
  ) => {
    assert(
      verifyingContract,
      `verifyingContract for Limit Orders not available on chain ${options.network}`
    );

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
    overrides = {}
    // signal //@TODO not needed if no fetch call for `verifyingContract`
  ) => {
    assert(
      verifyingContract,
      `verifyingContract for Limit Orders not available on chain ${options.network}`
    );

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
