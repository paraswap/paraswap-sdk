[@paraswap/sdk](../README.md) / [Exports](../modules.md) / ConstructProviderFetchInput

# Interface: ConstructProviderFetchInput<T, D\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `D` | extends keyof [`ContractCallerFunctions`](internal_.ContractCallerFunctions.md)<`T`\> = keyof [`ContractCallerFunctions`](internal_.ContractCallerFunctions.md)<`T`\> |

## Hierarchy

- [`ConstructFetchInput`](ConstructFetchInput.md)

  ↳ **`ConstructProviderFetchInput`**

## Table of contents

### Properties

- [apiURL](ConstructProviderFetchInput.md#apiurl)
- [chainId](ConstructProviderFetchInput.md#chainid)
- [contractCaller](ConstructProviderFetchInput.md#contractcaller)
- [fetcher](ConstructProviderFetchInput.md#fetcher)

## Properties

### apiURL

• `Optional` **apiURL**: `string`

#### Inherited from

[ConstructFetchInput](ConstructFetchInput.md).[apiURL](ConstructFetchInput.md#apiurl)

#### Defined in

[src/types.ts:23](https://github.com/paraswap/paraswap-sdk/blob/fix/update-paraswap-core-v1.0.4/src/types.ts#L23)

___

### chainId

• **chainId**: `number`

#### Inherited from

[ConstructFetchInput](ConstructFetchInput.md).[chainId](ConstructFetchInput.md#chainid)

#### Defined in

[src/types.ts:24](https://github.com/paraswap/paraswap-sdk/blob/fix/update-paraswap-core-v1.0.4/src/types.ts#L24)

___

### contractCaller

• **contractCaller**: [`Pick`](../modules/internal_.md#pick)<[`ContractCallerFunctions`](internal_.ContractCallerFunctions.md)<`T`\>, `D`\>

#### Defined in

[src/types.ts:106](https://github.com/paraswap/paraswap-sdk/blob/fix/update-paraswap-core-v1.0.4/src/types.ts#L106)

___

### fetcher

• **fetcher**: [`FetcherFunction`](../modules/internal_.md#fetcherfunction)

#### Inherited from

[ConstructFetchInput](ConstructFetchInput.md).[fetcher](ConstructFetchInput.md#fetcher)

#### Defined in

[src/types.ts:47](https://github.com/paraswap/paraswap-sdk/blob/fix/update-paraswap-core-v1.0.4/src/types.ts#L47)
