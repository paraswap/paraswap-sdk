[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ResponseError

# Class: ResponseError\<ErrorType, RequestType\>

Base class for Web3 errors.

## Extends

- [`BaseWeb3Error`](BaseWeb3Error.md)

## Extended by

- [`InvalidResponseError`](InvalidResponseError.md)

## Type Parameters

• **ErrorType** = `unknown`

• **RequestType** = `unknown`

## Constructors

### new ResponseError()

> **new ResponseError**\<`ErrorType`, `RequestType`\>(`response`, `message`?, `request`?, `statusCode`?): [`ResponseError`](ResponseError.md)\<`ErrorType`, `RequestType`\>

#### Parameters

• **response**: [`JsonRpcResponse`](../type-aliases/JsonRpcResponse.md)\<`unknown`, `ErrorType`\>

• **message?**: `string`

• **request?**: [`JsonRpcPayload`](../type-aliases/JsonRpcPayload.md)\<`RequestType`\>

• **statusCode?**: `number`

#### Returns

[`ResponseError`](ResponseError.md)\<`ErrorType`, `RequestType`\>

#### Overrides

[`BaseWeb3Error`](BaseWeb3Error.md).[`constructor`](BaseWeb3Error.md#constructors)

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/response\_errors.d.ts:8

## Properties

### cause

> **cause**: `undefined` \| [`Error`](../interfaces/Error.md)

#### Inherited from

[`BaseWeb3Error`](BaseWeb3Error.md).[`cause`](BaseWeb3Error.md#cause)

#### Defined in

node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:9

***

### code

> **code**: `number`

#### Overrides

[`BaseWeb3Error`](BaseWeb3Error.md).[`code`](BaseWeb3Error.md#code)

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/response\_errors.d.ts:4

***

### data?

> `optional` **data**: `ErrorType` \| `ErrorType`[]

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/response\_errors.d.ts:5

***

### message

> **message**: `string`

#### Inherited from

[`BaseWeb3Error`](BaseWeb3Error.md).[`message`](BaseWeb3Error.md#message)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### name

> `readonly` **name**: `string`

#### Inherited from

[`BaseWeb3Error`](BaseWeb3Error.md).[`name`](BaseWeb3Error.md#name)

#### Defined in

node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:6

***

### request?

> `optional` **request**: [`JsonRpcPayload`](../type-aliases/JsonRpcPayload.md)\<`RequestType`\>

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/response\_errors.d.ts:6

***

### stack

> **stack**: `undefined` \| `string`

#### Inherited from

[`BaseWeb3Error`](BaseWeb3Error.md).[`stack`](BaseWeb3Error.md#stack)

#### Defined in

node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:8

***

### statusCode?

> `optional` **statusCode**: `number`

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

[`BaseWeb3Error`](BaseWeb3Error.md).[`prepareStackTrace`](BaseWeb3Error.md#preparestacktrace)

#### Defined in

node\_modules/@types/node/globals.d.ts:143

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

[`BaseWeb3Error`](BaseWeb3Error.md).[`stackTraceLimit`](BaseWeb3Error.md#stacktracelimit)

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

[`BaseWeb3Error`](BaseWeb3Error.md).[`innerError`](BaseWeb3Error.md#innererror)

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

#### Overrides

[`BaseWeb3Error`](BaseWeb3Error.md).[`toJSON`](BaseWeb3Error.md#tojson)

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

[`BaseWeb3Error`](BaseWeb3Error.md).[`captureStackTrace`](BaseWeb3Error.md#capturestacktrace)

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

[`BaseWeb3Error`](BaseWeb3Error.md).[`convertToString`](BaseWeb3Error.md#converttostring)

#### Defined in

node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:19
