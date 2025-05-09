[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / FeeValuesEIP1559

# Type Alias: FeeValuesEIP1559\<quantity\>

> **FeeValuesEIP1559**\<`quantity`\>: `object`

## Type Parameters

• **quantity** = `bigint`

## Type declaration

### gasPrice?

> `optional` **gasPrice**: `undefined`

### maxFeePerBlobGas?

> `optional` **maxFeePerBlobGas**: `undefined`

### maxFeePerGas

> **maxFeePerGas**: `quantity`

Total fee per gas in wei (gasPrice/baseFeePerGas + maxPriorityFeePerGas).

### maxPriorityFeePerGas

> **maxPriorityFeePerGas**: `quantity`

Max priority fee per gas (in wei).

## Defined in

node\_modules/viem/\_types/types/fee.d.ts:22
