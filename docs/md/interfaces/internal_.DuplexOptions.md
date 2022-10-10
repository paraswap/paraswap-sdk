[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / DuplexOptions

# Interface: DuplexOptions

[<internal>](../modules/internal_.md).DuplexOptions

## Hierarchy

- [`ReadableOptions`](internal_.internal.ReadableOptions.md)

- [`WritableOptions`](internal_.internal.WritableOptions.md)

  ↳ **`DuplexOptions`**

## Table of contents

### Properties

- [allowHalfOpen](internal_.DuplexOptions.md#allowhalfopen)
- [autoDestroy](internal_.DuplexOptions.md#autodestroy)
- [decodeStrings](internal_.DuplexOptions.md#decodestrings)
- [defaultEncoding](internal_.DuplexOptions.md#defaultencoding)
- [emitClose](internal_.DuplexOptions.md#emitclose)
- [encoding](internal_.DuplexOptions.md#encoding)
- [highWaterMark](internal_.DuplexOptions.md#highwatermark)
- [objectMode](internal_.DuplexOptions.md#objectmode)
- [readableHighWaterMark](internal_.DuplexOptions.md#readablehighwatermark)
- [readableObjectMode](internal_.DuplexOptions.md#readableobjectmode)
- [signal](internal_.DuplexOptions.md#signal)
- [writableCorked](internal_.DuplexOptions.md#writablecorked)
- [writableHighWaterMark](internal_.DuplexOptions.md#writablehighwatermark)
- [writableObjectMode](internal_.DuplexOptions.md#writableobjectmode)

### Methods

- [construct](internal_.DuplexOptions.md#construct)
- [destroy](internal_.DuplexOptions.md#destroy)
- [final](internal_.DuplexOptions.md#final)
- [read](internal_.DuplexOptions.md#read)
- [write](internal_.DuplexOptions.md#write)
- [writev](internal_.DuplexOptions.md#writev)

## Properties

### allowHalfOpen

• `Optional` **allowHalfOpen**: `boolean`

#### Defined in

node_modules/@types/node/stream.d.ts:772

___

### autoDestroy

• `Optional` **autoDestroy**: `boolean`

#### Inherited from

[WritableOptions](internal_.internal.WritableOptions.md).[autoDestroy](internal_.internal.WritableOptions.md#autodestroy)

#### Defined in

node_modules/@types/node/stream.d.ts:41

___

### decodeStrings

• `Optional` **decodeStrings**: `boolean`

#### Inherited from

[WritableOptions](internal_.internal.WritableOptions.md).[decodeStrings](internal_.internal.WritableOptions.md#decodestrings)

#### Defined in

node_modules/@types/node/stream.d.ts:482

___

### defaultEncoding

• `Optional` **defaultEncoding**: [`BufferEncoding`](../modules/internal_.md#bufferencoding)

#### Inherited from

[WritableOptions](internal_.internal.WritableOptions.md).[defaultEncoding](internal_.internal.WritableOptions.md#defaultencoding)

#### Defined in

node_modules/@types/node/stream.d.ts:483

___

### emitClose

• `Optional` **emitClose**: `boolean`

#### Inherited from

[WritableOptions](internal_.internal.WritableOptions.md).[emitClose](internal_.internal.WritableOptions.md#emitclose)

#### Defined in

node_modules/@types/node/stream.d.ts:36

___

### encoding

• `Optional` **encoding**: [`BufferEncoding`](../modules/internal_.md#bufferencoding)

#### Inherited from

[ReadableOptions](internal_.internal.ReadableOptions.md).[encoding](internal_.internal.ReadableOptions.md#encoding)

#### Defined in

node_modules/@types/node/stream.d.ts:44

___

### highWaterMark

• `Optional` **highWaterMark**: `number`

#### Inherited from

[WritableOptions](internal_.internal.WritableOptions.md).[highWaterMark](internal_.internal.WritableOptions.md#highwatermark)

#### Defined in

node_modules/@types/node/stream.d.ts:37

___

### objectMode

• `Optional` **objectMode**: `boolean`

#### Inherited from

[WritableOptions](internal_.internal.WritableOptions.md).[objectMode](internal_.internal.WritableOptions.md#objectmode)

#### Defined in

node_modules/@types/node/stream.d.ts:38

___

### readableHighWaterMark

• `Optional` **readableHighWaterMark**: `number`

#### Defined in

node_modules/@types/node/stream.d.ts:775

___

### readableObjectMode

• `Optional` **readableObjectMode**: `boolean`

#### Defined in

node_modules/@types/node/stream.d.ts:773

___

### signal

• `Optional` **signal**: `AbortSignal`

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[WritableOptions](internal_.internal.WritableOptions.md).[signal](internal_.internal.WritableOptions.md#signal)

#### Defined in

node_modules/@types/node/events.d.ts:317

___

### writableCorked

• `Optional` **writableCorked**: `number`

#### Defined in

node_modules/@types/node/stream.d.ts:777

___

### writableHighWaterMark

• `Optional` **writableHighWaterMark**: `number`

#### Defined in

node_modules/@types/node/stream.d.ts:776

___

### writableObjectMode

• `Optional` **writableObjectMode**: `boolean`

#### Defined in

node_modules/@types/node/stream.d.ts:774

## Methods

### construct

▸ `Optional` **construct**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Duplex`](../classes/internal_.Duplex.md) |
| `callback` | (`error?`: ``null`` \| [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

`void`

#### Overrides

[WritableOptions](internal_.internal.WritableOptions.md).[construct](internal_.internal.WritableOptions.md#construct)

___

### destroy

▸ `Optional` **destroy**(`this`, `error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Duplex`](../classes/internal_.Duplex.md) |
| `error` | ``null`` \| [`Error`](../modules/internal_.md#error) |
| `callback` | (`error`: ``null`` \| [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

`void`

#### Overrides

[WritableOptions](internal_.internal.WritableOptions.md).[destroy](internal_.internal.WritableOptions.md#destroy)

___

### final

▸ `Optional` **final**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Duplex`](../classes/internal_.Duplex.md) |
| `callback` | (`error?`: ``null`` \| [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

`void`

#### Overrides

[WritableOptions](internal_.internal.WritableOptions.md).[final](internal_.internal.WritableOptions.md#final)

___

### read

▸ `Optional` **read**(`this`, `size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Duplex`](../classes/internal_.Duplex.md) |
| `size` | `number` |

#### Returns

`void`

#### Overrides

[ReadableOptions](internal_.internal.ReadableOptions.md).[read](internal_.internal.ReadableOptions.md#read)

___

### write

▸ `Optional` **write**(`this`, `chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Duplex`](../classes/internal_.Duplex.md) |
| `chunk` | `any` |
| `encoding` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) |
| `callback` | (`error?`: ``null`` \| [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

`void`

#### Overrides

[WritableOptions](internal_.internal.WritableOptions.md).[write](internal_.internal.WritableOptions.md#write)

___

### writev

▸ `Optional` **writev**(`this`, `chunks`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Duplex`](../classes/internal_.Duplex.md) |
| `chunks` | { `chunk`: `any` ; `encoding`: [`BufferEncoding`](../modules/internal_.md#bufferencoding)  }[] |
| `callback` | (`error?`: ``null`` \| [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

`void`

#### Overrides

[WritableOptions](internal_.internal.WritableOptions.md).[writev](internal_.internal.WritableOptions.md#writev)
