[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / GetTopics

# Type Alias: GetTopics\<abiEvent, abi, eventName, _AbiEvent, _Args, _FailedToParseArgs\>

> **GetTopics**\<`abiEvent`, `abi`, `eventName`, `_AbiEvent`, `_Args`, `_FailedToParseArgs`\>: `true` *extends* `_FailedToParseArgs` ? [[`Hex`](Hex.md), `...Hex[]`] \| [] : `abiEvent` *extends* [`AbiEvent`](AbiEvent.md) ? [`Topics`](Topics.md)\<`abiEvent`\[`"inputs"`\]\> : `_AbiEvent` *extends* [`AbiEvent`](AbiEvent.md) ? [`Topics`](Topics.md)\<`_AbiEvent`\[`"inputs"`\]\> : [[`Hex`](Hex.md), `...Hex[]`] \| []

## Type Parameters

• **abiEvent** *extends* [`AbiEvent`](AbiEvent.md) \| `undefined` = `undefined`

• **abi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = [`abiEvent`]

• **eventName** *extends* `string` \| `undefined` = `abiEvent` *extends* [`AbiEvent`](AbiEvent.md) ? `abiEvent`\[`"name"`\] : `undefined`

• **_AbiEvent** *extends* [`AbiEvent`](AbiEvent.md) \| `undefined` = `abi` *extends* [`Abi`](Abi.md) ? `eventName` *extends* `string` ? [`ExtractAbiEvent`](ExtractAbiEvent.md)\<`abi`, `eventName`\> : `undefined` : `undefined`

• **_Args** = `_AbiEvent` *extends* [`AbiEvent`](AbiEvent.md) ? [`AbiEventParametersToPrimitiveTypes`](AbiEventParametersToPrimitiveTypes.md)\<`_AbiEvent`\[`"inputs"`\]\> : `never`

• **_FailedToParseArgs** = [`_Args`] *extends* [`never`] ? `true` : `false` \| readonly `unknown`[] *extends* `_Args` ? `true` : `false`

## Defined in

node\_modules/viem/\_types/types/log.d.ts:28
