[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Narrow

# Type Alias: Narrow\<type\>

> **Narrow**\<`type`\>: `unknown` *extends* `type` ? `unknown` : `never` \| `type` *extends* `Function` ? `type` : `never` \| `type` *extends* `bigint` \| `boolean` \| `number` \| `string` ? `type` : `never` \| `type` *extends* [] ? [] : `never` \| `{ [K in keyof type]: Narrow<type[K]> }`

Infers embedded primitive type of any type

## Type Parameters

• **type**

## Param

Type to infer

## Returns

Embedded type of [type](Narrow.md)

## Example

```ts
type Result = Narrow<['foo', 'bar', 1]>
```

## Defined in

node\_modules/abitype/dist/types/narrow.d.ts:10
