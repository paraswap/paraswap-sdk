[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / ExtractChainFormatterParameters

# Type Alias: ExtractChainFormatterParameters\<chain, type, fallback\>

> **ExtractChainFormatterParameters**\<`chain`, `type`, `fallback`\>: `chain` *extends* `object` ? `formatters`\[`type`\] *extends* [`ChainFormatter`](ChainFormatter.md) ? [`Parameters`](Parameters.md)\<`formatters`\[`type`\]\[`"format"`\]\>\[`0`\] : `fallback` : `fallback`

## Type Parameters

• **chain** *extends* [`Chain`](Chain.md) \| `undefined`

• **type** *extends* keyof [`ChainFormatters`](ChainFormatters.md)

• **fallback**

## Defined in

node\_modules/viem/\_types/types/chain.d.ts:125
