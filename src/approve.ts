import { constructGetSpender } from './spender';
import type { Address, PriceString } from './token';
import type { ConstructProviderFetchInput, TxSendOverrides } from './types';

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

// returns whatever `contractCaller` returns
// to allow for better versatility
export const constructApproveToken = <T>(
  options: ConstructProviderFetchInput<T, 'transactCall'>
): ApproveTokenFunctions<T> => {
  const { getSpender } = constructGetSpender(options);
  // cached for the same instance of `approveToken = constructApproveToken()`
  // so should persist across same apiUrl & network
  let _spender: string | undefined;

  const approveToken: ApproveToken<T> = async (
    amount,
    tokenAddress,
    overrides = {},
    signal
  ) => {
    const spender = _spender || (_spender = await getSpender(signal));

    const res = await options.contractCaller.transactCall<AvailableMethods>({
      address: tokenAddress,
      abi: MinERC20Abi,
      contractMethod: 'approve',
      args: [spender, amount],
      overrides,
    });

    return res;
  };

  const approveTokenBulk: ApproveTokenBulk<T> = async (
    amount,
    tokenAddresses
  ) => {
    return Promise.all(
      tokenAddresses.map((tokenAddress) => approveToken(amount, tokenAddress))
    );
  };

  return { approveToken, approveTokenBulk };
};
