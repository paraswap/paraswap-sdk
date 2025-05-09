[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Eip838ExecutionError

# Class: Eip838ExecutionError

This class is expected to be set as an `cause` inside ContractExecutionError
The properties would be typically decoded from the `data` if it was encoded according to EIP-838

## Extends

- [`Web3ContractError`](Web3ContractError.md)

## Constructors

### new Eip838ExecutionError()

> **new Eip838ExecutionError**(`error`): [`Eip838ExecutionError`](Eip838ExecutionError.md)

#### Parameters

• **error**: [`Eip838ExecutionError`](Eip838ExecutionError.md) \| [`JsonRpcError`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/JsonRpcError.md)\<[`ProviderErrorData`](../type-aliases/ProviderErrorData.md)\>

#### Returns

[`Eip838ExecutionError`](Eip838ExecutionError.md)

#### Overrides

[`Web3ContractError`](Web3ContractError.md).[`constructor`](Web3ContractError.md#constructors)

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/contract\_errors.d.ts:92

## Properties

### cause

> **cause**: `undefined` \| [`Eip838ExecutionError`](Eip838ExecutionError.md)

#### Overrides

[`Web3ContractError`](Web3ContractError.md).[`cause`](Web3ContractError.md#cause)

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/contract\_errors.d.ts:91

***

### code

> **code**: `number`

#### Overrides

[`Web3ContractError`](Web3ContractError.md).[`code`](Web3ContractError.md#code)

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/contract\_errors.d.ts:84

***

### data?

> `optional` **data**: `string`

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/contract\_errors.d.ts:85

***

### errorArgs?

> `optional` **errorArgs**: `object`

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/contract\_errors.d.ts:88

***

### errorName?

> `optional` **errorName**: `string`

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/contract\_errors.d.ts:86

***

### errorSignature?

> `optional` **errorSignature**: `string`

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/contract\_errors.d.ts:87

***

### message

> **message**: `string`

#### Inherited from

[`Web3ContractError`](Web3ContractError.md).[`message`](Web3ContractError.md#message)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### name

> `readonly` **name**: `string`

#### Overrides

[`Web3ContractError`](Web3ContractError.md).[`name`](Web3ContractError.md#name)

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/contract\_errors.d.ts:83

***

### receipt?

> `optional` **receipt**: [`TransactionReceipt`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/TransactionReceipt.md)

#### Inherited from

[`Web3ContractError`](Web3ContractError.md).[`receipt`](Web3ContractError.md#receipt)

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/contract\_errors.d.ts:5

***

### stack

> **stack**: `undefined` \| `string`

#### Inherited from

[`Web3ContractError`](Web3ContractError.md).[`stack`](Web3ContractError.md#stack)

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

[`Web3ContractError`](Web3ContractError.md).[`prepareStackTrace`](Web3ContractError.md#preparestacktrace)

#### Defined in

node\_modules/@types/node/globals.d.ts:143

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

[`Web3ContractError`](Web3ContractError.md).[`stackTraceLimit`](Web3ContractError.md#stacktracelimit)

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

[`Web3ContractError`](Web3ContractError.md).[`innerError`](Web3ContractError.md#innererror)

#### Defined in

node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:13

## Methods

### setDecodedProperties()

> **setDecodedProperties**(`errorName`, `errorSignature`?, `errorArgs`?): `void`

#### Parameters

• **errorName**: `string`

• **errorSignature?**: `string`

• **errorArgs?**

#### Returns

`void`

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/contract\_errors.d.ts:93

***

### toJSON()

> **toJSON**(): `object`

#### Returns

`object`

##### cause

> **cause**: `undefined` \| [`Eip838ExecutionError`](Eip838ExecutionError.md)

##### code

> **code**: `number`

##### data

> **data**: `string`

##### errorArgs?

> `optional` **errorArgs**: `object`

###### Index Signature

 \[`x`: `string`\]: `unknown`

##### errorName?

> `optional` **errorName**: `string`

##### errorSignature?

> `optional` **errorSignature**: `string`

##### innerError

> **innerError**: `undefined` \| [`Eip838ExecutionError`](Eip838ExecutionError.md)

##### message

> **message**: `string`

##### name

> **name**: `string`

#### Overrides

[`Web3ContractError`](Web3ContractError.md).[`toJSON`](Web3ContractError.md#tojson)

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/contract\_errors.d.ts:96

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

[`Web3ContractError`](Web3ContractError.md).[`captureStackTrace`](Web3ContractError.md#capturestacktrace)

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

[`Web3ContractError`](Web3ContractError.md).[`convertToString`](Web3ContractError.md#converttostring)

#### Defined in

node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:19
