[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / GetFilterLogsReturnType

# Type Alias: GetFilterLogsReturnType\<abi, eventName, strict, fromBlock, toBlock, _AbiEvent, _Pending\>

> **GetFilterLogsReturnType**\<`abi`, `eventName`, `strict`, `fromBlock`, `toBlock`, `_AbiEvent`, `_Pending`\>: [`Log`](Log.md)\<`bigint`, `number`, `_Pending`, `_AbiEvent`, `strict`, `abi`, `eventName`\>[]

## Type Parameters

• **abi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[] \| `undefined` = `undefined`

• **eventName** *extends* `string` \| `undefined` = `undefined`

• **strict** *extends* `boolean` \| `undefined` = `undefined`

• **fromBlock** *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag.md) \| `undefined` = `undefined`

• **toBlock** *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag.md) \| `undefined` = `undefined`

• **_AbiEvent** *extends* [`AbiEvent`](AbiEvent.md) \| `undefined` = `abi` *extends* [`Abi`](Abi.md) ? `eventName` *extends* `string` ? [`ExtractAbiEvent`](ExtractAbiEvent.md)\<`abi`, `eventName`\> : `undefined` : `undefined`

• **_Pending** *extends* `boolean` = `fromBlock` *extends* `"pending"` ? `true` : `false` \| `toBlock` *extends* `"pending"` ? `true` : `false`

## Defined in

node\_modules/viem/\_types/actions/public/getFilterLogs.d.ts:15
