[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / FormattedBlock

# Type Alias: FormattedBlock\<chain, includeTransactions, blockTag, _FormatterReturnType, _ExcludedPendingDependencies, _Formatted, _Transactions\>

> **FormattedBlock**\<`chain`, `includeTransactions`, `blockTag`, `_FormatterReturnType`, `_ExcludedPendingDependencies`, `_Formatted`, `_Transactions`\>: [`Omit`](Omit.md)\<`_Formatted`, `"transactions"`\> & `object`

## Type declaration

### transactions

> **transactions**: `_Transactions`

## Type Parameters

• **chain** *extends* [`Chain`](Chain.md) \| `undefined` = `undefined`

• **includeTransactions** *extends* `boolean` = `boolean`

• **blockTag** *extends* [`BlockTag`](BlockTag.md) = [`BlockTag`](BlockTag.md)

• **_FormatterReturnType** = [`ExtractChainFormatterReturnType`](ExtractChainFormatterReturnType.md)\<`chain`, `"block"`, [`Block`](Block.md)\<`bigint`, `includeTransactions`\>\>

• **_ExcludedPendingDependencies** *extends* `string` = [`BlockPendingDependencies`](BlockPendingDependencies.md) & [`ExtractChainFormatterExclude`](ExtractChainFormatterExclude.md)\<`chain`, `"block"`\>

• **_Formatted** = [`Omit`](Omit.md)\<`_FormatterReturnType`, [`BlockPendingDependencies`](BlockPendingDependencies.md)\> & `{ [_key in _ExcludedPendingDependencies]: never }` & [`Pick`](Pick.md)\<[`Block`](Block.md)\<`bigint`, `includeTransactions`, `blockTag`\>, [`BlockPendingDependencies`](BlockPendingDependencies.md)\>

• **_Transactions** = `includeTransactions` *extends* `true` ? [`Prettify`](Prettify.md)\<[`FormattedTransaction`](FormattedTransaction.md)\<`chain`, `blockTag`\>\>[] : [`Hash`](Hash.md)[]

## Defined in

node\_modules/viem/\_types/utils/formatters/block.d.ts:11
