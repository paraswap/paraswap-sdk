[**@paraswap/sdk**](../README.md) • **Docs**

***

[@paraswap/sdk](../globals.md) / BuildOptionsBase

# Type Alias: BuildOptionsBase

> **BuildOptionsBase**: `object`

## Type declaration

### ignoreAllowance?

> `optional` **ignoreAllowance**: `boolean`

#### Description

Allows the API to skip performing onchain allowance checks.

### ignoreChecks?

> `optional` **ignoreChecks**: `boolean`

#### Description

Allows the API to skip performing onchain checks such as balances, allowances, as well as transaction simulations. The response does not contain `gas` parameter when set to `true`

### ignoreGasEstimate?

> `optional` **ignoreGasEstimate**: `boolean`

#### Description

Allows the API to skip gas checks. The response does not contain `gas` parameter when set to `true`

### onlyParams?

> `optional` **onlyParams**: `boolean`

#### Description

Allows the API to return the contract parameters only.

## Defined in

[src/methods/swap/transaction.ts:162](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L162)
