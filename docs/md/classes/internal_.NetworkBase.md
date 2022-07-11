[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / NetworkBase

# Class: NetworkBase

[<internal>](../modules/internal_.md).NetworkBase

## Hierarchy

- **`NetworkBase`**

  ↳ [`Network`](internal_.Network.md)

## Table of contents

### Constructors

- [constructor](internal_.NetworkBase.md#constructor)

### Properties

- [BatchRequest](internal_.NetworkBase.md#batchrequest)
- [currentProvider](internal_.NetworkBase.md#currentprovider)
- [givenProvider](internal_.NetworkBase.md#givenprovider)
- [givenProvider](internal_.NetworkBase.md#givenprovider-1)
- [providers](internal_.NetworkBase.md#providers)

### Methods

- [extend](internal_.NetworkBase.md#extend)
- [getId](internal_.NetworkBase.md#getid)
- [getNetworkType](internal_.NetworkBase.md#getnetworktype)
- [getPeerCount](internal_.NetworkBase.md#getpeercount)
- [isListening](internal_.NetworkBase.md#islistening)
- [setProvider](internal_.NetworkBase.md#setprovider)

## Constructors

### constructor

• **new NetworkBase**()

• **new NetworkBase**(`provider`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`provider`](../modules/internal_.md#provider) |

• **new NetworkBase**(`provider`, `net`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`provider`](../modules/internal_.md#provider) |
| `net` | [`Socket`](internal_.Socket.md) |

## Properties

### BatchRequest

• **BatchRequest**: () => [`BatchRequest`](internal_.BatchRequest.md)

#### Type declaration

• **new NetworkBase**()

#### Defined in

node_modules/web3-core/types/index.d.ts:258

___

### currentProvider

• `Readonly` **currentProvider**: [`provider`](../modules/internal_.md#provider)

#### Defined in

node_modules/web3-core/types/index.d.ts:255

___

### givenProvider

• `Readonly` **givenProvider**: `any`

#### Defined in

node_modules/web3-core/types/index.d.ts:254

___

### givenProvider

▪ `Static` `Readonly` **givenProvider**: `any`

#### Defined in

node_modules/web3-core/types/index.d.ts:256

___

### providers

▪ `Static` `Readonly` **providers**: [`Providers`](../interfaces/internal_.Providers.md)

#### Defined in

node_modules/web3-core/types/index.d.ts:257

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

### getId

▸ **getId**(`callback?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `id`: `number`) => `void` |

#### Returns

`Promise`<`number`\>

___

### getNetworkType

▸ **getNetworkType**(`callback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `returnValue`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

___

### getPeerCount

▸ **getPeerCount**(`callback?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `peerCount`: `number`) => `void` |

#### Returns

`Promise`<`number`\>

___

### isListening

▸ **isListening**(`callback?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `listening`: `boolean`) => `void` |

#### Returns

`Promise`<`boolean`\>

___

### setProvider

▸ **setProvider**(`provider`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`provider`](../modules/internal_.md#provider) |

#### Returns

`boolean`
