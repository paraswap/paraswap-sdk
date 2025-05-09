[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / EIP712DomainDefinition

# Type Alias: EIP712DomainDefinition\<typedData, primaryType, schema\>

> **EIP712DomainDefinition**\<`typedData`, `primaryType`, `schema`\>: `object` & `object`

## Type declaration

### types?

> `optional` **types**: `typedData`

## Type declaration

### domain

> **domain**: `schema` *extends* `object` ? `domain` : [`Prettify`](Prettify.md)\<[`TypedDataDomain`](TypedDataDomain.md)\>

### message?

> `optional` **message**: `undefined`

### primaryType

> **primaryType**: `"EIP712Domain"` \| `primaryType`

## Type Parameters

• **typedData** *extends* [`TypedData`](TypedData.md) \| [`Record`](Record.md)\<`string`, `unknown`\> = [`TypedData`](TypedData.md)

• **primaryType** *extends* `"EIP712Domain"` = `"EIP712Domain"`

• **schema** *extends* [`Record`](Record.md)\<`string`, `unknown`\> = `typedData` *extends* [`TypedData`](TypedData.md) ? [`TypedDataToPrimitiveTypes`](TypedDataToPrimitiveTypes.md)\<`typedData`\> : [`Record`](Record.md)\<`string`, `unknown`\>

## Defined in

node\_modules/viem/\_types/types/typedData.d.ts:15
