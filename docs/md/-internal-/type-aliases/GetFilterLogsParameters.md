[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / GetFilterLogsParameters

# Type Alias: GetFilterLogsParameters\<abi, eventName, strict, fromBlock, toBlock\>

> **GetFilterLogsParameters**\<`abi`, `eventName`, `strict`, `fromBlock`, `toBlock`\>: `object`

## Type Parameters

• **abi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[] \| `undefined` = `undefined`

• **eventName** *extends* `string` \| `undefined` = `undefined`

• **strict** *extends* `boolean` \| `undefined` = `undefined`

• **fromBlock** *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag.md) \| `undefined` = `undefined`

• **toBlock** *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag.md) \| `undefined` = `undefined`

## Type declaration

### filter

> **filter**: [`Filter`](Filter.md)\<`"event"`, `abi`, `eventName`, `any`, `strict`, `fromBlock`, `toBlock`\>

## Defined in

node\_modules/viem/\_types/actions/public/getFilterLogs.d.ts:12
