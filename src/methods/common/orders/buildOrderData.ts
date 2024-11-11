export const name = 'AUGUSTUS RFQ';
export const version = '1';
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

type TypedDataDomain = {
  name?: string;
  version?: string;
  chainId?: bigint | string | number;
  verifyingContract?: string;
  salt?: string;
};

export type TypedDataField = {
  name: string;
  type: string;
};

export type SignableTypedData = {
  types: Record<string, TypedDataField[]>;
  domain: TypedDataDomain;
  data: Record<string, any>;
};

export type Domain = {
  name: string;
  version: string;
  chainId: number;
  verifyingContract: string;
};
