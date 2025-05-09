[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ApproveTokenBulk

# Type Alias: ApproveTokenBulk()\<T\>

> **ApproveTokenBulk**\<`T`\>: (`amount`, `tokenAddresses`, `overrides`?, `requestParams`?) => `Promise`\<[`Awaited`](Awaited.md)\<`T`\>[]\>

## Type Parameters

• **T**

## Parameters

• **amount**: [`PriceString`](../../type-aliases/PriceString.md)

• **tokenAddresses**: [`Address`](../../type-aliases/Address.md)[]

• **overrides?**: [`TxSendOverrides`](../../interfaces/TxSendOverrides.md)

• **requestParams?**: [`RequestParameters`](RequestParameters.md)

## Returns

`Promise`\<[`Awaited`](Awaited.md)\<`T`\>[]\>

## Defined in

[src/methods/swap/approve.ts:11](https://github.com/VeloraDEX/paraswap-sdk/blob/feat/velora/src/methods/swap/approve.ts#L11)
