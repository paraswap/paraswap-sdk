[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ParamType

# Class: ParamType

## Constructors

### new ParamType()

> **new ParamType**(`constructorGuard`, `params`): [`ParamType`](ParamType.md)

#### Parameters

• **constructorGuard**: `any`

• **params**: `any`

#### Returns

[`ParamType`](ParamType.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:32

## Properties

### \_isParamType

> `readonly` **\_isParamType**: `boolean`

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:31

***

### arrayChildren

> `readonly` **arrayChildren**: [`ParamType`](ParamType.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:30

***

### arrayLength

> `readonly` **arrayLength**: `number`

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:29

***

### baseType

> `readonly` **baseType**: `string`

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:26

***

### components

> `readonly` **components**: [`ParamType`](ParamType.md)[]

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:28

***

### indexed

> `readonly` **indexed**: `boolean`

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:27

***

### name

> `readonly` **name**: `string`

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:24

***

### type

> `readonly` **type**: `string`

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:25

## Methods

### format()

> **format**(`format`?): `string`

#### Parameters

• **format?**: `string`

#### Returns

`string`

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:33

***

### from()

> `static` **from**(`value`, `allowIndexed`?): [`ParamType`](ParamType.md)

#### Parameters

• **value**: `string` \| [`JsonFragmentType`](../interfaces/JsonFragmentType.md) \| [`ParamType`](ParamType.md)

• **allowIndexed?**: `boolean`

#### Returns

[`ParamType`](ParamType.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:34

***

### fromObject()

> `static` **fromObject**(`value`): [`ParamType`](ParamType.md)

#### Parameters

• **value**: [`JsonFragmentType`](../interfaces/JsonFragmentType.md) \| [`ParamType`](ParamType.md)

#### Returns

[`ParamType`](ParamType.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:35

***

### fromString()

> `static` **fromString**(`value`, `allowIndexed`?): [`ParamType`](ParamType.md)

#### Parameters

• **value**: `string`

• **allowIndexed?**: `boolean`

#### Returns

[`ParamType`](ParamType.md)

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:36

***

### isParamType()

> `static` **isParamType**(`value`): `value is ParamType`

#### Parameters

• **value**: `any`

#### Returns

`value is ParamType`

#### Defined in

node\_modules/@ethersproject/abi/lib/fragments.d.ts:37
