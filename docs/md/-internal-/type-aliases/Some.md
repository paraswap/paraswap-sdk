[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Some

# Type Alias: Some\<array, value\>

> **Some**\<`array`, `value`\>: `array` *extends* readonly [`value`, `...unknown[]`] ? `true` : `array` *extends* readonly [`unknown`, `...(infer rest)`] ? [`Some`](Some.md)\<`rest`, `value`\> : `false`

## Type Parameters

• **array** *extends* readonly `unknown`[]

• **value**

## Description

Returns truthy if `array` contains `value`.

## Example

```ts
Some<[1, 2, 3], 2>
=> true
```

## Defined in

node\_modules/viem/\_types/types/utils.d.ts:147
