[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Awaited

# Type Alias: Awaited\<T\>

> **Awaited**\<`T`\>: `T` *extends* `null` \| `undefined` ? `T` : `T` *extends* `object` & `object` ? `F` *extends* (`value`, ...`args`) => `any` ? [`Awaited`](Awaited.md)\<`V`\> : `never` : `T`

Recursively unwraps the "awaited type" of a type. Non-promise "thenables" should resolve to `never`. This emulates the behavior of `await`.

## Type Parameters

• **T**

## Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1563
