[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / AxiosRequestConfig

# Interface: AxiosRequestConfig<D\>

[<internal>](../modules/internal_.md).AxiosRequestConfig

## Type parameters

| Name | Type |
| :------ | :------ |
| `D` | `any` |

## Table of contents

### Properties

- [adapter](internal_.AxiosRequestConfig.md#adapter)
- [auth](internal_.AxiosRequestConfig.md#auth)
- [baseURL](internal_.AxiosRequestConfig.md#baseurl)
- [beforeRedirect](internal_.AxiosRequestConfig.md#beforeredirect)
- [cancelToken](internal_.AxiosRequestConfig.md#canceltoken)
- [data](internal_.AxiosRequestConfig.md#data)
- [decompress](internal_.AxiosRequestConfig.md#decompress)
- [env](internal_.AxiosRequestConfig.md#env)
- [formSerializer](internal_.AxiosRequestConfig.md#formserializer)
- [headers](internal_.AxiosRequestConfig.md#headers)
- [httpAgent](internal_.AxiosRequestConfig.md#httpagent)
- [httpsAgent](internal_.AxiosRequestConfig.md#httpsagent)
- [insecureHTTPParser](internal_.AxiosRequestConfig.md#insecurehttpparser)
- [maxBodyLength](internal_.AxiosRequestConfig.md#maxbodylength)
- [maxContentLength](internal_.AxiosRequestConfig.md#maxcontentlength)
- [maxRate](internal_.AxiosRequestConfig.md#maxrate)
- [maxRedirects](internal_.AxiosRequestConfig.md#maxredirects)
- [method](internal_.AxiosRequestConfig.md#method)
- [onDownloadProgress](internal_.AxiosRequestConfig.md#ondownloadprogress)
- [onUploadProgress](internal_.AxiosRequestConfig.md#onuploadprogress)
- [params](internal_.AxiosRequestConfig.md#params)
- [paramsSerializer](internal_.AxiosRequestConfig.md#paramsserializer)
- [proxy](internal_.AxiosRequestConfig.md#proxy)
- [responseEncoding](internal_.AxiosRequestConfig.md#responseencoding)
- [responseType](internal_.AxiosRequestConfig.md#responsetype)
- [signal](internal_.AxiosRequestConfig.md#signal)
- [socketPath](internal_.AxiosRequestConfig.md#socketpath)
- [timeout](internal_.AxiosRequestConfig.md#timeout)
- [timeoutErrorMessage](internal_.AxiosRequestConfig.md#timeouterrormessage)
- [transformRequest](internal_.AxiosRequestConfig.md#transformrequest)
- [transformResponse](internal_.AxiosRequestConfig.md#transformresponse)
- [transitional](internal_.AxiosRequestConfig.md#transitional)
- [url](internal_.AxiosRequestConfig.md#url)
- [validateStatus](internal_.AxiosRequestConfig.md#validatestatus)
- [withCredentials](internal_.AxiosRequestConfig.md#withcredentials)
- [xsrfCookieName](internal_.AxiosRequestConfig.md#xsrfcookiename)
- [xsrfHeaderName](internal_.AxiosRequestConfig.md#xsrfheadername)

## Properties

### adapter

• `Optional` **adapter**: [`AxiosAdapter`](internal_.AxiosAdapter.md)

#### Defined in

node_modules/axios/index.d.ts:289

___

### auth

• `Optional` **auth**: [`AxiosBasicCredentials`](internal_.AxiosBasicCredentials.md)

#### Defined in

node_modules/axios/index.d.ts:290

___

### baseURL

• `Optional` **baseURL**: `string`

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

#### Defined in

node_modules/axios/index.d.ts:302

___

### cancelToken

• `Optional` **cancelToken**: [`CancelToken`](internal_.CancelToken.md)

#### Defined in

node_modules/axios/index.d.ts:307

___

### data

• `Optional` **data**: `D`

#### Defined in

node_modules/axios/index.d.ts:285

___

### decompress

• `Optional` **decompress**: `boolean`

#### Defined in

node_modules/axios/index.d.ts:308

___

### env

• `Optional` **env**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `FormData?` | (...`args`: `any`[]) => `object` |

#### Defined in

node_modules/axios/index.d.ts:312

___

### formSerializer

• `Optional` **formSerializer**: [`FormSerializerOptions`](internal_.FormSerializerOptions.md)

#### Defined in

node_modules/axios/index.d.ts:315

___

### headers

• `Optional` **headers**: [`Partial`](../modules/internal_.md#partial)<[`RawAxiosHeaders`](../modules/internal_.md#rawaxiosheaders) & [`MethodsHeaders`](../modules/internal_.md#methodsheaders) & [`CommonHeaders`](internal_.CommonHeaders.md)\>

#### Defined in

node_modules/axios/index.d.ts:282

___

### httpAgent

• `Optional` **httpAgent**: `any`

#### Defined in

node_modules/axios/index.d.ts:304

___

### httpsAgent

• `Optional` **httpsAgent**: `any`

#### Defined in

node_modules/axios/index.d.ts:305

___

### insecureHTTPParser

• `Optional` **insecureHTTPParser**: `boolean`

#### Defined in

node_modules/axios/index.d.ts:311

___

### maxBodyLength

• `Optional` **maxBodyLength**: `number`

#### Defined in

node_modules/axios/index.d.ts:299

___

### maxContentLength

• `Optional` **maxContentLength**: `number`

#### Defined in

node_modules/axios/index.d.ts:297

___

### maxRate

• `Optional` **maxRate**: `number` \| [`number`, `number`]

#### Defined in

node_modules/axios/index.d.ts:301

___

### maxRedirects

• `Optional` **maxRedirects**: `number`

#### Defined in

node_modules/axios/index.d.ts:300

___

### method

• `Optional` **method**: `string`

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

#### Defined in

node_modules/axios/index.d.ts:295

___

### params

• `Optional` **params**: `any`

#### Defined in

node_modules/axios/index.d.ts:283

___

### paramsSerializer

• `Optional` **paramsSerializer**: [`ParamsSerializerOptions`](internal_.ParamsSerializerOptions.md)

#### Defined in

node_modules/axios/index.d.ts:284

___

### proxy

• `Optional` **proxy**: ``false`` \| [`AxiosProxyConfig`](internal_.AxiosProxyConfig.md)

#### Defined in

node_modules/axios/index.d.ts:306

___

### responseEncoding

• `Optional` **responseEncoding**: `string`

#### Defined in

node_modules/axios/index.d.ts:292

___

### responseType

• `Optional` **responseType**: [`ResponseType`](../modules/internal_.md#responsetype-1)

#### Defined in

node_modules/axios/index.d.ts:291

___

### signal

• `Optional` **signal**: [`GenericAbortSignal`](internal_.GenericAbortSignal.md)

#### Defined in

node_modules/axios/index.d.ts:310

___

### socketPath

• `Optional` **socketPath**: ``null`` \| `string`

#### Defined in

node_modules/axios/index.d.ts:303

___

### timeout

• `Optional` **timeout**: `number`

#### Defined in

node_modules/axios/index.d.ts:286

___

### timeoutErrorMessage

• `Optional` **timeoutErrorMessage**: `string`

#### Defined in

node_modules/axios/index.d.ts:287

___

### transformRequest

• `Optional` **transformRequest**: [`AxiosRequestTransformer`](internal_.AxiosRequestTransformer.md) \| [`AxiosRequestTransformer`](internal_.AxiosRequestTransformer.md)[]

#### Defined in

node_modules/axios/index.d.ts:280

___

### transformResponse

• `Optional` **transformResponse**: [`AxiosResponseTransformer`](internal_.AxiosResponseTransformer.md) \| [`AxiosResponseTransformer`](internal_.AxiosResponseTransformer.md)[]

#### Defined in

node_modules/axios/index.d.ts:281

___

### transitional

• `Optional` **transitional**: [`TransitionalOptions`](internal_.TransitionalOptions.md)

#### Defined in

node_modules/axios/index.d.ts:309

___

### url

• `Optional` **url**: `string`

#### Defined in

node_modules/axios/index.d.ts:277

___

### validateStatus

• `Optional` **validateStatus**: ``null`` \| (`status`: `number`) => `boolean`

#### Defined in

node_modules/axios/index.d.ts:298

___

### withCredentials

• `Optional` **withCredentials**: `boolean`

#### Defined in

node_modules/axios/index.d.ts:288

___

### xsrfCookieName

• `Optional` **xsrfCookieName**: `string`

#### Defined in

node_modules/axios/index.d.ts:293

___

### xsrfHeaderName

• `Optional` **xsrfHeaderName**: `string`

#### Defined in

node_modules/axios/index.d.ts:294
