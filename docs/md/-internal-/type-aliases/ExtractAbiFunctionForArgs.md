[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / ExtractAbiFunctionForArgs

# Type Alias: ExtractAbiFunctionForArgs\<abi, mutability, functionName, args\>

> **ExtractAbiFunctionForArgs**\<`abi`, `mutability`, `functionName`, `args`\>: [`ExtractAbiFunction`](ExtractAbiFunction.md)\<`abi`, `functionName`, `mutability`\> *extends* infer abiFunction ? [`IsUnion`](IsUnion.md)\<`abiFunction`\> *extends* `true` ? [`UnionToTuple`](UnionToTuple.md)\<`abiFunction`\> *extends* infer abiFunctions ? `{ [k in keyof abiFunctions]: CheckArgs<abiFunctions[k], args> }`\[`number`\] : `never` : `abiFunction` : `never`

## Type Parameters

• **abi** *extends* [`Abi`](Abi.md)

• **mutability** *extends* [`AbiStateMutability`](AbiStateMutability.md)

• **functionName** *extends* [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `mutability`\>

• **args** *extends* [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `mutability`, `functionName`\>

## Defined in

node\_modules/viem/\_types/types/contract.d.ts:27
