[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Reader

# Class: Reader

## Constructors

### new Reader()

> **new Reader**(`data`, `wordSize`?, `coerceFunc`?, `allowLoose`?): [`Reader`](Reader.md)

#### Parameters

• **data**: [`BytesLike`](../type-aliases/BytesLike.md)

• **wordSize?**: `number`

• **coerceFunc?**: [`CoerceFunc`](../type-aliases/CoerceFunc.md)

• **allowLoose?**: `boolean`

#### Returns

[`Reader`](Reader.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:43

## Properties

### \_coerceFunc

> `readonly` **\_coerceFunc**: [`CoerceFunc`](../type-aliases/CoerceFunc.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:41

***

### \_data

> `readonly` **\_data**: `Uint8Array`

#### Defined in

node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:40

***

### \_offset

> **\_offset**: `number`

#### Defined in

node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:42

***

### allowLoose

> `readonly` **allowLoose**: `boolean`

#### Defined in

node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:39

***

### wordSize

> `readonly` **wordSize**: `number`

#### Defined in

node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:38

## Accessors

### consumed

#### Get Signature

> **get** **consumed**(): `number`

##### Returns

`number`

#### Defined in

node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:45

***

### data

#### Get Signature

> **get** **data**(): `string`

##### Returns

`string`

#### Defined in

node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:44

## Methods

### \_peekBytes()

> **\_peekBytes**(`offset`, `length`, `loose`?): `Uint8Array`

#### Parameters

• **offset**: `number`

• **length**: `number`

• **loose?**: `boolean`

#### Returns

`Uint8Array`

#### Defined in

node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:48

***

### coerce()

> **coerce**(`name`, `value`): `any`

#### Parameters

• **name**: `string`

• **value**: `any`

#### Returns

`any`

#### Defined in

node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:47

***

### readBytes()

> **readBytes**(`length`, `loose`?): `Uint8Array`

#### Parameters

• **length**: `number`

• **loose?**: `boolean`

#### Returns

`Uint8Array`

#### Defined in

node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:50

***

### readValue()

> **readValue**(): [`BigNumber`](BigNumber.md)

#### Returns

[`BigNumber`](BigNumber.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:51

***

### subReader()

> **subReader**(`offset`): [`Reader`](Reader.md)

#### Parameters

• **offset**: `number`

#### Returns

[`Reader`](Reader.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:49

***

### coerce()

> `static` **coerce**(`name`, `value`): `any`

#### Parameters

• **name**: `string`

• **value**: `any`

#### Returns

`any`

#### Defined in

node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:46
