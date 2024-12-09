[**@paraswap/sdk**](../README.md) • **Docs**

***

[@paraswap/sdk](../globals.md) / AllSDKMethods

# Type Alias: AllSDKMethods\<TxResponse\>

> **AllSDKMethods**\<`TxResponse`\>: `object` & [`Required`](../-internal-/type-aliases/Required.md)\<[`ConstructBaseInput`](../-internal-/interfaces/ConstructBaseInput.md)\>

## Type declaration

### delta

> **delta**: [`DeltaOrderHandlers`](DeltaOrderHandlers.md)\<`TxResponse`\>

### limitOrders

> **limitOrders**: [`LimitOrderHandlers`](LimitOrderHandlers.md)\<`TxResponse`\>

### nftOrders

> **nftOrders**: [`NFTOrderHandlers`](NFTOrderHandlers.md)\<`TxResponse`\>

### quote

> **quote**: [`GetQuoteFunctions`](GetQuoteFunctions.md)

### swap

> **swap**: [`SwapSDKMethods`](SwapSDKMethods.md)\<`TxResponse`\>

## Type Parameters

• **TxResponse**

## Defined in

[src/sdk/full.ts:22](https://github.com/paraswap/paraswap-sdk/blob/master/src/sdk/full.ts#L22)
