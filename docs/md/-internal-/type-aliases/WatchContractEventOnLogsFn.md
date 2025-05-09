[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WatchContractEventOnLogsFn

# Type Alias: WatchContractEventOnLogsFn()\<abi, eventName, strict\>

> **WatchContractEventOnLogsFn**\<`abi`, `eventName`, `strict`\>: (`logs`) => `void`

## Type Parameters

• **abi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = [`Abi`](Abi.md)

• **eventName** *extends* [`ContractEventName`](ContractEventName.md)\<`abi`\> = [`ContractEventName`](ContractEventName.md)\<`abi`\>

• **strict** *extends* `boolean` \| `undefined` = `undefined`

## Parameters

• **logs**: [`WatchContractEventOnLogsParameter`](WatchContractEventOnLogsParameter.md)\<`abi`, `eventName`, `strict`\>

## Returns

`void`

## Defined in

node\_modules/viem/\_types/actions/public/watchContractEvent.d.ts:13
