[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / GetLimitOrdersRate

# Type Alias: GetLimitOrdersRate()

> **GetLimitOrdersRate**: (`options`, `orders`, `requestParams`?) => `Promise`\<[`OptimalRate`](../../type-aliases/OptimalRate.md)\>

## Parameters

• **options**: [`Omit`](Omit.md)\<[`GetRateInput`](GetRateInput.md), `"amount"` \| `"side"`\> & `object`

• **orders**: [`CheckableOrderData`](CheckableOrderData.md)[]

• **requestParams?**: [`RequestParameters`](RequestParameters.md)

## Returns

`Promise`\<[`OptimalRate`](../../type-aliases/OptimalRate.md)\>

## Defined in

[src/methods/limitOrders/transaction.ts:53](https://github.com/VeloraDEX/paraswap-sdk/blob/feat/velora/src/methods/limitOrders/transaction.ts#L53)
