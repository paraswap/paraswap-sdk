[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / EncryptedKeystoreV3Json

# Interface: EncryptedKeystoreV3Json

[<internal>](../modules/internal_.md).EncryptedKeystoreV3Json

## Table of contents

### Properties

- [address](internal_.EncryptedKeystoreV3Json.md#address)
- [crypto](internal_.EncryptedKeystoreV3Json.md#crypto)
- [id](internal_.EncryptedKeystoreV3Json.md#id)
- [version](internal_.EncryptedKeystoreV3Json.md#version)

## Properties

### address

• **address**: `string`

#### Defined in

node_modules/web3-core/types/index.d.ts:375

___

### crypto

• **crypto**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cipher` | `string` |
| `cipherparams` | { `iv`: `string`  } |
| `cipherparams.iv` | `string` |
| `ciphertext` | `string` |
| `kdf` | `string` |
| `kdfparams` | { `dklen`: `number` ; `n`: `number` ; `p`: `number` ; `r`: `number` ; `salt`: `string`  } |
| `kdfparams.dklen` | `number` |
| `kdfparams.n` | `number` |
| `kdfparams.p` | `number` |
| `kdfparams.r` | `number` |
| `kdfparams.salt` | `string` |
| `mac` | `string` |

#### Defined in

node_modules/web3-core/types/index.d.ts:376

___

### id

• **id**: `string`

#### Defined in

node_modules/web3-core/types/index.d.ts:374

___

### version

• **version**: `number`

#### Defined in

node_modules/web3-core/types/index.d.ts:373
