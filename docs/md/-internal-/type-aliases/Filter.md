[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Filter

# Type Alias: Filter\<T, P, Acc\>

> **Filter**\<`T`, `P`, `Acc`\>: `T` *extends* readonly [infer F, `...(infer Rest extends readonly unknown[])`] ? [`F`] *extends* [`P`] ? [`Filter`](Filter.md)\<`Rest`, `P`, [`...Acc`, `F`]\> : [`Filter`](Filter.md)\<`Rest`, `P`, `Acc`\> : readonly [`...Acc`]

Filters out all members of [T](Filter.md) that are not [P](Filter.md)

## Type Parameters

• **T** *extends* readonly `unknown`[]

Items to filter

• **P**

Type to filter out

• **Acc** *extends* readonly `unknown`[] = []

## Returns

Filtered items

## Example

```ts
type Result = Filter<['a', 'b', 'c'], 'b'>
//   ^? type Result = ['a', 'c']
```

## Defined in

node\_modules/viem/\_types/types/utils.d.ts:27
