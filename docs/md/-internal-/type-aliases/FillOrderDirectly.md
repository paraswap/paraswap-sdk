[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / FillOrderDirectly

# Type Alias: FillOrderDirectly()\<T\>

> **FillOrderDirectly**\<`T`\>: (`orderFillData`, `overrides`?, `requestParams`?) => `Promise`\<`T`\>

## Type Parameters

• **T**

## Parameters

• **orderFillData**

• **orderFillData.order**: [`OrderData`](../../type-aliases/OrderData.md)

• **orderFillData.signature?**: `string`

• **orderFillData.takerPermit?**: [`TakerPermitObject`](TakerPermitObject.md)

**Description**

Permit1 data or DAI Permit data or Token.parmit() input params encoded; Permit by taker for Taker Asset with AugustusRFQ as spender

• **overrides?**: [`TxSendOverrides`](../../interfaces/TxSendOverrides.md)

• **requestParams?**: [`RequestParameters`](RequestParameters.md)

## Returns

`Promise`\<`T`\>

## Defined in

[src/methods/limitOrders/fillOrderDirectly.ts:42](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/fillOrderDirectly.ts#L42)
