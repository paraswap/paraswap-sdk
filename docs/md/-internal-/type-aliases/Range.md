[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Range

# Type Alias: Range\<start, stop, result, padding, current\>

> **Range**\<`start`, `stop`, `result`, `padding`, `current`\>: `current` *extends* `stop` ? `current` *extends* `start` ? [`current`] : `result` *extends* [] ? [] : [`...result`, `current`] : `current` *extends* `start` ? [`Range`](Range.md)\<`start`, `stop`, [`current`], `padding`\> : `result` *extends* [] ? [`Range`](Range.md)\<`start`, `stop`, [], [`...padding`, `0`]\> : [`Range`](Range.md)\<`start`, `stop`, [`...result`, `current`], `padding`\>

Creates range between two positive numbers using [tail recursion](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html#tail-recursion-elimination-on-conditional-types).

## Type Parameters

• **start** *extends* `number`

Number to start range

• **stop** *extends* `number`

Number to end range

• **result** *extends* `number`[] = []

• **padding** *extends* `0`[] = []

• **current** *extends* `number` = [`...padding`, `...result`]\[`"length"`\] & `number`

## Returns

Array with inclusive range from [start](Range.md) to [stop](Range.md)

## Example

```ts
type Result = Range<1, 3>
//   ^? type Result = [1, 2, 3]
```

## Defined in

node\_modules/abitype/dist/types/types.d.ts:122
