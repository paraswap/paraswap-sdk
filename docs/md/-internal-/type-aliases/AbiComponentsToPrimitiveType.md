[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / AbiComponentsToPrimitiveType

# Type Alias: AbiComponentsToPrimitiveType\<components, abiParameterKind\>

> **AbiComponentsToPrimitiveType**\<`components`, `abiParameterKind`\>: `components` *extends* readonly [] ? [] : `components`\[`number`\]\[`"name"`\] *extends* [`Exclude`](Exclude.md)\<`components`\[`number`\]\[`"name"`\] & `string`, `undefined` \| `""`\> ? `{ [component in components[number] as component["name"] & Object]: AbiParameterToPrimitiveType<component, abiParameterKind> }` : `{ [key in keyof components]: AbiParameterToPrimitiveType<components[key], abiParameterKind> }`

## Type Parameters

• **components** *extends* readonly [`AbiParameter`](AbiParameter.md)[]

• **abiParameterKind** *extends* [`AbiParameterKind`](AbiParameterKind.md)

## Defined in

node\_modules/abitype/dist/types/utils.d.ts:56
