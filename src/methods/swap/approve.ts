import { constructGetSpender } from './spender';
import type {
  ConstructProviderFetchInput,
  TxSendOverrides,
  Address,
  PriceString,
} from '../../types';
import { ApproveToken, approveTokenMethodFactory } from '../../helpers/approve';

type ApproveTokenBulk<T> = (
  amount: PriceString,
  tokenAddresses: Address[],
  overrides?: TxSendOverrides,
  signal?: AbortSignal
) => Promise<Awaited<T>[]>;

export type ApproveTokenFunctions<T> = {
  approveToken: ApproveToken<T>;
  approveTokenBulk: ApproveTokenBulk<T>;
};

// returns whatever `contractCaller` returns
// to allow for better versatility
export const constructApproveToken = <T>(
  options: ConstructProviderFetchInput<T, 'transactCall'>
): ApproveTokenFunctions<T> => {
  // getSpender is cached internally for the same instance of SDK
  // so should persist across same apiUrl & network
  const { getSpender } = constructGetSpender(options);

  const approveToken: ApproveToken<T> = approveTokenMethodFactory<T>(
    options.contractCaller,
    getSpender
  );

  const approveTokenBulk: ApproveTokenBulk<T> = async (
    amount,
    tokenAddresses,
    overrides,
    signal
  ) => {
    return Promise.all(
      tokenAddresses.map((tokenAddress) =>
        approveToken(amount, tokenAddress, overrides, signal)
      )
    );
  };

  return { approveToken, approveTokenBulk };
};
