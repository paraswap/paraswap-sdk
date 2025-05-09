[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Overrides

# Interface: Overrides

The overrides for a contract transaction.

## Extends

- [`Omit`](../type-aliases/Omit.md)\<[`TransactionRequest`](TransactionRequest.md), `"to"` \| `"data"`\>

## Properties

### accessList?

> `optional` **accessList**: `null` \| [`AccessListish`](../type-aliases/AccessListish.md)

The [[link-eip-2930]] access list. Storage slots included in the access
 list are //warmed// by pre-loading them, so their initial cost to
 fetch is guaranteed, but then each additional access is cheaper.

#### Inherited from

`Omit.accessList`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:125

***

### blobs?

> `optional` **blobs**: `null` \| [`BlobLike`](../type-aliases/BlobLike.md)[]

Any blobs to include in the transaction (see [[link-eip-4844]]).

#### Inherited from

`Omit.blobs`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:158

***

### blobVersionedHashes?

> `optional` **blobVersionedHashes**: `null` \| `string`[]

The blob versioned hashes (see [[link-eip-4844]]).

#### Inherited from

`Omit.blobVersionedHashes`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:150

***

### blockTag?

> `optional` **blockTag**: [`BlockTag`](../type-aliases/BlockTag.md)

When using ``call`` or ``estimateGas``, this allows a specific
 block to be queried. Many backends do not support this and when
 unsupported errors are silently squelched and ``"latest"`` is used.

#### Inherited from

`Omit.blockTag`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:136

***

### chainId?

> `optional` **chainId**: `null` \| [`BigNumberish`](../type-aliases/BigNumberish.md)

The chain ID for the network this transaction is valid on.

#### Inherited from

`Omit.chainId`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:119

***

### customData?

> `optional` **customData**: `any`

A custom object, which can be passed along for network-specific
 values.

#### Inherited from

`Omit.customData`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:130

***

### enableCcipRead?

> `optional` **enableCcipRead**: `boolean`

When using ``call``, this enables CCIP-read, which permits the
 provider to be redirected to web-based content during execution,
 which is then further validated by the contract.

 There are potential security implications allowing CCIP-read, as
 it could be used to expose the IP address or user activity during
 the fetch to unexpected parties.

#### Inherited from

`Omit.enableCcipRead`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:146

***

### from?

> `optional` **from**: `null` \| [`AddressLike`](../type-aliases/AddressLike.md)

The sender of the transaction.

#### Inherited from

`Omit.from`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:83

***

### gasLimit?

> `optional` **gasLimit**: `null` \| [`BigNumberish`](../type-aliases/BigNumberish.md)

The maximum amount of gas to allow this transaction to consume.

#### Inherited from

`Omit.gasLimit`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:91

***

### gasPrice?

> `optional` **gasPrice**: `null` \| [`BigNumberish`](../type-aliases/BigNumberish.md)

The gas price to use for legacy transactions or transactions on
 legacy networks.

 Most of the time the ``max*FeePerGas`` is preferred.

#### Inherited from

`Omit.gasPrice`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:98

***

### kzg?

> `optional` **kzg**: `null` \| [`KzgLibrary`](KzgLibrary.md)

An external library for computing the KZG commitments and
 proofs necessary for EIP-4844 transactions (see [[link-eip-4844]]).

 This is generally ``null``, unless you are creating BLOb
 transactions.

#### Inherited from

`Omit.kzg`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:166

***

### maxFeePerBlobGas?

> `optional` **maxFeePerBlobGas**: `null` \| [`BigNumberish`](../type-aliases/BigNumberish.md)

The maximum fee per blob gas (see [[link-eip-4844]]).

#### Inherited from

`Omit.maxFeePerBlobGas`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:154

***

### maxFeePerGas?

> `optional` **maxFeePerGas**: `null` \| [`BigNumberish`](../type-aliases/BigNumberish.md)

The [[link-eip-1559]] maximum total fee to pay per gas. The actual
 value used is protocol enforced to be the block's base fee.

#### Inherited from

`Omit.maxFeePerGas`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:107

***

### maxPriorityFeePerGas?

> `optional` **maxPriorityFeePerGas**: `null` \| [`BigNumberish`](../type-aliases/BigNumberish.md)

The [[link-eip-1559]] maximum priority fee to pay per gas.

#### Inherited from

`Omit.maxPriorityFeePerGas`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:102

***

### nonce?

> `optional` **nonce**: `null` \| `number`

The nonce of the transaction, used to prevent replay attacks.

#### Inherited from

`Omit.nonce`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:87

***

### type?

> `optional` **type**: `null` \| `number`

The transaction type.

#### Inherited from

`Omit.type`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:75

***

### value?

> `optional` **value**: `null` \| [`BigNumberish`](../type-aliases/BigNumberish.md)

The transaction value (in wei).

#### Inherited from

`Omit.value`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:115
