[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ChainEstimateFeesPerGasFnParameters

# Type Alias: ChainEstimateFeesPerGasFnParameters\<formatters\>

> **ChainEstimateFeesPerGasFnParameters**\<`formatters`\>: `object` & [`ChainFeesFnParameters`](ChainFeesFnParameters.md)\<`formatters`\>

## Type declaration

### multiply()

> **multiply**: (`x`) => `bigint`

A function to multiply the base fee based on the `baseFeeMultiplier` value.

#### Parameters

• **x**: `bigint`

#### Returns

`bigint`

### type

> **type**: [`FeeValuesType`](FeeValuesType.md)

The type of fees to return.

## Type Parameters

• **formatters** *extends* [`ChainFormatters`](ChainFormatters.md) \| `undefined` = [`ChainFormatters`](ChainFormatters.md) \| `undefined`

## Defined in

node\_modules/viem/\_types/types/chain.d.ts:70
