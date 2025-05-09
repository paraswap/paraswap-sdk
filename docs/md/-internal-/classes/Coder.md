[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Coder

# Class: `abstract` Coder

## Constructors

### new Coder()

> **new Coder**(`name`, `type`, `localName`, `dynamic`): [`Coder`](Coder.md)

#### Parameters

• **name**: `string`

• **type**: `string`

• **localName**: `string`

• **dynamic**: `boolean`

#### Returns

[`Coder`](Coder.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:16

## Properties

### dynamic

> `readonly` **dynamic**: `boolean`

#### Defined in

node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:15

***

### localName

> `readonly` **localName**: `string`

#### Defined in

node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:14

***

### name

> `readonly` **name**: `string`

#### Defined in

node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:12

***

### type

> `readonly` **type**: `string`

#### Defined in

node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:13

## Methods

### \_throwError()

> **\_throwError**(`message`, `value`): `void`

#### Parameters

• **message**: `string`

• **value**: `any`

#### Returns

`void`

#### Defined in

node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:17

***

### decode()

> `abstract` **decode**(`reader`): `any`

#### Parameters

• **reader**: [`Reader`](Reader.md)

#### Returns

`any`

#### Defined in

node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:19

***

### defaultValue()

> `abstract` **defaultValue**(): `any`

#### Returns

`any`

#### Defined in

node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:20

***

### encode()

> `abstract` **encode**(`writer`, `value`): `number`

#### Parameters

• **writer**: [`Writer`](Writer.md)

• **value**: `any`

#### Returns

`number`

#### Defined in

node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:18
