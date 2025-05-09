[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / GetNFTOrdersRate

# Type Alias: GetNFTOrdersRate()

> **GetNFTOrdersRate**: (`options`, `orders`, `requestParams`?) => `Promise`\<[`OptimalRate`](../../type-aliases/OptimalRate.md)\>

## Parameters

• **options**: [`Omit`](Omit.md)\<[`GetRateInput`](GetRateInput.md), `"amount"` \| `"side"`\> & `object`

• **orders**: [`CheckableOrderData`](CheckableOrderData.md)[]

• **requestParams?**: [`RequestParameters`](RequestParameters.md)

## Returns

`Promise`\<[`OptimalRate`](../../type-aliases/OptimalRate.md)\>

## Defined in

[src/methods/nftOrders/transaction.ts:52](https://github.com/VeloraDEX/paraswap-sdk/blob/feat/velora/src/methods/nftOrders/transaction.ts#L52)
