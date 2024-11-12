[**@paraswap/sdk**](../README.md) • **Docs**

***

[@paraswap/sdk](../globals.md) / BuildOrderDataInput

# Interface: BuildOrderDataInput

## Properties

### AppVersion

> **AppVersion**: [`ParaSwapVersion`](../type-aliases/ParaSwapVersion.md)

#### Defined in

[src/methods/limitOrders/helpers/buildOrderData.ts:38](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/buildOrderData.ts#L38)

***

### AugustusAddress

> **AugustusAddress**: `string`

#### Defined in

[src/methods/limitOrders/helpers/buildOrderData.ts:37](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/buildOrderData.ts#L37)

***

### chainId

> **chainId**: `number`

#### Defined in

[src/methods/limitOrders/helpers/buildOrderData.ts:22](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/buildOrderData.ts#L22)

***

### contractTaker?

> `optional` **contractTaker**: `string`

#### Description

contract executor (Augustus or similar) that is allowed to execute the order, gois in Order.taker

#### Defined in

[src/methods/limitOrders/helpers/buildOrderData.ts:35](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/buildOrderData.ts#L35)

***

### expiry

> **expiry**: `number`

#### Defined in

[src/methods/limitOrders/helpers/buildOrderData.ts:25](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/buildOrderData.ts#L25)

***

### maker

> **maker**: `string`

#### Defined in

[src/methods/limitOrders/helpers/buildOrderData.ts:30](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/buildOrderData.ts#L30)

***

### makerAmount

> **makerAmount**: `string`

#### Defined in

[src/methods/limitOrders/helpers/buildOrderData.ts:28](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/buildOrderData.ts#L28)

***

### makerAsset

> **makerAsset**: `string`

#### Defined in

[src/methods/limitOrders/helpers/buildOrderData.ts:26](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/buildOrderData.ts#L26)

***

### nonce?

> `optional` **nonce**: `number`

#### Defined in

[src/methods/limitOrders/helpers/buildOrderData.ts:24](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/buildOrderData.ts#L24)

***

### taker?

> `optional` **taker**: `string`

#### Description

actual user taker which will go into nonceAndMeta

#### Defined in

[src/methods/limitOrders/helpers/buildOrderData.ts:33](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/buildOrderData.ts#L33)

***

### takerAmount

> **takerAmount**: `string`

#### Defined in

[src/methods/limitOrders/helpers/buildOrderData.ts:29](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/buildOrderData.ts#L29)

***

### takerAsset

> **takerAsset**: `string`

#### Defined in

[src/methods/limitOrders/helpers/buildOrderData.ts:27](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/buildOrderData.ts#L27)

***

### verifyingContract

> **verifyingContract**: `string`

#### Defined in

[src/methods/limitOrders/helpers/buildOrderData.ts:23](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/buildOrderData.ts#L23)
