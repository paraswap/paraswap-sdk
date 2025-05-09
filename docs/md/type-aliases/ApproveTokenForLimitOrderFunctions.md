[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / ApproveTokenForLimitOrderFunctions

# Type Alias: ApproveTokenForLimitOrderFunctions\<T\>

> **ApproveTokenForLimitOrderFunctions**\<`T`\>: `object`

## Type Parameters

• **T**

## Type declaration

### approveMakerTokenForLimitOrder

> **approveMakerTokenForLimitOrder**: [`ApproveToken`](../-internal-/type-aliases/ApproveToken.md)\<`T`\>

#### Description

approving AugustusRFQ as spender for makerAsset

### approveTakerTokenForFillingP2POrderDirectly

> **approveTakerTokenForFillingP2POrderDirectly**: [`ApproveToken`](../-internal-/type-aliases/ApproveToken.md)\<`T`\>

#### Description

approving AugustusRFQ as spender for takerAsset to call SDK.fillOrderDirectly

### approveTakerTokenForLimitOrder

> **approveTakerTokenForLimitOrder**: [`ApproveToken`](../-internal-/type-aliases/ApproveToken.md)\<`T`\>

#### Description

approving AugustusSwapper as spender for takerAsset for Limit Orders that will be executed through it

## Defined in

[src/methods/limitOrders/approveForOrder.ts:6](https://github.com/VeloraDEX/paraswap-sdk/blob/feat/velora/src/methods/limitOrders/approveForOrder.ts#L6)
