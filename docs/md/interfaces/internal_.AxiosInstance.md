[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / AxiosInstance

# Interface: AxiosInstance

[<internal>](../modules/internal_.md).AxiosInstance

## Hierarchy

- [`Axios`](../classes/internal_.Axios.md)

  ↳ **`AxiosInstance`**

  ↳↳ [`AxiosStatic`](internal_.AxiosStatic.md)

## Callable

### AxiosInstance

▸ **AxiosInstance**<`T`, `R`, `D`\>(`config`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`AxiosRequestConfig`](internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

### AxiosInstance

▸ **AxiosInstance**<`T`, `R`, `D`\>(`url`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `config?` | [`AxiosRequestConfig`](internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

## Table of contents

### Properties

- [defaults](internal_.AxiosInstance.md#defaults)
- [interceptors](internal_.AxiosInstance.md#interceptors)

### Methods

- [delete](internal_.AxiosInstance.md#delete)
- [get](internal_.AxiosInstance.md#get)
- [getUri](internal_.AxiosInstance.md#geturi)
- [head](internal_.AxiosInstance.md#head)
- [options](internal_.AxiosInstance.md#options)
- [patch](internal_.AxiosInstance.md#patch)
- [patchForm](internal_.AxiosInstance.md#patchform)
- [post](internal_.AxiosInstance.md#post)
- [postForm](internal_.AxiosInstance.md#postform)
- [put](internal_.AxiosInstance.md#put)
- [putForm](internal_.AxiosInstance.md#putform)
- [request](internal_.AxiosInstance.md#request)

## Properties

### defaults

• **defaults**: [`Omit`](../modules/internal_.md#omit)<[`AxiosDefaults`](internal_.AxiosDefaults.md)<`any`\>, ``"headers"``\> & { `headers`: [`HeadersDefaults`](internal_.HeadersDefaults.md) & { `[key: string]`: [`AxiosHeaderValue`](../modules/internal_.md#axiosheadervalue);  }  }

#### Overrides

[Axios](../classes/internal_.Axios.md).[defaults](../classes/internal_.Axios.md#defaults)

#### Defined in

node_modules/axios/index.d.ts:449

___

### interceptors

• **interceptors**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `request` | [`AxiosInterceptorManager`](internal_.AxiosInterceptorManager.md)<[`AxiosRequestConfig`](internal_.AxiosRequestConfig.md)<`any`\>\> |
| `response` | [`AxiosInterceptorManager`](internal_.AxiosInterceptorManager.md)<[`AxiosResponse`](internal_.AxiosResponse.md)<`any`, `any`\>\> |

#### Inherited from

[Axios](../classes/internal_.Axios.md).[interceptors](../classes/internal_.Axios.md#interceptors)

#### Defined in

node_modules/axios/index.d.ts:427

## Methods

### delete

▸ **delete**<`T`, `R`, `D`\>(`url`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `config?` | [`AxiosRequestConfig`](internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

#### Inherited from

[Axios](../classes/internal_.Axios.md).[delete](../classes/internal_.Axios.md#delete)

___

### get

▸ **get**<`T`, `R`, `D`\>(`url`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `config?` | [`AxiosRequestConfig`](internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

#### Inherited from

[Axios](../classes/internal_.Axios.md).[get](../classes/internal_.Axios.md#get)

___

### getUri

▸ **getUri**(`config?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | [`AxiosRequestConfig`](internal_.AxiosRequestConfig.md)<`any`\> |

#### Returns

`string`

#### Inherited from

[Axios](../classes/internal_.Axios.md).[getUri](../classes/internal_.Axios.md#geturi)

___

### head

▸ **head**<`T`, `R`, `D`\>(`url`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `config?` | [`AxiosRequestConfig`](internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

#### Inherited from

[Axios](../classes/internal_.Axios.md).[head](../classes/internal_.Axios.md#head)

___

### options

▸ **options**<`T`, `R`, `D`\>(`url`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `config?` | [`AxiosRequestConfig`](internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

#### Inherited from

[Axios](../classes/internal_.Axios.md).[options](../classes/internal_.Axios.md#options)

___

### patch

▸ **patch**<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `D` |
| `config?` | [`AxiosRequestConfig`](internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

#### Inherited from

[Axios](../classes/internal_.Axios.md).[patch](../classes/internal_.Axios.md#patch)

___

### patchForm

▸ **patchForm**<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `D` |
| `config?` | [`AxiosRequestConfig`](internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

#### Inherited from

[Axios](../classes/internal_.Axios.md).[patchForm](../classes/internal_.Axios.md#patchform)

___

### post

▸ **post**<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `D` |
| `config?` | [`AxiosRequestConfig`](internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

#### Inherited from

[Axios](../classes/internal_.Axios.md).[post](../classes/internal_.Axios.md#post)

___

### postForm

▸ **postForm**<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `D` |
| `config?` | [`AxiosRequestConfig`](internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

#### Inherited from

[Axios](../classes/internal_.Axios.md).[postForm](../classes/internal_.Axios.md#postform)

___

### put

▸ **put**<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `D` |
| `config?` | [`AxiosRequestConfig`](internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

#### Inherited from

[Axios](../classes/internal_.Axios.md).[put](../classes/internal_.Axios.md#put)

___

### putForm

▸ **putForm**<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `D` |
| `config?` | [`AxiosRequestConfig`](internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

#### Inherited from

[Axios](../classes/internal_.Axios.md).[putForm](../classes/internal_.Axios.md#putform)

___

### request

▸ **request**<`T`, `R`, `D`\>(`config`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`AxiosRequestConfig`](internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

#### Inherited from

[Axios](../classes/internal_.Axios.md).[request](../classes/internal_.Axios.md#request)
