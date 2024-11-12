[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / UnionOmit

# Type Alias: UnionOmit\<type, keys\>

> **UnionOmit**\<`type`, `keys`\>: `type` *extends* `any` ? [`Omit`](Omit.md)\<`type`, `keys`\> : `never`

## Type Parameters

• **type**

• **keys** *extends* keyof `type`

## Description

Construct a type with the properties of union type T except for those in type K.

## Example

```ts
type Result = UnionOmit<{ a: string, b: number } | { a: string, b: undefined, c: number }, 'a'>
=> { b: number } | { b: undefined, c: number }
```

## Defined in

node\_modules/viem/\_types/types/utils.d.ts:186
