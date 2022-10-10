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
- [headers](internal_.AxiosDefaults.md#headers)
- [httpAgent](internal_.AxiosDefaults.md#httpagent)
- [httpsAgent](internal_.AxiosDefaults.md#httpsagent)
- [insecureHTTPParser](internal_.AxiosDefaults.md#insecurehttpparser)
- [maxBodyLength](internal_.AxiosDefaults.md#maxbodylength)
- [maxContentLength](internal_.AxiosDefaults.md#maxcontentlength)
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

node_modules/axios/index.d.ts:88

___

### auth

• `Optional` **auth**: [`AxiosBasicCredentials`](internal_.AxiosBasicCredentials.md)

#### Inherited from

Omit.auth

#### Defined in

node_modules/axios/index.d.ts:89

___

### baseURL

• `Optional` **baseURL**: `string`

#### Inherited from

Omit.baseURL

#### Defined in

node_modules/axios/index.d.ts:78

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

node_modules/axios/index.d.ts:100

___

### cancelToken

• `Optional` **cancelToken**: [`CancelToken`](internal_.CancelToken.md)

#### Inherited from

Omit.cancelToken

#### Defined in

node_modules/axios/index.d.ts:105

___

### data

• `Optional` **data**: `D`

#### Inherited from

Omit.data

#### Defined in

node_modules/axios/index.d.ts:84

___

### decompress

• `Optional` **decompress**: `boolean`

#### Inherited from

Omit.decompress

#### Defined in

node_modules/axios/index.d.ts:106

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

node_modules/axios/index.d.ts:110

___

### headers

• **headers**: [`HeadersDefaults`](internal_.HeadersDefaults.md)

#### Defined in

node_modules/axios/index.d.ts:130

___

### httpAgent

• `Optional` **httpAgent**: `any`

#### Inherited from

Omit.httpAgent

#### Defined in

node_modules/axios/index.d.ts:102

___

### httpsAgent

• `Optional` **httpsAgent**: `any`

#### Inherited from

Omit.httpsAgent

#### Defined in

node_modules/axios/index.d.ts:103

___

### insecureHTTPParser

• `Optional` **insecureHTTPParser**: `boolean`

#### Inherited from

Omit.insecureHTTPParser

#### Defined in

node_modules/axios/index.d.ts:109

___

### maxBodyLength

• `Optional` **maxBodyLength**: `number`

#### Inherited from

Omit.maxBodyLength

#### Defined in

node_modules/axios/index.d.ts:98

___

### maxContentLength

• `Optional` **maxContentLength**: `number`

#### Inherited from

Omit.maxContentLength

#### Defined in

node_modules/axios/index.d.ts:96

___

### maxRedirects

• `Optional` **maxRedirects**: `number`

#### Inherited from

Omit.maxRedirects

#### Defined in

node_modules/axios/index.d.ts:99

___

### method

• `Optional` **method**: `string`

#### Inherited from

Omit.method

#### Defined in

node_modules/axios/index.d.ts:77

___

### onDownloadProgress

• `Optional` **onDownloadProgress**: (`progressEvent`: `any`) => `void`

#### Type declaration

▸ (`progressEvent`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `progressEvent` | `any` |

##### Returns

`void`

#### Inherited from

Omit.onDownloadProgress

#### Defined in

node_modules/axios/index.d.ts:95

___

### onUploadProgress

• `Optional` **onUploadProgress**: (`progressEvent`: `any`) => `void`

#### Type declaration

▸ (`progressEvent`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `progressEvent` | `any` |

##### Returns

`void`

#### Inherited from

Omit.onUploadProgress

#### Defined in

node_modules/axios/index.d.ts:94

___

### params

• `Optional` **params**: `any`

#### Inherited from

Omit.params

#### Defined in

node_modules/axios/index.d.ts:82

___

### paramsSerializer

• `Optional` **paramsSerializer**: (`params`: `any`) => `string`

#### Type declaration

▸ (`params`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

##### Returns

`string`

#### Inherited from

Omit.paramsSerializer

#### Defined in

node_modules/axios/index.d.ts:83

___

### proxy

• `Optional` **proxy**: ``false`` \| [`AxiosProxyConfig`](internal_.AxiosProxyConfig.md)

#### Inherited from

Omit.proxy

#### Defined in

node_modules/axios/index.d.ts:104

___

### responseEncoding

• `Optional` **responseEncoding**: `string`

#### Inherited from

Omit.responseEncoding

#### Defined in

node_modules/axios/index.d.ts:91

___

### responseType

• `Optional` **responseType**: [`ResponseType`](../modules/internal_.md#responsetype-1)

#### Inherited from

Omit.responseType

#### Defined in

node_modules/axios/index.d.ts:90

___

### signal

• `Optional` **signal**: `AbortSignal`

#### Inherited from

Omit.signal

#### Defined in

node_modules/axios/index.d.ts:108

___

### socketPath

• `Optional` **socketPath**: ``null`` \| `string`

#### Inherited from

Omit.socketPath

#### Defined in

node_modules/axios/index.d.ts:101

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

Omit.timeout

#### Defined in

node_modules/axios/index.d.ts:85

___

### timeoutErrorMessage

• `Optional` **timeoutErrorMessage**: `string`

#### Inherited from

Omit.timeoutErrorMessage

#### Defined in

node_modules/axios/index.d.ts:86

___

### transformRequest

• `Optional` **transformRequest**: [`AxiosRequestTransformer`](internal_.AxiosRequestTransformer.md) \| [`AxiosRequestTransformer`](internal_.AxiosRequestTransformer.md)[]

#### Inherited from

Omit.transformRequest

#### Defined in

node_modules/axios/index.d.ts:79

___

### transformResponse

• `Optional` **transformResponse**: [`AxiosResponseTransformer`](internal_.AxiosResponseTransformer.md) \| [`AxiosResponseTransformer`](internal_.AxiosResponseTransformer.md)[]

#### Inherited from

Omit.transformResponse

#### Defined in

node_modules/axios/index.d.ts:80

___

### transitional

• `Optional` **transitional**: [`TransitionalOptions`](internal_.TransitionalOptions.md)

#### Inherited from

Omit.transitional

#### Defined in

node_modules/axios/index.d.ts:107

___

### url

• `Optional` **url**: `string`

#### Inherited from

Omit.url

#### Defined in

node_modules/axios/index.d.ts:76

___

### validateStatus

• `Optional` **validateStatus**: ``null`` \| (`status`: `number`) => `boolean`

#### Inherited from

Omit.validateStatus

#### Defined in

node_modules/axios/index.d.ts:97

___

### withCredentials

• `Optional` **withCredentials**: `boolean`

#### Inherited from

Omit.withCredentials

#### Defined in

node_modules/axios/index.d.ts:87

___

### xsrfCookieName

• `Optional` **xsrfCookieName**: `string`

#### Inherited from

Omit.xsrfCookieName

#### Defined in

node_modules/axios/index.d.ts:92

___

### xsrfHeaderName

• `Optional` **xsrfHeaderName**: `string`

#### Inherited from

Omit.xsrfHeaderName

#### Defined in

node_modules/axios/index.d.ts:93
