[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / [internal](../modules/internal_.internal.md) / FinishedOptions

# Interface: FinishedOptions

[<internal>](../modules/internal_.md).[internal](../modules/internal_.internal.md).FinishedOptions

## Hierarchy

- [`Abortable`](internal_.EventEmitter.Abortable.md)

  ↳ **`FinishedOptions`**

## Table of contents

### Properties

- [error](internal_.internal.FinishedOptions.md#error)
- [readable](internal_.internal.FinishedOptions.md#readable)
- [signal](internal_.internal.FinishedOptions.md#signal)
- [writable](internal_.internal.FinishedOptions.md#writable)

## Properties

### error

• `Optional` **error**: `boolean`

#### Defined in

node_modules/@types/node/stream.d.ts:948

___

### readable

• `Optional` **readable**: `boolean`

#### Defined in

node_modules/@types/node/stream.d.ts:949

___

### signal

• `Optional` **signal**: `AbortSignal`

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[Abortable](internal_.EventEmitter.Abortable.md).[signal](internal_.EventEmitter.Abortable.md#signal)

#### Defined in

node_modules/@types/node/events.d.ts:317

___

### writable

• `Optional` **writable**: `boolean`

#### Defined in

node_modules/@types/node/stream.d.ts:950
