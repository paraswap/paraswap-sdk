[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / ConstructorFragment

# Class: ConstructorFragment

## Extends

- [`Fragment`](Fragment.md)

## Extended by

- [`FunctionFragment`](FunctionFragment.md)

## Constructors

### new ConstructorFragment()

> **new ConstructorFragment**(`constructorGuard`, `params`): [`ConstructorFragment`](ConstructorFragment.md)

#### Parameters

• **constructorGuard**: `any`

• **params**: `any`

#### Returns

[`ConstructorFragment`](ConstructorFragment.md)

#### Inherited from

[`Fragment`](Fragment.md).[`constructor`](Fragment.md#constructors)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:44

## Properties

### \_isFragment

> `readonly` **\_isFragment**: `boolean`

#### Inherited from

[`Fragment`](Fragment.md).[`_isFragment`](Fragment.md#_isfragment)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:43

***

### gas?

> `optional` **gas**: [`BigNumber`](BigNumber.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:62

***

### inputs

> `readonly` **inputs**: [`ParamType`](ParamType.md)[]

#### Inherited from

[`Fragment`](Fragment.md).[`inputs`](Fragment.md#inputs-1)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:42

***

### name

> `readonly` **name**: `string`

#### Inherited from

[`Fragment`](Fragment.md).[`name`](Fragment.md#name)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:41

***

### payable

> **payable**: `boolean`

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:61

***

### stateMutability

> **stateMutability**: `string`

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:60

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`Fragment`](Fragment.md).[`type`](Fragment.md#type-1)

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

[`Fragment`](Fragment.md).[`format`](Fragment.md#format-1)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:63

***

### from()

> `static` **from**(`value`): [`ConstructorFragment`](ConstructorFragment.md)

#### Parameters

• **value**: `string` \| [`JsonFragment`](../interfaces/JsonFragment.md) \| [`ConstructorFragment`](ConstructorFragment.md)

#### Returns

[`ConstructorFragment`](ConstructorFragment.md)

#### Overrides

[`Fragment`](Fragment.md).[`from`](Fragment.md#from-1)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:64

***

### fromObject()

> `static` **fromObject**(`value`): [`ConstructorFragment`](ConstructorFragment.md)

#### Parameters

• **value**: [`JsonFragment`](../interfaces/JsonFragment.md) \| [`ConstructorFragment`](ConstructorFragment.md)

#### Returns

[`ConstructorFragment`](ConstructorFragment.md)

#### Overrides

[`Fragment`](Fragment.md).[`fromObject`](Fragment.md#fromobject)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:65

***

### fromString()

> `static` **fromString**(`value`): [`ConstructorFragment`](ConstructorFragment.md)

#### Parameters

• **value**: `string`

#### Returns

[`ConstructorFragment`](ConstructorFragment.md)

#### Overrides

[`Fragment`](Fragment.md).[`fromString`](Fragment.md#fromstring)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:66

***

### isConstructorFragment()

> `static` **isConstructorFragment**(`value`): `value is ConstructorFragment`

#### Parameters

• **value**: `any`

#### Returns

`value is ConstructorFragment`

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

[`Fragment`](Fragment.md).[`isFragment`](Fragment.md#isfragment)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:49
