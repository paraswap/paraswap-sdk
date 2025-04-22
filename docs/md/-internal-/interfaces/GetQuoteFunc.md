[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / GetQuoteFunc

# Interface: GetQuoteFunc()

> **GetQuoteFunc**(`options`, `requestParams`?): `Promise`\<[`QuoteWithDeltaPrice`](../../type-aliases/QuoteWithDeltaPrice.md)\>

## Parameters

• **options**: [`QuoteParams`](../../type-aliases/QuoteParams.md)\<`"delta"`\>

• **requestParams?**: [`RequestParameters`](../type-aliases/RequestParameters.md)

## Returns

`Promise`\<[`QuoteWithDeltaPrice`](../../type-aliases/QuoteWithDeltaPrice.md)\>

## Defined in

[src/methods/quote/getQuote.ts:63](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L63)

> **GetQuoteFunc**(`options`, `requestParams`?): `Promise`\<[`QuoteWithMarketPrice`](../../type-aliases/QuoteWithMarketPrice.md)\>

## Parameters

• **options**: [`QuoteParams`](../../type-aliases/QuoteParams.md)\<`"market"`\>

• **requestParams?**: [`RequestParameters`](../type-aliases/RequestParameters.md)

## Returns

`Promise`\<[`QuoteWithMarketPrice`](../../type-aliases/QuoteWithMarketPrice.md)\>

## Defined in

[src/methods/quote/getQuote.ts:67](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L67)

> **GetQuoteFunc**(`options`, `requestParams`?): `Promise`\<[`QuoteWithDeltaPrice`](../../type-aliases/QuoteWithDeltaPrice.md) \| [`QuoteWithMarketPriceAsFallback`](../../type-aliases/QuoteWithMarketPriceAsFallback.md)\>

## Parameters

• **options**: [`QuoteParams`](../../type-aliases/QuoteParams.md)\<`"all"`\>

• **requestParams?**: [`RequestParameters`](../type-aliases/RequestParameters.md)

## Returns

`Promise`\<[`QuoteWithDeltaPrice`](../../type-aliases/QuoteWithDeltaPrice.md) \| [`QuoteWithMarketPriceAsFallback`](../../type-aliases/QuoteWithMarketPriceAsFallback.md)\>

## Defined in

[src/methods/quote/getQuote.ts:71](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L71)

> **GetQuoteFunc**(`options`, `requestParams`?): `Promise`\<[`QuoteResponse`](../../type-aliases/QuoteResponse.md)\>

## Parameters

• **options**: [`QuoteParams`](../../type-aliases/QuoteParams.md)\<[`TradeMode`](../type-aliases/TradeMode.md)\>

• **requestParams?**: [`RequestParameters`](../type-aliases/RequestParameters.md)

## Returns

`Promise`\<[`QuoteResponse`](../../type-aliases/QuoteResponse.md)\>

## Defined in

[src/methods/quote/getQuote.ts:74](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L74)
