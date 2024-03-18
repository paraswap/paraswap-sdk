[@paraswap/sdk](../README.md) / [Exports](../modules.md) / BuildOrderDataInput

# Interface: BuildOrderDataInput

## Table of contents

### Properties

- [AppVersion](BuildOrderDataInput.md#appversion)
- [AugustusAddress](BuildOrderDataInput.md#augustusaddress)
- [chainId](BuildOrderDataInput.md#chainid)
- [contractTaker](BuildOrderDataInput.md#contracttaker)
- [expiry](BuildOrderDataInput.md#expiry)
- [maker](BuildOrderDataInput.md#maker)
- [makerAmount](BuildOrderDataInput.md#makeramount)
- [makerAsset](BuildOrderDataInput.md#makerasset)
- [nonce](BuildOrderDataInput.md#nonce)
- [taker](BuildOrderDataInput.md#taker)
- [takerAmount](BuildOrderDataInput.md#takeramount)
- [takerAsset](BuildOrderDataInput.md#takerasset)
- [verifyingContract](BuildOrderDataInput.md#verifyingcontract)

## Properties

### AppVersion

• **AppVersion**: [`ParaSwapVersion`](../modules.md#paraswapversion)

#### Defined in

[src/methods/limitOrders/helpers/buildOrderData.ts:38](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/buildOrderData.ts#L38)

___

### AugustusAddress

• **AugustusAddress**: `string`

#### Defined in

[src/methods/limitOrders/helpers/buildOrderData.ts:37](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/buildOrderData.ts#L37)

___

### chainId

• **chainId**: `number`

#### Defined in

[src/methods/limitOrders/helpers/buildOrderData.ts:22](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/buildOrderData.ts#L22)

___

### contractTaker

• `Optional` **contractTaker**: `string`

**`Description`**

contract executor (Augustus or similar) that is allowed to execute the order, gois in Order.taker

#### Defined in

[src/methods/limitOrders/helpers/buildOrderData.ts:35](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/buildOrderData.ts#L35)

___

### expiry

• **expiry**: `number`

#### Defined in

[src/methods/limitOrders/helpers/buildOrderData.ts:25](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/buildOrderData.ts#L25)

___

### maker

• **maker**: `string`

#### Defined in

[src/methods/limitOrders/helpers/buildOrderData.ts:30](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/buildOrderData.ts#L30)

___

### makerAmount

• **makerAmount**: `string`

#### Defined in

[src/methods/limitOrders/helpers/buildOrderData.ts:28](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/buildOrderData.ts#L28)

___

### makerAsset

• **makerAsset**: `string`

#### Defined in

[src/methods/limitOrders/helpers/buildOrderData.ts:26](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/buildOrderData.ts#L26)

___

### nonce

• `Optional` **nonce**: `number`

#### Defined in

[src/methods/limitOrders/helpers/buildOrderData.ts:24](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/buildOrderData.ts#L24)

___

### taker

• `Optional` **taker**: `string`

**`Description`**

actual user taker which will go into nonceAndMeta

#### Defined in

[src/methods/limitOrders/helpers/buildOrderData.ts:33](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/buildOrderData.ts#L33)

___

### takerAmount

• **takerAmount**: `string`

#### Defined in

[src/methods/limitOrders/helpers/buildOrderData.ts:29](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/buildOrderData.ts#L29)

___

### takerAsset

• **takerAsset**: `string`

#### Defined in

[src/methods/limitOrders/helpers/buildOrderData.ts:27](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/buildOrderData.ts#L27)

___

### verifyingContract

• **verifyingContract**: `string`

#### Defined in

[src/methods/limitOrders/helpers/buildOrderData.ts:23](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/buildOrderData.ts#L23)
