[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / PartialBy

# Type Alias: PartialBy\<T, K\>

> **PartialBy**\<`T`, `K`\>: [`Omit`](Omit.md)\<`T`, `K`\> & [`ExactPartial`](ExactPartial.md)\<[`Pick`](Pick.md)\<`T`, `K`\>\>

## Type Parameters

• **T**

• **K** *extends* keyof `T`

## Description

Creates a type that is a partial of T, but with the required keys K.

## Example

```ts
PartialBy<{ a: string, b: number }, 'a'>
=> { a?: string, b: number }
```

## Defined in

node\_modules/viem/\_types/types/utils.d.ts:116
