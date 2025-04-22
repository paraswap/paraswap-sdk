[**@paraswap/sdk**](../README.md) • **Docs**

***

[@paraswap/sdk](../globals.md) / constructAllDeltaOrdersHandlers

# Function: constructAllDeltaOrdersHandlers()

> **constructAllDeltaOrdersHandlers**\<`TxResponse`\>(`options`): [`DeltaOrderHandlers`](../type-aliases/DeltaOrderHandlers.md)\<`TxResponse`\>

## Type Parameters

• **TxResponse**

## Parameters

• **options**: [`ConstructProviderFetchInput`](../interfaces/ConstructProviderFetchInput.md)\<`TxResponse`, `"transactCall"` \| `"signTypedDataCall"`\>

## Returns

[`DeltaOrderHandlers`](../type-aliases/DeltaOrderHandlers.md)\<`TxResponse`\>

## Description

construct SDK with every Delta Order-related method, fetching from API and Order signing

## Defined in

[src/methods/delta/index.ts:100](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/index.ts#L100)
