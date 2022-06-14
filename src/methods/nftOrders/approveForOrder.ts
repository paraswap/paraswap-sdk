import type {
  Address,
  ConstructProviderFetchInput,
  PriceString,
  TxSendOverrides,
} from '../../types';
import { constructApproveToken } from '../swap/approve';

type ApproveTokenOrNFT<T> = (
  // ABI should work for both ERC20 and NFTs
  // @TODO check that approval works for NFT
  amountOrTokenId: PriceString,
  tokenAddress: Address,
  overrides?: TxSendOverrides,
  signal?: AbortSignal
) => Promise<T>;

export type ApproveTokenForNFTOrderFunctions<T> = {
  /** @description approving AugustusSwapper for ТАЕ Orders that will be executed through it */
  approveTokenForNFTOrder: ApproveTokenOrNFT<T>;
};

// returns whatever `contractCaller` returns
// to allow for better versatility
export const constructApproveTokenForNFTOrder = <T>(
  options: ConstructProviderFetchInput<T, 'transactCall'>
): ApproveTokenForNFTOrderFunctions<T> => {
  // approving TokenTransaferProxy as for the swap
  const { approveToken: approveTokenForNFTOrder } =
    constructApproveToken(options);

  return { approveTokenForNFTOrder };
};
