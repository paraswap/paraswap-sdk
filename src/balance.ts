import { Token, Address, constructToken, AddressOrSymbol } from './token';
import {
  ConstructFetchInput,
  TokenApiResponse,
  TokensApiResponse,
} from './types';

type GetBalances = (userAddress: Address) => Promise<Token[]>;
type GetBalance = (
  userAddress: Address,
  tokenAddressOrSymbol: AddressOrSymbol
) => Promise<Token | typeof NOT_FOUND_RESPONSE>;

export interface Allowance {
  tokenAddress: Address;
  allowance: string;
}

type GetAllowances = (
  userAddress: Address,
  tokenAddresses: Address[]
) => Promise<Allowance[]>;
type GetAllowance = (
  userAddress: Address,
  tokenAddress: Address
) => Promise<Allowance | typeof NOT_FOUND_RESPONSE>;

export type GetBalancesFunctions = {
  getBalance: GetBalance;
  getBalances: GetBalances;
  getAllowance: GetAllowance;
  getAllowances: GetAllowances;
};

const NOT_FOUND_RESPONSE = { message: 'Not Found' } as const;

export const constructGetBalances = ({
  apiURL,
  network,
  fetcher,
}: ConstructFetchInput): GetBalancesFunctions => {
  const tokensUrl = `${apiURL}/users/tokens/${network}`;

  const getBalances: GetBalances = async (userAddress) => {
    const fetchURL = `${tokensUrl}/${userAddress}`;

    const data = await fetcher<TokensApiResponse>({
      url: fetchURL,
      method: 'GET',
    });

    const tokens = data.tokens.map(constructToken);

    return tokens;
  };

  const getBalance: GetBalance = async (userAddress, tokenAddressOrSymbol) => {
    const fetchURL = `${tokensUrl}/${userAddress}/${tokenAddressOrSymbol}`;

    const data = await fetcher<TokenApiResponse>({
      url: fetchURL,
      method: 'GET',
    });

    if (!data.token) {
      return NOT_FOUND_RESPONSE;
    }

    return constructToken(data.token);
  };

  const getAllowances: GetAllowances = async (userAddress, tokenAddresses) => {
    const tokenAddressesLowercaseSet = new Set(
      tokenAddresses.map((address) => address.toLowerCase())
    );

    const balances = await getBalances(userAddress);

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

  const getAllowance: GetAllowance = async (userAddress, tokenAddress) => {
    const balanceOrNotFound = await getBalance(userAddress, tokenAddress);

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
