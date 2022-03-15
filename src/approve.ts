import { constructGetSpender } from './spender';
import { Address, PriceString, TxHash } from './token';
import { ConstructProviderFetchInput, TxSendOverrides } from './types';

type ApproveToken = (
  amount: PriceString,
  tokenAddress: Address,
  overrides?: TxSendOverrides,
  signal?: AbortSignal
) => Promise<TxHash>;

type ApproveTokenBulk = (
  amount: PriceString,
  tokenAddresses: Address[],
  overrides?: TxSendOverrides
) => Promise<TxHash[]>;

export type ApproveTokenFunctions = {
  approveToken: ApproveToken;
  approveTokenBulk: ApproveTokenBulk;
};

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

type ExtractAbiMethodNames<T extends readonly { name: string }[]> =
  T[number]['name'];

type AvailableMethods = ExtractAbiMethodNames<typeof MinERC20Abi>;

// @TODO make this generic to return whatever `contractCaller` returns
// to allow for better versatility
export const constructApproveToken = (
  options: ConstructProviderFetchInput
): ApproveTokenFunctions => {
  const { getSpender } = constructGetSpender(options);
  // cached for the same instance of `approveToken = constructApproveToken()`
  // so should persist across same apiUrl & network
  let _spender: string | undefined;

  const approveToken: ApproveToken = async (
    amount,
    tokenAddress,
    overrides = {},
    signal
  ) => {
    const spender = _spender || (_spender = await getSpender(signal));

    const res = await options.contractCaller<TxHash, AvailableMethods>({
      address: tokenAddress,
      abi: MinERC20Abi,
      contractMethod: 'approve',
      args: [spender, amount],
      overrides,
      static: false,
    });

    return res;
  };

  const approveTokenBulk: ApproveTokenBulk = async (amount, tokenAddresses) => {
    return Promise.all(
      tokenAddresses.map((tokenAddress) => approveToken(amount, tokenAddress))
    );
  };

  return { approveToken, approveTokenBulk };
};
