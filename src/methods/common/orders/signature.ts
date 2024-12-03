type SplitSignatureResult = {
  v: number;
  r: string;
  s: string;
  compact: string;
};

export function splitSignature(signature: string): SplitSignatureResult {
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
  let s: string;
  let v;

  // Handle 64-byte (EIP-2098 compact) and 65-byte signatures
  if (bytes.length === 64) {
    // Extract v from the highest bit of s and clear the bit in s
    v = 27 + (bytes[32]! >> 7);
    bytes[32]! &= 0x7f; // Clear the highest bit
    s = `0x${Array.from(bytes.slice(32, 64))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('')}`;
  } else {
    s = `0x${Array.from(bytes.slice(32, 64))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('')}`;

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

  return { v, r, s, compact: compactSignature };
}
