[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Account

# Interface: Account

[<internal>](../modules/internal_.md).Account

## Hierarchy

- **`Account`**

  ↳ [`AddedAccount`](internal_.AddedAccount.md)

## Table of contents

### Properties

- [address](internal_.Account.md#address)
- [encrypt](internal_.Account.md#encrypt)
- [privateKey](internal_.Account.md#privatekey)
- [sign](internal_.Account.md#sign)
- [signTransaction](internal_.Account.md#signtransaction)

## Properties

### address

• **address**: `string`

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

#### Defined in

node_modules/web3-core/types/index.d.ts:369

___

### privateKey

• **privateKey**: `string`

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

#### Defined in

node_modules/web3-core/types/index.d.ts:364
