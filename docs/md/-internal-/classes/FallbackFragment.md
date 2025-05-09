[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / FallbackFragment

# Class: FallbackFragment

A Fragment which represents a method.

## Extends

- [`Fragment`](Fragment.md)

## Constructors

### new FallbackFragment()

> **new FallbackFragment**(`guard`, `inputs`, `payable`): [`FallbackFragment`](FallbackFragment.md)

#### Parameters

• **guard**: `any`

• **inputs**: readonly [`ParamType`](ParamType.md)[]

• **payable**: `boolean`

#### Returns

[`FallbackFragment`](FallbackFragment.md)

#### Overrides

`Fragment.constructor`

#### Defined in

node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:378

## Properties

### inputs

> `readonly` **inputs**: readonly [`ParamType`](ParamType.md)[]

The inputs for the fragment.

#### Inherited from

[`Fragment`](Fragment.md).[`inputs`](Fragment.md#inputs)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:231

***

### payable

> `readonly` **payable**: `boolean`

If the function can be sent value during invocation.

#### Defined in

node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:377

***

### type

> `readonly` **type**: [`FragmentType`](../type-aliases/FragmentType.md)

The type of the fragment.

#### Inherited from

[`Fragment`](Fragment.md).[`type`](Fragment.md#type)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:227

## Methods

### format()

> **format**(`format`?): `string`

Returns a string representation of this fallback as %%format%%.

#### Parameters

• **format?**: [`FormatType`](../type-aliases/FormatType.md)

#### Returns

`string`

#### Overrides

[`Fragment`](Fragment.md).[`format`](Fragment.md#format)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:382

***

### from()

> `static` **from**(`obj`): [`FallbackFragment`](FallbackFragment.md)

Returns a new **FallbackFragment** for %%obj%%.

#### Parameters

• **obj**: `any`

#### Returns

[`FallbackFragment`](FallbackFragment.md)

#### Overrides

[`Fragment`](Fragment.md).[`from`](Fragment.md#from)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:386

***

### isConstructor()

> `static` **isConstructor**(`value`): `value is ConstructorFragment`

Returns true if %%value%% is a [[ConstructorFragment]].

#### Parameters

• **value**: `any`

#### Returns

`value is ConstructorFragment`

#### Inherited from

[`Fragment`](Fragment.md).[`isConstructor`](Fragment.md#isconstructor)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:248

***

### isError()

> `static` **isError**(`value`): `value is ErrorFragment`

Returns true if %%value%% is an [[ErrorFragment]].

#### Parameters

• **value**: `any`

#### Returns

`value is ErrorFragment`

#### Inherited from

[`Fragment`](Fragment.md).[`isError`](Fragment.md#iserror)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:252

***

### isEvent()

> `static` **isEvent**(`value`): `value is EventFragment`

Returns true if %%value%% is an [[EventFragment]].

#### Parameters

• **value**: `any`

#### Returns

`value is EventFragment`

#### Inherited from

[`Fragment`](Fragment.md).[`isEvent`](Fragment.md#isevent)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:256

***

### isFragment()

> `static` **isFragment**(`value`): `value is FallbackFragment`

Returns ``true`` and provides a type guard if %%value%% is a
 **FallbackFragment**.

#### Parameters

• **value**: `any`

#### Returns

`value is FallbackFragment`

#### Defined in

node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:391

***

### isFunction()

> `static` **isFunction**(`value`): `value is FunctionFragment`

Returns true if %%value%% is a [[FunctionFragment]].

#### Parameters

• **value**: `any`

#### Returns

`value is FunctionFragment`

#### Inherited from

[`Fragment`](Fragment.md).[`isFunction`](Fragment.md#isfunction)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:260

***

### isStruct()

> `static` **isStruct**(`value`): `value is StructFragment`

Returns true if %%value%% is a [[StructFragment]].

#### Parameters

• **value**: `any`

#### Returns

`value is StructFragment`

#### Inherited from

[`Fragment`](Fragment.md).[`isStruct`](Fragment.md#isstruct)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:264
