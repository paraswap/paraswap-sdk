[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / Writer

# Class: Writer

## Constructors

### new Writer()

> **new Writer**(`wordSize`?): [`Writer`](Writer.md)

#### Parameters

• **wordSize?**: `number`

#### Returns

[`Writer`](Writer.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:27

## Properties

### \_data

> **\_data**: `Uint8Array`[]

#### Defined in

node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:24

***

### \_dataLength

> **\_dataLength**: `number`

#### Defined in

node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:25

***

### \_padding

> **\_padding**: `Uint8Array`

#### Defined in

node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:26

***

### wordSize

> `readonly` **wordSize**: `number`

#### Defined in

node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:23

## Accessors

### data

#### Get Signature

> **get** **data**(): `string`

##### Returns

`string`

#### Defined in

node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:28

***

### length

#### Get Signature

> **get** **length**(): `number`

##### Returns

`number`

#### Defined in

node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:29

## Methods

### \_getValue()

> **\_getValue**(`value`): `Uint8Array`

#### Parameters

• **value**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

`Uint8Array`

#### Defined in

node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:33

***

### \_writeData()

> **\_writeData**(`data`): `number`

#### Parameters

• **data**: `Uint8Array`

#### Returns

`number`

#### Defined in

node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:30

***

### appendWriter()

> **appendWriter**(`writer`): `number`

#### Parameters

• **writer**: [`Writer`](Writer.md)

#### Returns

`number`

#### Defined in

node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:31

***

### writeBytes()

> **writeBytes**(`value`): `number`

#### Parameters

• **value**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

`number`

#### Defined in

node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:32

***

### writeUpdatableValue()

> **writeUpdatableValue**(): (`value`) => `void`

#### Returns

`Function`

##### Parameters

• **value**: [`BigNumberish`](../type-aliases/BigNumberish.md)

##### Returns

`void`

#### Defined in

node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:35

***

### writeValue()

> **writeValue**(`value`): `number`

#### Parameters

• **value**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

`number`

#### Defined in

node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:34
