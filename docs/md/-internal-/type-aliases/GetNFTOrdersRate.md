[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / GetNFTOrdersRate

# Type Alias: GetNFTOrdersRate()

> **GetNFTOrdersRate**: (`options`, `orders`, `signal`?) => `Promise`\<[`OptimalRate`](../../type-aliases/OptimalRate.md)\>

## Parameters

• **options**: [`Omit`](Omit.md)\<[`GetRateInput`](GetRateInput.md), `"amount"` \| `"side"`\> & `object`

• **orders**: [`CheckableOrderData`](CheckableOrderData.md)[]

• **signal?**: `AbortSignal`

## Returns

`Promise`\<[`OptimalRate`](../../type-aliases/OptimalRate.md)\>

## Defined in

[src/methods/nftOrders/transaction.ts:52](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/nftOrders/transaction.ts#L52)
