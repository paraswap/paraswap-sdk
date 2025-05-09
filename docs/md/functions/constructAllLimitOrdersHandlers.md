[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / constructAllLimitOrdersHandlers

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

[src/methods/limitOrders/index.ts:121](https://github.com/VeloraDEX/paraswap-sdk/blob/feat/velora/src/methods/limitOrders/index.ts#L121)
