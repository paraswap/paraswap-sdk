[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / GetFilterChangesParameters

# Type Alias: GetFilterChangesParameters\<filterType, abi, eventName, strict, fromBlock, toBlock\>

> **GetFilterChangesParameters**\<`filterType`, `abi`, `eventName`, `strict`, `fromBlock`, `toBlock`\>: `object`

## Type Parameters

• **filterType** *extends* [`FilterType`](FilterType.md) = [`FilterType`](FilterType.md)

• **abi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[] \| `undefined` = `undefined`

• **eventName** *extends* `string` \| `undefined` = `undefined`

• **strict** *extends* `boolean` \| `undefined` = `undefined`

• **fromBlock** *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag.md) \| `undefined` = `undefined`

• **toBlock** *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag.md) \| `undefined` = `undefined`

## Type declaration

### filter

> **filter**: [`Filter`](Filter.md)\<`filterType`, `abi`, `eventName`, `any`, `strict`, `fromBlock`, `toBlock`\>

## Defined in

node\_modules/viem/\_types/actions/public/getFilterChanges.d.ts:13
