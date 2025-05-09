[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / InvalidResponseError

# Class: InvalidResponseError\<ErrorType, RequestType\>

Base class for Web3 errors.

## Extends

- [`ResponseError`](ResponseError.md)\<`ErrorType`, `RequestType`\>

## Type Parameters

• **ErrorType** = `unknown`

• **RequestType** = `unknown`

## Constructors

### new InvalidResponseError()

> **new InvalidResponseError**\<`ErrorType`, `RequestType`\>(`result`, `request`?): [`InvalidResponseError`](InvalidResponseError.md)\<`ErrorType`, `RequestType`\>

#### Parameters

• **result**: [`JsonRpcResponse`](../type-aliases/JsonRpcResponse.md)\<`unknown`, `ErrorType`\>

• **request?**: [`JsonRpcPayload`](../type-aliases/JsonRpcPayload.md)\<`RequestType`\>

#### Returns

[`InvalidResponseError`](InvalidResponseError.md)\<`ErrorType`, `RequestType`\>

#### Overrides

[`ResponseError`](ResponseError.md).[`constructor`](ResponseError.md#constructors)

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/response\_errors.d.ts:21

## Properties

### cause

> **cause**: `undefined` \| [`Error`](../interfaces/Error.md)

#### Inherited from

[`ResponseError`](ResponseError.md).[`cause`](ResponseError.md#cause)

#### Defined in

node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:9

***

### code

> **code**: `number`

#### Inherited from

[`ResponseError`](ResponseError.md).[`code`](ResponseError.md#code)

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/response\_errors.d.ts:4

***

### data?

> `optional` **data**: `ErrorType` \| `ErrorType`[]

#### Inherited from

[`ResponseError`](ResponseError.md).[`data`](ResponseError.md#data)

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/response\_errors.d.ts:5

***

### message

> **message**: `string`

#### Inherited from

[`ResponseError`](ResponseError.md).[`message`](ResponseError.md#message)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### name

> `readonly` **name**: `string`

#### Inherited from

[`ResponseError`](ResponseError.md).[`name`](ResponseError.md#name)

#### Defined in

node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:6

***

### request?

> `optional` **request**: [`JsonRpcPayload`](../type-aliases/JsonRpcPayload.md)\<`RequestType`\>

#### Inherited from

[`ResponseError`](ResponseError.md).[`request`](ResponseError.md#request)

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/response\_errors.d.ts:6

***

### stack

> **stack**: `undefined` \| `string`

#### Inherited from

[`ResponseError`](ResponseError.md).[`stack`](ResponseError.md#stack)

#### Defined in

node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:8

***

### statusCode?

> `optional` **statusCode**: `number`

#### Inherited from

[`ResponseError`](ResponseError.md).[`statusCode`](ResponseError.md#statuscode)

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/response\_errors.d.ts:7

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

[`ResponseError`](ResponseError.md).[`prepareStackTrace`](ResponseError.md#preparestacktrace)

#### Defined in

node\_modules/@types/node/globals.d.ts:143

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

[`ResponseError`](ResponseError.md).[`stackTraceLimit`](ResponseError.md#stacktracelimit)

#### Defined in

node\_modules/@types/node/globals.d.ts:145

## Accessors

### innerError

#### Get Signature

> **get** **innerError**(): `undefined` \| [`Error`](../interfaces/Error.md) \| [`Error`](../interfaces/Error.md)[]

##### Deprecated

Use the `cause` property instead.

##### Returns

`undefined` \| [`Error`](../interfaces/Error.md) \| [`Error`](../interfaces/Error.md)[]

#### Set Signature

> **set** **innerError**(`cause`): `void`

##### Deprecated

Use the `cause` property instead.

##### Parameters

• **cause**: `undefined` \| [`Error`](../interfaces/Error.md) \| [`Error`](../interfaces/Error.md)[]

##### Returns

`void`

#### Inherited from

[`ResponseError`](ResponseError.md).[`innerError`](ResponseError.md#innererror)

#### Defined in

node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:13

## Methods

### toJSON()

> **toJSON**(): `object`

#### Returns

`object`

##### cause

> **cause**: `undefined` \| [`Error`](../interfaces/Error.md)

##### code

> **code**: `number`

##### data

> **data**: `undefined` \| `ErrorType` \| `ErrorType`[]

##### innerError

> **innerError**: `undefined` \| [`Error`](../interfaces/Error.md)

##### message

> **message**: `string`

##### name

> **name**: `string`

##### request

> **request**: `undefined` \| [`JsonRpcPayload`](../type-aliases/JsonRpcPayload.md)\<`RequestType`\>

##### statusCode

> **statusCode**: `undefined` \| `number`

#### Inherited from

[`ResponseError`](ResponseError.md).[`toJSON`](ResponseError.md#tojson)

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/response\_errors.d.ts:9

***

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

• **targetObject**: `object`

• **constructorOpt?**: `Function`

#### Returns

`void`

#### Inherited from

[`ResponseError`](ResponseError.md).[`captureStackTrace`](ResponseError.md#capturestacktrace)

#### Defined in

node\_modules/@types/node/globals.d.ts:136

***

### convertToString()

> `static` **convertToString**(`value`, `unquotValue`?): `string`

#### Parameters

• **value**: `unknown`

• **unquotValue?**: `boolean`

#### Returns

`string`

#### Inherited from

[`ResponseError`](ResponseError.md).[`convertToString`](ResponseError.md#converttostring)

#### Defined in

node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:19
