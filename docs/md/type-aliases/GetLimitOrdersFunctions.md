[**@paraswap/sdk**](../README.md) • **Docs**

***

[@paraswap/sdk](../globals.md) / GetLimitOrdersFunctions

# Type Alias: GetLimitOrdersFunctions

> **GetLimitOrdersFunctions**: `object`

## Type declaration

### getLimitOrderByHash

> **getLimitOrderByHash**: [`GetLimitOrderByHash`](../-internal-/type-aliases/GetLimitOrderByHash.md)

### getLimitOrders

> **getLimitOrders**: [`GetLimitOrders`](../-internal-/type-aliases/GetLimitOrders.md)

### getRequiredBalance

> **getRequiredBalance**: [`GetRequiredBalance`](../-internal-/type-aliases/GetRequiredBalance.md)

Gets fillableBalance for tokens from user's active orders.
User needs to have enough balance & allowance to cover active orders before creating new orders.

#### Param

parameters to get allowance for active orders

#### Param

user to get required allowances for

#### Param

if given `token`, the mapping will contain that token address only

#### Param

requestParams passed to fetcher, can include {signal: AbortSignal, timeout: for axios, etc.}

#### Returns

`{Lowercase<Address> => wei number as string}` mapping of token to fillableBalance

## Defined in

[src/methods/limitOrders/getOrders.ts:55](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/getOrders.ts#L55)
