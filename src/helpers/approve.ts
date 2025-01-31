import type {
  ConstructProviderFetchInput,
  RequestParameters,
  TxSendOverrides,
} from '../types';
import type { ExtractAbiMethodNames } from '../helpers/misc';
import type { Address, PriceString } from './token';

// much smaller than the whole ERC20_ABI
const MinERC20Abi = [
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
] as const;

type ApprovalMethods = ExtractAbiMethodNames<typeof MinERC20Abi>;

type ApproveContractCaller<T> = ConstructProviderFetchInput<
  T,
  'transactCall'
>['contractCaller'];

export type ApproveToken<T> = (
  amount: PriceString,
  tokenAddress: Address,
  overrides?: TxSendOverrides,
  requestParams?: RequestParameters
) => Promise<T>;

export type GetSpenderAsyncOrSync = (
  requestParams?: RequestParameters
) => Address | Promise<Address>;

export function approveTokenMethodFactory<T>(
  contractCaller: ApproveContractCaller<T>,
  getSpender: GetSpenderAsyncOrSync
): ApproveToken<T> {
  return async (amount, tokenAddress, overrides = {}, requestParams) => {
    const spender = await getSpender(requestParams);

    const res = await contractCaller.transactCall<ApprovalMethods>({
      address: tokenAddress,
      abi: MinERC20Abi,
      contractMethod: 'approve',
      args: [spender, amount],
      overrides,
    });

    return res;
  };
}
