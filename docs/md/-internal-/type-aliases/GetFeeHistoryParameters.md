[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / GetFeeHistoryParameters

# Type Alias: GetFeeHistoryParameters

> **GetFeeHistoryParameters**: `object` & `object` \| `object`

## Type declaration

### blockCount

> **blockCount**: `number`

Number of blocks in the requested range. Between 1 and 1024 blocks can be requested in a single query. Less than requested may be returned if not all blocks are available.

### rewardPercentiles

> **rewardPercentiles**: `number`[]

A monotonically increasing list of percentile values to sample from each block's effective priority fees per gas in ascending order, weighted by gas used.

## Defined in

node\_modules/viem/\_types/actions/public/getFeeHistory.d.ts:9
