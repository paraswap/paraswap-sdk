[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / GetEventArgs

# Type Alias: GetEventArgs\<abi, eventName, config, abiEvent, args, FailedToParseArgs\>

> **GetEventArgs**\<`abi`, `eventName`, `config`, `abiEvent`, `args`, `FailedToParseArgs`\>: `true` *extends* `FailedToParseArgs` ? readonly `unknown`[] \| [`Record`](Record.md)\<`string`, `unknown`\> : `args`

## Type Parameters

• **abi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[]

• **eventName** *extends* `string`

• **config** *extends* [`EventParameterOptions`](EventParameterOptions.md) = [`DefaultEventParameterOptions`](DefaultEventParameterOptions.md)

• **abiEvent** *extends* [`AbiEvent`](AbiEvent.md) & `object` = `abi` *extends* [`Abi`](Abi.md) ? [`ExtractAbiEvent`](ExtractAbiEvent.md)\<`abi`, `eventName`\> : [`AbiEvent`](AbiEvent.md) & `object`

• **args** = [`AbiEventParametersToPrimitiveTypes`](AbiEventParametersToPrimitiveTypes.md)\<`abiEvent`\[`"inputs"`\], `config`\>

• **FailedToParseArgs** = [`args`] *extends* [`never`] ? `true` : `false` \| readonly `unknown`[] *extends* `args` ? `true` : `false`

## Defined in

node\_modules/viem/\_types/types/contract.d.ts:72
