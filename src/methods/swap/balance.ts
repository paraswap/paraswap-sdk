import { API_URL } from '../../constants';
import {
  Token,
  Address,
  constructToken,
  AddressOrSymbol,
} from '../../helpers/token';
import type {
  ConstructFetchInput,
  TokenApiResponse,
  TokensApiResponse,
  RequestParameters,
} from '../../types';

type GetBalances = (
  userAddress: Address,
  requestParams?: RequestParameters
) => Promise<Token[]>;
type GetBalance = (
  userAddress: Address,
  tokenAddressOrSymbol: AddressOrSymbol,
  requestParams?: RequestParameters
) => Promise<Token | typeof NOT_FOUND_RESPONSE>;

export interface Allowance {
  tokenAddress: Address;
  allowance: string;
}

type GetAllowances = (
  userAddress: Address,
  tokenAddresses: Address[],
  requestParams?: RequestParameters
) => Promise<Allowance[]>;
type GetAllowance = (
  userAddress: Address,
  tokenAddress: Address,
  requestParams?: RequestParameters
) => Promise<Allowance | typeof NOT_FOUND_RESPONSE>;

export const isAllowance = (
  arg: Awaited<ReturnType<GetAllowance>>
): arg is Allowance => {
  return 'allowance' in arg;
};

export type GetBalancesFunctions = {
  getBalance: GetBalance;
  getBalances: GetBalances;
  getAllowance: GetAllowance;
  getAllowances: GetAllowances;
};

const NOT_FOUND_RESPONSE = { message: 'Not Found' } as const;

export const constructGetBalances = ({
  apiURL = API_URL,
  chainId,
  fetcher,
}: ConstructFetchInput): GetBalancesFunctions => {
  const tokensUrl = `${apiURL}/users/tokens/${chainId}` as const;

  const getBalances: GetBalances = async (userAddress, requestParams) => {
    const fetchURL = `${tokensUrl}/${userAddress}` as const;

    const data = await fetcher<TokensApiResponse>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });

    const tokens = data.tokens.map(constructToken);

    return tokens;
  };

  const getBalance: GetBalance = async (
    userAddress,
    tokenAddressOrSymbol,
    requestParams
  ) => {
    const fetchURL =
      `${tokensUrl}/${userAddress}/${tokenAddressOrSymbol}` as const;

    const data = await fetcher<TokenApiResponse>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });

    if (!data.token) {
      return NOT_FOUND_RESPONSE;
    }

    return constructToken(data.token);
  };

  const getAllowances: GetAllowances = async (
    userAddress,
    tokenAddresses,
    requestParams
  ) => {
    const tokenAddressesLowercaseSet = new Set(
      tokenAddresses.map((address) => address.toLowerCase())
    );

    const balances = await getBalances(userAddress, requestParams);

    const allowances: Allowance[] = balances
      .filter((token) =>
        tokenAddressesLowercaseSet.has(token.address.toLowerCase())
      )
      .map(({ address, allowance = '0' }) => ({
        tokenAddress: address,
        allowance,
      }));

    return allowances;
  };

  const getAllowance: GetAllowance = async (
    userAddress,
    tokenAddress,
    requestParams
  ) => {
    const balanceOrNotFound = await getBalance(
      userAddress,
      tokenAddress,
      requestParams
    );

    if ('message' in balanceOrNotFound) {
      return balanceOrNotFound;
    }

    const { address, allowance = '0' } = balanceOrNotFound;

    return { tokenAddress: address, allowance };
  };

  return {
    getBalance,
    getBalances,
    getAllowance,
    getAllowances,
  };
};
