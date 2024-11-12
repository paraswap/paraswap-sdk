[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / ExtractChainFormatterExclude

# Type Alias: ExtractChainFormatterExclude\<chain, type\>

> **ExtractChainFormatterExclude**\<`chain`, `type`\>: `chain` *extends* `object` ? `formatters`\[`type`\] *extends* `object` ? [`Extract`](Extract.md)\<`exclude`, readonly `string`[]\>\[`number`\] : `""` : `""`

## Type Parameters

• **chain** *extends* [`Chain`](Chain.md) \| `undefined`

• **type** *extends* keyof [`ChainFormatters`](ChainFormatters.md)

## Defined in

node\_modules/viem/\_types/types/chain.d.ts:120
