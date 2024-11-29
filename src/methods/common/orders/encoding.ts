import { splitSignature } from './signature';

type EncodeEIP_2612PermitFunctionInput = {
  permitSignature: string;
  owner: string;
  spender: string;
  value: string;
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
