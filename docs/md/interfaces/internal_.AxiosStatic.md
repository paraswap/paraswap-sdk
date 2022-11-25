[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / AxiosStatic

# Interface: AxiosStatic

[<internal>](../modules/internal_.md).AxiosStatic

## Hierarchy

- [`AxiosInstance`](internal_.AxiosInstance.md)

  ↳ **`AxiosStatic`**

## Callable

### AxiosStatic

▸ **AxiosStatic**<`T`, `R`, `D`\>(`config`): `Promise`<`R`\>

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

### AxiosStatic

▸ **AxiosStatic**<`T`, `R`, `D`\>(`url`, `config?`): `Promise`<`R`\>

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

- [Axios](internal_.AxiosStatic.md#axios)
- [AxiosError](internal_.AxiosStatic.md#axioserror)
- [Cancel](internal_.AxiosStatic.md#cancel)
- [CancelToken](internal_.AxiosStatic.md#canceltoken)
- [VERSION](internal_.AxiosStatic.md#version)
- [defaults](internal_.AxiosStatic.md#defaults)
- [interceptors](internal_.AxiosStatic.md#interceptors)

### Methods

- [all](internal_.AxiosStatic.md#all)
- [create](internal_.AxiosStatic.md#create)
- [delete](internal_.AxiosStatic.md#delete)
- [formToJSON](internal_.AxiosStatic.md#formtojson)
- [get](internal_.AxiosStatic.md#get)
- [getUri](internal_.AxiosStatic.md#geturi)
- [head](internal_.AxiosStatic.md#head)
- [isAxiosError](internal_.AxiosStatic.md#isaxioserror)
- [isCancel](internal_.AxiosStatic.md#iscancel)
- [options](internal_.AxiosStatic.md#options)
- [patch](internal_.AxiosStatic.md#patch)
- [patchForm](internal_.AxiosStatic.md#patchform)
- [post](internal_.AxiosStatic.md#post)
- [postForm](internal_.AxiosStatic.md#postform)
- [put](internal_.AxiosStatic.md#put)
- [putForm](internal_.AxiosStatic.md#putform)
- [request](internal_.AxiosStatic.md#request)
- [spread](internal_.AxiosStatic.md#spread)
- [toFormData](internal_.AxiosStatic.md#toformdata)

## Properties

### Axios

• **Axios**: typeof [`Axios`](../classes/internal_.Axios.md)

#### Defined in

node_modules/axios/index.d.ts:470

___

### AxiosError

• **AxiosError**: typeof [`AxiosError`](../classes/internal_.AxiosError.md)

#### Defined in

node_modules/axios/index.d.ts:471

___

### Cancel

• **Cancel**: [`CancelStatic`](internal_.CancelStatic.md)

#### Defined in

node_modules/axios/index.d.ts:468

___

### CancelToken

• **CancelToken**: [`CancelTokenStatic`](internal_.CancelTokenStatic.md)

#### Defined in

node_modules/axios/index.d.ts:469

___

### VERSION

• `Readonly` **VERSION**: `string`

#### Defined in

node_modules/axios/index.d.ts:472

___

### defaults

• **defaults**: [`Omit`](../modules/internal_.md#omit)<[`AxiosDefaults`](internal_.AxiosDefaults.md)<`any`\>, ``"headers"``\> & { `headers`: [`HeadersDefaults`](internal_.HeadersDefaults.md) & { `[key: string]`: [`AxiosHeaderValue`](../modules/internal_.md#axiosheadervalue);  }  }

#### Inherited from

[AxiosInstance](internal_.AxiosInstance.md).[defaults](internal_.AxiosInstance.md#defaults)

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

[AxiosInstance](internal_.AxiosInstance.md).[interceptors](internal_.AxiosInstance.md#interceptors)

#### Defined in

node_modules/axios/index.d.ts:427

## Methods

### all

▸ **all**<`T`\>(`values`): `Promise`<`T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | (`T` \| `Promise`<`T`\>)[] |

#### Returns

`Promise`<`T`[]\>

___

### create

▸ **create**(`config?`): [`AxiosInstance`](internal_.AxiosInstance.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | [`CreateAxiosDefaults`](internal_.CreateAxiosDefaults.md)<`any`\> |

#### Returns

[`AxiosInstance`](internal_.AxiosInstance.md)

___

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

[AxiosInstance](internal_.AxiosInstance.md).[delete](internal_.AxiosInstance.md#delete)

___

### formToJSON

▸ **formToJSON**(`form`): `object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `form` | [`GenericFormData`](internal_.GenericFormData.md) \| [`GenericHTMLFormElement`](internal_.GenericHTMLFormElement.md) |

#### Returns

`object`

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

[AxiosInstance](internal_.AxiosInstance.md).[get](internal_.AxiosInstance.md#get)

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

[AxiosInstance](internal_.AxiosInstance.md).[getUri](internal_.AxiosInstance.md#geturi)

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

[AxiosInstance](internal_.AxiosInstance.md).[head](internal_.AxiosInstance.md#head)

___

### isAxiosError

▸ **isAxiosError**<`T`, `D`\>(`payload`): payload is AxiosError<T, D\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `any` |

#### Returns

payload is AxiosError<T, D\>

___

### isCancel

▸ **isCancel**(`value`): value is Cancel

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Cancel

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

[AxiosInstance](internal_.AxiosInstance.md).[options](internal_.AxiosInstance.md#options)

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

[AxiosInstance](internal_.AxiosInstance.md).[patch](internal_.AxiosInstance.md#patch)

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

[AxiosInstance](internal_.AxiosInstance.md).[patchForm](internal_.AxiosInstance.md#patchform)

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

[AxiosInstance](internal_.AxiosInstance.md).[post](internal_.AxiosInstance.md#post)

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

[AxiosInstance](internal_.AxiosInstance.md).[postForm](internal_.AxiosInstance.md#postform)

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

[AxiosInstance](internal_.AxiosInstance.md).[put](internal_.AxiosInstance.md#put)

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

[AxiosInstance](internal_.AxiosInstance.md).[putForm](internal_.AxiosInstance.md#putform)

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

[AxiosInstance](internal_.AxiosInstance.md).[request](internal_.AxiosInstance.md#request)

___

### spread

▸ **spread**<`T`, `R`\>(`callback`): (`array`: `T`[]) => `R`

#### Type parameters

| Name |
| :------ |
| `T` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (...`args`: `T`[]) => `R` |

#### Returns

`fn`

▸ (`array`): `R`

##### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T`[] |

##### Returns

`R`

___

### toFormData

▸ **toFormData**(`sourceObj`, `targetFormData?`, `options?`): [`GenericFormData`](internal_.GenericFormData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourceObj` | `object` |
| `targetFormData?` | [`GenericFormData`](internal_.GenericFormData.md) |
| `options?` | [`FormSerializerOptions`](internal_.FormSerializerOptions.md) |

#### Returns

[`GenericFormData`](internal_.GenericFormData.md)
