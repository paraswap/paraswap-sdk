[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / HttpProviderBase

# Class: HttpProviderBase

[<internal>](../modules/internal_.md).HttpProviderBase

## Hierarchy

- **`HttpProviderBase`**

  ↳ [`HttpProvider`](internal_.HttpProvider.md)

## Table of contents

### Constructors

- [constructor](internal_.HttpProviderBase.md#constructor)

### Properties

- [connected](internal_.HttpProviderBase.md#connected)
- [host](internal_.HttpProviderBase.md#host)

### Methods

- [disconnect](internal_.HttpProviderBase.md#disconnect)
- [send](internal_.HttpProviderBase.md#send)
- [supportsSubscriptions](internal_.HttpProviderBase.md#supportssubscriptions)

## Constructors

### constructor

• **new HttpProviderBase**(`host`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | `string` |
| `options?` | [`HttpProviderOptions`](../interfaces/internal_.HttpProviderOptions.md) |

## Properties

### connected

• **connected**: `boolean`

#### Defined in

node_modules/web3-core-helpers/types/index.d.ts:161

___

### host

• **host**: `string`

#### Defined in

node_modules/web3-core-helpers/types/index.d.ts:160

## Methods

### disconnect

▸ **disconnect**(): `boolean`

#### Returns

`boolean`

___

### send

▸ **send**(`payload`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`JsonRpcPayload`](../interfaces/internal_.JsonRpcPayload.md) |
| `callback` | (`error`: ``null`` \| [`Error`](../modules/internal_.md#error), `result?`: [`JsonRpcResponse`](../interfaces/internal_.JsonRpcResponse.md)) => `void` |

#### Returns

`void`

___

### supportsSubscriptions

▸ **supportsSubscriptions**(): `boolean`

#### Returns

`boolean`
