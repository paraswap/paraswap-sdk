[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionLike

# Interface: TransactionLike\<A\>

A **TransactionLike** is an object which is appropriate as a loose
 input for many operations which will populate missing properties of
 a transaction.

## Type Parameters

• **A** = `string`

## Properties

### accessList?

> `optional` **accessList**: `null` \| [`AccessListish`](../type-aliases/AccessListish.md)

The access list for berlin and london transactions.

#### Defined in

node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:66

***

### blobs?

> `optional` **blobs**: `null` \| [`BlobLike`](../type-aliases/BlobLike.md)[]

The blobs (if any) attached to this transaction (see [[link-eip-4844]]).

#### Defined in

node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:78

***

### blobVersionedHashes?

> `optional` **blobVersionedHashes**: `null` \| `string`[]

The versioned hashes (see [[link-eip-4844]]).

#### Defined in

node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:74

***

### chainId?

> `optional` **chainId**: `null` \| [`BigNumberish`](../type-aliases/BigNumberish.md)

The chain ID the transaction is valid on.

#### Defined in

node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:54

***

### data?

> `optional` **data**: `null` \| `string`

The data.

#### Defined in

node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:46

***

### from?

> `optional` **from**: `null` \| `A`

The sender.

#### Defined in

node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:22

***

### gasLimit?

> `optional` **gasLimit**: `null` \| [`BigNumberish`](../type-aliases/BigNumberish.md)

The maximum amount of gas that can be used.

#### Defined in

node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:30

***

### gasPrice?

> `optional` **gasPrice**: `null` \| [`BigNumberish`](../type-aliases/BigNumberish.md)

The gas price for legacy and berlin transactions.

#### Defined in

node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:34

***

### hash?

> `optional` **hash**: `null` \| `string`

The transaction hash.

#### Defined in

node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:58

***

### kzg?

> `optional` **kzg**: `null` \| [`KzgLibrary`](KzgLibrary.md)

An external library for computing the KZG commitments and
 proofs necessary for EIP-4844 transactions (see [[link-eip-4844]]).

 This is generally ``null``, unless you are creating BLOb
 transactions.

#### Defined in

node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:86

***

### maxFeePerBlobGas?

> `optional` **maxFeePerBlobGas**: `null` \| [`BigNumberish`](../type-aliases/BigNumberish.md)

The maximum fee per blob gas (see [[link-eip-4844]]).

#### Defined in

node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:70

***

### maxFeePerGas?

> `optional` **maxFeePerGas**: `null` \| [`BigNumberish`](../type-aliases/BigNumberish.md)

The maximum total fee per gas for london transactions.

#### Defined in

node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:42

***

### maxPriorityFeePerGas?

> `optional` **maxPriorityFeePerGas**: `null` \| [`BigNumberish`](../type-aliases/BigNumberish.md)

The maximum priority fee per gas for london transactions.

#### Defined in

node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:38

***

### nonce?

> `optional` **nonce**: `null` \| `number`

The nonce.

#### Defined in

node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:26

***

### signature?

> `optional` **signature**: `null` \| [`SignatureLike`](../type-aliases/SignatureLike.md)

The signature provided by the sender.

#### Defined in

node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:62

***

### to?

> `optional` **to**: `null` \| `A`

The recipient address or ``null`` for an ``init`` transaction.

#### Defined in

node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:18

***

### type?

> `optional` **type**: `null` \| `number`

The type.

#### Defined in

node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:14

***

### value?

> `optional` **value**: `null` \| [`BigNumberish`](../type-aliases/BigNumberish.md)

The value (in wei) to send.

#### Defined in

node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:50
