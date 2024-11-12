[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / EstimateContractGasParameters

# Type Alias: EstimateContractGasParameters\<abi, functionName, args, chain\>

> **EstimateContractGasParameters**\<`abi`, `functionName`, `args`, `chain`\>: [`ContractFunctionParameters`](ContractFunctionParameters.md)\<`abi`, `"nonpayable"` \| `"payable"`, `functionName`, `args`\> & [`UnionOmit`](UnionOmit.md)\<[`EstimateGasParameters`](EstimateGasParameters.md)\<`chain`\>, `"data"` \| `"to"` \| `"value"`\> & [`GetValue`](GetValue.md)\<`abi`, `functionName`, [`EstimateGasParameters`](EstimateGasParameters.md)\<`chain`\> *extends* [`EstimateGasParameters`](EstimateGasParameters.md) ? [`EstimateGasParameters`](EstimateGasParameters.md)\<`chain`\>\[`"value"`\] : [`EstimateGasParameters`](EstimateGasParameters.md)\[`"value"`\]\>

## Type Parameters

• **abi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = [`Abi`](Abi.md)

• **functionName** *extends* [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `"nonpayable"` \| `"payable"`\> = [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `"nonpayable"` \| `"payable"`\>

• **args** *extends* [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `"nonpayable"` \| `"payable"`, `functionName`\> = [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `"nonpayable"` \| `"payable"`, `functionName`\>

• **chain** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

## Defined in

node\_modules/viem/\_types/actions/public/estimateContractGas.d.ts:12
