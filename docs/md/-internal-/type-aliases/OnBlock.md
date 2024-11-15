[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / OnBlock

# Type Alias: OnBlock()\<chain, includeTransactions, blockTag\>

> **OnBlock**\<`chain`, `includeTransactions`, `blockTag`\>: (`block`, `prevBlock`) => `void`

## Type Parameters

• **chain** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md)

• **includeTransactions** *extends* `boolean` = `false`

• **blockTag** *extends* [`BlockTag`](BlockTag.md) = `"latest"`

## Parameters

• **block**: [`OnBlockParameter`](OnBlockParameter.md)\<`chain`, `includeTransactions`, `blockTag`\>

• **prevBlock**: [`OnBlockParameter`](OnBlockParameter.md)\<`chain`, `includeTransactions`, `blockTag`\> \| `undefined`

## Returns

`void`

## Defined in

node\_modules/viem/\_types/actions/public/watchBlocks.d.ts:11
