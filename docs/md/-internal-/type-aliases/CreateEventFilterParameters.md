[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / CreateEventFilterParameters

# Type Alias: CreateEventFilterParameters\<abiEvent, abiEvents, strict, fromBlock, toBlock, _eventName, _args\>

> **CreateEventFilterParameters**\<`abiEvent`, `abiEvents`, `strict`, `fromBlock`, `toBlock`, `_eventName`, `_args`\>: `object` & [`MaybeExtractEventArgsFromAbi`](MaybeExtractEventArgsFromAbi.md)\<`abiEvents`, `_eventName`\> *extends* infer eventFilterArgs ? `object` \| `object` \| `object` \| `object` : `object`

## Type declaration

### address?

> `optional` **address**: [`Address`](Address.md) \| [`Address`](Address.md)[]

### fromBlock?

> `optional` **fromBlock**: `fromBlock` \| [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag.md)

### toBlock?

> `optional` **toBlock**: `toBlock` \| [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag.md)

## Type Parameters

• **abiEvent** *extends* [`AbiEvent`](AbiEvent.md) \| `undefined` = `undefined`

• **abiEvents** *extends* readonly [`AbiEvent`](AbiEvent.md)[] \| readonly `unknown`[] \| `undefined` = `abiEvent` *extends* [`AbiEvent`](AbiEvent.md) ? [`abiEvent`] : `undefined`

• **strict** *extends* `boolean` \| `undefined` = `undefined`

• **fromBlock** *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag.md) \| `undefined` = `undefined`

• **toBlock** *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag.md) \| `undefined` = `undefined`

• **_eventName** *extends* `string` \| `undefined` = [`MaybeAbiEventName`](MaybeAbiEventName.md)\<`abiEvent`\>

• **_args** *extends* [`MaybeExtractEventArgsFromAbi`](MaybeExtractEventArgsFromAbi.md)\<`abiEvents`, `_eventName`\> \| `undefined` = `undefined`

## Defined in

node\_modules/viem/\_types/actions/public/createEventFilter.d.ts:13
