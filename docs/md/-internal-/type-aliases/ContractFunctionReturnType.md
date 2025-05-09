[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractFunctionReturnType

# Type Alias: ContractFunctionReturnType\<abi, mutability, functionName, args\>

> **ContractFunctionReturnType**\<`abi`, `mutability`, `functionName`, `args`\>: `abi` *extends* [`Abi`](Abi.md) ? [`Abi`](Abi.md) *extends* `abi` ? `unknown` : [`AbiParametersToPrimitiveTypes`](AbiParametersToPrimitiveTypes.md)\<[`ExtractAbiFunctionForArgs`](ExtractAbiFunctionForArgs.md)\<`abi`, `mutability`, `functionName`, `args`\>\[`"outputs"`\]\> *extends* infer types ? `types` *extends* readonly [] ? `void` : `types` *extends* readonly [infer type] ? `type` : `types` : `never` : `unknown`

## Type Parameters

• **abi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = [`Abi`](Abi.md)

• **mutability** *extends* [`AbiStateMutability`](AbiStateMutability.md) = [`AbiStateMutability`](AbiStateMutability.md)

• **functionName** *extends* [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `mutability`\> = [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `mutability`\>

• **args** *extends* [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `mutability`, `functionName`\> = [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `mutability`, `functionName`\>

## Defined in

node\_modules/viem/\_types/types/contract.d.ts:43
