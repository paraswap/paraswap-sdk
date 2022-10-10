[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / AxiosError

# Class: AxiosError<T, D\>

[<internal>](../modules/internal_.md).AxiosError

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |
| `D` | `any` |

## Hierarchy

- [`Error`](../modules/internal_.md#error)

  ↳ **`AxiosError`**

## Table of contents

### Constructors

- [constructor](internal_.AxiosError.md#constructor)

### Properties

- [code](internal_.AxiosError.md#code)
- [config](internal_.AxiosError.md#config)
- [isAxiosError](internal_.AxiosError.md#isaxioserror)
- [message](internal_.AxiosError.md#message)
- [name](internal_.AxiosError.md#name)
- [request](internal_.AxiosError.md#request)
- [response](internal_.AxiosError.md#response)
- [stack](internal_.AxiosError.md#stack)
- [status](internal_.AxiosError.md#status)
- [toJSON](internal_.AxiosError.md#tojson)
- [ECONNABORTED](internal_.AxiosError.md#econnaborted)
- [ERR\_BAD\_OPTION](internal_.AxiosError.md#err_bad_option)
- [ERR\_BAD\_OPTION\_VALUE](internal_.AxiosError.md#err_bad_option_value)
- [ERR\_BAD\_REQUEST](internal_.AxiosError.md#err_bad_request)
- [ERR\_BAD\_RESPONSE](internal_.AxiosError.md#err_bad_response)
- [ERR\_CANCELED](internal_.AxiosError.md#err_canceled)
- [ERR\_DEPRECATED](internal_.AxiosError.md#err_deprecated)
- [ERR\_FR\_TOO\_MANY\_REDIRECTS](internal_.AxiosError.md#err_fr_too_many_redirects)
- [ERR\_NETWORK](internal_.AxiosError.md#err_network)
- [ETIMEDOUT](internal_.AxiosError.md#etimedout)
- [prepareStackTrace](internal_.AxiosError.md#preparestacktrace)
- [stackTraceLimit](internal_.AxiosError.md#stacktracelimit)

### Methods

- [captureStackTrace](internal_.AxiosError.md#capturestacktrace)

## Constructors

### constructor

• **new AxiosError**<`T`, `D`\>(`message?`, `code?`, `config?`, `request?`, `response?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `code?` | `string` |
| `config?` | [`AxiosRequestConfig`](../interfaces/internal_.AxiosRequestConfig.md)<`D`\> |
| `request?` | `any` |
| `response?` | [`AxiosResponse`](../interfaces/internal_.AxiosResponse.md)<`T`, `D`\> |

#### Overrides

Error.constructor

## Properties

### code

• `Optional` **code**: `string`

#### Defined in

node_modules/axios/index.d.ts:152

___

### config

• **config**: [`AxiosRequestConfig`](../interfaces/internal_.AxiosRequestConfig.md)<`D`\>

#### Defined in

node_modules/axios/index.d.ts:151

___

### isAxiosError

• **isAxiosError**: `boolean`

#### Defined in

node_modules/axios/index.d.ts:155

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1023

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1022

___

### request

• `Optional` **request**: `any`

#### Defined in

node_modules/axios/index.d.ts:153

___

### response

• `Optional` **response**: [`AxiosResponse`](../interfaces/internal_.AxiosResponse.md)<`T`, `D`\>

#### Defined in

node_modules/axios/index.d.ts:154

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1024

___

### status

• `Optional` **status**: `string`

#### Defined in

node_modules/axios/index.d.ts:156

___

### toJSON

• **toJSON**: () => `object`

#### Type declaration

▸ (): `object`

##### Returns

`object`

#### Defined in

node_modules/axios/index.d.ts:157

___

### ECONNABORTED

▪ `Static` `Readonly` **ECONNABORTED**: ``"ECONNABORTED"``

#### Defined in

node_modules/axios/index.d.ts:166

___

### ERR\_BAD\_OPTION

▪ `Static` `Readonly` **ERR\_BAD\_OPTION**: ``"ERR_BAD_OPTION"``

#### Defined in

node_modules/axios/index.d.ts:160

___

### ERR\_BAD\_OPTION\_VALUE

▪ `Static` `Readonly` **ERR\_BAD\_OPTION\_VALUE**: ``"ERR_BAD_OPTION_VALUE"``

#### Defined in

node_modules/axios/index.d.ts:159

___

### ERR\_BAD\_REQUEST

▪ `Static` `Readonly` **ERR\_BAD\_REQUEST**: ``"ERR_BAD_REQUEST"``

#### Defined in

node_modules/axios/index.d.ts:164

___

### ERR\_BAD\_RESPONSE

▪ `Static` `Readonly` **ERR\_BAD\_RESPONSE**: ``"ERR_BAD_RESPONSE"``

#### Defined in

node_modules/axios/index.d.ts:163

___

### ERR\_CANCELED

▪ `Static` `Readonly` **ERR\_CANCELED**: ``"ERR_CANCELED"``

#### Defined in

node_modules/axios/index.d.ts:165

___

### ERR\_DEPRECATED

▪ `Static` `Readonly` **ERR\_DEPRECATED**: ``"ERR_DEPRECATED"``

#### Defined in

node_modules/axios/index.d.ts:162

___

### ERR\_FR\_TOO\_MANY\_REDIRECTS

▪ `Static` `Readonly` **ERR\_FR\_TOO\_MANY\_REDIRECTS**: ``"ERR_FR_TOO_MANY_REDIRECTS"``

#### Defined in

node_modules/axios/index.d.ts:158

___

### ERR\_NETWORK

▪ `Static` `Readonly` **ERR\_NETWORK**: ``"ERR_NETWORK"``

#### Defined in

node_modules/axios/index.d.ts:161

___

### ETIMEDOUT

▪ `Static` `Readonly` **ETIMEDOUT**: ``"ETIMEDOUT"``

#### Defined in

node_modules/axios/index.d.ts:167

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: [`Error`](../modules/internal_.md#error), `stackTraces`: [`CallSite`](../interfaces/internal_.CallSite.md)[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | [`Error`](../modules/internal_.md#error) |
| `stackTraces` | [`CallSite`](../interfaces/internal_.CallSite.md)[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace
