[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / Topics

# Type Alias: Topics\<head, base\>

> **Topics**\<`head`, `base`\>: `head` *extends* readonly [infer \_Head, `...(infer Tail extends AbiEvent["inputs"])`] ? `_Head` *extends* `object` ? [[`Hex`](Hex.md), `...Topics<Tail>`] : [`Topics`](Topics.md)\<`Tail`\> : `base`

## Type Parameters

• **head** *extends* [`AbiEvent`](AbiEvent.md)\[`"inputs"`\]

• **base** = [[`Hex`](Hex.md)]

## Defined in

node\_modules/viem/\_types/types/log.d.ts:22
