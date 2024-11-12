[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionResponseParams

# Interface: TransactionResponseParams

a **TransactionResponseParams** encodes the minimal required properties
 for a formatted transaction response.

## Properties

### accessList

> **accessList**: `null` \| [`AccessList`](../type-aliases/AccessList.md)

The transaction access list.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:308

***

### blobVersionedHashes?

> `optional` **blobVersionedHashes**: `null` \| `string`[]

The [[link-eip-4844]] BLOb versioned hashes.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:312

***

### blockHash

> **blockHash**: `null` \| `string`

The block hash of the block that included this transaction.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:240

***

### blockNumber

> **blockNumber**: `null` \| `number`

The block number of the block that included this transaction.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:236

***

### chainId

> **chainId**: `bigint`

The chain ID this transaction is valid on.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:300

***

### data

> **data**: `string`

The transaction data.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:292

***

### from

> **from**: `string`

The sender of the transaction.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:261

***

### gasLimit

> **gasLimit**: `bigint`

The maximum amount of gas this transaction is authorized to consume.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:269

***

### gasPrice

> **gasPrice**: `bigint`

For legacy transactions, this is the gas price per gas to pay.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:273

***

### hash

> **hash**: `string`

The transaction hash.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:244

***

### index

> **index**: `number`

The transaction index.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:248

***

### maxFeePerBlobGas?

> `optional` **maxFeePerBlobGas**: `null` \| `bigint`

For [[link-eip-4844]] transactions, this is the maximum fee that
 will be paid per BLOb.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:288

***

### maxFeePerGas

> **maxFeePerGas**: `null` \| `bigint`

For [[link-eip-1559]] transactions, this is the maximum fee that
 will be paid.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:283

***

### maxPriorityFeePerGas

> **maxPriorityFeePerGas**: `null` \| `bigint`

For [[link-eip-1559]] transactions, this is the maximum priority
 fee to allow a producer to claim.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:278

***

### nonce

> **nonce**: `number`

The nonce of the transaction, used for replay protection.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:265

***

### signature

> **signature**: [`Signature`](../classes/Signature.md)

The signature of the transaction.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:304

***

### to

> **to**: `null` \| `string`

The target of the transaction. If ``null``, the ``data`` is initcode
 and this transaction is a deployment transaction.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:257

***

### type

> **type**: `number`

The [[link-eip-2718]] transaction type.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:252

***

### value

> **value**: `bigint`

The transaction value (in wei).

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:296
