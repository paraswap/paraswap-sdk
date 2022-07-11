[@paraswap/sdk](../README.md) / [Exports](../modules.md) / BuildSwapAndLimitOrderTxInput

# Interface: BuildSwapAndLimitOrderTxInput

Construct a type with the properties of T except for those in type K.

## Hierarchy

- [`Omit`](../modules/internal_.md#omit)<[`BuildTxInputBase`](internal_.BuildTxInputBase.md), ``"destAmount"``\>

  ↳ **`BuildSwapAndLimitOrderTxInput`**

## Table of contents

### Properties

- [deadline](BuildSwapAndLimitOrderTxInput.md#deadline)
- [destDecimals](BuildSwapAndLimitOrderTxInput.md#destdecimals)
- [destToken](BuildSwapAndLimitOrderTxInput.md#desttoken)
- [orders](BuildSwapAndLimitOrderTxInput.md#orders)
- [partner](BuildSwapAndLimitOrderTxInput.md#partner)
- [partnerAddress](BuildSwapAndLimitOrderTxInput.md#partneraddress)
- [partnerFeeBps](BuildSwapAndLimitOrderTxInput.md#partnerfeebps)
- [permit](BuildSwapAndLimitOrderTxInput.md#permit)
- [priceRoute](BuildSwapAndLimitOrderTxInput.md#priceroute)
- [receiver](BuildSwapAndLimitOrderTxInput.md#receiver)
- [srcAmount](BuildSwapAndLimitOrderTxInput.md#srcamount)
- [srcDecimals](BuildSwapAndLimitOrderTxInput.md#srcdecimals)
- [srcToken](BuildSwapAndLimitOrderTxInput.md#srctoken)
- [userAddress](BuildSwapAndLimitOrderTxInput.md#useraddress)

## Properties

### deadline

• `Optional` **deadline**: `string`

#### Inherited from

Omit.deadline

#### Defined in

[src/methods/swap/transaction.ts:55](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/typedocs/src/methods/swap/transaction.ts#L55)

___

### destDecimals

• **destDecimals**: `number`

#### Overrides

Omit.destDecimals

#### Defined in

[src/methods/swap/transaction.ts:87](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/typedocs/src/methods/swap/transaction.ts#L87)

___

### destToken

• **destToken**: `string`

#### Inherited from

Omit.destToken

#### Defined in

[src/methods/swap/transaction.ts:42](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/typedocs/src/methods/swap/transaction.ts#L42)

___

### orders

• **orders**: [`SwappableOrder`](../modules.md#swappableorder)[]

#### Defined in

[src/methods/swap/transaction.ts:86](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/typedocs/src/methods/swap/transaction.ts#L86)

___

### partner

• `Optional` **partner**: `string`

#### Inherited from

Omit.partner

#### Defined in

[src/methods/swap/transaction.ts:48](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/typedocs/src/methods/swap/transaction.ts#L48)

___

### partnerAddress

• `Optional` **partnerAddress**: `string`

#### Inherited from

Omit.partnerAddress

#### Defined in

[src/methods/swap/transaction.ts:49](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/typedocs/src/methods/swap/transaction.ts#L49)

___

### partnerFeeBps

• `Optional` **partnerFeeBps**: `number`

#### Inherited from

Omit.partnerFeeBps

#### Defined in

[src/methods/swap/transaction.ts:50](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/typedocs/src/methods/swap/transaction.ts#L50)

___

### permit

• `Optional` **permit**: `string`

#### Inherited from

Omit.permit

#### Defined in

[src/methods/swap/transaction.ts:54](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/typedocs/src/methods/swap/transaction.ts#L54)

___

### priceRoute

• **priceRoute**: [`OptimalRate`](../modules.md#optimalrate)

#### Defined in

[src/methods/swap/transaction.ts:85](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/typedocs/src/methods/swap/transaction.ts#L85)

___

### receiver

• `Optional` **receiver**: `string`

#### Inherited from

Omit.receiver

#### Defined in

[src/methods/swap/transaction.ts:51](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/typedocs/src/methods/swap/transaction.ts#L51)

___

### srcAmount

• **srcAmount**: `string`

#### Inherited from

Omit.srcAmount

#### Defined in

[src/methods/swap/transaction.ts:43](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/typedocs/src/methods/swap/transaction.ts#L43)

___

### srcDecimals

• `Optional` **srcDecimals**: `number`

#### Inherited from

Omit.srcDecimals

#### Defined in

[src/methods/swap/transaction.ts:52](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/typedocs/src/methods/swap/transaction.ts#L52)

___

### srcToken

• **srcToken**: `string`

#### Inherited from

Omit.srcToken

#### Defined in

[src/methods/swap/transaction.ts:41](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/typedocs/src/methods/swap/transaction.ts#L41)

___

### userAddress

• **userAddress**: `string`

#### Inherited from

Omit.userAddress

#### Defined in

[src/methods/swap/transaction.ts:47](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/typedocs/src/methods/swap/transaction.ts#L47)
