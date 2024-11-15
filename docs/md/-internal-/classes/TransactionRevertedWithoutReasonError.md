[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionRevertedWithoutReasonError

# Class: TransactionRevertedWithoutReasonError\<ReceiptType\>

Base class for Web3 errors.

## Extends

- [`TransactionError`](TransactionError.md)\<`ReceiptType`\>

## Type Parameters

• **ReceiptType** = [`TransactionReceipt`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/TransactionReceipt.md)

## Constructors

### new TransactionRevertedWithoutReasonError()

> **new TransactionRevertedWithoutReasonError**\<`ReceiptType`\>(`receipt`?): [`TransactionRevertedWithoutReasonError`](TransactionRevertedWithoutReasonError.md)\<`ReceiptType`\>

#### Parameters

• **receipt?**: `ReceiptType`

#### Returns

[`TransactionRevertedWithoutReasonError`](TransactionRevertedWithoutReasonError.md)\<`ReceiptType`\>

#### Overrides

[`TransactionError`](TransactionError.md).[`constructor`](TransactionError.md#constructors)

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/transaction\_errors.d.ts:95

## Properties

### cause

> **cause**: `undefined` \| [`Error`](../interfaces/Error.md)

#### Inherited from

[`TransactionError`](TransactionError.md).[`cause`](TransactionError.md#cause)

#### Defined in

node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:9

***

### code

> **code**: `number`

#### Inherited from

[`TransactionError`](TransactionError.md).[`code`](TransactionError.md#code)

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/transaction\_errors.d.ts:5

***

### message

> **message**: `string`

#### Inherited from

[`TransactionError`](TransactionError.md).[`message`](TransactionError.md#message)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### name

> `readonly` **name**: `string`

#### Inherited from

[`TransactionError`](TransactionError.md).[`name`](TransactionError.md#name)

#### Defined in

node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:6

***

### receipt?

> `optional` **receipt**: `ReceiptType`

#### Inherited from

[`TransactionError`](TransactionError.md).[`receipt`](TransactionError.md#receipt)

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/transaction\_errors.d.ts:4

***

### stack

> **stack**: `undefined` \| `string`

#### Inherited from

[`TransactionError`](TransactionError.md).[`stack`](TransactionError.md#stack)

#### Defined in

node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:8

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

[`TransactionError`](TransactionError.md).[`prepareStackTrace`](TransactionError.md#preparestacktrace)

#### Defined in

node\_modules/@types/node/globals.d.ts:143

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

[`TransactionError`](TransactionError.md).[`stackTraceLimit`](TransactionError.md#stacktracelimit)

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

[`TransactionError`](TransactionError.md).[`innerError`](TransactionError.md#innererror)

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

##### innerError

> **innerError**: `undefined` \| [`Error`](../interfaces/Error.md)

##### message

> **message**: `string`

##### name

> **name**: `string`

##### receipt

> **receipt**: `undefined` \| `ReceiptType`

#### Inherited from

[`TransactionError`](TransactionError.md).[`toJSON`](TransactionError.md#tojson)

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/transaction\_errors.d.ts:7

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

[`TransactionError`](TransactionError.md).[`captureStackTrace`](TransactionError.md#capturestacktrace)

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

[`TransactionError`](TransactionError.md).[`convertToString`](TransactionError.md#converttostring)

#### Defined in

node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:19
