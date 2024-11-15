[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / Interface

# Class: Interface

## Constructors

### new Interface()

> **new Interface**(`fragments`): [`Interface`](Interface.md)

#### Parameters

• **fragments**: `string` \| readonly (`string` \| [`Fragment`](Fragment.md) \| [`JsonFragment`](../interfaces/JsonFragment.md))[]

#### Returns

[`Interface`](Interface.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/interface.d.ts:52

## Properties

### \_abiCoder

> `readonly` **\_abiCoder**: [`AbiCoder`](AbiCoder.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/interface.d.ts:50

***

### \_isInterface

> `readonly` **\_isInterface**: `boolean`

#### Defined in

node\_modules/@ethersproject/abi/lib/interface.d.ts:51

***

### deploy

> `readonly` **deploy**: [`ConstructorFragment`](ConstructorFragment.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/interface.d.ts:49

***

### errors

> `readonly` **errors**: `object`

#### Index Signature

 \[`name`: `string`\]: [`ErrorFragment`](ErrorFragment.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/interface.d.ts:37

***

### events

> `readonly` **events**: `object`

#### Index Signature

 \[`name`: `string`\]: [`EventFragment`](EventFragment.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/interface.d.ts:40

***

### fragments

> `readonly` **fragments**: readonly [`Fragment`](Fragment.md)[]

#### Defined in

node\_modules/@ethersproject/abi/lib/interface.d.ts:36

***

### functions

> `readonly` **functions**: `object`

#### Index Signature

 \[`name`: `string`\]: [`FunctionFragment`](FunctionFragment.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/interface.d.ts:43

***

### structs

> `readonly` **structs**: `object`

#### Index Signature

 \[`name`: `string`\]: `any`

#### Defined in

node\_modules/@ethersproject/abi/lib/interface.d.ts:46

## Methods

### \_decodeParams()

> **\_decodeParams**(`params`, `data`): [`Result`](../interfaces/Result.md)

#### Parameters

• **params**: readonly [`ParamType`](ParamType.md)[]

• **data**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Result`](../interfaces/Result.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/interface.d.ts:63

***

### \_encodeParams()

> **\_encodeParams**(`params`, `values`): `string`

#### Parameters

• **params**: readonly [`ParamType`](ParamType.md)[]

• **values**: readonly `any`[]

#### Returns

`string`

#### Defined in

node\_modules/@ethersproject/abi/lib/interface.d.ts:64

***

### decodeErrorResult()

> **decodeErrorResult**(`fragment`, `data`): [`Result`](../interfaces/Result.md)

#### Parameters

• **fragment**: `string` \| [`ErrorFragment`](ErrorFragment.md)

• **data**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Result`](../interfaces/Result.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/interface.d.ts:66

***

### decodeEventLog()

> **decodeEventLog**(`eventFragment`, `data`, `topics`?): [`Result`](../interfaces/Result.md)

#### Parameters

• **eventFragment**: `string` \| [`EventFragment`](EventFragment.md)

• **data**: [`BytesLike`](../type-aliases/BytesLike.md)

• **topics?**: readonly `string`[]

#### Returns

[`Result`](../interfaces/Result.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/interface.d.ts:77

***

### decodeFunctionData()

> **decodeFunctionData**(`functionFragment`, `data`): [`Result`](../interfaces/Result.md)

#### Parameters

• **functionFragment**: `string` \| [`FunctionFragment`](FunctionFragment.md)

• **data**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Result`](../interfaces/Result.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/interface.d.ts:68

***

### decodeFunctionResult()

> **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](../interfaces/Result.md)

#### Parameters

• **functionFragment**: `string` \| [`FunctionFragment`](FunctionFragment.md)

• **data**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Result`](../interfaces/Result.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/interface.d.ts:70

***

### encodeDeploy()

> **encodeDeploy**(`values`?): `string`

#### Parameters

• **values?**: readonly `any`[]

#### Returns

`string`

#### Defined in

node\_modules/@ethersproject/abi/lib/interface.d.ts:65

***

### encodeErrorResult()

> **encodeErrorResult**(`fragment`, `values`?): `string`

#### Parameters

• **fragment**: `string` \| [`ErrorFragment`](ErrorFragment.md)

• **values?**: readonly `any`[]

#### Returns

`string`

#### Defined in

node\_modules/@ethersproject/abi/lib/interface.d.ts:67

***

### encodeEventLog()

> **encodeEventLog**(`eventFragment`, `values`): `object`

#### Parameters

• **eventFragment**: `string` \| [`EventFragment`](EventFragment.md)

• **values**: readonly `any`[]

#### Returns

`object`

##### data

> **data**: `string`

##### topics

> **topics**: `string`[]

#### Defined in

node\_modules/@ethersproject/abi/lib/interface.d.ts:73

***

### encodeFilterTopics()

> **encodeFilterTopics**(`eventFragment`, `values`): (`string` \| `string`[])[]

#### Parameters

• **eventFragment**: `string` \| [`EventFragment`](EventFragment.md)

• **values**: readonly `any`[]

#### Returns

(`string` \| `string`[])[]

#### Defined in

node\_modules/@ethersproject/abi/lib/interface.d.ts:72

***

### encodeFunctionData()

> **encodeFunctionData**(`functionFragment`, `values`?): `string`

#### Parameters

• **functionFragment**: `string` \| [`FunctionFragment`](FunctionFragment.md)

• **values?**: readonly `any`[]

#### Returns

`string`

#### Defined in

node\_modules/@ethersproject/abi/lib/interface.d.ts:69

***

### encodeFunctionResult()

> **encodeFunctionResult**(`functionFragment`, `values`?): `string`

#### Parameters

• **functionFragment**: `string` \| [`FunctionFragment`](FunctionFragment.md)

• **values?**: readonly `any`[]

#### Returns

`string`

#### Defined in

node\_modules/@ethersproject/abi/lib/interface.d.ts:71

***

### format()

> **format**(`format`?): `string` \| `string`[]

#### Parameters

• **format?**: `string`

#### Returns

`string` \| `string`[]

#### Defined in

node\_modules/@ethersproject/abi/lib/interface.d.ts:53

***

### getError()

> **getError**(`nameOrSignatureOrSighash`): [`ErrorFragment`](ErrorFragment.md)

#### Parameters

• **nameOrSignatureOrSighash**: `string`

#### Returns

[`ErrorFragment`](ErrorFragment.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/interface.d.ts:60

***

### getEvent()

> **getEvent**(`nameOrSignatureOrTopic`): [`EventFragment`](EventFragment.md)

#### Parameters

• **nameOrSignatureOrTopic**: `string`

#### Returns

[`EventFragment`](EventFragment.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/interface.d.ts:59

***

### getEventTopic()

> **getEventTopic**(`eventFragment`): `string`

#### Parameters

• **eventFragment**: `string` \| [`EventFragment`](EventFragment.md)

#### Returns

`string`

#### Defined in

node\_modules/@ethersproject/abi/lib/interface.d.ts:62

***

### getFunction()

> **getFunction**(`nameOrSignatureOrSighash`): [`FunctionFragment`](FunctionFragment.md)

#### Parameters

• **nameOrSignatureOrSighash**: `string`

#### Returns

[`FunctionFragment`](FunctionFragment.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/interface.d.ts:58

***

### getSighash()

> **getSighash**(`fragment`): `string`

#### Parameters

• **fragment**: `string` \| [`ErrorFragment`](ErrorFragment.md) \| [`FunctionFragment`](FunctionFragment.md)

#### Returns

`string`

#### Defined in

node\_modules/@ethersproject/abi/lib/interface.d.ts:61

***

### parseError()

> **parseError**(`data`): [`ErrorDescription`](ErrorDescription.md)

#### Parameters

• **data**: [`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`ErrorDescription`](ErrorDescription.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/interface.d.ts:86

***

### parseLog()

> **parseLog**(`log`): [`LogDescription`](LogDescription.md)

#### Parameters

• **log**

• **log.data**: `string`

• **log.topics**: `string`[]

#### Returns

[`LogDescription`](LogDescription.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/interface.d.ts:82

***

### parseTransaction()

> **parseTransaction**(`tx`): [`TransactionDescription`](TransactionDescription.md)

#### Parameters

• **tx**

• **tx.data**: `string`

• **tx.value?**: [`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`TransactionDescription`](TransactionDescription.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/interface.d.ts:78

***

### getAbiCoder()

> `static` **getAbiCoder**(): [`AbiCoder`](AbiCoder.md)

#### Returns

[`AbiCoder`](AbiCoder.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/interface.d.ts:54

***

### getAddress()

> `static` **getAddress**(`address`): `string`

#### Parameters

• **address**: `string`

#### Returns

`string`

#### Defined in

node\_modules/@ethersproject/abi/lib/interface.d.ts:55

***

### getEventTopic()

> `static` **getEventTopic**(`eventFragment`): `string`

#### Parameters

• **eventFragment**: [`EventFragment`](EventFragment.md)

#### Returns

`string`

#### Defined in

node\_modules/@ethersproject/abi/lib/interface.d.ts:57

***

### getSighash()

> `static` **getSighash**(`fragment`): `string`

#### Parameters

• **fragment**: [`ErrorFragment`](ErrorFragment.md) \| [`FunctionFragment`](FunctionFragment.md)

#### Returns

`string`

#### Defined in

node\_modules/@ethersproject/abi/lib/interface.d.ts:56

***

### isInterface()

> `static` **isInterface**(`value`): `value is Interface`

#### Parameters

• **value**: `any`

#### Returns

`value is Interface`

#### Defined in

node\_modules/@ethersproject/abi/lib/interface.d.ts:87
