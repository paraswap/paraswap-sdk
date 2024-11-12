[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / AxiosError

# Class: AxiosError\<T, D\>

## Extends

- [`Error`](../interfaces/Error.md)

## Extended by

- [`CanceledError`](CanceledError.md)

## Type Parameters

• **T** = `unknown`

• **D** = `any`

## Constructors

### new AxiosError()

> **new AxiosError**\<`T`, `D`\>(`message`?, `code`?, `config`?, `request`?, `response`?): [`AxiosError`](AxiosError.md)\<`T`, `D`\>

#### Parameters

• **message?**: `string`

• **code?**: `string`

• **config?**: [`InternalAxiosRequestConfig`](../interfaces/InternalAxiosRequestConfig.md)\<`D`\>

• **request?**: `any`

• **response?**: [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `D`\>

#### Returns

[`AxiosError`](AxiosError.md)\<`T`, `D`\>

#### Overrides

`Error.constructor`

#### Defined in

node\_modules/axios/index.d.ts:403

## Properties

### cause?

> `optional` **cause**: [`Error`](../interfaces/Error.md)

#### Defined in

node\_modules/axios/index.d.ts:418

***

### code?

> `optional` **code**: `string`

#### Defined in

node\_modules/axios/index.d.ts:412

***

### config?

> `optional` **config**: [`InternalAxiosRequestConfig`](../interfaces/InternalAxiosRequestConfig.md)\<`D`\>

#### Defined in

node\_modules/axios/index.d.ts:411

***

### isAxiosError

> **isAxiosError**: `boolean`

#### Defined in

node\_modules/axios/index.d.ts:415

***

### message

> **message**: `string`

#### Inherited from

[`Error`](../interfaces/Error.md).[`message`](../interfaces/Error.md#message)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### name

> **name**: `string`

#### Inherited from

[`Error`](../interfaces/Error.md).[`name`](../interfaces/Error.md#name)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### request?

> `optional` **request**: `any`

#### Defined in

node\_modules/axios/index.d.ts:413

***

### response?

> `optional` **response**: [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `D`\>

#### Defined in

node\_modules/axios/index.d.ts:414

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

[`Error`](../interfaces/Error.md).[`stack`](../interfaces/Error.md#stack)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1078

***

### status?

> `optional` **status**: `number`

#### Defined in

node\_modules/axios/index.d.ts:416

***

### toJSON()

> **toJSON**: () => `object`

#### Returns

`object`

#### Defined in

node\_modules/axios/index.d.ts:417

***

### ECONNABORTED

> `readonly` `static` **ECONNABORTED**: `"ECONNABORTED"` = `"ECONNABORTED"`

#### Defined in

node\_modules/axios/index.d.ts:437

***

### ERR\_BAD\_OPTION

> `readonly` `static` **ERR\_BAD\_OPTION**: `"ERR_BAD_OPTION"` = `"ERR_BAD_OPTION"`

#### Defined in

node\_modules/axios/index.d.ts:429

***

### ERR\_BAD\_OPTION\_VALUE

> `readonly` `static` **ERR\_BAD\_OPTION\_VALUE**: `"ERR_BAD_OPTION_VALUE"` = `"ERR_BAD_OPTION_VALUE"`

#### Defined in

node\_modules/axios/index.d.ts:428

***

### ERR\_BAD\_REQUEST

> `readonly` `static` **ERR\_BAD\_REQUEST**: `"ERR_BAD_REQUEST"` = `"ERR_BAD_REQUEST"`

#### Defined in

node\_modules/axios/index.d.ts:433

***

### ERR\_BAD\_RESPONSE

> `readonly` `static` **ERR\_BAD\_RESPONSE**: `"ERR_BAD_RESPONSE"` = `"ERR_BAD_RESPONSE"`

#### Defined in

node\_modules/axios/index.d.ts:432

***

### ERR\_CANCELED

> `readonly` `static` **ERR\_CANCELED**: `"ERR_CANCELED"` = `"ERR_CANCELED"`

#### Defined in

node\_modules/axios/index.d.ts:436

***

### ERR\_DEPRECATED

> `readonly` `static` **ERR\_DEPRECATED**: `"ERR_DEPRECATED"` = `"ERR_DEPRECATED"`

#### Defined in

node\_modules/axios/index.d.ts:431

***

### ERR\_FR\_TOO\_MANY\_REDIRECTS

> `readonly` `static` **ERR\_FR\_TOO\_MANY\_REDIRECTS**: `"ERR_FR_TOO_MANY_REDIRECTS"` = `"ERR_FR_TOO_MANY_REDIRECTS"`

#### Defined in

node\_modules/axios/index.d.ts:427

***

### ERR\_INVALID\_URL

> `readonly` `static` **ERR\_INVALID\_URL**: `"ERR_INVALID_URL"` = `"ERR_INVALID_URL"`

#### Defined in

node\_modules/axios/index.d.ts:435

***

### ERR\_NETWORK

> `readonly` `static` **ERR\_NETWORK**: `"ERR_NETWORK"` = `"ERR_NETWORK"`

#### Defined in

node\_modules/axios/index.d.ts:430

***

### ERR\_NOT\_SUPPORT

> `readonly` `static` **ERR\_NOT\_SUPPORT**: `"ERR_NOT_SUPPORT"` = `"ERR_NOT_SUPPORT"`

#### Defined in

node\_modules/axios/index.d.ts:434

***

### ETIMEDOUT

> `readonly` `static` **ETIMEDOUT**: `"ETIMEDOUT"` = `"ETIMEDOUT"`

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

`Error.prepareStackTrace`

#### Defined in

node\_modules/@types/node/globals.d.ts:143

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

`Error.stackTraceLimit`

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

`Error.captureStackTrace`

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

#### Defined in

node\_modules/axios/index.d.ts:419
