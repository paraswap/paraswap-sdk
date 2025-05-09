[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WatchContractEventOnLogsParameter

# Type Alias: WatchContractEventOnLogsParameter\<abi, eventName, strict\>

> **WatchContractEventOnLogsParameter**\<`abi`, `eventName`, `strict`\>: `abi` *extends* [`Abi`](Abi.md) ? [`Abi`](Abi.md) *extends* `abi` ? [`Log`](Log.md)[] : [`Log`](Log.md)\<`bigint`, `number`, `false`, [`ExtractAbiEvent`](ExtractAbiEvent.md)\<`abi`, `eventName`\>, `strict`\>[] : [`Log`](Log.md)[]

## Type Parameters

• **abi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = [`Abi`](Abi.md)

• **eventName** *extends* [`ContractEventName`](ContractEventName.md)\<`abi`\> = [`ContractEventName`](ContractEventName.md)\<`abi`\>

• **strict** *extends* `boolean` \| `undefined` = `undefined`

## Defined in

node\_modules/viem/\_types/actions/public/watchContractEvent.d.ts:12
