[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / BaseWeb3Error

# Class: `abstract` BaseWeb3Error

Base class for Web3 errors.

## Extends

- [`Error`](../interfaces/Error.md)

## Extended by

- [`RevertInstructionError`](RevertInstructionError.md)
- [`TransactionRevertInstructionError`](TransactionRevertInstructionError.md)
- [`TransactionPollingTimeoutError`](TransactionPollingTimeoutError.md)
- [`TransactionError`](TransactionError.md)
- [`ResponseError`](ResponseError.md)
- [`Web3ContractError`](Web3ContractError.md)

## Implements

- [`Web3Error`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Web3Error.md)

## Constructors

### new BaseWeb3Error()

> **new BaseWeb3Error**(`msg`?, `cause`?): [`BaseWeb3Error`](BaseWeb3Error.md)

#### Parameters

• **msg?**: `string`

• **cause?**: [`Error`](../interfaces/Error.md) \| [`Error`](../interfaces/Error.md)[]

#### Returns

[`BaseWeb3Error`](BaseWeb3Error.md)

#### Overrides

`Error.constructor`

#### Defined in

node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:18

## Properties

### cause

> **cause**: `undefined` \| [`Error`](../interfaces/Error.md)

#### Defined in

node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:9

***

### code

> `abstract` `readonly` **code**: `number`

#### Implementation of

[`Web3Error`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Web3Error.md).[`code`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Web3Error.md#code)

#### Defined in

node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:7

***

### message

> **message**: `string`

#### Implementation of

[`Web3Error`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Web3Error.md).[`message`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Web3Error.md#message)

#### Inherited from

[`Error`](../interfaces/Error.md).[`message`](../interfaces/Error.md#message)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### name

> `readonly` **name**: `string`

#### Implementation of

[`Web3Error`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Web3Error.md).[`name`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Web3Error.md#name)

#### Overrides

[`Error`](../interfaces/Error.md).[`name`](../interfaces/Error.md#name)

#### Defined in

node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:6

***

### stack

> **stack**: `undefined` \| `string`

#### Implementation of

[`Web3Error`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Web3Error.md).[`stack`](../namespaces/home_velenir-gnx570_Projects_Paraswap_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Web3Error.md#stack)

#### Overrides

[`Error`](../interfaces/Error.md).[`stack`](../interfaces/Error.md#stack)

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

`Error.captureStackTrace`

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

#### Defined in

node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:19
