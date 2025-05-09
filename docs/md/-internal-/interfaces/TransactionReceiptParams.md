[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionReceiptParams

# Interface: TransactionReceiptParams

a **TransactionReceiptParams** encodes the minimal required properties
 for a formatted transaction receipt.

## Properties

### blobGasPrice?

> `optional` **blobGasPrice**: `null` \| `bigint`

The actual BLOb gas price that was charged. See [[link-eip-4844]].

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:206

***

### blobGasUsed?

> `optional` **blobGasUsed**: `null` \| `bigint`

The amount of BLOb gas used. See [[link-eip-4844]].

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:193

***

### blockHash

> **blockHash**: `string`

The block hash of the block that included this transaction.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:172

***

### blockNumber

> **blockNumber**: `number`

The block number of the block that included this transaction.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:176

***

### contractAddress

> **contractAddress**: `null` \| `string`

If the transaction was directly deploying a contract, the [[to]]
 will be null, the ``data`` will be initcode and if successful, this
 will be the address of the contract deployed.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:160

***

### cumulativeGasUsed

> **cumulativeGasUsed**: `bigint`

The total amount of gas consumed during the entire block up to
 and including this transaction.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:198

***

### effectiveGasPrice?

> `optional` **effectiveGasPrice**: `null` \| `bigint`

The actual gas price per gas charged for this transaction.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:210

***

### from

> **from**: `string`

The sender of the transaction.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:154

***

### gasPrice?

> `optional` **gasPrice**: `null` \| `bigint`

The actual gas price per gas charged for this transaction.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:202

***

### gasUsed

> **gasUsed**: `bigint`

The amount of gas consumed executing this transaciton.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:189

***

### hash

> **hash**: `string`

The transaction hash.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:164

***

### index

> **index**: `number`

The transaction index.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:168

***

### logs

> **logs**: readonly [`LogParams`](LogParams.md)[]

The logs emitted during the execution of this transaction.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:185

***

### logsBloom

> **logsBloom**: `string`

The bloom filter for the logs emitted during execution of this
 transaction.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:181

***

### root

> **root**: `null` \| `string`

The root of this transaction in a pre-bazatium block. In
 post-byzantium blocks this is null.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:226

***

### status

> **status**: `null` \| `number`

The status of the transaction execution. If ``1`` then the
 the transaction returned success, if ``0`` then the transaction
 was reverted. For pre-byzantium blocks, this is usually null, but
 some nodes may have backfilled this data.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:221

***

### to

> **to**: `null` \| `string`

The target of the transaction. If null, the transaction was trying
 to deploy a transaction with the ``data`` as the initi=code.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:150

***

### type

> **type**: `number`

The [[link-eip-2718]] envelope type.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:214
