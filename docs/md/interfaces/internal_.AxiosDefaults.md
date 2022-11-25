[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / AxiosDefaults

# Interface: AxiosDefaults<D\>

[<internal>](../modules/internal_.md).AxiosDefaults

Construct a type with the properties of T except for those in type K.

## Type parameters

| Name | Type |
| :------ | :------ |
| `D` | `any` |

## Hierarchy

- [`Omit`](../modules/internal_.md#omit)<[`AxiosRequestConfig`](internal_.AxiosRequestConfig.md)<`D`\>, ``"headers"``\>

  ↳ **`AxiosDefaults`**

## Table of contents

### Properties

- [adapter](internal_.AxiosDefaults.md#adapter)
- [auth](internal_.AxiosDefaults.md#auth)
- [baseURL](internal_.AxiosDefaults.md#baseurl)
- [beforeRedirect](internal_.AxiosDefaults.md#beforeredirect)
- [cancelToken](internal_.AxiosDefaults.md#canceltoken)
- [data](internal_.AxiosDefaults.md#data)
- [decompress](internal_.AxiosDefaults.md#decompress)
- [env](internal_.AxiosDefaults.md#env)
- [formSerializer](internal_.AxiosDefaults.md#formserializer)
- [headers](internal_.AxiosDefaults.md#headers)
- [httpAgent](internal_.AxiosDefaults.md#httpagent)
- [httpsAgent](internal_.AxiosDefaults.md#httpsagent)
- [insecureHTTPParser](internal_.AxiosDefaults.md#insecurehttpparser)
- [maxBodyLength](internal_.AxiosDefaults.md#maxbodylength)
- [maxContentLength](internal_.AxiosDefaults.md#maxcontentlength)
- [maxRate](internal_.AxiosDefaults.md#maxrate)
- [maxRedirects](internal_.AxiosDefaults.md#maxredirects)
- [method](internal_.AxiosDefaults.md#method)
- [onDownloadProgress](internal_.AxiosDefaults.md#ondownloadprogress)
- [onUploadProgress](internal_.AxiosDefaults.md#onuploadprogress)
- [params](internal_.AxiosDefaults.md#params)
- [paramsSerializer](internal_.AxiosDefaults.md#paramsserializer)
- [proxy](internal_.AxiosDefaults.md#proxy)
- [responseEncoding](internal_.AxiosDefaults.md#responseencoding)
- [responseType](internal_.AxiosDefaults.md#responsetype)
- [signal](internal_.AxiosDefaults.md#signal)
- [socketPath](internal_.AxiosDefaults.md#socketpath)
- [timeout](internal_.AxiosDefaults.md#timeout)
- [timeoutErrorMessage](internal_.AxiosDefaults.md#timeouterrormessage)
- [transformRequest](internal_.AxiosDefaults.md#transformrequest)
- [transformResponse](internal_.AxiosDefaults.md#transformresponse)
- [transitional](internal_.AxiosDefaults.md#transitional)
- [url](internal_.AxiosDefaults.md#url)
- [validateStatus](internal_.AxiosDefaults.md#validatestatus)
- [withCredentials](internal_.AxiosDefaults.md#withcredentials)
- [xsrfCookieName](internal_.AxiosDefaults.md#xsrfcookiename)
- [xsrfHeaderName](internal_.AxiosDefaults.md#xsrfheadername)

## Properties

### adapter

• `Optional` **adapter**: [`AxiosAdapter`](internal_.AxiosAdapter.md)

#### Inherited from

Omit.adapter

#### Defined in

node_modules/axios/index.d.ts:289

___

### auth

• `Optional` **auth**: [`AxiosBasicCredentials`](internal_.AxiosBasicCredentials.md)

#### Inherited from

Omit.auth

#### Defined in

node_modules/axios/index.d.ts:290

___

### baseURL

• `Optional` **baseURL**: `string`

#### Inherited from

Omit.baseURL

#### Defined in

node_modules/axios/index.d.ts:279

___

### beforeRedirect

• `Optional` **beforeRedirect**: (`options`: [`Record`](../modules/internal_.md#record)<`string`, `any`\>, `responseDetails`: { `headers`: [`Record`](../modules/internal_.md#record)<`string`, `string`\>  }) => `void`

#### Type declaration

▸ (`options`, `responseDetails`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`Record`](../modules/internal_.md#record)<`string`, `any`\> |
| `responseDetails` | `Object` |
| `responseDetails.headers` | [`Record`](../modules/internal_.md#record)<`string`, `string`\> |

##### Returns

`void`

#### Inherited from

Omit.beforeRedirect

#### Defined in

node_modules/axios/index.d.ts:302

___

### cancelToken

• `Optional` **cancelToken**: [`CancelToken`](internal_.CancelToken.md)

#### Inherited from

Omit.cancelToken

#### Defined in

node_modules/axios/index.d.ts:307

___

### data

• `Optional` **data**: `D`

#### Inherited from

Omit.data

#### Defined in

node_modules/axios/index.d.ts:285

___

### decompress

• `Optional` **decompress**: `boolean`

#### Inherited from

Omit.decompress

#### Defined in

node_modules/axios/index.d.ts:308

___

### env

• `Optional` **env**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `FormData?` | (...`args`: `any`[]) => `object` |

#### Inherited from

Omit.env

#### Defined in

node_modules/axios/index.d.ts:312

___

### formSerializer

• `Optional` **formSerializer**: [`FormSerializerOptions`](internal_.FormSerializerOptions.md)

#### Inherited from

Omit.formSerializer

#### Defined in

node_modules/axios/index.d.ts:315

___

### headers

• **headers**: [`HeadersDefaults`](internal_.HeadersDefaults.md)

#### Defined in

node_modules/axios/index.d.ts:333

___

### httpAgent

• `Optional` **httpAgent**: `any`

#### Inherited from

Omit.httpAgent

#### Defined in

node_modules/axios/index.d.ts:304

___

### httpsAgent

• `Optional` **httpsAgent**: `any`

#### Inherited from

Omit.httpsAgent

#### Defined in

node_modules/axios/index.d.ts:305

___

### insecureHTTPParser

• `Optional` **insecureHTTPParser**: `boolean`

#### Inherited from

Omit.insecureHTTPParser

#### Defined in

node_modules/axios/index.d.ts:311

___

### maxBodyLength

• `Optional` **maxBodyLength**: `number`

#### Inherited from

Omit.maxBodyLength

#### Defined in

node_modules/axios/index.d.ts:299

___

### maxContentLength

• `Optional` **maxContentLength**: `number`

#### Inherited from

Omit.maxContentLength

#### Defined in

node_modules/axios/index.d.ts:297

___

### maxRate

• `Optional` **maxRate**: `number` \| [`number`, `number`]

#### Inherited from

Omit.maxRate

#### Defined in

node_modules/axios/index.d.ts:301

___

### maxRedirects

• `Optional` **maxRedirects**: `number`

#### Inherited from

Omit.maxRedirects

#### Defined in

node_modules/axios/index.d.ts:300

___

### method

• `Optional` **method**: `string`

#### Inherited from

Omit.method

#### Defined in

node_modules/axios/index.d.ts:278

___

### onDownloadProgress

• `Optional` **onDownloadProgress**: (`progressEvent`: [`AxiosProgressEvent`](internal_.AxiosProgressEvent.md)) => `void`

#### Type declaration

▸ (`progressEvent`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `progressEvent` | [`AxiosProgressEvent`](internal_.AxiosProgressEvent.md) |

##### Returns

`void`

#### Inherited from

Omit.onDownloadProgress

#### Defined in

node_modules/axios/index.d.ts:296

___

### onUploadProgress

• `Optional` **onUploadProgress**: (`progressEvent`: [`AxiosProgressEvent`](internal_.AxiosProgressEvent.md)) => `void`

#### Type declaration

▸ (`progressEvent`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `progressEvent` | [`AxiosProgressEvent`](internal_.AxiosProgressEvent.md) |

##### Returns

`void`

#### Inherited from

Omit.onUploadProgress

#### Defined in

node_modules/axios/index.d.ts:295

___

### params

• `Optional` **params**: `any`

#### Inherited from

Omit.params

#### Defined in

node_modules/axios/index.d.ts:283

___

### paramsSerializer

• `Optional` **paramsSerializer**: [`ParamsSerializerOptions`](internal_.ParamsSerializerOptions.md)

#### Inherited from

Omit.paramsSerializer

#### Defined in

node_modules/axios/index.d.ts:284

___

### proxy

• `Optional` **proxy**: ``false`` \| [`AxiosProxyConfig`](internal_.AxiosProxyConfig.md)

#### Inherited from

Omit.proxy

#### Defined in

node_modules/axios/index.d.ts:306

___

### responseEncoding

• `Optional` **responseEncoding**: `string`

#### Inherited from

Omit.responseEncoding

#### Defined in

node_modules/axios/index.d.ts:292

___

### responseType

• `Optional` **responseType**: [`ResponseType`](../modules/internal_.md#responsetype-1)

#### Inherited from

Omit.responseType

#### Defined in

node_modules/axios/index.d.ts:291

___

### signal

• `Optional` **signal**: [`GenericAbortSignal`](internal_.GenericAbortSignal.md)

#### Inherited from

Omit.signal

#### Defined in

node_modules/axios/index.d.ts:310

___

### socketPath

• `Optional` **socketPath**: ``null`` \| `string`

#### Inherited from

Omit.socketPath

#### Defined in

node_modules/axios/index.d.ts:303

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

Omit.timeout

#### Defined in

node_modules/axios/index.d.ts:286

___

### timeoutErrorMessage

• `Optional` **timeoutErrorMessage**: `string`

#### Inherited from

Omit.timeoutErrorMessage

#### Defined in

node_modules/axios/index.d.ts:287

___

### transformRequest

• `Optional` **transformRequest**: [`AxiosRequestTransformer`](internal_.AxiosRequestTransformer.md) \| [`AxiosRequestTransformer`](internal_.AxiosRequestTransformer.md)[]

#### Inherited from

Omit.transformRequest

#### Defined in

node_modules/axios/index.d.ts:280

___

### transformResponse

• `Optional` **transformResponse**: [`AxiosResponseTransformer`](internal_.AxiosResponseTransformer.md) \| [`AxiosResponseTransformer`](internal_.AxiosResponseTransformer.md)[]

#### Inherited from

Omit.transformResponse

#### Defined in

node_modules/axios/index.d.ts:281

___

### transitional

• `Optional` **transitional**: [`TransitionalOptions`](internal_.TransitionalOptions.md)

#### Inherited from

Omit.transitional

#### Defined in

node_modules/axios/index.d.ts:309

___

### url

• `Optional` **url**: `string`

#### Inherited from

Omit.url

#### Defined in

node_modules/axios/index.d.ts:277

___

### validateStatus

• `Optional` **validateStatus**: ``null`` \| (`status`: `number`) => `boolean`

#### Inherited from

Omit.validateStatus

#### Defined in

node_modules/axios/index.d.ts:298

___

### withCredentials

• `Optional` **withCredentials**: `boolean`

#### Inherited from

Omit.withCredentials

#### Defined in

node_modules/axios/index.d.ts:288

___

### xsrfCookieName

• `Optional` **xsrfCookieName**: `string`

#### Inherited from

Omit.xsrfCookieName

#### Defined in

node_modules/axios/index.d.ts:293

___

### xsrfHeaderName

• `Optional` **xsrfHeaderName**: `string`

#### Inherited from

Omit.xsrfHeaderName

#### Defined in

node_modules/axios/index.d.ts:294
