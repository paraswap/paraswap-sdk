[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / GetLimitOrdersRate

# Type Alias: GetLimitOrdersRate()

> **GetLimitOrdersRate**: (`options`, `orders`, `signal`?) => `Promise`\<[`OptimalRate`](../../type-aliases/OptimalRate.md)\>

## Parameters

• **options**: [`Omit`](Omit.md)\<[`GetRateInput`](GetRateInput.md), `"amount"` \| `"side"`\> & `object`

• **orders**: [`CheckableOrderData`](CheckableOrderData.md)[]

• **signal?**: `AbortSignal`

## Returns

`Promise`\<[`OptimalRate`](../../type-aliases/OptimalRate.md)\>

## Defined in

[src/methods/limitOrders/transaction.ts:52](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/transaction.ts#L52)
