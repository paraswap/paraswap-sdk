[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / AddedAccount

# Interface: AddedAccount

[<internal>](../modules/internal_.md).AddedAccount

## Hierarchy

- [`Account`](internal_.Account.md)

  ↳ **`AddedAccount`**

## Table of contents

### Properties

- [address](internal_.AddedAccount.md#address)
- [encrypt](internal_.AddedAccount.md#encrypt)
- [index](internal_.AddedAccount.md#index)
- [privateKey](internal_.AddedAccount.md#privatekey)
- [sign](internal_.AddedAccount.md#sign)
- [signTransaction](internal_.AddedAccount.md#signtransaction)

## Properties

### address

• **address**: `string`

#### Inherited from

[Account](internal_.Account.md).[address](internal_.Account.md#address)

#### Defined in

node_modules/web3-core/types/index.d.ts:362

___

### encrypt

• **encrypt**: (`password`: `string`) => [`EncryptedKeystoreV3Json`](internal_.EncryptedKeystoreV3Json.md)

#### Type declaration

▸ (`password`): [`EncryptedKeystoreV3Json`](internal_.EncryptedKeystoreV3Json.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `string` |

##### Returns

[`EncryptedKeystoreV3Json`](internal_.EncryptedKeystoreV3Json.md)

#### Inherited from

[Account](internal_.Account.md).[encrypt](internal_.Account.md#encrypt)

#### Defined in

node_modules/web3-core/types/index.d.ts:369

___

### index

• **index**: `number`

#### Defined in

node_modules/web3-core/types/index.d.ts:358

___

### privateKey

• **privateKey**: `string`

#### Inherited from

[Account](internal_.Account.md).[privateKey](internal_.Account.md#privatekey)

#### Defined in

node_modules/web3-core/types/index.d.ts:363

___

### sign

• **sign**: (`data`: `string`) => [`Sign`](internal_.Sign.md)

#### Type declaration

▸ (`data`): [`Sign`](internal_.Sign.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

##### Returns

[`Sign`](internal_.Sign.md)

#### Inherited from

[Account](internal_.Account.md).[sign](internal_.Account.md#sign)

#### Defined in

node_modules/web3-core/types/index.d.ts:368

___

### signTransaction

• **signTransaction**: (`transactionConfig`: [`TransactionConfig`](internal_.TransactionConfig.md), `callback?`: (`signTransaction`: [`SignedTransaction`](internal_.SignedTransaction.md)) => `void`) => `Promise`<[`SignedTransaction`](internal_.SignedTransaction.md)\>

#### Type declaration

▸ (`transactionConfig`, `callback?`): `Promise`<[`SignedTransaction`](internal_.SignedTransaction.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `transactionConfig` | [`TransactionConfig`](internal_.TransactionConfig.md) |
| `callback?` | (`signTransaction`: [`SignedTransaction`](internal_.SignedTransaction.md)) => `void` |

##### Returns

`Promise`<[`SignedTransaction`](internal_.SignedTransaction.md)\>

#### Inherited from

[Account](internal_.Account.md).[signTransaction](internal_.Account.md#signtransaction)

#### Defined in

node_modules/web3-core/types/index.d.ts:364
