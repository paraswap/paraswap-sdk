[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / EstimateFeesPerGasParameters

# Type Alias: EstimateFeesPerGasParameters\<chain, chainOverride, type\>

> **EstimateFeesPerGasParameters**\<`chain`, `chainOverride`, `type`\>: `object` & [`GetChainParameter`](GetChainParameter.md)\<`chain`, `chainOverride`\>

## Type declaration

### type?

> `optional` **type**: `type` \| [`FeeValuesType`](FeeValuesType.md)

The type of fee values to return.

- `legacy`: Returns the legacy gas price.
- `eip1559`: Returns the max fee per gas and max priority fee per gas.

#### Default

```ts
'eip1559'
```

## Type Parameters

• **chain** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

• **chainOverride** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

• **type** *extends* [`FeeValuesType`](FeeValuesType.md) = [`FeeValuesType`](FeeValuesType.md)

## Defined in

node\_modules/viem/\_types/actions/public/estimateFeesPerGas.d.ts:12
