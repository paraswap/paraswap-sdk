import type {
  Address,
  ContractCallerFunctions,
  ContractCallStaticInput,
  SignTypedDataContractCallerFn,
  StaticContractCallerFn,
  TransactionContractCallerFn,
} from '../../types';
import { assert, MarkOptional } from 'ts-essentials';

import type {
  PublicActions,
  WalletActions,
  Hex,
  BlockTag,
  Chain,
  Transport,
  TypedDataDomain,
  Account,
} from 'viem';
import { findPrimaryType } from './helpers';
import { TransactionParams } from '../../methods/swap/transaction';

export type MinViemClient = Partial<
  Pick<PublicActions<Transport, Chain>, 'readContract'> &
    Pick<WalletActions<Chain>, 'writeContract' | 'signTypedData'>
> & { account?: Account };

export const constructContractCaller = (
  viemClient: MinViemClient,
  account?: Address
): ContractCallerFunctions<Hex> => {
  const staticCall: StaticContractCallerFn = async <
    T,
    M extends string = string
  >(
    params: ContractCallStaticInput<M>
  ): Promise<T> => {
    assert(
      viemClient.readContract,
      'Viem client must have readContract Public Action'
    );
    const { address, abi, contractMethod, args, overrides } = params;

    const { block } = overrides;

    const { blockNumber, blockTag } =
      typeof block === 'number'
        ? { blockNumber: BigInt(block) }
        : { blockTag: block as BlockTag };

    const result = viemClient.readContract({
      account: viemClient.account || (account as Hex),
      address: address as Hex,
      abi,
      functionName: contractMethod,
      args,
      blockTag,
      blockNumber,
    });

    return result as T; // can't get specific type for generic abi & method
  };

  const transactCall: TransactionContractCallerFn<Hex> = async (params) => {
    assert(account, 'account must be specified sign transactions');
    assert(
      viemClient.writeContract,
      'Viem client must have writeContract Wallet Action'
    );

    const { address, abi, contractMethod, args, overrides } = params;

    const viemTxParams = txParamsToViemTxParams({
      ...overrides,
      to: address,
      gas: overrides.gas?.toString(10),
      value: overrides.value?.toString(10),
    });

    const gasPriceParams =
      'maxFeePerGas' in viemTxParams
        ? {
            maxFeePerGas: viemTxParams.maxFeePerGas,
            maxPriorityFeePerGas: viemTxParams.maxPriorityFeePerGas,
          }
        : 'gasPrice' in viemTxParams
        ? { gasPrice: viemTxParams.gasPrice }
        : {};

    const txHash = await viemClient.writeContract({
      // either `viemClient` has account assigned to it,
      // or the provider `viemClient` was created with must control `account` (viemClient.getAddresses()[0]===account);
      // otherwise breaks with ` ProviderError: Unknown account 0x...`
      account: viemClient.account || (account as Hex),
      address: address as Hex,
      abi,
      functionName: contractMethod,
      args: argsToViemArgs(args),
      value: viemTxParams.value,
      gas: viemTxParams.gas,
      // ...viemTxParams,
      // account: (overrides.from || account) as Hex,
      nonce: overrides.nonce,
      ...gasPriceParams,
    });

    return txHash;
  };

  const signTypedDataCall: SignTypedDataContractCallerFn = async (
    typedData
  ) => {
    assert(account, 'account must be specified to create a signer');
    assert(
      viemClient.signTypedData,
      'Viem client must have signTypedData Wallet Action'
    );

    const { data, domain, types } = typedData;

    const primaryType = findPrimaryType(types);

    const chainId =
      domain.chainId === undefined ? undefined : Number(domain.chainId);
    const viemDomain: TypedDataDomain = {
      chainId,
      name: domain.name,
      version: domain.version,
      verifyingContract: domain.verifyingContract as Hex,
      salt: domain.salt as Hex,
    };

    const signature = await viemClient.signTypedData({
      // either `viemClient` has account assigned to it,
      // or the provider `viemClient` was created with must control `account` (viemClient.getAddresses()[0]===account)
      account: viemClient.account || (account as Hex),
      domain: viemDomain,
      types,
      primaryType,
      message: data,
    });

    return signature;
  };

  return { staticCall, transactCall, signTypedDataCall };
};

type ViemTxParams = {
  to: Hex;
  data?: Hex;
  value?: bigint;
  nonce?: number;
  gas?: bigint;
} & (
  | { maxFeePerGas?: bigint; maxPriorityFeePerGas?: bigint }
  | { gasPrice?: bigint }
);

export function txParamsToViemTxParams(
  txParams: Omit<
    MarkOptional<TransactionParams, 'data' | 'value'>,
    'chainId' | 'from'
  >
): ViemTxParams {
  const gas = txParams.gas !== undefined ? BigInt(txParams.gas) : undefined;
  const gasPrice =
    txParams.gasPrice !== undefined ? BigInt(txParams.gasPrice) : undefined;
  const maxFeePerGas =
    txParams.maxFeePerGas !== undefined
      ? BigInt(txParams.maxFeePerGas)
      : undefined;
  const maxPriorityFeePerGas =
    txParams.maxPriorityFeePerGas !== undefined
      ? BigInt(txParams.maxPriorityFeePerGas)
      : undefined;

  const viemTxParams = {
    to: txParams.to as Hex,
    data: txParams.data as Hex,
    value: txParams.value !== undefined ? BigInt(txParams.value) : undefined,
    gas,
    ...(txParams.maxFeePerGas !== undefined
      ? { maxFeePerGas, maxPriorityFeePerGas }
      : { gasPrice }),
  };
  return viemTxParams;
}

function argsToViemArgs(args: any[]): any[] {
  return args.map((arg) => {
    if (typeof arg === 'string') {
      if (arg.startsWith('0x')) {
        return arg;
      }
      const asNumber = Number(arg);
      if (Number.isNaN(asNumber)) {
        return arg;
      }
      return BigInt(asNumber);
    }
    return arg;
  });
}
