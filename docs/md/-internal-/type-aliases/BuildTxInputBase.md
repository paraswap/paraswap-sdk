[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / BuildTxInputBase

# Type Alias: BuildTxInputBase

> **BuildTxInputBase**: `object`

## Type declaration

### deadline?

> `optional` **deadline**: `string`

### destDecimals?

> `optional` **destDecimals**: `number`

### destToken

> **destToken**: [`Address`](../../type-aliases/Address.md)

### isCapSurplus?

> `optional` **isCapSurplus**: `boolean`

#### Description

Cap the surplus at 1% maximum. Default: true

### isDirectFeeTransfer?

> `optional` **isDirectFeeTransfer**: `boolean`

#### Description

If fees should be sent directly to the partner instead of registering them on FeeClaimer. v6 only. Default: false

### isSurplusToUser?

> `optional` **isSurplusToUser**: `boolean`

#### Description

If user should receive surplus instead of partner. Default: false

### partner?

> `optional` **partner**: `string`

### partnerAddress?

> `optional` **partnerAddress**: `string`

### partnerFeeBps?

> `optional` **partnerFeeBps**: `number`

### permit?

> `optional` **permit**: `string`

### ~~positiveSlippageToUser?~~

> `optional` **positiveSlippageToUser**: `boolean`

#### Deprecated

Use "takeSurplus" instead. Positive slippage goes to user, true by default

### receiver?

> `optional` **receiver**: [`Address`](../../type-aliases/Address.md)

### referrer?

> `optional` **referrer**: `string`

#### Description

used with referral link

### srcDecimals?

> `optional` **srcDecimals**: `number`

### srcToken

> **srcToken**: [`Address`](../../type-aliases/Address.md)

### takeSurplus?

> `optional` **takeSurplus**: `boolean`

#### Description

Set to true to take positive slippage. Works with partnerAddress. Default: false

### txOrigin?

> `optional` **txOrigin**: `string`

#### Description

Whenever msg.sender (`userAddress`) i.e. address calling the Velora contract is different than the address sending the transaction, `txOrigin` must be passed along with `userAddress`

### userAddress

> **userAddress**: [`Address`](../../type-aliases/Address.md)

## Defined in

[src/methods/swap/transaction.ts:64](https://github.com/VeloraDEX/paraswap-sdk/blob/feat/velora/src/methods/swap/transaction.ts#L64)
