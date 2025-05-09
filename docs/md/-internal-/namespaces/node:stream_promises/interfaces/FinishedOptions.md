[**@velora-dex/sdk**](../../../../README.md) • **Docs**

***

[@velora-dex/sdk](../../../../globals.md) / [\<internal\>](../../../README.md) / ["node:stream/promises"](../README.md) / FinishedOptions

# Interface: FinishedOptions

## Extends

- [`FinishedOptions`](../../internal/interfaces/FinishedOptions.md)

## Properties

### cleanup?

> `optional` **cleanup**: `boolean`

If true, removes the listeners registered by this function before the promise is fulfilled.

#### Default

```ts
false
```

#### Defined in

node\_modules/@types/node/stream/promises.d.ts:15

***

### error?

> `optional` **error**: `boolean`

#### Inherited from

[`FinishedOptions`](../../internal/interfaces/FinishedOptions.md).[`error`](../../internal/interfaces/FinishedOptions.md#error)

#### Defined in

node\_modules/@types/node/stream.d.ts:1409

***

### readable?

> `optional` **readable**: `boolean`

#### Inherited from

[`FinishedOptions`](../../internal/interfaces/FinishedOptions.md).[`readable`](../../internal/interfaces/FinishedOptions.md#readable)

#### Defined in

node\_modules/@types/node/stream.d.ts:1410

***

### signal?

> `optional` **signal**: `AbortSignal`

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[`FinishedOptions`](../../internal/interfaces/FinishedOptions.md).[`signal`](../../internal/interfaces/FinishedOptions.md#signal)

#### Defined in

node\_modules/@types/node/events.d.ts:561

***

### writable?

> `optional` **writable**: `boolean`

#### Inherited from

[`FinishedOptions`](../../internal/interfaces/FinishedOptions.md).[`writable`](../../internal/interfaces/FinishedOptions.md#writable)

#### Defined in

node\_modules/@types/node/stream.d.ts:1411
