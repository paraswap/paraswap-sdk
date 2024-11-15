[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionEIP1559

# Type Alias: TransactionEIP1559\<quantity, index, isPending, type\>

> **TransactionEIP1559**\<`quantity`, `index`, `isPending`, `type`\>: [`TransactionBase`](TransactionBase.md)\<`quantity`, `index`, `isPending`\> & `object` & [`FeeValuesEIP1559`](FeeValuesEIP1559.md)\<`quantity`\>

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

• **type** = `"eip1559"`

## Defined in

node\_modules/viem/\_types/types/transaction.d.ts:101
