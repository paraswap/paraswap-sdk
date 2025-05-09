[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / FetcherError

# Class: FetcherError

## Extends

- [`Error`](../-internal-/interfaces/Error.md)

## Implements

- [`FetcherErrorInterface`](../interfaces/FetcherErrorInterface.md)

## Constructors

### new FetcherError()

> **new FetcherError**(`__namedParameters`): [`FetcherError`](FetcherError.md)

#### Parameters

• **\_\_namedParameters**: [`FetcherErrorConstructorInput`](../-internal-/type-aliases/FetcherErrorConstructorInput.md)

#### Returns

[`FetcherError`](FetcherError.md)

#### Overrides

`Error.constructor`

#### Defined in

[src/helpers/misc.ts:63](https://github.com/VeloraDEX/paraswap-sdk/blob/feat/velora/src/helpers/misc.ts#L63)

## Properties

### code

> **code**: `undefined` \| `string`

#### Implementation of

[`FetcherErrorInterface`](../interfaces/FetcherErrorInterface.md).[`code`](../interfaces/FetcherErrorInterface.md#code)

#### Defined in

[src/helpers/misc.ts:57](https://github.com/VeloraDEX/paraswap-sdk/blob/feat/velora/src/helpers/misc.ts#L57)

***

### isAxiosError

> **isAxiosError**: `boolean` = `false`

#### Implementation of

[`FetcherErrorInterface`](../interfaces/FetcherErrorInterface.md).[`isAxiosError`](../interfaces/FetcherErrorInterface.md#isaxioserror)

#### Defined in

[src/helpers/misc.ts:61](https://github.com/VeloraDEX/paraswap-sdk/blob/feat/velora/src/helpers/misc.ts#L61)

***

### message

> **message**: `string`

#### Implementation of

[`FetcherErrorInterface`](../interfaces/FetcherErrorInterface.md).[`message`](../interfaces/FetcherErrorInterface.md#message)

#### Inherited from

[`Error`](../-internal-/interfaces/Error.md).[`message`](../-internal-/interfaces/Error.md#message)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### name

> **name**: `string`

#### Inherited from

[`Error`](../-internal-/interfaces/Error.md).[`name`](../-internal-/interfaces/Error.md#name)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### request

> **request**: `any`

#### Implementation of

[`FetcherErrorInterface`](../interfaces/FetcherErrorInterface.md).[`request`](../interfaces/FetcherErrorInterface.md#request)

#### Defined in

[src/helpers/misc.ts:59](https://github.com/VeloraDEX/paraswap-sdk/blob/feat/velora/src/helpers/misc.ts#L59)

***

### response

> **response**: `undefined` \| [`MinAxiosResponse`](../-internal-/type-aliases/MinAxiosResponse.md)

#### Implementation of

[`FetcherErrorInterface`](../interfaces/FetcherErrorInterface.md).[`response`](../interfaces/FetcherErrorInterface.md#response)

#### Defined in

[src/helpers/misc.ts:60](https://github.com/VeloraDEX/paraswap-sdk/blob/feat/velora/src/helpers/misc.ts#L60)

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

[`Error`](../-internal-/interfaces/Error.md).[`stack`](../-internal-/interfaces/Error.md#stack)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1078

***

### status

> **status**: `undefined` \| `number`

#### Implementation of

[`FetcherErrorInterface`](../interfaces/FetcherErrorInterface.md).[`status`](../interfaces/FetcherErrorInterface.md#status)

#### Defined in

[src/helpers/misc.ts:58](https://github.com/VeloraDEX/paraswap-sdk/blob/feat/velora/src/helpers/misc.ts#L58)

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### Parameters

• **err**: [`Error`](../-internal-/interfaces/Error.md)

• **stackTraces**: [`CallSite`](../-internal-/interfaces/CallSite.md)[]

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
