[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / CreateEventFilterReturnType

# Type Alias: CreateEventFilterReturnType\<abiEvent, abiEvents, strict, fromBlock, toBlock, _eventName, _args\>

> **CreateEventFilterReturnType**\<`abiEvent`, `abiEvents`, `strict`, `fromBlock`, `toBlock`, `_eventName`, `_args`\>: [`Prettify`](Prettify.md)\<[`Filter`](Filter.md)\<`"event"`, `abiEvents`, `_eventName`, `_args`, `strict`, `fromBlock`, `toBlock`\>\>

## Type Parameters

• **abiEvent** *extends* [`AbiEvent`](AbiEvent.md) \| `undefined` = `undefined`

• **abiEvents** *extends* readonly [`AbiEvent`](AbiEvent.md)[] \| readonly `unknown`[] \| `undefined` = `abiEvent` *extends* [`AbiEvent`](AbiEvent.md) ? [`abiEvent`] : `undefined`

• **strict** *extends* `boolean` \| `undefined` = `undefined`

• **fromBlock** *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag.md) \| `undefined` = `undefined`

• **toBlock** *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag.md) \| `undefined` = `undefined`

• **_eventName** *extends* `string` \| `undefined` = [`MaybeAbiEventName`](MaybeAbiEventName.md)\<`abiEvent`\>

• **_args** *extends* [`MaybeExtractEventArgsFromAbi`](MaybeExtractEventArgsFromAbi.md)\<`abiEvents`, `_eventName`\> \| `undefined` = `undefined`

## Defined in

node\_modules/viem/\_types/actions/public/createEventFilter.d.ts:55
