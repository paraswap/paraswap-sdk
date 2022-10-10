[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Iban

# Class: Iban

[<internal>](../modules/internal_.md).Iban

**`File`**

index.d.ts

**`Author`**

Josh Stevens <joshstevens19@hotmail.co.uk>

**`Date`**

2018

## Table of contents

### Constructors

- [constructor](internal_.Iban.md#constructor)

### Methods

- [checksum](internal_.Iban.md#checksum)
- [client](internal_.Iban.md#client)
- [institution](internal_.Iban.md#institution)
- [isDirect](internal_.Iban.md#isdirect)
- [isIndirect](internal_.Iban.md#isindirect)
- [isValid](internal_.Iban.md#isvalid)
- [toAddress](internal_.Iban.md#toaddress)
- [toString](internal_.Iban.md#tostring)
- [createIndirect](internal_.Iban.md#createindirect)
- [fromAddress](internal_.Iban.md#fromaddress)
- [fromBban](internal_.Iban.md#frombban)
- [isValid](internal_.Iban.md#isvalid-1)
- [toAddress](internal_.Iban.md#toaddress-1)
- [toIban](internal_.Iban.md#toiban)

## Constructors

### constructor

• **new Iban**(`iban`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iban` | `string` |

## Methods

### checksum

▸ **checksum**(): `string`

#### Returns

`string`

___

### client

▸ **client**(): `string`

#### Returns

`string`

___

### institution

▸ **institution**(): `string`

#### Returns

`string`

___

### isDirect

▸ **isDirect**(): `boolean`

#### Returns

`boolean`

___

### isIndirect

▸ **isIndirect**(): `boolean`

#### Returns

`boolean`

___

### isValid

▸ **isValid**(): `boolean`

#### Returns

`boolean`

___

### toAddress

▸ **toAddress**(): `string`

#### Returns

`string`

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

___

### createIndirect

▸ `Static` **createIndirect**(`options`): [`Iban`](internal_.Iban.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IndirectOptions`](../interfaces/internal_.IndirectOptions.md) |

#### Returns

[`Iban`](internal_.Iban.md)

___

### fromAddress

▸ `Static` **fromAddress**(`address`): [`Iban`](internal_.Iban.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`Iban`](internal_.Iban.md)

___

### fromBban

▸ `Static` **fromBban**(`bban`): [`Iban`](internal_.Iban.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bban` | `string` |

#### Returns

[`Iban`](internal_.Iban.md)

___

### isValid

▸ `Static` **isValid**(`iban`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `iban` | `string` |

#### Returns

`boolean`

___

### toAddress

▸ `Static` **toAddress**(`iban`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `iban` | `string` |

#### Returns

`string`

___

### toIban

▸ `Static` **toIban**(`address`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`string`
