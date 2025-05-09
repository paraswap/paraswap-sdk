[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TypedDataDefinition

# Type Alias: TypedDataDefinition\<typedData, primaryType, primaryTypes\>

> **TypedDataDefinition**\<`typedData`, `primaryType`, `primaryTypes`\>: `primaryType` *extends* `"EIP712Domain"` ? [`EIP712DomainDefinition`](EIP712DomainDefinition.md)\<`typedData`, `primaryType`\> : [`MessageDefinition`](MessageDefinition.md)\<`typedData`, `primaryType`, `primaryTypes`\>

## Type Parameters

• **typedData** *extends* [`TypedData`](TypedData.md) \| [`Record`](Record.md)\<`string`, `unknown`\> = [`TypedData`](TypedData.md)

• **primaryType** *extends* keyof `typedData` \| `"EIP712Domain"` = keyof `typedData`

• **primaryTypes** = `typedData` *extends* [`TypedData`](TypedData.md) ? keyof `typedData` : `string`

## Defined in

node\_modules/viem/\_types/types/typedData.d.ts:3
