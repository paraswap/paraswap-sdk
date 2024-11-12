[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / GetAllowance

# Type Alias: GetAllowance()

> **GetAllowance**: (`userAddress`, `tokenAddress`, `signal`?) => `Promise`\<[`Allowance`](../../interfaces/Allowance.md) \| *typeof* [`NOT_FOUND_RESPONSE`](../variables/NOT_FOUND_RESPONSE.md)\>

## Parameters

• **userAddress**: [`Address`](../../type-aliases/Address.md)

• **tokenAddress**: [`Address`](../../type-aliases/Address.md)

• **signal?**: `AbortSignal`

## Returns

`Promise`\<[`Allowance`](../../interfaces/Allowance.md) \| *typeof* [`NOT_FOUND_RESPONSE`](../variables/NOT_FOUND_RESPONSE.md)\>

## Defined in

[src/methods/swap/balance.ts:34](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/balance.ts#L34)
