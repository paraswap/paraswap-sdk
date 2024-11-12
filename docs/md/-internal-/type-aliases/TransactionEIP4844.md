[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionEIP4844

# Type Alias: TransactionEIP4844\<quantity, index, isPending, type\>

> **TransactionEIP4844**\<`quantity`, `index`, `isPending`, `type`\>: [`TransactionBase`](TransactionBase.md)\<`quantity`, `index`, `isPending`\> & `object` & [`FeeValuesEIP4844`](FeeValuesEIP4844.md)\<`quantity`\>

## Type declaration

### accessList

> **accessList**: [`AccessList`](AccessList.md)

EIP-2930 Access List.

### authorizationList?

> `optional` **authorizationList**: `undefined`

### blobVersionedHashes

> **blobVersionedHashes**: readonly [`Hex`](Hex.md)[]

List of versioned blob hashes associated with the transaction's blobs.

### chainId

> **chainId**: `index`

Chain ID that this transaction is valid on.

### type

> **type**: `type`

## Type Parameters

• **quantity** = `bigint`

• **index** = `number`

• **isPending** *extends* `boolean` = `boolean`

• **type** = `"eip4844"`

## Defined in

node\_modules/viem/\_types/types/transaction.d.ts:110
