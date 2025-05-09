[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / UnionRequiredBy

# Type Alias: UnionRequiredBy\<T, K\>

> **UnionRequiredBy**\<`T`, `K`\>: `T` *extends* `any` ? [`RequiredBy`](RequiredBy.md)\<`T`, `K`\> : `never`

## Type Parameters

• **T**

• **K** *extends* keyof `T`

## Description

Creates a type that is T with the required keys K.

## Example

```ts
RequiredBy<{ a?: string, b: number } | { a?: string, c?: number }, 'a'>
=> { a: string, b: number } | { a: string, c?: number }
```

## Defined in

node\_modules/viem/\_types/types/utils.d.ts:209
