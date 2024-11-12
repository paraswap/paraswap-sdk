[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / SubmitP2POrder

# Type Alias: SubmitP2POrder()

> **SubmitP2POrder**: (`buildLimitOrderParams`, `extra`?, `signal`?) => `Promise`\<[`LimitOrderFromApi`](../../type-aliases/LimitOrderFromApi.md)\>

## Parameters

• **buildLimitOrderParams**: [`BuildLimitOrderInput`](../../type-aliases/BuildLimitOrderInput.md) & `object`

• **extra?**

• **extra.permitMakerAsset?**: `string`

• **signal?**: `AbortSignal`

## Returns

`Promise`\<[`LimitOrderFromApi`](../../type-aliases/LimitOrderFromApi.md)\>

## Defined in

[src/methods/limitOrders/index.ts:39](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/index.ts#L39)
