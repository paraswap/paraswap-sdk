[@paraswap/sdk](../README.md) / [Exports](../modules.md) / BuildSwapAndNFTOrderTxInput

# Interface: BuildSwapAndNFTOrderTxInput

Construct a type with the properties of T except for those in type K.

## Hierarchy

- [`Omit`](../modules/internal_.md#omit)<[`BuildTxInputBase`](internal_.BuildTxInputBase.md), ``"destAmount"``\>

  ↳ **`BuildSwapAndNFTOrderTxInput`**

## Table of contents

### Properties

- [deadline](BuildSwapAndNFTOrderTxInput.md#deadline)
- [destDecimals](BuildSwapAndNFTOrderTxInput.md#destdecimals)
- [destToken](BuildSwapAndNFTOrderTxInput.md#desttoken)
- [orders](BuildSwapAndNFTOrderTxInput.md#orders)
- [partner](BuildSwapAndNFTOrderTxInput.md#partner)
- [partnerAddress](BuildSwapAndNFTOrderTxInput.md#partneraddress)
- [partnerFeeBps](BuildSwapAndNFTOrderTxInput.md#partnerfeebps)
- [permit](BuildSwapAndNFTOrderTxInput.md#permit)
- [priceRoute](BuildSwapAndNFTOrderTxInput.md#priceroute)
- [receiver](BuildSwapAndNFTOrderTxInput.md#receiver)
- [srcAmount](BuildSwapAndNFTOrderTxInput.md#srcamount)
- [srcDecimals](BuildSwapAndNFTOrderTxInput.md#srcdecimals)
- [srcToken](BuildSwapAndNFTOrderTxInput.md#srctoken)
- [userAddress](BuildSwapAndNFTOrderTxInput.md#useraddress)

## Properties

### deadline

• `Optional` **deadline**: `string`

#### Inherited from

Omit.deadline

#### Defined in

[src/methods/swap/transaction.ts:55](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/remove_deprecated/src/methods/swap/transaction.ts#L55)

___

### destDecimals

• `Optional` **destDecimals**: `number`

#### Inherited from

Omit.destDecimals

#### Defined in

[src/methods/swap/transaction.ts:53](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/remove_deprecated/src/methods/swap/transaction.ts#L53)

___

### destToken

• **destToken**: `string`

#### Inherited from

Omit.destToken

#### Defined in

[src/methods/swap/transaction.ts:42](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/remove_deprecated/src/methods/swap/transaction.ts#L42)

___

### orders

• **orders**: [`SwappableNFTOrder`](../modules.md#swappablenftorder)[]

#### Defined in

[src/methods/swap/transaction.ts:95](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/remove_deprecated/src/methods/swap/transaction.ts#L95)

___

### partner

• `Optional` **partner**: `string`

#### Inherited from

Omit.partner

#### Defined in

[src/methods/swap/transaction.ts:48](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/remove_deprecated/src/methods/swap/transaction.ts#L48)

___

### partnerAddress

• `Optional` **partnerAddress**: `string`

#### Inherited from

Omit.partnerAddress

#### Defined in

[src/methods/swap/transaction.ts:49](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/remove_deprecated/src/methods/swap/transaction.ts#L49)

___

### partnerFeeBps

• `Optional` **partnerFeeBps**: `number`

#### Inherited from

Omit.partnerFeeBps

#### Defined in

[src/methods/swap/transaction.ts:50](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/remove_deprecated/src/methods/swap/transaction.ts#L50)

___

### permit

• `Optional` **permit**: `string`

#### Inherited from

Omit.permit

#### Defined in

[src/methods/swap/transaction.ts:54](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/remove_deprecated/src/methods/swap/transaction.ts#L54)

___

### priceRoute

• **priceRoute**: [`OptimalRate`](../modules.md#optimalrate)

#### Defined in

[src/methods/swap/transaction.ts:94](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/remove_deprecated/src/methods/swap/transaction.ts#L94)

___

### receiver

• `Optional` **receiver**: `string`

#### Inherited from

Omit.receiver

#### Defined in

[src/methods/swap/transaction.ts:51](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/remove_deprecated/src/methods/swap/transaction.ts#L51)

___

### srcAmount

• **srcAmount**: `string`

#### Inherited from

Omit.srcAmount

#### Defined in

[src/methods/swap/transaction.ts:43](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/remove_deprecated/src/methods/swap/transaction.ts#L43)

___

### srcDecimals

• `Optional` **srcDecimals**: `number`

#### Inherited from

Omit.srcDecimals

#### Defined in

[src/methods/swap/transaction.ts:52](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/remove_deprecated/src/methods/swap/transaction.ts#L52)

___

### srcToken

• **srcToken**: `string`

#### Inherited from

Omit.srcToken

#### Defined in

[src/methods/swap/transaction.ts:41](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/remove_deprecated/src/methods/swap/transaction.ts#L41)

___

### userAddress

• **userAddress**: `string`

#### Inherited from

Omit.userAddress

#### Defined in

[src/methods/swap/transaction.ts:47](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/remove_deprecated/src/methods/swap/transaction.ts#L47)
