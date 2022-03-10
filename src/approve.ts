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

    const { default: ERC20_ABI } = await import('./abi/ERC20.json');

    const res = await options.contractCaller<TxHash>({
      address: tokenAddress,
      abi: ERC20_ABI,
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
