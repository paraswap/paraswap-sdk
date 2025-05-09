[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / GetInferredLogValues

# Type Alias: GetInferredLogValues\<abiEvent, abi, eventName, strict, _EventNames\>

> **GetInferredLogValues**\<`abiEvent`, `abi`, `eventName`, `strict`, `_EventNames`\>: `abi` *extends* [`Abi`](Abi.md) ? `eventName` *extends* `string` ? `object` : `{ [name in _EventNames]: Object }`\[`_EventNames`\] : `object`

## Type Parameters

• **abiEvent** *extends* [`AbiEvent`](AbiEvent.md) \| `undefined` = `undefined`

• **abi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[] \| `undefined` = `abiEvent` *extends* [`AbiEvent`](AbiEvent.md) ? [`abiEvent`] : `undefined`

• **eventName** *extends* `string` \| `undefined` = `abiEvent` *extends* [`AbiEvent`](AbiEvent.md) ? `abiEvent`\[`"name"`\] : `undefined`

• **strict** *extends* `boolean` \| `undefined` = `undefined`

• **_EventNames** *extends* `string` = `abi` *extends* [`Abi`](Abi.md) ? [`Abi`](Abi.md) *extends* `abi` ? `string` : [`ExtractAbiEventNames`](ExtractAbiEventNames.md)\<`abi`\> : `string`

## Defined in

node\_modules/viem/\_types/types/log.d.ts:29
