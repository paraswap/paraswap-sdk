[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / ApproveTokenForNFTOrderFunctions

# Type Alias: ApproveTokenForNFTOrderFunctions\<T\>

> **ApproveTokenForNFTOrderFunctions**\<`T`\>: `object`

## Type Parameters

• **T**

## Type declaration

### approveERC20ForNFTOrder

> **approveERC20ForNFTOrder**: [`ApproveToken`](../-internal-/type-aliases/ApproveToken.md)\<`T`\>

#### Description

approving AugustusSwapper as spender for takerAsset (ERC20) for Limit Orders that will be executed through it

### approveNFTForNFTOrder

> **approveNFTForNFTOrder**: [`ApproveNFT`](../-internal-/type-aliases/ApproveNFT.md)\<`T`\>

#### Description

approving AugustusRFQ as spender for makerAsset (NFT)

## Defined in

[src/methods/nftOrders/approveForOrder.ts:18](https://github.com/VeloraDEX/paraswap-sdk/blob/feat/velora/src/methods/nftOrders/approveForOrder.ts#L18)
