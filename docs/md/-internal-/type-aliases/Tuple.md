[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / Tuple

# Type Alias: Tuple\<type, size\>

> **Tuple**\<`type`, `size`\>: `size` *extends* `size` ? `number` *extends* `size` ? `type`[] : [`_TupleOf`](TupleOf.md)\<`type`, `size`, []\> : `never`

Create tuple of [type](Tuple.md) type with [size](Tuple.md) size

## Type Parameters

• **type**

• **size** *extends* `number`

## Param

Type of tuple

## Param

Size of tuple

## Returns

Tuple of [type](Tuple.md) type with [size](Tuple.md) size

## Example

```ts
type Result = Tuple<string, 2>
//   ^? type Result = [string, string]
```

## Defined in

node\_modules/abitype/dist/types/types.d.ts:148
