[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / default

# Class: default

[<internal>](../modules/internal_.md).default

## Table of contents

### Constructors

- [constructor](internal_.default.md#constructor)

### Properties

- [BatchRequest](internal_.default.md#batchrequest)
- [bzz](internal_.default.md#bzz)
- [currentProvider](internal_.default.md#currentprovider)
- [defaultAccount](internal_.default.md#defaultaccount)
- [defaultBlock](internal_.default.md#defaultblock)
- [eth](internal_.default.md#eth)
- [givenProvider](internal_.default.md#givenprovider)
- [shh](internal_.default.md#shh)
- [utils](internal_.default.md#utils)
- [version](internal_.default.md#version)
- [givenProvider](internal_.default.md#givenprovider-1)
- [modules](internal_.default.md#modules)
- [providers](internal_.default.md#providers)
- [utils](internal_.default.md#utils-1)
- [version](internal_.default.md#version-1)

### Methods

- [extend](internal_.default.md#extend)
- [setProvider](internal_.default.md#setprovider)

## Constructors

### constructor

• **new default**()

• **new default**(`provider`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`provider`](../modules/internal_.md#provider) |

• **new default**(`provider`, `net`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`provider`](../modules/internal_.md#provider) |
| `net` | [`Socket`](internal_.Socket.md) |

## Properties

### BatchRequest

• **BatchRequest**: () => [`BatchRequest`](internal_.BatchRequest.md)

#### Type declaration

• **new default**()

#### Defined in

node_modules/web3/types/index.d.ts:41

___

### bzz

• **bzz**: [`Bzz`](internal_.Bzz.md)

#### Defined in

node_modules/web3/types/index.d.ts:47

___

### currentProvider

• `Readonly` **currentProvider**: [`provider`](../modules/internal_.md#provider)

#### Defined in

node_modules/web3/types/index.d.ts:39

___

### defaultAccount

• **defaultAccount**: ``null`` \| `string`

#### Defined in

node_modules/web3/types/index.d.ts:37

___

### defaultBlock

• **defaultBlock**: `string` \| `number`

#### Defined in

node_modules/web3/types/index.d.ts:38

___

### eth

• **eth**: [`Eth`](internal_.Eth.md)

#### Defined in

node_modules/web3/types/index.d.ts:45

___

### givenProvider

• `Readonly` **givenProvider**: `any`

#### Defined in

node_modules/web3/types/index.d.ts:35

___

### shh

• **shh**: [`Shh`](internal_.Shh.md)

#### Defined in

node_modules/web3/types/index.d.ts:46

___

### utils

• **utils**: [`Utils`](../interfaces/internal_.Utils.md)

#### Defined in

node_modules/web3/types/index.d.ts:44

___

### version

• **version**: `string`

#### Defined in

node_modules/web3/types/index.d.ts:48

___

### givenProvider

▪ `Static` `Readonly` **givenProvider**: `any`

#### Defined in

node_modules/web3/types/index.d.ts:36

___

### modules

▪ `Static` **modules**: [`Modules`](../interfaces/internal_.Modules.md)

#### Defined in

node_modules/web3/types/index.d.ts:34

___

### providers

▪ `Static` `Readonly` **providers**: [`Providers`](../interfaces/internal_.Providers.md)

#### Defined in

node_modules/web3/types/index.d.ts:42

___

### utils

▪ `Static` `Readonly` **utils**: [`Utils`](../interfaces/internal_.Utils.md)

#### Defined in

node_modules/web3/types/index.d.ts:50

___

### version

▪ `Static` `Readonly` **version**: `string`

#### Defined in

node_modules/web3/types/index.d.ts:49

## Methods

### extend

▸ **extend**(`extension`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `extension` | [`Extension`](../interfaces/internal_.Extension.md) |

#### Returns

`any`

___

### setProvider

▸ **setProvider**(`provider`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`provider`](../modules/internal_.md#provider) |

#### Returns

`boolean`
