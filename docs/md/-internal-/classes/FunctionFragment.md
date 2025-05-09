[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / FunctionFragment

# Class: FunctionFragment

## Extends

- [`ConstructorFragment`](ConstructorFragment.md)

## Constructors

### new FunctionFragment()

> **new FunctionFragment**(`constructorGuard`, `params`): [`FunctionFragment`](FunctionFragment.md)

#### Parameters

• **constructorGuard**: `any`

• **params**: `any`

#### Returns

[`FunctionFragment`](FunctionFragment.md)

#### Inherited from

[`ConstructorFragment`](ConstructorFragment.md).[`constructor`](ConstructorFragment.md#constructors)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:44

## Properties

### \_isFragment

> `readonly` **\_isFragment**: `boolean`

#### Inherited from

[`ConstructorFragment`](ConstructorFragment.md).[`_isFragment`](ConstructorFragment.md#_isfragment)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:43

***

### constant

> **constant**: `boolean`

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:70

***

### gas?

> `optional` **gas**: [`BigNumber`](BigNumber.md)

#### Inherited from

[`ConstructorFragment`](ConstructorFragment.md).[`gas`](ConstructorFragment.md#gas-1)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:62

***

### inputs

> `readonly` **inputs**: [`ParamType`](ParamType.md)[]

#### Inherited from

[`ConstructorFragment`](ConstructorFragment.md).[`inputs`](ConstructorFragment.md#inputs-1)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:42

***

### name

> `readonly` **name**: `string`

#### Inherited from

[`ConstructorFragment`](ConstructorFragment.md).[`name`](ConstructorFragment.md#name)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:41

***

### outputs?

> `optional` **outputs**: [`ParamType`](ParamType.md)[]

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:71

***

### payable

> **payable**: `boolean`

#### Inherited from

[`ConstructorFragment`](ConstructorFragment.md).[`payable`](ConstructorFragment.md#payable-1)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:61

***

### stateMutability

> **stateMutability**: `string`

#### Inherited from

[`ConstructorFragment`](ConstructorFragment.md).[`stateMutability`](ConstructorFragment.md#statemutability)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:60

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`ConstructorFragment`](ConstructorFragment.md).[`type`](ConstructorFragment.md#type-1)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:40

## Methods

### format()

> **format**(`format`?): `string`

#### Parameters

• **format?**: `string`

#### Returns

`string`

#### Overrides

[`ConstructorFragment`](ConstructorFragment.md).[`format`](ConstructorFragment.md#format-1)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:72

***

### from()

> `static` **from**(`value`): [`FunctionFragment`](FunctionFragment.md)

#### Parameters

• **value**: `string` \| [`JsonFragment`](../interfaces/JsonFragment.md) \| [`FunctionFragment`](FunctionFragment.md)

#### Returns

[`FunctionFragment`](FunctionFragment.md)

#### Overrides

[`ConstructorFragment`](ConstructorFragment.md).[`from`](ConstructorFragment.md#from-1)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:73

***

### fromObject()

> `static` **fromObject**(`value`): [`FunctionFragment`](FunctionFragment.md)

#### Parameters

• **value**: [`JsonFragment`](../interfaces/JsonFragment.md) \| [`FunctionFragment`](FunctionFragment.md)

#### Returns

[`FunctionFragment`](FunctionFragment.md)

#### Overrides

[`ConstructorFragment`](ConstructorFragment.md).[`fromObject`](ConstructorFragment.md#fromobject)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:74

***

### fromString()

> `static` **fromString**(`value`): [`FunctionFragment`](FunctionFragment.md)

#### Parameters

• **value**: `string`

#### Returns

[`FunctionFragment`](FunctionFragment.md)

#### Overrides

[`ConstructorFragment`](ConstructorFragment.md).[`fromString`](ConstructorFragment.md#fromstring)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:75

***

### isConstructorFragment()

> `static` **isConstructorFragment**(`value`): `value is ConstructorFragment`

#### Parameters

• **value**: `any`

#### Returns

`value is ConstructorFragment`

#### Inherited from

[`ConstructorFragment`](ConstructorFragment.md).[`isConstructorFragment`](ConstructorFragment.md#isconstructorfragment)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:67

***

### isFragment()

> `static` **isFragment**(`value`): `value is Fragment`

#### Parameters

• **value**: `any`

#### Returns

`value is Fragment`

#### Inherited from

[`ConstructorFragment`](ConstructorFragment.md).[`isFragment`](ConstructorFragment.md#isfragment-1)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:49

***

### isFunctionFragment()

> `static` **isFunctionFragment**(`value`): `value is FunctionFragment`

#### Parameters

• **value**: `any`

#### Returns

`value is FunctionFragment`

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:76
