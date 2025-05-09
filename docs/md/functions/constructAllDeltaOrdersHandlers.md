[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / constructAllDeltaOrdersHandlers

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

[src/methods/delta/index.ts:105](https://github.com/VeloraDEX/paraswap-sdk/blob/feat/velora/src/methods/delta/index.ts#L105)
