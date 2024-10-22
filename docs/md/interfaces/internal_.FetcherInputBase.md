[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / FetcherInputBase

# Interface: FetcherInputBase<URL\>

[<internal>](../modules/internal_.md).FetcherInputBase

## Type parameters

| Name | Type |
| :------ | :------ |
| `URL` | extends `string` = `string` |

## Hierarchy

- **`FetcherInputBase`**

  ↳ [`FetcherGetInput`](internal_.FetcherGetInput.md)

  ↳ [`FetcherPostInput`](internal_.FetcherPostInput.md)

## Table of contents

### Properties

- [headers](internal_.FetcherInputBase.md#headers)
- [signal](internal_.FetcherInputBase.md#signal)
- [url](internal_.FetcherInputBase.md#url)

## Properties

### headers

• `Optional` **headers**: [`Record`](../modules/internal_.md#record)<`string`, `string`\>

#### Defined in

[src/types.ts:45](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L45)

___

### signal

• `Optional` **signal**: `AbortSignal`

#### Defined in

[src/types.ts:46](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L46)

___

### url

• **url**: `URL`

#### Defined in

[src/types.ts:44](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L44)
