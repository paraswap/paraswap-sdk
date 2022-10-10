[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / AccountsBase

# Class: AccountsBase

[<internal>](../modules/internal_.md).AccountsBase

## Hierarchy

- **`AccountsBase`**

  ↳ [`Accounts`](internal_.Accounts.md)

## Table of contents

### Constructors

- [constructor](internal_.AccountsBase.md#constructor)

### Properties

- [currentProvider](internal_.AccountsBase.md#currentprovider)
- [givenProvider](internal_.AccountsBase.md#givenprovider)
- [wallet](internal_.AccountsBase.md#wallet)

### Methods

- [create](internal_.AccountsBase.md#create)
- [decrypt](internal_.AccountsBase.md#decrypt)
- [encrypt](internal_.AccountsBase.md#encrypt)
- [hashMessage](internal_.AccountsBase.md#hashmessage)
- [privateKeyToAccount](internal_.AccountsBase.md#privatekeytoaccount)
- [recover](internal_.AccountsBase.md#recover)
- [recoverTransaction](internal_.AccountsBase.md#recovertransaction)
- [setProvider](internal_.AccountsBase.md#setprovider)
- [sign](internal_.AccountsBase.md#sign)
- [signTransaction](internal_.AccountsBase.md#signtransaction)

## Constructors

### constructor

• **new AccountsBase**()

• **new AccountsBase**(`provider`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`provider`](../modules/internal_.md#provider) |

• **new AccountsBase**(`provider`, `net`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`provider`](../modules/internal_.md#provider) |
| `net` | [`Socket`](internal_.Socket.md) |

## Properties

### currentProvider

• `Readonly` **currentProvider**: [`provider`](../modules/internal_.md#provider)

#### Defined in

node_modules/web3-core/types/index.d.ts:287

___

### givenProvider

• `Readonly` **givenProvider**: `any`

#### Defined in

node_modules/web3-core/types/index.d.ts:286

___

### wallet

• **wallet**: [`WalletBase`](internal_.WalletBase.md)

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

___

### hashMessage

▸ **hashMessage**(`message`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`string`

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

___

### recover

▸ **recover**(`signatureObject`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `signatureObject` | [`SignatureObject`](../interfaces/internal_.SignatureObject.md) |

#### Returns

`string`

▸ **recover**(`message`, `signature`, `preFixed?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `signature` | `string` |
| `preFixed?` | `boolean` |

#### Returns

`string`

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

___

### recoverTransaction

▸ **recoverTransaction**(`signature`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | `string` |

#### Returns

`string`

___

### setProvider

▸ **setProvider**(`provider`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`provider`](../modules/internal_.md#provider) |

#### Returns

`boolean`

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
