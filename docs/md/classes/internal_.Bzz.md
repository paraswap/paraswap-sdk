[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Bzz

# Class: Bzz

[<internal>](../modules/internal_.md).Bzz

**`File`**

index.d.ts

**`Author`**

Josh Stevens <joshstevens19@hotmail.co.uk>

**`Date`**

2018

## Table of contents

### Constructors

- [constructor](internal_.Bzz.md#constructor)

### Properties

- [currentProvider](internal_.Bzz.md#currentprovider)
- [givenProvider](internal_.Bzz.md#givenprovider)
- [pick](internal_.Bzz.md#pick)
- [givenProvider](internal_.Bzz.md#givenprovider-1)

### Methods

- [download](internal_.Bzz.md#download)
- [setProvider](internal_.Bzz.md#setprovider)
- [upload](internal_.Bzz.md#upload)

## Constructors

### constructor

• **new Bzz**()

• **new Bzz**(`provider`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `any` |

## Properties

### currentProvider

• `Readonly` **currentProvider**: `any`

#### Defined in

node_modules/web3-bzz/types/index.d.ts:26

___

### givenProvider

• `Readonly` **givenProvider**: `any`

#### Defined in

node_modules/web3-bzz/types/index.d.ts:24

___

### pick

• **pick**: [`Pick`](../interfaces/internal_.Pick.md)

#### Defined in

node_modules/web3-bzz/types/index.d.ts:33

___

### givenProvider

▪ `Static` `Readonly` **givenProvider**: `any`

#### Defined in

node_modules/web3-bzz/types/index.d.ts:25

## Methods

### download

▸ **download**(`bzzHash`, `localPath?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bzzHash` | `string` |
| `localPath?` | `string` |

#### Returns

`Promise`<`any`\>

___

### setProvider

▸ **setProvider**(`provider`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `any` |

#### Returns

`boolean`

___

### upload

▸ **upload**(`data`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`Promise`<`string`\>
