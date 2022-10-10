[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Shh

# Class: Shh

[<internal>](../modules/internal_.md).Shh

## Table of contents

### Constructors

- [constructor](internal_.Shh.md#constructor)

### Properties

- [BatchRequest](internal_.Shh.md#batchrequest)
- [currentProvider](internal_.Shh.md#currentprovider)
- [givenProvider](internal_.Shh.md#givenprovider)
- [net](internal_.Shh.md#net)
- [givenProvider](internal_.Shh.md#givenprovider-1)
- [providers](internal_.Shh.md#providers)

### Methods

- [addPrivateKey](internal_.Shh.md#addprivatekey)
- [addSymKey](internal_.Shh.md#addsymkey)
- [deleteKeyPair](internal_.Shh.md#deletekeypair)
- [deleteMessageFilter](internal_.Shh.md#deletemessagefilter)
- [deleteSymKey](internal_.Shh.md#deletesymkey)
- [extend](internal_.Shh.md#extend)
- [generateSymKeyFromPassword](internal_.Shh.md#generatesymkeyfrompassword)
- [getFilterMessages](internal_.Shh.md#getfiltermessages)
- [getInfo](internal_.Shh.md#getinfo)
- [getPrivateKey](internal_.Shh.md#getprivatekey)
- [getPublicKey](internal_.Shh.md#getpublickey)
- [getSymKey](internal_.Shh.md#getsymkey)
- [getVersion](internal_.Shh.md#getversion)
- [hasKeyPair](internal_.Shh.md#haskeypair)
- [hasSymKey](internal_.Shh.md#hassymkey)
- [markTrustedPeer](internal_.Shh.md#marktrustedpeer)
- [newKeyPair](internal_.Shh.md#newkeypair)
- [newMessageFilter](internal_.Shh.md#newmessagefilter)
- [newSymKey](internal_.Shh.md#newsymkey)
- [post](internal_.Shh.md#post)
- [setMaxMessageSize](internal_.Shh.md#setmaxmessagesize)
- [setMinPoW](internal_.Shh.md#setminpow)
- [setProvider](internal_.Shh.md#setprovider)
- [subscribe](internal_.Shh.md#subscribe)

## Constructors

### constructor

• **new Shh**()

• **new Shh**(`provider`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`provider`](../modules/internal_.md#provider) |

• **new Shh**(`provider`, `net`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`provider`](../modules/internal_.md#provider) |
| `net` | [`Socket`](internal_.Socket.md) |

## Properties

### BatchRequest

• **BatchRequest**: () => [`BatchRequest`](internal_.BatchRequest.md)

#### Type declaration

• **new Shh**()

#### Defined in

node_modules/web3-shh/types/index.d.ts:33

___

### currentProvider

• `Readonly` **currentProvider**: [`provider`](../modules/internal_.md#provider)

#### Defined in

node_modules/web3-shh/types/index.d.ts:32

___

### givenProvider

• `Readonly` **givenProvider**: `any`

#### Defined in

node_modules/web3-shh/types/index.d.ts:29

___

### net

• **net**: [`Network`](internal_.Network.md)

#### Defined in

node_modules/web3-shh/types/index.d.ts:39

___

### givenProvider

▪ `Static` `Readonly` **givenProvider**: `any`

#### Defined in

node_modules/web3-shh/types/index.d.ts:30

___

### providers

▪ `Static` `Readonly` **providers**: [`Providers`](../interfaces/internal_.Providers.md)

#### Defined in

node_modules/web3-shh/types/index.d.ts:31

## Methods

### addPrivateKey

▸ **addPrivateKey**(`privateKey`, `callback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `privateKey`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

___

### addSymKey

▸ **addSymKey**(`symKey`, `callback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `symKey` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `key`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

___

### deleteKeyPair

▸ **deleteKeyPair**(`id`, `callback?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `result`: `boolean`) => `void` |

#### Returns

`Promise`<`boolean`\>

___

### deleteMessageFilter

▸ **deleteMessageFilter**(`id`, `callback?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `result`: `string`) => `void` |

#### Returns

`Promise`<`boolean`\>

___

### deleteSymKey

▸ **deleteSymKey**(`id`, `callback?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `result`: `boolean`) => `void` |

#### Returns

`Promise`<`boolean`\>

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

### generateSymKeyFromPassword

▸ **generateSymKeyFromPassword**(`password`, `callback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `key`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

___

### getFilterMessages

▸ **getFilterMessages**(`id`, `callback?`): `Promise`<[`Notification`](../interfaces/internal_.Notification.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `result`: `string`) => `void` |

#### Returns

`Promise`<[`Notification`](../interfaces/internal_.Notification.md)[]\>

___

### getInfo

▸ **getInfo**(`callback?`): `Promise`<[`Info`](../interfaces/internal_.Info.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `info`: [`Info`](../interfaces/internal_.Info.md)) => `void` |

#### Returns

`Promise`<[`Info`](../interfaces/internal_.Info.md)\>

___

### getPrivateKey

▸ **getPrivateKey**(`id`, `callback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `privateKey`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

___

### getPublicKey

▸ **getPublicKey**(`id`, `callback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `publicKey`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

___

### getSymKey

▸ **getSymKey**(`id`, `callback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `key`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

___

### getVersion

▸ **getVersion**(`callback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `version`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

___

### hasKeyPair

▸ **hasKeyPair**(`id`, `callback?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `result`: `boolean`) => `void` |

#### Returns

`Promise`<`boolean`\>

___

### hasSymKey

▸ **hasSymKey**(`id`, `callback?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `result`: `boolean`) => `void` |

#### Returns

`Promise`<`boolean`\>

___

### markTrustedPeer

▸ **markTrustedPeer**(`enode`, `callback?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `enode` | `string` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `result`: `boolean`) => `void` |

#### Returns

`Promise`<`boolean`\>

___

### newKeyPair

▸ **newKeyPair**(`callback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `key`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

___

### newMessageFilter

▸ **newMessageFilter**(`options?`, `callback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`SubscriptionOptions`](../interfaces/internal_.SubscriptionOptions.md) |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `result`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

___

### newSymKey

▸ **newSymKey**(`callback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `key`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

___

### post

▸ **post**(`object`, `callback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`PostWithSymKey`](../interfaces/internal_.PostWithSymKey.md) \| [`PostWithPubKey`](../interfaces/internal_.PostWithPubKey.md) |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `result`: `string`) => `void` |

#### Returns

`Promise`<`string`\>

___

### setMaxMessageSize

▸ **setMaxMessageSize**(`size`, `callback?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `result`: `boolean`) => `void` |

#### Returns

`Promise`<`boolean`\>

___

### setMinPoW

▸ **setMinPoW**(`pow`, `callback?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pow` | `number` |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `result`: `boolean`) => `void` |

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

___

### subscribe

▸ **subscribe**(`string`, `options`, `callback?`): [`Subscribe`](../interfaces/internal_.Subscribe.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | ``"messages"`` |
| `options` | [`SubscriptionOptions`](../interfaces/internal_.SubscriptionOptions.md) |
| `callback?` | (`error`: [`Error`](../modules/internal_.md#error), `message`: [`Notification`](../interfaces/internal_.Notification.md), `subscription`: `any`) => `void` |

#### Returns

[`Subscribe`](../interfaces/internal_.Subscribe.md)
