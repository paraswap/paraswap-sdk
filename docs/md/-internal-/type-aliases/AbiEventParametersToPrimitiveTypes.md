[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / AbiEventParametersToPrimitiveTypes

# Type Alias: AbiEventParametersToPrimitiveTypes\<abiParameters, _options\>

> **AbiEventParametersToPrimitiveTypes**\<`abiParameters`, `_options`\>: `abiParameters` *extends* readonly [] ? readonly [] : [`Filter`](Filter.md)\<`abiParameters`, `_options`\[`"IndexedOnly"`\] *extends* `true` ? `object` : `object`\> *extends* infer Filtered ? [`_HasUnnamedAbiParameter`](HasUnnamedAbiParameter.md)\<`Filtered`\> *extends* `true` ? readonly [`...{ [K in keyof Filtered]: AbiEventParameterToPrimitiveType<Filtered[K], _options> }`] \| `_options`\[`"Required"`\] *extends* `true` ? `never` : `Filtered` *extends* readonly [`...(infer Head extends (...))`, infer \_] ? [`AbiEventParametersToPrimitiveTypes`](AbiEventParametersToPrimitiveTypes.md)\<readonly [`...(...)`], `_options`\> : `never` : `{ [Parameter in Filtered[number] as Parameter extends Object ? Name : never]?: AbiEventParameterToPrimitiveType<Parameter, _options> }` *extends* infer Mapped ? [`Prettify`](Prettify.md)\<[`MaybeRequired`](MaybeRequired.md)\<`Mapped`, `_options`\[`"Required"`\] *extends* `boolean` ? `_options`\[`"Required"`\] : `false`\>\> : `never` : `never`

## Type Parameters

• **abiParameters** *extends* readonly [`AbiParameter`](AbiParameter.md)[]

• **_options** *extends* [`EventParameterOptions`](EventParameterOptions.md) = [`DefaultEventParameterOptions`](DefaultEventParameterOptions.md)

## Defined in

node\_modules/viem/\_types/types/contract.d.ts:87
