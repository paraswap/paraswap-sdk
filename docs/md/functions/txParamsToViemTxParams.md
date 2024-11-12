[**@paraswap/sdk**](../README.md) • **Docs**

***

[@paraswap/sdk](../globals.md) / txParamsToViemTxParams

# Function: txParamsToViemTxParams()

> **txParamsToViemTxParams**(`txParams`): [`ViemTxParams`](../-internal-/type-aliases/ViemTxParams.md)

## Parameters

• **txParams**: [`Omit`](../-internal-/type-aliases/Omit.md)\<[`Omit`](../-internal-/type-aliases/Omit.md)\<[`TransactionParams`](../interfaces/TransactionParams.md), `"data"` \| `"value"`\> & [`Partial`](../-internal-/type-aliases/Partial.md)\<[`Pick`](../-internal-/type-aliases/Pick.md)\<[`TransactionParams`](../interfaces/TransactionParams.md), `"data"` \| `"value"`\>\>, `"chainId"` \| `"from"`\>

## Returns

[`ViemTxParams`](../-internal-/type-aliases/ViemTxParams.md)

## Defined in

[src/helpers/providers/viem.ts:161](https://github.com/paraswap/paraswap-sdk/blob/master/src/helpers/providers/viem.ts#L161)
