[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / \_TypedDataParametersToAbiParameters

# Type Alias: \_TypedDataParametersToAbiParameters\<typedDataParameters, typedData, keyReferences\>

> **\_TypedDataParametersToAbiParameters**\<`typedDataParameters`, `typedData`, `keyReferences`\>: \{ \[key in keyof typedDataParameters\]: typedDataParameters\[key\] extends infer typedDataParameter extends Object ? typedDataParameter\["type"\] extends keyof typedData & string ? Object : typedDataParameter\["type"\] extends \`$\{infer type extends keyof typedData & string\}\[$\{infer tail\}\]\` ? Object : typedDataParameter : never \}

## Type Parameters

• **typedDataParameters** *extends* readonly [`TypedDataParameter`](TypedDataParameter.md)[]

• **typedData** *extends* [`TypedData`](TypedData.md)

• **keyReferences** *extends* `object` \| `unknown` = `unknown`

## Defined in

node\_modules/abitype/dist/types/utils.d.ts:213
