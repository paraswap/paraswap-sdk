[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / MaybeRequired

# Type Alias: MaybeRequired\<T, required\>

> **MaybeRequired**\<`T`, `required`\>: `required` *extends* `true` ? [`ExactRequired`](ExactRequired.md)\<`T`\> : `T`

## Type Parameters

• **T**

• **required** *extends* `boolean`

## Description

Makes attributes on the type T required if required is true.

## Example

```ts
MaybeRequired<{ a: string, b?: number }, true>
=> { a: string, b: number }

MaybeRequired<{ a: string, b?: number }, false>
=> { a: string, b?: number }
```

## Defined in

node\_modules/viem/\_types/types/utils.d.ts:84
