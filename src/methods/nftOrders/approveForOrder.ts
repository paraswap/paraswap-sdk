import type { ApproveToken } from '../../helpers/approve';
import type { ExtractAbiMethodNames } from '../../helpers/misc';
import type {
  Address,
  ConstructProviderFetchInput,
  TxSendOverrides,
} from '../../types';
import { constructApproveToken } from '../swap/approve';
import { constructGetSpender } from '../swap/spender';

type ApproveNFT<T> = (
  tokenAddress: Address,
  overrides?: TxSendOverrides,
  signal?: AbortSignal
) => Promise<T>;

export type ApproveTokenForNFTOrderFunctions<T> = {
  /** @description approving ERC20 for NFT Orders that will be executed through AugustusSwapper */
  approveERC20ForNFTOrder: ApproveToken<T>;
  /** @description approving ERC721 and ERC1155 for NFT Orders that will be executed through it */
  approveNFTorNFTOrder: ApproveNFT<T>;
};

const MinNFTAbi = [
  {
    constant: false,
    inputs: [
      {
        name: '_operator',
        type: 'address',
      },
      {
        name: '_approved',
        type: 'bool',
      },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

type ApprovalMethods = ExtractAbiMethodNames<typeof MinNFTAbi>;

// returns whatever `contractCaller` returns
// to allow for better versatility
export const constructApproveTokenForNFTOrder = <T>(
  options: ConstructProviderFetchInput<T, 'transactCall'>
): ApproveTokenForNFTOrderFunctions<T> => {
  // approving TokenTransaferProxy as for the swap
  const { approveToken: approveERC20ForNFTOrder } =
    constructApproveToken(options);

  const { getSpender: _getSpender } = constructGetSpender(options);
  // cached for the same instance of `approveToken = constructApproveToken()`
  // so should persist across same apiUrl & network
  let _spender: string | undefined;

  const getSpender: typeof _getSpender = async (signal) =>
    _spender || (_spender = await _getSpender(signal));

  const approveNFTorNFTOrder: ApproveNFT<T> = async (
    tokenAddress,
    overrides = {},
    signal
  ) => {
    const spender = await getSpender(signal);

    const res = await options.contractCaller.transactCall<ApprovalMethods>({
      address: tokenAddress,
      abi: MinNFTAbi,
      contractMethod: 'setApprovalForAll',
      args: [spender, true],
      overrides,
    });

    return res;
  };

  return { approveERC20ForNFTOrder, approveNFTorNFTOrder };
};
