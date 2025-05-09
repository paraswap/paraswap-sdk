[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AbiTypeToPrimitiveType

# Type Alias: AbiTypeToPrimitiveType\<abiType, abiParameterKind\>

> **AbiTypeToPrimitiveType**\<`abiType`, `abiParameterKind`\>: `abiType` *extends* [`SolidityBytes`](SolidityBytes.md) ? [`PrimitiveTypeLookup`](../interfaces/PrimitiveTypeLookup.md)\[`abiType`\]\[`abiParameterKind`\] : [`PrimitiveTypeLookup`](../interfaces/PrimitiveTypeLookup.md)\[`abiType`\]

Converts [AbiType](AbiType.md) to corresponding TypeScript primitive type.

Does not include full array or tuple conversion. Use [AbiParameterToPrimitiveType](AbiParameterToPrimitiveType.md) to fully convert arrays and tuples.

## Type Parameters

• **abiType** *extends* [`AbiType`](AbiType.md)

[AbiType](AbiType.md) to convert to TypeScript representation

• **abiParameterKind** *extends* [`AbiParameterKind`](AbiParameterKind.md) = [`AbiParameterKind`](AbiParameterKind.md)

Optional [AbiParameterKind](AbiParameterKind.md) to narrow by parameter type

## Returns

TypeScript primitive type

## Defined in

node\_modules/abitype/dist/types/utils.d.ts:13
