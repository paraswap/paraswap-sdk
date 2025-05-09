[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractConstructorArgs

# Type Alias: ContractConstructorArgs\<abi\>

> **ContractConstructorArgs**\<`abi`\>: [`AbiParametersToPrimitiveTypes`](AbiParametersToPrimitiveTypes.md)\<[`Extract`](Extract.md)\<`abi` *extends* [`Abi`](Abi.md) ? `abi` : [`Abi`](Abi.md)\[`number`\], `object`\>\[`"inputs"`\], `"inputs"`\> *extends* infer args ? [`args`] *extends* [`never`] ? readonly `unknown`[] : `args` : readonly `unknown`[]

## Type Parameters

• **abi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = [`Abi`](Abi.md)

## Defined in

node\_modules/viem/\_types/types/contract.d.ts:9
