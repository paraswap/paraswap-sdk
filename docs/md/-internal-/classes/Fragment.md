[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / Fragment

# Class: `abstract` Fragment

## Extended by

- [`ErrorFragment`](ErrorFragment.md)
- [`EventFragment`](EventFragment.md)
- [`ConstructorFragment`](ConstructorFragment.md)

## Constructors

### new Fragment()

> **new Fragment**(`constructorGuard`, `params`): [`Fragment`](Fragment.md)

#### Parameters

• **constructorGuard**: `any`

• **params**: `any`

#### Returns

[`Fragment`](Fragment.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:44

## Properties

### \_isFragment

> `readonly` **\_isFragment**: `boolean`

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:43

***

### inputs

> `readonly` **inputs**: [`ParamType`](ParamType.md)[]

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:42

***

### name

> `readonly` **name**: `string`

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:41

***

### type

> `readonly` **type**: `string`

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:40

## Methods

### format()

> `abstract` **format**(`format`?): `string`

#### Parameters

• **format?**: `string`

#### Returns

`string`

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:45

***

### from()

> `static` **from**(`value`): [`Fragment`](Fragment.md)

#### Parameters

• **value**: `string` \| [`Fragment`](Fragment.md) \| [`JsonFragment`](../interfaces/JsonFragment.md)

#### Returns

[`Fragment`](Fragment.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:46

***

### fromObject()

> `static` **fromObject**(`value`): [`Fragment`](Fragment.md)

#### Parameters

• **value**: [`Fragment`](Fragment.md) \| [`JsonFragment`](../interfaces/JsonFragment.md)

#### Returns

[`Fragment`](Fragment.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:47

***

### fromString()

> `static` **fromString**(`value`): [`Fragment`](Fragment.md)

#### Parameters

• **value**: `string`

#### Returns

[`Fragment`](Fragment.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:48

***

### isFragment()

> `static` **isFragment**(`value`): `value is Fragment`

#### Parameters

• **value**: `any`

#### Returns

`value is Fragment`

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:49
