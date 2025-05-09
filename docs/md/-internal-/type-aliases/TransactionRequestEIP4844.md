[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionRequestEIP4844

# Type Alias: TransactionRequestEIP4844\<quantity, index, type\>

> **TransactionRequestEIP4844**\<`quantity`, `index`, `type`\>: [`RequiredBy`](RequiredBy.md)\<[`TransactionRequestBase`](TransactionRequestBase.md)\<`quantity`, `index`, `type`\>, `"to"`\> & [`RequiredBy`](RequiredBy.md)\<[`ExactPartial`](ExactPartial.md)\<[`FeeValuesEIP4844`](FeeValuesEIP4844.md)\<`quantity`\>\>, `"maxFeePerBlobGas"`\> & `object`

## Type declaration

### accessList?

> `optional` **accessList**: [`AccessList`](AccessList.md)

### blobs

> **blobs**: readonly [`Hex`](Hex.md)[] \| readonly [`ByteArray`](ByteArray.md)[]

The blobs associated with this transaction.

### blobVersionedHashes?

> `optional` **blobVersionedHashes**: readonly [`Hex`](Hex.md)[]

### kzg?

> `optional` **kzg**: [`Kzg`](Kzg.md)

### sidecars?

> `optional` **sidecars**: readonly [`BlobSidecar`](BlobSidecar.md)\<[`Hex`](Hex.md)\>[]

## Type Parameters

• **quantity** = `bigint`

• **index** = `number`

• **type** = `"eip4844"`

## Defined in

node\_modules/viem/\_types/types/transaction.d.ts:154
