[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / serializeTransaction

# Function: serializeTransaction()

> **serializeTransaction**\<`transaction`, `_transactionType`\>(`transaction`, `signature`?): [`SerializedTransactionReturnType`](../type-aliases/SerializedTransactionReturnType.md)\<`transaction`, `_transactionType`\>

## Type Parameters

• **transaction** *extends* [`TransactionSerializable`](../type-aliases/TransactionSerializable.md)

• **_transactionType** *extends* [`TransactionType`](../type-aliases/TransactionType.md) = [`GetTransactionType`](../type-aliases/GetTransactionType.md)\<`transaction`\>

## Parameters

• **transaction**: `transaction`

• **signature?**: [`Signature`](../type-aliases/Signature.md)

## Returns

[`SerializedTransactionReturnType`](../type-aliases/SerializedTransactionReturnType.md)\<`transaction`, `_transactionType`\>

## Defined in

node\_modules/viem/\_types/utils/transaction/serializeTransaction.d.ts:20
