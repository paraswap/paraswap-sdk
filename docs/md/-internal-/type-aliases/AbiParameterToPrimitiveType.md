[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AbiParameterToPrimitiveType

# Type Alias: AbiParameterToPrimitiveType\<abiParameter, abiParameterKind\>

> **AbiParameterToPrimitiveType**\<`abiParameter`, `abiParameterKind`\>: `abiParameter`\[`"type"`\] *extends* [`AbiBasicType`](AbiBasicType.md) ? [`AbiTypeToPrimitiveType`](AbiTypeToPrimitiveType.md)\<`abiParameter`\[`"type"`\], `abiParameterKind`\> : `abiParameter` *extends* `object` ? [`AbiComponentsToPrimitiveType`](AbiComponentsToPrimitiveType.md)\<`components`, `abiParameterKind`\> : [`MaybeExtractArrayParameterType`](MaybeExtractArrayParameterType.md)\<`abiParameter`\[`"type"`\]\> *extends* [infer head, infer size] ? [`AbiArrayToPrimitiveType`](AbiArrayToPrimitiveType.md)\<`abiParameter`, `abiParameterKind`, `head`, `size`\> : [`ResolvedRegister`](ResolvedRegister.md)\[`"strictAbiType"`\] *extends* `true` ? [`Error`](Error.md)\<\`Unknown type '$\{abiParameter\["type"\] & string\}'.\`\> : `abiParameter` *extends* `object` ? `abiParameter`\[`"components"`\] : `unknown`

Converts [AbiParameter](AbiParameter.md) to corresponding TypeScript primitive type.

## Type Parameters

• **abiParameter** *extends* [`AbiParameter`](AbiParameter.md) \| `object`

[AbiParameter](AbiParameter.md) to convert to TypeScript representation

• **abiParameterKind** *extends* [`AbiParameterKind`](AbiParameterKind.md) = [`AbiParameterKind`](AbiParameterKind.md)

Optional [AbiParameterKind](AbiParameterKind.md) to narrow by parameter type

## Returns

TypeScript primitive type

## Defined in

node\_modules/abitype/dist/types/utils.d.ts:43
