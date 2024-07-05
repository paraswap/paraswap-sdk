[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / FetcherPostInput

# Interface: FetcherPostInput<URL\>

[<internal>](../modules/internal_.md).FetcherPostInput

## Type parameters

| Name | Type |
| :------ | :------ |
| `URL` | extends `string` = `string` |

## Hierarchy

- [`FetcherInputBase`](internal_.FetcherInputBase.md)<`URL`\>

  ↳ **`FetcherPostInput`**

## Table of contents

### Properties

- [data](internal_.FetcherPostInput.md#data)
- [headers](internal_.FetcherPostInput.md#headers)
- [method](internal_.FetcherPostInput.md#method)
- [signal](internal_.FetcherPostInput.md#signal)
- [url](internal_.FetcherPostInput.md#url)

## Properties

### data

• **data**: [`Record`](../modules/internal_.md#record)<`string`, `any`\>

#### Defined in

[src/types.ts:54](https://github.com/paraswap/paraswap-sdk/blob/feat/new_v6_params/src/types.ts#L54)

___

### headers

• `Optional` **headers**: [`Record`](../modules/internal_.md#record)<`string`, `string`\>

#### Inherited from

[FetcherInputBase](internal_.FetcherInputBase.md).[headers](internal_.FetcherInputBase.md#headers)

#### Defined in

[src/types.ts:44](https://github.com/paraswap/paraswap-sdk/blob/feat/new_v6_params/src/types.ts#L44)

___

### method

• **method**: ``"POST"``

#### Defined in

[src/types.ts:53](https://github.com/paraswap/paraswap-sdk/blob/feat/new_v6_params/src/types.ts#L53)

___

### signal

• `Optional` **signal**: `AbortSignal`

#### Inherited from

[FetcherInputBase](internal_.FetcherInputBase.md).[signal](internal_.FetcherInputBase.md#signal)

#### Defined in

[src/types.ts:45](https://github.com/paraswap/paraswap-sdk/blob/feat/new_v6_params/src/types.ts#L45)

___

### url

• **url**: `URL`

#### Inherited from

[FetcherInputBase](internal_.FetcherInputBase.md).[url](internal_.FetcherInputBase.md#url)

#### Defined in

[src/types.ts:43](https://github.com/paraswap/paraswap-sdk/blob/feat/new_v6_params/src/types.ts#L43)
