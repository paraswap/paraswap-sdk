[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionSerialized

# Type Alias: TransactionSerialized\<type, result\>

> **TransactionSerialized**\<`type`, `result`\>: [`IsNever`](IsNever.md)\<`result`\> *extends* `true` ? [`TransactionSerializedGeneric`](TransactionSerializedGeneric.md) : `result`

## Type Parameters

• **type** *extends* [`TransactionType`](TransactionType.md) = [`TransactionType`](TransactionType.md)

• **result** = `type` *extends* `"eip1559"` ? [`TransactionSerializedEIP1559`](TransactionSerializedEIP1559.md) : `never` \| `type` *extends* `"eip2930"` ? [`TransactionSerializedEIP2930`](TransactionSerializedEIP2930.md) : `never` \| `type` *extends* `"eip4844"` ? [`TransactionSerializedEIP4844`](TransactionSerializedEIP4844.md) : `never` \| `type` *extends* `"eip7702"` ? [`TransactionSerializedEIP7702`](TransactionSerializedEIP7702.md) : `never` \| `type` *extends* `"legacy"` ? [`TransactionSerializedLegacy`](TransactionSerializedLegacy.md) : `never`

## Defined in

node\_modules/viem/\_types/types/transaction.d.ts:183
