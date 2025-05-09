[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractTransactionReceipt

# Class: ContractTransactionReceipt

A **ContractTransactionReceipt** includes the parsed logs from a
 [[TransactionReceipt]].

## Extends

- [`TransactionReceipt`](TransactionReceipt.md)

## Constructors

### new ContractTransactionReceipt()

> **new ContractTransactionReceipt**(`iface`, `provider`, `tx`): [`ContractTransactionReceipt`](ContractTransactionReceipt.md)

@_ignore:

#### Parameters

• **iface**: [`Interface`](Interface.md)

• **provider**: [`Provider`](../interfaces/Provider.md)

• **tx**: [`TransactionReceipt`](TransactionReceipt.md)

#### Returns

[`ContractTransactionReceipt`](ContractTransactionReceipt.md)

#### Overrides

[`TransactionReceipt`](TransactionReceipt.md).[`constructor`](TransactionReceipt.md#constructors)

#### Defined in

node\_modules/ethers/lib.commonjs/contract/wrappers.d.ts:59

## Properties

### blobGasPrice

> `readonly` **blobGasPrice**: `null` \| `bigint`

The price paid per BLOB in gas. See [[link-eip-4844]].

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`blobGasPrice`](TransactionReceipt.md#blobgasprice)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:614

***

### blobGasUsed

> `readonly` **blobGasUsed**: `null` \| `bigint`

The gas used for BLObs. See [[link-eip-4844]].

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`blobGasUsed`](TransactionReceipt.md#blobgasused)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:594

***

### blockHash

> `readonly` **blockHash**: `string`

The block hash of the [[Block]] this transaction was included in.

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`blockHash`](TransactionReceipt.md#blockhash)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:572

***

### blockNumber

> `readonly` **blockNumber**: `number`

The block number of the [[Block]] this transaction was included in.

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`blockNumber`](TransactionReceipt.md#blocknumber)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:576

***

### contractAddress

> `readonly` **contractAddress**: `null` \| `string`

The address of the contract if the transaction was directly
 responsible for deploying one.

 This is non-null **only** if the ``to`` is empty and the ``data``
 was successfully executed as initcode.

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`contractAddress`](TransactionReceipt.md#contractaddress)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:560

***

### cumulativeGasUsed

> `readonly` **cumulativeGasUsed**: `bigint`

The amount of gas used by all transactions within the block for this
 and all transactions with a lower ``index``.

 This is generally not useful for developers but can be used to
 validate certain aspects of execution.

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`cumulativeGasUsed`](TransactionReceipt.md#cumulativegasused)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:602

***

### from

> `readonly` **from**: `string`

The sender of the transaction.

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`from`](TransactionReceipt.md#from)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:552

***

### gasPrice

> `readonly` **gasPrice**: `bigint`

The actual gas price used during execution.

 Due to the complexity of [[link-eip-1559]] this value can only
 be caluclated after the transaction has been mined, snce the base
 fee is protocol-enforced.

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`gasPrice`](TransactionReceipt.md#gasprice)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:610

***

### gasUsed

> `readonly` **gasUsed**: `bigint`

The actual amount of gas used by this transaction.

 When creating a transaction, the amount of gas that will be used can
 only be approximated, but the sender must pay the gas fee for the
 entire gas limit. After the transaction, the difference is refunded.

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`gasUsed`](TransactionReceipt.md#gasused)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:590

***

### hash

> `readonly` **hash**: `string`

The transaction hash.

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`hash`](TransactionReceipt.md#hash)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:564

***

### index

> `readonly` **index**: `number`

The index of this transaction within the block transactions.

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`index`](TransactionReceipt.md#index)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:568

***

### logsBloom

> `readonly` **logsBloom**: `string`

The bloom filter bytes that represent all logs that occurred within
 this transaction. This is generally not useful for most developers,
 but can be used to validate the included logs.

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`logsBloom`](TransactionReceipt.md#logsbloom)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:582

***

### provider

> `readonly` **provider**: [`Provider`](../interfaces/Provider.md)

The provider connected to the log used to fetch additional details
 if necessary.

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`provider`](TransactionReceipt.md#provider)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:544

***

### root

> `readonly` **root**: `null` \| `string`

The root hash of this transaction.

 This is no present and was only included in pre-byzantium blocks, but
 could be used to validate certain parts of the receipt.

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`root`](TransactionReceipt.md#root)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:633

***

### status

> `readonly` **status**: `null` \| `number`

The status of this transaction, indicating success (i.e. ``1``) or
 a revert (i.e. ``0``).

 This is available in post-byzantium blocks, but some backends may
 backfill this value.

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`status`](TransactionReceipt.md#status)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:626

***

### to

> `readonly` **to**: `null` \| `string`

The address the transaction was sent to.

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`to`](TransactionReceipt.md#to)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:548

***

### type

> `readonly` **type**: `number`

The [[link-eip-2718]] transaction type.

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`type`](TransactionReceipt.md#type)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:618

## Accessors

### fee

#### Get Signature

> **get** **fee**(): `bigint`

The total fee for this transaction, in wei.

##### Returns

`bigint`

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`fee`](TransactionReceipt.md#fee)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:654

***

### length

#### Get Signature

> **get** **length**(): `number`

@_ignore:

##### Returns

`number`

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`length`](TransactionReceipt.md#length)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:649

***

### logs

#### Get Signature

> **get** **logs**(): ([`Log`](Log.md) \| [`EventLog`](EventLog.md))[]

The parsed logs for any [[Log]] which has a matching event in the
 Contract ABI.

##### Returns

([`Log`](Log.md) \| [`EventLog`](EventLog.md))[]

The logs emitted during the execution of this transaction.

#### Overrides

[`TransactionReceipt`](TransactionReceipt.md).[`logs`](TransactionReceipt.md#logs)

#### Defined in

node\_modules/ethers/lib.commonjs/contract/wrappers.d.ts:64

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`Iterator`](../interfaces/Iterator.md)\<[`Log`](Log.md), `any`, `any`\>

#### Returns

[`Iterator`](../interfaces/Iterator.md)\<[`Log`](Log.md), `any`, `any`\>

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`[iterator]`](TransactionReceipt.md#%5Biterator%5D)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:650

***

### confirmations()

> **confirmations**(): `Promise`\<`number`\>

Resolves to the number of confirmations this transaction has.

#### Returns

`Promise`\<`number`\>

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`confirmations`](TransactionReceipt.md#confirmations)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:673

***

### getBlock()

> **getBlock**(): `Promise`\<[`Block`](Block.md)\>

Resolves to the block this transaction occurred in.

#### Returns

`Promise`\<[`Block`](Block.md)\>

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`getBlock`](TransactionReceipt.md#getblock)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:658

***

### getResult()

> **getResult**(): `Promise`\<`string`\>

Resolves to the return value of the execution of this transaction.

 Support for this feature is limited, as it requires an archive node
 with the ``debug_`` or ``trace_`` API enabled.

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`getResult`](TransactionReceipt.md#getresult)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:669

***

### getTransaction()

> **getTransaction**(): `Promise`\<[`TransactionResponse`](TransactionResponse.md)\>

Resolves to the transaction this transaction occurred in.

#### Returns

`Promise`\<[`TransactionResponse`](TransactionResponse.md)\>

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`getTransaction`](TransactionReceipt.md#gettransaction)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:662

***

### removedEvent()

> **removedEvent**(): [`OrphanFilter`](../type-aliases/OrphanFilter.md)

@_ignore:

#### Returns

[`OrphanFilter`](../type-aliases/OrphanFilter.md)

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`removedEvent`](TransactionReceipt.md#removedevent)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:677

***

### reorderedEvent()

> **reorderedEvent**(`other`?): [`OrphanFilter`](../type-aliases/OrphanFilter.md)

@_ignore:

#### Parameters

• **other?**: [`TransactionResponse`](TransactionResponse.md)

#### Returns

[`OrphanFilter`](../type-aliases/OrphanFilter.md)

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`reorderedEvent`](TransactionReceipt.md#reorderedevent)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:681

***

### toJSON()

> **toJSON**(): `any`

Returns a JSON-compatible representation.

#### Returns

`any`

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`toJSON`](TransactionReceipt.md#tojson)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:645
