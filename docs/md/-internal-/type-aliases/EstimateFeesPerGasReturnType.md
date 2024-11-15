[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / EstimateFeesPerGasReturnType

# Type Alias: EstimateFeesPerGasReturnType\<type\>

> **EstimateFeesPerGasReturnType**\<`type`\>: `type` *extends* `"legacy"` ? [`FeeValuesLegacy`](FeeValuesLegacy.md) : `never` \| `type` *extends* `"eip1559"` ? [`FeeValuesEIP1559`](FeeValuesEIP1559.md) : `never`

## Type Parameters

• **type** *extends* [`FeeValuesType`](FeeValuesType.md) = [`FeeValuesType`](FeeValuesType.md)

## Defined in

node\_modules/viem/\_types/actions/public/estimateFeesPerGas.d.ts:23
