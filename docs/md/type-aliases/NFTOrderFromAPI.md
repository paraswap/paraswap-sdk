[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / NFTOrderFromAPI

# Type Alias: NFTOrderFromAPI

> **NFTOrderFromAPI**: [`NFTOrderToSend`](NFTOrderToSend.md) & `object`

## Type declaration

### chainId

> **chainId**: `number`

### createdAt

> **createdAt**: `number`

### fillableBalance

> **fillableBalance**: `string`

### makerAsset

> **makerAsset**: [`Address`](Address.md)

### makerAssetType

> **makerAssetType**: [`AssetTypeVariant`](AssetTypeVariant.md)

### makerBalance

> **makerBalance**: `string`

### orderHash

> **orderHash**: `string`

### permitMakerAsset

> **permitMakerAsset**: `null` \| `string`

### state

> **state**: [`NFTOrderState`](NFTOrderState.md)

### takerAsset

> **takerAsset**: [`Address`](Address.md)

### takerAssetType

> **takerAssetType**: [`AssetTypeVariant`](AssetTypeVariant.md)

### takerFromMeta

> **takerFromMeta**: `string`

### transactionHash

> **transactionHash**: `null` \| `string`

#### Description

transaction with the last event pertaining to the order: OrderFilled or OrderCancelled

### type

> **type**: [`NFTOrderType`](NFTOrderType.md)

### updatedAt

> **updatedAt**: `number`

## Defined in

[src/methods/nftOrders/helpers/types.ts:22](https://github.com/VeloraDEX/paraswap-sdk/blob/feat/velora/src/methods/nftOrders/helpers/types.ts#L22)
