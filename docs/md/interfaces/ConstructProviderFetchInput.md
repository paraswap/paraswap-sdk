[**@paraswap/sdk**](../README.md) • **Docs**

***

[@paraswap/sdk](../globals.md) / ConstructProviderFetchInput

# Interface: ConstructProviderFetchInput\<T, D\>

## Extends

- [`ConstructFetchInput`](ConstructFetchInput.md)

## Type Parameters

• **T**

• **D** *extends* keyof [`ContractCallerFunctions`](ContractCallerFunctions.md)\<`T`\> = keyof [`ContractCallerFunctions`](ContractCallerFunctions.md)\<`T`\>

## Properties

### apiURL?

> `optional` **apiURL**: `string`

#### Inherited from

[`ConstructFetchInput`](ConstructFetchInput.md).[`apiURL`](ConstructFetchInput.md#apiurl)

#### Defined in

[src/types.ts:37](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L37)

***

### chainId

> **chainId**: `number`

#### Inherited from

[`ConstructFetchInput`](ConstructFetchInput.md).[`chainId`](ConstructFetchInput.md#chainid)

#### Defined in

[src/types.ts:39](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L39)

***

### contractCaller

> **contractCaller**: [`Pick`](../-internal-/type-aliases/Pick.md)\<[`ContractCallerFunctions`](ContractCallerFunctions.md)\<`T`\>, `D`\>

#### Defined in

[src/types.ts:124](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L124)

***

### fetcher

> **fetcher**: [`FetcherFunction`](../type-aliases/FetcherFunction.md)

#### Inherited from

[`ConstructFetchInput`](ConstructFetchInput.md).[`fetcher`](ConstructFetchInput.md#fetcher)

#### Defined in

[src/types.ts:65](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L65)

***

### version?

> `optional` **version**: [`ParaSwapVersion`](../type-aliases/ParaSwapVersion.md)

#### Inherited from

[`ConstructFetchInput`](ConstructFetchInput.md).[`version`](ConstructFetchInput.md#version)

#### Defined in

[src/types.ts:38](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L38)
