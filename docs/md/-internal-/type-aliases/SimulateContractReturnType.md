[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / SimulateContractReturnType

# Type Alias: SimulateContractReturnType\<abi, functionName, args, chain, account, chainOverride, accountOverride, minimizedAbi, resolvedAccount\>

> **SimulateContractReturnType**\<`abi`, `functionName`, `args`, `chain`, `account`, `chainOverride`, `accountOverride`, `minimizedAbi`, `resolvedAccount`\>: `object`

## Type Parameters

• **abi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = [`Abi`](Abi.md)

• **functionName** *extends* [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `"nonpayable"` \| `"payable"`\> = [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `"nonpayable"` \| `"payable"`\>

• **args** *extends* [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `"nonpayable"` \| `"payable"`, `functionName`\> = [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `"nonpayable"` \| `"payable"`, `functionName`\>

• **chain** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

• **account** *extends* [`Account`](Account.md) \| `undefined` = [`Account`](Account.md) \| `undefined`

• **chainOverride** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

• **accountOverride** *extends* [`Account`](Account.md) \| [`Address`](Address.md) \| `undefined` = [`Account`](Account.md) \| [`Address`](Address.md) \| `undefined`

• **minimizedAbi** *extends* [`Abi`](Abi.md) = readonly [[`ExtractAbiFunctionForArgs`](ExtractAbiFunctionForArgs.md)\<`abi` *extends* [`Abi`](Abi.md) ? `abi` : [`Abi`](Abi.md), `"nonpayable"` \| `"payable"`, `functionName`, `args`\>]

• **resolvedAccount** *extends* [`Account`](Account.md) \| `undefined` = `accountOverride` *extends* [`Account`](Account.md) \| [`Address`](Address.md) ? [`ParseAccount`](ParseAccount.md)\<`accountOverride`\> : `account`

## Type declaration

### request

> **request**: [`Prettify`](Prettify.md)\<[`UnionEvaluate`](UnionEvaluate.md)\<[`UnionOmit`](UnionOmit.md)\<[`WriteContractParameters`](WriteContractParameters.md)\<`minimizedAbi`, `functionName`, `args`, `chain`, `undefined`, `chainOverride`\>, `"account"` \| `"abi"` \| `"args"` \| `"chain"` \| `"functionName"`\>\> & [`ContractFunctionParameters`](ContractFunctionParameters.md)\<`minimizedAbi`, `"nonpayable"` \| `"payable"`, `functionName`, `args`\> & `object` & `resolvedAccount` *extends* [`Account`](Account.md) ? `object` : `object`\>

### result

> **result**: [`ContractFunctionReturnType`](ContractFunctionReturnType.md)\<`minimizedAbi`, `"nonpayable"` \| `"payable"`, `functionName`, `args`\>

## Defined in

node\_modules/viem/\_types/actions/public/simulateContract.d.ts:32
