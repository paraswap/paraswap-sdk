[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / ReadContractReturnType

# Type Alias: ReadContractReturnType\<abi, functionName, args\>

> **ReadContractReturnType**\<`abi`, `functionName`, `args`\>: [`ContractFunctionReturnType`](ContractFunctionReturnType.md)\<`abi`, `"pure"` \| `"view"`, `functionName`, `args`\>

## Type Parameters

• **abi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = [`Abi`](Abi.md)

• **functionName** *extends* [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `"pure"` \| `"view"`\> = [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `"pure"` \| `"view"`\>

• **args** *extends* [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `"pure"` \| `"view"`, `functionName`\> = [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `"pure"` \| `"view"`, `functionName`\>

## Defined in

node\_modules/viem/\_types/actions/public/readContract.d.ts:12
