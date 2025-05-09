[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / RequiredBy

# Type Alias: RequiredBy\<T, K\>

> **RequiredBy**\<`T`, `K`\>: [`Omit`](Omit.md)\<`T`, `K`\> & [`ExactRequired`](ExactRequired.md)\<[`Pick`](Pick.md)\<`T`, `K`\>\>

## Type Parameters

• **T**

• **K** *extends* keyof `T`

## Description

Creates a type that is T with the required keys K.

## Example

```ts
RequiredBy<{ a?: string, b: number }, 'a'>
=> { a: string, b: number }
```

## Defined in

node\_modules/viem/\_types/types/utils.d.ts:139
