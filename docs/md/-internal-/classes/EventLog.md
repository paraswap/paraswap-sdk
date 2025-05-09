[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / EventLog

# Class: EventLog

An **EventLog** contains additional properties parsed from the [[Log]].

## Extends

- [`Log`](Log.md)

## Constructors

### new EventLog()

> **new EventLog**(`log`, `iface`, `fragment`): [`EventLog`](EventLog.md)

@_ignore:

#### Parameters

• **log**: [`Log`](Log.md)

• **iface**: [`Interface`](Interface.md)

• **fragment**: [`EventFragment`](EventFragment.md)

#### Returns

[`EventLog`](EventLog.md)

#### Overrides

[`Log`](Log.md).[`constructor`](Log.md#constructors)

#### Defined in

node\_modules/ethers/lib.commonjs/contract/wrappers.d.ts:27

## Properties

### address

> `readonly` **address**: `string`

The address of the contract that emitted this log.

#### Inherited from

[`Log`](Log.md).[`address`](Log.md#address)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:486

***

### args

> `readonly` **args**: [`Result`](Result.md)

The parsed arguments passed to the event by ``emit``.

#### Defined in

node\_modules/ethers/lib.commonjs/contract/wrappers.d.ts:23

***

### blockHash

> `readonly` **blockHash**: `string`

The block hash of the block this log occurred in. Use the
 [[Log-getBlock]] to get the [[Block]].

#### Inherited from

[`Log`](Log.md).[`blockHash`](Log.md#blockhash)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:468

***

### blockNumber

> `readonly` **blockNumber**: `number`

The block number of the block this log occurred in. It is preferred
 to use the [[Block-hash]] when fetching the related [[Block]],
 since in the case of an orphaned block, the block at that height may
 have changed.

#### Inherited from

[`Log`](Log.md).[`blockNumber`](Log.md#blocknumber)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:475

***

### data

> `readonly` **data**: `string`

The data included in this log when it was emitted.

#### Inherited from

[`Log`](Log.md).[`data`](Log.md#data)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:490

***

### fragment

> `readonly` **fragment**: [`EventFragment`](EventFragment.md)

The matching event.

#### Defined in

node\_modules/ethers/lib.commonjs/contract/wrappers.d.ts:19

***

### index

> `readonly` **index**: `number`

The index within the block this log occurred at. This is generally
 not useful to developers, but can be used with the various roots
 to proof inclusion within a block.

#### Inherited from

[`Log`](Log.md).[`index`](Log.md#index)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:503

***

### interface

> `readonly` **interface**: [`Interface`](Interface.md)

The Contract Interface.

#### Defined in

node\_modules/ethers/lib.commonjs/contract/wrappers.d.ts:15

***

### provider

> `readonly` **provider**: [`Provider`](../interfaces/Provider.md)

The provider connected to the log used to fetch additional details
 if necessary.

#### Inherited from

[`Log`](Log.md).[`provider`](Log.md#provider)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:458

***

### removed

> `readonly` **removed**: `boolean`

If the **Log** represents a block that was removed due to an orphaned
 block, this will be true.

 This can only happen within an orphan event listener.

#### Inherited from

[`Log`](Log.md).[`removed`](Log.md#removed)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:482

***

### topics

> `readonly` **topics**: readonly `string`[]

The indexed topics included in this log when it was emitted.

 All topics are included in the bloom filters, so they can be
 efficiently filtered using the [[Provider-getLogs]] method.

#### Inherited from

[`Log`](Log.md).[`topics`](Log.md#topics)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:497

***

### transactionHash

> `readonly` **transactionHash**: `string`

The transaction hash of the transaction this log occurred in. Use the
 [[Log-getTransaction]] to get the [[TransactionResponse]].

#### Inherited from

[`Log`](Log.md).[`transactionHash`](Log.md#transactionhash)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:463

***

### transactionIndex

> `readonly` **transactionIndex**: `number`

The index within the transaction of this log.

#### Inherited from

[`Log`](Log.md).[`transactionIndex`](Log.md#transactionindex)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:507

## Accessors

### eventName

#### Get Signature

> **get** **eventName**(): `string`

The name of the event.

##### Returns

`string`

#### Defined in

node\_modules/ethers/lib.commonjs/contract/wrappers.d.ts:31

***

### eventSignature

#### Get Signature

> **get** **eventSignature**(): `string`

The signature of the event.

##### Returns

`string`

#### Defined in

node\_modules/ethers/lib.commonjs/contract/wrappers.d.ts:35

## Methods

### getBlock()

> **getBlock**(): `Promise`\<[`Block`](Block.md)\>

Returns the block that this log occurred in.

#### Returns

`Promise`\<[`Block`](Block.md)\>

#### Inherited from

[`Log`](Log.md).[`getBlock`](Log.md#getblock)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:519

***

### getTransaction()

> **getTransaction**(): `Promise`\<[`TransactionResponse`](TransactionResponse.md)\>

Returns the transaction that this log occurred in.

#### Returns

`Promise`\<[`TransactionResponse`](TransactionResponse.md)\>

#### Inherited from

[`Log`](Log.md).[`getTransaction`](Log.md#gettransaction)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:523

***

### getTransactionReceipt()

> **getTransactionReceipt**(): `Promise`\<[`TransactionReceipt`](TransactionReceipt.md)\>

Returns the transaction receipt fot the transaction that this
 log occurred in.

#### Returns

`Promise`\<[`TransactionReceipt`](TransactionReceipt.md)\>

#### Inherited from

[`Log`](Log.md).[`getTransactionReceipt`](Log.md#gettransactionreceipt)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:528

***

### removedEvent()

> **removedEvent**(): [`OrphanFilter`](../type-aliases/OrphanFilter.md)

@_ignore:

#### Returns

[`OrphanFilter`](../type-aliases/OrphanFilter.md)

#### Inherited from

[`Log`](Log.md).[`removedEvent`](Log.md#removedevent)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:532

***

### toJSON()

> **toJSON**(): `any`

Returns a JSON-compatible object.

#### Returns

`any`

#### Inherited from

[`Log`](Log.md).[`toJSON`](Log.md#tojson)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:515
