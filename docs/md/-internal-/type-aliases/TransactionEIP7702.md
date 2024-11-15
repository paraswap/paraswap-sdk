[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionEIP7702

# Type Alias: TransactionEIP7702\<quantity, index, isPending, type\>

> **TransactionEIP7702**\<`quantity`, `index`, `isPending`, `type`\>: [`TransactionBase`](TransactionBase.md)\<`quantity`, `index`, `isPending`\> & `object` & [`FeeValuesEIP1559`](FeeValuesEIP1559.md)\<`quantity`\>

## Type declaration

### accessList

> **accessList**: [`AccessList`](AccessList.md)

EIP-2930 Access List.

### authorizationList

> **authorizationList**: [`SignedAuthorizationList`](SignedAuthorizationList.md)

Authorization list for the transaction.

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

• **type** = `"eip7702"`

## Defined in

node\_modules/viem/\_types/types/transaction.d.ts:120
