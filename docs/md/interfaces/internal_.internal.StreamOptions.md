[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / [internal](../modules/internal_.internal.md) / StreamOptions

# Interface: StreamOptions<T\>

[<internal>](../modules/internal_.md).[internal](../modules/internal_.internal.md).StreamOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Stream`](../classes/internal_.Stream.md) |

## Hierarchy

- [`Abortable`](internal_.EventEmitter.Abortable.md)

  ↳ **`StreamOptions`**

  ↳↳ [`ReadableOptions`](internal_.internal.ReadableOptions.md)

  ↳↳ [`WritableOptions`](internal_.internal.WritableOptions.md)

  ↳↳ [`ReadableOptions`](internal_.ReadableOptions.md)

## Table of contents

### Properties

- [autoDestroy](internal_.internal.StreamOptions.md#autodestroy)
- [emitClose](internal_.internal.StreamOptions.md#emitclose)
- [highWaterMark](internal_.internal.StreamOptions.md#highwatermark)
- [objectMode](internal_.internal.StreamOptions.md#objectmode)
- [signal](internal_.internal.StreamOptions.md#signal)

### Methods

- [construct](internal_.internal.StreamOptions.md#construct)
- [destroy](internal_.internal.StreamOptions.md#destroy)

## Properties

### autoDestroy

• `Optional` **autoDestroy**: `boolean`

#### Defined in

node_modules/@types/node/stream.d.ts:41

___

### emitClose

• `Optional` **emitClose**: `boolean`

#### Defined in

node_modules/@types/node/stream.d.ts:36

___

### highWaterMark

• `Optional` **highWaterMark**: `number`

#### Defined in

node_modules/@types/node/stream.d.ts:37

___

### objectMode

• `Optional` **objectMode**: `boolean`

#### Defined in

node_modules/@types/node/stream.d.ts:38

___

### signal

• `Optional` **signal**: `AbortSignal`

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[Abortable](internal_.EventEmitter.Abortable.md).[signal](internal_.EventEmitter.Abortable.md#signal)

#### Defined in

node_modules/@types/node/events.d.ts:317

## Methods

### construct

▸ `Optional` **construct**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `callback` | (`error?`: ``null`` \| [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

`void`

___

### destroy

▸ `Optional` **destroy**(`this`, `error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `error` | ``null`` \| [`Error`](../modules/internal_.md#error) |
| `callback` | (`error`: ``null`` \| [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

`void`
