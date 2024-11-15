[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionSerializableGeneric

# Type Alias: TransactionSerializableGeneric\<quantity, index\>

> **TransactionSerializableGeneric**\<`quantity`, `index`\>: [`TransactionSerializableBase`](TransactionSerializableBase.md)\<`quantity`, `index`\> & `object`

## Type declaration

### accessList?

> `optional` **accessList**: [`AccessList`](AccessList.md)

### authorizationList?

> `optional` **authorizationList**: [`AuthorizationList`](AuthorizationList.md)\<`index`, `boolean`\>

### blobs?

> `optional` **blobs**: readonly [`Hex`](Hex.md)[] \| readonly [`ByteArray`](ByteArray.md)[]

### blobVersionedHashes?

> `optional` **blobVersionedHashes**: readonly [`Hex`](Hex.md)[]

### chainId?

> `optional` **chainId**: `number`

### gasPrice?

> `optional` **gasPrice**: `quantity`

### maxFeePerBlobGas?

> `optional` **maxFeePerBlobGas**: `quantity`

### maxFeePerGas?

> `optional` **maxFeePerGas**: `quantity`

### maxPriorityFeePerGas?

> `optional` **maxPriorityFeePerGas**: `quantity`

### sidecars?

> `optional` **sidecars**: readonly [`BlobSidecar`](BlobSidecar.md)\<[`Hex`](Hex.md)\>[] \| `false`

### type?

> `optional` **type**: `string`

## Type Parameters

• **quantity** = `bigint`

• **index** = `number`

## Defined in

node\_modules/viem/\_types/types/transaction.d.ts:223
