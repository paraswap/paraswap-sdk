[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / ExtractAbiFunctionNames

# Type Alias: ExtractAbiFunctionNames\<abi, abiStateMutability\>

> **ExtractAbiFunctionNames**\<`abi`, `abiStateMutability`\>: [`ExtractAbiFunctions`](ExtractAbiFunctions.md)\<`abi`, `abiStateMutability`\>\[`"name"`\]

Extracts all [AbiFunction](AbiFunction.md) names from [Abi](Abi.md).

## Type Parameters

• **abi** *extends* [`Abi`](Abi.md)

[Abi](Abi.md) to extract function names from

• **abiStateMutability** *extends* [`AbiStateMutability`](AbiStateMutability.md) = [`AbiStateMutability`](AbiStateMutability.md)

[AbiStateMutability](AbiStateMutability.md) to filter by

## Returns

Union of function names

## Defined in

node\_modules/abitype/dist/types/utils.d.ts:114
