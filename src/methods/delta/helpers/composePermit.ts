import { DeltaAuctionOrder } from './types';

type DeltaOrderPermitInput = Pick<DeltaAuctionOrder, 'permit' | 'nonce'>;

export function composeDeltaOrderPermit({
  permit,
  nonce,
}: DeltaOrderPermitInput): string {
  // Can be empty Permit if allowance is available for srcToken
  if (permit === '0x' || permit === '0x01') {
    // 0x01 is a special permit value that signifies existing Permit2 allowance.
    return permit;
  }

  // In the Contract, specifically for Permit2 transferFrom, we have signature consisting of
  // bytes32(permit2nonce) + bytes64(compacted signature) = bytes96 Permit2 Transfer format

  if (permit.length >= 194) {
    // "0x".length + 96bytes*2 = 194, means permit already concatenated with nonce
    // or it's a different type of Permit all together
    return permit;
  }

  return encodePermit2Transfer(BigInt(nonce), permit);
}

function uintTo32ByteArrayBuffer(nonce: number | bigint) {
  // Create a 32-byte ArrayBuffer
  const buffer = new Uint8Array(32);

  // Convert nonce to hex string and pad it to 64 hex characters (32 bytes)
  let nonceHex = nonce.toString(16).padStart(64, '0');

  // Convert the hex string to bytes and fill the ArrayBuffer
  for (let i = 0; i < 32; i++) {
    buffer[i] = parseInt(nonceHex.slice(i * 2, i * 2 + 2), 16);
  }

  return buffer;
}

function hexToByteArray(hexString: string) {
  // Remove "0x" prefix if present
  hexString = hexString.replace(/^0x/, '');

  // Convert hex string to Uint8Array
  const byteArray = new Uint8Array(hexString.length / 2);
  for (let i = 0; i < hexString.length; i += 2) {
    byteArray[i / 2] = parseInt(hexString.slice(i, i + 2), 16);
  }
  return byteArray;
}

function encodePermit2Transfer(nonce: number | bigint, signature: string) {
  // Get 32-byte ArrayBuffer for nonce
  const nonceBuffer = uintTo32ByteArrayBuffer(nonce);

  // Convert signature hex string to Uint8Array (64 bytes)
  const signatureBuffer = hexToByteArray(signature);
  if (signatureBuffer.length !== 64) {
    throw new Error('Signature must be exactly 64 bytes');
  }

  // Concatenate nonceBuffer and signatureBuffer
  const packedBuffer = new Uint8Array(32 + 64);
  packedBuffer.set(nonceBuffer, 0); // Copy nonceBuffer at the start
  packedBuffer.set(signatureBuffer, 32); // Copy signatureBuffer after nonce

  // Convert to hex string for output
  return (
    '0x' +
    Array.from(packedBuffer)
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('')
  );
}
