[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / GetContractEventsReturnType

# Type Alias: GetContractEventsReturnType\<abi, eventName, strict, fromBlock, toBlock, isPending\>

> **GetContractEventsReturnType**\<`abi`, `eventName`, `strict`, `fromBlock`, `toBlock`, `isPending`\>: [`Log`](Log.md)\<`bigint`, `number`, `isPending`, `undefined`, `strict`, `abi`, `eventName`\>[]

## Type Parameters

• **abi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = readonly `unknown`[]

• **eventName** *extends* [`ContractEventName`](ContractEventName.md)\<`abi`\> \| `undefined` = [`ContractEventName`](ContractEventName.md)\<`abi`\> \| `undefined`

• **strict** *extends* `boolean` \| `undefined` = `undefined`

• **fromBlock** *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag.md) \| `undefined` = `undefined`

• **toBlock** *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag.md) \| `undefined` = `undefined`

• **isPending** *extends* `boolean` = `fromBlock` *extends* `"pending"` ? `true` : `false` \| `toBlock` *extends* `"pending"` ? `true` : `false`

## Defined in

node\_modules/viem/\_types/actions/public/getContractEvents.d.ts:37
