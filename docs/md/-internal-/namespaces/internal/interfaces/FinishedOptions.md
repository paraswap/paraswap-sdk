[**@velora-dex/sdk**](../../../../README.md) • **Docs**

***

[@velora-dex/sdk](../../../../globals.md) / [\<internal\>](../../../README.md) / [internal](../README.md) / FinishedOptions

# Interface: FinishedOptions

## Extends

- [`Abortable`](../../EventEmitter/interfaces/Abortable.md)

## Extended by

- [`FinishedOptions`](../../node:stream_promises/interfaces/FinishedOptions.md)

## Properties

### error?

> `optional` **error**: `boolean`

#### Defined in

node\_modules/@types/node/stream.d.ts:1409

***

### readable?

> `optional` **readable**: `boolean`

#### Defined in

node\_modules/@types/node/stream.d.ts:1410

***

### signal?

> `optional` **signal**: `AbortSignal`

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[`Abortable`](../../EventEmitter/interfaces/Abortable.md).[`signal`](../../EventEmitter/interfaces/Abortable.md#signal)

#### Defined in

node\_modules/@types/node/events.d.ts:561

***

### writable?

> `optional` **writable**: `boolean`

#### Defined in

node\_modules/@types/node/stream.d.ts:1411
