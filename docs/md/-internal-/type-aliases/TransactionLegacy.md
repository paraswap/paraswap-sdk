[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionLegacy

# Type Alias: TransactionLegacy\<quantity, index, isPending, type\>

> **TransactionLegacy**\<`quantity`, `index`, `isPending`, `type`\>: [`Omit`](Omit.md)\<[`TransactionBase`](TransactionBase.md)\<`quantity`, `index`, `isPending`\>, `"yParity"`\> & `object` & [`FeeValuesLegacy`](FeeValuesLegacy.md)\<`quantity`\>

## Type declaration

### accessList?

> `optional` **accessList**: `undefined`

EIP-2930 Access List.

### authorizationList?

> `optional` **authorizationList**: `undefined`

### blobVersionedHashes?

> `optional` **blobVersionedHashes**: `undefined`

### chainId?

> `optional` **chainId**: `index`

Chain ID that this transaction is valid on.

### type

> **type**: `type`

### yParity?

> `optional` **yParity**: `undefined`

## Type Parameters

• **quantity** = `bigint`

• **index** = `number`

• **isPending** *extends* `boolean` = `boolean`

• **type** = `"legacy"`

## Defined in

node\_modules/viem/\_types/types/transaction.d.ts:82
