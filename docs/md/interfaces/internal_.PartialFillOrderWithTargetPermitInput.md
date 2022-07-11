[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / PartialFillOrderWithTargetPermitInput

# Interface: PartialFillOrderWithTargetPermitInput

[<internal>](../modules/internal_.md).PartialFillOrderWithTargetPermitInput

## Hierarchy

- [`PartialFillOrderInput`](PartialFillOrderInput.md)

  ↳ **`PartialFillOrderWithTargetPermitInput`**

## Table of contents

### Properties

- [fillAmount](internal_.PartialFillOrderWithTargetPermitInput.md#fillamount)
- [orderData](internal_.PartialFillOrderWithTargetPermitInput.md#orderdata)
- [permitMakerAsset](internal_.PartialFillOrderWithTargetPermitInput.md#permitmakerasset)
- [permitTakerAsset](internal_.PartialFillOrderWithTargetPermitInput.md#permittakerasset)
- [signature](internal_.PartialFillOrderWithTargetPermitInput.md#signature)
- [target](internal_.PartialFillOrderWithTargetPermitInput.md#target)

## Properties

### fillAmount

• **fillAmount**: `string`

#### Inherited from

[PartialFillOrderInput](PartialFillOrderInput.md).[fillAmount](PartialFillOrderInput.md#fillamount)

#### Defined in

[src/methods/limitOrders/fillOrders.ts:47](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/typedocs/src/methods/limitOrders/fillOrders.ts#L47)

___

### orderData

• **orderData**: [`OrderData`](../modules.md#orderdata)

#### Inherited from

[PartialFillOrderInput](PartialFillOrderInput.md).[orderData](PartialFillOrderInput.md#orderdata)

#### Defined in

[src/methods/limitOrders/fillOrders.ts:13](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/typedocs/src/methods/limitOrders/fillOrders.ts#L13)

___

### permitMakerAsset

• `Optional` **permitMakerAsset**: `string`

**`Description`**

for permissible maker's Token, '0x' by default === no permit used

#### Defined in

[src/methods/limitOrders/fillOrders.ts:63](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/typedocs/src/methods/limitOrders/fillOrders.ts#L63)

___

### permitTakerAsset

• `Optional` **permitTakerAsset**: `string`

**`Description`**

for permissible taker's Token, '0x' by default === no permit used

#### Defined in

[src/methods/limitOrders/fillOrders.ts:61](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/typedocs/src/methods/limitOrders/fillOrders.ts#L61)

___

### signature

• **signature**: `string`

#### Inherited from

[PartialFillOrderInput](PartialFillOrderInput.md).[signature](PartialFillOrderInput.md#signature)

#### Defined in

[src/methods/limitOrders/fillOrders.ts:14](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/typedocs/src/methods/limitOrders/fillOrders.ts#L14)

___

### target

• **target**: `string`

**`Description`**

address to send tokens to. Pass current account

#### Defined in

[src/methods/limitOrders/fillOrders.ts:59](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/typedocs/src/methods/limitOrders/fillOrders.ts#L59)
