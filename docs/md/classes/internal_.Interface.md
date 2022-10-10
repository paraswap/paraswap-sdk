[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Interface

# Class: Interface

[<internal>](../modules/internal_.md).Interface

## Table of contents

### Constructors

- [constructor](internal_.Interface.md#constructor)

### Properties

- [\_abiCoder](internal_.Interface.md#_abicoder)
- [\_isInterface](internal_.Interface.md#_isinterface)
- [deploy](internal_.Interface.md#deploy)
- [errors](internal_.Interface.md#errors)
- [events](internal_.Interface.md#events)
- [fragments](internal_.Interface.md#fragments)
- [functions](internal_.Interface.md#functions)
- [structs](internal_.Interface.md#structs)

### Methods

- [\_decodeParams](internal_.Interface.md#_decodeparams)
- [\_encodeParams](internal_.Interface.md#_encodeparams)
- [decodeErrorResult](internal_.Interface.md#decodeerrorresult)
- [decodeEventLog](internal_.Interface.md#decodeeventlog)
- [decodeFunctionData](internal_.Interface.md#decodefunctiondata)
- [decodeFunctionResult](internal_.Interface.md#decodefunctionresult)
- [encodeDeploy](internal_.Interface.md#encodedeploy)
- [encodeErrorResult](internal_.Interface.md#encodeerrorresult)
- [encodeEventLog](internal_.Interface.md#encodeeventlog)
- [encodeFilterTopics](internal_.Interface.md#encodefiltertopics)
- [encodeFunctionData](internal_.Interface.md#encodefunctiondata)
- [encodeFunctionResult](internal_.Interface.md#encodefunctionresult)
- [format](internal_.Interface.md#format)
- [getError](internal_.Interface.md#geterror)
- [getEvent](internal_.Interface.md#getevent)
- [getEventTopic](internal_.Interface.md#geteventtopic)
- [getFunction](internal_.Interface.md#getfunction)
- [getSighash](internal_.Interface.md#getsighash)
- [parseError](internal_.Interface.md#parseerror)
- [parseLog](internal_.Interface.md#parselog)
- [parseTransaction](internal_.Interface.md#parsetransaction)
- [getAbiCoder](internal_.Interface.md#getabicoder)
- [getAddress](internal_.Interface.md#getaddress)
- [getEventTopic](internal_.Interface.md#geteventtopic-1)
- [getSighash](internal_.Interface.md#getsighash-1)
- [isInterface](internal_.Interface.md#isinterface)

## Constructors

### constructor

• **new Interface**(`fragments`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragments` | `string` \| readonly (`string` \| [`Fragment`](internal_.Fragment.md) \| [`JsonFragment`](../interfaces/internal_.JsonFragment.md))[] |

## Properties

### \_abiCoder

• `Readonly` **\_abiCoder**: [`AbiCoder`](internal_.AbiCoder.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:50

___

### \_isInterface

• `Readonly` **\_isInterface**: `boolean`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:51

___

### deploy

• `Readonly` **deploy**: [`ConstructorFragment`](internal_.ConstructorFragment.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:49

___

### errors

• `Readonly` **errors**: `Object`

#### Index signature

▪ [name: `string`]: [`ErrorFragment`](internal_.ErrorFragment.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:37

___

### events

• `Readonly` **events**: `Object`

#### Index signature

▪ [name: `string`]: [`EventFragment`](internal_.EventFragment.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:40

___

### fragments

• `Readonly` **fragments**: readonly [`Fragment`](internal_.Fragment.md)[]

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:36

___

### functions

• `Readonly` **functions**: `Object`

#### Index signature

▪ [name: `string`]: [`FunctionFragment`](internal_.FunctionFragment.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:43

___

### structs

• `Readonly` **structs**: `Object`

#### Index signature

▪ [name: `string`]: `any`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:46

## Methods

### \_decodeParams

▸ **_decodeParams**(`params`, `data`): [`Result`](../interfaces/internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | readonly [`ParamType`](internal_.ParamType.md)[] |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](../interfaces/internal_.Result.md)

___

### \_encodeParams

▸ **_encodeParams**(`params`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | readonly [`ParamType`](internal_.ParamType.md)[] |
| `values` | readonly `any`[] |

#### Returns

`string`

___

### decodeErrorResult

▸ **decodeErrorResult**(`fragment`, `data`): [`Result`](../interfaces/internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragment` | `string` \| [`ErrorFragment`](internal_.ErrorFragment.md) |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](../interfaces/internal_.Result.md)

___

### decodeEventLog

▸ **decodeEventLog**(`eventFragment`, `data`, `topics?`): [`Result`](../interfaces/internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFragment` | `string` \| [`EventFragment`](internal_.EventFragment.md) |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |
| `topics?` | readonly `string`[] |

#### Returns

[`Result`](../interfaces/internal_.Result.md)

___

### decodeFunctionData

▸ **decodeFunctionData**(`functionFragment`, `data`): [`Result`](../interfaces/internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | `string` \| [`FunctionFragment`](internal_.FunctionFragment.md) |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](../interfaces/internal_.Result.md)

___

### decodeFunctionResult

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](../interfaces/internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | `string` \| [`FunctionFragment`](internal_.FunctionFragment.md) |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](../interfaces/internal_.Result.md)

___

### encodeDeploy

▸ **encodeDeploy**(`values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values?` | readonly `any`[] |

#### Returns

`string`

___

### encodeErrorResult

▸ **encodeErrorResult**(`fragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragment` | `string` \| [`ErrorFragment`](internal_.ErrorFragment.md) |
| `values?` | readonly `any`[] |

#### Returns

`string`

___

### encodeEventLog

▸ **encodeEventLog**(`eventFragment`, `values`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFragment` | [`EventFragment`](internal_.EventFragment.md) |
| `values` | readonly `any`[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `topics` | `string`[] |

___

### encodeFilterTopics

▸ **encodeFilterTopics**(`eventFragment`, `values`): (`string` \| `string`[])[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFragment` | [`EventFragment`](internal_.EventFragment.md) |
| `values` | readonly `any`[] |

#### Returns

(`string` \| `string`[])[]

___

### encodeFunctionData

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | `string` \| [`FunctionFragment`](internal_.FunctionFragment.md) |
| `values?` | readonly `any`[] |

#### Returns

`string`

___

### encodeFunctionResult

▸ **encodeFunctionResult**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | `string` \| [`FunctionFragment`](internal_.FunctionFragment.md) |
| `values?` | readonly `any`[] |

#### Returns

`string`

___

### format

▸ **format**(`format?`): `string` \| `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `format?` | `string` |

#### Returns

`string` \| `string`[]

___

### getError

▸ **getError**(`nameOrSignatureOrSighash`): [`ErrorFragment`](internal_.ErrorFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrSighash` | `string` |

#### Returns

[`ErrorFragment`](internal_.ErrorFragment.md)

___

### getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): [`EventFragment`](internal_.EventFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | `string` |

#### Returns

[`EventFragment`](internal_.EventFragment.md)

___

### getEventTopic

▸ **getEventTopic**(`eventFragment`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFragment` | `string` \| [`EventFragment`](internal_.EventFragment.md) |

#### Returns

`string`

___

### getFunction

▸ **getFunction**(`nameOrSignatureOrSighash`): [`FunctionFragment`](internal_.FunctionFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrSighash` | `string` |

#### Returns

[`FunctionFragment`](internal_.FunctionFragment.md)

___

### getSighash

▸ **getSighash**(`fragment`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragment` | `string` \| [`ErrorFragment`](internal_.ErrorFragment.md) \| [`FunctionFragment`](internal_.FunctionFragment.md) |

#### Returns

`string`

___

### parseError

▸ **parseError**(`data`): [`ErrorDescription`](internal_.ErrorDescription.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`ErrorDescription`](internal_.ErrorDescription.md)

___

### parseLog

▸ **parseLog**(`log`): [`LogDescription`](internal_.LogDescription.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `log` | `Object` |
| `log.data` | `string` |
| `log.topics` | `string`[] |

#### Returns

[`LogDescription`](internal_.LogDescription.md)

___

### parseTransaction

▸ **parseTransaction**(`tx`): [`TransactionDescription`](internal_.TransactionDescription.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Object` |
| `tx.data` | `string` |
| `tx.value?` | [`BigNumberish`](../modules/internal_.md#bignumberish) |

#### Returns

[`TransactionDescription`](internal_.TransactionDescription.md)

___

### getAbiCoder

▸ `Static` **getAbiCoder**(): [`AbiCoder`](internal_.AbiCoder.md)

#### Returns

[`AbiCoder`](internal_.AbiCoder.md)

___

### getAddress

▸ `Static` **getAddress**(`address`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`string`

___

### getEventTopic

▸ `Static` **getEventTopic**(`eventFragment`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFragment` | [`EventFragment`](internal_.EventFragment.md) |

#### Returns

`string`

___

### getSighash

▸ `Static` **getSighash**(`fragment`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragment` | [`ErrorFragment`](internal_.ErrorFragment.md) \| [`FunctionFragment`](internal_.FunctionFragment.md) |

#### Returns

`string`

___

### isInterface

▸ `Static` **isInterface**(`value`): value is Interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Interface
