[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / EventFragment

# Class: EventFragment

## Extends

- [`Fragment`](Fragment.md)

## Constructors

### new EventFragment()

> **new EventFragment**(`constructorGuard`, `params`): [`EventFragment`](EventFragment.md)

#### Parameters

• **constructorGuard**: `any`

• **params**: `any`

#### Returns

[`EventFragment`](EventFragment.md)

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

### anonymous

> `readonly` **anonymous**: `boolean`

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:52

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

node\_modules/@ethersproject/abi/lib/fragments.d.ts:53

***

### from()

> `static` **from**(`value`): [`EventFragment`](EventFragment.md)

#### Parameters

• **value**: `string` \| [`JsonFragment`](../interfaces/JsonFragment.md) \| [`EventFragment`](EventFragment.md)

#### Returns

[`EventFragment`](EventFragment.md)

#### Overrides

[`Fragment`](Fragment.md).[`from`](Fragment.md#from-1)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:54

***

### fromObject()

> `static` **fromObject**(`value`): [`EventFragment`](EventFragment.md)

#### Parameters

• **value**: [`JsonFragment`](../interfaces/JsonFragment.md) \| [`EventFragment`](EventFragment.md)

#### Returns

[`EventFragment`](EventFragment.md)

#### Overrides

[`Fragment`](Fragment.md).[`fromObject`](Fragment.md#fromobject)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:55

***

### fromString()

> `static` **fromString**(`value`): [`EventFragment`](EventFragment.md)

#### Parameters

• **value**: `string`

#### Returns

[`EventFragment`](EventFragment.md)

#### Overrides

[`Fragment`](Fragment.md).[`fromString`](Fragment.md#fromstring)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:56

***

### isEventFragment()

> `static` **isEventFragment**(`value`): `value is EventFragment`

#### Parameters

• **value**: `any`

#### Returns

`value is EventFragment`

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:57

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
