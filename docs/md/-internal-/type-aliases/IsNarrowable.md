[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / IsNarrowable

# Type Alias: IsNarrowable\<T, U\>

> **IsNarrowable**\<`T`, `U`\>: [`IsNever`](IsNever.md)\<`T` *extends* `U` ? `true` : `false` & `U` *extends* `T` ? `false` : `true`\> *extends* `true` ? `false` : `true`

## Type Parameters

• **T**

Type to check

• **U**

Type to against

## Description

Checks if [T](IsNarrowable.md) can be narrowed further than [U](IsNarrowable.md)

## Example

```ts
type Result = IsNarrowable<'foo', string>
//   ^? true
```

## Defined in

node\_modules/viem/\_types/types/utils.d.ts:36
