[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / [internal](../modules/internal_.internal.md) / TransformOptions

# Interface: TransformOptions

[<internal>](../modules/internal_.md).[internal](../modules/internal_.internal.md).TransformOptions

## Hierarchy

- [`DuplexOptions`](internal_.internal.DuplexOptions.md)

  ↳ **`TransformOptions`**

## Table of contents

### Properties

- [allowHalfOpen](internal_.internal.TransformOptions.md#allowhalfopen)
- [autoDestroy](internal_.internal.TransformOptions.md#autodestroy)
- [decodeStrings](internal_.internal.TransformOptions.md#decodestrings)
- [defaultEncoding](internal_.internal.TransformOptions.md#defaultencoding)
- [emitClose](internal_.internal.TransformOptions.md#emitclose)
- [encoding](internal_.internal.TransformOptions.md#encoding)
- [highWaterMark](internal_.internal.TransformOptions.md#highwatermark)
- [objectMode](internal_.internal.TransformOptions.md#objectmode)
- [readableHighWaterMark](internal_.internal.TransformOptions.md#readablehighwatermark)
- [readableObjectMode](internal_.internal.TransformOptions.md#readableobjectmode)
- [signal](internal_.internal.TransformOptions.md#signal)
- [writableCorked](internal_.internal.TransformOptions.md#writablecorked)
- [writableHighWaterMark](internal_.internal.TransformOptions.md#writablehighwatermark)
- [writableObjectMode](internal_.internal.TransformOptions.md#writableobjectmode)

### Methods

- [construct](internal_.internal.TransformOptions.md#construct)
- [destroy](internal_.internal.TransformOptions.md#destroy)
- [final](internal_.internal.TransformOptions.md#final)
- [flush](internal_.internal.TransformOptions.md#flush)
- [read](internal_.internal.TransformOptions.md#read)
- [transform](internal_.internal.TransformOptions.md#transform)
- [write](internal_.internal.TransformOptions.md#write)
- [writev](internal_.internal.TransformOptions.md#writev)

## Properties

### allowHalfOpen

• `Optional` **allowHalfOpen**: `boolean`

#### Inherited from

[DuplexOptions](internal_.internal.DuplexOptions.md).[allowHalfOpen](internal_.internal.DuplexOptions.md#allowhalfopen)

#### Defined in

node_modules/@types/node/stream.d.ts:772

___

### autoDestroy

• `Optional` **autoDestroy**: `boolean`

#### Inherited from

[DuplexOptions](internal_.internal.DuplexOptions.md).[autoDestroy](internal_.internal.DuplexOptions.md#autodestroy)

#### Defined in

node_modules/@types/node/stream.d.ts:41

___

### decodeStrings

• `Optional` **decodeStrings**: `boolean`

#### Inherited from

[DuplexOptions](internal_.internal.DuplexOptions.md).[decodeStrings](internal_.internal.DuplexOptions.md#decodestrings)

#### Defined in

node_modules/@types/node/stream.d.ts:482

___

### defaultEncoding

• `Optional` **defaultEncoding**: [`BufferEncoding`](../modules/internal_.md#bufferencoding)

#### Inherited from

[DuplexOptions](internal_.internal.DuplexOptions.md).[defaultEncoding](internal_.internal.DuplexOptions.md#defaultencoding)

#### Defined in

node_modules/@types/node/stream.d.ts:483

___

### emitClose

• `Optional` **emitClose**: `boolean`

#### Inherited from

[DuplexOptions](internal_.internal.DuplexOptions.md).[emitClose](internal_.internal.DuplexOptions.md#emitclose)

#### Defined in

node_modules/@types/node/stream.d.ts:36

___

### encoding

• `Optional` **encoding**: [`BufferEncoding`](../modules/internal_.md#bufferencoding)

#### Inherited from

[DuplexOptions](internal_.internal.DuplexOptions.md).[encoding](internal_.internal.DuplexOptions.md#encoding)

#### Defined in

node_modules/@types/node/stream.d.ts:44

___

### highWaterMark

• `Optional` **highWaterMark**: `number`

#### Inherited from

[DuplexOptions](internal_.internal.DuplexOptions.md).[highWaterMark](internal_.internal.DuplexOptions.md#highwatermark)

#### Defined in

node_modules/@types/node/stream.d.ts:37

___

### objectMode

• `Optional` **objectMode**: `boolean`

#### Inherited from

[DuplexOptions](internal_.internal.DuplexOptions.md).[objectMode](internal_.internal.DuplexOptions.md#objectmode)

#### Defined in

node_modules/@types/node/stream.d.ts:38

___

### readableHighWaterMark

• `Optional` **readableHighWaterMark**: `number`

#### Inherited from

[DuplexOptions](internal_.internal.DuplexOptions.md).[readableHighWaterMark](internal_.internal.DuplexOptions.md#readablehighwatermark)

#### Defined in

node_modules/@types/node/stream.d.ts:775

___

### readableObjectMode

• `Optional` **readableObjectMode**: `boolean`

#### Inherited from

[DuplexOptions](internal_.internal.DuplexOptions.md).[readableObjectMode](internal_.internal.DuplexOptions.md#readableobjectmode)

#### Defined in

node_modules/@types/node/stream.d.ts:773

___

### signal

• `Optional` **signal**: `AbortSignal`

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[DuplexOptions](internal_.internal.DuplexOptions.md).[signal](internal_.internal.DuplexOptions.md#signal)

#### Defined in

node_modules/@types/node/events.d.ts:317

___

### writableCorked

• `Optional` **writableCorked**: `number`

#### Inherited from

[DuplexOptions](internal_.internal.DuplexOptions.md).[writableCorked](internal_.internal.DuplexOptions.md#writablecorked)

#### Defined in

node_modules/@types/node/stream.d.ts:777

___

### writableHighWaterMark

• `Optional` **writableHighWaterMark**: `number`

#### Inherited from

[DuplexOptions](internal_.internal.DuplexOptions.md).[writableHighWaterMark](internal_.internal.DuplexOptions.md#writablehighwatermark)

#### Defined in

node_modules/@types/node/stream.d.ts:776

___

### writableObjectMode

• `Optional` **writableObjectMode**: `boolean`

#### Inherited from

[DuplexOptions](internal_.internal.DuplexOptions.md).[writableObjectMode](internal_.internal.DuplexOptions.md#writableobjectmode)

#### Defined in

node_modules/@types/node/stream.d.ts:774

## Methods

### construct

▸ `Optional` **construct**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](../classes/internal_.internal.Transform.md) |
| `callback` | (`error?`: ``null`` \| [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

`void`

#### Overrides

[DuplexOptions](internal_.internal.DuplexOptions.md).[construct](internal_.internal.DuplexOptions.md#construct)

___

### destroy

▸ `Optional` **destroy**(`this`, `error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](../classes/internal_.internal.Transform.md) |
| `error` | ``null`` \| [`Error`](../modules/internal_.md#error) |
| `callback` | (`error`: ``null`` \| [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

`void`

#### Overrides

[DuplexOptions](internal_.internal.DuplexOptions.md).[destroy](internal_.internal.DuplexOptions.md#destroy)

___

### final

▸ `Optional` **final**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](../classes/internal_.internal.Transform.md) |
| `callback` | (`error?`: ``null`` \| [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

`void`

#### Overrides

[DuplexOptions](internal_.internal.DuplexOptions.md).[final](internal_.internal.DuplexOptions.md#final)

___

### flush

▸ `Optional` **flush**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](../classes/internal_.internal.Transform.md) |
| `callback` | [`TransformCallback`](../modules/internal_.internal.md#transformcallback) |

#### Returns

`void`

___

### read

▸ `Optional` **read**(`this`, `size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](../classes/internal_.internal.Transform.md) |
| `size` | `number` |

#### Returns

`void`

#### Overrides

[DuplexOptions](internal_.internal.DuplexOptions.md).[read](internal_.internal.DuplexOptions.md#read)

___

### transform

▸ `Optional` **transform**(`this`, `chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](../classes/internal_.internal.Transform.md) |
| `chunk` | `any` |
| `encoding` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) |
| `callback` | [`TransformCallback`](../modules/internal_.internal.md#transformcallback) |

#### Returns

`void`

___

### write

▸ `Optional` **write**(`this`, `chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](../classes/internal_.internal.Transform.md) |
| `chunk` | `any` |
| `encoding` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) |
| `callback` | (`error?`: ``null`` \| [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

`void`

#### Overrides

[DuplexOptions](internal_.internal.DuplexOptions.md).[write](internal_.internal.DuplexOptions.md#write)

___

### writev

▸ `Optional` **writev**(`this`, `chunks`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](../classes/internal_.internal.Transform.md) |
| `chunks` | { `chunk`: `any` ; `encoding`: [`BufferEncoding`](../modules/internal_.md#bufferencoding)  }[] |
| `callback` | (`error?`: ``null`` \| [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

`void`

#### Overrides

[DuplexOptions](internal_.internal.DuplexOptions.md).[writev](internal_.internal.DuplexOptions.md#writev)
