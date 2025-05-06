import { EnumerateLiteral, APIVersion } from './types';

import type { ContractMethod } from '@paraswap/core';

export {
  SwapSide,
  ContractMethod,
  ContractMethodV5,
  ContractMethodV6,
} from '@paraswap/core';

// allows to pass by name instead of importing enum first
export type ContractMethodByName = EnumerateLiteral<typeof ContractMethod>;

export const API_URL = 'https://api.paraswap.io';
export const DEFAULT_VERSION = '6.2' satisfies APIVersion;
