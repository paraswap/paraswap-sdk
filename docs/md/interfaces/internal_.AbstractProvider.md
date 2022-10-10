[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / AbstractProvider

# Interface: AbstractProvider

[<internal>](../modules/internal_.md).AbstractProvider

## Table of contents

### Properties

- [connected](internal_.AbstractProvider.md#connected)

### Methods

- [request](internal_.AbstractProvider.md#request)
- [send](internal_.AbstractProvider.md#send)
- [sendAsync](internal_.AbstractProvider.md#sendasync)

## Properties

### connected

• `Optional` **connected**: `boolean`

#### Defined in

node_modules/web3-core/types/index.d.ts:448

## Methods

### request

▸ `Optional` **request**(`args`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`RequestArguments`](internal_.RequestArguments.md) |

#### Returns

`Promise`<`any`\>

___

### send

▸ `Optional` **send**(`payload`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`JsonRpcPayload`](internal_.JsonRpcPayload.md) |
| `callback` | (`error`: ``null`` \| [`Error`](../modules/internal_.md#error), `result?`: [`JsonRpcResponse`](internal_.JsonRpcResponse.md)) => `void` |

#### Returns

`void`

___

### sendAsync

▸ **sendAsync**(`payload`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`JsonRpcPayload`](internal_.JsonRpcPayload.md) |
| `callback` | (`error`: ``null`` \| [`Error`](../modules/internal_.md#error), `result?`: [`JsonRpcResponse`](internal_.JsonRpcResponse.md)) => `void` |

#### Returns

`void`
