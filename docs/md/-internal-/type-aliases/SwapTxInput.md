[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / SwapTxInput

# Type Alias: SwapTxInput

> **SwapTxInput**: [`Pick`](Pick.md)\<[`SwapQueryParams`](SwapQueryParams.md), [`SwapTxInputFields`](SwapTxInputFields.md)\> & `object`

## Type declaration

### options?

> `optional` **options**: [`SwapRateOptions`](SwapRateOptions.md)

### route?

> `optional` **route**: `string`[]

#### Description

List of tokens (addresses or symbols from `/tokens`) to comprise the price route. _Max 4 tokens._ _**\*Note:**_ _If_ `_route_` _is specified, the response will only comprise of the route specified which might not be the optimal route._

## Defined in

[src/methods/swap/swapTx.ts:205](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/swapTx.ts#L205)
