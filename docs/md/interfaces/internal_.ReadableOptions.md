[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ReadableOptions

# Interface: ReadableOptions

[<internal>](../modules/internal_.md).ReadableOptions

## Hierarchy

- [`StreamOptions`](internal_.internal.StreamOptions.md)<[`Readable`](../classes/internal_.Readable.md)\>

  ↳ **`ReadableOptions`**

## Table of contents

### Properties

- [autoDestroy](internal_.ReadableOptions.md#autodestroy)
- [emitClose](internal_.ReadableOptions.md#emitclose)
- [encoding](internal_.ReadableOptions.md#encoding)
- [highWaterMark](internal_.ReadableOptions.md#highwatermark)
- [objectMode](internal_.ReadableOptions.md#objectmode)
- [signal](internal_.ReadableOptions.md#signal)

### Methods

- [construct](internal_.ReadableOptions.md#construct)
- [destroy](internal_.ReadableOptions.md#destroy)
- [read](internal_.ReadableOptions.md#read)

## Properties

### autoDestroy

• `Optional` **autoDestroy**: `boolean`

#### Inherited from

[StreamOptions](internal_.internal.StreamOptions.md).[autoDestroy](internal_.internal.StreamOptions.md#autodestroy)

#### Defined in

node_modules/@types/node/stream.d.ts:41

___

### emitClose

• `Optional` **emitClose**: `boolean`

#### Inherited from

[StreamOptions](internal_.internal.StreamOptions.md).[emitClose](internal_.internal.StreamOptions.md#emitclose)

#### Defined in

node_modules/@types/node/stream.d.ts:36

___

### encoding

• `Optional` **encoding**: [`BufferEncoding`](../modules/internal_.md#bufferencoding)

#### Defined in

node_modules/@types/node/stream.d.ts:44

___

### highWaterMark

• `Optional` **highWaterMark**: `number`

#### Inherited from

[StreamOptions](internal_.internal.StreamOptions.md).[highWaterMark](internal_.internal.StreamOptions.md#highwatermark)

#### Defined in

node_modules/@types/node/stream.d.ts:37

___

### objectMode

• `Optional` **objectMode**: `boolean`

#### Inherited from

[StreamOptions](internal_.internal.StreamOptions.md).[objectMode](internal_.internal.StreamOptions.md#objectmode)

#### Defined in

node_modules/@types/node/stream.d.ts:38

___

### signal

• `Optional` **signal**: `AbortSignal`

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[StreamOptions](internal_.internal.StreamOptions.md).[signal](internal_.internal.StreamOptions.md#signal)

#### Defined in

node_modules/@types/node/events.d.ts:317

## Methods

### construct

▸ `Optional` **construct**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Readable`](../classes/internal_.Readable.md) |
| `callback` | (`error?`: ``null`` \| [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

`void`

#### Inherited from

[StreamOptions](internal_.internal.StreamOptions.md).[construct](internal_.internal.StreamOptions.md#construct)

___

### destroy

▸ `Optional` **destroy**(`this`, `error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Readable`](../classes/internal_.Readable.md) |
| `error` | ``null`` \| [`Error`](../modules/internal_.md#error) |
| `callback` | (`error`: ``null`` \| [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

`void`

#### Inherited from

[StreamOptions](internal_.internal.StreamOptions.md).[destroy](internal_.internal.StreamOptions.md#destroy)

___

### read

▸ `Optional` **read**(`this`, `size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Readable`](../classes/internal_.Readable.md) |
| `size` | `number` |

#### Returns

`void`
