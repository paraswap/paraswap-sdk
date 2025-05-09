[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ExtractChainFormatterReturnType

# Type Alias: ExtractChainFormatterReturnType\<chain, type, fallback\>

> **ExtractChainFormatterReturnType**\<`chain`, `type`, `fallback`\>: [`IsNarrowable`](IsNarrowable.md)\<`chain`, [`Chain`](Chain.md)\> *extends* `true` ? `chain` *extends* `object` ? `chain`\[`"formatters"`\] *extends* `undefined` ? `fallback` : [`IsNarrowable`](IsNarrowable.md)\<`formatter`, [`ChainFormatter`](ChainFormatter.md)\<`type`\>\> *extends* `true` ? [`ReturnType`](ReturnType.md)\<`formatter`\[`"format"`\]\> : `fallback` : `fallback` : `fallback`

## Type Parameters

• **chain** *extends* [`Chain`](Chain.md) \| `undefined`

• **type** *extends* keyof [`ChainFormatters`](ChainFormatters.md)

• **fallback**

## Defined in

node\_modules/viem/\_types/types/chain.d.ts:128
