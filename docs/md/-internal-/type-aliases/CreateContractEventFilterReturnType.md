[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / CreateContractEventFilterReturnType

# Type Alias: CreateContractEventFilterReturnType\<abi, eventName, args, strict, fromBlock, toBlock\>

> **CreateContractEventFilterReturnType**\<`abi`, `eventName`, `args`, `strict`, `fromBlock`, `toBlock`\>: [`Filter`](Filter.md)\<`"event"`, `abi`, `eventName`, `args`, `strict`, `fromBlock`, `toBlock`\>

## Type Parameters

• **abi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = [`Abi`](Abi.md)

• **eventName** *extends* [`ContractEventName`](ContractEventName.md)\<`abi`\> \| `undefined` = `undefined`

• **args** *extends* [`MaybeExtractEventArgsFromAbi`](MaybeExtractEventArgsFromAbi.md)\<`abi`, `eventName`\> \| `undefined` = `undefined`

• **strict** *extends* `boolean` \| `undefined` = `undefined`

• **fromBlock** *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag.md) \| `undefined` = `undefined`

• **toBlock** *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag.md) \| `undefined` = `undefined`

## Defined in

node\_modules/viem/\_types/actions/public/createContractEventFilter.d.ts:30
