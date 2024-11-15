[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / BlockParams

# Interface: BlockParams

a **BlockParams** encodes the minimal required properties for a
 formatted block.

## Properties

### baseFeePerGas

> **baseFeePerGas**: `null` \| `bigint`

The protocol-defined base fee per gas in an [[link-eip-1559]]
 block.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:81

***

### blobGasUsed?

> `optional` **blobGasUsed**: `null` \| `bigint`

The total amount of BLOb gas consumed by transactions within
 the block. See [[link-eip4844].

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:58

***

### difficulty

> **difficulty**: `bigint`

For proof-of-work networks, the difficulty target is used to
 adjust the difficulty in mining to ensure a expected block rate.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:45

***

### excessBlobGas?

> `optional` **excessBlobGas**: `null` \| `bigint`

The running total of BLOb gas consumed in excess of the target
 prior to the block. See [[link-eip-4844]].

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:63

***

### extraData

> **extraData**: `string`

Additional data the miner choose to include.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:76

***

### gasLimit

> **gasLimit**: `bigint`

The maximum amount of gas a block can consume.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:49

***

### gasUsed

> **gasUsed**: `bigint`

The amount of gas a block consumed.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:53

***

### hash?

> `optional` **hash**: `null` \| `string`

The block hash.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:16

***

### miner

> **miner**: `string`

The miner (or author) of a block.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:67

***

### nonce

> **nonce**: `string`

A random sequence provided during the mining process for
 proof-of-work networks.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:40

***

### number

> **number**: `number`

The block number.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:20

***

### parentBeaconBlockRoot?

> `optional` **parentBeaconBlockRoot**: `null` \| `string`

The hash tree root of the parent beacon block for the given
 execution block. See [[link-eip-4788]].

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:35

***

### parentHash

> **parentHash**: `string`

The hash of the previous block in the blockchain. The genesis block
 has the parentHash of the [[ZeroHash]].

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:30

***

### prevRandao?

> `optional` **prevRandao**: `null` \| `string`

The latest RANDAO mix of the post beacon state of
 the previous block.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:72

***

### receiptsRoot?

> `optional` **receiptsRoot**: `null` \| `string`

The hash of the transaction receipts trie.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:90

***

### stateRoot?

> `optional` **stateRoot**: `null` \| `string`

The root hash for the global state after applying changes
 in this block.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:86

***

### timestamp

> **timestamp**: `number`

The timestamp for this block, which is the number of seconds
 since epoch that this block was included.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:25

***

### transactions

> **transactions**: readonly (`string` \| [`TransactionResponseParams`](TransactionResponseParams.md))[]

The list of transactions in the block.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:94
