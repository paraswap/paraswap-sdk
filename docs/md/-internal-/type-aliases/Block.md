[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Block

# Type Alias: Block\<quantity, includeTransactions, blockTag, transaction\>

> **Block**\<`quantity`, `includeTransactions`, `blockTag`, `transaction`\>: `object`

## Type Parameters

• **quantity** = `bigint`

• **includeTransactions** *extends* `boolean` = `boolean`

• **blockTag** *extends* [`BlockTag`](BlockTag.md) = [`BlockTag`](BlockTag.md)

• **transaction** = [`Transaction`](Transaction.md)\<`bigint`, `number`, `blockTag` *extends* `"pending"` ? `true` : `false`\>

## Type declaration

### baseFeePerGas

> **baseFeePerGas**: `quantity` \| `null`

Base fee per gas

### blobGasUsed

> **blobGasUsed**: `quantity`

Total used blob gas by all transactions in this block

### difficulty

> **difficulty**: `quantity`

Difficulty for this block

### excessBlobGas

> **excessBlobGas**: `quantity`

Excess blob gas

### extraData

> **extraData**: [`Hex`](Hex.md)

"Extra data" field of this block

### gasLimit

> **gasLimit**: `quantity`

Maximum gas allowed in this block

### gasUsed

> **gasUsed**: `quantity`

Total used gas by all transactions in this block

### hash

> **hash**: `blockTag` *extends* `"pending"` ? `null` : [`Hash`](Hash.md)

Block hash or `null` if pending

### logsBloom

> **logsBloom**: `blockTag` *extends* `"pending"` ? `null` : [`Hex`](Hex.md)

Logs bloom filter or `null` if pending

### miner

> **miner**: [`Address`](Address.md)

Address that received this block’s mining rewards

### mixHash

> **mixHash**: [`Hash`](Hash.md)

Unique identifier for the block.

### nonce

> **nonce**: `blockTag` *extends* `"pending"` ? `null` : [`Hex`](Hex.md)

Proof-of-work hash or `null` if pending

### number

> **number**: `blockTag` *extends* `"pending"` ? `null` : `quantity`

Block number or `null` if pending

### parentBeaconBlockRoot?

> `optional` **parentBeaconBlockRoot**: [`Hex`](Hex.md)

Root of the parent beacon chain block

### parentHash

> **parentHash**: [`Hash`](Hash.md)

Parent block hash

### receiptsRoot

> **receiptsRoot**: [`Hex`](Hex.md)

Root of the this block’s receipts trie

### sealFields

> **sealFields**: [`Hex`](Hex.md)[]

### sha3Uncles

> **sha3Uncles**: [`Hash`](Hash.md)

SHA3 of the uncles data in this block

### size

> **size**: `quantity`

Size of this block in bytes

### stateRoot

> **stateRoot**: [`Hash`](Hash.md)

Root of this block’s final state trie

### timestamp

> **timestamp**: `quantity`

Unix timestamp of when this block was collated

### totalDifficulty

> **totalDifficulty**: `quantity` \| `null`

Total difficulty of the chain until this block

### transactions

> **transactions**: `includeTransactions` *extends* `true` ? `transaction`[] : [`Hash`](Hash.md)[]

List of transaction objects or hashes

### transactionsRoot

> **transactionsRoot**: [`Hash`](Hash.md)

Root of this block’s transaction trie

### uncles

> **uncles**: [`Hash`](Hash.md)[]

List of uncle hashes

### withdrawals?

> `optional` **withdrawals**: [`Withdrawal`](Withdrawal.md)[]

List of withdrawal objects

### withdrawalsRoot?

> `optional` **withdrawalsRoot**: [`Hex`](Hex.md)

Root of the this block’s withdrawals trie

## Defined in

node\_modules/viem/\_types/types/block.d.ts:5
