[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / AxiosResponse

# Interface: AxiosResponse<T, D\>

[<internal>](../modules/internal_.md).AxiosResponse

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `D` | `any` |

## Table of contents

### Properties

- [config](internal_.AxiosResponse.md#config)
- [data](internal_.AxiosResponse.md#data)
- [headers](internal_.AxiosResponse.md#headers)
- [request](internal_.AxiosResponse.md#request)
- [status](internal_.AxiosResponse.md#status)
- [statusText](internal_.AxiosResponse.md#statustext)

## Properties

### config

• **config**: [`AxiosRequestConfig`](internal_.AxiosRequestConfig.md)<`D`\>

#### Defined in

node_modules/axios/index.d.ts:345

___

### data

• **data**: `T`

#### Defined in

node_modules/axios/index.d.ts:341

___

### headers

• **headers**: [`AxiosResponseHeaders`](../modules/internal_.md#axiosresponseheaders) \| [`Partial`](../modules/internal_.md#partial)<[`Record`](../modules/internal_.md#record)<`string`, `string`\> & { `set-cookie?`: `string`[]  }\>

#### Defined in

node_modules/axios/index.d.ts:344

___

### request

• `Optional` **request**: `any`

#### Defined in

node_modules/axios/index.d.ts:346

___

### status

• **status**: `number`

#### Defined in

node_modules/axios/index.d.ts:342

___

### statusText

• **statusText**: `string`

#### Defined in

node_modules/axios/index.d.ts:343
