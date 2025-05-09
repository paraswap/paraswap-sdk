[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / InferWithTxResponse

# Type Alias: InferWithTxResponse\<Config, Funcs\>

> **InferWithTxResponse**\<`Config`, `Funcs`\>: `Config` *extends* [`SDKConfig`](../../type-aliases/SDKConfig.md)\<infer TxResponse\> ? [`IntersectionOfReturns`](IntersectionOfReturns.md)\<`Funcs`\> *extends* [`Record`](Record.md)\<`string`, `any`\> ? [`MergeExtendableRecursively`](MergeExtendableRecursively.md)\<[`IntersectionOfReturns`](IntersectionOfReturns.md)\<`Funcs`\>, [[`ApproveTokenFunctions`](../../type-aliases/ApproveTokenFunctions.md)\<`TxResponse`\>, [`CancelLimitOrderFunctions`](../../type-aliases/CancelLimitOrderFunctions.md)\<`TxResponse`\>, [`FillOrderDirectlyFunctions`](../../type-aliases/FillOrderDirectlyFunctions.md)\<`TxResponse`\>, [`ApproveTokenForLimitOrderFunctions`](../../type-aliases/ApproveTokenForLimitOrderFunctions.md)\<`TxResponse`\>, [`CancelNFTOrderFunctions`](../../type-aliases/CancelNFTOrderFunctions.md)\<`TxResponse`\>, [`ApproveTokenForNFTOrderFunctions`](../../type-aliases/ApproveTokenForNFTOrderFunctions.md)\<`TxResponse`\>, [`ApproveTokenForDeltaFunctions`](../../type-aliases/ApproveTokenForDeltaFunctions.md)\<`TxResponse`\>]\> : [`IntersectionOfReturns`](IntersectionOfReturns.md)\<`Funcs`\> : [`IntersectionOfReturns`](IntersectionOfReturns.md)\<`Funcs`\>

## Type Parameters

• **Config** *extends* [`ConstructBaseInput`](../interfaces/ConstructBaseInput.md)

• **Funcs** *extends* [[`SDKFunction`](SDKFunction.md)\<`Config`\>, `...SDKFunction<Config>[]`]

## Defined in

[src/sdk/partial.ts:36](https://github.com/VeloraDEX/paraswap-sdk/blob/feat/velora/src/sdk/partial.ts#L36)
