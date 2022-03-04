import type { MarkOptional } from "ts-essentials";
import type { ConstructFetchInput, TokensApiResponse } from "./types";


/**
 * @type hex token or account address
 */
export type Address = string;
/**
 * @type hex token address or token symbol
 */
export type AddressOrSymbol = string;
/**
 * @type number in string form
 */
export type PriceString = string;
/**
 * @type transaction hash
 */
export type TxHash = string;

// @TODO sync with what it actually is
export type LendingToken =
  | 'cToken'
  | 'iToken'
  | 'aToken'
  | 'aToken2'
  | 'idleToken'
  | 'Chai'
  | 'bDAI';

export type TokenType = 'ETH' | 'ERC20' | 'SYNTH';

/**
 * @type Token object returned from API used internally in API
 */
// consider if need the old class Token for backwards compatipility
// otherwise no real need
export type Token = {
  address: string;
  decimals: number;
  symbol?: string | undefined;
  tokenType: LendingToken | TokenType;
  mainConnector: string;
  connectors: string[];
  network: number;
  img?: string | undefined;
  allowance?: string | undefined;
  balance?: string | undefined;
};

type ConstructTokenInput = MarkOptional<
  Token,
  // these props are constructed from other, required props
  "tokenType" | "mainConnector" | "connectors" | "network"
>;

export const constructToken = (tokenProps: ConstructTokenInput): Token => {
  const {
    tokenType = "ERC20",
    mainConnector = "ETH",
    connectors: connectorsInput = [],
    network = 1,
    ...rest
  } = tokenProps;

  const connectors: Token["connectors"] =
    connectorsInput.length > 0 ? connectorsInput : [mainConnector];

  return {
    tokenType,
    connectors,
    mainConnector,
    network,
    ...rest,
  };
};

type GetTokens = () => Promise<Token[]>;

export type GetTokensFunctions = {
  getTokens: GetTokens;
};

export const constructGetTokens = ({
  apiURL,
  network,
  fetcher,
}: ConstructFetchInput): GetTokensFunctions => {
  const fetchURL = `${apiURL}/tokens/${network}`;

  const getTokens: GetTokens = async () => {
    const data = await fetcher<TokensApiResponse>({
      url: fetchURL,
      method: "GET",
    });

    const tokens = data.tokens.map(constructToken);
    return tokens;
  };

  return { getTokens };
};
