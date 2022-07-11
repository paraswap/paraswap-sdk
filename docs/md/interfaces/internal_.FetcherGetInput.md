[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / FetcherGetInput

# Interface: FetcherGetInput<URL\>

[<internal>](../modules/internal_.md).FetcherGetInput

## Type parameters

| Name | Type |
| :------ | :------ |
| `URL` | extends `string` = `string` |

## Hierarchy

- [`FetcherInputBase`](internal_.FetcherInputBase.md)<`URL`\>

  ↳ **`FetcherGetInput`**

## Table of contents

### Properties

- [headers](internal_.FetcherGetInput.md#headers)
- [method](internal_.FetcherGetInput.md#method)
- [signal](internal_.FetcherGetInput.md#signal)
- [url](internal_.FetcherGetInput.md#url)

## Properties

### headers

• `Optional` **headers**: [`Record`](../modules/internal_.md#record)<`string`, `string`\>

#### Inherited from

[FetcherInputBase](internal_.FetcherInputBase.md).[headers](internal_.FetcherInputBase.md#headers)

#### Defined in

[src/types.ts:29](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/remove_deprecated/src/types.ts#L29)

___

### method

• **method**: ``"GET"``

#### Defined in

[src/types.ts:34](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/remove_deprecated/src/types.ts#L34)

___

### signal

• `Optional` **signal**: `AbortSignal`

#### Inherited from

[FetcherInputBase](internal_.FetcherInputBase.md).[signal](internal_.FetcherInputBase.md#signal)

#### Defined in

[src/types.ts:30](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/remove_deprecated/src/types.ts#L30)

___

### url

• **url**: `URL`

#### Inherited from

[FetcherInputBase](internal_.FetcherInputBase.md).[url](internal_.FetcherInputBase.md#url)

#### Defined in

[src/types.ts:28](https://github.com/paraswap/paraswap-sdk-limit-orders/blob/chore/remove_deprecated/src/types.ts#L28)
