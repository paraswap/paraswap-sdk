[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3PromiEvent

# Class: Web3PromiEvent\<ResolveType, EventMap\>

## Extends

- [`Web3EventEmitter`](Web3EventEmitter.md)\<`EventMap`\>

## Type Parameters

• **ResolveType**

• **EventMap** *extends* [`Web3EventMap`](../type-aliases/Web3EventMap.md)

## Implements

- `Promise`\<`ResolveType`\>

## Constructors

### new Web3PromiEvent()

> **new Web3PromiEvent**\<`ResolveType`, `EventMap`\>(`executor`): [`Web3PromiEvent`](Web3PromiEvent.md)\<`ResolveType`, `EventMap`\>

#### Parameters

• **executor**: [`PromiseExecutor`](../type-aliases/PromiseExecutor.md)\<`ResolveType`\>

#### Returns

[`Web3PromiEvent`](Web3PromiEvent.md)\<`ResolveType`, `EventMap`\>

#### Overrides

[`Web3EventEmitter`](Web3EventEmitter.md).[`constructor`](Web3EventEmitter.md#constructors)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_promi\_event.d.ts:5

## Properties

### \[toStringTag\]

> **\[toStringTag\]**: `"Promise"`

#### Implementation of

`Promise.[toStringTag]`

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_promi\_event.d.ts:6

## Methods

### catch()

> **catch**\<`TResult`\>(`onrejected`?): `Promise`\<`ResolveType` \| `TResult`\>

Attaches a callback for only the rejection of the Promise.

#### Type Parameters

• **TResult** = `never`

#### Parameters

• **onrejected?**

The callback to execute when the Promise is rejected.

#### Returns

`Promise`\<`ResolveType` \| `TResult`\>

A Promise for the completion of the callback.

#### Implementation of

`Promise.catch`

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_promi\_event.d.ts:8

***

### emit()

> **emit**\<`K`\>(`eventName`, `params`): `void`

#### Type Parameters

• **K** *extends* `string`

#### Parameters

• **eventName**: `K`

• **params**: `EventMap`\[`K`\]

#### Returns

`void`

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`emit`](Web3EventEmitter.md#emit)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:16

***

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`eventNames`](Web3EventEmitter.md#eventnames)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:19

***

### finally()

> **finally**(`onfinally`?): `Promise`\<`ResolveType`\>

Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
resolved value cannot be modified from the callback.

#### Parameters

• **onfinally?**

The callback to execute when the Promise is settled (fulfilled or rejected).

#### Returns

`Promise`\<`ResolveType`\>

A Promise for the completion of the callback.

#### Implementation of

`Promise.finally`

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_promi\_event.d.ts:9

***

### getMaxListeners()

> **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`getMaxListeners`](Web3EventEmitter.md#getmaxlisteners)

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

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`listenerCount`](Web3EventEmitter.md#listenercount)

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

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`listeners`](Web3EventEmitter.md#listeners)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:18

***

### off()

> **off**\<`K`\>(`eventName`, `fn`): `void`

#### Type Parameters

• **K** *extends* `string`

#### Parameters

• **eventName**: `K`

• **fn**: [`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`EventMap`\[`K`\]\>

#### Returns

`void`

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`off`](Web3EventEmitter.md#off)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:15

***

### on()

> **on**\<`K`\>(`eventName`, `fn`): `this`

#### Type Parameters

• **K** *extends* `string`

#### Parameters

• **eventName**: `K`

• **fn**: [`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`EventMap`\[`K`\]\>

#### Returns

`this`

#### Overrides

[`Web3EventEmitter`](Web3EventEmitter.md).[`on`](Web3EventEmitter.md#on)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_promi\_event.d.ts:10

***

### once()

> **once**\<`K`\>(`eventName`, `fn`): `this`

#### Type Parameters

• **K** *extends* `string`

#### Parameters

• **eventName**: `K`

• **fn**: [`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`EventMap`\[`K`\]\>

#### Returns

`this`

#### Overrides

[`Web3EventEmitter`](Web3EventEmitter.md).[`once`](Web3EventEmitter.md#once)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_promi\_event.d.ts:11

***

### removeAllListeners()

> **removeAllListeners**(): [`EventEmitter`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md)

#### Returns

[`EventEmitter`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-utils_lib_commonjs_index/classes/EventEmitter.md)

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`removeAllListeners`](Web3EventEmitter.md#removealllisteners)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:20

***

### setMaxListenerWarningThreshold()

> **setMaxListenerWarningThreshold**(`maxListenersWarningThreshold`): `void`

#### Parameters

• **maxListenersWarningThreshold**: `number`

#### Returns

`void`

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`setMaxListenerWarningThreshold`](Web3EventEmitter.md#setmaxlistenerwarningthreshold)

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:21

***

### then()

> **then**\<`TResult1`, `TResult2`\>(`onfulfilled`?, `onrejected`?): `Promise`\<`TResult1` \| `TResult2`\>

Attaches callbacks for the resolution and/or rejection of the Promise.

#### Type Parameters

• **TResult1** = `ResolveType`

• **TResult2** = `never`

#### Parameters

• **onfulfilled?**

The callback to execute when the Promise is resolved.

• **onrejected?**

The callback to execute when the Promise is rejected.

#### Returns

`Promise`\<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.

#### Implementation of

`Promise.then`

#### Defined in

node\_modules/web3-core/lib/commonjs/web3\_promi\_event.d.ts:7
