[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Accounts

# Class: Accounts

[<internal>](../modules/internal_.md).Accounts

## Hierarchy

- [`AccountsBase`](internal_.AccountsBase.md)

  ↳ **`Accounts`**

## Table of contents

### Constructors

- [constructor](internal_.Accounts.md#constructor)

### Properties

- [currentProvider](internal_.Accounts.md#currentprovider)
- [givenProvider](internal_.Accounts.md#givenprovider)
- [wallet](internal_.Accounts.md#wallet)

### Methods

- [create](internal_.Accounts.md#create)
- [decrypt](internal_.Accounts.md#decrypt)
- [encrypt](internal_.Accounts.md#encrypt)
- [hashMessage](internal_.Accounts.md#hashmessage)
- [privateKeyToAccount](internal_.Accounts.md#privatekeytoaccount)
- [recover](internal_.Accounts.md#recover)
- [recoverTransaction](internal_.Accounts.md#recovertransaction)
- [setProvider](internal_.Accounts.md#setprovider)
- [sign](internal_.Accounts.md#sign)
- [signTransaction](internal_.Accounts.md#signtransaction)

## Constructors

### constructor

• **new Accounts**()

#### Inherited from

[AccountsBase](internal_.AccountsBase.md).[constructor](internal_.AccountsBase.md#constructor)

• **new Accounts**(`provider`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`provider`](../modules/internal_.md#provider) |

#### Inherited from

[AccountsBase](internal_.AccountsBase.md).[constructor](internal_.AccountsBase.md#constructor)

• **new Accounts**(`provider`, `net`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`provider`](../modules/internal_.md#provider) |
| `net` | [`Socket`](internal_.Socket.md) |

#### Inherited from

[AccountsBase](internal_.AccountsBase.md).[constructor](internal_.AccountsBase.md#constructor)

## Properties

### currentProvider

• `Readonly` **currentProvider**: [`provider`](../modules/internal_.md#provider)

#### Inherited from

[AccountsBase](internal_.AccountsBase.md).[currentProvider](internal_.AccountsBase.md#currentprovider)

#### Defined in

node_modules/web3-core/types/index.d.ts:287

___

### givenProvider

• `Readonly` **givenProvider**: `any`

#### Inherited from

[AccountsBase](internal_.AccountsBase.md).[givenProvider](internal_.AccountsBase.md#givenprovider)

#### Defined in

node_modules/web3-core/types/index.d.ts:286

___

### wallet

• **wallet**: [`WalletBase`](internal_.WalletBase.md)

#### Inherited from

[AccountsBase](internal_.AccountsBase.md).[wallet](internal_.AccountsBase.md#wallet)

#### Defined in

node_modules/web3-core/types/index.d.ts:321

## Methods

### create

▸ **create**(`entropy?`): [`Account`](../interfaces/internal_.Account.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `entropy?` | `string` |

#### Returns

[`Account`](../interfaces/internal_.Account.md)

#### Inherited from

[AccountsBase](internal_.AccountsBase.md).[create](internal_.AccountsBase.md#create)

___

### decrypt

▸ **decrypt**(`keystoreJsonV3`, `password`): [`Account`](../interfaces/internal_.Account.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `keystoreJsonV3` | [`EncryptedKeystoreV3Json`](../interfaces/internal_.EncryptedKeystoreV3Json.md) |
| `password` | `string` |

#### Returns

[`Account`](../interfaces/internal_.Account.md)

#### Inherited from

[AccountsBase](internal_.AccountsBase.md).[decrypt](internal_.AccountsBase.md#decrypt)

___

### encrypt

▸ **encrypt**(`privateKey`, `password`): [`EncryptedKeystoreV3Json`](../interfaces/internal_.EncryptedKeystoreV3Json.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `string` |
| `password` | `string` |

#### Returns

[`EncryptedKeystoreV3Json`](../interfaces/internal_.EncryptedKeystoreV3Json.md)

#### Inherited from

[AccountsBase](internal_.AccountsBase.md).[encrypt](internal_.AccountsBase.md#encrypt)

___

### hashMessage

▸ **hashMessage**(`message`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`string`

#### Inherited from

[AccountsBase](internal_.AccountsBase.md).[hashMessage](internal_.AccountsBase.md#hashmessage)

___

### privateKeyToAccount

▸ **privateKeyToAccount**(`privateKey`, `ignoreLength?`): [`Account`](../interfaces/internal_.Account.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `string` |
| `ignoreLength?` | `boolean` |

#### Returns

[`Account`](../interfaces/internal_.Account.md)

#### Inherited from

[AccountsBase](internal_.AccountsBase.md).[privateKeyToAccount](internal_.AccountsBase.md#privatekeytoaccount)

___

### recover

▸ **recover**(`signatureObject`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `signatureObject` | [`SignatureObject`](../interfaces/internal_.SignatureObject.md) |

#### Returns

`string`

#### Inherited from

[AccountsBase](internal_.AccountsBase.md).[recover](internal_.AccountsBase.md#recover)

▸ **recover**(`message`, `signature`, `preFixed?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `signature` | `string` |
| `preFixed?` | `boolean` |

#### Returns

`string`

#### Inherited from

[AccountsBase](internal_.AccountsBase.md).[recover](internal_.AccountsBase.md#recover)

▸ **recover**(`message`, `v`, `r`, `s`, `preFixed?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `v` | `string` |
| `r` | `string` |
| `s` | `string` |
| `preFixed?` | `boolean` |

#### Returns

`string`

#### Inherited from

[AccountsBase](internal_.AccountsBase.md).[recover](internal_.AccountsBase.md#recover)

___

### recoverTransaction

▸ **recoverTransaction**(`signature`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | `string` |

#### Returns

`string`

#### Inherited from

[AccountsBase](internal_.AccountsBase.md).[recoverTransaction](internal_.AccountsBase.md#recovertransaction)

___

### setProvider

▸ **setProvider**(`provider`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`provider`](../modules/internal_.md#provider) |

#### Returns

`boolean`

#### Inherited from

[AccountsBase](internal_.AccountsBase.md).[setProvider](internal_.AccountsBase.md#setprovider)

___

### sign

▸ **sign**(`data`, `privateKey`): [`Sign`](../interfaces/internal_.Sign.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `privateKey` | `string` |

#### Returns

[`Sign`](../interfaces/internal_.Sign.md)

#### Inherited from

[AccountsBase](internal_.AccountsBase.md).[sign](internal_.AccountsBase.md#sign)

___

### signTransaction

▸ **signTransaction**(`transactionConfig`, `privateKey`, `callback?`): `Promise`<[`SignedTransaction`](../interfaces/internal_.SignedTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionConfig` | [`TransactionConfig`](../interfaces/internal_.TransactionConfig.md) |
| `privateKey` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `signedTransaction`: [`SignedTransaction`](../interfaces/internal_.SignedTransaction.md)) => `void` |

#### Returns

`Promise`<[`SignedTransaction`](../interfaces/internal_.SignedTransaction.md)\>

#### Inherited from

[AccountsBase](internal_.AccountsBase.md).[signTransaction](internal_.AccountsBase.md#signtransaction)
