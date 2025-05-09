[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractFunctionArgs

# Type Alias: ContractFunctionArgs\<abi, mutability, functionName\>

> **ContractFunctionArgs**\<`abi`, `mutability`, `functionName`\>: [`AbiParametersToPrimitiveTypes`](AbiParametersToPrimitiveTypes.md)\<[`ExtractAbiFunction`](ExtractAbiFunction.md)\<`abi` *extends* [`Abi`](Abi.md) ? `abi` : [`Abi`](Abi.md), `functionName`, `mutability`\>\[`"inputs"`\], `"inputs"`\> *extends* infer args ? [`args`] *extends* [`never`] ? readonly `unknown`[] : `args` : readonly `unknown`[]

## Type Parameters

• **abi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = [`Abi`](Abi.md)

• **mutability** *extends* [`AbiStateMutability`](AbiStateMutability.md) = [`AbiStateMutability`](AbiStateMutability.md)

• **functionName** *extends* [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `mutability`\> = [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `mutability`\>

## Defined in

node\_modules/viem/\_types/types/contract.d.ts:8
