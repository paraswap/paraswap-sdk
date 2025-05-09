[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionReceipt

# Class: TransactionReceipt

A **TransactionReceipt** includes additional information about a
 transaction that is only available after it has been mined.

## Extended by

- [`ContractTransactionReceipt`](ContractTransactionReceipt.md)

## Implements

- [`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md)
- [`Iterable`](../interfaces/Iterable.md)\<[`Log`](Log.md)\>

## Constructors

### new TransactionReceipt()

> **new TransactionReceipt**(`tx`, `provider`): [`TransactionReceipt`](TransactionReceipt.md)

@_ignore:

#### Parameters

• **tx**: [`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md)

• **provider**: [`Provider`](../interfaces/Provider.md)

#### Returns

[`TransactionReceipt`](TransactionReceipt.md)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:637

## Properties

### blobGasPrice

> `readonly` **blobGasPrice**: `null` \| `bigint`

The price paid per BLOB in gas. See [[link-eip-4844]].

#### Implementation of

[`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md).[`blobGasPrice`](../interfaces/TransactionReceiptParams.md#blobgasprice)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:614

***

### blobGasUsed

> `readonly` **blobGasUsed**: `null` \| `bigint`

The gas used for BLObs. See [[link-eip-4844]].

#### Implementation of

[`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md).[`blobGasUsed`](../interfaces/TransactionReceiptParams.md#blobgasused)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:594

***

### blockHash

> `readonly` **blockHash**: `string`

The block hash of the [[Block]] this transaction was included in.

#### Implementation of

[`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md).[`blockHash`](../interfaces/TransactionReceiptParams.md#blockhash)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:572

***

### blockNumber

> `readonly` **blockNumber**: `number`

The block number of the [[Block]] this transaction was included in.

#### Implementation of

[`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md).[`blockNumber`](../interfaces/TransactionReceiptParams.md#blocknumber)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:576

***

### contractAddress

> `readonly` **contractAddress**: `null` \| `string`

The address of the contract if the transaction was directly
 responsible for deploying one.

 This is non-null **only** if the ``to`` is empty and the ``data``
 was successfully executed as initcode.

#### Implementation of

[`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md).[`contractAddress`](../interfaces/TransactionReceiptParams.md#contractaddress)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:560

***

### cumulativeGasUsed

> `readonly` **cumulativeGasUsed**: `bigint`

The amount of gas used by all transactions within the block for this
 and all transactions with a lower ``index``.

 This is generally not useful for developers but can be used to
 validate certain aspects of execution.

#### Implementation of

[`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md).[`cumulativeGasUsed`](../interfaces/TransactionReceiptParams.md#cumulativegasused)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:602

***

### from

> `readonly` **from**: `string`

The sender of the transaction.

#### Implementation of

[`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md).[`from`](../interfaces/TransactionReceiptParams.md#from)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:552

***

### gasPrice

> `readonly` **gasPrice**: `bigint`

The actual gas price used during execution.

 Due to the complexity of [[link-eip-1559]] this value can only
 be caluclated after the transaction has been mined, snce the base
 fee is protocol-enforced.

#### Implementation of

[`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md).[`gasPrice`](../interfaces/TransactionReceiptParams.md#gasprice)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:610

***

### gasUsed

> `readonly` **gasUsed**: `bigint`

The actual amount of gas used by this transaction.

 When creating a transaction, the amount of gas that will be used can
 only be approximated, but the sender must pay the gas fee for the
 entire gas limit. After the transaction, the difference is refunded.

#### Implementation of

[`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md).[`gasUsed`](../interfaces/TransactionReceiptParams.md#gasused)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:590

***

### hash

> `readonly` **hash**: `string`

The transaction hash.

#### Implementation of

[`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md).[`hash`](../interfaces/TransactionReceiptParams.md#hash)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:564

***

### index

> `readonly` **index**: `number`

The index of this transaction within the block transactions.

#### Implementation of

[`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md).[`index`](../interfaces/TransactionReceiptParams.md#index)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:568

***

### logsBloom

> `readonly` **logsBloom**: `string`

The bloom filter bytes that represent all logs that occurred within
 this transaction. This is generally not useful for most developers,
 but can be used to validate the included logs.

#### Implementation of

[`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md).[`logsBloom`](../interfaces/TransactionReceiptParams.md#logsbloom)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:582

***

### provider

> `readonly` **provider**: [`Provider`](../interfaces/Provider.md)

The provider connected to the log used to fetch additional details
 if necessary.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:544

***

### root

> `readonly` **root**: `null` \| `string`

The root hash of this transaction.

 This is no present and was only included in pre-byzantium blocks, but
 could be used to validate certain parts of the receipt.

#### Implementation of

[`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md).[`root`](../interfaces/TransactionReceiptParams.md#root)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:633

***

### status

> `readonly` **status**: `null` \| `number`

The status of this transaction, indicating success (i.e. ``1``) or
 a revert (i.e. ``0``).

 This is available in post-byzantium blocks, but some backends may
 backfill this value.

#### Implementation of

[`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md).[`status`](../interfaces/TransactionReceiptParams.md#status)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:626

***

### to

> `readonly` **to**: `null` \| `string`

The address the transaction was sent to.

#### Implementation of

[`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md).[`to`](../interfaces/TransactionReceiptParams.md#to)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:548

***

### type

> `readonly` **type**: `number`

The [[link-eip-2718]] transaction type.

#### Implementation of

[`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md).[`type`](../interfaces/TransactionReceiptParams.md#type)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:618

## Accessors

### fee

#### Get Signature

> **get** **fee**(): `bigint`

The total fee for this transaction, in wei.

##### Returns

`bigint`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:654

***

### length

#### Get Signature

> **get** **length**(): `number`

@_ignore:

##### Returns

`number`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:649

***

### logs

#### Get Signature

> **get** **logs**(): readonly [`Log`](Log.md)[]

The logs for this transaction.

##### Returns

readonly [`Log`](Log.md)[]

The logs emitted during the execution of this transaction.

#### Implementation of

[`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md).[`logs`](../interfaces/TransactionReceiptParams.md#logs)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:641

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`Iterator`](../interfaces/Iterator.md)\<[`Log`](Log.md), `any`, `any`\>

#### Returns

[`Iterator`](../interfaces/Iterator.md)\<[`Log`](Log.md), `any`, `any`\>

#### Implementation of

[`Iterable`](../interfaces/Iterable.md).[`[iterator]`](../interfaces/Iterable.md#%5Biterator%5D)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:650

***

### confirmations()

> **confirmations**(): `Promise`\<`number`\>

Resolves to the number of confirmations this transaction has.

#### Returns

`Promise`\<`number`\>

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:673

***

### getBlock()

> **getBlock**(): `Promise`\<[`Block`](Block.md)\>

Resolves to the block this transaction occurred in.

#### Returns

`Promise`\<[`Block`](Block.md)\>

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

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:669

***

### getTransaction()

> **getTransaction**(): `Promise`\<[`TransactionResponse`](TransactionResponse.md)\>

Resolves to the transaction this transaction occurred in.

#### Returns

`Promise`\<[`TransactionResponse`](TransactionResponse.md)\>

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:662

***

### removedEvent()

> **removedEvent**(): [`OrphanFilter`](../type-aliases/OrphanFilter.md)

@_ignore:

#### Returns

[`OrphanFilter`](../type-aliases/OrphanFilter.md)

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

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:681

***

### toJSON()

> **toJSON**(): `any`

Returns a JSON-compatible representation.

#### Returns

`any`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:645
