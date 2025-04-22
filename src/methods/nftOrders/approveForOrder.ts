import type { ApproveToken } from '../../helpers/approve';
import type { ExtractAbiMethodNames } from '../../helpers/misc';
import type {
  Address,
  ConstructProviderFetchInput,
  RequestParameters,
  TxSendOverrides,
} from '../../types';
import { constructApproveToken } from '../swap/approve';
import { constructGetNFTOrdersContract } from './getOrdersContract';

type ApproveNFT<T> = (
  tokenAddress: Address,
  overrides?: TxSendOverrides,
  requestParams?: RequestParameters
) => Promise<T>;

export type ApproveTokenForNFTOrderFunctions<T> = {
  /** @description approving AugustusSwapper as spender for takerAsset (ERC20) for Limit Orders that will be executed through it */
  approveERC20ForNFTOrder: ApproveToken<T>;
  /** @description approving AugustusRFQ as spender for makerAsset (NFT) */
  approveNFTForNFTOrder: ApproveNFT<T>;
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

  const { getNFTOrdersContract } = constructGetNFTOrdersContract(options);

  const approveNFTForNFTOrder: ApproveNFT<T> = async (
    tokenAddress,
    overrides = {},
    requestParams
  ) => {
    // @TODO add approvetakerAssetForNFTOrder to use AugustusSwapper as spender if we ever have SELL NFT swaps
    const AugustusRFQ = await getNFTOrdersContract(requestParams);

    const res = await options.contractCaller.transactCall<ApprovalMethods>({
      address: tokenAddress,
      abi: MinNFTAbi,
      contractMethod: 'setApprovalForAll',
      args: [AugustusRFQ, true],
      overrides,
    });

    return res;
  };

  return { approveERC20ForNFTOrder, approveNFTForNFTOrder };
};
