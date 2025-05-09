[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionRevertWithCustomError

# Class: TransactionRevertWithCustomError\<ReceiptType\>

This error is used when a transaction to a smart contract fails and
a custom user error (https://blog.soliditylang.org/2021/04/21/custom-errors/)
is able to be parsed from the revert reason

## Extends

- [`TransactionRevertInstructionError`](TransactionRevertInstructionError.md)\<`ReceiptType`\>

## Type Parameters

• **ReceiptType** = [`TransactionReceipt`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/TransactionReceipt.md)

## Constructors

### new TransactionRevertWithCustomError()

> **new TransactionRevertWithCustomError**\<`ReceiptType`\>(`reason`, `customErrorName`, `customErrorDecodedSignature`, `customErrorArguments`, `signature`?, `receipt`?, `data`?): [`TransactionRevertWithCustomError`](TransactionRevertWithCustomError.md)\<`ReceiptType`\>

#### Parameters

• **reason**: `string`

• **customErrorName**: `string`

• **customErrorDecodedSignature**: `string`

• **customErrorArguments**: [`Record`](../type-aliases/Record.md)\<`string`, `unknown`\>

• **signature?**: `string`

• **receipt?**: `ReceiptType`

• **data?**: `string`

#### Returns

[`TransactionRevertWithCustomError`](TransactionRevertWithCustomError.md)\<`ReceiptType`\>

#### Overrides

[`TransactionRevertInstructionError`](TransactionRevertInstructionError.md).[`constructor`](TransactionRevertInstructionError.md#constructors)

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/transaction\_errors.d.ts:64

## Properties

### cause

> **cause**: `undefined` \| [`Error`](../interfaces/Error.md)

#### Inherited from

[`TransactionRevertInstructionError`](TransactionRevertInstructionError.md).[`cause`](TransactionRevertInstructionError.md#cause)

#### Defined in

node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:9

***

### code

> **code**: `number`

#### Overrides

[`TransactionRevertInstructionError`](TransactionRevertInstructionError.md).[`code`](TransactionRevertInstructionError.md#code)

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/transaction\_errors.d.ts:63

***

### customErrorArguments

> **customErrorArguments**: [`Record`](../type-aliases/Record.md)\<`string`, `unknown`\>

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/transaction\_errors.d.ts:59

***

### customErrorDecodedSignature

> **customErrorDecodedSignature**: `string`

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/transaction\_errors.d.ts:58

***

### customErrorName

> **customErrorName**: `string`

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/transaction\_errors.d.ts:57

***

### data?

> `optional` **data**: `string`

#### Overrides

[`TransactionRevertInstructionError`](TransactionRevertInstructionError.md).[`data`](TransactionRevertInstructionError.md#data)

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/transaction\_errors.d.ts:62

***

### message

> **message**: `string`

#### Inherited from

[`TransactionRevertInstructionError`](TransactionRevertInstructionError.md).[`message`](TransactionRevertInstructionError.md#message)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### name

> `readonly` **name**: `string`

#### Inherited from

[`TransactionRevertInstructionError`](TransactionRevertInstructionError.md).[`name`](TransactionRevertInstructionError.md#name)

#### Defined in

node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:6

***

### reason

> **reason**: `string`

#### Overrides

[`TransactionRevertInstructionError`](TransactionRevertInstructionError.md).[`reason`](TransactionRevertInstructionError.md#reason)

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/transaction\_errors.d.ts:56

***

### receipt?

> `optional` **receipt**: `ReceiptType`

#### Overrides

[`TransactionRevertInstructionError`](TransactionRevertInstructionError.md).[`receipt`](TransactionRevertInstructionError.md#receipt)

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/transaction\_errors.d.ts:61

***

### signature?

> `optional` **signature**: `string`

#### Overrides

[`TransactionRevertInstructionError`](TransactionRevertInstructionError.md).[`signature`](TransactionRevertInstructionError.md#signature)

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/transaction\_errors.d.ts:60

***

### stack

> **stack**: `undefined` \| `string`

#### Inherited from

[`TransactionRevertInstructionError`](TransactionRevertInstructionError.md).[`stack`](TransactionRevertInstructionError.md#stack)

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

[`TransactionRevertInstructionError`](TransactionRevertInstructionError.md).[`prepareStackTrace`](TransactionRevertInstructionError.md#preparestacktrace)

#### Defined in

node\_modules/@types/node/globals.d.ts:143

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

[`TransactionRevertInstructionError`](TransactionRevertInstructionError.md).[`stackTraceLimit`](TransactionRevertInstructionError.md#stacktracelimit)

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

[`TransactionRevertInstructionError`](TransactionRevertInstructionError.md).[`innerError`](TransactionRevertInstructionError.md#innererror)

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

##### customErrorArguments

> **customErrorArguments**: [`Record`](../type-aliases/Record.md)\<`string`, `unknown`\>

##### customErrorDecodedSignature

> **customErrorDecodedSignature**: `string`

##### customErrorName

> **customErrorName**: `string`

##### data

> **data**: `undefined` \| `string`

##### innerError

> **innerError**: `undefined` \| [`Error`](../interfaces/Error.md)

##### message

> **message**: `string`

##### name

> **name**: `string`

##### reason

> **reason**: `string`

##### receipt

> **receipt**: `undefined` \| `ReceiptType`

##### signature

> **signature**: `undefined` \| `string`

#### Overrides

[`TransactionRevertInstructionError`](TransactionRevertInstructionError.md).[`toJSON`](TransactionRevertInstructionError.md#tojson)

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/transaction\_errors.d.ts:65

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

[`TransactionRevertInstructionError`](TransactionRevertInstructionError.md).[`captureStackTrace`](TransactionRevertInstructionError.md#capturestacktrace)

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

[`TransactionRevertInstructionError`](TransactionRevertInstructionError.md).[`convertToString`](TransactionRevertInstructionError.md#converttostring)

#### Defined in

node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:19
