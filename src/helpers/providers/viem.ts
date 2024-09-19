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

export type MinViemClient<
  account extends Account | undefined = Account | undefined
> = Partial<
  Pick<PublicActions<Transport, Chain>, 'readContract'> &
    Pick<WalletActions<Chain, account>, 'writeContract' | 'signTypedData'>
> & { account?: account };

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
    assert(account, 'account must be specified to create a signer');
    assert(
      isViemClientWithAccount(viemClient),
      'account must be specified to create a signer'
    );
    assert(
      viemClient.writeContract,
      'Viem client must have writeContract Wallet Action'
    );

    const { address, abi, contractMethod, args, overrides } = params;
    console.log(
      '🚀 ~ consttransactCall:TransactionContractCallerFn<Hex>= ~ overrides:',
      overrides
    );

    const gas = overrides.gas !== undefined ? BigInt(overrides.gas) : undefined;
    const gasPrice =
      overrides.gasPrice !== undefined ? BigInt(overrides.gasPrice) : undefined;
    const maxFeePerGas =
      overrides.maxFeePerGas !== undefined
        ? BigInt(overrides.maxFeePerGas)
        : undefined;
    const maxPriorityFeePerGas =
      overrides.maxPriorityFeePerGas !== undefined
        ? BigInt(overrides.maxPriorityFeePerGas)
        : undefined;

    const value =
      overrides.value !== undefined ? BigInt(overrides.value) : undefined;

    const viemTxParams = txParamsToViemTxParams({
      ...overrides,
      to: address,
      gas: overrides.gas?.toString(10),
      value: overrides.value?.toString(10),
    });

    /*     console.log('View.writeContract', {
      address: address as Hex,
      // abi,
      functionName: contractMethod,
      args: argsToViemArgs(args),
      ...viemTxParams,
      nonce: overrides.nonce,
    }); */

    /*     const t = await viemClient.writeContract({
      address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      abi: [
        {
          constant: false,
          inputs: [
            { name: '_spender', type: 'address' },
            { name: '_value', type: 'uint256' },
          ],
          name: 'approve',
          outputs: [{ name: '', type: 'bool' }],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function',
        },
      ],
      functionName: 'approve',
      args: ['0x216b4b4ba9f3e719726886d34a177484278bfcae', 12345n],
    });

    return t; */

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

    const viemDomain: TypedDataDomain = {
      chainId: domain.chainId,
      name: domain.name,
      version: domain.version,
      verifyingContract: domain.verifyingContract as Hex,
      salt: domain.salt as Hex,
    };

    const signature = await viemClient.signTypedData({
      account: account as Hex,
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

function isViemClientWithAccount(
  viemClient: MinViemClient<Account | undefined>
): viemClient is MinViemClient<Account> {
  return !!viemClient.account;
}
