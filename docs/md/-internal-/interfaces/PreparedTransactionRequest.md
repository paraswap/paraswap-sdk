[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / PreparedTransactionRequest

# Interface: PreparedTransactionRequest

A **PreparedTransactionRequest** is identical to a [[TransactionRequest]]
 except all the property types are strictly enforced.

## Extended by

- [`ContractTransaction`](ContractTransaction.md)

## Properties

### accessList?

> `optional` **accessList**: [`AccessList`](../type-aliases/AccessList.md)

The [[link-eip-2930]] access list. Storage slots included in the access
 list are //warmed// by pre-loading them, so their initial cost to
 fetch is guaranteed, but then each additional access is cheaper.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:226

***

### blockTag?

> `optional` **blockTag**: [`BlockTag`](../type-aliases/BlockTag.md)

When using ``call`` or ``estimateGas``, this allows a specific
 block to be queried. Many backends do not support this and when
 unsupported errors are silently squelched and ``"latest"`` is used.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:237

***

### chainId?

> `optional` **chainId**: `bigint`

The chain ID for the network this transaction is valid on.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:220

***

### customData?

> `optional` **customData**: `any`

A custom object, which can be passed along for network-specific
 values.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:231

***

### data?

> `optional` **data**: `string`

The transaction data.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:212

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

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:247

***

### from?

> `optional` **from**: [`AddressLike`](../type-aliases/AddressLike.md)

The sender of the transaction.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:184

***

### gasLimit?

> `optional` **gasLimit**: `bigint`

The maximum amount of gas to allow this transaction to consime.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:192

***

### gasPrice?

> `optional` **gasPrice**: `bigint`

The gas price to use for legacy transactions or transactions on
 legacy networks.

 Most of the time the ``max*FeePerGas`` is preferred.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:199

***

### maxFeePerGas?

> `optional` **maxFeePerGas**: `bigint`

The [[link-eip-1559]] maximum total fee to pay per gas. The actual
 value used is protocol enforced to be the block's base fee.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:208

***

### maxPriorityFeePerGas?

> `optional` **maxPriorityFeePerGas**: `bigint`

The [[link-eip-1559]] maximum priority fee to pay per gas.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:203

***

### nonce?

> `optional` **nonce**: `number`

The nonce of the transaction, used to prevent replay attacks.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:188

***

### to?

> `optional` **to**: [`AddressLike`](../type-aliases/AddressLike.md)

The target of the transaction.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:180

***

### type?

> `optional` **type**: `number`

The transaction type.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:176

***

### value?

> `optional` **value**: `bigint`

The transaction value (in wei).

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:216
