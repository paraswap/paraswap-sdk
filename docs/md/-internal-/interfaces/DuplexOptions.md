[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / DuplexOptions

# Interface: DuplexOptions

## Extends

- [`ReadableOptions`](../namespaces/internal/interfaces/ReadableOptions.md).[`WritableOptions`](../namespaces/internal/interfaces/WritableOptions.md)

## Extended by

- [`TransformOptions`](../namespaces/internal/interfaces/TransformOptions.md)

## Properties

### allowHalfOpen?

> `optional` **allowHalfOpen**: `boolean`

#### Defined in

node\_modules/@types/node/stream.d.ts:1026

***

### autoDestroy?

> `optional` **autoDestroy**: `boolean`

#### Inherited from

[`WritableOptions`](../namespaces/internal/interfaces/WritableOptions.md).[`autoDestroy`](../namespaces/internal/interfaces/WritableOptions.md#autodestroy)

#### Defined in

node\_modules/@types/node/stream.d.ts:960

***

### decodeStrings?

> `optional` **decodeStrings**: `boolean`

#### Inherited from

[`WritableOptions`](../namespaces/internal/interfaces/WritableOptions.md).[`decodeStrings`](../namespaces/internal/interfaces/WritableOptions.md#decodestrings)

#### Defined in

node\_modules/@types/node/stream.d.ts:987

***

### defaultEncoding?

> `optional` **defaultEncoding**: [`BufferEncoding`](../type-aliases/BufferEncoding.md)

#### Inherited from

[`WritableOptions`](../namespaces/internal/interfaces/WritableOptions.md).[`defaultEncoding`](../namespaces/internal/interfaces/WritableOptions.md#defaultencoding)

#### Defined in

node\_modules/@types/node/stream.d.ts:988

***

### emitClose?

> `optional` **emitClose**: `boolean`

#### Inherited from

[`WritableOptions`](../namespaces/internal/interfaces/WritableOptions.md).[`emitClose`](../namespaces/internal/interfaces/WritableOptions.md#emitclose)

#### Defined in

node\_modules/@types/node/stream.d.ts:955

***

### encoding?

> `optional` **encoding**: [`BufferEncoding`](../type-aliases/BufferEncoding.md)

#### Inherited from

[`ReadableOptions`](../namespaces/internal/interfaces/ReadableOptions.md).[`encoding`](../namespaces/internal/interfaces/ReadableOptions.md#encoding)

#### Defined in

node\_modules/@types/node/stream.d.ts:963

***

### highWaterMark?

> `optional` **highWaterMark**: `number`

#### Inherited from

[`WritableOptions`](../namespaces/internal/interfaces/WritableOptions.md).[`highWaterMark`](../namespaces/internal/interfaces/WritableOptions.md#highwatermark)

#### Defined in

node\_modules/@types/node/stream.d.ts:956

***

### objectMode?

> `optional` **objectMode**: `boolean`

#### Inherited from

[`WritableOptions`](../namespaces/internal/interfaces/WritableOptions.md).[`objectMode`](../namespaces/internal/interfaces/WritableOptions.md#objectmode)

#### Defined in

node\_modules/@types/node/stream.d.ts:957

***

### readableHighWaterMark?

> `optional` **readableHighWaterMark**: `number`

#### Defined in

node\_modules/@types/node/stream.d.ts:1029

***

### readableObjectMode?

> `optional` **readableObjectMode**: `boolean`

#### Defined in

node\_modules/@types/node/stream.d.ts:1027

***

### signal?

> `optional` **signal**: `AbortSignal`

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[`WritableOptions`](../namespaces/internal/interfaces/WritableOptions.md).[`signal`](../namespaces/internal/interfaces/WritableOptions.md#signal)

#### Defined in

node\_modules/@types/node/events.d.ts:561

***

### writableCorked?

> `optional` **writableCorked**: `number`

#### Defined in

node\_modules/@types/node/stream.d.ts:1031

***

### writableHighWaterMark?

> `optional` **writableHighWaterMark**: `number`

#### Defined in

node\_modules/@types/node/stream.d.ts:1030

***

### writableObjectMode?

> `optional` **writableObjectMode**: `boolean`

#### Defined in

node\_modules/@types/node/stream.d.ts:1028

## Methods

### construct()?

> `optional` **construct**(`this`, `callback`): `void`

#### Parameters

• **this**: [`Duplex`](../classes/Duplex.md)

• **callback**

#### Returns

`void`

#### Overrides

[`WritableOptions`](../namespaces/internal/interfaces/WritableOptions.md).[`construct`](../namespaces/internal/interfaces/WritableOptions.md#construct)

#### Defined in

node\_modules/@types/node/stream.d.ts:1032

***

### destroy()?

> `optional` **destroy**(`this`, `error`, `callback`): `void`

#### Parameters

• **this**: [`Duplex`](../classes/Duplex.md)

• **error**: `null` \| [`Error`](Error.md)

• **callback**

#### Returns

`void`

#### Overrides

[`WritableOptions`](../namespaces/internal/interfaces/WritableOptions.md).[`destroy`](../namespaces/internal/interfaces/WritableOptions.md#destroy)

#### Defined in

node\_modules/@types/node/stream.d.ts:1044

***

### final()?

> `optional` **final**(`this`, `callback`): `void`

#### Parameters

• **this**: [`Duplex`](../classes/Duplex.md)

• **callback**

#### Returns

`void`

#### Overrides

[`WritableOptions`](../namespaces/internal/interfaces/WritableOptions.md).[`final`](../namespaces/internal/interfaces/WritableOptions.md#final)

#### Defined in

node\_modules/@types/node/stream.d.ts:1043

***

### read()?

> `optional` **read**(`this`, `size`): `void`

#### Parameters

• **this**: [`Duplex`](../classes/Duplex.md)

• **size**: `number`

#### Returns

`void`

#### Overrides

[`ReadableOptions`](../namespaces/internal/interfaces/ReadableOptions.md).[`read`](../namespaces/internal/interfaces/ReadableOptions.md#read)

#### Defined in

node\_modules/@types/node/stream.d.ts:1033

***

### write()?

> `optional` **write**(`this`, `chunk`, `encoding`, `callback`): `void`

#### Parameters

• **this**: [`Duplex`](../classes/Duplex.md)

• **chunk**: `any`

• **encoding**: [`BufferEncoding`](../type-aliases/BufferEncoding.md)

• **callback**

#### Returns

`void`

#### Overrides

[`WritableOptions`](../namespaces/internal/interfaces/WritableOptions.md).[`write`](../namespaces/internal/interfaces/WritableOptions.md#write)

#### Defined in

node\_modules/@types/node/stream.d.ts:1034

***

### writev()?

> `optional` **writev**(`this`, `chunks`, `callback`): `void`

#### Parameters

• **this**: [`Duplex`](../classes/Duplex.md)

• **chunks**: `object`[]

• **callback**

#### Returns

`void`

#### Overrides

[`WritableOptions`](../namespaces/internal/interfaces/WritableOptions.md).[`writev`](../namespaces/internal/interfaces/WritableOptions.md#writev)

#### Defined in

node\_modules/@types/node/stream.d.ts:1035
