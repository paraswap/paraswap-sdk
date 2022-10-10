[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / IpcProviderBase

# Class: IpcProviderBase

[<internal>](../modules/internal_.md).IpcProviderBase

## Hierarchy

- **`IpcProviderBase`**

  ↳ [`IpcProvider`](internal_.IpcProvider.md)

## Table of contents

### Constructors

- [constructor](internal_.IpcProviderBase.md#constructor)

### Properties

- [connected](internal_.IpcProviderBase.md#connected)
- [connection](internal_.IpcProviderBase.md#connection)
- [notificationCallbacks](internal_.IpcProviderBase.md#notificationcallbacks)
- [responseCallbacks](internal_.IpcProviderBase.md#responsecallbacks)

### Methods

- [addDefaultEvents](internal_.IpcProviderBase.md#adddefaultevents)
- [on](internal_.IpcProviderBase.md#on)
- [once](internal_.IpcProviderBase.md#once)
- [reconnect](internal_.IpcProviderBase.md#reconnect)
- [removeAllListeners](internal_.IpcProviderBase.md#removealllisteners)
- [removeListener](internal_.IpcProviderBase.md#removelistener)
- [reset](internal_.IpcProviderBase.md#reset)
- [send](internal_.IpcProviderBase.md#send)
- [supportsSubscriptions](internal_.IpcProviderBase.md#supportssubscriptions)

## Constructors

### constructor

• **new IpcProviderBase**(`path`, `net`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `net` | [`Server`](internal_.Server.md) |

## Properties

### connected

• **connected**: `boolean`

#### Defined in

node_modules/web3-core-helpers/types/index.d.ts:132

___

### connection

• **connection**: `any`

#### Defined in

node_modules/web3-core-helpers/types/index.d.ts:133

___

### notificationCallbacks

• **notificationCallbacks**: `any`

#### Defined in

node_modules/web3-core-helpers/types/index.d.ts:131

___

### responseCallbacks

• **responseCallbacks**: `any`

#### Defined in

node_modules/web3-core-helpers/types/index.d.ts:130

## Methods

### addDefaultEvents

▸ **addDefaultEvents**(): `void`

#### Returns

`void`

___

### on

▸ **on**(`type`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `callback` | () => `void` |

#### Returns

`void`

___

### once

▸ **once**(`type`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `callback` | () => `void` |

#### Returns

`void`

___

### reconnect

▸ **reconnect**(): `void`

#### Returns

`void`

___

### removeAllListeners

▸ **removeAllListeners**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`void`

___

### removeListener

▸ **removeListener**(`type`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `callback` | () => `void` |

#### Returns

`void`

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

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
