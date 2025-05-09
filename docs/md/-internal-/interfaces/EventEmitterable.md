[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / EventEmitterable

# Interface: EventEmitterable\<T\>

An **EventEmitterable** behaves similar to an EventEmitter
 except provides async access to its methods.

 An EventEmitter implements the observer pattern.

## Extended by

- [`Provider`](Provider.md)

## Type Parameters

• **T**

## Methods

### addListener()

> **addListener**(`event`, `listener`): `Promise`\<[`EventEmitterable`](EventEmitterable.md)\<`T`\>\>

Alias for [[on]].

#### Parameters

• **event**: `T`

• **listener**: [`Listener`](../type-aliases/Listener.md)

#### Returns

`Promise`\<[`EventEmitterable`](EventEmitterable.md)\<`T`\>\>

#### Defined in

node\_modules/ethers/lib.commonjs/utils/events.d.ts:46

***

### emit()

> **emit**(`event`, ...`args`): `Promise`\<`boolean`\>

Triggers each listener for %%event%% with the %%args%%.

#### Parameters

• **event**: `T`

• ...**args**: `any`[]

#### Returns

`Promise`\<`boolean`\>

#### Defined in

node\_modules/ethers/lib.commonjs/utils/events.d.ts:25

***

### listenerCount()

> **listenerCount**(`event`?): `Promise`\<`number`\>

Resolves to the number of listeners for %%event%%.

#### Parameters

• **event?**: `T`

#### Returns

`Promise`\<`number`\>

#### Defined in

node\_modules/ethers/lib.commonjs/utils/events.d.ts:29

***

### listeners()

> **listeners**(`event`?): `Promise`\<[`Listener`](../type-aliases/Listener.md)[]\>

Resolves to the listeners for %%event%%.

#### Parameters

• **event?**: `T`

#### Returns

`Promise`\<[`Listener`](../type-aliases/Listener.md)[]\>

#### Defined in

node\_modules/ethers/lib.commonjs/utils/events.d.ts:33

***

### off()

> **off**(`event`, `listener`?): `Promise`\<[`EventEmitterable`](EventEmitterable.md)\<`T`\>\>

Unregister the %%listener%% for %%event%%. If %%listener%%
 is unspecified, all listeners are unregistered.

#### Parameters

• **event**: `T`

• **listener?**: [`Listener`](../type-aliases/Listener.md)

#### Returns

`Promise`\<[`EventEmitterable`](EventEmitterable.md)\<`T`\>\>

#### Defined in

node\_modules/ethers/lib.commonjs/utils/events.d.ts:38

***

### on()

> **on**(`event`, `listener`): `Promise`\<[`EventEmitterable`](EventEmitterable.md)\<`T`\>\>

Registers a %%listener%% that is called whenever the
 %%event%% occurs until unregistered.

#### Parameters

• **event**: `T`

• **listener**: [`Listener`](../type-aliases/Listener.md)

#### Returns

`Promise`\<[`EventEmitterable`](EventEmitterable.md)\<`T`\>\>

#### Defined in

node\_modules/ethers/lib.commonjs/utils/events.d.ts:16

***

### once()

> **once**(`event`, `listener`): `Promise`\<[`EventEmitterable`](EventEmitterable.md)\<`T`\>\>

Registers a %%listener%% that is called the next time
 %%event%% occurs.

#### Parameters

• **event**: `T`

• **listener**: [`Listener`](../type-aliases/Listener.md)

#### Returns

`Promise`\<[`EventEmitterable`](EventEmitterable.md)\<`T`\>\>

#### Defined in

node\_modules/ethers/lib.commonjs/utils/events.d.ts:21

***

### removeAllListeners()

> **removeAllListeners**(`event`?): `Promise`\<[`EventEmitterable`](EventEmitterable.md)\<`T`\>\>

Unregister all listeners for %%event%%.

#### Parameters

• **event?**: `T`

#### Returns

`Promise`\<[`EventEmitterable`](EventEmitterable.md)\<`T`\>\>

#### Defined in

node\_modules/ethers/lib.commonjs/utils/events.d.ts:42

***

### removeListener()

> **removeListener**(`event`, `listener`): `Promise`\<[`EventEmitterable`](EventEmitterable.md)\<`T`\>\>

Alias for [[off]].

#### Parameters

• **event**: `T`

• **listener**: [`Listener`](../type-aliases/Listener.md)

#### Returns

`Promise`\<[`EventEmitterable`](EventEmitterable.md)\<`T`\>\>

#### Defined in

node\_modules/ethers/lib.commonjs/utils/events.d.ts:50
