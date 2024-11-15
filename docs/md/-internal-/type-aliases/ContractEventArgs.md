[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractEventArgs

# Type Alias: ContractEventArgs\<abi, eventName\>

> **ContractEventArgs**\<`abi`, `eventName`\>: [`AbiEventParametersToPrimitiveTypes`](AbiEventParametersToPrimitiveTypes.md)\<[`ExtractAbiEvent`](ExtractAbiEvent.md)\<`abi` *extends* [`Abi`](Abi.md) ? `abi` : [`Abi`](Abi.md), `eventName`\>\[`"inputs"`\]\> *extends* infer args ? [`args`] *extends* [`never`] ? readonly `unknown`[] \| [`Record`](Record.md)\<`string`, `unknown`\> : `args` : readonly `unknown`[] \| [`Record`](Record.md)\<`string`, `unknown`\>

## Type Parameters

• **abi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = [`Abi`](Abi.md)

• **eventName** *extends* [`ContractEventName`](ContractEventName.md)\<`abi`\> = [`ContractEventName`](ContractEventName.md)\<`abi`\>

## Defined in

node\_modules/viem/\_types/types/contract.d.ts:13
