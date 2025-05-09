[**@velora-dex/sdk**](../../../../README.md) • **Docs**

***

[@velora-dex/sdk](../../../../globals.md) / [\<internal\>](../../../README.md) / [internal](../README.md) / TransformOptions

# Interface: TransformOptions

## Extends

- [`DuplexOptions`](../../../interfaces/DuplexOptions.md)

## Properties

### allowHalfOpen?

> `optional` **allowHalfOpen**: `boolean`

#### Inherited from

[`DuplexOptions`](../../../interfaces/DuplexOptions.md).[`allowHalfOpen`](../../../interfaces/DuplexOptions.md#allowhalfopen)

#### Defined in

node\_modules/@types/node/stream.d.ts:1026

***

### autoDestroy?

> `optional` **autoDestroy**: `boolean`

#### Inherited from

[`DuplexOptions`](../../../interfaces/DuplexOptions.md).[`autoDestroy`](../../../interfaces/DuplexOptions.md#autodestroy)

#### Defined in

node\_modules/@types/node/stream.d.ts:960

***

### decodeStrings?

> `optional` **decodeStrings**: `boolean`

#### Inherited from

[`DuplexOptions`](../../../interfaces/DuplexOptions.md).[`decodeStrings`](../../../interfaces/DuplexOptions.md#decodestrings)

#### Defined in

node\_modules/@types/node/stream.d.ts:987

***

### defaultEncoding?

> `optional` **defaultEncoding**: [`BufferEncoding`](../../../type-aliases/BufferEncoding.md)

#### Inherited from

[`DuplexOptions`](../../../interfaces/DuplexOptions.md).[`defaultEncoding`](../../../interfaces/DuplexOptions.md#defaultencoding)

#### Defined in

node\_modules/@types/node/stream.d.ts:988

***

### emitClose?

> `optional` **emitClose**: `boolean`

#### Inherited from

[`DuplexOptions`](../../../interfaces/DuplexOptions.md).[`emitClose`](../../../interfaces/DuplexOptions.md#emitclose)

#### Defined in

node\_modules/@types/node/stream.d.ts:955

***

### encoding?

> `optional` **encoding**: [`BufferEncoding`](../../../type-aliases/BufferEncoding.md)

#### Inherited from

[`DuplexOptions`](../../../interfaces/DuplexOptions.md).[`encoding`](../../../interfaces/DuplexOptions.md#encoding)

#### Defined in

node\_modules/@types/node/stream.d.ts:963

***

### highWaterMark?

> `optional` **highWaterMark**: `number`

#### Inherited from

[`DuplexOptions`](../../../interfaces/DuplexOptions.md).[`highWaterMark`](../../../interfaces/DuplexOptions.md#highwatermark)

#### Defined in

node\_modules/@types/node/stream.d.ts:956

***

### objectMode?

> `optional` **objectMode**: `boolean`

#### Inherited from

[`DuplexOptions`](../../../interfaces/DuplexOptions.md).[`objectMode`](../../../interfaces/DuplexOptions.md#objectmode)

#### Defined in

node\_modules/@types/node/stream.d.ts:957

***

### readableHighWaterMark?

> `optional` **readableHighWaterMark**: `number`

#### Inherited from

[`DuplexOptions`](../../../interfaces/DuplexOptions.md).[`readableHighWaterMark`](../../../interfaces/DuplexOptions.md#readablehighwatermark)

#### Defined in

node\_modules/@types/node/stream.d.ts:1029

***

### readableObjectMode?

> `optional` **readableObjectMode**: `boolean`

#### Inherited from

[`DuplexOptions`](../../../interfaces/DuplexOptions.md).[`readableObjectMode`](../../../interfaces/DuplexOptions.md#readableobjectmode)

#### Defined in

node\_modules/@types/node/stream.d.ts:1027

***

### signal?

> `optional` **signal**: `AbortSignal`

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[`DuplexOptions`](../../../interfaces/DuplexOptions.md).[`signal`](../../../interfaces/DuplexOptions.md#signal)

#### Defined in

node\_modules/@types/node/events.d.ts:561

***

### writableCorked?

> `optional` **writableCorked**: `number`

#### Inherited from

[`DuplexOptions`](../../../interfaces/DuplexOptions.md).[`writableCorked`](../../../interfaces/DuplexOptions.md#writablecorked)

#### Defined in

node\_modules/@types/node/stream.d.ts:1031

***

### writableHighWaterMark?

> `optional` **writableHighWaterMark**: `number`

#### Inherited from

[`DuplexOptions`](../../../interfaces/DuplexOptions.md).[`writableHighWaterMark`](../../../interfaces/DuplexOptions.md#writablehighwatermark)

#### Defined in

node\_modules/@types/node/stream.d.ts:1030

***

### writableObjectMode?

> `optional` **writableObjectMode**: `boolean`

#### Inherited from

[`DuplexOptions`](../../../interfaces/DuplexOptions.md).[`writableObjectMode`](../../../interfaces/DuplexOptions.md#writableobjectmode)

#### Defined in

node\_modules/@types/node/stream.d.ts:1028

## Methods

### construct()?

> `optional` **construct**(`this`, `callback`): `void`

#### Parameters

• **this**: [`Transform`](../classes/Transform.md)

• **callback**

#### Returns

`void`

#### Overrides

[`DuplexOptions`](../../../interfaces/DuplexOptions.md).[`construct`](../../../interfaces/DuplexOptions.md#construct)

#### Defined in

node\_modules/@types/node/stream.d.ts:1274

***

### destroy()?

> `optional` **destroy**(`this`, `error`, `callback`): `void`

#### Parameters

• **this**: [`Transform`](../classes/Transform.md)

• **error**: `null` \| [`Error`](../../../interfaces/Error.md)

• **callback**

#### Returns

`void`

#### Overrides

[`DuplexOptions`](../../../interfaces/DuplexOptions.md).[`destroy`](../../../interfaces/DuplexOptions.md#destroy)

#### Defined in

node\_modules/@types/node/stream.d.ts:1291

***

### final()?

> `optional` **final**(`this`, `callback`): `void`

#### Parameters

• **this**: [`Transform`](../classes/Transform.md)

• **callback**

#### Returns

`void`

#### Overrides

[`DuplexOptions`](../../../interfaces/DuplexOptions.md).[`final`](../../../interfaces/DuplexOptions.md#final)

#### Defined in

node\_modules/@types/node/stream.d.ts:1290

***

### flush()?

> `optional` **flush**(`this`, `callback`): `void`

#### Parameters

• **this**: [`Transform`](../classes/Transform.md)

• **callback**: [`TransformCallback`](../type-aliases/TransformCallback.md)

#### Returns

`void`

#### Defined in

node\_modules/@types/node/stream.d.ts:1293

***

### read()?

> `optional` **read**(`this`, `size`): `void`

#### Parameters

• **this**: [`Transform`](../classes/Transform.md)

• **size**: `number`

#### Returns

`void`

#### Overrides

[`DuplexOptions`](../../../interfaces/DuplexOptions.md).[`read`](../../../interfaces/DuplexOptions.md#read)

#### Defined in

node\_modules/@types/node/stream.d.ts:1275

***

### transform()?

> `optional` **transform**(`this`, `chunk`, `encoding`, `callback`): `void`

#### Parameters

• **this**: [`Transform`](../classes/Transform.md)

• **chunk**: `any`

• **encoding**: [`BufferEncoding`](../../../type-aliases/BufferEncoding.md)

• **callback**: [`TransformCallback`](../type-aliases/TransformCallback.md)

#### Returns

`void`

#### Defined in

node\_modules/@types/node/stream.d.ts:1292

***

### write()?

> `optional` **write**(`this`, `chunk`, `encoding`, `callback`): `void`

#### Parameters

• **this**: [`Transform`](../classes/Transform.md)

• **chunk**: `any`

• **encoding**: [`BufferEncoding`](../../../type-aliases/BufferEncoding.md)

• **callback**

#### Returns

`void`

#### Overrides

[`DuplexOptions`](../../../interfaces/DuplexOptions.md).[`write`](../../../interfaces/DuplexOptions.md#write)

#### Defined in

node\_modules/@types/node/stream.d.ts:1276

***

### writev()?

> `optional` **writev**(`this`, `chunks`, `callback`): `void`

#### Parameters

• **this**: [`Transform`](../classes/Transform.md)

• **chunks**: `object`[]

• **callback**

#### Returns

`void`

#### Overrides

[`DuplexOptions`](../../../interfaces/DuplexOptions.md).[`writev`](../../../interfaces/DuplexOptions.md#writev)

#### Defined in

node\_modules/@types/node/stream.d.ts:1282
