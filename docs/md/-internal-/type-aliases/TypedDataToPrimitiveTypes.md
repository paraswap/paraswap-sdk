[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / TypedDataToPrimitiveTypes

# Type Alias: TypedDataToPrimitiveTypes\<typedData, abiParameterKind, keyReferences\>

> **TypedDataToPrimitiveTypes**\<`typedData`, `abiParameterKind`, `keyReferences`\>: \{ \[key in keyof typedData\]: \{ \[key2 in typedData\[key\]\[number\] as key2\["name"\]\]: key2\["type"\] extends key ? Error\<\`Cannot convert self-referencing struct '$\{key2\["type"\]\}' to primitive type.\`\> : key2\["type"\] extends keyof typedData ? key2\["type"\] extends keyof keyReferences ? Error\<\`Circular reference detected. '$\{key2\["type"\]\}' is a circular reference.\`\> : TypedDataToPrimitiveTypes\<Exclude\<typedData, key\>, abiParameterKind, keyReferences & \{ \[\_ in (...) \| (...)\]: true \}\>\[key2\["type"\]\] : key2\["type"\] extends \`$\{infer type extends keyof typedData & string\}\[$\{infer tail\}\]\` ? AbiParameterToPrimitiveType\<Object, abiParameterKind\> : key2\["type"\] extends TypedDataType ? AbiParameterToPrimitiveType\<key2, abiParameterKind\> : Error\<\`Cannot convert unknown type '$\{key2\["type"\]\}' to primitive type.\`\> \} \} & `unknown`

Converts [typedData](TypedDataToPrimitiveTypes.md) to corresponding TypeScript primitive types.

## Type Parameters

• **typedData** *extends* [`TypedData`](TypedData.md)

[TypedData](TypedData.md) to convert

• **abiParameterKind** *extends* [`AbiParameterKind`](AbiParameterKind.md) = [`AbiParameterKind`](AbiParameterKind.md)

Optional [AbiParameterKind](AbiParameterKind.md) to narrow by parameter type

• **keyReferences** *extends* `object` \| `unknown` = `unknown`

## Returns

Union of TypeScript primitive types

## Defined in

node\_modules/abitype/dist/types/utils.d.ts:198
