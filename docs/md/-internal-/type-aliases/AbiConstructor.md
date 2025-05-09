[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AbiConstructor

# Type Alias: AbiConstructor

> **AbiConstructor**: `object`

ABI ["constructor"](https://docs.soliditylang.org/en/latest/abi-spec.html#json) type

## Type declaration

### inputs

> **inputs**: readonly [`AbiParameter`](AbiParameter.md)[]

### ~~payable?~~

> `optional` **payable**: `boolean`

#### Deprecated

use `payable` or `nonpayable` from [AbiStateMutability](AbiStateMutability.md) instead

#### See

https://github.com/ethereum/solidity/issues/992

### stateMutability

> **stateMutability**: [`Extract`](Extract.md)\<[`AbiStateMutability`](AbiStateMutability.md), `"payable"` \| `"nonpayable"`\>

### type

> **type**: `"constructor"`

## Defined in

node\_modules/abitype/dist/types/abi.d.ts:77
