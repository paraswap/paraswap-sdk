[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / SubmitLimitOrder

# Type Alias: SubmitLimitOrder()

> **SubmitLimitOrder**: (`buildLimitOrderParams`, `extra`?, `signal`?) => `Promise`\<[`LimitOrderFromApi`](../../type-aliases/LimitOrderFromApi.md)\>

## Parameters

• **buildLimitOrderParams**: [`BuildLimitOrderInput`](../../type-aliases/BuildLimitOrderInput.md)

• **extra?**

• **extra.permitMakerAsset?**: `string`

• **signal?**: `AbortSignal`

## Returns

`Promise`\<[`LimitOrderFromApi`](../../type-aliases/LimitOrderFromApi.md)\>

## Defined in

[src/methods/limitOrders/index.ts:33](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/index.ts#L33)
