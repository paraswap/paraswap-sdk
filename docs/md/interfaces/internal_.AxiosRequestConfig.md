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
- [headers](internal_.AxiosRequestConfig.md#headers)
- [httpAgent](internal_.AxiosRequestConfig.md#httpagent)
- [httpsAgent](internal_.AxiosRequestConfig.md#httpsagent)
- [insecureHTTPParser](internal_.AxiosRequestConfig.md#insecurehttpparser)
- [maxBodyLength](internal_.AxiosRequestConfig.md#maxbodylength)
- [maxContentLength](internal_.AxiosRequestConfig.md#maxcontentlength)
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

node_modules/axios/index.d.ts:88

___

### auth

• `Optional` **auth**: [`AxiosBasicCredentials`](internal_.AxiosBasicCredentials.md)

#### Defined in

node_modules/axios/index.d.ts:89

___

### baseURL

• `Optional` **baseURL**: `string`

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

#### Defined in

node_modules/axios/index.d.ts:100

___

### cancelToken

• `Optional` **cancelToken**: [`CancelToken`](internal_.CancelToken.md)

#### Defined in

node_modules/axios/index.d.ts:105

___

### data

• `Optional` **data**: `D`

#### Defined in

node_modules/axios/index.d.ts:84

___

### decompress

• `Optional` **decompress**: `boolean`

#### Defined in

node_modules/axios/index.d.ts:106

___

### env

• `Optional` **env**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `FormData?` | (...`args`: `any`[]) => `object` |

#### Defined in

node_modules/axios/index.d.ts:110

___

### headers

• `Optional` **headers**: [`AxiosRequestHeaders`](../modules/internal_.md#axiosrequestheaders)

#### Defined in

node_modules/axios/index.d.ts:81

___

### httpAgent

• `Optional` **httpAgent**: `any`

#### Defined in

node_modules/axios/index.d.ts:102

___

### httpsAgent

• `Optional` **httpsAgent**: `any`

#### Defined in

node_modules/axios/index.d.ts:103

___

### insecureHTTPParser

• `Optional` **insecureHTTPParser**: `boolean`

#### Defined in

node_modules/axios/index.d.ts:109

___

### maxBodyLength

• `Optional` **maxBodyLength**: `number`

#### Defined in

node_modules/axios/index.d.ts:98

___

### maxContentLength

• `Optional` **maxContentLength**: `number`

#### Defined in

node_modules/axios/index.d.ts:96

___

### maxRedirects

• `Optional` **maxRedirects**: `number`

#### Defined in

node_modules/axios/index.d.ts:99

___

### method

• `Optional` **method**: `string`

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

#### Defined in

node_modules/axios/index.d.ts:94

___

### params

• `Optional` **params**: `any`

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

#### Defined in

node_modules/axios/index.d.ts:83

___

### proxy

• `Optional` **proxy**: ``false`` \| [`AxiosProxyConfig`](internal_.AxiosProxyConfig.md)

#### Defined in

node_modules/axios/index.d.ts:104

___

### responseEncoding

• `Optional` **responseEncoding**: `string`

#### Defined in

node_modules/axios/index.d.ts:91

___

### responseType

• `Optional` **responseType**: [`ResponseType`](../modules/internal_.md#responsetype-1)

#### Defined in

node_modules/axios/index.d.ts:90

___

### signal

• `Optional` **signal**: `AbortSignal`

#### Defined in

node_modules/axios/index.d.ts:108

___

### socketPath

• `Optional` **socketPath**: ``null`` \| `string`

#### Defined in

node_modules/axios/index.d.ts:101

___

### timeout

• `Optional` **timeout**: `number`

#### Defined in

node_modules/axios/index.d.ts:85

___

### timeoutErrorMessage

• `Optional` **timeoutErrorMessage**: `string`

#### Defined in

node_modules/axios/index.d.ts:86

___

### transformRequest

• `Optional` **transformRequest**: [`AxiosRequestTransformer`](internal_.AxiosRequestTransformer.md) \| [`AxiosRequestTransformer`](internal_.AxiosRequestTransformer.md)[]

#### Defined in

node_modules/axios/index.d.ts:79

___

### transformResponse

• `Optional` **transformResponse**: [`AxiosResponseTransformer`](internal_.AxiosResponseTransformer.md) \| [`AxiosResponseTransformer`](internal_.AxiosResponseTransformer.md)[]

#### Defined in

node_modules/axios/index.d.ts:80

___

### transitional

• `Optional` **transitional**: [`TransitionalOptions`](internal_.TransitionalOptions.md)

#### Defined in

node_modules/axios/index.d.ts:107

___

### url

• `Optional` **url**: `string`

#### Defined in

node_modules/axios/index.d.ts:76

___

### validateStatus

• `Optional` **validateStatus**: ``null`` \| (`status`: `number`) => `boolean`

#### Defined in

node_modules/axios/index.d.ts:97

___

### withCredentials

• `Optional` **withCredentials**: `boolean`

#### Defined in

node_modules/axios/index.d.ts:87

___

### xsrfCookieName

• `Optional` **xsrfCookieName**: `string`

#### Defined in

node_modules/axios/index.d.ts:92

___

### xsrfHeaderName

• `Optional` **xsrfHeaderName**: `string`

#### Defined in

node_modules/axios/index.d.ts:93
