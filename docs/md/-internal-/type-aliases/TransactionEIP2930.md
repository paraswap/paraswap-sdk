[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionEIP2930

# Type Alias: TransactionEIP2930\<quantity, index, isPending, type\>

> **TransactionEIP2930**\<`quantity`, `index`, `isPending`, `type`\>: [`TransactionBase`](TransactionBase.md)\<`quantity`, `index`, `isPending`\> & `object` & [`FeeValuesLegacy`](FeeValuesLegacy.md)\<`quantity`\>

## Type declaration

### accessList

> **accessList**: [`AccessList`](AccessList.md)

EIP-2930 Access List.

### authorizationList?

> `optional` **authorizationList**: `undefined`

### blobVersionedHashes?

> `optional` **blobVersionedHashes**: `undefined`

### chainId

> **chainId**: `index`

Chain ID that this transaction is valid on.

### type

> **type**: `type`

## Type Parameters

• **quantity** = `bigint`

• **index** = `number`

• **isPending** *extends* `boolean` = `boolean`

• **type** = `"eip2930"`

## Defined in

node\_modules/viem/\_types/types/transaction.d.ts:92
