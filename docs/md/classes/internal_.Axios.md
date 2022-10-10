[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Axios

# Class: Axios

[<internal>](../modules/internal_.md).Axios

## Hierarchy

- **`Axios`**

  ↳ [`AxiosInstance`](../interfaces/internal_.AxiosInstance.md)

## Table of contents

### Constructors

- [constructor](internal_.Axios.md#constructor)

### Properties

- [defaults](internal_.Axios.md#defaults)
- [interceptors](internal_.Axios.md#interceptors)

### Methods

- [delete](internal_.Axios.md#delete)
- [get](internal_.Axios.md#get)
- [getUri](internal_.Axios.md#geturi)
- [head](internal_.Axios.md#head)
- [options](internal_.Axios.md#options)
- [patch](internal_.Axios.md#patch)
- [patchForm](internal_.Axios.md#patchform)
- [post](internal_.Axios.md#post)
- [postForm](internal_.Axios.md#postform)
- [put](internal_.Axios.md#put)
- [putForm](internal_.Axios.md#putform)
- [request](internal_.Axios.md#request)

## Constructors

### constructor

• **new Axios**(`config?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | [`AxiosRequestConfig`](../interfaces/internal_.AxiosRequestConfig.md)<`any`\> |

## Properties

### defaults

• **defaults**: [`AxiosDefaults`](../interfaces/internal_.AxiosDefaults.md)<`any`\>

#### Defined in

node_modules/axios/index.d.ts:216

___

### interceptors

• **interceptors**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `request` | [`AxiosInterceptorManager`](../interfaces/internal_.AxiosInterceptorManager.md)<[`AxiosRequestConfig`](../interfaces/internal_.AxiosRequestConfig.md)<`any`\>\> |
| `response` | [`AxiosInterceptorManager`](../interfaces/internal_.AxiosInterceptorManager.md)<[`AxiosResponse`](../interfaces/internal_.AxiosResponse.md)<`any`, `any`\>\> |

#### Defined in

node_modules/axios/index.d.ts:217

## Methods

### delete

▸ **delete**<`T`, `R`, `D`\>(`url`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](../interfaces/internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `config?` | [`AxiosRequestConfig`](../interfaces/internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

___

### get

▸ **get**<`T`, `R`, `D`\>(`url`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](../interfaces/internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `config?` | [`AxiosRequestConfig`](../interfaces/internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

___

### getUri

▸ **getUri**(`config?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | [`AxiosRequestConfig`](../interfaces/internal_.AxiosRequestConfig.md)<`any`\> |

#### Returns

`string`

___

### head

▸ **head**<`T`, `R`, `D`\>(`url`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](../interfaces/internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `config?` | [`AxiosRequestConfig`](../interfaces/internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

___

### options

▸ **options**<`T`, `R`, `D`\>(`url`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](../interfaces/internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `config?` | [`AxiosRequestConfig`](../interfaces/internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

___

### patch

▸ **patch**<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](../interfaces/internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `D` |
| `config?` | [`AxiosRequestConfig`](../interfaces/internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

___

### patchForm

▸ **patchForm**<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](../interfaces/internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `D` |
| `config?` | [`AxiosRequestConfig`](../interfaces/internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

___

### post

▸ **post**<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](../interfaces/internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `D` |
| `config?` | [`AxiosRequestConfig`](../interfaces/internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

___

### postForm

▸ **postForm**<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](../interfaces/internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `D` |
| `config?` | [`AxiosRequestConfig`](../interfaces/internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

___

### put

▸ **put**<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](../interfaces/internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `D` |
| `config?` | [`AxiosRequestConfig`](../interfaces/internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

___

### putForm

▸ **putForm**<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](../interfaces/internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `D` |
| `config?` | [`AxiosRequestConfig`](../interfaces/internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

___

### request

▸ **request**<`T`, `R`, `D`\>(`config`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](../interfaces/internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`AxiosRequestConfig`](../interfaces/internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>
