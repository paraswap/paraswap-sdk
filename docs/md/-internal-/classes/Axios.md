[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / Axios

# Class: Axios

## Extended by

- [`AxiosInstance`](../interfaces/AxiosInstance.md)

## Constructors

### new Axios()

> **new Axios**(`config`?): [`Axios`](Axios.md)

#### Parameters

• **config?**: [`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`any`\>

#### Returns

[`Axios`](Axios.md)

#### Defined in

node\_modules/axios/index.d.ts:486

## Properties

### defaults

> **defaults**: [`AxiosDefaults`](../interfaces/AxiosDefaults.md)\<`any`\>

#### Defined in

node\_modules/axios/index.d.ts:487

***

### interceptors

> **interceptors**: `object`

#### request

> **request**: [`AxiosInterceptorManager`](../interfaces/AxiosInterceptorManager.md)\<[`InternalAxiosRequestConfig`](../interfaces/InternalAxiosRequestConfig.md)\<`any`\>\>

#### response

> **response**: [`AxiosInterceptorManager`](../interfaces/AxiosInterceptorManager.md)\<[`AxiosResponse`](../interfaces/AxiosResponse.md)\<`any`, `any`\>\>

#### Defined in

node\_modules/axios/index.d.ts:488

## Methods

### delete()

> **delete**\<`T`, `R`, `D`\>(`url`, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `any`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **config?**: [`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Defined in

node\_modules/axios/index.d.ts:495

***

### get()

> **get**\<`T`, `R`, `D`\>(`url`, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `any`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **config?**: [`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Defined in

node\_modules/axios/index.d.ts:494

***

### getUri()

> **getUri**(`config`?): `string`

#### Parameters

• **config?**: [`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`any`\>

#### Returns

`string`

#### Defined in

node\_modules/axios/index.d.ts:492

***

### head()

> **head**\<`T`, `R`, `D`\>(`url`, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `any`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **config?**: [`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Defined in

node\_modules/axios/index.d.ts:496

***

### options()

> **options**\<`T`, `R`, `D`\>(`url`, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `any`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **config?**: [`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Defined in

node\_modules/axios/index.d.ts:497

***

### patch()

> **patch**\<`T`, `R`, `D`\>(`url`, `data`?, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `any`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **data?**: `D`

• **config?**: [`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Defined in

node\_modules/axios/index.d.ts:500

***

### patchForm()

> **patchForm**\<`T`, `R`, `D`\>(`url`, `data`?, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `any`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **data?**: `D`

• **config?**: [`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Defined in

node\_modules/axios/index.d.ts:503

***

### post()

> **post**\<`T`, `R`, `D`\>(`url`, `data`?, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `any`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **data?**: `D`

• **config?**: [`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Defined in

node\_modules/axios/index.d.ts:498

***

### postForm()

> **postForm**\<`T`, `R`, `D`\>(`url`, `data`?, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `any`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **data?**: `D`

• **config?**: [`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Defined in

node\_modules/axios/index.d.ts:501

***

### put()

> **put**\<`T`, `R`, `D`\>(`url`, `data`?, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `any`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **data?**: `D`

• **config?**: [`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Defined in

node\_modules/axios/index.d.ts:499

***

### putForm()

> **putForm**\<`T`, `R`, `D`\>(`url`, `data`?, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `any`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **data?**: `D`

• **config?**: [`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Defined in

node\_modules/axios/index.d.ts:502

***

### request()

> **request**\<`T`, `R`, `D`\>(`config`): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `any`\>

• **D** = `any`

#### Parameters

• **config**: [`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Defined in

node\_modules/axios/index.d.ts:493
