[**@paraswap/sdk**](../README.md) • **Docs**

***

[@paraswap/sdk](../globals.md) / LimitOrderFromApi

# Type Alias: LimitOrderFromApi

> **LimitOrderFromApi**: `object`

## Type declaration

### chainId

> **chainId**: `number`

### createdAt

> **createdAt**: `number`

### expiry

> **expiry**: `number`

### fillableBalance

> **fillableBalance**: `string`

### maker

> **maker**: `string`

### makerAmount

> **makerAmount**: `string`

### makerAsset

> **makerAsset**: `string`

### makerBalance

> **makerBalance**: `string`

### nonceAndMeta

> **nonceAndMeta**: `string`

### orderHash

> **orderHash**: `string`

### permitMakerAsset

> **permitMakerAsset**: `null` \| `string`

### reservedBalance

> **reservedBalance**: `string`

### signature

> **signature**: `string`

### state

> **state**: [`LimitOrderState`](LimitOrderState.md)

### swappableBalance

> **swappableBalance**: `string`

### taker

> **taker**: `string`

### takerAmount

> **takerAmount**: `string`

### takerAsset

> **takerAsset**: `string`

### takerFromMeta

> **takerFromMeta**: `string`

### transactionHash

> **transactionHash**: `null` \| `string`

#### Description

transaction with the last event pertaining to the order: OrderFilled or OrderCancelled

### type

> **type**: [`LimitOrderType`](LimitOrderType.md)

### updatedAt

> **updatedAt**: `number`

## Defined in

[src/methods/limitOrders/helpers/types.ts:44](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/types.ts#L44)
