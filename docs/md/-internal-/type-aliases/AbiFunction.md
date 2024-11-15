[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / AbiFunction

# Type Alias: AbiFunction

> **AbiFunction**: `object`

ABI ["function"](https://docs.soliditylang.org/en/latest/abi-spec.html#json) type

## Type declaration

### ~~constant?~~

> `optional` **constant**: `boolean`

#### Deprecated

use `pure` or `view` from [AbiStateMutability](AbiStateMutability.md) instead

#### See

https://github.com/ethereum/solidity/issues/992

### ~~gas?~~

> `optional` **gas**: `number`

#### Deprecated

Vyper used to provide gas estimates

#### See

https://github.com/vyperlang/vyper/issues/2151

### inputs

> **inputs**: readonly [`AbiParameter`](AbiParameter.md)[]

### name

> **name**: `string`

### outputs

> **outputs**: readonly [`AbiParameter`](AbiParameter.md)[]

### ~~payable?~~

> `optional` **payable**: `boolean`

#### Deprecated

use `payable` or `nonpayable` from [AbiStateMutability](AbiStateMutability.md) instead

#### See

https://github.com/ethereum/solidity/issues/992

### stateMutability

> **stateMutability**: [`AbiStateMutability`](AbiStateMutability.md)

### type

> **type**: `"function"`

## Defined in

node\_modules/abitype/dist/types/abi.d.ts:54
