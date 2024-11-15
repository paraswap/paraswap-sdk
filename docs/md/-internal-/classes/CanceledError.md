[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / CanceledError

# Class: CanceledError\<T\>

## Extends

- [`AxiosError`](AxiosError.md)\<`T`\>

## Type Parameters

• **T**

## Constructors

### new CanceledError()

> **new CanceledError**\<`T`\>(`message`?, `code`?, `config`?, `request`?, `response`?): [`CanceledError`](CanceledError.md)\<`T`\>

#### Parameters

• **message?**: `string`

• **code?**: `string`

• **config?**: [`InternalAxiosRequestConfig`](../interfaces/InternalAxiosRequestConfig.md)\<`any`\>

• **request?**: `any`

• **response?**: [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `any`\>

#### Returns

[`CanceledError`](CanceledError.md)\<`T`\>

#### Inherited from

[`AxiosError`](AxiosError.md).[`constructor`](AxiosError.md#constructors)

#### Defined in

node\_modules/axios/index.d.ts:403

## Properties

### cause?

> `optional` **cause**: [`Error`](../interfaces/Error.md)

#### Inherited from

[`AxiosError`](AxiosError.md).[`cause`](AxiosError.md#cause)

#### Defined in

node\_modules/axios/index.d.ts:418

***

### code?

> `optional` **code**: `string`

#### Inherited from

[`AxiosError`](AxiosError.md).[`code`](AxiosError.md#code)

#### Defined in

node\_modules/axios/index.d.ts:412

***

### config?

> `optional` **config**: [`InternalAxiosRequestConfig`](../interfaces/InternalAxiosRequestConfig.md)\<`any`\>

#### Inherited from

[`AxiosError`](AxiosError.md).[`config`](AxiosError.md#config)

#### Defined in

node\_modules/axios/index.d.ts:411

***

### isAxiosError

> **isAxiosError**: `boolean`

#### Inherited from

[`AxiosError`](AxiosError.md).[`isAxiosError`](AxiosError.md#isaxioserror)

#### Defined in

node\_modules/axios/index.d.ts:415

***

### message

> **message**: `string`

#### Inherited from

[`AxiosError`](AxiosError.md).[`message`](AxiosError.md#message)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### name

> **name**: `string`

#### Inherited from

[`AxiosError`](AxiosError.md).[`name`](AxiosError.md#name)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### request?

> `optional` **request**: `any`

#### Inherited from

[`AxiosError`](AxiosError.md).[`request`](AxiosError.md#request)

#### Defined in

node\_modules/axios/index.d.ts:413

***

### response?

> `optional` **response**: [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `any`\>

#### Inherited from

[`AxiosError`](AxiosError.md).[`response`](AxiosError.md#response)

#### Defined in

node\_modules/axios/index.d.ts:414

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

[`AxiosError`](AxiosError.md).[`stack`](AxiosError.md#stack)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1078

***

### status?

> `optional` **status**: `number`

#### Inherited from

[`AxiosError`](AxiosError.md).[`status`](AxiosError.md#status)

#### Defined in

node\_modules/axios/index.d.ts:416

***

### toJSON()

> **toJSON**: () => `object`

#### Returns

`object`

#### Inherited from

[`AxiosError`](AxiosError.md).[`toJSON`](AxiosError.md#tojson)

#### Defined in

node\_modules/axios/index.d.ts:417

***

### ECONNABORTED

> `readonly` `static` **ECONNABORTED**: `"ECONNABORTED"` = `"ECONNABORTED"`

#### Inherited from

[`AxiosError`](AxiosError.md).[`ECONNABORTED`](AxiosError.md#econnaborted)

#### Defined in

node\_modules/axios/index.d.ts:437

***

### ERR\_BAD\_OPTION

> `readonly` `static` **ERR\_BAD\_OPTION**: `"ERR_BAD_OPTION"` = `"ERR_BAD_OPTION"`

#### Inherited from

[`AxiosError`](AxiosError.md).[`ERR_BAD_OPTION`](AxiosError.md#err_bad_option)

#### Defined in

node\_modules/axios/index.d.ts:429

***

### ERR\_BAD\_OPTION\_VALUE

> `readonly` `static` **ERR\_BAD\_OPTION\_VALUE**: `"ERR_BAD_OPTION_VALUE"` = `"ERR_BAD_OPTION_VALUE"`

#### Inherited from

[`AxiosError`](AxiosError.md).[`ERR_BAD_OPTION_VALUE`](AxiosError.md#err_bad_option_value)

#### Defined in

node\_modules/axios/index.d.ts:428

***

### ERR\_BAD\_REQUEST

> `readonly` `static` **ERR\_BAD\_REQUEST**: `"ERR_BAD_REQUEST"` = `"ERR_BAD_REQUEST"`

#### Inherited from

[`AxiosError`](AxiosError.md).[`ERR_BAD_REQUEST`](AxiosError.md#err_bad_request)

#### Defined in

node\_modules/axios/index.d.ts:433

***

### ERR\_BAD\_RESPONSE

> `readonly` `static` **ERR\_BAD\_RESPONSE**: `"ERR_BAD_RESPONSE"` = `"ERR_BAD_RESPONSE"`

#### Inherited from

[`AxiosError`](AxiosError.md).[`ERR_BAD_RESPONSE`](AxiosError.md#err_bad_response)

#### Defined in

node\_modules/axios/index.d.ts:432

***

### ERR\_CANCELED

> `readonly` `static` **ERR\_CANCELED**: `"ERR_CANCELED"` = `"ERR_CANCELED"`

#### Inherited from

[`AxiosError`](AxiosError.md).[`ERR_CANCELED`](AxiosError.md#err_canceled)

#### Defined in

node\_modules/axios/index.d.ts:436

***

### ERR\_DEPRECATED

> `readonly` `static` **ERR\_DEPRECATED**: `"ERR_DEPRECATED"` = `"ERR_DEPRECATED"`

#### Inherited from

[`AxiosError`](AxiosError.md).[`ERR_DEPRECATED`](AxiosError.md#err_deprecated)

#### Defined in

node\_modules/axios/index.d.ts:431

***

### ERR\_FR\_TOO\_MANY\_REDIRECTS

> `readonly` `static` **ERR\_FR\_TOO\_MANY\_REDIRECTS**: `"ERR_FR_TOO_MANY_REDIRECTS"` = `"ERR_FR_TOO_MANY_REDIRECTS"`

#### Inherited from

[`AxiosError`](AxiosError.md).[`ERR_FR_TOO_MANY_REDIRECTS`](AxiosError.md#err_fr_too_many_redirects)

#### Defined in

node\_modules/axios/index.d.ts:427

***

### ERR\_INVALID\_URL

> `readonly` `static` **ERR\_INVALID\_URL**: `"ERR_INVALID_URL"` = `"ERR_INVALID_URL"`

#### Inherited from

[`AxiosError`](AxiosError.md).[`ERR_INVALID_URL`](AxiosError.md#err_invalid_url)

#### Defined in

node\_modules/axios/index.d.ts:435

***

### ERR\_NETWORK

> `readonly` `static` **ERR\_NETWORK**: `"ERR_NETWORK"` = `"ERR_NETWORK"`

#### Inherited from

[`AxiosError`](AxiosError.md).[`ERR_NETWORK`](AxiosError.md#err_network)

#### Defined in

node\_modules/axios/index.d.ts:430

***

### ERR\_NOT\_SUPPORT

> `readonly` `static` **ERR\_NOT\_SUPPORT**: `"ERR_NOT_SUPPORT"` = `"ERR_NOT_SUPPORT"`

#### Inherited from

[`AxiosError`](AxiosError.md).[`ERR_NOT_SUPPORT`](AxiosError.md#err_not_support)

#### Defined in

node\_modules/axios/index.d.ts:434

***

### ETIMEDOUT

> `readonly` `static` **ETIMEDOUT**: `"ETIMEDOUT"` = `"ETIMEDOUT"`

#### Inherited from

[`AxiosError`](AxiosError.md).[`ETIMEDOUT`](AxiosError.md#etimedout)

#### Defined in

node\_modules/axios/index.d.ts:438

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### Parameters

• **err**: [`Error`](../interfaces/Error.md)

• **stackTraces**: [`CallSite`](../interfaces/CallSite.md)[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

[`AxiosError`](AxiosError.md).[`prepareStackTrace`](AxiosError.md#preparestacktrace)

#### Defined in

node\_modules/@types/node/globals.d.ts:143

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

[`AxiosError`](AxiosError.md).[`stackTraceLimit`](AxiosError.md#stacktracelimit)

#### Defined in

node\_modules/@types/node/globals.d.ts:145

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

• **targetObject**: `object`

• **constructorOpt?**: `Function`

#### Returns

`void`

#### Inherited from

[`AxiosError`](AxiosError.md).[`captureStackTrace`](AxiosError.md#capturestacktrace)

#### Defined in

node\_modules/@types/node/globals.d.ts:136

***

### from()

> `static` **from**\<`T`, `D`\>(`error`, `code`?, `config`?, `request`?, `response`?, `customProps`?): [`AxiosError`](AxiosError.md)\<`T`, `D`\>

#### Type Parameters

• **T** = `unknown`

• **D** = `any`

#### Parameters

• **error**: `unknown`

• **code?**: `string`

• **config?**: [`InternalAxiosRequestConfig`](../interfaces/InternalAxiosRequestConfig.md)\<`D`\>

• **request?**: `any`

• **response?**: [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `D`\>

• **customProps?**: `object`

#### Returns

[`AxiosError`](AxiosError.md)\<`T`, `D`\>

#### Inherited from

[`AxiosError`](AxiosError.md).[`from`](AxiosError.md#from)

#### Defined in

node\_modules/axios/index.d.ts:419
