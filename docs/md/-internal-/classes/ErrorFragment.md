[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / ErrorFragment

# Class: ErrorFragment

## Extends

- [`Fragment`](Fragment.md)

## Constructors

### new ErrorFragment()

> **new ErrorFragment**(`constructorGuard`, `params`): [`ErrorFragment`](ErrorFragment.md)

#### Parameters

• **constructorGuard**: `any`

• **params**: `any`

#### Returns

[`ErrorFragment`](ErrorFragment.md)

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

node\_modules/@ethersproject/abi/lib/fragments.d.ts:79

***

### from()

> `static` **from**(`value`): [`ErrorFragment`](ErrorFragment.md)

#### Parameters

• **value**: `string` \| [`JsonFragment`](../interfaces/JsonFragment.md) \| [`ErrorFragment`](ErrorFragment.md)

#### Returns

[`ErrorFragment`](ErrorFragment.md)

#### Overrides

[`Fragment`](Fragment.md).[`from`](Fragment.md#from-1)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:80

***

### fromObject()

> `static` **fromObject**(`value`): [`ErrorFragment`](ErrorFragment.md)

#### Parameters

• **value**: [`JsonFragment`](../interfaces/JsonFragment.md) \| [`ErrorFragment`](ErrorFragment.md)

#### Returns

[`ErrorFragment`](ErrorFragment.md)

#### Overrides

[`Fragment`](Fragment.md).[`fromObject`](Fragment.md#fromobject)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:81

***

### fromString()

> `static` **fromString**(`value`): [`ErrorFragment`](ErrorFragment.md)

#### Parameters

• **value**: `string`

#### Returns

[`ErrorFragment`](ErrorFragment.md)

#### Overrides

[`Fragment`](Fragment.md).[`fromString`](Fragment.md#fromstring)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:82

***

### isErrorFragment()

> `static` **isErrorFragment**(`value`): `value is ErrorFragment`

#### Parameters

• **value**: `any`

#### Returns

`value is ErrorFragment`

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:83

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
