[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / [internal](../modules/internal_.internal.md) / WritableOptions

# Interface: WritableOptions

[<internal>](../modules/internal_.md).[internal](../modules/internal_.internal.md).WritableOptions

## Hierarchy

- [`StreamOptions`](internal_.internal.StreamOptions.md)<[`Writable`](../classes/internal_.Writable.md)\>

  ↳ **`WritableOptions`**

  ↳↳ [`DuplexOptions`](internal_.internal.DuplexOptions.md)

  ↳↳ [`DuplexOptions`](internal_.DuplexOptions.md)

## Table of contents

### Properties

- [autoDestroy](internal_.internal.WritableOptions.md#autodestroy)
- [decodeStrings](internal_.internal.WritableOptions.md#decodestrings)
- [defaultEncoding](internal_.internal.WritableOptions.md#defaultencoding)
- [emitClose](internal_.internal.WritableOptions.md#emitclose)
- [highWaterMark](internal_.internal.WritableOptions.md#highwatermark)
- [objectMode](internal_.internal.WritableOptions.md#objectmode)
- [signal](internal_.internal.WritableOptions.md#signal)

### Methods

- [construct](internal_.internal.WritableOptions.md#construct)
- [destroy](internal_.internal.WritableOptions.md#destroy)
- [final](internal_.internal.WritableOptions.md#final)
- [write](internal_.internal.WritableOptions.md#write)
- [writev](internal_.internal.WritableOptions.md#writev)

## Properties

### autoDestroy

• `Optional` **autoDestroy**: `boolean`

#### Inherited from

[StreamOptions](internal_.internal.StreamOptions.md).[autoDestroy](internal_.internal.StreamOptions.md#autodestroy)

#### Defined in

node_modules/@types/node/stream.d.ts:41

___

### decodeStrings

• `Optional` **decodeStrings**: `boolean`

#### Defined in

node_modules/@types/node/stream.d.ts:482

___

### defaultEncoding

• `Optional` **defaultEncoding**: [`BufferEncoding`](../modules/internal_.md#bufferencoding)

#### Defined in

node_modules/@types/node/stream.d.ts:483

___

### emitClose

• `Optional` **emitClose**: `boolean`

#### Inherited from

[StreamOptions](internal_.internal.StreamOptions.md).[emitClose](internal_.internal.StreamOptions.md#emitclose)

#### Defined in

node_modules/@types/node/stream.d.ts:36

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
| `this` | [`Writable`](../classes/internal_.Writable.md) |
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
| `this` | [`Writable`](../classes/internal_.Writable.md) |
| `error` | ``null`` \| [`Error`](../modules/internal_.md#error) |
| `callback` | (`error`: ``null`` \| [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

`void`

#### Inherited from

[StreamOptions](internal_.internal.StreamOptions.md).[destroy](internal_.internal.StreamOptions.md#destroy)

___

### final

▸ `Optional` **final**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Writable`](../classes/internal_.Writable.md) |
| `callback` | (`error?`: ``null`` \| [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

`void`

___

### write

▸ `Optional` **write**(`this`, `chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Writable`](../classes/internal_.Writable.md) |
| `chunk` | `any` |
| `encoding` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) |
| `callback` | (`error?`: ``null`` \| [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

`void`

___

### writev

▸ `Optional` **writev**(`this`, `chunks`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Writable`](../classes/internal_.Writable.md) |
| `chunks` | { `chunk`: `any` ; `encoding`: [`BufferEncoding`](../modules/internal_.md#bufferencoding)  }[] |
| `callback` | (`error?`: ``null`` \| [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

`void`
