[@paraswap/sdk](../README.md) / [Exports](../modules.md) / FetcherError

# Class: FetcherError

## Hierarchy

- [`Error`](../modules/internal_.md#error)

  ↳ **`FetcherError`**

## Implements

- [`FetcherErrorInterface`](../interfaces/FetcherErrorInterface.md)

## Table of contents

### Constructors

- [constructor](FetcherError.md#constructor)

### Properties

- [code](FetcherError.md#code)
- [isAxiosError](FetcherError.md#isaxioserror)
- [message](FetcherError.md#message)
- [name](FetcherError.md#name)
- [request](FetcherError.md#request)
- [response](FetcherError.md#response)
- [stack](FetcherError.md#stack)
- [status](FetcherError.md#status)
- [prepareStackTrace](FetcherError.md#preparestacktrace)
- [stackTraceLimit](FetcherError.md#stacktracelimit)

### Methods

- [captureStackTrace](FetcherError.md#capturestacktrace)

## Constructors

### constructor

• **new FetcherError**(`__namedParameters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`FetcherErrorConstructorInput`](../modules/internal_.md#fetchererrorconstructorinput) |

#### Overrides

Error.constructor

## Properties

### code

• **code**: `undefined` \| `string`

#### Implementation of

[FetcherErrorInterface](../interfaces/FetcherErrorInterface.md).[code](../interfaces/FetcherErrorInterface.md#code)

#### Defined in

[src/helpers/misc.ts:106](https://github.com/paraswap/paraswap-sdk/blob/master/src/helpers/misc.ts#L106)

___

### isAxiosError

• **isAxiosError**: `boolean` = `false`

#### Implementation of

[FetcherErrorInterface](../interfaces/FetcherErrorInterface.md).[isAxiosError](../interfaces/FetcherErrorInterface.md#isaxioserror)

#### Defined in

[src/helpers/misc.ts:110](https://github.com/paraswap/paraswap-sdk/blob/master/src/helpers/misc.ts#L110)

___

### message

• **message**: `string`

#### Implementation of

[FetcherErrorInterface](../interfaces/FetcherErrorInterface.md).[message](../interfaces/FetcherErrorInterface.md#message)

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

• **request**: `any`

#### Implementation of

[FetcherErrorInterface](../interfaces/FetcherErrorInterface.md).[request](../interfaces/FetcherErrorInterface.md#request)

#### Defined in

[src/helpers/misc.ts:108](https://github.com/paraswap/paraswap-sdk/blob/master/src/helpers/misc.ts#L108)

___

### response

• **response**: `undefined` \| [`AxiosResponse`](../interfaces/internal_.AxiosResponse.md)<`unknown`, `any`\>

#### Implementation of

[FetcherErrorInterface](../interfaces/FetcherErrorInterface.md).[response](../interfaces/FetcherErrorInterface.md#response)

#### Defined in

[src/helpers/misc.ts:109](https://github.com/paraswap/paraswap-sdk/blob/master/src/helpers/misc.ts#L109)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1024

___

### status

• **status**: `undefined` \| `number`

#### Implementation of

[FetcherErrorInterface](../interfaces/FetcherErrorInterface.md).[status](../interfaces/FetcherErrorInterface.md#status)

#### Defined in

[src/helpers/misc.ts:107](https://github.com/paraswap/paraswap-sdk/blob/master/src/helpers/misc.ts#L107)

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
