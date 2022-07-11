[@paraswap/sdk](../README.md) / [Exports](../modules.md) / BuildLimitOrderTxInput

# Interface: BuildLimitOrderTxInput

Construct a type with the properties of T except for those in type K.

## Hierarchy

- [`Omit`](../modules/internal_.md#omit)<[`BuildTxInputBase`](internal_.BuildTxInputBase.md), ``"destAmount"``\>

  ↳ **`BuildLimitOrderTxInput`**

## Table of contents

### Properties

- [deadline](BuildLimitOrderTxInput.md#deadline)
- [destDecimals](BuildLimitOrderTxInput.md#destdecimals)
- [destToken](BuildLimitOrderTxInput.md#desttoken)
- [orders](BuildLimitOrderTxInput.md#orders)
- [partner](BuildLimitOrderTxInput.md#partner)
- [partnerAddress](BuildLimitOrderTxInput.md#partneraddress)
- [partnerFeeBps](BuildLimitOrderTxInput.md#partnerfeebps)
- [permit](BuildLimitOrderTxInput.md#permit)
- [receiver](BuildLimitOrderTxInput.md#receiver)
- [srcAmount](BuildLimitOrderTxInput.md#srcamount)
- [srcDecimals](BuildLimitOrderTxInput.md#srcdecimals)
- [srcToken](BuildLimitOrderTxInput.md#srctoken)
- [userAddress](BuildLimitOrderTxInput.md#useraddress)

## Properties

### deadline

• `Optional` **deadline**: `string`

#### Inherited from

Omit.deadline

#### Defined in

[src/methods/swap/transaction.ts:55](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/remove_deprecated/src/methods/swap/transaction.ts#L55)

___

### destDecimals

• **destDecimals**: `number`

#### Overrides

Omit.destDecimals

#### Defined in

[src/methods/swap/transaction.ts:69](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/remove_deprecated/src/methods/swap/transaction.ts#L69)

___

### destToken

• **destToken**: `string`

#### Inherited from

Omit.destToken

#### Defined in

[src/methods/swap/transaction.ts:42](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/remove_deprecated/src/methods/swap/transaction.ts#L42)

___

### orders

• **orders**: [`SwappableOrder`](../modules.md#swappableorder)[]

#### Defined in

[src/methods/swap/transaction.ts:67](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/remove_deprecated/src/methods/swap/transaction.ts#L67)

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

• **srcDecimals**: `number`

#### Overrides

Omit.srcDecimals

#### Defined in

[src/methods/swap/transaction.ts:68](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/remove_deprecated/src/methods/swap/transaction.ts#L68)

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
