[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / FillOrderDirectly

# Type Alias: FillOrderDirectly()\<T\>

> **FillOrderDirectly**\<`T`\>: (`order`, `signature`, `overrides`?, `signal`?) => `Promise`\<`T`\>

## Type Parameters

• **T**

## Parameters

• **order**: [`OrderData`](../../type-aliases/OrderData.md)

• **signature**: `string`

• **overrides?**: [`TxSendOverrides`](../../interfaces/TxSendOverrides.md)

• **signal?**: `AbortSignal`

## Returns

`Promise`\<`T`\>

## Defined in

[src/methods/limitOrders/fillOrderDirectly.ts:11](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/fillOrderDirectly.ts#L11)
