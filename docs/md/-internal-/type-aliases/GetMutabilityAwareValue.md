[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / GetMutabilityAwareValue

# Type Alias: GetMutabilityAwareValue\<abi, mutability, functionName, valueType, args, abiFunction, _Narrowable\>

> **GetMutabilityAwareValue**\<`abi`, `mutability`, `functionName`, `valueType`, `args`, `abiFunction`, `_Narrowable`\>: `_Narrowable` *extends* `true` ? `abiFunction`\[`"stateMutability"`\] *extends* `"payable"` ? `object` : `abiFunction`\[`"payable"`\] *extends* `true` ? `object` : `object` : `object`

## Type Parameters

• **abi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[]

• **mutability** *extends* [`AbiStateMutability`](AbiStateMutability.md) = [`AbiStateMutability`](AbiStateMutability.md)

• **functionName** *extends* [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `mutability`\> = [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `mutability`\>

• **valueType** = [`TransactionRequest`](TransactionRequest.md)\[`"value"`\]

• **args** *extends* [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `mutability`, `functionName`\> = [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `mutability`, `functionName`\>

• **abiFunction** *extends* [`AbiFunction`](AbiFunction.md) = `abi` *extends* [`Abi`](Abi.md) ? [`ExtractAbiFunctionForArgs`](ExtractAbiFunctionForArgs.md)\<`abi`, `mutability`, `functionName`, `args`\> : [`AbiFunction`](AbiFunction.md)

• **_Narrowable** *extends* `boolean` = [`IsNarrowable`](IsNarrowable.md)\<`abi`, [`Abi`](Abi.md)\>

## Defined in

node\_modules/viem/\_types/actions/public/simulateContract.d.ts:17
