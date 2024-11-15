[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / CreateAxiosDefaults

# Interface: CreateAxiosDefaults\<D\>

Construct a type with the properties of T except for those in type K.

## Extends

- [`Omit`](../type-aliases/Omit.md)\<[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>, `"headers"`\>

## Type Parameters

• **D** = `any`

## Properties

### adapter?

> `optional` **adapter**: [`AxiosAdapterConfig`](../type-aliases/AxiosAdapterConfig.md) \| [`AxiosAdapterConfig`](../type-aliases/AxiosAdapterConfig.md)[]

#### Inherited from

`Omit.adapter`

#### Defined in

node\_modules/axios/index.d.ts:329

***

### auth?

> `optional` **auth**: [`AxiosBasicCredentials`](AxiosBasicCredentials.md)

#### Inherited from

`Omit.auth`

#### Defined in

node\_modules/axios/index.d.ts:330

***

### baseURL?

> `optional` **baseURL**: `string`

#### Inherited from

`Omit.baseURL`

#### Defined in

node\_modules/axios/index.d.ts:319

***

### beforeRedirect()?

> `optional` **beforeRedirect**: (`options`, `responseDetails`) => `void`

#### Parameters

• **options**: [`Record`](../type-aliases/Record.md)\<`string`, `any`\>

• **responseDetails**

• **responseDetails.headers**: [`Record`](../type-aliases/Record.md)\<`string`, `string`\>

• **responseDetails.statusCode**: [`HttpStatusCode`](../enumerations/HttpStatusCode.md)

#### Returns

`void`

#### Inherited from

`Omit.beforeRedirect`

#### Defined in

node\_modules/axios/index.d.ts:342

***

### cancelToken?

> `optional` **cancelToken**: [`CancelToken`](CancelToken.md)

#### Inherited from

`Omit.cancelToken`

#### Defined in

node\_modules/axios/index.d.ts:348

***

### data?

> `optional` **data**: `D`

#### Inherited from

`Omit.data`

#### Defined in

node\_modules/axios/index.d.ts:325

***

### decompress?

> `optional` **decompress**: `boolean`

#### Inherited from

`Omit.decompress`

#### Defined in

node\_modules/axios/index.d.ts:349

***

### env?

> `optional` **env**: `object`

#### FormData()?

> `optional` **FormData**: (...`args`) => `object`

##### Parameters

• ...**args**: `any`[]

##### Returns

`object`

#### Inherited from

`Omit.env`

#### Defined in

node\_modules/axios/index.d.ts:353

***

### family?

> `optional` **family**: [`AddressFamily`](../type-aliases/AddressFamily.md)

#### Inherited from

`Omit.family`

#### Defined in

node\_modules/axios/index.d.ts:357

***

### fetchOptions?

> `optional` **fetchOptions**: [`Record`](../type-aliases/Record.md)\<`string`, `any`\>

#### Inherited from

`Omit.fetchOptions`

#### Defined in

node\_modules/axios/index.d.ts:361

***

### formSerializer?

> `optional` **formSerializer**: [`FormSerializerOptions`](FormSerializerOptions.md)

#### Inherited from

`Omit.formSerializer`

#### Defined in

node\_modules/axios/index.d.ts:356

***

### headers?

> `optional` **headers**: [`AxiosHeaders`](../classes/AxiosHeaders.md) \| [`Partial`](../type-aliases/Partial.md)\<[`RawAxiosHeaders`](RawAxiosHeaders.md) & `object` & `object`\> \| [`Partial`](../type-aliases/Partial.md)\<[`HeadersDefaults`](HeadersDefaults.md)\>

#### Defined in

node\_modules/axios/index.d.ts:390

***

### httpAgent?

> `optional` **httpAgent**: `any`

#### Inherited from

`Omit.httpAgent`

#### Defined in

node\_modules/axios/index.d.ts:345

***

### httpsAgent?

> `optional` **httpsAgent**: `any`

#### Inherited from

`Omit.httpsAgent`

#### Defined in

node\_modules/axios/index.d.ts:346

***

### insecureHTTPParser?

> `optional` **insecureHTTPParser**: `boolean`

#### Inherited from

`Omit.insecureHTTPParser`

#### Defined in

node\_modules/axios/index.d.ts:352

***

### lookup?

> `optional` **lookup**: (`hostname`, `options`, `cb`) => `void` \| (`hostname`, `options`) => `Promise`\<[`LookupAddress`](../type-aliases/LookupAddress.md) \| [[`LookupAddressEntry`](LookupAddressEntry.md) \| [`LookupAddressEntry`](LookupAddressEntry.md)[], [`AddressFamily`](../type-aliases/AddressFamily.md)]\>

#### Inherited from

`Omit.lookup`

#### Defined in

node\_modules/axios/index.d.ts:358

***

### maxBodyLength?

> `optional` **maxBodyLength**: `number`

#### Inherited from

`Omit.maxBodyLength`

#### Defined in

node\_modules/axios/index.d.ts:339

***

### maxContentLength?

> `optional` **maxContentLength**: `number`

#### Inherited from

`Omit.maxContentLength`

#### Defined in

node\_modules/axios/index.d.ts:337

***

### maxRate?

> `optional` **maxRate**: `number` \| [`number`, `number`]

#### Inherited from

`Omit.maxRate`

#### Defined in

node\_modules/axios/index.d.ts:341

***

### maxRedirects?

> `optional` **maxRedirects**: `number`

#### Inherited from

`Omit.maxRedirects`

#### Defined in

node\_modules/axios/index.d.ts:340

***

### method?

> `optional` **method**: `string`

#### Inherited from

`Omit.method`

#### Defined in

node\_modules/axios/index.d.ts:318

***

### onDownloadProgress()?

> `optional` **onDownloadProgress**: (`progressEvent`) => `void`

#### Parameters

• **progressEvent**: [`AxiosProgressEvent`](AxiosProgressEvent.md)

#### Returns

`void`

#### Inherited from

`Omit.onDownloadProgress`

#### Defined in

node\_modules/axios/index.d.ts:336

***

### onUploadProgress()?

> `optional` **onUploadProgress**: (`progressEvent`) => `void`

#### Parameters

• **progressEvent**: [`AxiosProgressEvent`](AxiosProgressEvent.md)

#### Returns

`void`

#### Inherited from

`Omit.onUploadProgress`

#### Defined in

node\_modules/axios/index.d.ts:335

***

### params?

> `optional` **params**: `any`

#### Inherited from

`Omit.params`

#### Defined in

node\_modules/axios/index.d.ts:323

***

### paramsSerializer?

> `optional` **paramsSerializer**: [`ParamsSerializerOptions`](ParamsSerializerOptions.md) \| [`CustomParamsSerializer`](CustomParamsSerializer.md)

#### Inherited from

`Omit.paramsSerializer`

#### Defined in

node\_modules/axios/index.d.ts:324

***

### proxy?

> `optional` **proxy**: `false` \| [`AxiosProxyConfig`](AxiosProxyConfig.md)

#### Inherited from

`Omit.proxy`

#### Defined in

node\_modules/axios/index.d.ts:347

***

### responseEncoding?

> `optional` **responseEncoding**: `string`

#### Inherited from

`Omit.responseEncoding`

#### Defined in

node\_modules/axios/index.d.ts:332

***

### responseType?

> `optional` **responseType**: [`ResponseType`](../type-aliases/ResponseType.md)

#### Inherited from

`Omit.responseType`

#### Defined in

node\_modules/axios/index.d.ts:331

***

### signal?

> `optional` **signal**: [`GenericAbortSignal`](GenericAbortSignal.md)

#### Inherited from

`Omit.signal`

#### Defined in

node\_modules/axios/index.d.ts:351

***

### socketPath?

> `optional` **socketPath**: `null` \| `string`

#### Inherited from

`Omit.socketPath`

#### Defined in

node\_modules/axios/index.d.ts:343

***

### timeout?

> `optional` **timeout**: `number`

#### Inherited from

`Omit.timeout`

#### Defined in

node\_modules/axios/index.d.ts:326

***

### timeoutErrorMessage?

> `optional` **timeoutErrorMessage**: `string`

#### Inherited from

`Omit.timeoutErrorMessage`

#### Defined in

node\_modules/axios/index.d.ts:327

***

### transformRequest?

> `optional` **transformRequest**: [`AxiosRequestTransformer`](AxiosRequestTransformer.md) \| [`AxiosRequestTransformer`](AxiosRequestTransformer.md)[]

#### Inherited from

`Omit.transformRequest`

#### Defined in

node\_modules/axios/index.d.ts:320

***

### transformResponse?

> `optional` **transformResponse**: [`AxiosResponseTransformer`](AxiosResponseTransformer.md) \| [`AxiosResponseTransformer`](AxiosResponseTransformer.md)[]

#### Inherited from

`Omit.transformResponse`

#### Defined in

node\_modules/axios/index.d.ts:321

***

### transitional?

> `optional` **transitional**: [`TransitionalOptions`](TransitionalOptions.md)

#### Inherited from

`Omit.transitional`

#### Defined in

node\_modules/axios/index.d.ts:350

***

### transport?

> `optional` **transport**: `any`

#### Inherited from

`Omit.transport`

#### Defined in

node\_modules/axios/index.d.ts:344

***

### url?

> `optional` **url**: `string`

#### Inherited from

`Omit.url`

#### Defined in

node\_modules/axios/index.d.ts:317

***

### validateStatus?

> `optional` **validateStatus**: `null` \| (`status`) => `boolean`

#### Inherited from

`Omit.validateStatus`

#### Defined in

node\_modules/axios/index.d.ts:338

***

### withCredentials?

> `optional` **withCredentials**: `boolean`

#### Inherited from

`Omit.withCredentials`

#### Defined in

node\_modules/axios/index.d.ts:328

***

### withXSRFToken?

> `optional` **withXSRFToken**: `boolean` \| (`config`) => `undefined` \| `boolean`

#### Inherited from

`Omit.withXSRFToken`

#### Defined in

node\_modules/axios/index.d.ts:360

***

### xsrfCookieName?

> `optional` **xsrfCookieName**: `string`

#### Inherited from

`Omit.xsrfCookieName`

#### Defined in

node\_modules/axios/index.d.ts:333

***

### xsrfHeaderName?

> `optional` **xsrfHeaderName**: `string`

#### Inherited from

`Omit.xsrfHeaderName`

#### Defined in

node\_modules/axios/index.d.ts:334
