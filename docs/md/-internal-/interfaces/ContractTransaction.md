[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractTransaction

# Interface: ContractTransaction

When populating a transaction this type is returned.

## Extends

- [`PreparedTransactionRequest`](PreparedTransactionRequest.md)

## Properties

### accessList?

> `optional` **accessList**: [`AccessList`](../type-aliases/AccessList.md)

The [[link-eip-2930]] access list. Storage slots included in the access
 list are //warmed// by pre-loading them, so their initial cost to
 fetch is guaranteed, but then each additional access is cheaper.

#### Inherited from

[`PreparedTransactionRequest`](PreparedTransactionRequest.md).[`accessList`](PreparedTransactionRequest.md#accesslist)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:226

***

### blockTag?

> `optional` **blockTag**: [`BlockTag`](../type-aliases/BlockTag.md)

When using ``call`` or ``estimateGas``, this allows a specific
 block to be queried. Many backends do not support this and when
 unsupported errors are silently squelched and ``"latest"`` is used.

#### Inherited from

[`PreparedTransactionRequest`](PreparedTransactionRequest.md).[`blockTag`](PreparedTransactionRequest.md#blocktag)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:237

***

### chainId?

> `optional` **chainId**: `bigint`

The chain ID for the network this transaction is valid on.

#### Inherited from

[`PreparedTransactionRequest`](PreparedTransactionRequest.md).[`chainId`](PreparedTransactionRequest.md#chainid)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:220

***

### customData?

> `optional` **customData**: `any`

A custom object, which can be passed along for network-specific
 values.

#### Inherited from

[`PreparedTransactionRequest`](PreparedTransactionRequest.md).[`customData`](PreparedTransactionRequest.md#customdata)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:231

***

### data

> **data**: `string`

The transaction data.

#### Overrides

[`PreparedTransactionRequest`](PreparedTransactionRequest.md).[`data`](PreparedTransactionRequest.md#data)

#### Defined in

node\_modules/ethers/lib.commonjs/contract/types.d.ts:49

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

[`PreparedTransactionRequest`](PreparedTransactionRequest.md).[`enableCcipRead`](PreparedTransactionRequest.md#enableccipread)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:247

***

### from?

> `optional` **from**: `string`

The from address, if any.

#### Overrides

[`PreparedTransactionRequest`](PreparedTransactionRequest.md).[`from`](PreparedTransactionRequest.md#from)

#### Defined in

node\_modules/ethers/lib.commonjs/contract/types.d.ts:53

***

### gasLimit?

> `optional` **gasLimit**: `bigint`

The maximum amount of gas to allow this transaction to consime.

#### Inherited from

[`PreparedTransactionRequest`](PreparedTransactionRequest.md).[`gasLimit`](PreparedTransactionRequest.md#gaslimit)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:192

***

### gasPrice?

> `optional` **gasPrice**: `bigint`

The gas price to use for legacy transactions or transactions on
 legacy networks.

 Most of the time the ``max*FeePerGas`` is preferred.

#### Inherited from

[`PreparedTransactionRequest`](PreparedTransactionRequest.md).[`gasPrice`](PreparedTransactionRequest.md#gasprice)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:199

***

### maxFeePerGas?

> `optional` **maxFeePerGas**: `bigint`

The [[link-eip-1559]] maximum total fee to pay per gas. The actual
 value used is protocol enforced to be the block's base fee.

#### Inherited from

[`PreparedTransactionRequest`](PreparedTransactionRequest.md).[`maxFeePerGas`](PreparedTransactionRequest.md#maxfeepergas)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:208

***

### maxPriorityFeePerGas?

> `optional` **maxPriorityFeePerGas**: `bigint`

The [[link-eip-1559]] maximum priority fee to pay per gas.

#### Inherited from

[`PreparedTransactionRequest`](PreparedTransactionRequest.md).[`maxPriorityFeePerGas`](PreparedTransactionRequest.md#maxpriorityfeepergas)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:203

***

### nonce?

> `optional` **nonce**: `number`

The nonce of the transaction, used to prevent replay attacks.

#### Inherited from

[`PreparedTransactionRequest`](PreparedTransactionRequest.md).[`nonce`](PreparedTransactionRequest.md#nonce)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:188

***

### to

> **to**: `string`

The target address.

#### Overrides

[`PreparedTransactionRequest`](PreparedTransactionRequest.md).[`to`](PreparedTransactionRequest.md#to)

#### Defined in

node\_modules/ethers/lib.commonjs/contract/types.d.ts:45

***

### type?

> `optional` **type**: `number`

The transaction type.

#### Inherited from

[`PreparedTransactionRequest`](PreparedTransactionRequest.md).[`type`](PreparedTransactionRequest.md#type)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:176

***

### value?

> `optional` **value**: `bigint`

The transaction value (in wei).

#### Inherited from

[`PreparedTransactionRequest`](PreparedTransactionRequest.md).[`value`](PreparedTransactionRequest.md#value)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:216
