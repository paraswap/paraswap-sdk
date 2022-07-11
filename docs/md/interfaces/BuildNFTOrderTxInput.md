[@paraswap/sdk](../README.md) / [Exports](../modules.md) / BuildNFTOrderTxInput

# Interface: BuildNFTOrderTxInput

Construct a type with the properties of T except for those in type K.

## Hierarchy

- [`Omit`](../modules/internal_.md#omit)<[`BuildTxInputBase`](internal_.BuildTxInputBase.md), ``"destAmount"`` \| ``"destDecimals"``\>

  ↳ **`BuildNFTOrderTxInput`**

## Table of contents

### Properties

- [deadline](BuildNFTOrderTxInput.md#deadline)
- [destToken](BuildNFTOrderTxInput.md#desttoken)
- [orders](BuildNFTOrderTxInput.md#orders)
- [partner](BuildNFTOrderTxInput.md#partner)
- [partnerAddress](BuildNFTOrderTxInput.md#partneraddress)
- [partnerFeeBps](BuildNFTOrderTxInput.md#partnerfeebps)
- [permit](BuildNFTOrderTxInput.md#permit)
- [receiver](BuildNFTOrderTxInput.md#receiver)
- [srcAmount](BuildNFTOrderTxInput.md#srcamount)
- [srcDecimals](BuildNFTOrderTxInput.md#srcdecimals)
- [srcToken](BuildNFTOrderTxInput.md#srctoken)
- [userAddress](BuildNFTOrderTxInput.md#useraddress)

## Properties

### deadline

• `Optional` **deadline**: `string`

#### Inherited from

Omit.deadline

#### Defined in

[src/methods/swap/transaction.ts:55](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/typedocs/src/methods/swap/transaction.ts#L55)

___

### destToken

• **destToken**: `string`

#### Inherited from

Omit.destToken

#### Defined in

[src/methods/swap/transaction.ts:42](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/typedocs/src/methods/swap/transaction.ts#L42)

___

### orders

• **orders**: [`SwappableNFTOrder`](../modules.md#swappablenftorder)[]

#### Defined in

[src/methods/swap/transaction.ts:77](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/typedocs/src/methods/swap/transaction.ts#L77)

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

• **srcDecimals**: `number`

#### Overrides

Omit.srcDecimals

#### Defined in

[src/methods/swap/transaction.ts:78](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/typedocs/src/methods/swap/transaction.ts#L78)

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
