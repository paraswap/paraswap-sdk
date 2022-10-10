[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / HttpProvider

# Class: HttpProvider

[<internal>](../modules/internal_.md).HttpProvider

## Hierarchy

- [`HttpProviderBase`](internal_.HttpProviderBase.md)

  ↳ **`HttpProvider`**

## Table of contents

### Constructors

- [constructor](internal_.HttpProvider.md#constructor)

### Properties

- [connected](internal_.HttpProvider.md#connected)
- [host](internal_.HttpProvider.md#host)

### Methods

- [disconnect](internal_.HttpProvider.md#disconnect)
- [send](internal_.HttpProvider.md#send)
- [supportsSubscriptions](internal_.HttpProvider.md#supportssubscriptions)

## Constructors

### constructor

• **new HttpProvider**(`host`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | `string` |
| `options?` | [`HttpProviderOptions`](../interfaces/internal_.HttpProviderOptions.md) |

#### Overrides

[HttpProviderBase](internal_.HttpProviderBase.md).[constructor](internal_.HttpProviderBase.md#constructor)

## Properties

### connected

• **connected**: `boolean`

#### Inherited from

[HttpProviderBase](internal_.HttpProviderBase.md).[connected](internal_.HttpProviderBase.md#connected)

#### Defined in

node_modules/web3-core-helpers/types/index.d.ts:161

___

### host

• **host**: `string`

#### Inherited from

[HttpProviderBase](internal_.HttpProviderBase.md).[host](internal_.HttpProviderBase.md#host)

#### Defined in

node_modules/web3-core-helpers/types/index.d.ts:160

## Methods

### disconnect

▸ **disconnect**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[HttpProviderBase](internal_.HttpProviderBase.md).[disconnect](internal_.HttpProviderBase.md#disconnect)

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

#### Inherited from

[HttpProviderBase](internal_.HttpProviderBase.md).[send](internal_.HttpProviderBase.md#send)

___

### supportsSubscriptions

▸ **supportsSubscriptions**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[HttpProviderBase](internal_.HttpProviderBase.md).[supportsSubscriptions](internal_.HttpProviderBase.md#supportssubscriptions)
