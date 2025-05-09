[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractExecutionError

# Class: ContractExecutionError

Used when an error is raised while executing a function inside a smart contract.
The data is expected to be encoded according to EIP-848.

## Extends

- [`Web3ContractError`](Web3ContractError.md)

## Constructors

### new ContractExecutionError()

> **new ContractExecutionError**(`rpcError`): [`ContractExecutionError`](ContractExecutionError.md)

#### Parameters

• **rpcError**: [`JsonRpcError`](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/JsonRpcError.md)\<[`JsonRpcResult`](../type-aliases/JsonRpcResult.md)\>

#### Returns

[`ContractExecutionError`](ContractExecutionError.md)

#### Overrides

[`Web3ContractError`](Web3ContractError.md).[`constructor`](Web3ContractError.md#constructors)

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/contract\_errors.d.ts:116

## Properties

### cause

> **cause**: [`Eip838ExecutionError`](Eip838ExecutionError.md)

#### Overrides

[`Web3ContractError`](Web3ContractError.md).[`cause`](Web3ContractError.md#cause)

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/contract\_errors.d.ts:115

***

### code

> **code**: `number`

#### Inherited from

[`Web3ContractError`](Web3ContractError.md).[`code`](Web3ContractError.md#code)

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/contract\_errors.d.ts:4

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

#### Inherited from

[`Web3ContractError`](Web3ContractError.md).[`name`](Web3ContractError.md#name)

#### Defined in

node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:6

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

#### Inherited from

[`Web3ContractError`](Web3ContractError.md).[`toJSON`](Web3ContractError.md#tojson)

#### Defined in

node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:20

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
