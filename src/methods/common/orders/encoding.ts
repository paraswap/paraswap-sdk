import { splitSignature } from './signature';

type EncodeEIP_2612PermitFunctionInput = {
  permitSignature: string;
  owner: string;
  spender: string;
  value: string | bigint;
  deadline: string | number | bigint;
};

// encoding params for Token.permit() Permit1 function
export function encodeEIP_2612PermitFunctionInput({
  owner,
  spender,
  value,
  deadline,
  permitSignature,
}: EncodeEIP_2612PermitFunctionInput): string {
  const { v, r, s } = splitSignature(permitSignature);

  const encodedOwner = encodeAddress(owner);
  const encodedSpender = encodeAddress(spender);
  const encodedValue = encodeUint256(value);
  const encodedDeadline = encodeUint256(deadline.toString());
  const encodedV = encodeUint8(v);
  const encodedR = encodeBytes32(r);
  const encodedS = encodeBytes32(s);

  // Concatenate all encoded values, stripping the "0x" prefix from each (except the first one)
  return (
    '0x' +
    [
      encodedOwner,
      encodedSpender,
      encodedValue,
      encodedDeadline,
      encodedV,
      encodedR,
      encodedS,
    ]
      .map((val) => val.slice(2)) // Remove "0x" prefix from each encoded value
      .join('') // Concatenate the values
  );
}

type EncodeDAIlikePermitFunctionInput = {
  permitSignature: string;
  holder: string;
  spender: string;
  nonce: number | bigint | string;
  expiry: number | bigint | string;
};

// encoding params for DAIlike.permit() function
export function encodeDAIlikePermitFunctionInput({
  permitSignature,
  holder,
  spender,
  nonce,
  expiry,
}: EncodeDAIlikePermitFunctionInput): string {
  const { v, r, s } = splitSignature(permitSignature);

  const encodedHolder = encodeAddress(holder);
  const encodedSpender = encodeAddress(spender);
  const encodedNonce = encodeUint256(nonce.toString());
  const encodedExpiry = encodeUint256(expiry.toString());
  const encodedV = encodeUint8(v);
  const encodedR = encodeBytes32(r);
  const encodedS = encodeBytes32(s);

  // Concatenate all encoded values, stripping the "0x" prefix from each (except the first one)
  return (
    '0x' +
    [
      encodedHolder,
      encodedSpender,
      encodedNonce,
      encodedExpiry,
      encodeBool(true), //allowed=true
      encodedV,
      encodedR,
      encodedS,
    ]
      .map((val) => val.slice(2)) // Remove "0x" prefix from each encoded value
      .join('') // Concatenate the values
  );
}

// encode an address (20 bytes) into 32 bytes
export function encodeAddress(address: string): string {
  const strippedAddress = address.replace(/^0x/, ''); // Remove "0x" prefix
  return '0x' + strippedAddress.toLowerCase().padStart(64, '0');
}

// encode a uint256 value
export function encodeUint256(value: string | bigint): string {
  const bn = BigInt(value);
  return '0x' + bn.toString(16).padStart(64, '0');
}

// encode a uint8 value
export function encodeUint8(value: number | bigint): string {
  return '0x' + value.toString(16).padStart(64, '0');
}

// encode a bytes32 value
export function encodeBytes32(value: string): string {
  const strippedValue = value.replace(/^0x/, ''); // Remove "0x" prefix
  return '0x' + strippedValue.padStart(64, '0').toLowerCase();
}

//encode a boolean
export function encodeBool(value: boolean): string {
  const encodedValue = value ? '1' : '0';
  // padded to 32 bytes
  return '0x' + encodedValue.padStart(64, '0');
}

/* 
const EIP_2612_PERMIT_ABI = [
  {
    constant: false,
    inputs: [
      {
        name: 'owner',
        type: 'address',
      },
      {
        name: 'spender',
        type: 'address',
      },
      {
        name: 'value',
        type: 'uint256',
      },
      {
        name: 'deadline',
        type: 'uint256',
      },
      {
        name: 'v',
        type: 'uint8',
      },
      {
        name: 'r',
        type: 'bytes32',
      },
      {
        name: 's',
        type: 'bytes32',
      },
    ],
    name: 'permit',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
]; 
*/

/* 
const DAI_EIP_2612_PERMIT_ABI = [
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'holder',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'expiry',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'allowed',
        type: 'bool',
      },
      {
        internalType: 'uint8',
        name: 'v',
        type: 'uint8',
      },
      {
        internalType: 'bytes32',
        name: 'r',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 's',
        type: 'bytes32',
      },
    ],
    name: 'permit',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
 */
