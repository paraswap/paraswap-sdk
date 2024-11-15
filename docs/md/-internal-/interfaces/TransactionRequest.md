[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionRequest

# Interface: TransactionRequest

A **TransactionRequest** is a transactions with potentially various
 properties not defined, or with less strict types for its values.

 This is used to pass to various operations, which will internally
 coerce any types and populate any necessary values.

## Properties

### accessList?

> `optional` **accessList**: `null` \| [`AccessListish`](../type-aliases/AccessListish.md)

The [[link-eip-2930]] access list. Storage slots included in the access
 list are //warmed// by pre-loading them, so their initial cost to
 fetch is guaranteed, but then each additional access is cheaper.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:125

***

### blobs?

> `optional` **blobs**: `null` \| [`BlobLike`](../type-aliases/BlobLike.md)[]

Any blobs to include in the transaction (see [[link-eip-4844]]).

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:158

***

### blobVersionedHashes?

> `optional` **blobVersionedHashes**: `null` \| `string`[]

The blob versioned hashes (see [[link-eip-4844]]).

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:150

***

### blockTag?

> `optional` **blockTag**: [`BlockTag`](../type-aliases/BlockTag.md)

When using ``call`` or ``estimateGas``, this allows a specific
 block to be queried. Many backends do not support this and when
 unsupported errors are silently squelched and ``"latest"`` is used.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:136

***

### chainId?

> `optional` **chainId**: `null` \| [`BigNumberish`](../type-aliases/BigNumberish.md)

The chain ID for the network this transaction is valid on.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:119

***

### customData?

> `optional` **customData**: `any`

A custom object, which can be passed along for network-specific
 values.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:130

***

### data?

> `optional` **data**: `null` \| `string`

The transaction data.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:111

***

### enableCcipRead?

> `optional` **enableCcipRead**: `boolean`

When using ``call``, this enables CCIP-read, which permits the
 provider to be redirected to web-based content during execution,
 which is then further validated by the contract.

 There are potential security implications allowing CCIP-read, as
 it could be used to expose the IP address or user activity during
 the fetch to unexpected parties.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:146

***

### from?

> `optional` **from**: `null` \| [`AddressLike`](../type-aliases/AddressLike.md)

The sender of the transaction.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:83

***

### gasLimit?

> `optional` **gasLimit**: `null` \| [`BigNumberish`](../type-aliases/BigNumberish.md)

The maximum amount of gas to allow this transaction to consume.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:91

***

### gasPrice?

> `optional` **gasPrice**: `null` \| [`BigNumberish`](../type-aliases/BigNumberish.md)

The gas price to use for legacy transactions or transactions on
 legacy networks.

 Most of the time the ``max*FeePerGas`` is preferred.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:98

***

### kzg?

> `optional` **kzg**: `null` \| [`KzgLibrary`](KzgLibrary.md)

An external library for computing the KZG commitments and
 proofs necessary for EIP-4844 transactions (see [[link-eip-4844]]).

 This is generally ``null``, unless you are creating BLOb
 transactions.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:166

***

### maxFeePerBlobGas?

> `optional` **maxFeePerBlobGas**: `null` \| [`BigNumberish`](../type-aliases/BigNumberish.md)

The maximum fee per blob gas (see [[link-eip-4844]]).

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:154

***

### maxFeePerGas?

> `optional` **maxFeePerGas**: `null` \| [`BigNumberish`](../type-aliases/BigNumberish.md)

The [[link-eip-1559]] maximum total fee to pay per gas. The actual
 value used is protocol enforced to be the block's base fee.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:107

***

### maxPriorityFeePerGas?

> `optional` **maxPriorityFeePerGas**: `null` \| [`BigNumberish`](../type-aliases/BigNumberish.md)

The [[link-eip-1559]] maximum priority fee to pay per gas.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:102

***

### nonce?

> `optional` **nonce**: `null` \| `number`

The nonce of the transaction, used to prevent replay attacks.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:87

***

### to?

> `optional` **to**: `null` \| [`AddressLike`](../type-aliases/AddressLike.md)

The target of the transaction.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:79

***

### type?

> `optional` **type**: `null` \| `number`

The transaction type.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:75

***

### value?

> `optional` **value**: `null` \| [`BigNumberish`](../type-aliases/BigNumberish.md)

The transaction value (in wei).

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:115
