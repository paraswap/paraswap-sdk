[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Personal

# Class: Personal

[<internal>](../modules/internal_.md).Personal

## Table of contents

### Constructors

- [constructor](internal_.Personal.md#constructor)

### Properties

- [BatchRequest](internal_.Personal.md#batchrequest)
- [currentProvider](internal_.Personal.md#currentprovider)
- [defaultAccount](internal_.Personal.md#defaultaccount)
- [defaultBlock](internal_.Personal.md#defaultblock)
- [givenProvider](internal_.Personal.md#givenprovider)
- [givenProvider](internal_.Personal.md#givenprovider-1)
- [providers](internal_.Personal.md#providers)

### Methods

- [ecRecover](internal_.Personal.md#ecrecover)
- [extend](internal_.Personal.md#extend)
- [getAccounts](internal_.Personal.md#getaccounts)
- [importRawKey](internal_.Personal.md#importrawkey)
- [lockAccount](internal_.Personal.md#lockaccount)
- [newAccount](internal_.Personal.md#newaccount)
- [sendTransaction](internal_.Personal.md#sendtransaction)
- [setProvider](internal_.Personal.md#setprovider)
- [sign](internal_.Personal.md#sign)
- [signTransaction](internal_.Personal.md#signtransaction)
- [unlockAccount](internal_.Personal.md#unlockaccount)

## Constructors

### constructor

• **new Personal**()

• **new Personal**(`provider`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`provider`](../modules/internal_.md#provider) |

• **new Personal**(`provider`, `net`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`provider`](../modules/internal_.md#provider) |
| `net` | [`Socket`](internal_.Socket.md) |

## Properties

### BatchRequest

• **BatchRequest**: () => [`BatchRequest`](internal_.BatchRequest.md)

#### Type declaration

• **new Personal**()

#### Defined in

node_modules/web3-eth-personal/types/index.d.ts:35

___

### currentProvider

• `Readonly` **currentProvider**: [`provider`](../modules/internal_.md#provider)

#### Defined in

node_modules/web3-eth-personal/types/index.d.ts:32

___

### defaultAccount

• **defaultAccount**: ``null`` \| `string`

#### Defined in

node_modules/web3-eth-personal/types/index.d.ts:33

___

### defaultBlock

• **defaultBlock**: `string` \| `number`

#### Defined in

node_modules/web3-eth-personal/types/index.d.ts:34

___

### givenProvider

• `Readonly` **givenProvider**: `any`

#### Defined in

node_modules/web3-eth-personal/types/index.d.ts:29

___

### givenProvider

▪ `Static` `Readonly` **givenProvider**: `any`

#### Defined in

node_modules/web3-eth-personal/types/index.d.ts:30

___

### providers

▪ `Static` `Readonly` **providers**: [`Providers`](../interfaces/internal_.Providers.md)

#### Defined in

node_modules/web3-eth-personal/types/index.d.ts:31

## Methods

### ecRecover

▸ **ecRecover**(`dataThatWasSigned`, `signature`, `callback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataThatWasSigned` | `string` |
| `signature` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `address`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

___

### extend

▸ **extend**(`extension`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `extension` | [`Extension`](../interfaces/internal_.Extension.md) |

#### Returns

`any`

___

### getAccounts

▸ **getAccounts**(`callback?`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `accounts`: `string`[]) => `void` |

#### Returns

`Promise`<`string`[]\>

___

### importRawKey

▸ **importRawKey**(`privateKey`, `password`, `callback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `string` |
| `password` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `result`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

___

### lockAccount

▸ **lockAccount**(`address`, `callback?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `success`: `boolean`) => `void` |

#### Returns

`Promise`<`boolean`\>

___

### newAccount

▸ **newAccount**(`password`, `callback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `address`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

___

### sendTransaction

▸ **sendTransaction**(`transactionConfig`, `password`, `callback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionConfig` | [`TransactionConfig`](../interfaces/internal_.TransactionConfig.md) |
| `password` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `transactionHash`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

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

▸ **sign**(`dataToSign`, `address`, `password`, `callback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataToSign` | `string` |
| `address` | `string` |
| `password` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `signature`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

___

### signTransaction

▸ **signTransaction**(`transactionConfig`, `password`, `callback?`): `Promise`<[`RLPEncodedTransaction`](../interfaces/internal_.RLPEncodedTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionConfig` | [`TransactionConfig`](../interfaces/internal_.TransactionConfig.md) |
| `password` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `RLPEncodedTransaction`: [`RLPEncodedTransaction`](../interfaces/internal_.RLPEncodedTransaction.md)) => `void` |

#### Returns

`Promise`<[`RLPEncodedTransaction`](../interfaces/internal_.RLPEncodedTransaction.md)\>

___

### unlockAccount

▸ **unlockAccount**(`address`, `password`, `unlockDuration`, `callback?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `password` | `string` |
| `unlockDuration` | `number` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

`Promise`<`boolean`\>
