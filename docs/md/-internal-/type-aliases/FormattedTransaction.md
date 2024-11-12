[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / FormattedTransaction

# Type Alias: FormattedTransaction\<chain, blockTag, _FormatterReturnType, _ExcludedPendingDependencies\>

> **FormattedTransaction**\<`chain`, `blockTag`, `_FormatterReturnType`, `_ExcludedPendingDependencies`\>: [`UnionLooseOmit`](UnionLooseOmit.md)\<`_FormatterReturnType`, [`TransactionPendingDependencies`](TransactionPendingDependencies.md)\> & `{ [_K in _ExcludedPendingDependencies]: never }` & [`Pick`](Pick.md)\<[`Transaction`](Transaction.md)\<`bigint`, `number`, `blockTag` *extends* `"pending"` ? `true` : `false`\>, [`TransactionPendingDependencies`](TransactionPendingDependencies.md)\>

## Type Parameters

• **chain** *extends* [`Chain`](Chain.md) \| `undefined` = `undefined`

• **blockTag** *extends* [`BlockTag`](BlockTag.md) = [`BlockTag`](BlockTag.md)

• **_FormatterReturnType** = [`ExtractChainFormatterReturnType`](ExtractChainFormatterReturnType.md)\<`chain`, `"transaction"`, [`Transaction`](Transaction.md)\>

• **_ExcludedPendingDependencies** *extends* `string` = [`TransactionPendingDependencies`](TransactionPendingDependencies.md) & [`ExtractChainFormatterExclude`](ExtractChainFormatterExclude.md)\<`chain`, `"transaction"`\>

## Defined in

node\_modules/viem/\_types/utils/formatters/transaction.d.ts:10
