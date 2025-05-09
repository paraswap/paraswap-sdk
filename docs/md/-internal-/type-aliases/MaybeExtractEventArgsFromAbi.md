[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / MaybeExtractEventArgsFromAbi

# Type Alias: MaybeExtractEventArgsFromAbi\<abi, eventName\>

> **MaybeExtractEventArgsFromAbi**\<`abi`, `eventName`\>: `abi` *extends* [`Abi`](Abi.md) \| readonly `unknown`[] ? `eventName` *extends* `string` ? [`GetEventArgs`](GetEventArgs.md)\<`abi`, `eventName`\> : `undefined` : `undefined`

## Type Parameters

• **abi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[] \| `undefined`

• **eventName** *extends* `string` \| `undefined`

## Defined in

node\_modules/viem/\_types/types/contract.d.ts:71
