[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ExtractAbiFunctions

# Type Alias: ExtractAbiFunctions\<abi, abiStateMutability\>

> **ExtractAbiFunctions**\<`abi`, `abiStateMutability`\>: [`Extract`](Extract.md)\<`abi`\[`number`\], `object`\>

Extracts all [AbiFunction](AbiFunction.md) types from [Abi](Abi.md).

## Type Parameters

• **abi** *extends* [`Abi`](Abi.md)

[Abi](Abi.md) to extract functions from

• **abiStateMutability** *extends* [`AbiStateMutability`](AbiStateMutability.md) = [`AbiStateMutability`](AbiStateMutability.md)

[AbiStateMutability](AbiStateMutability.md) to filter by

## Returns

All [AbiFunction](AbiFunction.md) types from [Abi](Abi.md)

## Defined in

node\_modules/abitype/dist/types/utils.d.ts:103
