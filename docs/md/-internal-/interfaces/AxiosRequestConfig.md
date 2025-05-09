[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AxiosRequestConfig

# Interface: AxiosRequestConfig\<D\>

## Extended by

- [`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md)

## Type Parameters

• **D** = `any`

## Properties

### adapter?

> `optional` **adapter**: [`AxiosAdapterConfig`](../type-aliases/AxiosAdapterConfig.md) \| [`AxiosAdapterConfig`](../type-aliases/AxiosAdapterConfig.md)[]

#### Defined in

node\_modules/axios/index.d.ts:329

***

### auth?

> `optional` **auth**: [`AxiosBasicCredentials`](AxiosBasicCredentials.md)

#### Defined in

node\_modules/axios/index.d.ts:330

***

### baseURL?

> `optional` **baseURL**: `string`

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

#### Defined in

node\_modules/axios/index.d.ts:342

***

### cancelToken?

> `optional` **cancelToken**: [`CancelToken`](CancelToken.md)

#### Defined in

node\_modules/axios/index.d.ts:348

***

### data?

> `optional` **data**: `D`

#### Defined in

node\_modules/axios/index.d.ts:325

***

### decompress?

> `optional` **decompress**: `boolean`

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

#### Defined in

node\_modules/axios/index.d.ts:353

***

### family?

> `optional` **family**: [`AddressFamily`](../type-aliases/AddressFamily.md)

#### Defined in

node\_modules/axios/index.d.ts:357

***

### fetchOptions?

> `optional` **fetchOptions**: [`Record`](../type-aliases/Record.md)\<`string`, `any`\>

#### Defined in

node\_modules/axios/index.d.ts:361

***

### formSerializer?

> `optional` **formSerializer**: [`FormSerializerOptions`](FormSerializerOptions.md)

#### Defined in

node\_modules/axios/index.d.ts:356

***

### headers?

> `optional` **headers**: [`AxiosHeaders`](../classes/AxiosHeaders.md) \| [`Partial`](../type-aliases/Partial.md)\<[`RawAxiosHeaders`](RawAxiosHeaders.md) & `object` & `object`\> & [`Partial`](../type-aliases/Partial.md)\<`object` & `object`\>

#### Defined in

node\_modules/axios/index.d.ts:322

***

### httpAgent?

> `optional` **httpAgent**: `any`

#### Defined in

node\_modules/axios/index.d.ts:345

***

### httpsAgent?

> `optional` **httpsAgent**: `any`

#### Defined in

node\_modules/axios/index.d.ts:346

***

### insecureHTTPParser?

> `optional` **insecureHTTPParser**: `boolean`

#### Defined in

node\_modules/axios/index.d.ts:352

***

### lookup?

> `optional` **lookup**: (`hostname`, `options`, `cb`) => `void` \| (`hostname`, `options`) => `Promise`\<[`LookupAddress`](../type-aliases/LookupAddress.md) \| [[`LookupAddressEntry`](LookupAddressEntry.md) \| [`LookupAddressEntry`](LookupAddressEntry.md)[], [`AddressFamily`](../type-aliases/AddressFamily.md)]\>

#### Defined in

node\_modules/axios/index.d.ts:358

***

### maxBodyLength?

> `optional` **maxBodyLength**: `number`

#### Defined in

node\_modules/axios/index.d.ts:339

***

### maxContentLength?

> `optional` **maxContentLength**: `number`

#### Defined in

node\_modules/axios/index.d.ts:337

***

### maxRate?

> `optional` **maxRate**: `number` \| [`number`, `number`]

#### Defined in

node\_modules/axios/index.d.ts:341

***

### maxRedirects?

> `optional` **maxRedirects**: `number`

#### Defined in

node\_modules/axios/index.d.ts:340

***

### method?

> `optional` **method**: `string`

#### Defined in

node\_modules/axios/index.d.ts:318

***

### onDownloadProgress()?

> `optional` **onDownloadProgress**: (`progressEvent`) => `void`

#### Parameters

• **progressEvent**: [`AxiosProgressEvent`](AxiosProgressEvent.md)

#### Returns

`void`

#### Defined in

node\_modules/axios/index.d.ts:336

***

### onUploadProgress()?

> `optional` **onUploadProgress**: (`progressEvent`) => `void`

#### Parameters

• **progressEvent**: [`AxiosProgressEvent`](AxiosProgressEvent.md)

#### Returns

`void`

#### Defined in

node\_modules/axios/index.d.ts:335

***

### params?

> `optional` **params**: `any`

#### Defined in

node\_modules/axios/index.d.ts:323

***

### paramsSerializer?

> `optional` **paramsSerializer**: [`ParamsSerializerOptions`](ParamsSerializerOptions.md) \| [`CustomParamsSerializer`](CustomParamsSerializer.md)

#### Defined in

node\_modules/axios/index.d.ts:324

***

### proxy?

> `optional` **proxy**: `false` \| [`AxiosProxyConfig`](AxiosProxyConfig.md)

#### Defined in

node\_modules/axios/index.d.ts:347

***

### responseEncoding?

> `optional` **responseEncoding**: `string`

#### Defined in

node\_modules/axios/index.d.ts:332

***

### responseType?

> `optional` **responseType**: [`ResponseType`](../type-aliases/ResponseType.md)

#### Defined in

node\_modules/axios/index.d.ts:331

***

### signal?

> `optional` **signal**: [`GenericAbortSignal`](GenericAbortSignal.md)

#### Defined in

node\_modules/axios/index.d.ts:351

***

### socketPath?

> `optional` **socketPath**: `null` \| `string`

#### Defined in

node\_modules/axios/index.d.ts:343

***

### timeout?

> `optional` **timeout**: `number`

#### Defined in

node\_modules/axios/index.d.ts:326

***

### timeoutErrorMessage?

> `optional` **timeoutErrorMessage**: `string`

#### Defined in

node\_modules/axios/index.d.ts:327

***

### transformRequest?

> `optional` **transformRequest**: [`AxiosRequestTransformer`](AxiosRequestTransformer.md) \| [`AxiosRequestTransformer`](AxiosRequestTransformer.md)[]

#### Defined in

node\_modules/axios/index.d.ts:320

***

### transformResponse?

> `optional` **transformResponse**: [`AxiosResponseTransformer`](AxiosResponseTransformer.md) \| [`AxiosResponseTransformer`](AxiosResponseTransformer.md)[]

#### Defined in

node\_modules/axios/index.d.ts:321

***

### transitional?

> `optional` **transitional**: [`TransitionalOptions`](TransitionalOptions.md)

#### Defined in

node\_modules/axios/index.d.ts:350

***

### transport?

> `optional` **transport**: `any`

#### Defined in

node\_modules/axios/index.d.ts:344

***

### url?

> `optional` **url**: `string`

#### Defined in

node\_modules/axios/index.d.ts:317

***

### validateStatus?

> `optional` **validateStatus**: `null` \| (`status`) => `boolean`

#### Defined in

node\_modules/axios/index.d.ts:338

***

### withCredentials?

> `optional` **withCredentials**: `boolean`

#### Defined in

node\_modules/axios/index.d.ts:328

***

### withXSRFToken?

> `optional` **withXSRFToken**: `boolean` \| (`config`) => `undefined` \| `boolean`

#### Defined in

node\_modules/axios/index.d.ts:360

***

### xsrfCookieName?

> `optional` **xsrfCookieName**: `string`

#### Defined in

node\_modules/axios/index.d.ts:333

***

### xsrfHeaderName?

> `optional` **xsrfHeaderName**: `string`

#### Defined in

node\_modules/axios/index.d.ts:334
