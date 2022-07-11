[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Network

# Class: Network

[<internal>](../modules/internal_.md).Network

## Hierarchy

- [`NetworkBase`](internal_.NetworkBase.md)

  ↳ **`Network`**

## Table of contents

### Constructors

- [constructor](internal_.Network.md#constructor)

### Properties

- [BatchRequest](internal_.Network.md#batchrequest)
- [currentProvider](internal_.Network.md#currentprovider)
- [givenProvider](internal_.Network.md#givenprovider)
- [givenProvider](internal_.Network.md#givenprovider-1)
- [providers](internal_.Network.md#providers)

### Methods

- [extend](internal_.Network.md#extend)
- [getId](internal_.Network.md#getid)
- [getNetworkType](internal_.Network.md#getnetworktype)
- [getPeerCount](internal_.Network.md#getpeercount)
- [isListening](internal_.Network.md#islistening)
- [setProvider](internal_.Network.md#setprovider)

## Constructors

### constructor

• **new Network**()

#### Inherited from

[NetworkBase](internal_.NetworkBase.md).[constructor](internal_.NetworkBase.md#constructor)

• **new Network**(`provider`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`provider`](../modules/internal_.md#provider) |

#### Inherited from

[NetworkBase](internal_.NetworkBase.md).[constructor](internal_.NetworkBase.md#constructor)

• **new Network**(`provider`, `net`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`provider`](../modules/internal_.md#provider) |
| `net` | [`Socket`](internal_.Socket.md) |

#### Inherited from

[NetworkBase](internal_.NetworkBase.md).[constructor](internal_.NetworkBase.md#constructor)

## Properties

### BatchRequest

• **BatchRequest**: () => [`BatchRequest`](internal_.BatchRequest.md)

#### Type declaration

• **new Network**()

#### Inherited from

[NetworkBase](internal_.NetworkBase.md).[BatchRequest](internal_.NetworkBase.md#batchrequest)

#### Defined in

node_modules/web3-core/types/index.d.ts:258

___

### currentProvider

• `Readonly` **currentProvider**: [`provider`](../modules/internal_.md#provider)

#### Inherited from

[NetworkBase](internal_.NetworkBase.md).[currentProvider](internal_.NetworkBase.md#currentprovider)

#### Defined in

node_modules/web3-core/types/index.d.ts:255

___

### givenProvider

• `Readonly` **givenProvider**: `any`

#### Inherited from

[NetworkBase](internal_.NetworkBase.md).[givenProvider](internal_.NetworkBase.md#givenprovider)

#### Defined in

node_modules/web3-core/types/index.d.ts:254

___

### givenProvider

▪ `Static` `Readonly` **givenProvider**: `any`

#### Inherited from

[NetworkBase](internal_.NetworkBase.md).[givenProvider](internal_.NetworkBase.md#givenprovider-1)

#### Defined in

node_modules/web3-core/types/index.d.ts:256

___

### providers

▪ `Static` `Readonly` **providers**: [`Providers`](../interfaces/internal_.Providers.md)

#### Inherited from

[NetworkBase](internal_.NetworkBase.md).[providers](internal_.NetworkBase.md#providers)

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

#### Inherited from

[NetworkBase](internal_.NetworkBase.md).[extend](internal_.NetworkBase.md#extend)

___

### getId

▸ **getId**(`callback?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `id`: `number`) => `void` |

#### Returns

`Promise`<`number`\>

#### Inherited from

[NetworkBase](internal_.NetworkBase.md).[getId](internal_.NetworkBase.md#getid)

___

### getNetworkType

▸ **getNetworkType**(`callback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `returnValue`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

#### Inherited from

[NetworkBase](internal_.NetworkBase.md).[getNetworkType](internal_.NetworkBase.md#getnetworktype)

___

### getPeerCount

▸ **getPeerCount**(`callback?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `peerCount`: `number`) => `void` |

#### Returns

`Promise`<`number`\>

#### Inherited from

[NetworkBase](internal_.NetworkBase.md).[getPeerCount](internal_.NetworkBase.md#getpeercount)

___

### isListening

▸ **isListening**(`callback?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `listening`: `boolean`) => `void` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[NetworkBase](internal_.NetworkBase.md).[isListening](internal_.NetworkBase.md#islistening)

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

[NetworkBase](internal_.NetworkBase.md).[setProvider](internal_.NetworkBase.md#setprovider)
