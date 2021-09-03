import BigNumber from 'bignumber.js';
import { Merge } from 'ts-essentials';
import { Token } from './lib/token';
import { SwapSide, ContractMethod, PricingMethod } from './constants';

type Symbol = string;
type Address = string;
type AddressOrSymbol = Address | Symbol;
type PriceString = string;
type NumberAsString = string;

type NetworkID = 1 | 3 | 42 | 4 | 56 | 137 | 43114;

const ETHER_ADDRESS = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';

type APIQuery = {
  [name: string]: string | number | boolean;
};

type Allowance = {
  tokenAddress: Address;
  allowance: string;
};

type APIError = {
  message: string;
  status?: number;
  data?: any;
};

type Transaction = {
  from: Address;
  to: Address;
  value: string;
  data: string;
  chainId: number;
};

type RateOptions = {
  excludeDEXS?: string;
  includeDEXS?: string;
  excludePools?: string;
  excludePricingMethods?: PricingMethod[];
  excludeContractMethods?: ContractMethod[];
  includeContractMethods?: ContractMethod[];
  adapterVersion?: string;
  partner?: string;
  maxImpact?: number;
  maxUSDImpact?: number;
};

type BuildOptions = {
  ignoreChecks?: boolean;
  ignoreGasEstimate?: boolean;
  onlyParams?: boolean;
  simple?: boolean;
  gasPrice?: PriceString;
};

export {
  Symbol,
  Address,
  AddressOrSymbol,
  PriceString,
  NumberAsString,
  NetworkID,
  ETHER_ADDRESS,
  APIQuery,
  Allowance,
  APIError,
  Transaction,
  RateOptions,
  BuildOptions,
};
