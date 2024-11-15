[**@paraswap/sdk**](../../../../README.md) • **Docs**

***

[@paraswap/sdk](../../../../globals.md) / [\<internal\>](../../../README.md) / [internal](../README.md) / WritableOptions

# Interface: WritableOptions

## Extends

- [`StreamOptions`](StreamOptions.md)\<[`Writable`](../classes/Writable.md)\>

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

### decodeStrings?

> `optional` **decodeStrings**: `boolean`

#### Defined in

node\_modules/@types/node/stream.d.ts:987

***

### defaultEncoding?

> `optional` **defaultEncoding**: [`BufferEncoding`](../../../type-aliases/BufferEncoding.md)

#### Defined in

node\_modules/@types/node/stream.d.ts:988

***

### emitClose?

> `optional` **emitClose**: `boolean`

#### Inherited from

[`StreamOptions`](StreamOptions.md).[`emitClose`](StreamOptions.md#emitclose)

#### Defined in

node\_modules/@types/node/stream.d.ts:955

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

• **this**: [`Writable`](../classes/Writable.md)

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

• **this**: [`Writable`](../classes/Writable.md)

• **error**: `null` \| [`Error`](../../../interfaces/Error.md)

• **callback**

#### Returns

`void`

#### Inherited from

[`StreamOptions`](StreamOptions.md).[`destroy`](StreamOptions.md#destroy)

#### Defined in

node\_modules/@types/node/stream.d.ts:959

***

### final()?

> `optional` **final**(`this`, `callback`): `void`

#### Parameters

• **this**: [`Writable`](../classes/Writable.md)

• **callback**

#### Returns

`void`

#### Defined in

node\_modules/@types/node/stream.d.ts:1003

***

### write()?

> `optional` **write**(`this`, `chunk`, `encoding`, `callback`): `void`

#### Parameters

• **this**: [`Writable`](../classes/Writable.md)

• **chunk**: `any`

• **encoding**: [`BufferEncoding`](../../../type-aliases/BufferEncoding.md)

• **callback**

#### Returns

`void`

#### Defined in

node\_modules/@types/node/stream.d.ts:989

***

### writev()?

> `optional` **writev**(`this`, `chunks`, `callback`): `void`

#### Parameters

• **this**: [`Writable`](../classes/Writable.md)

• **chunks**: `object`[]

• **callback**

#### Returns

`void`

#### Defined in

node\_modules/@types/node/stream.d.ts:995
