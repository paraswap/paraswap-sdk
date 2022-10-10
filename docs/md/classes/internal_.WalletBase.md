[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / WalletBase

# Class: WalletBase

[<internal>](../modules/internal_.md).WalletBase

## Indexable

▪ [key: `number`]: [`Account`](../interfaces/internal_.Account.md)

## Table of contents

### Constructors

- [constructor](internal_.WalletBase.md#constructor)

### Properties

- [defaultKeyName](internal_.WalletBase.md#defaultkeyname)
- [length](internal_.WalletBase.md#length)

### Methods

- [add](internal_.WalletBase.md#add)
- [clear](internal_.WalletBase.md#clear)
- [create](internal_.WalletBase.md#create)
- [decrypt](internal_.WalletBase.md#decrypt)
- [encrypt](internal_.WalletBase.md#encrypt)
- [load](internal_.WalletBase.md#load)
- [remove](internal_.WalletBase.md#remove)
- [save](internal_.WalletBase.md#save)

## Constructors

### constructor

• **new WalletBase**(`accounts`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accounts` | [`AccountsBase`](internal_.AccountsBase.md) |

## Properties

### defaultKeyName

• **defaultKeyName**: `string`

#### Defined in

node_modules/web3-core/types/index.d.ts:328

___

### length

• **length**: `number`

#### Defined in

node_modules/web3-core/types/index.d.ts:327

## Methods

### add

▸ **add**(`account`): [`AddedAccount`](../interfaces/internal_.AddedAccount.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` \| [`AddAccount`](../interfaces/internal_.AddAccount.md) |

#### Returns

[`AddedAccount`](../interfaces/internal_.AddedAccount.md)

___

### clear

▸ **clear**(): [`WalletBase`](internal_.WalletBase.md)

#### Returns

[`WalletBase`](internal_.WalletBase.md)

___

### create

▸ **create**(`numberOfAccounts`, `entropy?`): [`WalletBase`](internal_.WalletBase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `numberOfAccounts` | `number` |
| `entropy?` | `string` |

#### Returns

[`WalletBase`](internal_.WalletBase.md)

___

### decrypt

▸ **decrypt**(`keystoreArray`, `password`): [`WalletBase`](internal_.WalletBase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `keystoreArray` | [`EncryptedKeystoreV3Json`](../interfaces/internal_.EncryptedKeystoreV3Json.md)[] |
| `password` | `string` |

#### Returns

[`WalletBase`](internal_.WalletBase.md)

___

### encrypt

▸ **encrypt**(`password`): [`EncryptedKeystoreV3Json`](../interfaces/internal_.EncryptedKeystoreV3Json.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `string` |

#### Returns

[`EncryptedKeystoreV3Json`](../interfaces/internal_.EncryptedKeystoreV3Json.md)[]

___

### load

▸ **load**(`password`, `keyName?`): [`WalletBase`](internal_.WalletBase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `string` |
| `keyName?` | `string` |

#### Returns

[`WalletBase`](internal_.WalletBase.md)

___

### remove

▸ **remove**(`account`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` \| `number` |

#### Returns

`boolean`

___

### save

▸ **save**(`password`, `keyName?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `string` |
| `keyName?` | `string` |

#### Returns

`boolean`
