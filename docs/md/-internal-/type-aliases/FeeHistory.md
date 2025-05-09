[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / FeeHistory

# Type Alias: FeeHistory\<quantity\>

> **FeeHistory**\<`quantity`\>: `object`

## Type Parameters

• **quantity** = `bigint`

## Type declaration

### baseFeePerGas

> **baseFeePerGas**: `quantity`[]

An array of block base fees per gas (in wei). This includes the next block after
the newest of the returned range, because this value can be derived from the newest block.
Zeroes are returned for pre-EIP-1559 blocks.

### gasUsedRatio

> **gasUsedRatio**: `number`[]

An array of block gas used ratios. These are calculated as the ratio of gasUsed and gasLimit.

### oldestBlock

> **oldestBlock**: `quantity`

Lowest number block of the returned range.

### reward?

> `optional` **reward**: `quantity`[][]

An array of effective priority fees (in wei) per gas data points from a single block. All zeroes are returned if the block is empty.

## Defined in

node\_modules/viem/\_types/types/fee.d.ts:2
