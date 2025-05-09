[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractFunctionParameters

# Type Alias: ContractFunctionParameters\<abi, mutability, functionName, args, deployless, allFunctionNames, allArgs\>

> **ContractFunctionParameters**\<`abi`, `mutability`, `functionName`, `args`, `deployless`, `allFunctionNames`, `allArgs`\>: `object` & readonly [] *extends* `allArgs` ? `object` : `object` & `deployless` *extends* `true` ? `object` : `object`

## Type declaration

### abi

> **abi**: `abi`

### args?

> `optional` **args**: `abi` *extends* [`Abi`](Abi.md) ? [`UnionWiden`](UnionWiden.md)\<`args`\> : `never` \| `allArgs`

### functionName

> **functionName**: `allFunctionNames` \| `functionName` *extends* `allFunctionNames` ? `functionName` : `never`

## Type Parameters

• **abi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = [`Abi`](Abi.md)

• **mutability** *extends* [`AbiStateMutability`](AbiStateMutability.md) = [`AbiStateMutability`](AbiStateMutability.md)

• **functionName** *extends* [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `mutability`\> = [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `mutability`\>

• **args** *extends* [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `mutability`, `functionName`\> = [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `mutability`, `functionName`\>

• **deployless** *extends* `boolean` = `false`

• **allFunctionNames** = [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `mutability`\>

• **allArgs** = [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `mutability`, `functionName`\>

## Defined in

node\_modules/viem/\_types/types/contract.d.ts:31
