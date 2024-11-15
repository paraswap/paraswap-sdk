[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / GetValue

# Type Alias: GetValue\<abi, functionName, valueType, abiFunction, _Narrowable\>

> **GetValue**\<`abi`, `functionName`, `valueType`, `abiFunction`, `_Narrowable`\>: `_Narrowable` *extends* `true` ? `abiFunction`\[`"stateMutability"`\] *extends* `"payable"` ? `object` : `abiFunction`\[`"payable"`\] *extends* `true` ? `object` : `object` : `object`

## Type Parameters

• **abi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[]

• **functionName** *extends* `string`

• **valueType** = [`TransactionRequest`](TransactionRequest.md)\[`"value"`\]

• **abiFunction** *extends* [`AbiFunction`](AbiFunction.md) = `abi` *extends* [`Abi`](Abi.md) ? [`ExtractAbiFunction`](ExtractAbiFunction.md)\<`abi`, `functionName`\> : [`AbiFunction`](AbiFunction.md)

• **_Narrowable** *extends* `boolean` = [`IsNarrowable`](IsNarrowable.md)\<`abi`, [`Abi`](Abi.md)\>

## Defined in

node\_modules/viem/\_types/types/contract.d.ts:61
