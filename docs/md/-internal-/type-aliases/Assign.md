[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / Assign\_

# Type Alias: Assign\_\<T, U\>

> **Assign\_**\<`T`, `U`\>: `{ [K in keyof T as K extends keyof U ? U[K] extends void ? never : K : K]: K extends keyof U ? U[K] : T[K] }`

## Type Parameters

• **T**

• **U**

## Defined in

node\_modules/viem/\_types/types/utils.d.ts:93
