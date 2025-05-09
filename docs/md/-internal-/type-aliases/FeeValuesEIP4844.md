[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / FeeValuesEIP4844

# Type Alias: FeeValuesEIP4844\<quantity\>

> **FeeValuesEIP4844**\<`quantity`\>: `object`

## Type Parameters

• **quantity** = `bigint`

## Type declaration

### gasPrice?

> `optional` **gasPrice**: `undefined`

### maxFeePerBlobGas

> **maxFeePerBlobGas**: `quantity`

Maximum total fee per gas sender is willing to pay for blob gas (in wei).

### maxFeePerGas

> **maxFeePerGas**: `quantity`

Total fee per gas in wei (gasPrice/baseFeePerGas + maxPriorityFeePerGas).

### maxPriorityFeePerGas

> **maxPriorityFeePerGas**: `quantity`

Max priority fee per gas (in wei).

## Defined in

node\_modules/viem/\_types/types/fee.d.ts:30
