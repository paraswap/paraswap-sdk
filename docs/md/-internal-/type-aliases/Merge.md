[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / Merge

# Type Alias: Merge\<object1, object2\>

> **Merge**\<`object1`, `object2`\>: [`Omit`](Omit.md)\<`object1`, keyof `object2`\> & `object2`

Merges two object types into new type

## Type Parameters

• **object1**

Object to merge into

• **object2**

Object to merge and override keys from [object1](Merge.md)

## Returns

New object type with keys from [object1](Merge.md) and [object2](Merge.md). If a key exists in both [object1](Merge.md) and [object2](Merge.md), the key from [object2](Merge.md) will be used.

## Example

```ts
type Result = Merge<{ foo: string }, { foo: number; bar: string }>
//   ^? type Result = { foo: number; bar: string }
```

## Defined in

node\_modules/abitype/dist/types/types.d.ts:86
