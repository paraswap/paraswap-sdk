[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Formatter

# Class: Formatter

[<internal>](../modules/internal_.md).Formatter

## Table of contents

### Constructors

- [constructor](internal_.Formatter.md#constructor)

### Properties

- [formats](internal_.Formatter.md#formats)

### Methods

- [\_block](internal_.Formatter.md#_block)
- [accessList](internal_.Formatter.md#accesslist)
- [address](internal_.Formatter.md#address)
- [bigNumber](internal_.Formatter.md#bignumber)
- [block](internal_.Formatter.md#block)
- [blockTag](internal_.Formatter.md#blocktag)
- [blockWithTransactions](internal_.Formatter.md#blockwithtransactions)
- [boolean](internal_.Formatter.md#boolean)
- [callAddress](internal_.Formatter.md#calladdress)
- [contractAddress](internal_.Formatter.md#contractaddress)
- [data](internal_.Formatter.md#data)
- [difficulty](internal_.Formatter.md#difficulty)
- [filter](internal_.Formatter.md#filter)
- [filterLog](internal_.Formatter.md#filterlog)
- [getDefaultFormats](internal_.Formatter.md#getdefaultformats)
- [hash](internal_.Formatter.md#hash)
- [hex](internal_.Formatter.md#hex)
- [number](internal_.Formatter.md#number)
- [receipt](internal_.Formatter.md#receipt)
- [receiptLog](internal_.Formatter.md#receiptlog)
- [topics](internal_.Formatter.md#topics)
- [transaction](internal_.Formatter.md#transaction)
- [transactionRequest](internal_.Formatter.md#transactionrequest)
- [transactionResponse](internal_.Formatter.md#transactionresponse)
- [type](internal_.Formatter.md#type)
- [uint256](internal_.Formatter.md#uint256)
- [allowFalsish](internal_.Formatter.md#allowfalsish)
- [allowNull](internal_.Formatter.md#allownull)
- [arrayOf](internal_.Formatter.md#arrayof)
- [check](internal_.Formatter.md#check)

## Constructors

### constructor

• **new Formatter**()

## Properties

### formats

• `Readonly` **formats**: [`Formats`](../modules/internal_.md#formats)

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:19

## Methods

### \_block

▸ **_block**(`value`, `format`): [`Block`](../interfaces/internal_.Block.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `format` | `any` |

#### Returns

[`Block`](../interfaces/internal_.Block.md)

___

### accessList

▸ **accessList**(`accessList`): [`AccessList`](../modules/internal_.md#accesslist)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessList` | `any`[] |

#### Returns

[`AccessList`](../modules/internal_.md#accesslist)

___

### address

▸ **address**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string`

___

### bigNumber

▸ **bigNumber**(`value`): [`BigNumber`](internal_.BigNumber-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`BigNumber`](internal_.BigNumber-1.md)

___

### block

▸ **block**(`value`): [`Block`](../interfaces/internal_.Block.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`Block`](../interfaces/internal_.Block.md)

___

### blockTag

▸ **blockTag**(`blockTag`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag` | `any` |

#### Returns

`string`

___

### blockWithTransactions

▸ **blockWithTransactions**(`value`): [`Block`](../interfaces/internal_.Block.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`Block`](../interfaces/internal_.Block.md)

___

### boolean

▸ **boolean**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

___

### callAddress

▸ **callAddress**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string`

___

### contractAddress

▸ **contractAddress**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string`

___

### data

▸ **data**(`value`, `strict?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `strict?` | `boolean` |

#### Returns

`string`

___

### difficulty

▸ **difficulty**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`number`

___

### filter

▸ **filter**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

___

### filterLog

▸ **filterLog**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

___

### getDefaultFormats

▸ **getDefaultFormats**(): [`Formats`](../modules/internal_.md#formats)

#### Returns

[`Formats`](../modules/internal_.md#formats)

___

### hash

▸ **hash**(`value`, `strict?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `strict?` | `boolean` |

#### Returns

`string`

___

### hex

▸ **hex**(`value`, `strict?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `strict?` | `boolean` |

#### Returns

`string`

___

### number

▸ **number**(`number`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `any` |

#### Returns

`number`

___

### receipt

▸ **receipt**(`value`): [`TransactionReceipt`](../interfaces/internal_.TransactionReceipt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt.md)

___

### receiptLog

▸ **receiptLog**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

___

### topics

▸ **topics**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

___

### transaction

▸ **transaction**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

___

### transactionRequest

▸ **transactionRequest**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

___

### transactionResponse

▸ **transactionResponse**(`transaction`): [`TransactionResponse`](../interfaces/internal_.TransactionResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `any` |

#### Returns

[`TransactionResponse`](../interfaces/internal_.TransactionResponse.md)

___

### type

▸ **type**(`number`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `any` |

#### Returns

`number`

___

### uint256

▸ **uint256**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string`

___

### allowFalsish

▸ `Static` **allowFalsish**(`format`, `replaceValue`): [`FormatFunc`](../modules/internal_.md#formatfunc)

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | [`FormatFunc`](../modules/internal_.md#formatfunc) |
| `replaceValue` | `any` |

#### Returns

[`FormatFunc`](../modules/internal_.md#formatfunc)

___

### allowNull

▸ `Static` **allowNull**(`format`, `nullValue?`): [`FormatFunc`](../modules/internal_.md#formatfunc)

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | [`FormatFunc`](../modules/internal_.md#formatfunc) |
| `nullValue?` | `any` |

#### Returns

[`FormatFunc`](../modules/internal_.md#formatfunc)

___

### arrayOf

▸ `Static` **arrayOf**(`format`): [`FormatFunc`](../modules/internal_.md#formatfunc)

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | [`FormatFunc`](../modules/internal_.md#formatfunc) |

#### Returns

[`FormatFunc`](../modules/internal_.md#formatfunc)

___

### check

▸ `Static` **check**(`format`, `object`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | `Object` |
| `object` | `any` |

#### Returns

`any`
