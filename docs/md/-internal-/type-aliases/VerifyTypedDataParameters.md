[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / VerifyTypedDataParameters

# Type Alias: VerifyTypedDataParameters\<typedData, primaryType\>

> **VerifyTypedDataParameters**\<`typedData`, `primaryType`\>: [`Omit`](Omit.md)\<[`VerifyHashParameters`](VerifyHashParameters.md), `"hash"`\> & [`TypedDataDefinition`](TypedDataDefinition.md)\<`typedData`, `primaryType`\> & `object`

## Type declaration

### address

> **address**: [`Address`](Address.md)

The address to verify the typed data for.

### signature

> **signature**: [`Hex`](Hex.md) \| [`ByteArray`](ByteArray.md) \| [`Signature`](Signature.md)

The signature to verify

## Type Parameters

• **typedData** *extends* [`TypedData`](TypedData.md) \| [`Record`](Record.md)\<`string`, `unknown`\> = [`TypedData`](TypedData.md)

• **primaryType** *extends* keyof `typedData` \| `"EIP712Domain"` = keyof `typedData`

## Defined in

node\_modules/viem/\_types/actions/public/verifyTypedData.d.ts:10
