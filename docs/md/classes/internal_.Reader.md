[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Reader

# Class: Reader

[<internal>](../modules/internal_.md).Reader

## Table of contents

### Constructors

- [constructor](internal_.Reader.md#constructor)

### Properties

- [\_coerceFunc](internal_.Reader.md#_coercefunc)
- [\_data](internal_.Reader.md#_data)
- [\_offset](internal_.Reader.md#_offset)
- [allowLoose](internal_.Reader.md#allowloose)
- [wordSize](internal_.Reader.md#wordsize)

### Accessors

- [consumed](internal_.Reader.md#consumed)
- [data](internal_.Reader.md#data)

### Methods

- [\_peekBytes](internal_.Reader.md#_peekbytes)
- [coerce](internal_.Reader.md#coerce)
- [readBytes](internal_.Reader.md#readbytes)
- [readValue](internal_.Reader.md#readvalue)
- [subReader](internal_.Reader.md#subreader)
- [coerce](internal_.Reader.md#coerce-1)

## Constructors

### constructor

• **new Reader**(`data`, `wordSize?`, `coerceFunc?`, `allowLoose?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |
| `wordSize?` | `number` |
| `coerceFunc?` | [`CoerceFunc`](../modules/internal_.md#coercefunc-1) |
| `allowLoose?` | `boolean` |

## Properties

### \_coerceFunc

• `Readonly` **\_coerceFunc**: [`CoerceFunc`](../modules/internal_.md#coercefunc-1)

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:41

___

### \_data

• `Readonly` **\_data**: `Uint8Array`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:40

___

### \_offset

• **\_offset**: `number`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:42

___

### allowLoose

• `Readonly` **allowLoose**: `boolean`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:39

___

### wordSize

• `Readonly` **wordSize**: `number`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:38

## Accessors

### consumed

• `get` **consumed**(): `number`

#### Returns

`number`

___

### data

• `get` **data**(): `string`

#### Returns

`string`

## Methods

### \_peekBytes

▸ **_peekBytes**(`offset`, `length`, `loose?`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |
| `length` | `number` |
| `loose?` | `boolean` |

#### Returns

`Uint8Array`

___

### coerce

▸ **coerce**(`name`, `value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

`any`

___

### readBytes

▸ **readBytes**(`length`, `loose?`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |
| `loose?` | `boolean` |

#### Returns

`Uint8Array`

___

### readValue

▸ **readValue**(): [`BigNumber`](internal_.BigNumber-1.md)

#### Returns

[`BigNumber`](internal_.BigNumber-1.md)

___

### subReader

▸ **subReader**(`offset`): [`Reader`](internal_.Reader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |

#### Returns

[`Reader`](internal_.Reader.md)

___

### coerce

▸ `Static` **coerce**(`name`, `value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

`any`
