[**@velora-dex/sdk**](../../../../README.md) • **Docs**

***

[@velora-dex/sdk](../../../../globals.md) / [\<internal\>](../../../README.md) / [internal](../README.md) / StreamOptions

# Interface: StreamOptions\<T\>

## Extends

- [`Abortable`](../../EventEmitter/interfaces/Abortable.md)

## Extended by

- [`ReadableOptions`](ReadableOptions.md)
- [`WritableOptions`](WritableOptions.md)

## Type Parameters

• **T** *extends* [`Stream`](../../../classes/Stream.md)

## Properties

### autoDestroy?

> `optional` **autoDestroy**: `boolean`

#### Defined in

node\_modules/@types/node/stream.d.ts:960

***

### emitClose?

> `optional` **emitClose**: `boolean`

#### Defined in

node\_modules/@types/node/stream.d.ts:955

***

### highWaterMark?

> `optional` **highWaterMark**: `number`

#### Defined in

node\_modules/@types/node/stream.d.ts:956

***

### objectMode?

> `optional` **objectMode**: `boolean`

#### Defined in

node\_modules/@types/node/stream.d.ts:957

***

### signal?

> `optional` **signal**: `AbortSignal`

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[`Abortable`](../../EventEmitter/interfaces/Abortable.md).[`signal`](../../EventEmitter/interfaces/Abortable.md#signal)

#### Defined in

node\_modules/@types/node/events.d.ts:561

## Methods

### construct()?

> `optional` **construct**(`this`, `callback`): `void`

#### Parameters

• **this**: `T`

• **callback**

#### Returns

`void`

#### Defined in

node\_modules/@types/node/stream.d.ts:958

***

### destroy()?

> `optional` **destroy**(`this`, `error`, `callback`): `void`

#### Parameters

• **this**: `T`

• **error**: `null` \| [`Error`](../../../interfaces/Error.md)

• **callback**

#### Returns

`void`

#### Defined in

node\_modules/@types/node/stream.d.ts:959
