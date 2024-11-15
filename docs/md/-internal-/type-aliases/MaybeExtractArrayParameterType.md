[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / MaybeExtractArrayParameterType

# Type Alias: MaybeExtractArrayParameterType\<type\>

> **MaybeExtractArrayParameterType**\<`type`\>: `type` *extends* \`$\{infer head\}\[$\{"" \| \`$\{SolidityFixedArrayRange\}\`\}\]\` ? `type` *extends* \`$\{head\}\[$\{infer size\}\]\` ? [`head`, `size`] : `undefined` : `undefined`

## Type Parameters

• **type**

## Defined in

node\_modules/abitype/dist/types/utils.d.ts:61
