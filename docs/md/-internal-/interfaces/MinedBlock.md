[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / MinedBlock

# Interface: MinedBlock

An Interface to indicate a [[Block]] has been included in the
 blockchain. This asserts a Type Guard that necessary properties
 are non-null.

 Before a block is included, it is a //pending// block.

## Extends

- [`Block`](../classes/Block.md)

## Properties

### baseFeePerGas

> `readonly` **baseFeePerGas**: `null` \| `bigint`

The base fee per gas that all transactions in this block were
 charged.

 This adjusts after each block, depending on how congested the network
 is.

#### Inherited from

[`Block`](../classes/Block.md).[`baseFeePerGas`](../classes/Block.md#basefeepergas)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:386

***

### blobGasUsed

> `readonly` **blobGasUsed**: `null` \| `bigint`

The total amount of blob gas consumed by the transactions
 within the block. See [[link-eip-4844]].

#### Inherited from

[`Block`](../classes/Block.md).[`blobGasUsed`](../classes/Block.md#blobgasused)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:359

***

### date

> `readonly` **date**: `Date`

The block date, created from the [[timestamp]].

#### Overrides

[`Block`](../classes/Block.md).[`date`](../classes/Block.md#date)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:277

***

### difficulty

> `readonly` **difficulty**: `bigint`

The difficulty target.

 On legacy networks, this is the proof-of-work target required
 for a block to meet the protocol rules to be included.

 On modern networks, this is a random number arrived at using
 randao.  @TODO: Find links?

#### Inherited from

[`Block`](../classes/Block.md).[`difficulty`](../classes/Block.md#difficulty)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:337

***

### excessBlobGas

> `readonly` **excessBlobGas**: `null` \| `bigint`

The running total of blob gas consumed in excess of the
 target, prior to the block. See [[link-eip-4844]].

#### Inherited from

[`Block`](../classes/Block.md).[`excessBlobGas`](../classes/Block.md#excessblobgas)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:364

***

### extraData

> `readonly` **extraData**: `string`

Any extra data the validator wished to include.

#### Inherited from

[`Block`](../classes/Block.md).[`extraData`](../classes/Block.md#extradata)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:378

***

### gasLimit

> `readonly` **gasLimit**: `bigint`

The total gas limit for this block.

#### Inherited from

[`Block`](../classes/Block.md).[`gasLimit`](../classes/Block.md#gaslimit)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:341

***

### gasUsed

> `readonly` **gasUsed**: `bigint`

The total gas used in this block.

#### Inherited from

[`Block`](../classes/Block.md).[`gasUsed`](../classes/Block.md#gasused)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:345

***

### hash

> `readonly` **hash**: `string`

The block hash.

#### Overrides

[`Block`](../classes/Block.md).[`hash`](../classes/Block.md#hash)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:269

***

### miner

> `readonly` **miner**: `string`

The miner of the block, also known as the ``author`` or
 block ``producer``.

#### Overrides

[`Block`](../classes/Block.md).[`miner`](../classes/Block.md#miner)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:282

***

### nonce

> `readonly` **nonce**: `string`

The nonce.

 On legacy networks, this is the random number inserted which
 permitted the difficulty target to be reached.

#### Inherited from

[`Block`](../classes/Block.md).[`nonce`](../classes/Block.md#nonce)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:327

***

### number

> `readonly` **number**: `number`

The block number also known as the block height.

#### Overrides

[`Block`](../classes/Block.md).[`number`](../classes/Block.md#number)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:265

***

### parentBeaconBlockRoot

> **parentBeaconBlockRoot**: `null` \| `string`

The hash tree root of the parent beacon block for the given
 execution block. See [[link-eip-4788]].

#### Inherited from

[`Block`](../classes/Block.md).[`parentBeaconBlockRoot`](../classes/Block.md#parentbeaconblockroot)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:320

***

### parentHash

> `readonly` **parentHash**: `string`

The block hash of the parent block.

#### Inherited from

[`Block`](../classes/Block.md).[`parentHash`](../classes/Block.md#parenthash)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:315

***

### prevRandao

> `readonly` **prevRandao**: `null` \| `string`

The latest RANDAO mix of the post beacon state of
 the previous block.

#### Inherited from

[`Block`](../classes/Block.md).[`prevRandao`](../classes/Block.md#prevrandao)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:374

***

### provider

> `readonly` **provider**: [`Provider`](Provider.md)

The provider connected to the block used to fetch additional details
 if necessary.

#### Inherited from

[`Block`](../classes/Block.md).[`provider`](../classes/Block.md#provider)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:294

***

### receiptsRoot

> `readonly` **receiptsRoot**: `null` \| `string`

The hash of the transaction receipts trie.

#### Inherited from

[`Block`](../classes/Block.md).[`receiptsRoot`](../classes/Block.md#receiptsroot)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:354

***

### stateRoot

> `readonly` **stateRoot**: `null` \| `string`

The root hash for the global state after applying changes
 in this block.

#### Inherited from

[`Block`](../classes/Block.md).[`stateRoot`](../classes/Block.md#stateroot)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:350

***

### timestamp

> `readonly` **timestamp**: `number`

The block timestamp, in seconds from epoch.

#### Overrides

[`Block`](../classes/Block.md).[`timestamp`](../classes/Block.md#timestamp)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:273

## Accessors

### length

#### Get Signature

> **get** **length**(): `number`

The number of transactions in this block.

##### Returns

`number`

#### Inherited from

[`Block`](../classes/Block.md).[`length`](../classes/Block.md#length)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:416

***

### prefetchedTransactions

#### Get Signature

> **get** **prefetchedTransactions**(): [`TransactionResponse`](../classes/TransactionResponse.md)[]

Returns the complete transactions, in the order they
 were executed within the block.

 This is only available for blocks which prefetched
 transactions, by passing ``true`` to %%prefetchTxs%%
 into [[Provider-getBlock]].

##### Returns

[`TransactionResponse`](../classes/TransactionResponse.md)[]

#### Inherited from

[`Block`](../classes/Block.md).[`prefetchedTransactions`](../classes/Block.md#prefetchedtransactions)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:407

***

### transactions

#### Get Signature

> **get** **transactions**(): readonly `string`[]

Returns the list of transaction hashes, in the order
 they were executed within the block.

##### Returns

readonly `string`[]

The list of transactions in the block.

#### Inherited from

[`Block`](../classes/Block.md).[`transactions`](../classes/Block.md#transactions)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:398

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`Iterator`](Iterator.md)\<`string`, `any`, `any`\>

#### Returns

[`Iterator`](Iterator.md)\<`string`, `any`, `any`\>

#### Inherited from

[`Block`](../classes/Block.md).[`[iterator]`](../classes/Block.md#%5Biterator%5D)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:412

***

### getPrefetchedTransaction()

> **getPrefetchedTransaction**(`indexOrHash`): [`TransactionResponse`](../classes/TransactionResponse.md)

If a **Block** was fetched with a request to include the transactions
 this will allow synchronous access to those transactions.

 If the transactions were not prefetched, this will throw.

#### Parameters

• **indexOrHash**: `string` \| `number`

#### Returns

[`TransactionResponse`](../classes/TransactionResponse.md)

#### Inherited from

[`Block`](../classes/Block.md).[`getPrefetchedTransaction`](../classes/Block.md#getprefetchedtransaction)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:431

***

### getTransaction()

> **getTransaction**(`indexOrHash`): `Promise`\<[`TransactionResponse`](../classes/TransactionResponse.md)\>

Get the transaction at %%indexe%% within this block.

#### Parameters

• **indexOrHash**: `string` \| `number`

#### Returns

`Promise`\<[`TransactionResponse`](../classes/TransactionResponse.md)\>

#### Inherited from

[`Block`](../classes/Block.md).[`getTransaction`](../classes/Block.md#gettransaction)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:424

***

### isLondon()

> **isLondon**(): `this is Block & Object`

Returns true if this block is an [[link-eip-2930]] block.

#### Returns

`this is Block & Object`

#### Inherited from

[`Block`](../classes/Block.md).[`isLondon`](../classes/Block.md#islondon)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:440

***

### isMined()

> **isMined**(): `this is MinedBlock`

Returns true if this block been mined. This provides a type guard
 for all properties on a [[MinedBlock]].

#### Returns

`this is MinedBlock`

#### Inherited from

[`Block`](../classes/Block.md).[`isMined`](../classes/Block.md#ismined)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:436

***

### orphanedEvent()

> **orphanedEvent**(): [`OrphanFilter`](../type-aliases/OrphanFilter.md)

@_ignore:

#### Returns

[`OrphanFilter`](../type-aliases/OrphanFilter.md)

#### Inherited from

[`Block`](../classes/Block.md).[`orphanedEvent`](../classes/Block.md#orphanedevent)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:446

***

### toJSON()

> **toJSON**(): `any`

Returns a JSON-friendly value.

#### Returns

`any`

#### Inherited from

[`Block`](../classes/Block.md).[`toJSON`](../classes/Block.md#tojson)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:411
