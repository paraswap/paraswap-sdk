[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / ChainFees

# Type Alias: ChainFees\<formatters\>

> **ChainFees**\<`formatters`\>: `object`

## Type Parameters

• **formatters** *extends* [`ChainFormatters`](ChainFormatters.md) \| `undefined` = [`ChainFormatters`](ChainFormatters.md) \| `undefined`

## Type declaration

### baseFeeMultiplier?

> `optional` **baseFeeMultiplier**: `number` \| (`args`) => `Promise`\<`number`\> \| `number`

The fee multiplier to use to account for fee fluctuations.
Used in the [`estimateFeesPerGas` Action](/docs/actions/public/estimateFeesPerGas).

#### Default

```ts
1.2
```

### ~~defaultPriorityFee?~~

> `optional` **defaultPriorityFee**: `bigint` \| [`ChainMaxPriorityFeePerGasFn`](ChainMaxPriorityFeePerGasFn.md)\<`formatters`\>

#### Deprecated

Use `maxPriorityFeePerGas` instead.

### estimateFeesPerGas?

> `optional` **estimateFeesPerGas**: [`ChainEstimateFeesPerGasFn`](ChainEstimateFeesPerGasFn.md)\<`formatters`\>

Allows customization of fee per gas values (e.g. `maxFeePerGas`/`maxPriorityFeePerGas`).

Overrides the return value in the [`estimateFeesPerGas` Action](/docs/actions/public/estimateFeesPerGas).

### maxPriorityFeePerGas?

> `optional` **maxPriorityFeePerGas**: `bigint` \| [`ChainMaxPriorityFeePerGasFn`](ChainMaxPriorityFeePerGasFn.md)\<`formatters`\>

The default `maxPriorityFeePerGas` to use when a priority
fee is not defined upon sending a transaction.

Overrides the return value in the [`estimateMaxPriorityFeePerGas` Action](/docs/actions/public/estimateMaxPriorityFeePerGas).

## Defined in

node\_modules/viem/\_types/types/chain.d.ts:78
