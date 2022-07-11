[@paraswap/sdk](../README.md) / [Exports](../modules.md) / OrderInfoForBatchFill

# Interface: OrderInfoForBatchFill

## Table of contents

### Properties

- [order](OrderInfoForBatchFill.md#order)
- [permitMakerAsset](OrderInfoForBatchFill.md#permitmakerasset)
- [permitTakerAsset](OrderInfoForBatchFill.md#permittakerasset)
- [signature](OrderInfoForBatchFill.md#signature)
- [takerTokenFillAmount](OrderInfoForBatchFill.md#takertokenfillamount)

## Properties

### order

• **order**: [`OrderData`](../modules.md#orderdata)

#### Defined in

[src/methods/limitOrders/fillOrders.ts:24](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/typedocs/src/methods/limitOrders/fillOrders.ts#L24)

___

### permitMakerAsset

• `Optional` **permitMakerAsset**: `string`

**`Description`**

for permissible maker's Token, '0x' by default === no permit used

#### Defined in

[src/methods/limitOrders/fillOrders.ts:31](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/typedocs/src/methods/limitOrders/fillOrders.ts#L31)

___

### permitTakerAsset

• `Optional` **permitTakerAsset**: `string`

**`Description`**

for permissible taker's Token, '0x' by default === no permit used

#### Defined in

[src/methods/limitOrders/fillOrders.ts:29](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/typedocs/src/methods/limitOrders/fillOrders.ts#L29)

___

### signature

• **signature**: `string`

#### Defined in

[src/methods/limitOrders/fillOrders.ts:25](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/typedocs/src/methods/limitOrders/fillOrders.ts#L25)

___

### takerTokenFillAmount

• `Optional` **takerTokenFillAmount**: `string`

**`Description`**

for partially filling an order, will fully fill by default

#### Defined in

[src/methods/limitOrders/fillOrders.ts:27](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/typedocs/src/methods/limitOrders/fillOrders.ts#L27)
