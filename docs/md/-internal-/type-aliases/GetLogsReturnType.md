[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / GetLogsReturnType

# Type Alias: GetLogsReturnType\<abiEvent, abiEvents, strict, fromBlock, toBlock, _eventName, _pending\>

> **GetLogsReturnType**\<`abiEvent`, `abiEvents`, `strict`, `fromBlock`, `toBlock`, `_eventName`, `_pending`\>: [`Log`](Log.md)\<`bigint`, `number`, `_pending`, `abiEvent`, `strict`, `abiEvents`, `_eventName`\>[]

## Type Parameters

• **abiEvent** *extends* [`AbiEvent`](AbiEvent.md) \| `undefined` = `undefined`

• **abiEvents** *extends* readonly [`AbiEvent`](AbiEvent.md)[] \| readonly `unknown`[] \| `undefined` = `abiEvent` *extends* [`AbiEvent`](AbiEvent.md) ? [`abiEvent`] : `undefined`

• **strict** *extends* `boolean` \| `undefined` = `undefined`

• **fromBlock** *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag.md) \| `undefined` = `undefined`

• **toBlock** *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag.md) \| `undefined` = `undefined`

• **_eventName** *extends* `string` \| `undefined` = [`MaybeAbiEventName`](MaybeAbiEventName.md)\<`abiEvent`\>

• **_pending** *extends* `boolean` = `fromBlock` *extends* `"pending"` ? `true` : `false` \| `toBlock` *extends* `"pending"` ? `true` : `false`

## Defined in

node\_modules/viem/\_types/actions/public/getLogs.d.ts:53
