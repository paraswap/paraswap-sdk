[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / Log

# Class: Log

A **Log** in Ethereum represents an event that has been included in a
 transaction using the ``LOG*`` opcodes, which are most commonly used by
 Solidity's emit for announcing events.

## Extended by

- [`EventLog`](EventLog.md)

## Implements

- [`LogParams`](../interfaces/LogParams.md)

## Constructors

### new Log()

> **new Log**(`log`, `provider`): [`Log`](Log.md)

@_ignore:

#### Parameters

• **log**: [`LogParams`](../interfaces/LogParams.md)

• **provider**: [`Provider`](../interfaces/Provider.md)

#### Returns

[`Log`](Log.md)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:511

## Properties

### address

> `readonly` **address**: `string`

The address of the contract that emitted this log.

#### Implementation of

[`LogParams`](../interfaces/LogParams.md).[`address`](../interfaces/LogParams.md#address)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:486

***

### blockHash

> `readonly` **blockHash**: `string`

The block hash of the block this log occurred in. Use the
 [[Log-getBlock]] to get the [[Block]].

#### Implementation of

[`LogParams`](../interfaces/LogParams.md).[`blockHash`](../interfaces/LogParams.md#blockhash)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:468

***

### blockNumber

> `readonly` **blockNumber**: `number`

The block number of the block this log occurred in. It is preferred
 to use the [[Block-hash]] when fetching the related [[Block]],
 since in the case of an orphaned block, the block at that height may
 have changed.

#### Implementation of

[`LogParams`](../interfaces/LogParams.md).[`blockNumber`](../interfaces/LogParams.md#blocknumber)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:475

***

### data

> `readonly` **data**: `string`

The data included in this log when it was emitted.

#### Implementation of

[`LogParams`](../interfaces/LogParams.md).[`data`](../interfaces/LogParams.md#data)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:490

***

### index

> `readonly` **index**: `number`

The index within the block this log occurred at. This is generally
 not useful to developers, but can be used with the various roots
 to proof inclusion within a block.

#### Implementation of

[`LogParams`](../interfaces/LogParams.md).[`index`](../interfaces/LogParams.md#index)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:503

***

### provider

> `readonly` **provider**: [`Provider`](../interfaces/Provider.md)

The provider connected to the log used to fetch additional details
 if necessary.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:458

***

### removed

> `readonly` **removed**: `boolean`

If the **Log** represents a block that was removed due to an orphaned
 block, this will be true.

 This can only happen within an orphan event listener.

#### Implementation of

[`LogParams`](../interfaces/LogParams.md).[`removed`](../interfaces/LogParams.md#removed)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:482

***

### topics

> `readonly` **topics**: readonly `string`[]

The indexed topics included in this log when it was emitted.

 All topics are included in the bloom filters, so they can be
 efficiently filtered using the [[Provider-getLogs]] method.

#### Implementation of

[`LogParams`](../interfaces/LogParams.md).[`topics`](../interfaces/LogParams.md#topics)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:497

***

### transactionHash

> `readonly` **transactionHash**: `string`

The transaction hash of the transaction this log occurred in. Use the
 [[Log-getTransaction]] to get the [[TransactionResponse]].

#### Implementation of

[`LogParams`](../interfaces/LogParams.md).[`transactionHash`](../interfaces/LogParams.md#transactionhash)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:463

***

### transactionIndex

> `readonly` **transactionIndex**: `number`

The index within the transaction of this log.

#### Implementation of

[`LogParams`](../interfaces/LogParams.md).[`transactionIndex`](../interfaces/LogParams.md#transactionindex)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:507

## Methods

### getBlock()

> **getBlock**(): `Promise`\<[`Block`](Block.md)\>

Returns the block that this log occurred in.

#### Returns

`Promise`\<[`Block`](Block.md)\>

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:519

***

### getTransaction()

> **getTransaction**(): `Promise`\<[`TransactionResponse`](TransactionResponse.md)\>

Returns the transaction that this log occurred in.

#### Returns

`Promise`\<[`TransactionResponse`](TransactionResponse.md)\>

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:523

***

### getTransactionReceipt()

> **getTransactionReceipt**(): `Promise`\<[`TransactionReceipt`](TransactionReceipt.md)\>

Returns the transaction receipt fot the transaction that this
 log occurred in.

#### Returns

`Promise`\<[`TransactionReceipt`](TransactionReceipt.md)\>

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:528

***

### removedEvent()

> **removedEvent**(): [`OrphanFilter`](../type-aliases/OrphanFilter.md)

@_ignore:

#### Returns

[`OrphanFilter`](../type-aliases/OrphanFilter.md)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:532

***

### toJSON()

> **toJSON**(): `any`

Returns a JSON-compatible object.

#### Returns

`any`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:515
