[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / StructFragment

# Class: StructFragment

A Fragment which represents a structure.

## Extends

- [`NamedFragment`](NamedFragment.md)

## Properties

### inputs

> `readonly` **inputs**: readonly [`ParamType`](ParamType.md)[]

The inputs for the fragment.

#### Inherited from

[`NamedFragment`](NamedFragment.md).[`inputs`](NamedFragment.md#inputs)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:231

***

### name

> `readonly` **name**: `string`

The name of the fragment.

#### Inherited from

[`NamedFragment`](NamedFragment.md).[`name`](NamedFragment.md#name)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:274

***

### type

> `readonly` **type**: [`FragmentType`](../type-aliases/FragmentType.md)

The type of the fragment.

#### Inherited from

[`NamedFragment`](NamedFragment.md).[`type`](NamedFragment.md#type)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:227

## Methods

### format()

> **format**(): `string`

Returns a string representation of this struct as %%format%%.

#### Returns

`string`

#### Overrides

[`NamedFragment`](NamedFragment.md).[`format`](NamedFragment.md#format)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:455

***

### from()

> `static` **from**(`obj`): [`StructFragment`](StructFragment.md)

Returns a new **StructFragment** for %%obj%%.

#### Parameters

• **obj**: `any`

#### Returns

[`StructFragment`](StructFragment.md)

#### Overrides

[`NamedFragment`](NamedFragment.md).[`from`](NamedFragment.md#from)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:459

***

### isConstructor()

> `static` **isConstructor**(`value`): `value is ConstructorFragment`

Returns true if %%value%% is a [[ConstructorFragment]].

#### Parameters

• **value**: `any`

#### Returns

`value is ConstructorFragment`

#### Inherited from

[`NamedFragment`](NamedFragment.md).[`isConstructor`](NamedFragment.md#isconstructor)

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

[`NamedFragment`](NamedFragment.md).[`isError`](NamedFragment.md#iserror)

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

[`NamedFragment`](NamedFragment.md).[`isEvent`](NamedFragment.md#isevent)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:256

***

### isFragment()

> `static` **isFragment**(`value`): `value is FunctionFragment`

Returns ``true`` and provides a type guard if %%value%% is a
 **StructFragment**.

#### Parameters

• **value**: `any`

#### Returns

`value is FunctionFragment`

#### Defined in

node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:464

***

### isFunction()

> `static` **isFunction**(`value`): `value is FunctionFragment`

Returns true if %%value%% is a [[FunctionFragment]].

#### Parameters

• **value**: `any`

#### Returns

`value is FunctionFragment`

#### Inherited from

[`NamedFragment`](NamedFragment.md).[`isFunction`](NamedFragment.md#isfunction)

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

[`NamedFragment`](NamedFragment.md).[`isStruct`](NamedFragment.md#isstruct)

#### Defined in

node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:264
