[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / AbiCoder

# Class: AbiCoder

[<internal>](../modules/internal_.md).AbiCoder

## Table of contents

### Constructors

- [constructor](internal_.AbiCoder.md#constructor)

### Properties

- [coerceFunc](internal_.AbiCoder.md#coercefunc)

### Methods

- [\_getCoder](internal_.AbiCoder.md#_getcoder)
- [\_getReader](internal_.AbiCoder.md#_getreader)
- [\_getWordSize](internal_.AbiCoder.md#_getwordsize)
- [\_getWriter](internal_.AbiCoder.md#_getwriter)
- [decode](internal_.AbiCoder.md#decode)
- [encode](internal_.AbiCoder.md#encode)
- [getDefaultValue](internal_.AbiCoder.md#getdefaultvalue)

## Constructors

### constructor

• **new AbiCoder**(`coerceFunc?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coerceFunc?` | [`CoerceFunc`](../modules/internal_.md#coercefunc) |

## Properties

### coerceFunc

• `Readonly` **coerceFunc**: [`CoerceFunc`](../modules/internal_.md#coercefunc)

#### Defined in

node_modules/@ethersproject/abi/lib/abi-coder.d.ts:6

## Methods

### \_getCoder

▸ **_getCoder**(`param`): [`Coder`](internal_.Coder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | [`ParamType`](internal_.ParamType.md) |

#### Returns

[`Coder`](internal_.Coder.md)

___

### \_getReader

▸ **_getReader**(`data`, `allowLoose?`): [`Reader`](internal_.Reader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |
| `allowLoose?` | `boolean` |

#### Returns

[`Reader`](internal_.Reader.md)

___

### \_getWordSize

▸ **_getWordSize**(): `number`

#### Returns

`number`

___

### \_getWriter

▸ **_getWriter**(): [`Writer`](internal_.Writer.md)

#### Returns

[`Writer`](internal_.Writer.md)

___

### decode

▸ **decode**(`types`, `data`, `loose?`): [`Result`](../interfaces/internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `types` | readonly (`string` \| [`ParamType`](internal_.ParamType.md))[] |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |
| `loose?` | `boolean` |

#### Returns

[`Result`](../interfaces/internal_.Result.md)

___

### encode

▸ **encode**(`types`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `types` | readonly (`string` \| [`ParamType`](internal_.ParamType.md))[] |
| `values` | readonly `any`[] |

#### Returns

`string`

___

### getDefaultValue

▸ **getDefaultValue**(`types`): [`Result`](../interfaces/internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `types` | readonly (`string` \| [`ParamType`](internal_.ParamType.md))[] |

#### Returns

[`Result`](../interfaces/internal_.Result.md)
