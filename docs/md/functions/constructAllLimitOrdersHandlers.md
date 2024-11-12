[**@paraswap/sdk**](../README.md) • **Docs**

***

[@paraswap/sdk](../globals.md) / constructAllLimitOrdersHandlers

# Function: constructAllLimitOrdersHandlers()

> **constructAllLimitOrdersHandlers**\<`TxResponse`\>(`options`): [`LimitOrderHandlers`](../type-aliases/LimitOrderHandlers.md)\<`TxResponse`\>

## Type Parameters

• **TxResponse**

## Parameters

• **options**: [`ConstructProviderFetchInput`](../interfaces/ConstructProviderFetchInput.md)\<`TxResponse`, `"staticCall"` \| `"transactCall"` \| `"signTypedDataCall"`\>

## Returns

[`LimitOrderHandlers`](../type-aliases/LimitOrderHandlers.md)\<`TxResponse`\>

## Description

construct SDK with every LimitOrders-related method, fetching from API and contract calls

## Defined in

[src/methods/limitOrders/index.ts:118](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/index.ts#L118)
