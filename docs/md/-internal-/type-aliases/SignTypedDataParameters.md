[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / SignTypedDataParameters

# Type Alias: SignTypedDataParameters\<typedData, primaryType, account, primaryTypes\>

> **SignTypedDataParameters**\<`typedData`, `primaryType`, `account`, `primaryTypes`\>: [`TypedDataDefinition`](TypedDataDefinition.md)\<`typedData`, `primaryType`, `primaryTypes`\> & [`GetAccountParameter`](GetAccountParameter.md)\<`account`\>

## Type Parameters

• **typedData** *extends* [`TypedData`](TypedData.md) \| [`Record`](Record.md)\<`string`, `unknown`\> = [`TypedData`](TypedData.md)

• **primaryType** *extends* keyof `typedData` \| `"EIP712Domain"` = keyof `typedData`

• **account** *extends* [`Account`](Account.md) \| `undefined` = `undefined`

• **primaryTypes** = `typedData` *extends* [`TypedData`](TypedData.md) ? keyof `typedData` : `string`

## Defined in

node\_modules/viem/\_types/actions/wallet/signTypedData.d.ts:17
