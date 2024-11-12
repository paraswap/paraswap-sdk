[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / ExtractAbiFunction

# Type Alias: ExtractAbiFunction\<abi, functionName, abiStateMutability\>

> **ExtractAbiFunction**\<`abi`, `functionName`, `abiStateMutability`\>: [`Extract`](Extract.md)\<[`ExtractAbiFunctions`](ExtractAbiFunctions.md)\<`abi`, `abiStateMutability`\>, `object`\>

Extracts [AbiFunction](AbiFunction.md) with name from [Abi](Abi.md).

## Type Parameters

• **abi** *extends* [`Abi`](Abi.md)

[Abi](Abi.md) to extract [AbiFunction](AbiFunction.md) from

• **functionName** *extends* [`ExtractAbiFunctionNames`](ExtractAbiFunctionNames.md)\<`abi`\>

String name of function to extract from [Abi](Abi.md)

• **abiStateMutability** *extends* [`AbiStateMutability`](AbiStateMutability.md) = [`AbiStateMutability`](AbiStateMutability.md)

[AbiStateMutability](AbiStateMutability.md) to filter by

## Returns

Matching [AbiFunction](AbiFunction.md)

## Defined in

node\_modules/abitype/dist/types/utils.d.ts:123
