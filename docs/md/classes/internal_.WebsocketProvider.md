[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / WebsocketProvider

# Class: WebsocketProvider

[<internal>](../modules/internal_.md).WebsocketProvider

## Hierarchy

- [`WebsocketProviderBase`](internal_.WebsocketProviderBase.md)

  ↳ **`WebsocketProvider`**

## Table of contents

### Constructors

- [constructor](internal_.WebsocketProvider.md#constructor)

### Properties

- [connected](internal_.WebsocketProvider.md#connected)
- [connection](internal_.WebsocketProvider.md#connection)
- [requestQueue](internal_.WebsocketProvider.md#requestqueue)
- [responseQueue](internal_.WebsocketProvider.md#responsequeue)

### Methods

- [connect](internal_.WebsocketProvider.md#connect)
- [disconnect](internal_.WebsocketProvider.md#disconnect)
- [isConnecting](internal_.WebsocketProvider.md#isconnecting)
- [on](internal_.WebsocketProvider.md#on)
- [once](internal_.WebsocketProvider.md#once)
- [reconnect](internal_.WebsocketProvider.md#reconnect)
- [removeAllListeners](internal_.WebsocketProvider.md#removealllisteners)
- [removeListener](internal_.WebsocketProvider.md#removelistener)
- [reset](internal_.WebsocketProvider.md#reset)
- [send](internal_.WebsocketProvider.md#send)
- [supportsSubscriptions](internal_.WebsocketProvider.md#supportssubscriptions)

## Constructors

### constructor

• **new WebsocketProvider**(`host`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | `string` |
| `options?` | [`WebsocketProviderOptions`](../interfaces/internal_.WebsocketProviderOptions.md) |

#### Overrides

[WebsocketProviderBase](internal_.WebsocketProviderBase.md).[constructor](internal_.WebsocketProviderBase.md#constructor)

## Properties

### connected

• **connected**: `boolean`

#### Inherited from

[WebsocketProviderBase](internal_.WebsocketProviderBase.md).[connected](internal_.WebsocketProviderBase.md#connected)

#### Defined in

node_modules/web3-core-helpers/types/index.d.ts:100

___

### connection

• **connection**: `any`

#### Inherited from

[WebsocketProviderBase](internal_.WebsocketProviderBase.md).[connection](internal_.WebsocketProviderBase.md#connection)

#### Defined in

node_modules/web3-core-helpers/types/index.d.ts:101

___

### requestQueue

• **requestQueue**: `Map`<`string`, [`RequestItem`](../interfaces/internal_.RequestItem.md)\>

#### Inherited from

[WebsocketProviderBase](internal_.WebsocketProviderBase.md).[requestQueue](internal_.WebsocketProviderBase.md#requestqueue)

#### Defined in

node_modules/web3-core-helpers/types/index.d.ts:98

___

### responseQueue

• **responseQueue**: `Map`<`string`, [`RequestItem`](../interfaces/internal_.RequestItem.md)\>

#### Inherited from

[WebsocketProviderBase](internal_.WebsocketProviderBase.md).[responseQueue](internal_.WebsocketProviderBase.md#responsequeue)

#### Defined in

node_modules/web3-core-helpers/types/index.d.ts:99

## Methods

### connect

▸ **connect**(): `void`

#### Returns

`void`

#### Inherited from

[WebsocketProviderBase](internal_.WebsocketProviderBase.md).[connect](internal_.WebsocketProviderBase.md#connect)

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

#### Inherited from

[WebsocketProviderBase](internal_.WebsocketProviderBase.md).[disconnect](internal_.WebsocketProviderBase.md#disconnect)

___

### isConnecting

▸ **isConnecting**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[WebsocketProviderBase](internal_.WebsocketProviderBase.md).[isConnecting](internal_.WebsocketProviderBase.md#isconnecting)

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

[WebsocketProviderBase](internal_.WebsocketProviderBase.md).[on](internal_.WebsocketProviderBase.md#on)

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

[WebsocketProviderBase](internal_.WebsocketProviderBase.md).[once](internal_.WebsocketProviderBase.md#once)

___

### reconnect

▸ **reconnect**(): `void`

#### Returns

`void`

#### Inherited from

[WebsocketProviderBase](internal_.WebsocketProviderBase.md).[reconnect](internal_.WebsocketProviderBase.md#reconnect)

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

[WebsocketProviderBase](internal_.WebsocketProviderBase.md).[removeAllListeners](internal_.WebsocketProviderBase.md#removealllisteners)

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

[WebsocketProviderBase](internal_.WebsocketProviderBase.md).[removeListener](internal_.WebsocketProviderBase.md#removelistener)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[WebsocketProviderBase](internal_.WebsocketProviderBase.md).[reset](internal_.WebsocketProviderBase.md#reset)

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

[WebsocketProviderBase](internal_.WebsocketProviderBase.md).[send](internal_.WebsocketProviderBase.md#send)

___

### supportsSubscriptions

▸ **supportsSubscriptions**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[WebsocketProviderBase](internal_.WebsocketProviderBase.md).[supportsSubscriptions](internal_.WebsocketProviderBase.md#supportssubscriptions)
