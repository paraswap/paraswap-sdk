[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3EventEmitter

# Class: Web3EventEmitter\<T\>

## Extended by

- [`Web3RequestManager`](Web3RequestManager.md)
- [`Web3Config`](Web3Config.md)
- [`Web3PromiEvent`](Web3PromiEvent.md)
- [`Web3Subscription`](Web3Subscription.md)

## Type Parameters

• **T** *extends* [`Web3EventMap`](../type-aliases/Web3EventMap.md)

## Implements

- [`Web3Emitter`](../interfaces/Web3Emitter.md)\<`T`\>

## Constructors

### new Web3EventEmitter()

> **new Web3EventEmitter**\<`T`\>(): [`Web3EventEmitter`](Web3EventEmitter.md)\<`T`\>

#### Returns

[`Web3EventEmitter`](Web3EventEmitter.md)\<`T`\>

## Methods

### emit()

> **emit**\<`K`\>(`eventName`, `params`): `void`

#### Type Parameters

• **K** *extends* `string`

#### Parameters

• **eventName**: `K`

• **params**: `T`\[`K`\]

#### Returns

`void`

#### Implementation of

[`Web3Emitter`](../interfaces/Web3Emitter.md).[`emit`](../interfaces/Web3Emitter.md#emit)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:16

***

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:19

***

### getMaxListeners()

> **getMaxListeners**(): `number`

#### Returns

`number`

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:22

***

### listenerCount()

> **listenerCount**\<`K`\>(`eventName`): `number`

#### Type Parameters

• **K** *extends* `string`

#### Parameters

• **eventName**: `K`

#### Returns

`number`

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:17

***

### listeners()

> **listeners**\<`K`\>(`eventName`): (...`args`) => `void`[]

#### Type Parameters

• **K** *extends* `string`

#### Parameters

• **eventName**: `K`

#### Returns

(...`args`) => `void`[]

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:18

***

### off()

> **off**\<`K`\>(`eventName`, `fn`): `void`

#### Type Parameters

• **K** *extends* `string`

#### Parameters

• **eventName**: `K`

• **fn**: [`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`T`\[`K`\]\>

#### Returns

`void`

#### Implementation of

[`Web3Emitter`](../interfaces/Web3Emitter.md).[`off`](../interfaces/Web3Emitter.md#off)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:15

***

### on()

> **on**\<`K`\>(`eventName`, `fn`): `void`

#### Type Parameters

• **K** *extends* `string`

#### Parameters

• **eventName**: `K`

• **fn**: [`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`T`\[`K`\]\>

#### Returns

`void`

#### Implementation of

[`Web3Emitter`](../interfaces/Web3Emitter.md).[`on`](../interfaces/Web3Emitter.md#on)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:13

***

### once()

> **once**\<`K`\>(`eventName`, `fn`): `void`

#### Type Parameters

• **K** *extends* `string`

#### Parameters

• **eventName**: `K`

• **fn**: [`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`T`\[`K`\]\>

#### Returns

`void`

#### Implementation of

[`Web3Emitter`](../interfaces/Web3Emitter.md).[`once`](../interfaces/Web3Emitter.md#once)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:14

***

### removeAllListeners()

> **removeAllListeners**(): [`EventEmitter`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md)

#### Returns

[`EventEmitter`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:20

***

### setMaxListenerWarningThreshold()

> **setMaxListenerWarningThreshold**(`maxListenersWarningThreshold`): `void`

#### Parameters

• **maxListenersWarningThreshold**: `number`

#### Returns

`void`

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:21
