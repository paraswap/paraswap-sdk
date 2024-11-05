import type {
  Address,
  ContractCallerFunctions,
  SignTypedDataContractCallerFn,
  StaticContractCallerFn,
  TransactionContractCallerFn,
} from '../../types';
import { assert } from 'ts-essentials';
import type {
  JsonRpcProvider,
  Signer,
  ContractRunner,
  Contract as EthersContract,
  Overrides,
  TypedDataDomain,
  ContractTransactionResponse,
} from 'ethersV6';

export interface EthersV6ProviderDeps {
  ethersV6ProviderOrSigner: ContractRunner | Signer;
  EthersV6Contract: typeof EthersContract; // passing Contract in allows not to include ethers as dependency even when using legacy ParaSwap class
}

export const constructContractCaller = (
  {
    ethersV6ProviderOrSigner: providerOrSigner,
    EthersV6Contract: Contract,
  }: EthersV6ProviderDeps,
  account?: Address
): ContractCallerFunctions<ContractTransactionResponse> => {
  const staticCall: StaticContractCallerFn = async (params) => {
    const { address, abi, contractMethod, args, overrides } = params;

    const contract = new Contract(address, abi, providerOrSigner);

    // drop keys not in CallOverrides
    const { block, gas, ...restOverrides } = overrides;
    // reassign values to keys in CallOverrides
    const normalizedOverrides: Overrides = {
      ...restOverrides,
      blockTag: block,
      gasLimit: gas,
    };

    const callableContractFunction = contract.getFunction(contractMethod);

    // returns whatever the Contract.method returns: BigNumber, string, boolean
    return callableContractFunction(...args, normalizedOverrides);
  };

  const transactCall: TransactionContractCallerFn<
    ContractTransactionResponse
  > = async (params) => {
    assert(account, 'account must be specified to create a signer');
    assert(
      isEthersProviderWithSigner(providerOrSigner) ||
        isEthersSigner(providerOrSigner),
      'ethers must be an instance of Signer or JsonRpcProvider to create a signer'
    );

    const { address, abi, contractMethod, args, overrides } = params;

    const signer =
      'getSigner' in providerOrSigner
        ? await providerOrSigner.getSigner(account)
        : providerOrSigner;

    const contract = new Contract(address, abi, signer);

    // drop keys not in PayableOverrides
    const { gas, from, ...restOverrides } = overrides;
    // reassign values to keys in PayableOverrides
    const normalizedOverrides: Overrides = {
      ...restOverrides,
      gasLimit: gas,
    };

    // if no method for contractMethod, ethers will throw
    const callableContractFunction = contract.getFunction(contractMethod);

    const txResponse = await callableContractFunction(
      ...args,
      normalizedOverrides
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
        ? await providerOrSigner.getSigner(account)
        : providerOrSigner;

    const { data, domain, types } = typedData;

    const normalizedDomain: TypedDataDomain = {
      ...domain,
      salt: isArrayLikeNumber(domain.salt)
        ? new Uint8Array(domain.salt)
        : domain.salt,
    };

    return signer.signTypedData(normalizedDomain, types, data);
  };

  return { staticCall, transactCall, signTypedDataCall };
};

function isEthersProviderWithSigner(
  providerOrSigner: JsonRpcProvider | ContractRunner | Signer
): providerOrSigner is JsonRpcProvider {
  return 'getSigner' in providerOrSigner;
}

function isEthersSigner(
  providerOrSigner: ContractRunner | Signer
): providerOrSigner is Signer {
  return 'getAddress' in providerOrSigner;
}

function isArrayLikeNumber(arr: unknown): arr is ArrayLike<number> {
  const isArrLike =
    typeof arr === 'object' &&
    arr !== null &&
    'length' in arr &&
    typeof arr['length'] === 'number';
  if (!isArrLike) return false;
  if (arr.length === 0) return true;
  return '0' in arr && typeof arr[0] === 'number';
}
