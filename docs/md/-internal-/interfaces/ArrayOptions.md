[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / ArrayOptions

# Interface: ArrayOptions

## Properties

### concurrency?

> `optional` **concurrency**: `number`

The maximum concurrent invocations of `fn` to call on the stream at once.

#### Default

```ts
1
```

#### Defined in

node\_modules/@types/node/stream.d.ts:49

***

### signal?

> `optional` **signal**: `AbortSignal`

Allows destroying the stream if the signal is aborted.

#### Defined in

node\_modules/@types/node/stream.d.ts:51
