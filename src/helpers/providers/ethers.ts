import type {
  Address,
  ContractCallerFunctions,
  NoExtraKeysCheck,
  SignTypedDataContractCallerFn,
  StaticContractCallerFn,
  TransactionContractCallerFn,
} from '../../types';
import type {
  JsonRpcProvider,
  BaseProvider,
  JsonRpcSigner,
} from '@ethersproject/providers';
import type { Signer } from '@ethersproject/abstract-signer';
import type {
  Contract as EthersV5Contract,
  ContractFunction as EthersContractFunctionV5,
  PopulatedTransaction as EthersPopulatedTransactionV5,
  PayableOverrides,
  CallOverrides,
  ContractTransaction,
} from '@ethersproject/contracts';

import type { BigNumber as EthersBigNumberV5 } from '@ethersproject/bignumber';

import { assert } from 'ts-essentials';

export interface EthersV5ProviderDeps {
  ethersProviderOrSigner: BaseProvider | Signer;
  EthersContract: typeof EthersV5Contract; // passing Contract in allows not to include ethers as dependency
}

export const constructEthersV5ContractCaller = (
  {
    ethersProviderOrSigner: providerOrSigner,
    EthersContract: Contract,
  }: EthersV5ProviderDeps,
  account?: Address
): ContractCallerFunctions<ContractTransaction> => {
  const staticCall: StaticContractCallerFn = async (params) => {
    const { address, abi, contractMethod, args, overrides } = params;

    const contract = new Contract(address, abi, providerOrSigner);

    assertEthersContractHasMethodsV5(contract, contractMethod);
    // drop keys not in CallOverrides
    const { block, gas, ...restOverrides } = overrides;
    // reassign values to keys in CallOverrides
    const normalizedOverrides = {
      ...restOverrides,
      blockTag: block,
      gasLimit: gas,
    };

    // type FinalCallOverrides = normalizedOverrides has extra props ? never : normalizedOverrides
    type FinalCallOverrides = NoExtraKeysCheck<
      typeof normalizedOverrides,
      CallOverrides
    >;

    // enforce overrides shape ethers accepts
    // TS will break if normalizedOverrides type has any keys not also present in CallOverrides
    const callOverrides: FinalCallOverrides = normalizedOverrides;
    // returns whatever the Contract.method returns: BigNumber, string, boolean
    return contract.callStatic[contractMethod](...args, callOverrides);
  };

  const transactCall: TransactionContractCallerFn<ContractTransaction> = async (
    params
  ) => {
    assert(account, 'account must be specified to create a signer');
    assert(
      isEthersProviderWithSigner(providerOrSigner) ||
        isEthersSigner(providerOrSigner),
      'ethers must be an instance of Signer or JsonRpcProvider to create a signer'
    );

    const { address, abi, contractMethod, args, overrides } = params;

    const signer =
      'getSigner' in providerOrSigner
        ? providerOrSigner.getSigner(account)
        : providerOrSigner;

    const contract = new Contract(address, abi, signer);

    assertEthersContractHasMethodsV5(contract, contractMethod);
    // drop keys not in PayableOverrides
    const { gas, from, ...restOverrides } = overrides;
    // reassign values to keys in PayableOverrides
    const normalizedOverrides = {
      ...restOverrides,
      gasLimit: gas,
    };

    // type FinalPayableOverrides = normalizedOverrides has extra props ? never : normalizedOverrides
    type FinalPayableOverrides = NoExtraKeysCheck<
      typeof normalizedOverrides,
      PayableOverrides
    >;

    // enforce overrides shape ethers accepts
    // TS will break if normalizedOverrides type has any keys not also present in PayableOverrides
    const txOverrides: FinalPayableOverrides = normalizedOverrides;
    const txResponse: ContractTransaction = await contract[contractMethod](
      ...args,
      txOverrides
    );

    return txResponse;
  };

  const signTypedDataCall: SignTypedDataContractCallerFn = async (
    typedData
  ) => {
    assert(account, 'account must be specified to create a signer');
    assert(
      isEthersProviderWithSigner(providerOrSigner) ||
        isEthersSigner(providerOrSigner),
      'ethers must be an instance of Signer or JsonRpcProvider to create a signer'
    );

    const signer =
      'getSigner' in providerOrSigner
        ? providerOrSigner.getSigner(account)
        : providerOrSigner;

    assert(isTypedDataCapableSigner(signer), 'Signer can sign typed data');

    const { data, domain, types } = typedData;

    return signer._signTypedData(domain, types, data);
  };

  return { staticCall, transactCall, signTypedDataCall };
};

function isEthersProvider(
  providerOrSigner: BaseProvider | Signer
): providerOrSigner is BaseProvider {
  return '_isProvider' in providerOrSigner && providerOrSigner._isProvider;
}

function isEthersProviderWithSigner(
  providerOrSigner: JsonRpcProvider | BaseProvider | Signer
): providerOrSigner is JsonRpcProvider {
  return isEthersProvider(providerOrSigner) && 'getSigner' in providerOrSigner;
}

function isEthersSigner(
  providerOrSigner: BaseProvider | Signer
): providerOrSigner is Signer {
  return '_isSigner' in providerOrSigner && providerOrSigner._isSigner;
}

function isTypedDataCapableSigner(
  signer: Signer
): signer is Signer & Pick<JsonRpcSigner, '_signTypedData'> {
  return '_signTypedData' in signer;
}

/// ethers v5
type EthersContractWithMethodV5<T extends string> = EthersV5Contract & {
  readonly [method in T]: EthersContractFunctionV5;
} & {
  readonly functions: { [method in T]: EthersContractFunctionV5 };

  readonly callStatic: { [method in T]: EthersContractFunctionV5 };
  readonly estimateGas: {
    [method in T]: EthersContractFunctionV5<EthersBigNumberV5>;
  };
  readonly populateTransaction: {
    [method in T]: EthersContractFunctionV5<EthersPopulatedTransactionV5>;
  };
};

function ethersContractHasMethodsV5<T extends string>(
  contract: EthersV5Contract,
  ...methods: T[]
): contract is EthersContractWithMethodV5<T> {
  return methods.every((method) => typeof contract[method] === 'function');
}

function assertEthersContractHasMethodsV5<T extends string>(
  contract: EthersV5Contract,
  ...methods: T[]
): asserts contract is EthersContractWithMethodV5<T> {
  assert(
    ethersContractHasMethodsV5(contract, ...methods),
    `Contract must have methods: ${methods.join(', ')}`
  );
}
