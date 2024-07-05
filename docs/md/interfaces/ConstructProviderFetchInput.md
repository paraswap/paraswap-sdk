[@paraswap/sdk](../README.md) / [Exports](../modules.md) / ConstructProviderFetchInput

# Interface: ConstructProviderFetchInput<T, D\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `D` | extends keyof [`ContractCallerFunctions`](ContractCallerFunctions.md)<`T`\> = keyof [`ContractCallerFunctions`](ContractCallerFunctions.md)<`T`\> |

## Hierarchy

- [`ConstructFetchInput`](ConstructFetchInput.md)

  ↳ **`ConstructProviderFetchInput`**

## Table of contents

### Properties

- [apiURL](ConstructProviderFetchInput.md#apiurl)
- [chainId](ConstructProviderFetchInput.md#chainid)
- [contractCaller](ConstructProviderFetchInput.md#contractcaller)
- [fetcher](ConstructProviderFetchInput.md#fetcher)
- [version](ConstructProviderFetchInput.md#version)

## Properties

### apiURL

• `Optional` **apiURL**: `string`

#### Inherited from

[ConstructFetchInput](ConstructFetchInput.md).[apiURL](ConstructFetchInput.md#apiurl)

#### Defined in

[src/types.ts:37](https://github.com/paraswap/paraswap-sdk/blob/feat/new_v6_params/src/types.ts#L37)

___

### chainId

• **chainId**: `number`

#### Inherited from

[ConstructFetchInput](ConstructFetchInput.md).[chainId](ConstructFetchInput.md#chainid)

#### Defined in

[src/types.ts:39](https://github.com/paraswap/paraswap-sdk/blob/feat/new_v6_params/src/types.ts#L39)

___

### contractCaller

• **contractCaller**: [`Pick`](../modules/internal_.md#pick)<[`ContractCallerFunctions`](ContractCallerFunctions.md)<`T`\>, `D`\>

#### Defined in

[src/types.ts:124](https://github.com/paraswap/paraswap-sdk/blob/feat/new_v6_params/src/types.ts#L124)

___

### fetcher

• **fetcher**: [`FetcherFunction`](../modules.md#fetcherfunction)

#### Inherited from

[ConstructFetchInput](ConstructFetchInput.md).[fetcher](ConstructFetchInput.md#fetcher)

#### Defined in

[src/types.ts:65](https://github.com/paraswap/paraswap-sdk/blob/feat/new_v6_params/src/types.ts#L65)

___

### version

• `Optional` **version**: [`ParaSwapVersion`](../modules.md#paraswapversion)

#### Inherited from

[ConstructFetchInput](ConstructFetchInput.md).[version](ConstructFetchInput.md#version)

#### Defined in

[src/types.ts:38](https://github.com/paraswap/paraswap-sdk/blob/feat/new_v6_params/src/types.ts#L38)
