[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / GetFilterChangesReturnType

# Type Alias: GetFilterChangesReturnType\<filterType, abi, eventName, strict, fromBlock, toBlock, _AbiEvent, _Pending\>

> **GetFilterChangesReturnType**\<`filterType`, `abi`, `eventName`, `strict`, `fromBlock`, `toBlock`, `_AbiEvent`, `_Pending`\>: `filterType` *extends* `"event"` ? [`Log`](Log.md)\<`bigint`, `number`, `_Pending`, `_AbiEvent`, `strict`, `abi`, `eventName`\>[] : [`Hash`](Hash.md)[]

## Type Parameters

• **filterType** *extends* [`FilterType`](FilterType.md) = [`FilterType`](FilterType.md)

• **abi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[] \| `undefined` = `undefined`

• **eventName** *extends* `string` \| `undefined` = `undefined`

• **strict** *extends* `boolean` \| `undefined` = `undefined`

• **fromBlock** *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag.md) \| `undefined` = `undefined`

• **toBlock** *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag.md) \| `undefined` = `undefined`

• **_AbiEvent** *extends* [`AbiEvent`](AbiEvent.md) \| `undefined` = `abi` *extends* [`Abi`](Abi.md) ? `eventName` *extends* `string` ? [`ExtractAbiEvent`](ExtractAbiEvent.md)\<`abi`, `eventName`\> : `undefined` : `undefined`

• **_Pending** *extends* `boolean` = `fromBlock` *extends* `"pending"` ? `true` : `false` \| `toBlock` *extends* `"pending"` ? `true` : `false`

## Defined in

node\_modules/viem/\_types/actions/public/getFilterChanges.d.ts:16
