[**@velora-dex/sdk**](../../../../README.md) • **Docs**

***

[@velora-dex/sdk](../../../../globals.md) / [\<internal\>](../../../README.md) / [internal](../README.md) / ReadableOptions

# Interface: ReadableOptions

## Extends

- [`StreamOptions`](StreamOptions.md)\<[`Readable`](../../../classes/Readable.md)\>

## Extended by

- [`DuplexOptions`](../../../interfaces/DuplexOptions.md)

## Properties

### autoDestroy?

> `optional` **autoDestroy**: `boolean`

#### Inherited from

[`StreamOptions`](StreamOptions.md).[`autoDestroy`](StreamOptions.md#autodestroy)

#### Defined in

node\_modules/@types/node/stream.d.ts:960

***

### emitClose?

> `optional` **emitClose**: `boolean`

#### Inherited from

[`StreamOptions`](StreamOptions.md).[`emitClose`](StreamOptions.md#emitclose)

#### Defined in

node\_modules/@types/node/stream.d.ts:955

***

### encoding?

> `optional` **encoding**: [`BufferEncoding`](../../../type-aliases/BufferEncoding.md)

#### Defined in

node\_modules/@types/node/stream.d.ts:963

***

### highWaterMark?

> `optional` **highWaterMark**: `number`

#### Inherited from

[`StreamOptions`](StreamOptions.md).[`highWaterMark`](StreamOptions.md#highwatermark)

#### Defined in

node\_modules/@types/node/stream.d.ts:956

***

### objectMode?

> `optional` **objectMode**: `boolean`

#### Inherited from

[`StreamOptions`](StreamOptions.md).[`objectMode`](StreamOptions.md#objectmode)

#### Defined in

node\_modules/@types/node/stream.d.ts:957

***

### signal?

> `optional` **signal**: `AbortSignal`

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[`StreamOptions`](StreamOptions.md).[`signal`](StreamOptions.md#signal)

#### Defined in

node\_modules/@types/node/events.d.ts:561

## Methods

### construct()?

> `optional` **construct**(`this`, `callback`): `void`

#### Parameters

• **this**: [`Readable`](../../../classes/Readable.md)

• **callback**

#### Returns

`void`

#### Inherited from

[`StreamOptions`](StreamOptions.md).[`construct`](StreamOptions.md#construct)

#### Defined in

node\_modules/@types/node/stream.d.ts:958

***

### destroy()?

> `optional` **destroy**(`this`, `error`, `callback`): `void`

#### Parameters

• **this**: [`Readable`](../../../classes/Readable.md)

• **error**: `null` \| [`Error`](../../../interfaces/Error.md)

• **callback**

#### Returns

`void`

#### Inherited from

[`StreamOptions`](StreamOptions.md).[`destroy`](StreamOptions.md#destroy)

#### Defined in

node\_modules/@types/node/stream.d.ts:959

***

### read()?

> `optional` **read**(`this`, `size`): `void`

#### Parameters

• **this**: [`Readable`](../../../classes/Readable.md)

• **size**: `number`

#### Returns

`void`

#### Defined in

node\_modules/@types/node/stream.d.ts:964
