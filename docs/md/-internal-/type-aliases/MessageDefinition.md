[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / MessageDefinition

# Type Alias: MessageDefinition\<typedData, primaryType, primaryTypes, schema, message\>

> **MessageDefinition**\<`typedData`, `primaryType`, `primaryTypes`, `schema`, `message`\>: `object` & `object`

## Type declaration

### types

> **types**: `typedData`

## Type declaration

### domain?

> `optional` **domain**: `schema` *extends* `object` ? `domain` : [`Prettify`](Prettify.md)\<[`TypedDataDomain`](TypedDataDomain.md)\>

### message

> **message**: `object` *extends* `message` ? [`Record`](Record.md)\<`string`, `unknown`\> : `message`

### primaryType

> **primaryType**: `primaryTypes` \| `primaryType` *extends* `primaryTypes` ? `primaryType` : `never`

## Type Parameters

• **typedData** *extends* [`TypedData`](TypedData.md) \| [`Record`](Record.md)\<`string`, `unknown`\> = [`TypedData`](TypedData.md)

• **primaryType** *extends* keyof `typedData` = keyof `typedData`

• **primaryTypes** = `typedData` *extends* [`TypedData`](TypedData.md) ? keyof `typedData` : `string`

• **schema** *extends* [`Record`](Record.md)\<`string`, `unknown`\> = `typedData` *extends* [`TypedData`](TypedData.md) ? [`TypedDataToPrimitiveTypes`](TypedDataToPrimitiveTypes.md)\<`typedData`\> : [`Record`](Record.md)\<`string`, `unknown`\>

• **message** = `schema`\[`primaryType` *extends* keyof `schema` ? `primaryType` : keyof `schema`\]

## Defined in

node\_modules/viem/\_types/types/typedData.d.ts:4
