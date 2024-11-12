[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / AbiCoder

# Class: AbiCoder

## Constructors

### new AbiCoder()

> **new AbiCoder**(`coerceFunc`?): [`AbiCoder`](AbiCoder.md)

#### Parameters

• **coerceFunc?**: [`CoerceFunc`](../type-aliases/CoerceFunc.md)

#### Returns

[`AbiCoder`](AbiCoder.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/abi-coder.d.ts:7

## Properties

### coerceFunc

> `readonly` **coerceFunc**: [`CoerceFunc`](../type-aliases/CoerceFunc.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/abi-coder.d.ts:6

## Methods

### \_getCoder()

> **\_getCoder**(`param`): [`Coder`](Coder.md)

#### Parameters

• **param**: [`ParamType`](ParamType.md)

#### Returns

[`Coder`](Coder.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/abi-coder.d.ts:8

***

### \_getReader()

> **\_getReader**(`data`, `allowLoose`?): [`Reader`](Reader.md)

#### Parameters

• **data**: `Uint8Array`

• **allowLoose?**: `boolean`

#### Returns

[`Reader`](Reader.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/abi-coder.d.ts:10

***

### \_getWordSize()

> **\_getWordSize**(): `number`

#### Returns

`number`

#### Defined in

node\_modules/@ethersproject/abi/lib/abi-coder.d.ts:9

***

### \_getWriter()

> **\_getWriter**(): [`Writer`](Writer.md)

#### Returns

[`Writer`](Writer.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/abi-coder.d.ts:11

***

### decode()

> **decode**(`types`, `data`, `loose`?): [`Result`](../interfaces/Result.md)

#### Parameters

• **types**: readonly (`string` \| [`ParamType`](ParamType.md))[]

• **data**: [`BytesLike`](../type-aliases/BytesLike.md)

• **loose?**: `boolean`

#### Returns

[`Result`](../interfaces/Result.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/abi-coder.d.ts:14

***

### encode()

> **encode**(`types`, `values`): `string`

#### Parameters

• **types**: readonly (`string` \| [`ParamType`](ParamType.md))[]

• **values**: readonly `any`[]

#### Returns

`string`

#### Defined in

node\_modules/@ethersproject/abi/lib/abi-coder.d.ts:13

***

### getDefaultValue()

> **getDefaultValue**(`types`): [`Result`](../interfaces/Result.md)

#### Parameters

• **types**: readonly (`string` \| [`ParamType`](ParamType.md))[]

#### Returns

[`Result`](../interfaces/Result.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/abi-coder.d.ts:12
