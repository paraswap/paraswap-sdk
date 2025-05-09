[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / UnionPartialBy

# Type Alias: UnionPartialBy\<T, K\>

> **UnionPartialBy**\<`T`, `K`\>: `T` *extends* `any` ? [`PartialBy`](PartialBy.md)\<`T`, `K`\> : `never`

## Type Parameters

• **T**

• **K** *extends* keyof `T`

## Description

Creates a type that is a partial of T, but with the required keys K.

## Example

```ts
PartialBy<{ a: string, b: number } | { a: string, b: undefined, c: number }, 'a'>
=> { a?: string, b: number } | { a?: string, b: undefined, c: number }
```

## Defined in

node\_modules/viem/\_types/types/utils.d.ts:201
