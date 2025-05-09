[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / LogParams

# Interface: LogParams

a **LogParams** encodes the minimal required properties for a
 formatted log.

## Properties

### address

> **address**: `string`

The address of the contract that emitted this log.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:123

***

### blockHash

> **blockHash**: `string`

The block hash of the block that included the transaction for this
 log.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:109

***

### blockNumber

> **blockNumber**: `number`

The block number of the block that included the transaction for this
 log.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:114

***

### data

> **data**: `string`

The data emitted with this log.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:127

***

### index

> **index**: `number`

The index of this log.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:135

***

### removed

> **removed**: `boolean`

Whether this log was removed due to the transaction it was included
 in being removed dur to an orphaned block.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:119

***

### topics

> **topics**: readonly `string`[]

The topics emitted with this log.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:131

***

### transactionHash

> **transactionHash**: `string`

The transaction hash for the transaxction the log occurred in.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:104

***

### transactionIndex

> **transactionIndex**: `number`

The transaction index of this log.

#### Defined in

node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:139
