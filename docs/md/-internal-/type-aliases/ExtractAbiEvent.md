[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / ExtractAbiEvent

# Type Alias: ExtractAbiEvent\<abi, eventName\>

> **ExtractAbiEvent**\<`abi`, `eventName`\>: [`Extract`](Extract.md)\<[`ExtractAbiEvents`](ExtractAbiEvents.md)\<`abi`\>, `object`\>

Extracts [AbiEvent](AbiEvent.md) with name from [Abi](Abi.md).

## Type Parameters

• **abi** *extends* [`Abi`](Abi.md)

[Abi](Abi.md) to extract [AbiEvent](AbiEvent.md) from

• **eventName** *extends* [`ExtractAbiEventNames`](ExtractAbiEventNames.md)\<`abi`\>

String name of event to extract from [Abi](Abi.md)

## Returns

Matching [AbiEvent](AbiEvent.md)

## Defined in

node\_modules/abitype/dist/types/utils.d.ts:149
