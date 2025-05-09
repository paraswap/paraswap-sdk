[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Block

# Class: Block

A **Block** represents the data associated with a full block on
 Ethereum.

## Extended by

- [`MinedBlock`](../interfaces/MinedBlock.md)

## Implements

- [`BlockParams`](../interfaces/BlockParams.md)
- [`Iterable`](../interfaces/Iterable.md)\<`string`\>

## Constructors

### new Block()

> **new Block**(`block`, `provider`): [`Block`](Block.md)

Create a new **Block** object.

 This should generally not be necessary as the unless implementing a
 low-level library.

#### Parameters

• **block**: [`BlockParams`](../interfaces/BlockParams.md)

• **provider**: [`Provider`](../interfaces/Provider.md)

#### Returns

[`Block`](Block.md)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:393

## Properties

### baseFeePerGas

> `readonly` **baseFeePerGas**: `null` \| `bigint`

The base fee per gas that all transactions in this block were
 charged.

 This adjusts after each block, depending on how congested the network
 is.

#### Implementation of

[`BlockParams`](../interfaces/BlockParams.md).[`baseFeePerGas`](../interfaces/BlockParams.md#basefeepergas)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:386

***

### blobGasUsed

> `readonly` **blobGasUsed**: `null` \| `bigint`

The total amount of blob gas consumed by the transactions
 within the block. See [[link-eip-4844]].

#### Implementation of

[`BlockParams`](../interfaces/BlockParams.md).[`blobGasUsed`](../interfaces/BlockParams.md#blobgasused)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:359

***

### difficulty

> `readonly` **difficulty**: `bigint`

The difficulty target.

 On legacy networks, this is the proof-of-work target required
 for a block to meet the protocol rules to be included.

 On modern networks, this is a random number arrived at using
 randao.  @TODO: Find links?

#### Implementation of

[`BlockParams`](../interfaces/BlockParams.md).[`difficulty`](../interfaces/BlockParams.md#difficulty)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:337

***

### excessBlobGas

> `readonly` **excessBlobGas**: `null` \| `bigint`

The running total of blob gas consumed in excess of the
 target, prior to the block. See [[link-eip-4844]].

#### Implementation of

[`BlockParams`](../interfaces/BlockParams.md).[`excessBlobGas`](../interfaces/BlockParams.md#excessblobgas)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:364

***

### extraData

> `readonly` **extraData**: `string`

Any extra data the validator wished to include.

#### Implementation of

[`BlockParams`](../interfaces/BlockParams.md).[`extraData`](../interfaces/BlockParams.md#extradata)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:378

***

### gasLimit

> `readonly` **gasLimit**: `bigint`

The total gas limit for this block.

#### Implementation of

[`BlockParams`](../interfaces/BlockParams.md).[`gasLimit`](../interfaces/BlockParams.md#gaslimit)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:341

***

### gasUsed

> `readonly` **gasUsed**: `bigint`

The total gas used in this block.

#### Implementation of

[`BlockParams`](../interfaces/BlockParams.md).[`gasUsed`](../interfaces/BlockParams.md#gasused)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:345

***

### hash

> `readonly` **hash**: `null` \| `string`

The block hash.

 This hash includes all properties, so can be safely used to identify
 an exact set of block properties.

#### Implementation of

[`BlockParams`](../interfaces/BlockParams.md).[`hash`](../interfaces/BlockParams.md#hash)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:306

***

### miner

> `readonly` **miner**: `string`

The miner coinbase address, wihch receives any subsidies for
 including this block.

#### Implementation of

[`BlockParams`](../interfaces/BlockParams.md).[`miner`](../interfaces/BlockParams.md#miner)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:369

***

### nonce

> `readonly` **nonce**: `string`

The nonce.

 On legacy networks, this is the random number inserted which
 permitted the difficulty target to be reached.

#### Implementation of

[`BlockParams`](../interfaces/BlockParams.md).[`nonce`](../interfaces/BlockParams.md#nonce)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:327

***

### number

> `readonly` **number**: `number`

The block number, sometimes called the block height. This is a
 sequential number that is one higher than the parent block.

#### Implementation of

[`BlockParams`](../interfaces/BlockParams.md).[`number`](../interfaces/BlockParams.md#number)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:299

***

### parentBeaconBlockRoot

> **parentBeaconBlockRoot**: `null` \| `string`

The hash tree root of the parent beacon block for the given
 execution block. See [[link-eip-4788]].

#### Implementation of

[`BlockParams`](../interfaces/BlockParams.md).[`parentBeaconBlockRoot`](../interfaces/BlockParams.md#parentbeaconblockroot)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:320

***

### parentHash

> `readonly` **parentHash**: `string`

The block hash of the parent block.

#### Implementation of

[`BlockParams`](../interfaces/BlockParams.md).[`parentHash`](../interfaces/BlockParams.md#parenthash)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:315

***

### prevRandao

> `readonly` **prevRandao**: `null` \| `string`

The latest RANDAO mix of the post beacon state of
 the previous block.

#### Implementation of

[`BlockParams`](../interfaces/BlockParams.md).[`prevRandao`](../interfaces/BlockParams.md#prevrandao)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:374

***

### provider

> `readonly` **provider**: [`Provider`](../interfaces/Provider.md)

The provider connected to the block used to fetch additional details
 if necessary.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:294

***

### receiptsRoot

> `readonly` **receiptsRoot**: `null` \| `string`

The hash of the transaction receipts trie.

#### Implementation of

[`BlockParams`](../interfaces/BlockParams.md).[`receiptsRoot`](../interfaces/BlockParams.md#receiptsroot)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:354

***

### stateRoot

> `readonly` **stateRoot**: `null` \| `string`

The root hash for the global state after applying changes
 in this block.

#### Implementation of

[`BlockParams`](../interfaces/BlockParams.md).[`stateRoot`](../interfaces/BlockParams.md#stateroot)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:350

***

### timestamp

> `readonly` **timestamp**: `number`

The timestamp for this block, which is the number of seconds since
 epoch that this block was included.

#### Implementation of

[`BlockParams`](../interfaces/BlockParams.md).[`timestamp`](../interfaces/BlockParams.md#timestamp)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:311

## Accessors

### date

#### Get Signature

> **get** **date**(): `null` \| `Date`

The [[link-js-date]] this block was included at.

##### Returns

`null` \| `Date`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:420

***

### length

#### Get Signature

> **get** **length**(): `number`

The number of transactions in this block.

##### Returns

`number`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:416

***

### prefetchedTransactions

#### Get Signature

> **get** **prefetchedTransactions**(): [`TransactionResponse`](TransactionResponse.md)[]

Returns the complete transactions, in the order they
 were executed within the block.

 This is only available for blocks which prefetched
 transactions, by passing ``true`` to %%prefetchTxs%%
 into [[Provider-getBlock]].

##### Returns

[`TransactionResponse`](TransactionResponse.md)[]

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

#### Implementation of

[`BlockParams`](../interfaces/BlockParams.md).[`transactions`](../interfaces/BlockParams.md#transactions)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:398

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`Iterator`](../interfaces/Iterator.md)\<`string`, `any`, `any`\>

#### Returns

[`Iterator`](../interfaces/Iterator.md)\<`string`, `any`, `any`\>

#### Implementation of

[`Iterable`](../interfaces/Iterable.md).[`[iterator]`](../interfaces/Iterable.md#%5Biterator%5D)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:412

***

### getPrefetchedTransaction()

> **getPrefetchedTransaction**(`indexOrHash`): [`TransactionResponse`](TransactionResponse.md)

If a **Block** was fetched with a request to include the transactions
 this will allow synchronous access to those transactions.

 If the transactions were not prefetched, this will throw.

#### Parameters

• **indexOrHash**: `string` \| `number`

#### Returns

[`TransactionResponse`](TransactionResponse.md)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:431

***

### getTransaction()

> **getTransaction**(`indexOrHash`): `Promise`\<[`TransactionResponse`](TransactionResponse.md)\>

Get the transaction at %%indexe%% within this block.

#### Parameters

• **indexOrHash**: `string` \| `number`

#### Returns

`Promise`\<[`TransactionResponse`](TransactionResponse.md)\>

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:424

***

### isLondon()

> **isLondon**(): `this is Block & Object`

Returns true if this block is an [[link-eip-2930]] block.

#### Returns

`this is Block & Object`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:440

***

### isMined()

> **isMined**(): `this is MinedBlock`

Returns true if this block been mined. This provides a type guard
 for all properties on a [[MinedBlock]].

#### Returns

`this is MinedBlock`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:436

***

### orphanedEvent()

> **orphanedEvent**(): [`OrphanFilter`](../type-aliases/OrphanFilter.md)

@_ignore:

#### Returns

[`OrphanFilter`](../type-aliases/OrphanFilter.md)

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:446

***

### toJSON()

> **toJSON**(): `any`

Returns a JSON-friendly value.

#### Returns

`any`

#### Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:411
