import type { Primitive } from 'ts-essentials';

export const objectToFilledEntries = <T extends Record<string, unknown>>(
  object: T
): [string, string][] => {
  return (
    Object.entries(object)
      // removes keys with undefined values
      .filter(([, value]) => value !== undefined)
      .map(([key, value]) => [key, String(value)])
  );
};

export const constructSearchString = <
  //                               not arrays or mappings
  U extends Record<string, Exclude<Primitive, symbol>>
>(
  queryOptions: U
): `?${string}` | '' => {
  const queryEntries = objectToFilledEntries(queryOptions);

  const queryString = new URLSearchParams(queryEntries).toString();

  // returns empty string or `?${string}`
  return queryString && `?${queryString}`;
};

type MinAxiosError = {
  code?: string;
  request?: any;
  isAxiosError: boolean;
  message: string;
};

type MinAxiosResponse = {
  data: any;
  status: number;
  statusText: string;
  headers: Record<string, any>;
  config: { url?: string; method?: string };
};

type FetcherErrorConstructorInput = MinAxiosError & {
  response?: MinAxiosResponse;
};

export interface FetcherErrorInterface extends FetcherErrorConstructorInput {
  status?: number;
  code?: string;
}

export const isFetcherError = (error: unknown): error is FetcherError => {
  return error instanceof FetcherError;
};

export class FetcherError extends Error implements FetcherErrorInterface {
  code;
  status;
  request;
  response;
  isAxiosError = false;

  public constructor({
    code,
    request,
    response,
    isAxiosError,
    message,
  }: FetcherErrorConstructorInput) {
    super();

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, FetcherError);
    }

    this.name = this.constructor.name;
    this.code = code;
    this.request = request;
    this.isAxiosError = isAxiosError;

    // no response on AxiosError
    if (!response) {
      this.message = message;
      return;
    }

    this.response = response;

    const { data, status } = response;
    this.status = status;
    this.message = isDataWithError(data) ? data.error : message;
  }
}
// to turn `object -> Record` for indexed variable access
function isObject(obj: unknown): obj is Record<string | symbol, any> {
  return !!obj && typeof obj === 'object';
}

export function isDataWithError(data: unknown): data is { error: string } {
  return isObject(data) && typeof data['error'] === 'string';
}

export type ExtractAbiMethodNames<T extends readonly { name: string }[]> =
  T[number]['name'];

// reduce element[] to Object{key: prop, val?: element}
// for example
// gatherObjectsByProp(Token[], token => token.address) => Record<address, Token|undefined>
export function gatherObjectsByProp<T>(
  elements: T[],
  pickProp: (elem: T, index: number) => string
): Record<string, T>;
export function gatherObjectsByProp<T, U>(
  elements: T[],
  pickProp: (elem: T, index: number) => string,
  transfrom: (elem: T, accumElem: U | undefined, index: number) => U
): Record<string, U>;
export function gatherObjectsByProp<T, U>(
  elements: T[],
  pickProp: (elem: T, index: number) => string,
  transform?: (elem: T, accumElem: U | undefined, index: number) => U
): Record<string, T> | Record<string, U> {
  return elements.reduce<Record<string, T> | Record<string, U>>(
    (accum, element, index) => {
      const key = pickProp(element, index);

      const accumElem: T | U | undefined = accum[key];
      const transformedElement = transform
        ? //                       if transform is available, can only be U | undefined
          transform(element, accumElem as U | undefined, index)
        : element;

      accum[key] = transformedElement;

      return accum;
    },
    {}
  );
}

// checks that array has at least one element
export const isFilledArray = <T>(array: T[]): array is [T, ...T[]] => {
  return array.length > 0;
};

export function getRandomInt(): number {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
}

export function runOnceAndCache<T, Args extends any[]>(
  // can pass `(...any[]) => any but null | undefined`
  func: (...args: Args) => NonNullable<T>
): (...args: Args) => NonNullable<T> {
  let result: NonNullable<T>;

  return (...args) => {
    return result ?? (result = func(...args));
  };
}

export function deriveCompactSignature(signature: string): string {
  // Remove "0x" prefix if present
  if (signature.startsWith('0x')) {
    signature = signature.slice(2);
  }

  // Convert the hex string to a byte array
  const bytes = new Uint8Array(signature.length / 2);
  for (let i = 0; i < signature.length; i += 2) {
    bytes[i / 2] = parseInt(signature.slice(i, i + 2), 16);
  }

  // Validate the signature length (64 or 65 bytes)
  if (bytes.length !== 64 && bytes.length !== 65) {
    throw new Error('Invalid signature length: must be 64 or 65 bytes');
  }

  // Extract r and s components
  const r = `0x${Array.from(bytes.slice(0, 32), (b) =>
    b.toString(16).padStart(2, '0')
  ).join('')}`;
  let v;

  // Handle 64-byte (EIP-2098 compact) and 65-byte signatures
  if (bytes.length === 64) {
    // Extract v from the highest bit of s and clear the bit in s
    v = 27 + (bytes[32]! >> 7);
    bytes[32]! &= 0x7f; // Clear the highest bit
  } else {
    // Extract v directly for 65-byte signature
    v = bytes[64]!;

    // Normalize v to canonical form (27 or 28)
    if (v < 27) {
      v += 27;
    }
  }

  // Compute yParityAndS (_vs) for the compact signature
  const sBytes = Array.from(bytes.slice(32, 64));
  if (v === 28) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    sBytes[0]! |= 0x80; // Set the highest bit if v is 28
  }
  const yParityAndS = `0x${sBytes
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')}`;

  // Construct the compact signature by concatenating r and yParityAndS
  const compactSignature = r + yParityAndS.slice(2);

  return compactSignature;
}
