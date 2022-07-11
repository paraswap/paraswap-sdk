[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / [EventEmitter](../modules/internal_.EventEmitter.md) / Abortable

# Interface: Abortable

[<internal>](../modules/internal_.md).[EventEmitter](../modules/internal_.EventEmitter.md).Abortable

## Hierarchy

- **`Abortable`**

  ↳ [`StreamOptions`](internal_.internal.StreamOptions.md)

  ↳ [`FinishedOptions`](internal_.internal.FinishedOptions.md)

  ↳ [`ListenOptions`](internal_.ListenOptions.md)

## Table of contents

### Properties

- [signal](internal_.EventEmitter.Abortable.md#signal)

## Properties

### signal

• `Optional` **signal**: `AbortSignal`

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Defined in

node_modules/@types/node/events.d.ts:317
