[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / AbiParametersToPrimitiveTypes

# Type Alias: AbiParametersToPrimitiveTypes\<abiParameters, abiParameterKind\>

> **AbiParametersToPrimitiveTypes**\<`abiParameters`, `abiParameterKind`\>: [`Pretty`](Pretty.md)\<`{ [key in keyof abiParameters]: AbiParameterToPrimitiveType<abiParameters[key], abiParameterKind> }`\>

Converts array of [AbiParameter](AbiParameter.md) to corresponding TypeScript primitive types.

## Type Parameters

• **abiParameters** *extends* readonly [`AbiParameter`](AbiParameter.md)[]

Array of [AbiParameter](AbiParameter.md) to convert to TypeScript representations

• **abiParameterKind** *extends* [`AbiParameterKind`](AbiParameterKind.md) = [`AbiParameterKind`](AbiParameterKind.md)

Optional [AbiParameterKind](AbiParameterKind.md) to narrow by parameter type

## Returns

Array of TypeScript primitive types

## Defined in

node\_modules/abitype/dist/types/utils.d.ts:86
