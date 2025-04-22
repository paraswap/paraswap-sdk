[**@paraswap/sdk**](../README.md) • **Docs**

***

[@paraswap/sdk](../globals.md) / QuoteParams

# Type Alias: QuoteParams\<M\>

> **QuoteParams**\<`M`\>: `object`

## Type Parameters

• **M** *extends* [`TradeMode`](../-internal-/type-aliases/TradeMode.md) = [`TradeMode`](../-internal-/type-aliases/TradeMode.md)

## Type declaration

### amount

> **amount**: `string`

#### Description

srcToken amount (in case of SELL) or destToken amount (in case of BUY), in wei

### destDecimals

> **destDecimals**: `number`

#### Description

Destination Token Decimals

### destToken

> **destToken**: `string`

#### Description

Destination Token Address

### mode

> **mode**: `M`

#### Description

Preferred mode for the trade. In case of "all", Delta pricing is returned, with Market as a fallback

### partner?

> `optional` **partner**: `string`

#### Description

Partner string

### side

> **side**: [`SwapSideUnion`](../-internal-/type-aliases/SwapSideUnion.md)

#### Description

SELL or BUY

### srcDecimals

> **srcDecimals**: `number`

#### Description

Source Token Decimals.

### srcToken

> **srcToken**: `string`

#### Description

Source Token Address

### userAddress?

> `optional` **userAddress**: `string`

#### Description

User's Wallet Address

## Defined in

[src/methods/quote/getQuote.ts:15](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L15)
