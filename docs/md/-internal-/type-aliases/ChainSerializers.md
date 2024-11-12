[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / ChainSerializers

# Type Alias: ChainSerializers\<formatters, transaction\>

> **ChainSerializers**\<`formatters`, `transaction`\>: `object`

## Type Parameters

• **formatters** *extends* [`ChainFormatters`](ChainFormatters.md) \| `undefined` = `undefined`

• **transaction** *extends* [`TransactionSerializableGeneric`](TransactionSerializableGeneric.md) = `formatters` *extends* [`ChainFormatters`](ChainFormatters.md) ? `formatters`\[`"transactionRequest"`\] *extends* [`ChainFormatter`](ChainFormatter.md) ? [`TransactionSerializableGeneric`](TransactionSerializableGeneric.md) & [`Parameters`](Parameters.md)\<`formatters`\[`"transactionRequest"`\]\[`"format"`\]\>\[`0`\] : [`TransactionSerializable`](TransactionSerializable.md) : [`TransactionSerializable`](TransactionSerializable.md)

## Type declaration

### transaction?

> `optional` **transaction**: [`SerializeTransactionFn`](SerializeTransactionFn.md)\<`transaction`, [`TransactionSerializedGeneric`](TransactionSerializedGeneric.md)\>

Modifies how Transactions are serialized.

## Defined in

node\_modules/viem/\_types/types/chain.d.ts:116
