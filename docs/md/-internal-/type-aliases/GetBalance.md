[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / GetBalance

# Type Alias: GetBalance()

> **GetBalance**: (`userAddress`, `tokenAddressOrSymbol`, `signal`?) => `Promise`\<[`Token`](../../type-aliases/Token.md) \| *typeof* [`NOT_FOUND_RESPONSE`](../variables/NOT_FOUND_RESPONSE.md)\>

## Parameters

• **userAddress**: [`Address`](../../type-aliases/Address.md)

• **tokenAddressOrSymbol**: [`AddressOrSymbol`](../../type-aliases/AddressOrSymbol.md)

• **signal?**: `AbortSignal`

## Returns

`Promise`\<[`Token`](../../type-aliases/Token.md) \| *typeof* [`NOT_FOUND_RESPONSE`](../variables/NOT_FOUND_RESPONSE.md)\>

## Defined in

[src/methods/swap/balance.ts:18](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/balance.ts#L18)
