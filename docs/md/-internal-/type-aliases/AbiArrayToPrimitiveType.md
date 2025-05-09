[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AbiArrayToPrimitiveType

# Type Alias: AbiArrayToPrimitiveType\<abiParameter, abiParameterKind, head, size\>

> **AbiArrayToPrimitiveType**\<`abiParameter`, `abiParameterKind`, `head`, `size`\>: `size` *extends* keyof [`SolidityFixedArraySizeLookup`](SolidityFixedArraySizeLookup.md) ? [`Tuple`](Tuple.md)\<[`AbiParameterToPrimitiveType`](AbiParameterToPrimitiveType.md)\<[`Merge`](Merge.md)\<`abiParameter`, `object`\>, `abiParameterKind`\>, [`SolidityFixedArraySizeLookup`](SolidityFixedArraySizeLookup.md)\[`size`\]\> : readonly [`AbiParameterToPrimitiveType`](AbiParameterToPrimitiveType.md)\<[`Merge`](Merge.md)\<`abiParameter`, `object`\>, `abiParameterKind`\>[]

## Type Parameters

• **abiParameter** *extends* [`AbiParameter`](AbiParameter.md) \| `object`

• **abiParameterKind** *extends* [`AbiParameterKind`](AbiParameterKind.md)

• **head** *extends* `string`

• **size**

## Defined in

node\_modules/abitype/dist/types/utils.d.ts:71
