[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractMethodArgs

# Type Alias: ContractMethodArgs\<A\>

> **ContractMethodArgs**\<`A`\>: [`PostfixOverrides`](PostfixOverrides.md)\<\{ \[I in keyof A\]-?: A\[I\] \| Typed \}\>

Arguments to a Contract method can always include an additional and
 optional overrides parameter, and each parameter can optionally be
 [[Typed]].

 @_ignore:

## Type Parameters

• **A** *extends* `any`[]

## Defined in

node\_modules/ethers/lib.commonjs/contract/types.d.ts:79
