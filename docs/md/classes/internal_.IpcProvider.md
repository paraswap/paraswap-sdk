[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / IpcProvider

# Class: IpcProvider

[<internal>](../modules/internal_.md).IpcProvider

## Hierarchy

- [`IpcProviderBase`](internal_.IpcProviderBase.md)

  ↳ **`IpcProvider`**

## Table of contents

### Constructors

- [constructor](internal_.IpcProvider.md#constructor)

### Properties

- [connected](internal_.IpcProvider.md#connected)
- [connection](internal_.IpcProvider.md#connection)
- [notificationCallbacks](internal_.IpcProvider.md#notificationcallbacks)
- [responseCallbacks](internal_.IpcProvider.md#responsecallbacks)

### Methods

- [addDefaultEvents](internal_.IpcProvider.md#adddefaultevents)
- [on](internal_.IpcProvider.md#on)
- [once](internal_.IpcProvider.md#once)
- [reconnect](internal_.IpcProvider.md#reconnect)
- [removeAllListeners](internal_.IpcProvider.md#removealllisteners)
- [removeListener](internal_.IpcProvider.md#removelistener)
- [reset](internal_.IpcProvider.md#reset)
- [send](internal_.IpcProvider.md#send)
- [supportsSubscriptions](internal_.IpcProvider.md#supportssubscriptions)

## Constructors

### constructor

• **new IpcProvider**(`path`, `net`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `net` | [`Server`](internal_.Server.md) |

#### Overrides

[IpcProviderBase](internal_.IpcProviderBase.md).[constructor](internal_.IpcProviderBase.md#constructor)

## Properties

### connected

• **connected**: `boolean`

#### Inherited from

[IpcProviderBase](internal_.IpcProviderBase.md).[connected](internal_.IpcProviderBase.md#connected)

#### Defined in

node_modules/web3-core-helpers/types/index.d.ts:132

___

### connection

• **connection**: `any`

#### Inherited from

[IpcProviderBase](internal_.IpcProviderBase.md).[connection](internal_.IpcProviderBase.md#connection)

#### Defined in

node_modules/web3-core-helpers/types/index.d.ts:133

___

### notificationCallbacks

• **notificationCallbacks**: `any`

#### Inherited from

[IpcProviderBase](internal_.IpcProviderBase.md).[notificationCallbacks](internal_.IpcProviderBase.md#notificationcallbacks)

#### Defined in

node_modules/web3-core-helpers/types/index.d.ts:131

___

### responseCallbacks

• **responseCallbacks**: `any`

#### Inherited from

[IpcProviderBase](internal_.IpcProviderBase.md).[responseCallbacks](internal_.IpcProviderBase.md#responsecallbacks)

#### Defined in

node_modules/web3-core-helpers/types/index.d.ts:130

## Methods

### addDefaultEvents

▸ **addDefaultEvents**(): `void`

#### Returns

`void`

#### Inherited from

[IpcProviderBase](internal_.IpcProviderBase.md).[addDefaultEvents](internal_.IpcProviderBase.md#adddefaultevents)

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

#### Inherited from

[IpcProviderBase](internal_.IpcProviderBase.md).[on](internal_.IpcProviderBase.md#on)

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

#### Inherited from

[IpcProviderBase](internal_.IpcProviderBase.md).[once](internal_.IpcProviderBase.md#once)

___

### reconnect

▸ **reconnect**(): `void`

#### Returns

`void`

#### Inherited from

[IpcProviderBase](internal_.IpcProviderBase.md).[reconnect](internal_.IpcProviderBase.md#reconnect)

___

### removeAllListeners

▸ **removeAllListeners**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`void`

#### Inherited from

[IpcProviderBase](internal_.IpcProviderBase.md).[removeAllListeners](internal_.IpcProviderBase.md#removealllisteners)

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

#### Inherited from

[IpcProviderBase](internal_.IpcProviderBase.md).[removeListener](internal_.IpcProviderBase.md#removelistener)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[IpcProviderBase](internal_.IpcProviderBase.md).[reset](internal_.IpcProviderBase.md#reset)

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

[IpcProviderBase](internal_.IpcProviderBase.md).[send](internal_.IpcProviderBase.md#send)

___

### supportsSubscriptions

▸ **supportsSubscriptions**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[IpcProviderBase](internal_.IpcProviderBase.md).[supportsSubscriptions](internal_.IpcProviderBase.md#supportssubscriptions)
