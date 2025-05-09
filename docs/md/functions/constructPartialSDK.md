[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / constructPartialSDK

# Function: constructPartialSDK()

> **constructPartialSDK**\<`Config`, `Funcs`\>(`config`, ...`funcs`): [`InferWithTxResponse`](../-internal-/type-aliases/InferWithTxResponse.md)\<`Config`, `Funcs`\> & [`Required`](../-internal-/type-aliases/Required.md)\<[`ConstructBaseInput`](../-internal-/interfaces/ConstructBaseInput.md)\>

## Type Parameters

• **Config** *extends* [`ConstructBaseInput`](../-internal-/interfaces/ConstructBaseInput.md)

• **Funcs** *extends* [[`SDKFunction`](../-internal-/type-aliases/SDKFunction.md)\<`Config`\>, `...SDKFunction<Config>[]`]

## Parameters

• **config**: `Config`

• ...**funcs**: `Funcs`

## Returns

[`InferWithTxResponse`](../-internal-/type-aliases/InferWithTxResponse.md)\<`Config`, `Funcs`\> & [`Required`](../-internal-/type-aliases/Required.md)\<[`ConstructBaseInput`](../-internal-/interfaces/ConstructBaseInput.md)\>

## Description

construct composable SDK with methods you choose yourself

## Defined in

[src/sdk/partial.ts:84](https://github.com/VeloraDEX/paraswap-sdk/blob/feat/velora/src/sdk/partial.ts#L84)
