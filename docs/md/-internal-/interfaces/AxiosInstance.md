[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AxiosInstance

# Interface: AxiosInstance()

## Extends

- [`Axios`](../classes/Axios.md)

## Extended by

- [`AxiosStatic`](AxiosStatic.md)

> **AxiosInstance**\<`T`, `R`, `D`\>(`config`): `Promise`\<`R`\>

## Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`\>

• **D** = `any`

## Parameters

• **config**: [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

## Returns

`Promise`\<`R`\>

## Defined in

node\_modules/axios/index.d.ts:507

> **AxiosInstance**\<`T`, `R`, `D`\>(`url`, `config`?): `Promise`\<`R`\>

## Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`\>

• **D** = `any`

## Parameters

• **url**: `string`

• **config?**: [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

## Returns

`Promise`\<`R`\>

## Defined in

node\_modules/axios/index.d.ts:508

## Properties

### defaults

> **defaults**: [`Omit`](../type-aliases/Omit.md)\<[`AxiosDefaults`](AxiosDefaults.md)\<`any`\>, `"headers"`\> & `object`

#### Type declaration

##### headers

> **headers**: [`HeadersDefaults`](HeadersDefaults.md) & `object`

#### Overrides

[`Axios`](../classes/Axios.md).[`defaults`](../classes/Axios.md#defaults)

#### Defined in

node\_modules/axios/index.d.ts:510

***

### interceptors

> **interceptors**: `object`

#### request

> **request**: [`AxiosInterceptorManager`](AxiosInterceptorManager.md)\<[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md)\<`any`\>\>

#### response

> **response**: [`AxiosInterceptorManager`](AxiosInterceptorManager.md)\<[`AxiosResponse`](AxiosResponse.md)\<`any`, `any`\>\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`interceptors`](../classes/Axios.md#interceptors)

#### Defined in

node\_modules/axios/index.d.ts:488

## Methods

### delete()

> **delete**\<`T`, `R`, `D`\>(`url`, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **config?**: [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`delete`](../classes/Axios.md#delete)

#### Defined in

node\_modules/axios/index.d.ts:495

***

### get()

> **get**\<`T`, `R`, `D`\>(`url`, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **config?**: [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`get`](../classes/Axios.md#get)

#### Defined in

node\_modules/axios/index.d.ts:494

***

### getUri()

> **getUri**(`config`?): `string`

#### Parameters

• **config?**: [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`any`\>

#### Returns

`string`

#### Inherited from

[`Axios`](../classes/Axios.md).[`getUri`](../classes/Axios.md#geturi)

#### Defined in

node\_modules/axios/index.d.ts:492

***

### head()

> **head**\<`T`, `R`, `D`\>(`url`, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **config?**: [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`head`](../classes/Axios.md#head)

#### Defined in

node\_modules/axios/index.d.ts:496

***

### options()

> **options**\<`T`, `R`, `D`\>(`url`, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **config?**: [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`options`](../classes/Axios.md#options)

#### Defined in

node\_modules/axios/index.d.ts:497

***

### patch()

> **patch**\<`T`, `R`, `D`\>(`url`, `data`?, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **data?**: `D`

• **config?**: [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`patch`](../classes/Axios.md#patch)

#### Defined in

node\_modules/axios/index.d.ts:500

***

### patchForm()

> **patchForm**\<`T`, `R`, `D`\>(`url`, `data`?, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **data?**: `D`

• **config?**: [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`patchForm`](../classes/Axios.md#patchform)

#### Defined in

node\_modules/axios/index.d.ts:503

***

### post()

> **post**\<`T`, `R`, `D`\>(`url`, `data`?, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **data?**: `D`

• **config?**: [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`post`](../classes/Axios.md#post)

#### Defined in

node\_modules/axios/index.d.ts:498

***

### postForm()

> **postForm**\<`T`, `R`, `D`\>(`url`, `data`?, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **data?**: `D`

• **config?**: [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`postForm`](../classes/Axios.md#postform)

#### Defined in

node\_modules/axios/index.d.ts:501

***

### put()

> **put**\<`T`, `R`, `D`\>(`url`, `data`?, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **data?**: `D`

• **config?**: [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`put`](../classes/Axios.md#put)

#### Defined in

node\_modules/axios/index.d.ts:499

***

### putForm()

> **putForm**\<`T`, `R`, `D`\>(`url`, `data`?, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **data?**: `D`

• **config?**: [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`putForm`](../classes/Axios.md#putform)

#### Defined in

node\_modules/axios/index.d.ts:502

***

### request()

> **request**\<`T`, `R`, `D`\>(`config`): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`\>

• **D** = `any`

#### Parameters

• **config**: [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`request`](../classes/Axios.md#request-1)

#### Defined in

node\_modules/axios/index.d.ts:493
