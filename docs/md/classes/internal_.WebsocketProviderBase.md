[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / WebsocketProviderBase

# Class: WebsocketProviderBase

[<internal>](../modules/internal_.md).WebsocketProviderBase

## Hierarchy

- **`WebsocketProviderBase`**

  ↳ [`WebsocketProvider`](internal_.WebsocketProvider.md)

## Table of contents

### Constructors

- [constructor](internal_.WebsocketProviderBase.md#constructor)

### Properties

- [connected](internal_.WebsocketProviderBase.md#connected)
- [connection](internal_.WebsocketProviderBase.md#connection)
- [requestQueue](internal_.WebsocketProviderBase.md#requestqueue)
- [responseQueue](internal_.WebsocketProviderBase.md#responsequeue)

### Methods

- [connect](internal_.WebsocketProviderBase.md#connect)
- [disconnect](internal_.WebsocketProviderBase.md#disconnect)
- [isConnecting](internal_.WebsocketProviderBase.md#isconnecting)
- [on](internal_.WebsocketProviderBase.md#on)
- [once](internal_.WebsocketProviderBase.md#once)
- [reconnect](internal_.WebsocketProviderBase.md#reconnect)
- [removeAllListeners](internal_.WebsocketProviderBase.md#removealllisteners)
- [removeListener](internal_.WebsocketProviderBase.md#removelistener)
- [reset](internal_.WebsocketProviderBase.md#reset)
- [send](internal_.WebsocketProviderBase.md#send)
- [supportsSubscriptions](internal_.WebsocketProviderBase.md#supportssubscriptions)

## Constructors

### constructor

• **new WebsocketProviderBase**(`host`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | `string` |
| `options?` | [`WebsocketProviderOptions`](../interfaces/internal_.WebsocketProviderOptions.md) |

## Properties

### connected

• **connected**: `boolean`

#### Defined in

node_modules/web3-core-helpers/types/index.d.ts:100

___

### connection

• **connection**: `any`

#### Defined in

node_modules/web3-core-helpers/types/index.d.ts:101

___

### requestQueue

• **requestQueue**: `Map`<`string`, [`RequestItem`](../interfaces/internal_.RequestItem.md)\>

#### Defined in

node_modules/web3-core-helpers/types/index.d.ts:98

___

### responseQueue

• **responseQueue**: `Map`<`string`, [`RequestItem`](../interfaces/internal_.RequestItem.md)\>

#### Defined in

node_modules/web3-core-helpers/types/index.d.ts:99

## Methods

### connect

▸ **connect**(): `void`

#### Returns

`void`

___

### disconnect

▸ **disconnect**(`code?`, `reason?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code?` | `number` |
| `reason?` | `string` |

#### Returns

`void`

___

### isConnecting

▸ **isConnecting**(): `boolean`

#### Returns

`boolean`

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
