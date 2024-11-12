[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / ReadContractParameters

# Type Alias: ReadContractParameters\<abi, functionName, args\>

> **ReadContractParameters**\<`abi`, `functionName`, `args`\>: [`UnionEvaluate`](UnionEvaluate.md)\<[`Pick`](Pick.md)\<[`CallParameters`](CallParameters.md), `"account"` \| `"blockNumber"` \| `"blockTag"` \| `"factory"` \| `"factoryData"` \| `"stateOverride"`\>\> & [`ContractFunctionParameters`](ContractFunctionParameters.md)\<`abi`, `"pure"` \| `"view"`, `functionName`, `args`, `boolean`\>

## Type Parameters

• **abi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = [`Abi`](Abi.md)

• **functionName** *extends* [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `"pure"` \| `"view"`\> = [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `"pure"` \| `"view"`\>

• **args** *extends* [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `"pure"` \| `"view"`, `functionName`\> = [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `"pure"` \| `"view"`, `functionName`\>

## Defined in

node\_modules/viem/\_types/actions/public/readContract.d.ts:11
