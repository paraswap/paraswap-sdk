[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Coder

# Class: Coder

[<internal>](../modules/internal_.md).Coder

## Table of contents

### Constructors

- [constructor](internal_.Coder.md#constructor)

### Properties

- [dynamic](internal_.Coder.md#dynamic)
- [localName](internal_.Coder.md#localname)
- [name](internal_.Coder.md#name)
- [type](internal_.Coder.md#type)

### Methods

- [\_throwError](internal_.Coder.md#_throwerror)
- [decode](internal_.Coder.md#decode)
- [defaultValue](internal_.Coder.md#defaultvalue)
- [encode](internal_.Coder.md#encode)

## Constructors

### constructor

• **new Coder**(`name`, `type`, `localName`, `dynamic`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `type` | `string` |
| `localName` | `string` |
| `dynamic` | `boolean` |

## Properties

### dynamic

• `Readonly` **dynamic**: `boolean`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:15

___

### localName

• `Readonly` **localName**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:14

___

### name

• `Readonly` **name**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:12

___

### type

• `Readonly` **type**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:13

## Methods

### \_throwError

▸ **_throwError**(`message`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `value` | `any` |

#### Returns

`void`

___

### decode

▸ `Abstract` **decode**(`reader`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`Reader`](internal_.Reader.md) |

#### Returns

`any`

___

### defaultValue

▸ `Abstract` **defaultValue**(): `any`

#### Returns

`any`

___

### encode

▸ `Abstract` **encode**(`writer`, `value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`Writer`](internal_.Writer.md) |
| `value` | `any` |

#### Returns

`number`
