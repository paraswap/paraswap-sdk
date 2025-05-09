[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionRequestGeneric

# Type Alias: TransactionRequestGeneric\<quantity, index\>

> **TransactionRequestGeneric**\<`quantity`, `index`\>: [`TransactionRequestBase`](TransactionRequestBase.md)\<`quantity`, `index`\> & `object`

## Type declaration

### accessList?

> `optional` **accessList**: [`AccessList`](AccessList.md)

### blobs?

> `optional` **blobs**: readonly [`Hex`](Hex.md)[] \| readonly [`ByteArray`](ByteArray.md)[]

### blobVersionedHashes?

> `optional` **blobVersionedHashes**: readonly [`Hex`](Hex.md)[]

### gasPrice?

> `optional` **gasPrice**: `quantity`

### maxFeePerBlobGas?

> `optional` **maxFeePerBlobGas**: `quantity`

### maxFeePerGas?

> `optional` **maxFeePerGas**: `quantity`

### maxPriorityFeePerGas?

> `optional` **maxPriorityFeePerGas**: `quantity`

### type?

> `optional` **type**: `string`

## Type Parameters

• **quantity** = `bigint`

• **index** = `number`

## Defined in

node\_modules/viem/\_types/types/transaction.d.ts:167
