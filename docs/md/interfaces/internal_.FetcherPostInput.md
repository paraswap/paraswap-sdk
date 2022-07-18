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

[src/types.ts:39](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/add-slippage-for-swap-and-limit-order-building/src/types.ts#L39)

___

### headers

• `Optional` **headers**: [`Record`](../modules/internal_.md#record)<`string`, `string`\>

#### Inherited from

[FetcherInputBase](internal_.FetcherInputBase.md).[headers](internal_.FetcherInputBase.md#headers)

#### Defined in

[src/types.ts:29](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/add-slippage-for-swap-and-limit-order-building/src/types.ts#L29)

___

### method

• **method**: ``"POST"``

#### Defined in

[src/types.ts:38](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/add-slippage-for-swap-and-limit-order-building/src/types.ts#L38)

___

### signal

• `Optional` **signal**: `AbortSignal`

#### Inherited from

[FetcherInputBase](internal_.FetcherInputBase.md).[signal](internal_.FetcherInputBase.md#signal)

#### Defined in

[src/types.ts:30](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/add-slippage-for-swap-and-limit-order-building/src/types.ts#L30)

___

### url

• **url**: `URL`

#### Inherited from

[FetcherInputBase](internal_.FetcherInputBase.md).[url](internal_.FetcherInputBase.md#url)

#### Defined in

[src/types.ts:28](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/feat/add-slippage-for-swap-and-limit-order-building/src/types.ts#L28)
