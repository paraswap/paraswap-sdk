[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / ApproveTokenBulk

# Type Alias: ApproveTokenBulk()\<T\>

> **ApproveTokenBulk**\<`T`\>: (`amount`, `tokenAddresses`, `overrides`?, `signal`?) => `Promise`\<[`Awaited`](Awaited.md)\<`T`\>[]\>

## Type Parameters

• **T**

## Parameters

• **amount**: [`PriceString`](../../type-aliases/PriceString.md)

• **tokenAddresses**: [`Address`](../../type-aliases/Address.md)[]

• **overrides?**: [`TxSendOverrides`](../../interfaces/TxSendOverrides.md)

• **signal?**: `AbortSignal`

## Returns

`Promise`\<[`Awaited`](Awaited.md)\<`T`\>[]\>

## Defined in

[src/methods/swap/approve.ts:10](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/approve.ts#L10)
