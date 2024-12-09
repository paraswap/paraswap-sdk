[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / GetQuoteFunc

# Interface: GetQuoteFunc()

> **GetQuoteFunc**(`options`, `signal`?): `Promise`\<[`QuoteWithDeltaPrice`](../../type-aliases/QuoteWithDeltaPrice.md)\>

## Parameters

• **options**: [`QuoteParams`](../../type-aliases/QuoteParams.md)\<`"delta"`\>

• **signal?**: `AbortSignal`

## Returns

`Promise`\<[`QuoteWithDeltaPrice`](../../type-aliases/QuoteWithDeltaPrice.md)\>

## Defined in

[src/methods/quote/getQuote.ts:62](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L62)

> **GetQuoteFunc**(`options`, `signal`?): `Promise`\<[`QuoteWithMarketPrice`](../../type-aliases/QuoteWithMarketPrice.md)\>

## Parameters

• **options**: [`QuoteParams`](../../type-aliases/QuoteParams.md)\<`"market"`\>

• **signal?**: `AbortSignal`

## Returns

`Promise`\<[`QuoteWithMarketPrice`](../../type-aliases/QuoteWithMarketPrice.md)\>

## Defined in

[src/methods/quote/getQuote.ts:66](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L66)

> **GetQuoteFunc**(`options`, `signal`?): `Promise`\<[`QuoteWithDeltaPrice`](../../type-aliases/QuoteWithDeltaPrice.md) \| [`QuoteWithMarketPriceAsFallback`](../../type-aliases/QuoteWithMarketPriceAsFallback.md)\>

## Parameters

• **options**: [`QuoteParams`](../../type-aliases/QuoteParams.md)\<`"all"`\>

• **signal?**: `AbortSignal`

## Returns

`Promise`\<[`QuoteWithDeltaPrice`](../../type-aliases/QuoteWithDeltaPrice.md) \| [`QuoteWithMarketPriceAsFallback`](../../type-aliases/QuoteWithMarketPriceAsFallback.md)\>

## Defined in

[src/methods/quote/getQuote.ts:70](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L70)

> **GetQuoteFunc**(`options`, `signal`?): `Promise`\<[`QuoteResponse`](../../type-aliases/QuoteResponse.md)\>

## Parameters

• **options**: [`QuoteParams`](../../type-aliases/QuoteParams.md)\<[`TradeMode`](../type-aliases/TradeMode.md)\>

• **signal?**: `AbortSignal`

## Returns

`Promise`\<[`QuoteResponse`](../../type-aliases/QuoteResponse.md)\>

## Defined in

[src/methods/quote/getQuote.ts:73](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L73)
